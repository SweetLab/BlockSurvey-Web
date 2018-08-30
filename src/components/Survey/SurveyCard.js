import React, { Component } from 'react';
import './css/surveyCard.css';

class SurveyCard extends Component {
  state = {
    /*
    {
      questionTitle: '',
      choice: []
    }
    */

    inputText : [
      
    ]
  }
  render() {
    const {
      isModified
    } = this.props;
  
    return (
      <React.Fragment>
        {
          isModified ? 
            this.renderModifiedSurveyCard() :
            this.renderSurveyCard()
        }
      </React.Fragment>
    )
  }

  renderModifiedSurveyCard = _ => {
    const {
      questionNumber,
      questionTitle,
      choices,
      isChoice,
      changeIsModified,
      modifyInputText,
      deleteSurvey,
      deleteSurveyChoice,
      addSurveyChoice
    } = this.props;
    
    return (
      <div className="modified-survey-card-wrapper survey-card">
        <div className="modified-survey-title-wrapper">
          <span className="modified-survey-number">{`Q${questionNumber}`}</span>
          <input 
            value = { questionTitle } 
            placeholder="설문의 질문을 입력해주세요" 
            onChange = { event => modifyInputText('TITLE', event.target.value, questionNumber) }
            type="text" 
            className="modified-survey-title-text-input" 
          />
          <div className="modified-survey-category"></div>
        </div>
        <div className="modified-survey-contents-wrapper">
          {
            isChoice ? 
            choices.map((choice, index) => 
              <div className="modified-survey-choice-wrapper" key = { index } >
                <div className="modified-survey-choice-circle"></div>
                <input 
                  value = { choice } 
                  onChange = { event => modifyInputText('CHOICE', event.target.value, questionNumber, index) }
                  placeholder="입력해주세요" 
                  className="modified-survey-choice-text-input" 
                />
                <div className="modified-survey-choice-add-btn" onClick = { _ => addSurveyChoice(questionNumber) }></div>
                <div className="modified-survey-choice-remove-btn" onClick = { _ => deleteSurveyChoice(questionNumber, index) }></div>
              </div>
            ) : false
          }
        </div>
        <div className="modified-survey-btn-wrapper">
          <div className="filter"></div>
          <div className="modified-survey-cancel-btn" onClick = { _ => deleteSurvey(questionNumber) }>Delete</div>
          <div className="modified-survey-save-btn" onClick = { _ => changeIsModified(questionNumber) }>Save</div>
        </div>
      </div>
    )
  }
  
  renderSurveyCard = _ => {
    const {
      questionNumber,
      questionTitle,
      choices,
      isChoice,
      changeIsModified
    } = this.props;
    return (
      <div className="survey-card-wrapper survey-card" onDoubleClick = { _ => changeIsModified(questionNumber) }>
        <span className="survey-number">{`Q${questionNumber}`}</span>
        <span className="survey-title">{ questionTitle }</span>
        <div className="survey-contents">
          <div className="survey-choice-wrapper">
            {
              isChoice ?
              choices.map((choice, index) => 
                <div className="survey-choice" key = { index }>
                  <span className="survey-choice-number">{ index + 1 }</span>
                  <span className="survey-choice-text">{choice}</span>
                </div>
              ) :
              <div className="survey-"></div>
            }
          </div>
          <div className="survey-vertical-line-wrapper">
            <div className="survey-vertical-line"></div>
          </div>
        </div>
      </div>
    )
  }
}
 
export default SurveyCard;