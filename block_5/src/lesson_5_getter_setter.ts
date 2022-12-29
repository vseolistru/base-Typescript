export class Rectangle {
    constructor(public height: number, public width: number) {
    }

    get area():number {
        return this.height * this.width
    }
}

export class Car {
    constructor(public color: string, private _maxSpeed: number) {}
    get speed (): number {
        return this.maxSpeed
    }
    set maxSpeed (speed:number) {
        if (speed > 0) {
            this._maxSpeed = speed
        }
    }
}

const c1 = new Car('green', 50);
c1.maxSpeed = 70
console.log(c1)


const rect1 = new Rectangle(10,2)
console.log(rect1.area)

