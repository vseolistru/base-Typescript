//создайте в интерфейсах и алиасах структуры:

//Product: price, isNew, isSale, title
//Vehicle: wheels, year, brand,
//Car type, model + Product, + Vehicle

//interface
interface Product {
    price: number;
    isNew: boolean;
    isSale: boolean;
    readonly title: string;
}

interface Vehicle {
    wheels?: number;
    readonly year: Date;
    readonly brand: string
}

export interface Car extends Product, Vehicle {
    readonly type: string;
    readonly model: string;
}

//type
type Product1 = {
    price: number;
    isNew: boolean;
    isSale: boolean;
    readonly title: string;
}

type Vehicle1 = {
    wheels?: number;
    readonly year: Date;
    readonly brand: string
}

type Car1 = {
    readonly type: string;
    readonly model: string;
} & Product1 & Vehicle1

//
const car1: Car = {
    price: 26000,
    isNew: true,
    isSale: true,
    title : 'Toyota',
    year: new Date('2022.4.10'),
    brand: 'Toyota',
    type: 'sedan',
    model: 'Corolla'
}

const car2: Car1 = {
    price: 38000,
    isNew: true,
    isSale: true,
    title : 'Toyota',
    year: new Date('2022.5.13'),
    brand: 'Toyota',
    type: 'sedan',
    model: 'Camry'
}

console.log(car1)
console.log(car2)