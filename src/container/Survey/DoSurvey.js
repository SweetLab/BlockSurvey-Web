import React, { Component } from 'react';
import SurveyCard from '../../components/Survey/SurveyCard';
import update from 'react-addons-update';
import './css/doSurvey.css';

class DoSurvey extends Component {
  state = {
    surveies: [
      {
        questionTitle: 'In domitory, what food do you want?',
        choices: ['Example text', 'Example text','Example text','Example text','Example text'],
        isChoice: false,
        isModified: false,
        isAdmin: false,
        answer: [1]
      },
      {
        questionTitle: 'In domitory, what food do you want?',
        choices: ['Example text', 'Example text','Example text','Example text','Example text','Example text','Example text','Example text','Example text','Example text','Example text'],
        isChoice: true,
        isModified: false,
        isAdmin: false,
        answer: []
      },
      {
        questionTitle: 'In domitory, what food do you want?',
        choices: ['Example text', 'Example text'],
        isChoice: true,
        isModified: false,
        isAdmin: false,
        answer: []
      }
    ],
    isLast: false, //현재 선택된 질문이 마지막인지
    isFirst: true, //현재 선택된 질문이 처음인지 요청을 받은후에 length를 통해서 판별해서 데이터와 같이 setState
    currentQuestion: 0
  }

  render() { 
    const { 
      surveies, 
      isLast, 
      isFirst, 
      currentQuestion 
    } = this.state;
    
    return (
      <div id="do-survey-container">
        <div id="do-survey-contents-wrapper">
          <div id="do-survey-progress-bar-wrapper">
            <div id="do-survey-progress-background-bar">
              <div id="do-survey-progress-bar" style = { {width: `${parseInt( ( (currentQuestion + 1) / surveies.length) * 100) }%`} } ></div>
            </div>
          </div>
          <SurveyCard 
            key = { currentQuestion + 1 } 
            questionNumber = { currentQuestion + 1 }
            selectAnswer = { this.selectSurveyAnswer }
            { ...surveies[currentQuestion] } 
          />
          {
            isLast ?
            <div id="do-survey-submit-btn-wrapper">
              <div id="do-survey-submit-btn" className="pointer-cursor" onClick = {this.surveySubmitBtnClick}>Submit</div>
            </div> :
            false
          }
          {
            !isFirst ?
            <div id="move-prev" className="move-survey-question-btn" onClick = { _ => this.moveSurveyQuestion('PREV') }></div> :
            false
          }
          {
            !isLast ?
            <div id="move-next" className="move-survey-question-btn" onClick = { _ => this.moveSurveyQuestion('NEXT') }></div> :
            false
          }
        </div>
      </div>
    );
  }

  surveySubmitBtnClick = _ => {
    //서버요청 해주세용
  }

  moveSurveyQuestion = type => {
    const currentQuestion = this.state.currentQuestion;
    switch(type) {
      case 'NEXT': 
        const isLast = currentQuestion + 1 === this.state.surveies.length - 1 ? true : false;
      
        return this.setState({
          currentQuestion: currentQuestion + 1,
          isLast: isLast,
          isFirst: false
        });
        
      case 'PREV':
        const isFirst = currentQuestion - 1 === 0 ? true : false;

        return this.setState({
          currentQuestion: currentQuestion - 1,
          isFirst: isFirst,
          isLast: false
        });

      default: return;
    }
  }

  selectSurveyAnswer = (questionNumber, answer) => {
    const { isChoice } = this.state.surveies[questionNumber - 1];
    let newAnswer = this.state.surveies[questionNumber - 1].answer;
    if(isChoice && newAnswer.includes(answer)) {
      newAnswer.splice(newAnswer.indexOf(answer), 1);

    } else {
      if(isChoice) {
        newAnswer.push(answer);
      } else {
        newAnswer[0] = answer;
      }
    }


    this.setState({
      surveies: update(this.state.surveies, {[questionNumber - 1]: {answer: {$set: newAnswer}}})
    });
  }
}
 
export default DoSurvey;