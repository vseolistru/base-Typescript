interface Todo {
    id:string,
    title: string,
    description?: string,
    completed: string,
    createdAt: Date | number
}
//делает все значения ридонли
type ReadOnlyTodo = Readonly<Todo>

//все поля становятся необязательными
type PartialTodo = Partial<Todo>

function updateTodo (todo: Todo, fields: PartialTodo) {
    return {...todo, ...fields}
}

//делает все поля обязательными
type RequiresTodo = Required<Todo>