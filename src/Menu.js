import React from 'react';
import './Menu.css';
import revision from './revision.png';
import ekonomiservice from './ekonomiservice.png';
import skatt from './skatt.png';

class Menu extends React.Component {
    render() {
      return (
        <div className="Menu">
          <h1>Välkommen till {this.props.namn}!</h1>
          <a href="http://www.folkessonab.se">
            <img src={revision} alt="revision" />  
          </a>
          <a href="http://www.folkessonab.se">
            <img src={ekonomiservice} alt="ekonomiservice" />  
          </a>
          <a href="http://www.skatteverket.se">
            <img src={skatt} alt="skatt" />  
          </a>
        </div>
      )
    }
  }

  export default Menu;