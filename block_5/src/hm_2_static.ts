class Temperature {
     constructor(public celsius: number) {}
    get fahrenheit () {
        return this.celsius * 1.8 +32
    }
    set fahrenheit (value: number) {
        this.celsius = (value - 32)/1.8
    }
    public static fromFahrenheit (value: number) {
        return new Temperature(Math.round( (value-32)/1.8 ))
    }
}

Temperature.fromFahrenheit(70)
const t1 = new Temperature(18)

