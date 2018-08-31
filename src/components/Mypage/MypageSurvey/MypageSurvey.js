import React, { Component } from 'react';
import RecentContent from './RecentContent';
import RecentBtnContent from './RecentBtnContent';
import '../css/MypageSurvey.css';

class MypageSurvey extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="MypageSurvey">
                <div className="MypageContent">
                    <div className="BasicSurvey">
                        <div className="BasicSurveyTitle">Surveys</div>
                        <div className="BasicContent">
                            <div className="CreateContent">
                                <span className="ContentName">Create</span>
                                <span className="ContentValue">7</span>
                            </div>
                            <div className="ParticipateContent">
                                <span className="ContentName">Participate</span>
                                <span className="ContentValue">3</span>
                            </div>
                            <div className="SurveyCoinContent">
                                <span className="ContentName">Survey Coin</span>
                                <span className="ContentValue">12,400</span>
                            </div>
                        </div>
                    </div>
                    <div className="RecentSurvey">
                        <div className="RecentSurveyTitle">Recent Surveys</div>
                            <RecentContent/>
                            <RecentContent/>
                            <RecentContent/>
                    </div>
                    <div className="CreatedSurvey">
                        <div className="CreatedSurveyTitle">Created Surveys</div>
                            <RecentBtnContent/>
                            <RecentBtnContent/>
                            <RecentBtnContent/>
                    </div>
                    <div className="ParticipatedSurvey">
                        <div className="ParticipatedSurveyTitle">Participated in Surveys</div>
                            <RecentContent/>
                            <RecentContent/>
                            <RecentContent/>
                    </div>   
                </div>                                             
            </div>
         );
    }
}
 
export default MypageSurvey;