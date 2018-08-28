import React, { Component } from 'react';
import './participate.css';
import TopBar from '../../components/Main/TopBar'
import SurveyJoin from './SurveyJoin'

class Participate extends Component {
  render() { 
    return (
      <div className="Participate">
        <TopBar />
        <div className="Participate_Text">
          <div className="Survie_Part_title">Survey</div>
          <div className="Survie_Part_mini_title">(Participate in)</div>
          <div className="Survie_Part_msg">Suggestions, Recommands, Chose</div>
        </div>
        <SurveyJoin />
      </div>
    );
  }
}
 
export default Participate;