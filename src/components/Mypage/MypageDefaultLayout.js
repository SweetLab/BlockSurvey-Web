import React, { Component } from 'react';
import {Logo, Blackmenubtn} from '../../assets/assets';
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
        <div className="Navi">
          <img src={Logo} alt="로고" clsssName="Logo"/>
          <img src={Blackmenubtn} alt="메뉴" clsssName="menu"/>
        </div>
      </div>
    );
  }
}
 
export default MypageDefaultLayout;