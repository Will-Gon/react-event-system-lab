// Code EyesOnMe Component Here
import React, { Component } from 'react'

export default class EyesOnMe extends Component {

    goodJob = () => {
        console.log('Good!')
    }

    heyLook = () => {
        console.log('Hey! Eyes on me!')
    }
    
    render() {
        return (
            <button
            onFocus={this.goodJob}
            onBlur={this.heyLook}>
            </button>
        )
    }
}

