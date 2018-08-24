import React, { Component } from 'react';
import Logo from '../../assets/Logo.png';
import Menu from '../../assets/menuBtn.png';
import './css/topbar.css'

class TopBar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <header className="Main_Header">
                <div className="Logo">
                    <img src={Logo} alt="로고"/>
                </div>
                <div className="MenuBtn">
                    <img src={Menu} alt="메뉴버튼"/>
                </div>
            </header>
         );
    }
}
 
export default TopBar;