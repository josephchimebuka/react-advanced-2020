import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(window.innerWidth);
  const checkResize =()=>{
    setValue(window.innerWidth);
  }
  useEffect(()=>{
    window.addEventListener('resize', checkResize);
  },[])
 
  console.log(value)
  return <>
   <h1>Window</h1>
   <h2>{value}</h2>;

  </>
};
export default UseEffectBasics;
