//pick

interface Todo {
    id:string,
    title: string,
    description: string,
    completed: string,
    createdAt: Date | number
}

//возьмет интерфейс и  выберет значение
type SimpleTodo = Pick<Todo, 'title'| 'createdAt'>

const obj1: SimpleTodo = {
    title: 'SomeTitle',
    createdAt: new Date('22.12.22')
}

//Omit
interface NewFace {
    id: number,
    name: string,
    maridge: boolean,
    birthDate: Date
}

//
type SomePerson = Omit<NewFace, 'id'| 'birthDate'>

const obj2:SomePerson = {
    name:'Hugenetovich',
    maridge: true
}