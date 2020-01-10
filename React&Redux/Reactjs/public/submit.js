function addDiv() {
    ReactDOM.render(<Input/>,document.getElementById("div-add"))
}
class Note extends React.Component{
    render(){
        return(
            <div className="note">
                {this.props.children}
            </div>
        );
    }
};
class List extends React.Component{
     
    constructor(props){
        super(props);
        this.state = {mang: ["hihi","haha","hoho","huhu",1,2,3]}
    }

    render(){
         return(
             <div className="list">
                 <div id="div-add"></div>
               <button onClick={addDiv}> Them</button>
               {  this.state.mang.map(function(note,index){
            return <Note key={index}>{note}</Note>})}
                 </div>
         )
     }

};
class Input extends React.Component{
    // constructor(props){
    //     super(props);
    //     this.state = send.props.bind(this)
    // }
    // send(){

    // }
    render(){
        return(
            <div>
                <input type="text" ref="txt" placeholder="Enter your note!"></input>
                <button >Gui</button>
            </div>
        )
    }
}
ReactDOM.render(
    <div>
        <List/>
        <Input/>
    </div>,
    document.getElementById('root')
);