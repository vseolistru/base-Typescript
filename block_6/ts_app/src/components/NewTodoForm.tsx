import React from 'react';


interface NewTodoformProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>)=>void
    handleClick : () => void
}


const NewTodoForm = ({ value, onChange, handleClick }:NewTodoformProps) => {
    return (
        <>
            <input type="text" placeholder="new todo"
            value={value} onChange={onChange}/>
            <button onClick={handleClick}>Add todo</button>
        </>
    );
};

export default NewTodoForm;