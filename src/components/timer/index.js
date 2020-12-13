import React, { Component } from "react";
import "./index.css";

export default class Timer extends Component {
  constructor(props){
    super(props);
    this.state= {
      value : props.initial
    }
  }
  componentDidMount(){
    this.time = setInterval(()=>{
      this.setState((state)=>{
        if(this.state.value==1){
          this.clearTimer();
        }
        return({value: state.value-1})
      })
    }, 1000)
  }

  render() {
    return (
      <div className="mt-100 layout-column align-items-center justify-content-center">
         <div className="timer-value" data-testid="timer-value">{this.state.value}</div>
         <button className="large" onClick={this.clearTimer} data-testid="stop-button">Stop Timer</button>
      </div>
    );
  }
  clearTimer=()=>{
    clearInterval(this.time);
  }

  componentWillUnmount() {
    this.clearTimer();
  }
}

