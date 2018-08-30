import React, { Component } from 'react';
import './css/navi.css';

class Navi extends Component {
    render() {
        return (
            <div className="MypageNavi">
                <span className="Content">MY PAGE</span>
                <span className="Content">SURVEY</span>
                <span className="Content">WHAT</span>
            </div>
        );
    }
}

export default Navi;