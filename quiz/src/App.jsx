import React from 'react'
import { Component } from 'react'
import HomeComponent from './Components/HomeComponent.jsx'
import QuizComponent from './Components/QuizComponent.jsx'
import ResultComponent from './Components/ResultComponent.jsx'



export default class App extends Component {
  constructor(){
    super();
    this.state = {
      pageNo : 0
    }
  }

  updatestate = (page)=>{
    this.setState(()=>{
      return {
        pageNo : page
      }
    })
  }

  render() {
    if(this.state.pageNo == 0){
      return(
        <HomeComponent prop1 = {this.updatestate}/>
      )
    }
    else if(this.state.pageNo == 1){
      return(
        <QuizComponent props1 = {this.updatestate}/>
      )
    }
    else if (this.state.pageNo == 2){
      return(
        <ResultComponent props2 = {this.updatestate}/>
      )
    }

  }
}
