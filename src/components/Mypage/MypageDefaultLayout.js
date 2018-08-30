import React, { Component } from 'react';
import { MypageTopBar, MypageNavi, MypageMain } from './index';
import './css/MypageDefaultLayout.css';

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
        <MypageTopBar />
        <div className="Title">
          <span className="TitleText">My Account</span>
        </div>
        <div className="Add"></div>
        <MypageNavi />
        <MypageMain />
      </div>
    );
  }
}
 
export default MypageDefaultLayout;