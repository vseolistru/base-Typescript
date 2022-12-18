type Union1 = 'a'| 'b' | 'c' | 'd';
type Union2 = 'a'| 'e' | 'c' | 'i';
type Union3 = Union1 | Union2;
type Union4 = Union1 & Union2;
type Union5 = {a:string, b: string, c : number} & {a:string, t: boolean, z:null}


const union3:Union5 = {a: 'Zenit' ,b: 'Kama' ,c: 4, t:true, z:null}
const union1:Union3 = 'e' //all from Union1,2
const union2:Union4 = 'c' //only twice from Union 1,2

type User = {
    isOnline?: boolean,
    readonly email: string,
    readonly login: string
}

type Person = {
    readonly firstName: string;
    lastName: string,
    phone?: string,
    yearOfBirth?: number
}

type Employee = {
    contractStart: Date,
} & Person & User

type Developer = {
    skills: string[],
    phone: string,
    level? : 'junior' | 'middle' | 'senior'
    say(): void,
    code: (args:string) => void
} & Employee


