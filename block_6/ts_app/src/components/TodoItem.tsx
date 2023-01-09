import React from 'react';
import {Todo} from "./types";

export interface ITodoItem extends Todo{
    style?: React.CSSProperties;
    toggle: (id:ITodoItem['id'])=> void
    handleDelete: (id:ITodoItem['id'])=> void
}

const TodoItem = ({id, title, completed, children, toggle, handleDelete, style = {}}: ITodoItem) => {
    return (
        <div>
            <li style={{color: 'red', backgroundColor: "white", ...style}}>
                <input type="checkbox" checked={completed} onChange={()=>toggle(id)}/>
                <span>{title}</span>
                <span onClick={()=>handleDelete(id)} style={{cursor:'pointer'}}>&nbsp; &times;</span>
                {children}
            </li>
        </div>
    );
};



export default TodoItem;