import React, { Component } from 'react';
import { Survey_BlackUser, Survey_Participate_people } from '../../assets/assets'
import './participateUser.css';

class ParticipateUser extends Component {
    render() {
        return (
            <div className="Bg_BlockBox">
                <div className="SurveyBox">
                    <div className="SurveyInfor">
                        <div className="SurveyTitle">
                            Survey를 위한 Survey
                        </div>
                        <span className="SurveyUser" >{`{Owner Name}`}</span>
                        <div className="SurveyMember">
                            <img className="BlackUser" src={Survey_BlackUser} alt="검은색 사람 이미지"/>
                            <span className="UserCount">1,000,000</span>
                        </div>
                    </div>
                    <div className="SurveyState">
                        <div className="SurveyJoiner">
                            <img className="BlueUser" src={Survey_Participate_people} alt="파란색 사람 이미지"/>
                            <div className="MemberCount">15/15</div>
                        </div>
                            <div className="SurveyBtn">
                                <span className="BtnText">Join</span>
                            </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ParticipateUser;