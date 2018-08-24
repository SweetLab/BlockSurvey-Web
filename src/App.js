import React,{Component} from 'react';
import Main from './container/Main/Main';

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
        <Main 
          ReactFullpage = {this.state.fullpageOptions}
        />
     );
  }
}

export default App;