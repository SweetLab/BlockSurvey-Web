import React, { Component } from 'react';
import TopBar from './TopBar';
import Nav from './Nav';
import '../Css/viewpage.css';
import { onclick, Scroll } from '../Funtion';
import BottomBtn from '../Image/downBtn.png';

class ViewPage1 extends Component {

    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div onChangeScroll={Scroll}   id="page1" className="View_Main_Page">
                <TopBar 
                    onChangeScroll = {onclick}
                />
                <Nav>

                </Nav>
                <img onClick={onclick} src={BottomBtn} alt="하단 버튼"/>
            </div>
         );
    }
}
 
export default ViewPage1;