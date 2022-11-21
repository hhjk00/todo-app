import './App.css';
import TodoInsert from './components/TodoInsert';
import TodoTemplate from './components/TodoTemplate';
import TodoList from './components/TodoList';
import React, { useState, useRef, useCallback } from 'react';

function App() {
  const [todos, setTodos] = useState([
    {
      id : 1,
      text : '리액트',
      checked : true,
    },
    {
      id : 2,
      text : '노드js',
      checked : false,
    },
    {
      id : 3,
      text : '밥',
      checked : false,
    }
  ]);

  const nextId = useRef(4);
  
  const onInsert = useCallback(
    text => {
      const todo = {
        id : nextId.current,
        text,
        checked: false,
      }
    setTodos(todos.concat(todo));
    nextId.current += 1;
    },
    [todos],
  );
  
  const onRemove = useCallback(
    id => {
        setTodos(todos.filter(todo => todo.id !== id));
    },
    [todos]
  )

  const onToggle = useCallback(
    id => {
        setTodos(todos.map(todo => 
          todo.id == id ? {...todo, checked : !todo.checked } : todo
        ));
    },
    [todos]
  )


  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert}></TodoInsert>
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}></TodoList>
    </TodoTemplate>
  );
}

export default App;
