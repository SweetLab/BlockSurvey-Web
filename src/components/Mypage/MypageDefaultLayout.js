import React, { Component } from 'react';
import { TopBar, Navi } from './index';
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
        <TopBar />
        <div className="Title">
          <span className="TitleText">My Account</span>
        </div>
        <div className="Add"></div>
        <Navi />
      </div>
    );
  }
}
 
export default MypageDefaultLayout;