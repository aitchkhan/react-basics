import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Welcome extends Component {
  constructor() {
    super();
  }
  render() {
    return (
        <div> 
          Hello, {this.props.name}
        </div>
    );
  }

}

export default Welcome;
