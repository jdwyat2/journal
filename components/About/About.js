import React, { Component } from 'react'
import './About.css'
import Waypoint from 'react-waypoint'

class About extends Component {
  render() {
    return (
      <div className="about" id="about">
        <Waypoint 
          onEnter={() => { document.getElementById('about').className += ' about--show' }}
          onLeave={() => { document.getElementById('about').className = 'about' }}
        />
        <article className="article">
          <h1>BI Developer based in Nashville.</h1>
          <p>I leverage data to find new business insights.</p>
          <p>Currently working as a Business Analyst in the healthcare industry.</p>
        </article>
      </div>
      
    )
  }
}

export default About
