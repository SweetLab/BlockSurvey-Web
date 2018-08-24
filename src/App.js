import React,{Component} from 'react';
// import Main from './container/Main/Main'
import {SectionsContainer, Section } from 'react-fullpage';
import MainDefaultLayout from './components/Main/MaindefaultLayout'
import Main from './container/Main/Main'

class App  extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options : {
        sectionClassName : 'section',
        anchors : ['page1', 'page2', 'page3', 'page4', 'page5'],
      }
    }
  }
  render() {
    return ( 
      <div>
        <SectionsContainer {...this.state.options}>
          <Section>
            <MainDefaultLayout PageNum={1}/>
          </Section>
          <Section>
            <MainDefaultLayout PageNum={2}/>
          </Section>
          <Section>
            <MainDefaultLayout PageNum={3}/>
          </Section>
          <Section>
            <MainDefaultLayout PageNum={4}/>
          </Section>
          <Section onChange={this.handleSectionChange}>
            <MainDefaultLayout PageNum={5}/>
          </Section>
        </SectionsContainer>
      </div>
     );
  }
}

export default App;