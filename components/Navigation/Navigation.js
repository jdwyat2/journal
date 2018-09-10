import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import './Navigation.css'

class Navigation extends Component {
  render() {
    return (
      <nav className="navigation" id="navigation">
        <NavLink exact to="/" className="navigation__item" activeClassName="navigation__item--active">Home</NavLink>
        <NavLink to="/about" className="navigation__item" activeClassName="navigation__item--active">About</NavLink>
        <NavLink to="/work" className="navigation__item" activeClassName="navigation__item--active">Work</NavLink>
        <NavLink to="/playground" className="navigation__item" activeClassName="navigation__item--active">Play</NavLink>
      </nav>
    )
  }
}

export default Navigation
