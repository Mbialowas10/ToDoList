import logo from './logo.svg';
import './App.css';
import './mvp.css'
import React, { useState } from 'react';

/* TODO
 *  1. when item is marked as completed, it shows a strikethough
 *  2. when clear button is checked, items are removed from list
 *  3. refactor code so that form is a component
 */

function App() {

  const[item, setItem] =useState(""); // 1 item that gets added to list
  // toDoItems - array containing the list of items
  const[toDoItems,setToDoItems] = useState([
    // {text: "Item 1", done:false, timestamp:303949},
    // {text: "Item 2", done:false, timestamp:303950},
    // {text: "Item 3", done:true, timestamp:303951},
    // {text: "This really shouldn't be an item. jk!", done:false, timestamp:303952},
    // {text: "Item 5", done:false, timestamp:303953}
  ]);
  // add an item to the appended list of items
  function addItemToList(e){
    e.preventDefault();

    // alert("Triggered");
    const trimmedText = item.trim();

    if(trimmedText === ""){
      return;
    }

    // common approach when working in react. This is because Component state is immutable
    const newItem = {text: item, done:false, timestamp:Date.now()};
    const newItemList = [...toDoItems, newItem]

    setToDoItems(newItemList)
    setItem("");
  }
  function clearComppletion(){
    alert("being called yay!");

    const filterToDoItems = toDoItems.filter(item => !item.done);
    setToDoItems(filterToDoItems)
  }





  return (
    <>
    <h1>Mighty Todo List!</h1>

    <ol >
      { toDoItems.map((item) => {
        return (
          <li key={item.timestamp}>
            <label>
              <input className="cb"
                type="checkbox"
                checked={item.done}/>
              {item.done ? <del>item.text</del> : item.text}
            </label>
          </li>
        );
        })}
      </ol>
      {
      toDoItems.length > 0 && <button onClick={()=>setToDoItems([])}>Clear Completed</button>
      }

    </>
  );
}


export default App;
