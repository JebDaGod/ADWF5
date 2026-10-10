import "./ProductCard.css";

function ProductCard({ product, onAddToCart }) {
    const { name, price, image, description } = product;

    return (
        <div className="product-card">
            <img
                src={image}
                alt={name}
                className="product-image"
            />

            <div className="product-info">
                <h2>{name}</h2>
                <p>${price}</p>
                <p>{description}</p>

                <button onClick={() => onAddToCart(product)}>
                    Add to Cart
                </button>
            </div>
        </div>
    );
}

export default ProductCard;