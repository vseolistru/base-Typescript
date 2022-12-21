const x = 16

const isNegetive = x >= 0 ? 'no' : 'yes'

interface StrRecord {
    [key:string]: string
}

interface DateRecord {
    [key: string]: Date
}

type MyRecord<T> = T extends string ? StrRecord : DateRecord

type Obj1 = MyRecord<string>

const o1:Obj1 = {
    f:'123',
    a:'ganja'
}

type answer_1 = 64 extends number ? true : false;
type answer_2 = number extends 64 ? true : false;
type answer_3 = string[] extends any ? true : false;
type answer_4 = string[] extends any[] ? true : false;
type answer_5 = never extends  any ? true : false;
type answer_6 = any extends any ? true : false;
type answer_7 = Date extends {new (...arg:any[]): any } ? true : false;
type answer_8 = typeof Date extends {new (...args:any[]):any} ? true : false;