import React from 'react';

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
          Hello {this.state.username}!
        </div>
      )
    }
  }

  export default HelloUser;