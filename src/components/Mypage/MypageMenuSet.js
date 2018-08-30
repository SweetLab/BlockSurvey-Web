import React, { Component,Fragment } from 'react';
import { Logo } from '../../assets/assets'
import { menuBtn, menuXbtn} from '../../assets/assets'
import './css/MypageMenuSet.css'

class MypageMenuSet extends Component {

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
                    { this.state.onMenu ? 
                            <img src={menuXbtn} className="MypageMenuBtn" alt="메뉴버튼" onClick={()=> this.setState({onLogin:false, onMenu:false})} style={{width:"75px", height: "75px"}}/> : 
                            <img src={menuBtn} className="MypageMenuBtn" alt="메뉴버튼" onClick={()=> this.setState({onLogin:false, onMenu:true})} style={{width:"75px", height: "75px"}}/>
                        }
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

export default MypageMenuSet;