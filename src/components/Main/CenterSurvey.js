import React, { Component } from 'react';
import './css/centerSurvey.css';

class CenterSurvey extends Component {
    render() { 
        return ( 
            <div className="BlockSurvey">
                <div className="Participate_wrapper">
                    <div className="Block_title">
                        <span>Participate in</span><br/> Survey
                    </div>
                    <a href="/survey/participate">
                        <div className="Block_btn">
                            Paricipate<span className="btn_arrow">➔</span>
                        </div>
                    </a>
                </div>
                <div className="Make_wrapper">
                    <a href="/survey/create">
                        <div className="Block_btn">
                            Make<span className="btn_arrow">➔</span>
                        </div>
                    </a>
                    <div className="Block_title">
                        <span>Make</span><br/>Survey
                    </div>
                </div>
            </div>
         );
    }
}
 
export default CenterSurvey;