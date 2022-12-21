function fromPair (pair: [string, string]) {
    const [key, value] = pair;
    
    return {
        [key]: value
    }
}

type FirstArg<T>  = T extends (first: infer First, ...args: any[]) => any ? First : never 

const myPair = ['mkey', 'mvalue']
const myPair1: FirstArg<typeof fromPair> = ['mkey1', 'mvalue1']

fromPair(myPair1)
fromPair(myPair as [string, string])

type ConstructorFirstArg<T> = T extends {new (arg: infer A, ...args: any[]):any } ? A : never

