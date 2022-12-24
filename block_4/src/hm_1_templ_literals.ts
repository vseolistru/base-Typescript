type Style = 'none' | 'dotted' | 'dashed' | 'solid'
type Color = 'Red' | 'Green' | 'Blue' | 'Black' | 'White'

type BorderStyle = `${Lowercase<Style>} ${Lowercase<Color>}`

let border: BorderStyle = 'solid red'