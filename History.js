import React, { Component } from 'react'

export default class History extends Component {
    render() {
        return (
            <div className = "History">
                <p>{this.props.history}</p>
            </div>
        )
      }
}