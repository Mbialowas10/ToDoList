import React, { useState } from "react";
import './App.css';
import './mvp.css'
import Form from './Form';

function App() {

  const [toDoItems, setToDoItems] = useState([
  // { text: "Item 1", done: false, timestamp: 3039849  },
  // { text: "Item 2", done: true, timestamp: 3039856 },
  // { text: "Item 3", done: false, timestamp: 3039856 }
  ]);

  function addItemToList(text){
      const newItem = {text: text, done:false, timestamp:Date.now()};
      const newItemList = [...toDoItems, newItem];
      setToDoItems(newItemList)

  }
  function changeCompletion(toDo){
    const changedItems = toDoItems.map((item) => {
      if (item.timestamp === toDo.timestamp){
        item.done = !item.done
      }
      return item;
    })
    setToDoItems(changedItems);
  }
  function clearCompletion(){
    //alert("being called");
    const filteredToDoItems = toDoItems.filter(item => !item.done);
    setToDoItems(filteredToDoItems);
  }

  return (
    <>
      <h1>Getting Started</h1>
      <Form addItemToList={addItemToList}/>
      <ol>
        {toDoItems.map((toDo) => {
          return (
            <li key={toDo.timestamp}>
              <label>
                <input
                  type="checkbox"
                  checked={toDo.done}
                  onChange={() => changeCompletion(toDo)}
                />
                {toDo.done ? <del>{toDo.text}</del> : toDo.text}
              </label>
            </li>
          );
        })}
      </ol>
      {toDoItems.length > 0 && <button onClick={clearCompletion}>Clear Completed</button>}
    </>
  );
}

export default App;
