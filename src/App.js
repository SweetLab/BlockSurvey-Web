import React,{Component} from 'react';
import { Scroll } from './Funtion';
import ViewPage1 from './Component/ViewPage1';
import ViewPage2 from './Component/ViewPage2';
import ViewPage3 from './Component/ViewPage3';
import ViewPage4 from './Component/ViewPage4';
import ViewPage5 from './Component/ViewPage5';

class App  extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }


  render() { 
    return ( 
      <div onScroll={`${Scroll}`} className="App_Main">
        <ViewPage1 />
        <ViewPage2 />
        <ViewPage3 />
        <ViewPage4 />
        <ViewPage5 />
      </div>
     );
  }
}

export default App;