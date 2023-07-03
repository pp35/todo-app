import React, { Component } from 'react';

class ClassCounter extends Component {
    state={
        counter:0
    }
    onIncrementClick=()=>{
        this.setState({
            counter:++this.state.counter
        }

        )
    }

  render() {
    return (
         <>
         <p>Class Componenet:{this.state.counter}</p>
         <button className='btn btn-success' onClick={ this.onIncrementClick}>IncrementCounter</button>
         </>
    );
  }
}

export default ClassCounter;