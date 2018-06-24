import React, { Component } from 'react'

export default class ModelDetails extends Component {
  render() {
    return <div>
      <ul>
        <li>Name: {this.props.name}</li>
        <li >Manufacturer: {this.props.manufacturer}</li>
        <li>Year: {this.props.year}</li>
        <li>Origin: {this.props.origin}</li>
      </ul>
    </div>
  }
}
