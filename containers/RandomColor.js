import React, { Component } from 'react';
import Display from '../src/components/Color/Display';

const colors = [
  '#233d4dff',
  '#fe7f2dff',
  '#fcca46ff',
  '#a1c181ff',
  '#619b8aff',
  '#1e212bff',
  '#4d8b31ff',
  '#ffc800ff',
  '#ff8427ff',
  '#2d728fff',
  '#3b8ea5ff',
  '#f5ee9eff',
  '#f49e4cff',
  '#ab3428ff',
];

export default class RandomColor extends Component {
  //State
  state = {
    bgColor: '#000',
  };

  randomColor = () => {
    const random = Math.floor(Math.random() * colors.length);

    return colors[random];
  };

  //Component did mount
  componentDidMount = () => {
    setInterval(() => {
      const bgColor = this.randomColor();
      this.setState({ bgColor });
    }, 2000);
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
