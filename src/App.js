import React,{Component} from 'react';
// import Main from './container/Main/Main'
import ReactFullpage from '@fullpage/react-fullpage';
import MainDefaultLayout from './components/Main/MaindefaultLayout'

class App  extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullpageOptions : {
        callbacks: ['onLeave'],
      },
    }
  }
  render() {
    return ( 
      <div>
        <ReactFullpage {...this.state.fullpageOptions} 
        render={({ state, fullpageApi }) => (
          <div>
          <div className="section">
            <MainDefaultLayout PageNum={1}/>
          </div>
          <div className="section">
            <MainDefaultLayout PageNum={2}/>
          </div>
          <div className="section">
            <MainDefaultLayout PageNum={3}/>
          </div>
          <div className="section">
            <MainDefaultLayout PageNum={4}/>
          </div>
          <div className="section">
            <MainDefaultLayout PageNum={5}/>
          </div>
        </div>
        )}/>
      </div>
     );
  }
}

export default App;