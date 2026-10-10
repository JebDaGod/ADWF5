import "./Header.css";
import { Link } from "react-router-dom";

function Header({ storeName, cartCount }) {
    return (
        <header>
            <h1>{storeName}</h1>

            <nav>
    <Link to="/">Home</Link>
    <Link to="/products">Products</Link>
    <Link to="/cart">Cart ({cartCount})</Link>

                <div className="cart-display"> 
                    <span className="cart-icon">🛒</span>
                    <span className="cart-badge">{cartCount}</span> 
                </div>
            </nav>
        </header>
    );
}

export default Header;
