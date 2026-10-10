import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";

import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";

import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import CartPage from "./pages/CartPage";

function App() {

    const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("componentCart");

    return savedCart ? JSON.parse(savedCart) : [];
});

useEffect(() => {
    localStorage.setItem("componentCart", JSON.stringify(cart));
}, [cart]);

    const products = [
        {
            id: 1,
            name: "AMD Ryzen 7 7800X3D",
            price: 349.99,
            image: "https://placehold.co/600x400/cc0000/ffffff?text=AMD+Ryzen+7+7800X3D",
            description: "High-performance gaming CPU with 8 cores and 16 threads."
        },
        {
            id: 2,
            name: "NVIDIA GeForce RTX 4070",
            price: 549.99,
            image: "https://placehold.co/600x400/00aa44/ffffff?text=NVIDIA+GeForce+RTX+4070",
            description: "Powerful graphics card for gaming and high-quality PC performance."
        },
        {
            id: 3,
            name: "Corsair Vengeance 32GB DDR5",
            price: 89.99,
            image: "https://placehold.co/600x400/333333/ffffff?text=Corsair+Vengeance+32GB",
            description: "32GB DDR5 memory kit designed for modern gaming and productivity PCs."
        },
        {
            id: 4,
            name: "Samsung 990 Pro 2TB SSD",
            price: 159.99,
            image: "https://placehold.co/600x400/0066cc/ffffff?text=Samsung+990+Pro+2TB",
            description: "Fast 2TB NVMe SSD for quick loading times and file transfers."
        },
        {
            id: 5,
            name: "ASUS TUF Gaming B650",
            price: 179.99,
            image: "https://placehold.co/600x400/663399/ffffff?text=ASUS+TUF+B650",
            description: "Reliable AM5 motherboard with features for modern gaming PCs."
        },
        {
            id: 6,
            name: "Corsair RM850x Power Supply",
            price: 129.99,
            image: "https://placehold.co/600x400/555555/ffffff?text=Corsair+RM850x",
            description: "850W power supply designed to provide reliable power for high-performance PCs."
        }
    ];

    const addToCart = (product) => {
        setCart([...cart, product]);
    };

    const removeFromCart = (indexToRemove) => {
        setCart(cart.filter((_, index) => index !== indexToRemove));
    };

    return (
        <BrowserRouter>
            <div className="app">
                <Header cartCount={cart.length} />

                <Routes>
                    <Route
                        path="/"
                        element={<HomePage />}
                    />

                    <Route
                        path="/products"
                        element={
                            <ProductsPage
                                products={products}
                                addToCart={addToCart}
                            />
                        }
                    />

                    <Route
                        path="/cart"
                        element={
                            <CartPage
                                products={cart}
                                removeFromCart={removeFromCart}
                            />
                        }
                    />
                </Routes>

                <Footer 
                storeName="PC Component Store" 
                address="123 Computer Lane, Tech City, SC 29000" 
                phone="(555) 123-4567" 
                email="support@pccomponentstore.com" 
            /> 
            </div>
        </BrowserRouter>
    );
}

export default App;
