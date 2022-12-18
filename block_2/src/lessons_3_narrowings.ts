//сужение типов
function example (x?: number | string) {
    if (typeof (x)==='string') {
        x.toUpperCase()
    }
    else if (typeof (x) === 'number') {
        x.toFixed()
    }
    else if (x === undefined) {
        console.log('novalue')
    }
    console.log(typeof (x))
}

function examlp1e1 (strs: string | string[] | null) {
    //null is object type
    if (strs && typeof (strs) === 'object') {
        strs.push('someValue')
    }
    else if (typeof (strs) === 'string') {
        console.log(strs.toUpperCase())
    }
    console.log(typeof (strs))
}

function example2 (x:number[] | Date) {
    if (x instanceof (Date)) {
        console.log( x.getDate())
    }
    else if (Array.isArray(x)) {
        x.push(10)
    }
    console.log(x)
}
type Fish = {swim: ()=> void}
type Bird = {fly: ()=> void}

const move = (animal: Fish | Bird) => {
    if ('swim' in animal) {
        return animal.swim
    }
    return animal.fly()
}

