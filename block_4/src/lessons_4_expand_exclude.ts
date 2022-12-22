//Exclude
type T0 = Exclude<'a'|'b'| 'c', 'a'>
type T1 = Exclude<'a'|'b'| 'c', 'a'|'b'|'d'>
type T2 = Exclude<string | number | (()=> void), Function>

type Status = 'success' | 'clientError' | 'serverError' | 200 | 401 | 502

type NumericStatus = Exclude<Status, string>
type TExtStatus = Exclude<Status, number>

//Extract

type T00 = Extract<'a'|'b'| 'c', 'a'>
type T01 = Extract<'a'|'b'| 'c', 'a'|'b'|'d'>
type T02 = Extract<string | number | (()=> void), Function>

//

interface Person {
    age:Number,
    firstName: string,
    lastName: string,
    sex: 'male' | 'female',
    country: string,
    education: string,
    skills: string[]
}

type PersonNames = Extract<keyof Person, 'firstName' | 'lastName' | 'fullName'>

//drop undefined
type T001 = NonNullable<string | number | undefined>