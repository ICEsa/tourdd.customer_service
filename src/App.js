import React, { Component } from 'react';
import Header from './Components/Theme/Header';
import Menu from './Components/Theme/Menu';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="page-header">
        <Header/>
        <Menu />
        </div>
        <section>
          
        </section>       
      </div>
    );
  }
}

export default App;
