import React, { Component } from 'react';
import { Survey_BlackUser, Survey_Participate_people } from '../../../assets/assets';
import './css/RecentBtnContent.css'

class RecentBtnContent extends Component {
    render() {
        return (
            <div className="_Survey_ParticipateUser">
                <div className="_SurveyBox">
                    <div className="_SurveyInfor">
                        <div className="_SurveyTitle">
                            What is love
                        </div>
                        <span className="_SurveyUser" >qudtls123</span>
                        <div className="_SurveyMember">
                            <img className="_BlackUser" src={Survey_BlackUser} alt="검은색 사람 이미지"/>
                            <span className="_UserCount">1,000,000</span>
                        </div>
                    </div>
                    <div className="filter"></div>

                    <div className="RaffleComplate">
                        <div className="Raffle">추첨</div>
                        <div className="Complate">완료</div>
                    </div>

                    <div className="_SurveyICON">
                        <div className="_SurveyJoiner">
                            <img className="_BlueUser" src={Survey_Participate_people} alt="파란색 사람 이미지"/>
                            <div className="_MemberCount">15/15</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default RecentBtnContent;