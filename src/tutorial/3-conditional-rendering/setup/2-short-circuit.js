import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  // We'll be writing the code for tenary operators and short circuit evaluation
  const [text, setText] = useState('')
  const [isError, setIsError] = useState(false);
  // const firstValue = text || 'hello world';
  // const secondValue = text && 'hello world';

  return <>
  <h1>{ text || 'john doe'}</h1>
  <button className='btn' onClick={()=> setIsError(!isError)}>Toggle error</button>
  {isError ? (<h1>Error...</h1>) : (<h1>There is no error here</h1> )}
  </>;
};

export default ShortCircuit;
