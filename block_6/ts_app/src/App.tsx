import React, {useEffect, useState} from 'react';
import './App.css';
import TodoItem, {ITodoItem} from "./components/TodoItem";
import NewTodoForm from "./components/NewTodoForm";

function App() {

    const [title, setTitle] = useState('');
    const [todos, setTodos] = useState<ITodoItem[]>([]);

    const newTodo: ITodoItem = {
        id: Date.now().toString(),
        title: title,
        completed: false
    }

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setTitle(e.target.value)
    }
    const addTodo = () => {
        setTodos([newTodo, ...todos])
        setTitle('')
    }


  return (
    <div className="App">
        {/*<div>{todos.map((item, idx) => <ul key={idx}><li>{item}</li></ul>)}</div>*/}
        <NewTodoForm value={title} onChange={handleInput} handleClick={addTodo}/>
        {todos.map( item =>
            <TodoItem key={item.id} id={item.id} title={item.title} completed={item.completed}
                 children={<div>Hello World</div>} style={{ border: '1px solid black' }}/>)}

    </div>
  );
}

export default App;
