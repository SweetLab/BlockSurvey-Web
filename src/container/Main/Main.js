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
import { onChangeMain } from '../../core/ScrollEvent'

class Main extends Component {
  state = {
    content : [
      {
        contentTitle : `B`,
        contentNumber : `1`
      },
      {
        contentTitle : `S`,
        contentNumber : `2`
      },
      {
        contentTitle : `M`,
        contentNumber : `3`
      },
      {
        contentTitle : `H`,
        contentNumber : `4`
      },
      {
        contentTitle : `C`,
        contentNumber : `5`
      }
    ]
  }

  componentDidMount() {
    onChangeMain()
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