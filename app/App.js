import React, { Component } from 'react';
import { BrowserRouter as HashRouter, Route, Switch } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';
import './App.css';
import Home from '../components/Home/Home';
import Error404 from '../components/Error404/Error404';
import About from '../components/About/About';
import Portfolio from '../components/Portfolio/Portfolio';
import BlockTimeStudy from '../components/Works/BlockTimeStudy/BlockTimeStudy';
import QualityDataStructure from '../components/Works/QualityDataStructure/QualityDataStructure';

class App extends Component {
  render() {
    return (
      <ParallaxProvider>
        <div className="app">
          <HashRouter>
            <div>
              <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/#/" component={Home}/>
                <Route path="/BlockTimeStudy" component={BlockTimeStudy}/>
                <Route path="/QualityDataStructure" component={QualityDataStructure}/>
              </Switch>
            </div>
          </HashRouter>
        </div>
      </ParallaxProvider>
    );
  }
}

export default App
