function printPoint (point: {x: number, y: number}):void {
    console.log(`Coordinate of point is x: ${point.x} & ${point.y}`)
}

function printName (user:{firstName:string, lastName?:string}):void {
    console.log('Hello', user.firstName.toUpperCase());
    //console.log('Nice to meet you Mr(s)', user.lastName?.toUpperCase())
    if (user.lastName) {
        console.log('Nice to meet you Mr(s)', user.lastName.toUpperCase())
    }
}
printName({firstName:'Alex'})

const obj1 = {
    x:1,
    y:2
}

printPoint(obj1)

const obj2 = {
    x:3,
    y:7,
    z:12
}

printPoint(obj2)