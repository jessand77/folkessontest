import React from 'react';
import './HelloUser.css'; 

class HelloUser extends React.Component {
    constructor(props) {
      super(props)
  
      this.state = {
        username: 'redovisningskonsult'
      }
    }
    render() {
      return (
        <div>
          <h4>Är du vår nya {this.state.username}?</h4>
          <a className="knapp" href="https://www.folkessonab.se/kontakta-oss/">Klicka här</a>
        </div>
      )
    }
  }

  export default HelloUser;

 