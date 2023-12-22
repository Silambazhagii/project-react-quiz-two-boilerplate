import React, { Component } from 'react'
import './component.css'
import quizQuestions from '../../resources/quizQuestion.json'


export default class QuizComponent extends Component {
    constructor(){
        super();
        this.state = {
          data: quizQuestions,
          ind:0
        }
    }


    next=()=>{
      console.log(this.props)
      if(this.state.ind == 14){
       this.props.props1(2)
      }
      this.setState(()=>{
        return{
          ind : this.state.ind+1
        }
      })

    }

    prev=()=>{
      if(this.state.ind <= 0){
        alert('There is no previous question')
       }
       else if(this.state.ind>=0){
        this.setState(()=>{
          return{
            ind : this.state.ind-1
          }
        })
       }
    }

    quit=()=>{
        alert('Are you sure you want to quit ?')
        this.setState(()=>{
        return{
          ind: this.state.ind = 0
        }
      })

    }

    stateChanging = () => {
      if (this.state.ind = 15){
        this.props.prop1(2)
      }
  }


  render() {
    console.log(quizQuestions[this.state.ind].optionA)
    return (
      <>
        <div className='quiz_body'>
          <div className='quizbox'>
            <h1 className='topic'>Question</h1>
            <div className='q_no'>{[this.state.ind+1]} of 15</div>
            <div className='question'>{quizQuestions[this.state.ind].question}</div>
            <button className='op1'>{quizQuestions[this.state.ind].optionA}</button>
            <button className='op2'>{quizQuestions[this.state.ind].optionB}</button>
            <button className='op3'>{quizQuestions[this.state.ind].optionC}</button>
            <button className='op4'>{quizQuestions[this.state.ind].optionD}</button>
            <div className='choice'>
              <button className='btns prev'  onClick={this.prev}>Previous</button>
              <button className='btns next' onClick={this.next}>Next</button>
              <button className='btns quit' onClick={this.quit}>Quit</button>
            </div>
          </div>
        </div>
      </>
    )
  }
}
