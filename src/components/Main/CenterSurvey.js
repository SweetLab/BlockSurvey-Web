import React, { Component } from 'react';
import './css/centerSurvey.css';

class CenterSurvey extends Component {
    render() { 
        return ( 
            <div className="BlockSurvey">
                <div className="Survey_title_1">
                    Participate in <span className="Survey_Bold_title_1">Survey</span>
                </div>
                <div className="Contact_btn_1">
                    Paricipate
                </div>
                <div className="Contact_btn_2">
                    Make
                </div>
                <div className="Survey_title_2">
                    <span className="Survey_min_title_2">Make</span> Survey
                </div>
            </div>
         );
    }
}
 
export default CenterSurvey;