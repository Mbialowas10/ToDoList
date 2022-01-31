import React, { useState } from 'react';

export default function Form({addItemToList}){

  const [item,setItem] = useState("");
  function formSubmit(evt){
    evt.preventDefault();
      //don't allow empty text to be added to list
    const trimmedText = item.trim();

    if (trimmedText !== ""){
      addItemToList(trimmedText);
    }
    setItem("");

  }
  return (
  <form onSubmit={formSubmit}>
    <input onChange={(e)=> {
      return setItem(e.target.value);
    }} value={item}/>
    <button onClick={formSubmit}>Add</button>
  </form>
  )
}
