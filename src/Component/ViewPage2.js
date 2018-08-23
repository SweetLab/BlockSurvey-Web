import React, { Component } from 'react';
import TopBar from './TopBar';
import Nav from './Nav';
import '../Css/viewpage.css';
import { onclick } from '../Funtion';
import BottomBtn from '../Image/downBtn.png';

class ViewPage2 extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div id="page2"  className="View_Main_Page">
                <TopBar>

                </TopBar>
                <Nav>

                </Nav>
                <img onClick={onclick} src={BottomBtn} alt="하단 버튼"/>
            </div>
         );
    }
}
 
export default ViewPage2;