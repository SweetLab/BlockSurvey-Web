import React, { Component } from 'react';
import SurveyCard from '../../components/Survey/SurveyCard';
import update from 'react-addons-update';
import './css/createSurvey.css';
import Web3 from 'web3'
import axios from 'axios'
import ToastUtils from '../../core/toaster/ToastUtils';
import { Base64 } from 'js-base64';


class CreateSurvey extends Component {
  state = {
    surveies: [
      {
        questionTitle: 'In domitory, what food do you want?',
        choices: ['Example text', 'Example text','Example text','Example text','Example text'],
        isChoice: true,
        isModified: false,
        isAdmin: true,
      },
      {
        questionTitle: 'ㅁㄴㅇㄹㄴㅁㅇㄹㅁㄴㄹㅁㄴㅇㄹㄴㅁㅇㄹㄴㅁㅇ',
        choices: ['Example text', 'Example text'],
        isChoice: true,
        isModified: false,
        isAdmin: true,
      },
      {
        questionTitle: 'In domitory, what food do you want?',
        choices: ['Example text', 'Example text'],
        isChoice: true,
        isModified: true,
        isAdmin: true,
      }
    ],
    limit: 0,
    SVT: 0,
    userAddr: "",
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
    const { surveies } = this.state;
    return (
      <div id="create-survey-container">
        <div id="create-survey-header-section">
          <span id="create-survey-header-text">{this.props.surveyName}</span>
        </div>
        <div id="create-survey-body-section">
          <div id="survey-card-section">
            {
              surveies.map((survey, index) => 
                <SurveyCard 
                  key = { index + 1 } 
                  changeIsModified = { this.changeIsModified }
                  modifyInputText = { this.modifyInputText }
                  deleteSurvey = { this.deleteSurvey }
                  questionNumber = { index + 1 }
                  addSurveyChoice = { this.addSurveyChoice }
                  deleteSurveyChoice = { this.deleteSurveyChoice }
                  changeSurveyQuestionCategory = { this.changeSurveyQuestionCategory }
                  {...survey} 
                />
              )
            }
          </div>
          <div id="add-survey-question-btn-wrapper">
            <div id="add-survey-question-btn" onClick = { this.addSurvey } >Add Question</div>
          </div>
          <div id="limit-input">
            <div className="input-wrapper">
            People Limit
            <input type="number" onChange={(event)=>this.setState({limit:event.target.value})} placeholder="20"/>
            </div>
            <div className="input-wrapper coin">
              Survey Coin
              <input type="number" onChange={(event)=>this.setState({SVT:event.target.value})} placeholder="1000"/>
            </div>
          </div>
          <div id="create-survey-btn-wrapper">
            <div id="create-survey-btn" onClick = {this.createSurveyBtnClick}>Save</div>
          </div>
        </div>
      </div>
    );
  }

  createSurveyBtnClick = _ => {
    const { surveies, limit, SVT, userAddr } = this.state;
    const {surveyName} = this.props;
		const ABI = [{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"pollID","type":"uint256"}],"name":"getPoll","outputs":[{"name":"creator","type":"address"},{"name":"starttime","type":"uint256"},{"name":"endTime","type":"uint256"},{"name":"answerLimit","type":"uint256"},{"name":"answerCount","type":"uint256"},{"name":"deposit","type":"uint256"},{"name":"isFinished","type":"bool"},{"name":"questionSheet","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"pollID","type":"uint256"}],"name":"finishPoll","outputs":[{"name":"isSuccessed","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_value","type":"uint256"}],"name":"burn","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"addUser","outputs":[{"name":"isSuccessed","type":"bool"},{"name":"userID","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"pollID","type":"uint256"},{"name":"answer","type":"string"}],"name":"createAnswer","outputs":[{"name":"result","type":"bool"},{"name":"answerID","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"user","type":"address"}],"name":"confirmUser","outputs":[{"name":"isSuccessed","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_value","type":"uint256"}],"name":"burnFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"pollID","type":"uint256"},{"name":"answerID","type":"uint256"}],"name":"getAnswer","outputs":[{"name":"question","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"},{"name":"_extraData","type":"bytes"}],"name":"approveAndCall","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"answerLimit","type":"uint256"},{"name":"timeLimit","type":"uint256"},{"name":"questionSheet","type":"string"},{"name":"fee","type":"uint256"}],"name":"createPoll","outputs":[{"name":"pollID","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"pollID","type":"uint256"}],"name":"getQuestion","outputs":[{"name":"question","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_owner","type":"address"},{"indexed":true,"name":"_spender","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Burn","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"creater","type":"address"},{"indexed":false,"name":"pollid","type":"uint256"}],"name":"createdPoll","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"user","type":"address"},{"indexed":false,"name":"pollid","type":"uint256"},{"indexed":false,"name":"time","type":"uint256"}],"name":"JoinedPoll","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"user","type":"address"},{"indexed":false,"name":"pollid","type":"uint256"},{"indexed":false,"name":"answerid","type":"uint256"}],"name":"createdAnswer","type":"event"}]
    const contractAddr = "0x70bda538233886919286e135265f9bc1831f15fa";
		const web3 = new Web3(Web3.givenProvider);
		const BlockSurvey = new web3.eth.Contract(ABI, contractAddr);
    const value = web3.utils.toWei(SVT, 'ether');
      BlockSurvey.methods.createPoll(limit, 1000000000000, Base64.encodeURI(JSON.stringify(surveies)) ,value).send(
        {
          from: userAddr,
          to:'0x70bda538233886919286e135265f9bc1831f15fa',
        }
      ).then(function (result) {
            console.log("Sent done!");
            console.log(result);
            axios({method: 'post',
              url: 'http://35.200.68.244:8080/surveys/upload', 
              data: {
                title: surveyName,
                owner: userAddr,
                limit: limit,
              }
              }).then((res)=> {
              if(res.status === 200){
                window.location.href="/survey/participate";
              } else {
                ToastUtils.showErrorToast("서버에서 오류가 일어났습니다. 나중에 다시 보내주세요");
              }
            })
          },function(result){
            ToastUtils.showErrorToast("이더리움 지갑에서 동의를 눌러주세요.");
          }
      );
  }

  addSurvey = _ => {
    const newSurvey = {
      questionTitle: '',
      choices: [''],
      isChoice: true,
      isModified: true,
      isAdmin: true,
    }
    const newSurveies = this.state.surveies;
    newSurveies.push(newSurvey);

    this.setState({
      surveies: newSurveies
    });
  }
  
  deleteSurvey = questionNumber => {
    const newSurveies = this.state.surveies;
    newSurveies.splice(questionNumber - 1, 1);
    
    this.setState({
      surveies: newSurveies
    });
  }
  
  addSurveyChoice = questionNumber => {
    const newChoices = this.state.surveies[questionNumber - 1].choices;
    newChoices.push('');

    this.setState({
      surveies: update(this.state.surveies, {[questionNumber - 1]: {choices: {$set: newChoices}}})
    });
  }

  deleteSurveyChoice = (questionNumber, choiceNumber) => {
    const newChoices = this.state.surveies[questionNumber - 1].choices;
    if(newChoices.length === 1) return;
    
    newChoices.splice(choiceNumber, 1);
    
    this.setState({
      surveies: update(this.state.surveies, {[questionNumber - 1]: {choices: {$set: newChoices}}})
    });
  }


  changeIsModified = questionNumber => {
    const changeIsModified = !this.state.surveies[questionNumber - 1].isModified;

    this.setState({
      surveies: update(this.state.surveies, {[questionNumber - 1]: {isModified: {$set: changeIsModified}}})
    });
  }

  modifyInputText = (type, text, questionNumber, choiceNumber) => {
    const target = questionNumber - 1;
    const dumpArr = this.state.surveies;

    switch(type) {
      case 'TITLE' : 
        dumpArr[target].questionTitle = text;
        break;

      case 'CHOICE' : 
        dumpArr[target].choices[choiceNumber] = text;
        break;

      default : return;
    }
    
    this.setState({
      inputText: dumpArr
    });
  }

  changeSurveyQuestionCategory = (category, questionNumber) => {
    let survey= this.state.surveies[questionNumber - 1];
    const newIsChoice = survey.isChoice = category === '객관식' ? true : false;
    
    this.setState({
      surveies: update(this.state.surveies, {[questionNumber - 1]: {isChoice: {$set: newIsChoice}}})
    });
  }
}
 
export default CreateSurvey;