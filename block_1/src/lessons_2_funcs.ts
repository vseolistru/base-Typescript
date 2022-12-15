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