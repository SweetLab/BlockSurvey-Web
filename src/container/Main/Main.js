import React, { Component } from 'react';
import TopBar from '../../components/Main/TopBar';
import Navi from '../../components/Main/Navi';
import CenterBlock from '../../components/Main/CenterBlock';
import CenterSurvey from '../../components/Main/CenterSurvey';
import CenterMyPage from '../../components/Main/CenterMyPage';
import CenterHelpPage from '../../components/Main/CenterHelpPage';
import CenterContact from '../../components/Main/CenterContact';
import ReactFullpage from '@fullpage/react-fullpage';
import '../../components/Main/css/viewpage.css';

class Main extends Component {
  render() { 
    return (
      
      <div>
          <ReactFullpage {...this.props.ReactFullpage} render={() => {
            return (
              <div className="View_Main_Page">
                  <div id="page1" className="section">
                  <TopBar />
                  <Navi />
                  <CenterBlock/>
                </div>
                <div id="page2" className="section">
                  <TopBar />
                  <Navi />
                  <CenterSurvey/>
                </div>
                <div id="page3" className="section">
                  <TopBar />
                  <Navi />
                  <CenterMyPage/>
                </div>
                <div id="page4" className="section">
                  <TopBar />
                  <Navi />
                  <CenterHelpPage/>
                </div>
                <div id="page5" className="section">
                  <TopBar />
                  <Navi />
                  <CenterContact/>
                </div>
              </div>
            )
          }}/> 
        </div>
    );
  }
}
 
export default Main;