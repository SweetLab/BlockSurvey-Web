import React, { Component } from 'react';
import './css/surveyCard.css';
import DropDown from '../../core/DropDown/Dropdown'

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
      addSurveyChoice,
      changeSurveyQuestionCategory
    } = this.props;
    
    return (
      <div className="modified-survey-card-wrapper create-survey-card">
        <div className="modified-survey-title-wrapper">
          <span className="modified-survey-number">{`Q${questionNumber}`}</span>
          <input 
            value = { questionTitle } 
            placeholder="설문의 질문을 입력해주세요" 
            onChange = { event => modifyInputText('TITLE', event.target.value, questionNumber) }
            type="text" 
            className="modified-survey-title-text-input" 
          />
          <div className="modified-survey-category">
            <DropDown 
              _onSelect = { changeSurveyQuestionCategory }
              selected = { isChoice ? '객관식' : '단일입력란' }
              questionNumber = { questionNumber }
            />
          </div>
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
                <div className="modified-survey-choice-add-btn pointer-cursor" onClick = { _ => addSurveyChoice(questionNumber) }></div>
                <div className="modified-survey-choice-remove-btn pointer-cursor" onClick = { _ => deleteSurveyChoice(questionNumber, index) }></div>
              </div>
            ) : false
          }
        </div>
        <div className="modified-survey-btn-wrapper">
          <div className="filter"></div>
          <div className="modified-survey-cancel-btn pointer-cursor" onClick = { _ => deleteSurvey(questionNumber) }>Delete</div>
          <div className="modified-survey-save-btn pointer-cursor" onClick = { _ => changeIsModified(questionNumber) }>Save</div>
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
      isAdmin,
      answer,
      selectAnswer,
      changeIsModified
    } = this.props;
  
    return (
      <div className = { `survey-card-wrapper ${ isAdmin ? 'create-survey-card' : 'do-survey-card'}` } onDoubleClick = { isAdmin ? _ => changeIsModified(questionNumber) : _ => {} }>
        <span className="survey-number">{`Q${questionNumber}`}</span>
        <span className="survey-title">{ questionTitle }</span>
        <div className="survey-contents">
            {
              isChoice ?
              <React.Fragment>
                <div className="survey-choice-wrapper"> 
                  {
                    choices.map((choice, index) => 
                      <div 
                        className = { `survey-choice pointer-cursor ${ (!isAdmin && answer.includes(index + 1)) ? 'selected' : '' }` } 
                        key = { index } 
                        onClick = { !isAdmin ? _ => selectAnswer(questionNumber, index + 1) : _ => {} }
                      >
                        <span className="survey-choice-number">{ index + 1 }</span>
                        <span className="survey-choice-text">{ choice }</span>
                      </div>
                    ) 
                  }
                </div> 
                <div className="survey-vertical-line-wrapper">
                  <div className="survey-vertical-line"></div>
                </div> 
              </React.Fragment> :
              <div className="survey-descriptive-wrapper"> 
                <div className="survey-descriptive-text-input-wrapper">
                  <input className="survey-descriptive-text-input"/>
                  <span className="survey-descriptive-text-title">Put In</span>
                </div>
              </div>
            }
        </div>
      </div>
    )
  }
}
 
export default SurveyCard;