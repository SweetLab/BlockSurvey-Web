import React, { Component } from 'react';
import SurveyCard from '../../components/Survey/SurveyCard';
import update from 'react-addons-update';
import './css/createSurvey.css';

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
        questionTitle: 'In domitory, what food do you want?',
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
    ]
  }

  render() { 
    const { surveies } = this.state;
    return (
      <div id="create-survey-container">
        <div id="create-survey-header-section">
        
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
                  {...survey} 
                />
              )
            }
          </div>
          <div id="add-survey-question-btn-wrapper">
            <div id="add-survey-question-btn" onClick = { this.addSurvey } >Add Question</div>
          </div>
          <div id="create-survey-btn-wrapper">
            <div id="create-survey-btn">Save</div>
          </div>
        </div>
      </div>
    );
  }

  addSurvey = _ => {
    const newSurvey = {
      questionTitle: '',
      choices: [''],
      isChoice: true,
      isModified: true
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
    const targetIdx = questionNumber - 1;
    const changeIsModified = !this.state.surveies[targetIdx].isModified;

    this.setState({
      surveies: update(this.state.surveies, {[targetIdx]: {isModified: {$set: changeIsModified}}})
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
}
 
export default CreateSurvey;