export class Vehicle {
    constructor(private createdAt: string) {
    }

    public drive (speed: number) {
        console.log(`Car go with speed ${speed.toFixed()}`)
        this.log(speed)
    }
    public stop () {
        console.log('Lets stop')
    }
    private log (speed: number) {
        console.log(`Vehicle speed has changed to ${speed}, ${this.createdAt}`)
    }
    protected altLog (speed:number) {
        console.log(`Vehicle speed has changed to ${speed}`)
    }
}

export class Car extends Vehicle {
    //сразу обьявляем в конструкторе наши вары
    //color: string;
    //maxSpeed: number;

    constructor(public color: string, public maxSpeed: number) {
        super('22-12-26');
        //конструктор ничего не содержит
    }
}

const car1 = new Car('red', 90)