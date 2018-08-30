import React, { Component } from 'react';
import './css/TopBar.css';

class MypageTopBar extends Component {
    render() {
        return (
            <div className="MypageTopbar">
                <a href="/">
                    <div className="Logo"></div>
                </a>
                <div className="filter"></div>
                <div className="Menu"></div>
            </div>
        );
    }
}

export default MypageTopBar;