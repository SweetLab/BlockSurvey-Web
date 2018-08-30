import React,{Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {Main, Participate, MyPage, CreateSurvey, DoSurvey} from './container/index';

class App  extends Component {
  render() {
    return (
      <div id="App">
        <BrowserRouter>
          <Switch>
            <Route path='/' component={Main} exact/>
            <Route path='/survey/participate' component={Participate} exact/>
            <Route path = '/mypage' component = { MyPage } exact/>
            <Route path='/survey/create' component = { CreateSurvey } exact/>
            <Route path='/survey/participate/:uid' component = { DoSurvey } exact/>
          </Switch>
        </BrowserRouter>
      </div>
     );
  }
}

export default App;