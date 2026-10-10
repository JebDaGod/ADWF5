import ProductCard from "../components/ProductCard";

function ProductsPage({ products, addToCart }) {
    return (
        <div className="main-content">
            <h2>Featured Components</h2>

            <div className="product-list">
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        onAddToCart={addToCart}
                    />
                ))}
            </div>
        </div>
    );
}

export default ProductsPage;