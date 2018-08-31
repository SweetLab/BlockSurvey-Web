import React, { Component } from 'react';
import './css/navi.css';

class MypageNavi extends Component {
    render() {
        return (
            <div className="MypageNavi">
                <span onClick={() => this.props.changePage(0)} className={`MypageMenu ${this.props.page===0 ? `Content_on` : `off`}`}>MY PAGE</span>
                <span onClick={() => this.props.changePage(1)} className={`MypageMenu ${this.props.page===1 ? `Content_on` : `off`}`}>SURVEY</span>
            </div>
        );
    }
}

export default MypageNavi;