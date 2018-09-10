import React, { Component } from 'react'
import './Menu.css'

class Menu extends Component {
  constructor() {
    super();
    
    this.state = {
      showMenu: false,
    }
    
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }
  
  showMenu(event) {
    event.preventDefault();
    
    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }
  
  closeMenu() {
    this.setState({ showMenu: false }, () => {
      document.removeEventListener('click', this.closeMenu);
    });
  }
  
  render() {
    return (
      <div>
        <button onClick={this.showMenu} className="menu-link" id="menu-link">
          <div className="menu-link__wrapper">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </button>
        
        {
          this.state.showMenu
            ? (
              <div className="menu-items">
                <div>
                  <button>
                    <a href="../">H</a> 
                  </button>
                </div>
                <div>
                  <button> 
                    <a href="../#about">A</a> 
                  </button>
                </div>
                <div>
                  <button> 
                    <a href="../#portfolio">P</a> 
                  </button>
                </div>
              </div>
            )
            : (
              null
            )
        }
      </div>
    );
  }
}
export default Menu
