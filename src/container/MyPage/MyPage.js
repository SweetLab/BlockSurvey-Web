import React, { Component } from 'react';
import MypageDefaultLayout from '../../components/Mypage/MypageDefaultLayout';
import { MypageTopBar, MypageNavi, MypageMain, MypageSurvey } from './../../components/Mypage/index';
import {Link} from 'react-router-dom'
import cookie from 'react-cookies'


class Mypage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page:0
    }
    this.changePage = this.changePage.bind(this)
  }
  render() { 
    return (
      <div className="MyPage" style={{width:'100%', height:'100vh', backgroundColor: ' #f2f2f2'}}>
        <MypageDefaultLayout changePage={this.changePage}>
          {cookie.load("Token") ? 
          <React.Fragment>
            <MypageNavi page={this.state.page} changePage={this.changePage}/>
            {this.state.page===0 ? <MypageMain /> : <MypageSurvey />}
          </React.Fragment> :
          <div className="Mypage-ErrorMsg">My Page is available after login.
          <br/>
          <Link to="/" >Go to Main</Link>
          </div>
          }
        </MypageDefaultLayout>
      </div>
    );
  }
  changePage(index){
    this.setState({page:index});
    return;
  }
}
 
export default Mypage;