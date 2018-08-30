import React, { Component } from 'react';
import cookie from 'react-cookies';
import ToastUtils from './../../core/toaster/ToastUtils';
import Inputbox from './Inputbox';
import Web3 from 'web3';
import axios from 'axios';
import './css/Login.css';
import SignUp from './SignUp'

class Login extends Component {
  state = { 
    id: "",
    pw: "",
    userAddr: "",
    isSignUp: false,
  }
  componentWillMount(){
    const web3 = new Web3(Web3.givenProvider);

    Promise.all([getAddress()]).then((address)=> {
      console.log(address[0]);
      this.setState({userAddr:address[0]});
    });

    async function getAddress() {
      let Adr = await web3.eth.getAccounts();
      return Adr[0];
    }
  }
  render() { 
    const {isSignUp} = this.state;
    return (
      <div className="Menu-Login">
        {
          isSignUp ? 
          <SignUp address={this.state.userAddr}/>
          :
          <div>
            <Inputbox title="ID" action={(value)=>this.setState({id:value})} onPW={false}/>
            <Inputbox title="Password" action={(value)=>this.setState({pw:value})} onPW={true}/>
            <div className="signIn" onClick={()=>this.SignIn()}>
              Login
            </div>
            <div className="gotoSignUp" onClick={()=>this.setState({isSignUp:true})}>Don't have account? Create account</div>
          </div>
        }
      </div>
    );
  }
  SignIn(){
    const {id, pw, userAddr} = this.state;
    axios.post("localhost:2500/sigin", {
      "id": id,
      "password":pw,
      "walletAddress": userAddr,
    }).then(res=> {
      switch(res.status){
        case 200:
          cookie.save("Token",res.data.userSerial);
          break;
        case 400:
          ToastUtils.showWarningToast("아이디 또는 비밀번호가 잘못되었습니다.<br/> 확인 후 다시 로그인해주세요.");
          this.setState({id:'', pw:''});
          break;
        case 401:
          ToastUtils.showWarningToast("인증되지 않은 지갑주소입니다.<br/> 회원가입시 등록된 지갑주소로 다시 로그인해주세요.");
          this.setState({id:'', pw:''});
          break;
        case 404:
          ToastUtils.showWarningToast("서버와 통신이 불안정합니다. 다시 한번 시도해주세요.");
          break;
        default:
          return;
      }
    });
  }
}
 
export default Login;