

export function createMap<T>(list:T[]) {
    return function<U>(cb:(x:T)=>U):U[] {
        const result = []
        for (let i of list ) {
            result.push(cb(i))
        }
        return result
    }
}

const mapNums = createMap([1,2,3])
const result = mapNums(num => num +2)
console.log(result)