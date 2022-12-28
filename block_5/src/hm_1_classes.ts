export class Rectangle {
    constructor(public height:number, public width:number) {
        this.log()
    }

    area() {
        return this.height * this.width
    }

    private log ():void {
        console.log(`new Rectangle was create al ${new Date}`)
    }
}

class Square extends Rectangle {

    constructor(public width: number, public color: string) {
        super(width, width);

    }

    paint (newColor: string): void {
        this.color = newColor
    }
}