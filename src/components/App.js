
import React from "react";
import './../styles/App.css';
import { Component } from "react/cjs/react.production.min";

class Counter extends Component{
  constructor(props){
    super(props);
    this.state = {count :0};
  }

render(){

  const incrementClick = () => {
    const current = this.state.count;
    this.setState({count : 1 + current})

  }
  return (
    <>
      <p>Button clicked {this.state.count} times</p>
      <button onClick={incrementClick}>Click me</button>
    </>
  )
}
}


export default Counter;
