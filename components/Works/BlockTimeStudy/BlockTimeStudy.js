import React, { Component } from 'react'
import './BlockTimeStudy.css'
import Waypoint from 'react-waypoint'
import Menu from '../../../components/Home/Menu/Menu'
import Social from '../../../components/Home/Social/Social'


class BlockTimeStudy extends Component {
  render() {
    return (
      <div className="BlockTimeStudy" id="BlockTimeStudy">
        <Social />
        <Menu />
        <Waypoint 
          onEnter={() => { document.getElementById('BlockTimeStudy').className += ' BlockTimeStudy--show' }}
        />
        <article className="article">
          <h1>Block Time Study Stuff</h1>
          <h2>Client:</h2>
          <p>AmSurg</p>
          <p>PICTURE</p>
          <h2>Need:</h2>
          <p>AmSurg needed a fast way to collect data, analyze that data, and return the analysis back to clients quickly.
             Specifically, their clients needed to better understand how to schedule physicians and staff to maximize clinical efficiency.
          </p>
          <p>PICTURE</p>
          <h2>Role:</h2>
          <p>This project needed a solution that was not only scalable across multiple clinics, but could be flexible enough to answer several different scheduling and time management questions.
             My role in the project was to build a data collection tool, and a dashboard to display the most common questions. I created a data collection tool and database store data. Then I created an easy to understand, but robust dashboard for them to use during discussions with clinics
          </p>
          <p>PICTURE</p>
          <h2>Method:</h2>
          <p>I created a form that was simple enough for a clincal person to input data that was not already being collected in normal procedures, and called an API to pull the data into a database.
             PowerBI was used to display ongoing analysis and to benchmark how each clinic does relative to other similar clinics.
          </p>
          <h2>Outcome:</h2>
          <p>Outcomey outcomes.
          </p>
        </article>
      </div>
    )
  }
}

export default BlockTimeStudy
