import React, { Component } from 'react';
import './css/createSurvey.css';

class CreateSurvey extends Component {
  render() { 
    return (
      <div id="create-survey-container">
        <div id="create-survey-header-section">
        
        </div>
        <div id="create-survey-body-section">
          <div id="survey-card-section">
            <div className="survey-card-wrapper">
              <span className="survey-number">Q1</span>
              <span className="survey-title">In domitory, what food do you want?</span>
              <div className="survey-contents">
                <div className="survey-choice-number-wrapper">
                  <span className="survey-choice-number">1</span>
                  <span className="survey-choice-number">2</span>
                  <span className="survey-choice-number">3</span>
                  <span className="survey-choice-number">4</span>
                  <span className="survey-choice-number">5</span>
                </div>
                <div className="survey-vertical-line-wrapper">
                  <div className="survey-vertical-line"></div>
                </div>
                <div className="survey-choice-text-wrapper">
                  <span className="survey-choice-text">Example text</span>
                  <span className="survey-choice-text">Example text</span>
                  <span className="survey-choice-text">Example text</span>
                  <span className="survey-choice-text">Example text</span>
                  <span className="survey-choice-text">Example text</span>
                </div>
              </div>
            </div>
            <div className="survey-card-wrapper">
              <span className="survey-number">Q2</span>
              <span className="survey-title">In Daedeok Software Meister Highschool,
Do you want to morning exercise?</span>
              <div className="survey-contents">
                <div className="survey-choice-number-wrapper">
                  <span className="survey-choice-number">1</span>
                  <span className="survey-choice-number">2</span>
                  <span className="survey-choice-number">3</span>
                  <span className="survey-choice-number">4</span>
                  <span className="survey-choice-number">5</span>
                </div>
                <div className="survey-vertical-line-wrapper">
                  <div className="survey-vertical-line"></div>
                </div>
                <div className="survey-choice-text-wrapper">
                  <span className="survey-choice-text">Example text</span>
                  <span className="survey-choice-text">Example text</span>
                  <span className="survey-choice-text">Example text</span>
                  <span className="survey-choice-text">Example text</span>
                  <span className="survey-choice-text">Example text</span>
                </div>
              </div>
            </div>
            <div className="survey-card-wrapper">
              <span className="survey-number">Q3</span>
              <span className="survey-title">In domitory, what food do you want?</span>
              <div className="survey-contents">
                <div className="survey-choice-number-wrapper">
                  <span className="survey-choice-number">1</span>
                  <span className="survey-choice-number">2</span>
                  <span className="survey-choice-number">3</span>
                  <span className="survey-choice-number">4</span>
                  <span className="survey-choice-number">5</span>
                </div>
                <div className="survey-vertical-line-wrapper">
                  <div className="survey-vertical-line"></div>
                </div>
                <div className="survey-choice-text-wrapper">
                  <span className="survey-choice-text">Example text</span>
                  <span className="survey-choice-text">Example text</span>
                  <span className="survey-choice-text">Example text</span>
                  <span className="survey-choice-text">Example text</span>
                  <span className="survey-choice-text">Example text</span>
                </div>
              </div>
            </div>
            <div className="modified-survey-card-wrapper">
              <div className="modified-survey-title">
                <span className="modified-survey-number"></span>
                <div className="modified-survey-title"></div>
                <div className="modified-survey-category"></div>
              </div>
              <div className="modified-survey-contents">
                <div className="modified-survey-choice-text">

                </div>
                <div className="modified-survey-choice-text">

                </div>
                <div className="modified-survey-choice-text">

                </div>
              </div>
            </div>
          </div>
          <div id="add-survey-question-btn-wrapper">
            <div id="add-survey-question-btn">Add Question</div>
          </div>
          <div id="create-survey-btn-wrapper">
            <div id="create-survey-btn">Save</div>
          </div>
        </div>
      </div>
    );
  }
}
 
export default CreateSurvey;