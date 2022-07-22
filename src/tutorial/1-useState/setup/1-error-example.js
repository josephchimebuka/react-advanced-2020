import React from 'react';

const ErrorExample = () => {
  const title ='Random Title'
  const handleOnclick=()=>{
    title = 'Happy person joe :)';
  }
  return (
    <React.Fragment>
      <h1>{title}</h1>
      <button type='button' className='btn' onClick={()=> {handleOnclick()}}>Change title</button>
    </React.Fragment>
  )
};

export default ErrorExample;
