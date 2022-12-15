interface Car {
    wheels: number;
    brand: string;
    type: string;
    isNew?: boolean;
    name?:string;
    //добавить неограниченное колво полей
    [key:string]:unknown;
}


const car:Car = {
    wheels: 4,
    brand: 'BMW',
    type: 'Sedan',
    isNew: true
}
car.brand = 'Lada'

const car2: Car = {
    wheels: 4,
    brand: 'Gelly',
    type: 'universal',
}

car2['go'] = true;
console.log(car2)



