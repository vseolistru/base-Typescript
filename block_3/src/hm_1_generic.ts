
type El<T> =T;
type List = El<any>

export function append <T>(el:T, list:T[]) {
    return list.concat(el)
}

const arr:List =[1,2,3]
const someVar: El<number> = 11

const res = append(someVar, arr)
console.log(res)

const newArr:List = [1,2]
const newVar:El<string> = 'join'

const result = append(newVar, newArr)

console.log(result)