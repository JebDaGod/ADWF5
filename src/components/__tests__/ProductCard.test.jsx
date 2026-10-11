
import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import ProductCard from "../ProductCard";
import { fireEvent } from "@testing-library/react";

describe("ProductCard", () => {
    const product = {
        id: 1,
        name: "AMD Ryzen 7 7800X3D",
        price: 349.99,
        image: "https://placehold.co/600x400/cc0000/ffffff?text=AMD+Ryzen+7+7800X3D",
        description: "High-performance gaming CPU with 8 cores and 16 threads."
    };

    it("renders without crashing", () => {
        render(<ProductCard product={product} onAddToCart={vi.fn()} />);

        expect(screen.getByText("AMD Ryzen 7 7800X3D")).toBeInTheDocument();
    });

    it("displays product information from props", () => {
        render(<ProductCard product={product} onAddToCart={vi.fn()} />);

        expect(screen.getByText("AMD Ryzen 7 7800X3D")).toBeInTheDocument();
        expect(screen.getByText("$349.99")).toBeInTheDocument();
        expect(
            screen.getByText("High-performance gaming CPU with 8 cores and 16 threads.")
        ).toBeInTheDocument();
    });

    it("contains an Add to Cart button", () => {
        render(<ProductCard product={product} onAddToCart={vi.fn()} />);

        expect(
            screen.getByRole("button", { name: /add to cart/i })
        ).toBeInTheDocument();
    });
    it("calls onAddToCart when Add to Cart is clicked", () => {
    const onAddToCart = vi.fn();

    render(
        <ProductCard
            product={product}
            onAddToCart={onAddToCart}
        />
    );

    fireEvent.click(
        screen.getByRole("button", { name: /add to cart/i })
    );

    expect(onAddToCart).toHaveBeenCalledTimes(1);
    expect(onAddToCart).toHaveBeenCalledWith(product);
    });
});
