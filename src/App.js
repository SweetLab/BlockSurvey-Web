<<<<<<< HEAD
import React,{ Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Main, Participate, CreateSurvey } from './container/index'
=======
import React,{Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {Main, Participate, MyPage} from './container/index'
import BlockSurvey from './core/BlockSurvey'
>>>>>>> 0059cc9f9cf222378807e1b66d7873aa12b00dd7

class App  extends Component {
  render() {
    return (
      <div id="App">
        <BlockSurvey/>
        <BrowserRouter>
          <Switch>
<<<<<<< HEAD
            <Route path='/' component = { Main } exact/>
            <Route path='/survey/participate' component = { Participate } exact/>
            <Route path='/survey/create' component = { CreateSurvey } exact/>
=======
            <Route path='/' component={Main} exact/>
            <Route path='/survey/participate' component={Participate} exact/>
            <Route path = '/mypage' component = { MyPage } exact/>
>>>>>>> 0059cc9f9cf222378807e1b66d7873aa12b00dd7
          </Switch>
        </BrowserRouter>
      </div>
     );
  }
}

export default App;