interface ICar {
    go(speed: number): void
    maxSpeed?: number
}

export class Car implements ICar {
    go (speed: number) {
        console.log(`Car go with speed ${speed.toFixed()}`)
    }
    stop () {
        console.log('Lets stop')
    }
}

const car = new Car;