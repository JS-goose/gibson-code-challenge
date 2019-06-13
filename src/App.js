import React, { Component } from 'react';
import axios from 'axios';
import Nav from './components/Nav/Nav';
import CenterContent from './components/CenterContent/CenterContent';
import Footer from './components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <CenterContent/>
        <Footer />
      </div>
    );
  }
}

export default App;
