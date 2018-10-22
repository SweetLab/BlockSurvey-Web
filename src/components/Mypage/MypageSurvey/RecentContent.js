import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import { Survey_BlackUser, Survey_Participate_people } from '../../../assets/assets';
import './css/RecentContent.css'

class RecentContent extends Component {
    render() {
        const {title, surveyId, limit} = this.props;
        return (
            <div className="_Survey_ParticipateUser" onClick={()=> window.location.href="/mypage/result/1"}>
                <div className="_SurveyBox">
                    <div className="_SurveyInfor">
                        <div className="_SurveyTitle">
                            {title}
                        </div>
                        <span className="_SurveyUser" >No. {surveyId}</span>
                    </div>
                    <div className="filter"></div>
                    <div className="_SurveyICON">
                        <div className="_SurveyJoiner">
                            <img className="_BlueUser" src={Survey_Participate_people} alt="파란색 사람 이미지"/>
                            <div className="_MemberCount">{`정원 ${limit}명`}</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default RecentContent;