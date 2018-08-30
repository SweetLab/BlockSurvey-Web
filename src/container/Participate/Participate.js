import React, { Component } from 'react';
import '../../components/Participate/css/participate.css';
import Navi from '../../components/Participate/Navi';
import { ParticipateJoin, ParticipateUser } from '../../components/Participate'

class Participate extends Component {
  render() { 
    return (
      <div className="Participate">
        <Navi />
        <div className="Participate_Main">
          <div className="Participate_Text">
            <div className="Survie_Part_title">Survey</div>
            <div className="Survie_Part_mini_title">(Participate in)</div>
            <div className="Survie_Part_msg">Suggestions, Recommands, Chose</div>
          </div>
        </div>
        <ParticipateJoin>
          <ParticipateUser />
        </ParticipateJoin>
      </div>
    );
  }
}
 
export default Participate;