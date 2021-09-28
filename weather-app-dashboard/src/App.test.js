import { render, screen, waitFor } from "@testing-library/react";
import App from "./App";

test("renders weather-app", async () => {
    render(<App />);
    await waitFor(() => screen.getByTestId("page-wrapper"));
    expect(screen.getByTestId("page-wrapper")).toBeInTheDocument();
});
