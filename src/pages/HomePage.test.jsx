
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import HomePage from "../HomePage";

describe("HomePage", () => {
    it("renders without crashing", () => {
        render(<HomePage />);

        expect(screen.getByText("Why Shop with Us?")).toBeInTheDocument();
    });

    it("displays the main content", () => {
        render(<HomePage />);

        expect(screen.getByText("Build Your Dream PC")).toBeInTheDocument();
        expect(
            screen.getByText(/ComponentCorner makes it easy to find quality PC components/i)
        ).toBeInTheDocument();
    });
});
