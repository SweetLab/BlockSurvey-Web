import React, { Component } from 'react';
import MenuDefaultLayout from '../Menu/MenuDefaultLayout'
import MypageMenuSet from './MypageMenuSet'
import './css/TopBar.css';

class MypageTopBar extends Component {

    state = {
        onMenu : false
    }

    render() {
        return (
            <div className="MypageTopbar">
                <a href="/">
                    <div className="Logo"></div>
                </a>
                <div className="filter"></div>
                <div onClick = {() => this.setState({ onMenu : !this.state.onMenu })} className="Menu"></div>
                { this.state.onMenu ?  <MenuDefaultLayout><MypageMenuSet /></MenuDefaultLayout>: null}
            </div>
        );
    }
}

export default MypageTopBar;