function len<T extends {length:number}>(arg:T): number {
    return arg.length
}

len('adbc')
len([1,2,3])
len({length:12})
//len(123)
//len(true)
// len(null)
// len(undefined)

const obj = {a:1, length: 1}

len(obj)