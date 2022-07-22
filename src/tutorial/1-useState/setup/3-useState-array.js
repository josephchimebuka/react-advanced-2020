import React from 'react';
import { data,} from '../../../data';
import { useState } from 'react';

const UseStateArray = () => {
  const [people, setPeople] = useState(data);
  const removeItems = (id)=>{
   let newPeople= people.filter((person)=>
      person.id!== id
    )
    setPeople(newPeople)
  }
  console.log(people)
  return <>
  {
    people.map((person)=>{
      const {id, name} = person;
      return (<div key={id} className='item'>
        <h2>{name}</h2>
        <button className='btn' onClick={()=> removeItems(id)}>remove</button>
      </div>)
    }
    )
  }
  <button className='btn' onClick={()=> setPeople([])}>Clear names</button>
  </>;
  
};

export default UseStateArray;
