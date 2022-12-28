export abstract class Vehicle {
    abstract color: string;
    abstract drive(speed: number): void
    public stop () {
        console.log(`Car is stopped`)
    }
}

class Car extends Vehicle {
    constructor(public color: string) {
        super();
    }
    drive(speed: number) {
        console.log(`my speed is ${speed}`)
    }
}

const v1 = new Car();