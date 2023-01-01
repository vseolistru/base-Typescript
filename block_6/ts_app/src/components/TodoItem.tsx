import React from 'react';

export interface ITodoItem {
    id: string;
    title: string;
    completed: boolean;
    children?: React.ReactNode;
    style?: React.CSSProperties
}

const TodoItem = ({id, title, completed, children, style = {}}: ITodoItem) => {
    return (
        <div>
            <li style={{color: 'red', backgroundColor: "white", ...style}}>
                <input type="checkbox" checked={completed}/>
                <span>{title}</span>
                <span>&times;</span>
                {children}
            </li>
        </div>
    );
};



export default TodoItem;