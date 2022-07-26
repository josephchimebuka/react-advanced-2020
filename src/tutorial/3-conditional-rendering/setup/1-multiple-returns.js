import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';
const MultipleReturns = () => {
  const [user, setUser] = useState('default');
  const [loading, setIsLoading] = useState(true);
  const [iserror, setIsError] = useState(false);
  

    //   This is for the old method where you can fetch url using the aync await

  // const getUsers= async()=>{
  //   const resp = await fetch(url)
  //   const users = await resp.json();
  //   console.log(users)
  //   const {login} = users;
  //   setUser(login)
  // }

  //This ia a new methid where you use fetch to get data from the url

  // 
  useEffect(()=>{

      fetch(url)
      .then((resp) => {
        if(resp.status >= 200 && resp.status <= 299){
          return resp.json();
        }else{
          setIsLoading(false)
          setIsError(true);
          throw new Error(resp.statusText);
        }
      })
      .then((user)=> {
        const {login} = user;
        setUser(login);
        setIsLoading(false);
      })
      .catch((error) => console.log (error));
  }, []);

  // If the code is running slow or network then it will display a loading state
  if(loading){
    return (
      <div>
        <h2>Loading ...</h2>
      </div>
    );
  }

  // If the code runs into an error then it will display an error message
  if(iserror){
    return(
      <div>
        <h2>Error...</h2>
      </div>
    );
  } else{

    return(
      <div>
        <h2>{user}</h2>
      </div>
    );
  };
};

export default MultipleReturns;
