import React, { Component } from 'react'
import './ScrollArrow.css'
import { Parallax } from 'react-scroll-parallax'
import Scrollchor from 'react-scrollchor'

class ScrollArrow extends Component {
  render() {
    return (
      <Parallax className="scroll-arrow-container" offsetYMin={-4000}>
        <Scrollchor to="#about" animate={{offset: -200, duration: 800}} className="c-scroll-icon">
          <div className="c-scroll-icon-line-mask"><div className="c-scroll-icon-line"></div></div>
          <div className="c-scroll-icon-triangle">
            <div className="c-scroll-icon-triangle-mask first"><div className="c-scroll-icon-triangle-line first"></div></div>
            <div className="c-scroll-icon-triangle-mask right"><div className="c-scroll-icon-triangle-line right"></div></div>
            <div className="c-scroll-icon-triangle-mask left"><div className="c-scroll-icon-triangle-line left"></div></div>
            <div className="c-scroll-icon-triangle-mask last"><div className="c-scroll-icon-triangle-line last"></div></div>
          </div>
        </Scrollchor>
      </Parallax>
    )
  }
}

export default ScrollArrow
