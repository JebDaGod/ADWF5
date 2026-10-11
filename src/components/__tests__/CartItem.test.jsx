import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import CartItem from "../CartItem";

describe("CartItem", () => {
    const product = {
        id: 1,
        name: "AMD Ryzen 7 7800X3D",
        price: 349.99
    };

    it("renders without crashing", () => {
        render(<CartItem product={product} onRemove={vi.fn()} />);

        expect(
            screen.getByText("AMD Ryzen 7 7800X3D")
        ).toBeInTheDocument();
    });

    it("displays item information and quantity", () => {
        render(
            <CartItem
                product={product}
                quantity={2}
                onRemove={vi.fn()}
            />
        );

        expect(
            screen.getByText("AMD Ryzen 7 7800X3D")
        ).toBeInTheDocument();

        expect(screen.getByText("$349.99")).toBeInTheDocument();
        expect(screen.getByText("Quantity: 2")).toBeInTheDocument();
    });

    it("calls onRemove when Remove is clicked", () => {
        const onRemove = vi.fn();

        render(<CartItem product={product} onRemove={onRemove} />);

        fireEvent.click(
            screen.getByRole("button", { name: /remove/i })
        );

        expect(onRemove).toHaveBeenCalledTimes(1);
    });
});