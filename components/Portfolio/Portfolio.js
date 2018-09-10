import React, { Component } from 'react'
import './Portfolio.css'
import Waypoint from 'react-waypoint'

class Portfolio extends Component {
  render() {
    return (
      <div className="portfolio" id="portfolio">
        <Waypoint 
          onEnter={() => { document.getElementById('portfolio').className += ' portfolio--show' }}
          onLeave={() => { document.getElementById('portfolio').className = 'portfolio' }}
        />
        <article className="article">
          <h1>Selected Works</h1>
          <ul className="portfolio-list">
            <a href="BlockTimeStudy">
              <li className="portfolio-list_item">
                <div className="portfolio-list_item-name">Outpatient Surgery Center Block Time Study</div>
                <div className="portfolio-list_item-role">BI Developer</div>
                <div className="portfolio-list_item-client">Amsurg, 2017</div>
              </li>
            </a>
            
            <a href="QualityDataStructure">
              <li className="portfolio-list_item">
                <div className="portfolio-list_item-name">Quality Clinical Data and Reporting Structure</div>
                <div className="portfolio-list_item-role">Business Analyst</div>
                <div className="portfolio-list_item-client">Amsurg, 2017</div>
              </li>
            </a>
            
          </ul>
        </article>
      </div>
    )
  }
}

export default Portfolio
