import React, { Component } from 'react';
import { MypageTopBar, MypageNavi, MypageMain, MypageSurvey } from './index';
import './css/MypageDefaultLayout.css';
import cookie from 'react-cookies'
import {Link} from 'react-router-dom'

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
        <div className="Add"></div>
        {cookie.load("Token") ? 
        <React.Fragment>
          <MypageNavi page={this.props.page} changePage={this.props.changePage}/>
          {this.props.page===0 ? <MypageMain /> : <MypageSurvey />}
        </React.Fragment> :
        <div className="Mypage-ErrorMsg">My Page is available after login.
        <br/>
        <Link to="/" >Go to Main</Link>
        </div>
        }
      </div>
    );
  }
}
 
export default MypageDefaultLayout;