const logIn = (user:{login:string, password:string}):void => {
    if (!user.login && !user.password) {
        console.log(`identification fields ${user.login} & ${user.password} can not be an empty`)
    }
    console.log(`Greetings ${user.login}`)
    console.log(user)
}

interface Admin {
    login: string;
    email: string;
    password: string;
    isOnline: boolean;
    lastVisited: Date;
    role: string;
}

interface User {
    login: string;
    email: string;
    password: string;
    isOnline: boolean;
    lastVisited: Date;
}


const admin: Admin = {
    login : 'admin',
    email: 'admin@domain.com',
    password : 'somePassword',
    isOnline: false,
    lastVisited: new Date(),
    role:'superUser'
}
const user: User = {
    login : 'someUser',
    email: 'user1@domain.com',
    password : 'somePass',
    isOnline: true,
    lastVisited: new Date(),
}

logIn(user)