export type Currency = {
    currency: string
    rate: number
}

export type Product = {
    id: number
    title: string
    description: string
    price: number
}

export const currencies: Currency[] = [
    { currency: 'USD', rate: 1.1 },
    { currency: 'EUR', rate: 1 },
    { currency: 'UAH', rate: 40 },
]

export const productsArray: Product[] = [
    {
        id: 1,
        title: 'iPhone 12',
        description: 'This is iPhone 12 ....',
        price: 750,
    },
    {
        id: 2,
        title: 'iPhone 8',
        description: 'This is iPhone 8 ....',
        price: 850,
    },
    {
        id: 3,
        title: 'iPhone X',
        description: 'This is iPhone X ....',
        price: 1250,
    },
]

export default productsArray
