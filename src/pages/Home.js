import React, { Fragment, Component } from 'react';
import MemberItemList from "../components/MemberItemList"
import MemberItem from "../components/MemberItem"
import MemberListForm from "../components/MemberListForm"
import MemberList from "../components/MemberList.js";
import Http from '../api';
import './Home.css';
import qs from 'qs';

class Home extends Component {
  state = { Userid: '', Userpassword:'',flag:''};
    
  onClickLogin = async text => {
    try{
    const response = await Http.patch('loginresponse/', qs.stringify({
         'mode': "login", 'password': this.state.Userpassword, 'account':this.state.Userid
      })
      );
      if(response.status===200){
        window.location.href = '/buffmain'
      }else{
       
      }

    }catch(error){
      //console.log(error)
      this.setState({flag : 2})
      //alert("아이디와 비밀번호를 확인해주세요")

    }
      //console.log(response.data)
   
      //this.setState({ images: response.data.result });
  }

  handleEmailChange = (e) => {
    this.setState({Userid: e.target.value});
 }
 
 handlePasswordChange = (e) => {
    this.setState({Userpassword: e.target.value});
 }

  render() {
    const {
onClickLogin,handleEmailChange,handlePasswordChange
    } = this;

    return (
      <main className="Home">
        <div className="title">
          라오킹 버프사이트
          </div>
        <section className="form-wrapper">
          <div className="email">
            <input id="Username" value ={this.state.Userid}  onChange = {handleEmailChange} placeholder="아이디"  />
          </div>
          <div className="password">
            <input type="text" value ={this.state.Userpassword} onChange = {handlePasswordChange} id="Userpassword" placeholder="비밀번호" />
          </div>
          <div className="create-button" onClick={onClickLogin}>
            로그인
      </div>
          <div className="create-button" onClick={event => window.location.href = '/register'}>
            회원가입
      </div>
      { this.state.flag === 2 && <p style = {{color:'#ff4040', textAlign:'center'}}>아이디와 비밀번호를 확인해주세요</p>}
        </section>
      </main>
      
    );
  }

}
export default Home;