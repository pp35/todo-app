import React, { Component } from 'react';

function FunctionCounter(){
    let [counter,setCounter]=React.useState(0)
    


   const onIncrementClick=()=>{
        
        setCounter(++counter)
    }

  
    return (
         <>
         <p>Function Componenet:{counter}</p>
         <button className='btn btn-success' onClick={onIncrementClick}>IncrementCounter</button>
         </>
    );
  }


export default FunctionCounter;