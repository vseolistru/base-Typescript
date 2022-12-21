type WindowProp = keyof Window

const myVal:WindowProp = "ontoggle"

interface PC {
    brand:string,
    year:string
}

type Typ1 = keyof PC // brand | year создает Юнион некоторых значений

const val1:Typ1 = "year"

type Tuple1 = keyof [string,number]
const val2: Tuple1 = "filter"