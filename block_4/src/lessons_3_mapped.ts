type PcBrand = {
    name: string,
    country: string,
    createdAt: Date
}

type SomeBrands = 'apple' | 'sums' | 'nokia'

type MyPcRecord = {
    [key:string]:PcBrand
}

// type MyPcRecord1 = {
//     [key: 'a' | 'b']:PcBrand
// }

type MyPcRecord2 = {
    [BrandKey in SomeBrands]?:PcBrand
}

const brandRecord : MyPcRecord2 = {
    apple: {
        name: 'apple',
        country:'USA',
        createdAt: new Date(1990.8),
    }
}

function printPCCatalog(pcCatalog: MyPcRecord2) {
    console.log(pcCatalog.apple?.country)
}

type PartOfWindow = {
    [Key in 'document'|'screen'|'navigator']?: Window[Key]
}
const p: PartOfWindow = {
    screen: window.screen
}

printPCCatalog(brandRecord)