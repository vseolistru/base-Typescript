export class Vehicle {
    public drive (speed: number) {
        console.log(`Car go with speed ${speed.toFixed()}`)
        this.log(speed)
    }
    public stop () {
        console.log('Lets stop')
    }
    private log (speed: number) {
        console.log(`Vehicle speed has changed to ${speed}`)
    }
    protected altLog (speed:number) {
        console.log(`Vehicle speed has changed to ${speed}`)
    }
}

class Car extends Vehicle {
    public changeDrive (speed: number) {
        this.drive(speed)
        this.altLog(speed)
    }
}

const car = new Car();
car.drive(33);
car.stop()
