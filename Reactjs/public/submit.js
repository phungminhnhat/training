
var list; 

class Note extends React.Component{
    constructor(props) {
        super(props);
        this.delete=this.delete.bind(this)
        this.edit=this.edit.bind(this)
        this.save=this.save.bind(this)
        this.cancel=this.cancel.bind(this)
        this.state={
            onEdit : false
        }
    }
    delete(){
        $.post('/delete',{idXoa : this.props.id},function(data){
            list.setState({mang:data });
        });
    }
    edit(){
        this.setState({onEdit : true});
    }
    save(){
        var note=this;
        $.post('/update',{idSua:this.props.id,noidung:this.refs.txt.value},function(data){
            list.setState({mang: data});
            note.setState({onEdit:false});
        });
    }
    cancel(){
        this.setState({onEdit:false});
    }
render() {
    if(this.state.onEdit){
        return(
            <div className="note">
             <input ref="txt" defaultValue={this.props.children} />
                <button className="button" onClick={this.save}>Lưu</button>
                <button className="button" onClick={this.cancel}>Hủy</button>
            </div>
        )
    }else{
        return (
            <div className="note">
             <p>{this.props.children}</p>
                <button className="button" onClick={this.delete}>Xóa</button>
                <button className="button" onClick={this.edit}>Sửa</button>
            </div>
        );
    }
    
}
};
class List extends React.Component{
    constructor(props) {
        super(props);
        list=this
        this.add=this.add.bind(this)
        this.getState=this.getState.bind(this)
        this.state={mang:[]}
    }
    
    getState(){
        
        this.setState({mang : this.state.mang});
    }
    add(){
        ReactDOM.render(
            <InputText></InputText>
            ,
            document.getElementById('add-div')
        )
    }
    render() {
        return (
            <div className="list">
                <button onClick={this.add}>Thêm</button>
                <div id="add-div"></div>
                {
                    this.state.mang.map(function(note,index){
                        return <Note key={index} id={index}>{note}</Note>
                        
                    })
                }
                
            </div>
        );
    };

    componentDidMount(){
        $.post('/getNote',function(data){
            list.setState({mang : data});
        });
    };

    };

class InputText extends React.Component{
    constructor(props) {
        super(props);
        
        this.sendNote=this.sendNote.bind(this)
    }
    sendNote(){
        $.post("/add",{note : this.refs.txt.value},function(data){
            list.setState({mang : data})
        });

        ReactDOM.unmountComponentAtNode(document.getElementById('add-div'))
    }
    render() {
        return (
            <div>
                <input type="text" ref="txt" placeholder="Ghi note vào đây !!"></input>
                <button onClick={this.sendNote}>Gửi Note</button>
            </div>
        );
    }
}


ReactDOM.render(   
    <div>
        
        <List></List>
    </div>
, 
document.getElementById("root")
);