import React, { Component } from 'react';
import SurveyCard from './../../Survey/SurveyCard';
import './css/MypageSurveyResult.css';
import { MypageDefaultLayout } from '../';
import { Base64 } from 'js-base64';
import Web3 from 'web3';

class MypageSurveyResult extends Component {
  constructor(props){
    super(props);
    this.state={
      people: 1,
      answer: [],
      title: '',
      currentQuestion: 0,
      surveies: []
    }
  }
  componentDidMount(){
    const ABI = [{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"pollID","type":"uint256"}],"name":"getPoll","outputs":[{"name":"creator","type":"address"},{"name":"starttime","type":"uint256"},{"name":"endTime","type":"uint256"},{"name":"answerLimit","type":"uint256"},{"name":"answerCount","type":"uint256"},{"name":"deposit","type":"uint256"},{"name":"isFinished","type":"bool"},{"name":"questionSheet","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"pollID","type":"uint256"}],"name":"finishPoll","outputs":[{"name":"isSuccessed","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_value","type":"uint256"}],"name":"burn","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"addUser","outputs":[{"name":"isSuccessed","type":"bool"},{"name":"userID","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"pollID","type":"uint256"},{"name":"answer","type":"string"}],"name":"createAnswer","outputs":[{"name":"result","type":"bool"},{"name":"answerID","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"user","type":"address"}],"name":"confirmUser","outputs":[{"name":"isSuccessed","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_value","type":"uint256"}],"name":"burnFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"pollID","type":"uint256"},{"name":"answerID","type":"uint256"}],"name":"getAnswer","outputs":[{"name":"question","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"},{"name":"_extraData","type":"bytes"}],"name":"approveAndCall","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"answerLimit","type":"uint256"},{"name":"timeLimit","type":"uint256"},{"name":"questionSheet","type":"string"},{"name":"fee","type":"uint256"}],"name":"createPoll","outputs":[{"name":"pollID","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"pollID","type":"uint256"}],"name":"getQuestion","outputs":[{"name":"question","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_owner","type":"address"},{"indexed":true,"name":"_spender","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Burn","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"creater","type":"address"},{"indexed":false,"name":"pollid","type":"uint256"}],"name":"createdPoll","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"user","type":"address"},{"indexed":false,"name":"pollid","type":"uint256"},{"indexed":false,"name":"time","type":"uint256"}],"name":"JoinedPoll","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"user","type":"address"},{"indexed":false,"name":"pollid","type":"uint256"},{"indexed":false,"name":"answerid","type":"uint256"}],"name":"createdAnswer","type":"event"}]
    const contractAddr = "0x70bda538233886919286e135265f9bc1831f15fa";
		const web3 = new Web3(Web3.givenProvider);
    const BlockSurvey = new web3.eth.Contract(ABI, contractAddr);
    let pollID = this.props.match.params.uid;
    pollID*= 1;
    pollID -= 1;
    BlockSurvey.methods.getQuestion(pollID).call(
    ).then(res=>{
      const surveies = JSON.parse(Base64.decode(res));
      console.log(Base64.decode(res))
      console.log(surveies)
      return this.setState({
        surveies: surveies
      })
    })
    for(let i = 0; i<this.state.people; i++){
      BlockSurvey.methods.getAnswer(pollID, i).call(
      ).then(res=>{
        const survey = JSON.parse(Base64.decode(res));
        return this.setState({
          answer:{
            [i]:survey,
          }
        })
      })
    }
  }
  render() { 
    return (
      <MypageDefaultLayout>
        <div className="SurveyResult">
          <div className="SurveyResult-wrapper">
          </div>
        </div>
      </MypageDefaultLayout>
    );
  }
  renderList(){

  }
}
 
export default MypageSurveyResult;