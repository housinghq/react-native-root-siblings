import React, { Component } from 'react'

export default class StaticContainer extends Component {
  shouldComponentUpdate(nextProps) {
    return !!nextProps.shouldUpdate
  }
  render() {
    const child = this.props.children;
    return (child === null || child === false)
      ? null
      : React.Children.only(child)
  }
}
