import React, { Component } from 'react';
import Header from './Components/Theme/Header';
import Menu from './Components/Theme/Menu';
import {Router, Route, Switch} from 'react-router';
import indexRoutes from './routes'
import {createBrowserHistory} from "history";
var hist = createBrowserHistory();

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="page-header">
        <Header/>
        <Menu />
        </div>
        <section className="content">
          <Router history={hist}>
            <Switch>
              {indexRoutes.map((prop, key) => {
                return <Route path={prop.path} key={key} 
                  component={prop.component}
                  />
                    
              })}
            </Switch>
          </Router>
        </section>       
      </div>
    );
  }
}

export default App;
