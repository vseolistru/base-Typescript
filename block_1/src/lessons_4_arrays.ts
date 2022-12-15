namespace namespaceA {

    interface Car {
        wheels: number;
        brand: string;
    }

    const someArrays: number[] = [1, 2, 3, 4];
    const someArraysOfStrings: string[] = ['hello', 'world'];

    console.log(someArrays)
    console.log(someArraysOfStrings)

    //generic
    const newStrArray: Array<string> = ['new', 'array', 'here']
    newStrArray.push('csv')

    const cars: Array<Car> = []
    cars.push({wheels: 4, brand: 'Scoda'})
    console.log(cars)
}