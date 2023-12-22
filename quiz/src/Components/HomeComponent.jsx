import React, { Component } from 'react'
import './component.css'

export default class HomeComponent extends Component {

    stateChanging = () => {
        this.props.prop1(1)
    }

    render() {
        return (
            <>
                <div className='box'>
                    <h1 className='title'>Quiz App</h1>
                    <button className='play_btn' onClick={()=>this.stateChanging()}>Play</button>
                </div>
            </>
        )
    }
}
