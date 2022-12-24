type Side = 'top' | 'right' | 'bottom' | 'left'

type Margin = `margin${'' | Capitalize<Side>}`
type Padding = `padding${'' | Capitalize<Side>}`

type Direction = 'down' | 'left' | 'right' | 'up'
type Position = 'top' | 'bottom'
type Entry = 'in' | 'out'

type FadeClassNames = `fade${Capitalize<Entry>}${Capitalize<'' | Position | Direction>}`

interface Car {
    brand: string,
    model: string,
    year: Date
}


type CarFactory = {
    [K in keyof Car as `set${Capitalize<K>}`]: (car:Car, value:Car[K]) => void
}