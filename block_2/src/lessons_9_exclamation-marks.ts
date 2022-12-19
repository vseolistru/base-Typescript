//!
let word: string | null = null;
const num = 10;
if (num > 5) {
    word = 'abc'
}

console.log((word as string).toUpperCase())
console.log(word!.toUpperCase())

function printName (name?:string) {
    const fullName: string = name!;
    console.log(fullName)
}

interface MainPerson {
    name: string,
    age: number,
    sex: 'female' | 'male'
}


const person: MainPerson = {
    name: 'Rogozka',
    age: 59,
    sex: 'male'
}

function printName2 (person?: MainPerson):string {
    return  'Hi i`m '+person!.name+' '+person!.sex
}

console.log(printName2(person))

const killers: MainPerson[] = [
    {name: 'Kadirka, Don Don', age: 49, sex: "female"},
    {name:'Piskin', age:63, sex: "male"},
    {name:'Huzenetivich', age: 68, sex: "male"},
    {name: 'Bobroedka', age:38, sex:'female'},
    {name: 'Skarabeeha', age:38, sex:'female'},
    {name:'Pomet', age: 63, sex: "female"}
]

const killerFemale = killers.filter(item => item.sex === 'female')
console.log(killerFemale)