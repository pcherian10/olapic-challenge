import React, { Component } from 'react';
import DisplayPictures from './components/DisplayPictures' 
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <DisplayPictures />
      </div>
    );
  }
}

export default App;
