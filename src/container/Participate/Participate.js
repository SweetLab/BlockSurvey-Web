import React, { Component } from 'react';
import '../../components/Participate/css/participate.css';
import Navi from '../../components/Participate/Navi';
import { ParticipateJoin, ParticipateUser } from '../../components/Participate'
import axios from 'axios'

class Participate extends Component {
  constructor(props){
    super(props);
    this.state={
      list:[]
    }
  }
  componentWillMount(){
    axios.get('http://35.200.68.244:8080/surveys/list',).then(res=>{
      if(res.status === 200) {
        this.setState({list:res.data})
      }
    })
  }
  render() { 
    return (
      <div className="Participate">
        <Navi />
        <div className="Participate_Main">
          <div className="Participate_Text">
            <div className="Survie_Part_title">Survey</div>
            <div className="Survie_Part_mini_title">(Participate in)</div>
            <div className="Survie_Part_msg">Suggestions, Recommands, Chose</div>
          </div>
        </div>
        <ParticipateJoin>
          {this.renderList()}
        </ParticipateJoin>
      </div>
    );
  }
  renderList(){
    const {list} = this.state;
    return list.map(content=>(
        <ParticipateUser title={content.title} surveyId={content.surveyId} limit={content.limit}/>
    ))
    
  }
}
 
export default Participate;