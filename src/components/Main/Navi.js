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
                <div id={`Navi_id_${item.contentNumber}`} className={`content-nav-off`}>
                    <span id={`Navi_Text_${item.contentNumber}`} className={`content-nav-text-off`}>{item.contentTitle}</span>
                </div>
                <div id={`Navi_circle_${item.contentNumber}`} className="content-circle-off"></div>
            </div>
        ))
    }
}
 
export default Navi;