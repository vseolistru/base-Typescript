const someArr: Array<string> = [] //string[]

type TypeFactory <T> = T

interface SomeModel<T> {
    title: string,
    value: T
}

type xType = TypeFactory<string>
type xType2 = TypeFactory<number>
type xType3 = TypeFactory<boolean>

function toArray<T>(...arg:T[]): T[] {
    return arg
}
toArray(1,2,3)
toArray('ssd', 'ssa')


const someObj:SomeModel<string> = {
    title: 'SpeedMax',
    value: '87MF'
}

//someObj.value = true not for type sting

const head = <T>(value: T[]): T => {
    return value[0]
}