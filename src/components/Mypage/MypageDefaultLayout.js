import React, { Component } from 'react';

import './css/MypageDefaultLayout.css';
import MypageTopBar from './MypageTopBar'

class MypageDefaultLayout extends Component {
  state = {
    menu: [
      "MY PAGE",
      "SURVEY",
    ],
  }
  render() { 
    return (
      <div className="MypageDefaultLayout">
        <MypageTopBar/>
        <div className="Title">
          <span className="TitleText">My Account</span>
        </div>
        <div className="Add">
          {this.props.children}
        </div>
        
      </div>
    );
  }
}
 
export default MypageDefaultLayout;