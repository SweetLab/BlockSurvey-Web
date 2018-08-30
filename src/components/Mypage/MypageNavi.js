import React, { Component } from 'react';
import './css/navi.css';

class MypageNavi extends Component {
    state = {
        turn1 : true,
        turn2 : false,
        turn3 : false
    }
    render() {
        return (
            <div className="MypageNavi">
                <span onClick={() => this.setState({turn1 : !this.state.turn1, turn2 : false, turn3 : false})} className={`Content_${this.state.turn1 ? `on` : `off`}`}>MY PAGE</span>
                <span onClick={() => this.setState({turn2 : !this.state.turn2, turn1 : false, turn3 : false})} className={`Content_${this.state.turn2 ? `on` : `off`}`}>SURVEY</span>
                <span onClick={() => this.setState({turn3 : !this.state.turn3, turn2 : false, turn1 : false})} className={`Content_${this.state.turn3 ? `on` : `off`}`}>WHAT</span>
            </div>
        );
    }
}

export default MypageNavi;