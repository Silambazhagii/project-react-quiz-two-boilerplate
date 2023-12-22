import React, { Component } from 'react'
import './component.css'

export default class ResultComponent extends Component {
  play = () => {
    this.props.props2(1)
  }
  home=()=>{
    this.props.props2(0)
  }

  render() {
    return (
      <>
        <div className='result_body'>
          <div className='res'>Result</div>
          <div className='resBox'>
            <div className='practice'>You need more practice!</div>
            <div className='score'>Your score is <span>20</span>%</div>
            <div className='ques_info'>
              <div>Total number of questions</div>
              <span>15</span>
            </div>
            <div className='ques_info'>
              <div>Number of attempted questions</div>
              <span>9</span>
            </div>
            <div className='ques_info'>
              <div>Number of correct answers</div>
              <span>3</span>
            </div>
            <div className='ques_info'>
              <div>Number of wrong answers</div>
              <span>6</span>
            </div>
          </div>
          <div>
            <button className='play' onClick={() => this.play()}>Play Again</button>
            <button className='home' onClick={() => this.home()}>Back to home</button>
          </div>
        </div>
      </>
    )
  }

}