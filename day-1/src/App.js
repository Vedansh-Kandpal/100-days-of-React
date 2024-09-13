import React, { useState } from 'react'
import './index.css';
import TodoInput from "./components/TodoInput";
import ListItem from './components/ListItem';

function App() {
  const [todoItem, setTodoItem] = useState([]);
  let addList = (inputText) => {
    setTodoItem([...todoItem, inputText])
  }
  const deleteListItem = (key) => {
    let newList = [...todoItem];
    newList.splice(key, 1)
    setTodoItem([...newList])
  }
  return (
    <div className="container">
      <TodoInput addList={addList} />
      <ul id="task-list">
        {todoItem.map((element, i) => {
          return <ListItem key={i} item={element} deleteItem={deleteListItem} index={i} />
        })}
      </ul>
    </div>
  );
}

export default App;
