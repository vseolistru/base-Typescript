interface User {
    readonly email: string,
    readonly login: string,
    password: string,
}

interface User {
    isOnline?: boolean,

}

interface Window {
    isAuth?: boolean;
}

interface Person {
    readonly firstName: string;
    lastName: string,
    phone?: string,
    yearOfBirth?: number
}

const user1: User = {
    email: 'someUser@damain.com',
    isOnline: true,
}

interface Employee extends User, Person {
    contractStart: Date,
}

interface Developer extends Employee {
    skills: string[],
    phone: string,
    level? : 'junior' | 'middle' | 'senior'
    say(): void,
    code: (args:string) => void
}

const user2: Employee = {
    firstName: 'Modric',
    lastName: 'Vlasic',

}