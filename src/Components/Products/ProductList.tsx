import productsArray, { Currency, Products } from 'utils/productsArray'
import ProductsListItem from './ProductsListItem'
import './ProductsListItem.scss'
import { useState } from 'react'

type Props = {}

const currencyRates = {
    USD: 1.1,
    EUR: 1,
    UAH: 40,
}

const ProductList = (props: Props) => {
    const [products, setProducts] = useState<Products[]>(productsArray)
    const [selectedCurrency, setSelectedCurrency] = useState<Currency>('EUR')

    const handleCurrencyChange = (currency: Currency) => {
        setSelectedCurrency(currency)

        setProducts((prevState) =>
            prevState.map((product) => ({
                ...product,
                price:
                    (product.price / currencyRates[product.currency]) *
                    currencyRates[currency],
                currency,
            }))
        )
    }
    const total = products.reduce((sum, product) => sum + product.price, 0)

    return (
        <>
            <div className="shop_page_block">
                <h1>Our shop page</h1>
                <div className="shop_page_btns">
                    <button onClick={() => handleCurrencyChange('USD')}>
                        USD
                    </button>
                    <button onClick={() => handleCurrencyChange('EUR')}>
                        EUR
                    </button>
                    <button onClick={() => handleCurrencyChange('UAH')}>
                        UAH
                    </button>
                </div>
            </div>
            <ul className="products">
                {products.map(({ id, title, description, price }) => (
                    <ProductsListItem
                        key={id}
                        title={title}
                        description={description}
                        price={price}
                        selectedCurrency={selectedCurrency}
                    />
                ))}
            </ul>
            <p className="products_total">
                <span className="total_span">total :</span> {total}
            </p>
        </>
    )
}
export default ProductList
