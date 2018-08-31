import React, { Component } from 'react';
import MypageDefaultLayout from '../../components/Mypage/MypageDefaultLayout';


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
        <MypageDefaultLayout page={this.state.page} changePage={this.changePage}/>
      </div>
    );
  }
  changePage(index){
    this.setState({page:index});
    return;
  }
}
 
export default Mypage;