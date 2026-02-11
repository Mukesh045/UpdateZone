import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import About from './components/About';
import LoadingBar from "react-top-loading-bar";
import {
   BrowserRouter as Router, 
   Route,
   Routes
} from 'react-router-dom';


export default class App extends Component {
  pageSize = 5;
    state = {
      progress: 0
    }
  setProgress = (progress) => {
    this.setState({ progress: progress });
  }
  
  render() {
    return (
      <div>
      <Router basename={process.env.NODE_ENV === 'production' ? '/UpdateZone' : ''}>
        <Navbar/>
        <LoadingBar
        color="#199ef1ff"
        progress={this.state.progress}
        
      />
        <Routes>
          <Route  exact path="/" element={<News setProgress={this.setProgress} key="home" pageSize={5} country="us" category="general"/>} />
          <Route  exact path="/business" element={<News setProgress={this.setProgress} key="business" pageSize={5} country="us" category="business"/>} />
          <Route  exact path="/entertainment" element={<News setProgress={this.setProgress} key="entertainment" pageSize={5} country="us" category="entertainment"/>} />
          <Route  exact path="/health" element={<News setProgress={this.setProgress} key="health" pageSize={5} country="us" category="health"/>} />
          <Route  exact path="/science" element={<News setProgress={this.setProgress} key="science" pageSize={5} country="us" category="science"/>} />
          <Route  exact path="/sports" element={<News setProgress={this.setProgress} key="sports" pageSize={5} country="us" category="sports"/>} />
          <Route  exact path="/technology" element={<News setProgress={this.setProgress} key="technology" pageSize={5} country="us" category="technology"/>} />
          <Route  exact path="/about" element={<About />} />
        </Routes>
      </Router>
      </div>
    )
  }
}
