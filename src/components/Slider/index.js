

import React, { Component } from "react";

export class Slider extends Component {
  render() {
    return (
      <input
        type="range"
        value={this.props.value}
        min={this.props.minimumValue}
        max={this.props.maximumValue}
        step={this.props.step}
        onChange={e => this.props.onValueChange(Number(e.target.value))} />
      );
    }
}

module.exports = Slider;
