const logIn = (user:User):void => {
    const {login, password} = user
    if (!login && !password) {
        console.log(`identification fields ${login} & ${password} can not be an empty`)
    }
    console.log(`Greetings ${login}`)
    console.log(user)
}

interface Admin {
    login: string;
    email: string;
    password: string;
    isOnline: boolean;
    lastVisited: any;
    role: string;
}

interface User {
    login: string;
    email: string;
    password: string;
    isOnline: boolean;
    lastVisited: any;
}

const date = Date()

const admin: Admin = {
    login : 'admin',
    email: 'admin@domain.com',
    password : 'somePassword',
    isOnline: false,
    lastVisited: date,
    role:'superUser'
}
const user: User = {
    login : 'someUser',
    email: 'user1@domain.com',
    password : 'somePass',
    isOnline: true,
    lastVisited: date,
}

logIn(user)