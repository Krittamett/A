import React from 'react';
import Weather from './Weather'
export default class App extends React.Component {
 render() {
    return (
      <Weather zipCode = "90110"/>
    );
  }
}