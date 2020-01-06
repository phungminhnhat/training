
// Hàm này nằm ở ngoài Component ...
// xuất ra thông báo là giá trị name sẽ truyền vào khi gọi hàm ra...
function getName(name) {
    alert(name);
}
/*
    Tạo Component Danhsach...
    Có thể gọi props và props children ngay tại phần render
*/
class Danhsach extends React.Component{

    //   Hàm này là hàm State 
    constructor(props){
        super(props);
        //dòng này thay cho : this.getInfo.bind(this) 
        this.getInfo=this.getInfo.bind(this);

        this.add = this.add.bind(this);
        this.add2 = this.add2.bind(this);

        this.state={
            tongdanhsach: this.props.tongdanhsach
        }
    };
    
    // Hàm add này dùng để giảm 1
    add(){
    this.state.tongdanhsach = parseInt(this.state.tongdanhsach) - 1 ;
    this.setState(this.state)
}
    // tăng 1
    add2(){
        this.state.tongdanhsach = parseInt(this.state.tongdanhsach) + 1 ;
        this.setState(this.state)
    }


    //    Hàm này sẽ hiện ra một thông báo .. nội dung là lấy phần children 
    getInfo() {
        alert(this.props.children);
      };
     

    // hamState(e){
    //    this.setState({tongdanhsach:e.target.value});
    // } 
      
    render() {
        return (
            <div>
               

            {/* Phần này test thuộc tính state
                Nếu ở phần Render không khai báo props tongdanhsach thì ở phần
                constructor this.state ={10} luôn.
             */}
            <div>Tổng danh sách : {this.state.tongdanhsach} </div>
             <button onClick={this.add}>Giảm số người</button>
             <button onClick={this.add2}>Tăng số người</button>
            </div>
        );
    };
 
};

/* 
Tạo 1 component Sản Phẩm..Component này có thể lồng vào component khác,
ví dụ như lồng Sanpham vào cpnent Danhsach
*/
class Sanpham extends React.Component{
    render(){
        return(
            <div>
                
            </div>
        )
    }
}

/*  Tạo 1 Component inputTag

 */
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
            <button onClick={this.state.sayings}>Hiển thị</button>
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


/* In giá trị ra màn hình...
Thao tác ở đây sẽ hiện ra trên Chrome
*/
ReactDOM.render(
    <div>
       
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


    