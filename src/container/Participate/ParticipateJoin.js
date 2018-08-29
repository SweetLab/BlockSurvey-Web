import React, { Component } from 'react';
import { Logo, Blackmenubtn, DownArrowBtn } from '../../assets/assets'
import './ParticipateJoin.css';

class Participate extends Component {
    render() {
        return (
            <div className="Participate_Join">
                <header className="Topbar">
                    <div className="Logo">
                        <img src={Logo} alt="로고"/>
                    </div>
                    <div className="TopBtns">
                        <div className="Down_Arrow">
                            <img src={DownArrowBtn} alt="아래_화살표"/>
                        </div>
                        <div className="MenuBtn">
                            <img src={Blackmenubtn} alt="메뉴버튼"/>
                        </div>
                    </div>
                </header>
                {this.props.children}
            </div>
        );
    }
}

export default Participate;