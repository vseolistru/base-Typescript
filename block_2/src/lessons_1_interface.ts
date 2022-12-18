interface User {
    readonly email: string,
    readonly login: string,
    password: string,
}

interface User {
    isOnline?: boolean,

}

interface Employee extends User, Person {
    contractStart: Date,
}

// interface Developer extends Employee {
//     skills: string[],
//     phone: string,
//     level? : 'junior' | 'middle' | 'senior'
//     say(): void,
//     code: (args:string) => void
// }

interface Person {
    readonly firstName: string;
    lastName: string,
    phone?: string,
    yearOfBirth?: number
}

export interface Window {
    isAuth?: boolean;
}

const user1: User = {
    email: 'someUser@damain.com',
    login : 'SomeLogin',
    password: 'pass',
    isOnline: true,
}

const user2: Employee = {
    firstName: 'Modric',
    lastName: 'Vlasic',
    email: 'someUser@domain.com',
    login : 'oneLogin',
    password: 'passom',
    contractStart: new Date()
}

console.log(user1, user2)