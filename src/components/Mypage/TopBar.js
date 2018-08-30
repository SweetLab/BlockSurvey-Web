import React, { Component } from 'react';
import './css/TopBar.css';

class TopBar extends Component {
    render() {
        return (
            <div className="MypageTopbar">
                <div className="Logo"></div>
                <div className="filter"></div>
                <div className="Menu"></div>
            </div>
        );
    }
}

export default TopBar;