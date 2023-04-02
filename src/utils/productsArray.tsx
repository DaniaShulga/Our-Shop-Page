export type Currency = 'USD' | 'EUR' | 'UAH'

export type Products = {
    id: number
    title: string
    description: string
    price: number
    currency: Currency
}

const productsArray: Products[] = [
    {
        id: 1,
        title: 'iPhone 12',
        description: 'This is iPhone 12 ....',
        price: 750,
        currency: 'EUR',
    },
    {
        id: 2,
        title: 'iPhone 8',
        description: 'This is iPhone 8 ....',
        price: 850,
        currency: 'EUR',
    },
    {
        id: 3,
        title: 'iPhone X',
        description: 'This is iPhone X ....',
        price: 1250,
        currency: 'EUR',
    },
]

export default productsArray
