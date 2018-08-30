import React, { Component,Fragment } from 'react';
import { Logo } from '../../assets/assets'
import './css/MenuSet.css'

class MenuSet extends Component {

    state = {
        onLogin: false,
        onMenu: false,
    }

    render() {
        return (
            <Fragment>
                <header className="Main_Header">
                    <a href="/">
                        <div className="Logo">
                            <img src={Logo} alt="로고" style={{width:"75px"}}/>
                        </div>
                    </a>
                </header>
                <div className="MenuContents">
                    <a href="/"><div className="MenuList">
                        Home
                    </div></a>
                    <a href="/survey/participate"><div className="MenuList">
                        Participate Survey
                    </div></a>
                    <a href="/survey/create"><div className="MenuList">
                        Make Survey
                    </div></a>
                    <a href="/mypage"><div className="MenuList">
                        My Page
                    </div></a>
                </div>
            </Fragment>
        );
    }
}

export default MenuSet;