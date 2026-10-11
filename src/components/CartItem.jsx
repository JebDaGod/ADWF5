import "./CartItem.css";

function CartItem({ product, quantity = 1, onRemove }) {
    return (
        <div className="cart-item">
            <div>
                <h3>{product.name}</h3>
                <p>${product.price.toFixed(2)}</p>
                <p>Quantity: {quantity}</p>
            </div>

            <button onClick={onRemove}>Remove</button>
        </div>
    );
}

export default CartItem;