import React, { Component } from 'react';
import MypageDefaultLayout from '../../components/Mypage/MypageDefaultLayout';

class MyPage extends Component {
  render() { 
    return (
      <div className="MyPage" style={{width:'100%'}}>
        <MypageDefaultLayout/>
      </div>
    );
  }
}
 
export default MyPage;