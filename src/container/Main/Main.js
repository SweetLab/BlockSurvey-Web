import React, { Component } from 'react'
import CenterBlock from '../../components/Main/CenterBlock'
import CenterSurvey from '../../components/Main/CenterSurvey'
import CenterMyPage from '../../components/Main/CenterMyPage'
import CenterHelpPage from '../../components/Main/CenterHelpPage'
import CenterContact from '../../components/Main/CenterContact'
import ReactFullpage from '@fullpage/react-fullpage'
import '../../components/Main/css/viewpage.css'
import MaindefaultLayout from '../../components/Main/MaindefaultLayout'
import Navi from '../../components/Main/Navi'
import TopBar from '../../components/Main/TopBar'
// import { onChangeMain } from '../../core/ScrollEvent'

class Main extends Component {
  state = {
    content : {
      contentTitle : [`B`, `S`, `M`, `H`, `C`],
      contentState : [`1`,`2`,`3`,`4`,`5`]
    }
  }
  render() { 
    return (
      <div>
        <Navi
          content={this.state.content}
         /> 
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