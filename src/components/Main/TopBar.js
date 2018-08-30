import React, { Component,Fragment } from 'react';
import './css/topbar.css'
import {Logo, menuBtn, menuXbtn} from '../../assets/assets'
import MenuDefaultLayout from '../Menu/MenuDefaultLayout'
import Login from '../Menu/Login'
import MenuSet from '../Menu/MenuSet'

class TopBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            onLogin: false,
            onMenu: false,
        }
    }
    render() { 
        const { onLogin, onMenu } = this.state;
        return (
            <Fragment>
                <header className="Main_Header">
                    <a href="/">
                        <div className="Logo">
                            <img src={Logo} alt="로고" style={{width:"75px"}}/>
                        </div>
                    </a>
                    
                    <div className="MenuBtn">
                    <div className="filter"></div>
                        {onLogin | onMenu ? 
                            <img src={menuXbtn} alt="메뉴버튼" onClick={()=> this.setState({onLogin:false, onMenu:false})} style={{width:"75px", height: "75px"}}/> : 
                            <img src={menuBtn} alt="메뉴버튼" onClick={()=> this.setState({onLogin:false, onMenu:true})} style={{width:"75px", height: "75px"}}/>
                        }
                    </div>
                </header>
                { onLogin ? <MenuDefaultLayout><Login /></MenuDefaultLayout>: null}
                { onMenu ?  <MenuDefaultLayout><MenuSet /></MenuDefaultLayout>: null}
            </Fragment>
         );
    }
}
 
export default TopBar;