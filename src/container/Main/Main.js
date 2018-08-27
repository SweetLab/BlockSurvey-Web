import React, { Component } from 'react'
import { CenterBlock, CenterSurvey, CenterMyPage, CenterHelpPage, CenterContact } from './../../components/Main/index';
import ReactFullpage from '@fullpage/react-fullpage'
import '../../components/Main/css/viewpage.css'
import MaindefaultLayout from '../../components/Main/MaindefaultLayout'
import TopBar from '../../components/Main/TopBar'

class Main extends Component {
  render() { 
    return (
      <div>
        <TopBar />
          <ReactFullpage {...this.props.ReactFullpage} render={() => {
            return (
              <div className="View_Main_Page">
                  <MaindefaultLayout pageId={1}>
                    <CenterBlock/>
                  </MaindefaultLayout>
                  <MaindefaultLayout pageId={2}>
                    <CenterSurvey/>
                  </MaindefaultLayout>
                  <MaindefaultLayout pageId={3}>
                    <CenterMyPage/>
                  </MaindefaultLayout>
                  <MaindefaultLayout pageId={4}>
                    <CenterHelpPage/>
                  </MaindefaultLayout>
                  <MaindefaultLayout pageId={5}>
                    <CenterContact/>
                  </MaindefaultLayout>
              </div>
            )
          }}/> 
        </div>
    );
  }
}
 
export default Main;