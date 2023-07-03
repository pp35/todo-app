import React, { Component } from 'react';
import Todos from "./components/Todo";
//import ClassCounter from './components/ClassCounter';
//import FunctionCounter from './components/FunctionCounter';
class App extends Component {

  render() {
    return (
      <div className="container">
        <h1 className="text-center">ToDo React App </h1>
        <Todos/>
        {/* <ClassCounter/> */}
        {/* <FunctionCounter/> */}
      </div>
    );
  }
}

export default App;