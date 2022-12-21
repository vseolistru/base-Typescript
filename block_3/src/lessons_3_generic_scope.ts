export function tupleCreate<T> (first:T){
    return function<U> (second:U): [T, U] {
        return [first, second]
    }
}

const res = tupleCreate(1)
const val1 = res(2)
const val2 = res('sd')

console.log(val1, val2)