import React, { Component } from 'react';
import TopBar from '../../components/Main/TopBar'
import './css/createSurveyMain.css';
import CreateSurvey from './CreateSurvey'

class CreateSurveyMain extends Component {
  state = {
    surveyName: '',
    onStart: false,
  }

  render() {
    const { surveyName, onStart } = this.state;

    return (
      <React.Fragment>
      {onStart? 
      <CreateSurvey surveyName={surveyName}/>
        :
      <div id="create-survey-main-container">
      <TopBar/>
      <div id="create-survey-main-contents-wrapper">
        <span id="create-survey-main-title">Make Survey</span>
        <div id="create-survey-sub-text">
          <span>Make your survey with</span> 
          <span id="create-survey-sub-bold-text">BlockSurvey</span>  
        </div>
        <div className="filter"></div>
        <div id="create-survey-main-input-wrapper">
          <input type="text" placeholder="Put in your Survey Name" id="create-survey-main-input" value = { surveyName } onChange = {this.inputOnChange}/>
          <div id="create-survey-main-submit-btn" className="filter" onClick = {this.submitBtnClick}>➔</div>
        </div>
      </div>
    </div>}
      </React.Fragment>
    );
  }

  inputOnChange = event => {
    const { value } = event.target;

    this.setState({ surveyName: value });
  }

  submitBtnClick = _ => {
    this.setState({onStart:true});
  }
}
 
export default CreateSurveyMain;