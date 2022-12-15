//function
const sum = (a:number,b:number):number => {
    return a + b
}

function log (name:string, userID?:string):void {
    console.log('Hello', name, userID || 'anonym')
}

log('Silver', '3')

function crash ():never {
    throw new Error('crash')
}

sum(7,5)

function average (...nums:number[] ):number {
    const sum = nums.reduce((acc, item) => acc+item, 0)
    return sum/nums.length;
}

function slice (str:string, start:number, end?:number): string {

    let newStr =''
    let lastIndex: number;

    if (end) {
        lastIndex = end > str.length ? str.length : end
    }else {
        lastIndex = str.length
    }
    for (let i = start; i<lastIndex; i++){
        newStr +=str[i]
    }
    return newStr
}

let res = slice('SomeString', 1,6)

console.log(res)