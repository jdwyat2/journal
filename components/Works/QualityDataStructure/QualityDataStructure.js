import React, { Component } from 'react'
import './QualityDataStructure.css'
import Waypoint from 'react-waypoint'
import Menu from '../../../components/Home/Menu/Menu'
import Social from '../../../components/Home/Social/Social'


class QualityDataStructure extends Component {
  render() {
    return (
      <div className="QualityDataStructure" id="QualityDataStructure">
        <Social />
        <Menu />
        <Waypoint 
          onEnter={() => { document.getElementById('QualityDataStructure').className += ' QualityDataStructure--show' }}
        />
        <article className="article">
          <h1>Quality Data Structure and Reporting</h1>
          <h2>Client:</h2>
          <p>AmSurg</p>
          <p>PICTURE</p>
          <h2>Need:</h2>
          <p>The quality department had a need to find better solutions than creating reports by hand for all reporting needs.
             Though, they did have a rudimentary database, its scope did not include most of the data that they reported on and tracked by hand.
             
          </p>
          <p>PICTURE</p>
          <h2>Role:</h2>
          <p>My role in this project as a business analyst was to design a system of databases that fed into all reporting needs.
          </p>
          <p>PICTURE</p>
          <h2>Method:</h2>
          <p>Methody methods.
          </p>
          <h2>Outcome:</h2>
          <p>The project saved the department an entire FTE in time and freed them to pursue projects that they had planned to pursue for months, but never had the time to complete. 
          Because all reports fed from centralized sources, everything that they presented was agreed and eliminated human error.
          </p>
        </article>
      </div>
    )
  }
}

export default QualityDataStructure
