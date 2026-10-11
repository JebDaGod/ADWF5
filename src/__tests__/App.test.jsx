import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import App from "../App";

describe("App cart state and localStorage", () => {
    const savedProduct = {
        id: 1,
        name: "AMD Ryzen 7 7800X3D",
        price: 349.99,
        image: "https://placehold.co/600x400",
        description: "A high-performance processor for gaming and multitasking."
    };

    let getItemSpy;
    let setItemSpy;

    beforeEach(() => {
        getItemSpy = vi.spyOn(Storage.prototype, "getItem")
            .mockReturnValue(null);

        setItemSpy = vi.spyOn(Storage.prototype, "setItem")
            .mockImplementation(() => {});
    });

    afterEach(() => {
        vi.restoreAllMocks();
    });

    it("renders the App component without crashing", () => {
        render(<App />);

        expect(
            screen.getByText("Build Your Dream PC")
        ).toBeInTheDocument();
    });

    it("loads saved cart data from localStorage on startup", () => {
        getItemSpy.mockReturnValue(JSON.stringify([savedProduct]));

        render(<App />);

        expect(getItemSpy).toHaveBeenCalledWith("componentCart");
        expect(screen.getByText("1")).toBeInTheDocument();
    });

    it("saves cart changes to localStorage", async () => {
        render(<App />);

        fireEvent.click(
            screen.getByRole("link", { name: /products/i })
        );

        fireEvent.click(
            screen.getAllByRole("button", { name: /add to cart/i })[0]
        );

        await waitFor(() => {
            expect(setItemSpy).toHaveBeenLastCalledWith(
                "componentCart",
                expect.stringContaining('"name":"AMD Ryzen 7 7800X3D"')
            );
        });
    });
});