import React from "react";



export type Todo = {
    id: string;
    title: string;
    completed: boolean;
    children?: React.ReactNode;
    style?: React.CSSProperties

};

export default Todo;