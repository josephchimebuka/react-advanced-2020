import React, { useState } from 'react';


const UseStateCounter = () => {
const [count, setCount] = useState(0);
const increaseCount=()=>{
  setCount(count+1)
}
const decreaseCount=()=>{
  setCount(count-1)
}
const reset=()=>{
  setCount(0)
}
  return <>
  <section style={{margin: '4rem 0'}}>
      <h3>Regular count</h3>
      <h2>{count}</h2>
      <button className='btn' onClick={()=> {increaseCount()}}>Increment</button>
      <button className='btn' onClick={()=> {reset()}}>Reset</button>
      <button className='btn' onClick={()=> {decreaseCount()}}>Decrement</button>
  </section>
  </> 
};

export default UseStateCounter;
