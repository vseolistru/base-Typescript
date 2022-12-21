namespace SomeSpace {
    function keys<T extends object>(obj: T):Array<keyof T> {
        const currentKeys = []
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                currentKeys.push(key)
            }
        }
        return currentKeys
    }

    const obj:any = {
        a: 1, b: 2, c: [3,2]
    }

    console.log(keys(obj))

    function values<T extends object> (obj: T): Array<T[keyof T]> {
        const currentValues = []
        for (let key in obj) {
            currentValues.push(obj[key])
        }
        return currentValues;
    }

    console.log(values(obj))
}