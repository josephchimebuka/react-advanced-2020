import React, { useState, useEffect } from 'react';

const ShowHide = () => {
  const [show, setShow] = useState(true)
  return <>
  <button className='btn' onClick={()=> setShow(!show)}>Toggle</button>
  { show && <Item/>}
  </>;
};


const Item = () =>{
  const [size, setSize] = useState(window.innerWidth);
  const checkResize=()=>{
    setSize(window.innerWidth)
  }
  useEffect(()=>{
    window.addEventListener('resize', checkResize);
    return()=>{
      window.removeEventListener('resize', checkResize);
    }
  },[])
  return (
  <div style={{margin: '4rem 0'}}>
 <h1>Window</h1>
    <h2>size:{size} </h2>
  </div>
      

 
  );

}
export default ShowHide;
