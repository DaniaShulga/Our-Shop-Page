type Props = {
    title: string
    description: string
    price: number
    selectedCurrency: string
}
const ProductsListItem = ({
    title,
    description,
    price,
    selectedCurrency,
}: Props) => {
    return (
        <>
            <li>
                <h2>{title}</h2>
                <p>{description}</p>
                <p>
                    {selectedCurrency}{' '}
                    <span className="price_span">{Math.round(price)}</span>
                </p>
                <button>Buy</button>
            </li>
        </>
    )
}
export default ProductsListItem
