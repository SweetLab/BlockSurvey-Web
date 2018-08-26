import React, { Component } from 'react';
import './css/centerSurvey.css';

class CenterSurvey extends Component {
    render() { 
        return ( 
            <div className="BlockSurvey">
                <div className="Survey_title_1">
                    Participate in <span className="Survey_Bold_title_1">Survey</span>
                </div>
                <div className="Survey_btn_1">
                    <div className="Block_btn">
                        Paricipate<span className="btn_arrow">➔</span>
                    </div>
                </div>
                <div className="Survey_btn_2">
                    <div className="Block_btn">
                        Make<span className="btn_arrow">➔</span>
                    </div>
                </div>
                <div className="Survey_title_2">
                    <span className="Survey_min_title_2">Make</span> Survey
                </div>
            </div>
         );
    }
}
 
export default CenterSurvey;