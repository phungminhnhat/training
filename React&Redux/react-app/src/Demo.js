import React from 'react';
import {createStore} from 'redux';


class Demo extends React.Component{
  constructor(props){
    super(props);
    this.state = {
          txtUsername : '',
          txtPassword: ''
    };
    this.onHandleChange = this.onHandleChange.bind(this);
    this.onHandleSubmit = this.onHandleSubmit.bind(this);

  }  
  
  onHandleChange(event){
    const target = event.target;
    const name = target.name;
    const value = target.value;
    this.setState({
      [name] : value
    });
  }
  onHandleSubmit(event){
    event.preventDefault();
    console.log(this.state)
  }
  
  render(){
        return(
              <div>
                <nav className="navbar navbar-expand-lg navcorlor ">
                  <a className="navbar-brand"  >Home</a>
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                  </button>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                      <li className="nav-item active">
                        <a className="nav-link"  >Trang Chủ</a>
                      </li>
                      <li className="nav-item active">
                        <a className="nav-link"  >Sản Phẩm</a>
                      </li>
                      <li className="nav-item active">
                        <a className="nav-link"  >Đăng Kí</a>
                      </li>
                      <li className="nav-item active">
                        <a className="nav-link"  >Đăng Nhập</a>
                      </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                  </div>
                </nav>
                <div className="container">
                  <div className="row">
                    <div className="col-sm-6">
                      <form onSubmit={this.onHandleSubmit}>
                        <div className="form-group">
                          <label htmlFor="exampleInputEmail1">Username</label>
                          <input type="text" className="form-control" name="txtUsername" onChange={this.onHandleChange} />
                        </div>
                        <div className="form-group">
                          <label htmlFor="exampleInputPassword1">Password</label>
                          <input type="password" className="form-control" name="txtPassword" onChange={this.onHandleChange} />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                      </form>
                    </div>
                  </div>
                </div>

              </div>
        )
    }
}

export default Demo;
