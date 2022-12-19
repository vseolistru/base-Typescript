function add (a:number, b: number): number;
function add (a:string, b:string): string;

function add (a: any, b: any): any {
    return a + b
}

console.log(add(5,7))
console.log(add('Hello', 'world'))

type asyncCB = (res: number) => number

function asyncSum (a:number, b:number): Promise<number>
function asyncSum (a:number, b:number, c: asyncCB):number

function asyncSum (a:number, b: number, cb?: asyncCB):any {
    const res = a + b
    if (cb) {
        return cb(res)
    }
    return Promise.resolve(res)
}

console.log(asyncSum(2,4))