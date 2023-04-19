import React, { Component } from 'react';
import STYLE from "./Counter_Application/global.css"

class App extends Component {
  constructor(){
    super()
    this.state={
                  count : 0
                }
  }

  handleIncrement=()=>{
     this.setState({count : this.state.count+1})
  }

  handleDecrement=()=>{
    this.setState({count : this.state.count-1})
}

handleReset=()=>{
  this.setState({count : 0})
}

  render() {
    return (
      <>
      <h1 className="heading">COUNTER APPLICATION</h1>
      <br />
      <div className='main'>
        <span className='count' > {this.state.count} </span>
        <br />
        <div className='btn'>
        <button onClick={this.handleIncrement}>+ Increment</button>
        <button onClick={this.handleDecrement}>- Decrement</button>
        <button onClick={this.handleReset}>Reset</button>
        </div>
      </div>
      </>
    );
  }
}

export default App;
