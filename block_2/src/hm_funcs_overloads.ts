function head (value: string): string;
function head (value: number[]): number;
function head (value: boolean[]): boolean;

function head (value: any): any {
    return value[0]
}

console.log(head('someString'))
console.log(head([22,33,44]))
console.log(head([true, false]))

const v = head('ssd')
console.log(v+1)

