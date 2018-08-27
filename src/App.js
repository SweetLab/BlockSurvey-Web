import React,{Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Main from './container/Main/Main';

class App  extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/' component={Main} exact/>
        </Switch>
      </BrowserRouter>
     );
  }
}

export default App;