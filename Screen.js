import React, { Component } from 'react'

export default class Screen extends Component {
    render() {
        return (
            <div className = "Screen">
                <p>{this.props.calculationResult}</p>
            </div>
        )
      }
}