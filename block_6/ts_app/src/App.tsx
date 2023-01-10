import React, {useEffect, useState} from 'react';
import './App.css';
import TodoItem, {ITodoItem} from "./components/TodoItem";
import NewTodoForm from "./components/NewTodoForm";


function App() {

    const [title, setTitle] = useState('');
    const [todos, setTodos] = useState<ITodoItem[]>([]);

    // useEffect(()=>{
    //     fetch('https://jsonplaceholder.typicode.com/todos')
    //         .then(res=>res.json())
    //         .then((data:ITodoItem[]) => { setTodos(data) })
    // },[])

    const newTodo: ITodoItem = {
        id: Date.now().toString(),
        title: title,
        completed: false,
        toggle: ()=>{},
        handleDelete: ()=>{}
    }
    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setTitle(e.target.value)
    }
    const addTodo = () => {
        setTodos([newTodo, ...todos])
        setTitle('')
    }
    const handleDelete = (id:ITodoItem['id']) => {
        setTodos(todos.filter(item => item.id !== id))
    }

   const toggle = (id:ITodoItem['id']) => {
        setTodos(todos.map(item => {
            if (item.id !== id) return item
            return {
                ...item, completed: !item.completed,
            }
        }))
   }

  return (
    <div className="App">
        {/*<div>{todos.map((item, idx) => <ul key={idx}><li>{item}</li></ul>)}</div>*/}
        <NewTodoForm value={title} onChange={handleInput} handleClick={addTodo}/>
        {todos.map( item =>
            <TodoItem key={item.id} id={item.id} title={item.title} completed={item.completed}
                      toggle={toggle} handleDelete={handleDelete}
                 children={<div>{' '}</div>} style={{ border: '1px solid black' }}/>)}

    </div>
  );
}

export default App;
