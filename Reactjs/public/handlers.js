

function getName(name) {
    alert(name);
}

class Them extends React.Component{
    constructor(props) {
        super(props);
        this.state = {number : 0} 
        this.add = this.add.bind(this);
    }
    
    add(){
        this.setState({number : this.state.number +1});
    }
    render() {
        return (
            <div>
                <button className="hihi" onClick={this.add}>Thêm {this.state.number}</button>
            </div>
        );
    }
};

class AutoThayImage extends React.Component{
    constructor(props) {
        super(props);
        this.changeImage= this.changeImage.bind(this)
        this.state = {
            hinh : 1
        }
    }
    changeImage(){
        this.setState({hinh:(this.state.hinh %5) +1})
    }
    componentDidMount(){
        setInterval(this.changeImage, 1500)
    }
    render() {
        return (
            <div className="album">
                <h1>Tự động chuyển ảnh </h1>
               <img className="hinh" src={"img/"+ this.state.hinh + ".jpg"}></img>
              <h1> {this.state.hinh}</h1>
               
            </div>
        );
    }
   
}

class Album extends React.Component{ 
    constructor(props) {
        super(props);
        this.Next=this.Next.bind(this)
        this.Back=this.Back.bind(this)
        this.state = {
            hinh : 5    
        }
    }  
    Next(){
        this.setState({hinh: (this.state.hinh % 5) +1})
    }
    Back(){
        this.setState({hinh: this.state.hinh == 1?1: this.state.hinh  -1})
    }
    
    render() {
            return (
                <div className="album">
                <h1>Đổi hình</h1>
                <img className="hinh" src={"img/"+this.state.hinh+".jpg"}/>
                <br/> 
                <button onClick={this.Back}>quay lại</button>
                <button onClick={this.Next}>tiếp theo</button>
                </div>
            );
        }
}

class Danhsach extends React.Component{

    constructor(props){
        super(props);
     
        this.getInfo=this.getInfo.bind(this);

        this.add = this.add.bind(this);
        this.add2 = this.add2.bind(this);

        this.state={
            tongdanhsach: this.props.tongdanhsach
        }
    };
    
    //giảm 1
    add(){
    this.state.tongdanhsach = parseInt(this.state.tongdanhsach) - 1 ;
    this.setState(this.state)
}
    // tăng 1
    add2(){
        this.state.tongdanhsach = parseInt(this.state.tongdanhsach) + 1 ;
        this.setState(this.state)
    }
    getInfo() {
        alert(this.props.children);
      };

      
    render() {
        return (
            <div>
            <div>Tổng danh sách : {this.state.tongdanhsach} </div>
             <button onClick={this.add}>Giảm số người</button>
             <button onClick={this.add2}>Tăng số người</button>
            </div>
        );
    };
 
};

class Sanpham extends React.Component{
    render(){
        return(
            <div>
                
            </div>
        )
    }
}

class InputTag extends React.Component{
    constructor(props) {
        super(props);
        this.showTag=this.showTag.bind(this);     
    }
    showTag(){
        var text = this.textInput.value;
        alert(text);
    }
    render() {
        return (
            <div>
                
                <input type="text" ref={(input) => { this.textInput = input; }}></input>
                <button onClick={this.showTag}>Hiển thị</button>
                <h1>{this.textInput}</h1>
            </div>
        );
    }
}
 class Refs extends React.Component {
    constructor() {
        super();
        this.state = {sayings: "" };
      }
      update(e) {
        this.setState({sayings: this.refs.btalks.value});
      }
    
      render() {
        return (
          <div>
            Bob says <input type="text" ref="btalks" onChange={this.update.bind(this)} />
            {this.state.sayings}
          </div>
          
          
        );
      }
 }
 
class Select extends React.Component {
    constructor(props){
        super(props);
        this.state = {value: 'coconut'};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({value: event.target.value});
    }

    handleSubmit(event){
        alert('Your favorite flavor is: ' + this.state.value);
        event.prevenDefault();
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    Xuất ra :
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value='grape'>Grape</option>
                        <option value='lychee'>Lychee</option>
                        <option value='durian'>Durian</option>
                        <option value='mango'>Mango</option>
                        <option value='coconut'>Coconut</option>
                    </select>
                </label>
                <input type='submit' value='Submit' />
            </form>
        );
    }
}

class Test extends React.Component {

    addProduct(){
        alert(this.refs.hura.value);
    }
    render() {
        return (
            <div>
                <input type="text" ref="hura"></input>
                <button onClick={this.addProduct.bind(this)}>Lưu</button>
            </div>
        );
    }
}

ReactDOM.render(
    <div>
        <Them/>
        <Album />
        <AutoThayImage/>
        <Danhsach ten="Giá rẻ" tongdanhsach="10">Props Children</Danhsach>
        <h1></h1>
     
        <Sanpham tongdanhsach="20"></Sanpham>
        <h1></h1>
        <InputTag ></InputTag>
        <Refs />
        <h1></h1>
        <Select />
        <h1></h1>
        <Test />

    </div>
    , document.getElementById("root"));


    