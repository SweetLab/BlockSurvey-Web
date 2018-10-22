import React, { Component } from 'react';
import RecentContent from './RecentContent';
import RecentBtnContent from './RecentBtnContent';
import '../css/MypageSurvey.css';
import Web3 from 'web3'
import BlockSurvey from '../../../core/BlockSurvey'

class MypageSurvey extends Component {
    constructor(props) {
        super(props);
        this.state = {
            balance: 0
        }
    }
    componentDidMount(){
        const ABI = [{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"pollID","type":"uint256"}],"name":"getPoll","outputs":[{"name":"creator","type":"address"},{"name":"starttime","type":"uint256"},{"name":"endTime","type":"uint256"},{"name":"answerLimit","type":"uint256"},{"name":"answerCount","type":"uint256"},{"name":"deposit","type":"uint256"},{"name":"isFinished","type":"bool"},{"name":"questionSheet","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"pollID","type":"uint256"}],"name":"finishPoll","outputs":[{"name":"isSuccessed","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_value","type":"uint256"}],"name":"burn","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"addUser","outputs":[{"name":"isSuccessed","type":"bool"},{"name":"userID","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"pollID","type":"uint256"},{"name":"answer","type":"string"}],"name":"createAnswer","outputs":[{"name":"result","type":"bool"},{"name":"answerID","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"user","type":"address"}],"name":"confirmUser","outputs":[{"name":"isSuccessed","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_value","type":"uint256"}],"name":"burnFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"pollID","type":"uint256"},{"name":"answerID","type":"uint256"}],"name":"getAnswer","outputs":[{"name":"question","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"},{"name":"_extraData","type":"bytes"}],"name":"approveAndCall","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"answerLimit","type":"uint256"},{"name":"timeLimit","type":"uint256"},{"name":"questionSheet","type":"string"},{"name":"fee","type":"uint256"}],"name":"createPoll","outputs":[{"name":"pollID","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"pollID","type":"uint256"}],"name":"getQuestion","outputs":[{"name":"question","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_owner","type":"address"},{"indexed":true,"name":"_spender","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Burn","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"creater","type":"address"},{"indexed":false,"name":"pollid","type":"uint256"}],"name":"createdPoll","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"user","type":"address"},{"indexed":false,"name":"pollid","type":"uint256"},{"indexed":false,"name":"time","type":"uint256"}],"name":"JoinedPoll","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"user","type":"address"},{"indexed":false,"name":"pollid","type":"uint256"},{"indexed":false,"name":"answerid","type":"uint256"}],"name":"createdAnswer","type":"event"}]
        const contractAddr = "0x70bda538233886919286e135265f9bc1831f15fa";
        const web3 = new Web3(Web3.givenProvider);
        const BlockSurvey = new web3.eth.Contract(ABI, contractAddr);
        let addr = "";
        Promise.all([getAddress()]).then((address)=> {
            addr = address[0];
          });
      
          async function getAddress() {
            let Adr = await web3.eth.getAccounts();
            return Adr[0];
          }
        BlockSurvey.methods.balanceOf(addr).call().then(res=>{this.setState({balance:res}); console.log(res)})
    }
    render() {
        const {balance} = this.state;
        return ( 
            <div className="MypageSurvey">
                <div className="MypageContent">
                    <div className="BasicSurvey">
                        <div className="BasicSurveyTitle">Surveys</div>
                        <div className="BasicContent">
                            <div className="CreateContent">
                                <span className="ContentName">Create</span>
                                <span className="ContentValue">0</span>
                            </div>
                            <div className="ParticipateContent">
                                <span className="ContentName">Participate</span>
                                <span className="ContentValue">1</span>
                            </div>
                            <div className="SurveyCoinContent">
                                <span className="ContentName">Survey Coin</span>
                                <span className="ContentValue">{balance/1000000000000000000}</span>
                            </div>
                        </div>
                    </div>
                    <div className="RecentSurvey">
                        <div className="RecentSurveyTitle">Recent Surveys</div>
                            <RecentContent title="포털 사이트 이용 설문조사" surveyId="1" limit="2"/>
                    </div>
                    <div className="CreatedSurvey">
                        <div className="CreatedSurveyTitle">Created Surveys</div>
                    </div>
                    <div className="ParticipatedSurvey">
                        <div className="ParticipatedSurveyTitle">Participated in Surveys</div>
                            <RecentContent title="포털 사이트 이용 설문조사" surveyId="1" limit="2"/>
                    </div>   
                </div>                                             
            </div>
         );
    }
}
 
export default MypageSurvey;