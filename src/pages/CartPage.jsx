
import CartItem from "../components/CartItem";

function CartPage({ products, removeFromCart }) {
    const cartTotal = products.reduce(
        (total, product) => total + product.price,
        0
    );

    return (
        <div className="main-content">
            <div className="cart">
                <h2>Shopping Cart</h2>
                <p>Items in cart: {products.length}</p>

                {products.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    <div>
                        {products.map((product, index) => (
                            <CartItem
                                key={`${product.id}-${index}`}
                                product={product}
                                onRemove={() => removeFromCart(index)}
                            />
                        ))}

                        <div className="cart-total">
                            <h3>Total: ${cartTotal.toFixed(2)}</h3>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default CartPage;
