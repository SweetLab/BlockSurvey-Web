import React, { Component } from 'react';
import TopBar from './TopBar'
import Navi from './Navi'
import {Scrolling} from '../../core/ScrollEvent';
import {BottomBtn} from '../../assets/assets';
import './css/viewpage.css';

class MainDefaultLayout extends Component {
  render() { 
    const { PageNum } =this.props
    return (
        <div className="View_Main_Page" id={`page${PageNum}`}>
          <TopBar 
            onChangeScroll = {Scrolling}
          />
          <Navi/>
          <img src={BottomBtn} alt="하단 버튼" className="DownBtn"/>
        </div>
    );
  }
}
 
export default MainDefaultLayout;