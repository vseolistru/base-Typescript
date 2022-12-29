export class Circle {
    protected static pi:number = 3.14

    constructor(public radius: number) {
    }

    private static calculateArea (radius: number) {
        return this.pi * radius * radius
    }
    get area () {
        return Circle.pi * this.radius * this.radius
    }

}

class Ellipse extends Circle{
    constructor(public radius: number) {
        super(radius);
        Circle.pi
    }
}

const x1 = new Circle(18)

Circle.pi
Circle.calculateArea(7)
