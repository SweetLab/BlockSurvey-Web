import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './css/TopBar.css';

class TopBar extends Component {
    render() {
        return (
            <div className="MypageTopbar">
                <Link to="/">
                    <div className="Logo"></div>
                </Link>
                <div className="filter"></div>
                <div className="Menu"></div>
            </div>
        );
    }
}

export default TopBar;