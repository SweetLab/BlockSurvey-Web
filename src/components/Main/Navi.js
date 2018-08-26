import React, { Component } from 'react';
import '../../components/Main/css/navigation.css';

class Navi extends Component {
    render() { 
        return ( 
            <div className="navigation">
                {this.NaviContent()}
            </div>
         );
    }
    NaviContent() {
        const { content } = this.props
        return content.map(item => (
            <div className="content">
                <div className={`content-nav-${item.contentState}-on`}>
                    <span className="content-nav-text">{item.ContentTitle}</span>
                </div>
                <div className="content-circle"></div>
            </div>
        ))
    }
}
 
export default Navi;