import React,{Component} from 'react';
import {SectionsContainer, Section, Header, Footer } from 'react-fullpage';
import MainDefaultLayout from './components/Main/MaindefaultLayout'

class App  extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options : {
        sectionClassName : 'section',
        anchors : ['page1', 'page2', 'page3', 'page4','page5'],
      }
    }
  }
  render() {
    return ( 
        <SectionsContainer {...this.state.options}>
          <Section>
            <MainDefaultLayout PageNum={2}/>
          </Section>
          <Section>
            <MainDefaultLayout PageNum={3}/>
          </Section>
          <Section>
            <MainDefaultLayout PageNum={4}/>
          </Section>
          <Section>
            <MainDefaultLayout PageNum={5}/>
          </Section>
          <Section>
            <MainDefaultLayout PageNum={6}/>
          </Section>
        </SectionsContainer>
     );
  }
}

export default App;