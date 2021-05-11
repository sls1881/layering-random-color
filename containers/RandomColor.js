import React, { Component } from 'react';
import Display from '../src/components/Color/Display';

const colors = [
  '#233d4dff',
  '#fe7f2dff',
  '#fcca46ff',
  '#a1c181ff',
  '#619b8aff',
];

export default class RandomColor extends Component {
  //State
  state = {
    bgColor: '#000',
  };

  randomColor = () => {
    //For loop to select random color
    for (let i = 0; i < colors.length; i++) {
      const random = Math.floor(Math.random() * i);
    }
    return colors[random];
  };

  //Component did mount
  componentDidMount = () => {
    const bgColor = setInterval(this.randomColor(), 2000);
    //setState
    this.setState({ bgColor });
  };

  render() {
    //Deconstruct state
    const { bgColor } = this.state;
    return (
      <div>
        <Display bgColor={bgColor} />
      </div>
    );
  }
}
