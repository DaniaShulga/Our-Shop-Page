import { useState } from 'react'
import productsArray, { Currency, Product, currency } from 'utils/productsArray'
import './ProductsList.scss'

const CurrencyConverter = () => {
    const [products] = useState<Product[]>(productsArray)

    const [currencies] = useState<Currency[]>(currency)

    const [selectedCurrency, setSelectedCurrency] = useState<Currency>(
        currencies[1]
    )

    const [cart, setCart] = useState<Product[]>([])
    const [total, setTotal] = useState<number>(0)

    const convertCurrency = (price: number, rate: number): number => {
        return Math.round(price * rate)
    }

    const handleCurrencyChange = (currency: Currency) => {
        setSelectedCurrency(currency)
        setTotal(
            cart.reduce(
                (total, product) =>
                    total + convertCurrency(product.price, currency.rate),
                0
            )
        )
    }

    const handleBuyClick = (product: Product) => {
        setCart([...cart, product])
        setTotal(total + convertCurrency(product.price, selectedCurrency.rate))
    }

    return (
        <div className="shop__block">
            <div className="shop__items">
                <h1 className="shop__title">Our shop page</h1>
                {currencies.map((currency) => (
                    <button
                        key={currency.code}
                        onClick={() => handleCurrencyChange(currency)}
                        className="shop__buttons"
                    >
                        {currency.code}
                    </button>
                ))}
            </div>
            <div className="shop__products">
                {products.map((product) => (
                    <div key={product.id}>
                        <h3>{product.title}</h3>
                        <p>{product.description}</p>
                        <p>
                            {selectedCurrency.code}{' '}
                            {convertCurrency(
                                product.price,
                                selectedCurrency.rate
                            )}
                        </p>
                        <button onClick={() => handleBuyClick(product)}>
                            Buy
                        </button>
                    </div>
                ))}
            </div>

            <p className="shop__total">total: {Math.round(total)}</p>
        </div>
    )
}

export default CurrencyConverter
