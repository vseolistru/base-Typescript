type PcBrand = {
    name: string,
    country: string,
    createdAt: Date
}

type SomeBrands = 'apple' | 'sums' | 'nokia'

type MyPcRecord = {
    [key:string]:PcBrand
}

type MyPcRecord1 = {
    [key in 'a' | 'b']:PcBrand
}

const myNewVar:MyPcRecord1 = {
    a:{name:'some-name', country: 'new-country', createdAt: new Date('2012.12.22')},
    b:{name:'some-name-b', country: 'new-country-b', createdAt: new Date('2012.11.22')},
}

type MyPcRecord2 = {
    [BrandKey in SomeBrands]?:PcBrand
}

const brandRecord : MyPcRecord2 = {
    apple: {
        name: 'apple',
        country:'USA',
        createdAt: new Date('1990.8.12'),
    }
}

function printPCCatalog(pcCatalog: MyPcRecord2) {
    console.log(pcCatalog.apple?.country)
}

type PartOfWindow = {
    [Key in 'document'|'screen'|'navigator']?: Window[Key]
}
// const p: PartOfWindow = {
//     screen: window.screen
// }

printPCCatalog(brandRecord)

console.log(myNewVar.a.createdAt)