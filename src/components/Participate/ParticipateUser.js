import React, { Component } from 'react';
import { Survey_Participate_people } from '../../assets/assets'
import {Link} from 'react-router-dom';
import './css/participateUser.css';

class ParticipateUser extends Component {
    render() {
        const {title, surveyId, limit} = this.props;
        return (
            <div className="Survey_ParticipateUser">
                <div className="SurveyBox">
                    <div className="SurveyInfor">
                        <div className="SurveyTitle">
                            {title}
                        </div>
                        <span className="SurveyUser" >No. {surveyId}</span>
                    </div>
                    <div className="filter"></div>
                    <div className="SurveyState">
                        <div className="SurveyJoiner">
                            <img className="BlueUser" src={Survey_Participate_people} alt="파란색 사람 이미지"/>
                            <div className="MemberCount">정원 {limit}명</div>
                        </div>
                            
                                <div className="SurveyBtn">
                                <Link to={`/survey/participate/${surveyId}`}>
                                    <span className="BtnText">Join</span>
                                    </Link>
                                </div>
                            
                    </div>
                </div>
            </div>               
        );
    }
}

export default ParticipateUser;