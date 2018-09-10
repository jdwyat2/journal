import React, { Component } from 'react'
import './WorkLink.css'
import { Parallax } from 'react-scroll-parallax'

class WorkLink extends Component {
  render() {
    return (
      <Parallax className="work-link-container" offsetYMin={-3000}>
        <div className="work-link">
          <a href="Portfolio">Selected Works</a>
        </div>
      </Parallax>
    )
  }
}

export default WorkLink


