import React, { Component } from 'react'
import Tilt from 'react-tilt'
import './Heading.css'

class Heading extends Component {
  componentDidMount() {
    setTimeout(function() {
      document.getElementById('heading').className += ' heading--show'
      let headingStrapline = document.getElementById('heading__text')

      // Start colour
      let colourUpdate = 200

      function updateColour() {
        headingStrapline.style.color = "hsla(" + (colourUpdate % 360) + ", 100%, 50%, 0.8)"
        colourUpdate -= 0
      }

      setInterval(updateColour, 60)
    }, 700);
  }

  render() {
    return (
      <div className="heading" id="heading">
        <Tilt className="heading__tilt Tilt" options={{ max : 0, speed: 2500, scale: 1, perspective: 400, reverse: true }}>
          <h1 data-text="" id="heading__text" className="heading__text Tilt-inner">
            Jonathan Wyatt
            <span id="heading-strapline" data-text="BI Developer">BI Developer</span>
          </h1>
        </Tilt>
      </div>
    )
  }
}

export default Heading
