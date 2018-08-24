import React, { Component } from 'react';
import {ClickScroll} from '../../core/ScrollEvent'
import MainDefaultLayout from '../../components/Main/MaindefaultLayout'

class Main extends Component {
  render() { 
    return (
      <div onScroll={ClickScroll()} className="App_Main">
        <MainDefaultLayout PageNum={1}/>
        <MainDefaultLayout PageNum={2}/>
        <MainDefaultLayout PageNum={3}/>
        <MainDefaultLayout PageNum={4}/>
        <MainDefaultLayout PageNum={5}/>
      </div>
    );
  }
}
 
export default Main;