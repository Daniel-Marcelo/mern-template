/* client/src/App.js.
* - Import dependencies.
*/
import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './views/Home';
import List from './views/List';


class App extends Component {
  render() {
    const App = () => (
      <div>
        <BrowserRouter basename='/'>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/list' component={List}/>
          </Switch>
        </BrowserRouter>
      </div>
    )
    return (
      <Switch>
        <App/>
      </Switch>
    );
  }
}


export default App;