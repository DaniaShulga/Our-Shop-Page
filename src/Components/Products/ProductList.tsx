import productsArray, {
    Currency,
    Product,
    currencies,
} from 'utils/productsArray'
import './ProductsList.scss'
import { useState } from 'react'

type Props = {}

const ProductList = (props: Props) => {
    const [selectedCurrency, setSelectedCurrency] = useState<Currency>(
        currencies[1]
    )
    const [total, setTotal] = useState<number>(calculateTotal())

    function calculateTotal(): number {
        return productsArray.reduce(
            (total, product) => total + product.price,
            0
        )
    }

    function convertCurrency(price: number, rate: number): number {
        return Math.round(price * rate)
    }

    function handleCurrencyChange(currency: Currency) {
        setSelectedCurrency(currency)
        setTotal(calculateTotal() * currency.rate)
    }

    function handleBuy(product: Product) {
        setTotal(total + convertCurrency(product.price, selectedCurrency.rate))
    }

    return (
        <>
            <div className="shop_page_block">
                <h1>Our shop page</h1>
                <div className="shop_page_btns">
                    {currencies.map((label, index) => (
                        <button
                            key={index}
                            onClick={() => handleCurrencyChange(label)}
                        >
                            {label.currency}
                        </button>
                    ))}
                </div>
            </div>
            <ul className="products">
                {productsArray.map((product) => (
                    <li key={product.id}>
                        <h2>{product.title}</h2>
                        <p>{product.description}</p>
                        <p>
                            {selectedCurrency.currency}{' '}
                            <span className="price_span">
                                {convertCurrency(
                                    product.price,
                                    selectedCurrency.rate
                                )}
                            </span>
                        </p>
                        <button onClick={() => handleBuy(product)}>Buy</button>
                    </li>
                ))}
            </ul>
            <p className="products_total">
                <span className="total_span">total :</span> {Math.round(total)}
            </p>
        </>
    )
}
export default ProductList
