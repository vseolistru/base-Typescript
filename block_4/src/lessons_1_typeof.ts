function average (...nums:number[] ):number {
    const sum = nums.reduce((acc, item) => acc+item, 0)
    return sum/nums.length;
}

let str = 'Hello world'

type fn = typeof average

type x = typeof str

const max: fn = (...numbs) => Math.max(...numbs)

max(1,2,3)

type Returnfn = ReturnType<fn> //встроеная утилита