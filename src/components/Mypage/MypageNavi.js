import React, { Component } from 'react';
import './css/navi.css';

class MypageNavi extends Component {
    state = {
        page : 1,
    }
    render() {
        return (
            <div className="MypageNavi">
                <span onClick={() => this.setState({page: 1})} className={`Content_${this.state.turn1 ? `on` : `off`}`}>MY PAGE</span>
                <span onClick={() => this.setState({page : 2})} className={`Content_${this.state.turn2 ? `on` : `off`}`}>SURVEY</span>
            </div>
        );
    }
}

export default MypageNavi;