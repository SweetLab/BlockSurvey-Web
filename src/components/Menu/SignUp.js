import React, { Component } from 'react';
import Web3 from 'web3';
import axios from 'axios';
import Inputbox from './Inputbox'
import ToastUtils from '../../core/toaster/ToastUtils'
import './css/SignUp.css';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      pw: '',
      pwcheck: '',
      email: '',
    }
    this.SignUpCall= this.SignUpCall.bind(this);
}
  render() { 
    return (
      <div className="SignUp">
        <Inputbox title="ID" action={(value)=>this.setState({id:value})} onPW={false}/>
        <Inputbox title="Password" action={(value)=>this.setState({pw:value})} onPW={true}/>
        <Inputbox title="CheckPassword" action={(value)=>this.setState({pwcheck:value})} onPW={true}/>
        <Inputbox title="E-Mail" action={(value)=>this.setState({email:value})} onPW={false}/>
        <Inputbox title="WalletAddress" value={this.props.address} action={(event)=>ToastUtils.showWarningToast("지갑주소를 임의로 바꿀 수 없습니다.")} onPW={false}/>
        <div className="SignUp-btn" onClick={this.SignUpCall}>
          Register
        </div>
      </div>
    );
  }
  SignUpCall() {
    const { address } = this.props;
    const { id, pw, email } = this.state;
		const ABI = [{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"pollID","type":"uint256"}],"name":"getPoll","outputs":[{"name":"creator","type":"address"},{"name":"starttime","type":"uint256"},{"name":"endTime","type":"uint256"},{"name":"answerLimit","type":"uint256"},{"name":"answerCount","type":"uint256"},{"name":"deposit","type":"uint256"},{"name":"isFinished","type":"bool"},{"name":"questionSheet","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"pollID","type":"uint256"}],"name":"finishPoll","outputs":[{"name":"isSuccessed","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_value","type":"uint256"}],"name":"burn","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"addUser","outputs":[{"name":"isSuccessed","type":"bool"},{"name":"userID","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"pollID","type":"uint256"},{"name":"answer","type":"string"}],"name":"createAnswer","outputs":[{"name":"result","type":"bool"},{"name":"answerID","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"user","type":"address"}],"name":"confirmUser","outputs":[{"name":"isSuccessed","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_value","type":"uint256"}],"name":"burnFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"pollID","type":"uint256"},{"name":"answerID","type":"uint256"}],"name":"getAnswer","outputs":[{"name":"question","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"},{"name":"_extraData","type":"bytes"}],"name":"approveAndCall","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"answerLimit","type":"uint256"},{"name":"timeLimit","type":"uint256"},{"name":"questionSheet","type":"string"},{"name":"fee","type":"uint256"}],"name":"createPoll","outputs":[{"name":"pollID","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"pollID","type":"uint256"}],"name":"getQuestion","outputs":[{"name":"question","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_owner","type":"address"},{"indexed":true,"name":"_spender","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Burn","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"creater","type":"address"},{"indexed":false,"name":"pollid","type":"uint256"}],"name":"createdPoll","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"user","type":"address"},{"indexed":false,"name":"pollid","type":"uint256"},{"indexed":false,"name":"time","type":"uint256"}],"name":"JoinedPoll","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"user","type":"address"},{"indexed":false,"name":"pollid","type":"uint256"},{"indexed":false,"name":"answerid","type":"uint256"}],"name":"createdAnswer","type":"event"}]
    const contractAddr = "0xb0FB0185d0b673C6a89a6557e5EDA16399c36eD5";
		const web3 = new Web3(Web3.givenProvider);
		const BlockSurvey = new web3.eth.Contract(ABI, contractAddr);
    const value = web3.utils.toWei('1000', 'ether');
      BlockSurvey.methods.approve(address, value).send(
        {
          from: address,
          to:'0xb0FB0185d0b673C6a89a6557e5EDA16399c36eD5',
        }
      ).then(function (result) {
            console.log("Sent done!");
            console.log(result);
            axios({method: 'post',
              url: 'http://35.200.68.244:8080/signup', 
              data: {
                "id": id,
                "password":pw,
                "email": email,
                "walletAddr":address
              }
              }).then((res)=> {
              if(res.status === 200){
                return (window.location.reload(true))
              } else {
                ToastUtils.showErrorToast("서버에서 오류가 일어났습니다. 나중에 다시 보내주세요");
              }
            })
          },function(result){
            ToastUtils.showErrorToast("이더리움 지갑에서 동의를 눌러주세요.");
          }
      );
    }
	}
 
export default SignUp;