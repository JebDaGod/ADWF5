import "./Footer.css";

function Footer({ storeName, address, phone, email }) {
    return (
        <footer>
            <div className="footer-section">
                <h2>{storeName}</h2>
                <p>Your source for quality PC components.</p>
            </div>

            <div className="footer-section">
                <h3>Contact Us</h3>
                <p>{address}</p>
                <p>Phone: {phone}</p>
                <p>Email: {email}</p>
            </div>
        </footer>
    );
}

export default Footer;