import { render, screen, waitFor } from "@testing-library/react";
import SearchBar from "./SearchBar";

test("loads and displays search button on dash board", async () => {
    render(<SearchBar />);
    await waitFor(() => screen.getByTestId("search-button"));
    expect(screen.getByTestId("search-button")).toHaveTextContent("Search");
    expect(screen.getByTestId("form-wrapper")).toBeInTheDocument();
});

test("jest-dom testing", () => {
    document.body.innerHTML = `
      <span data-testid="button-wrapper"><span data-testid="search-button"></span></span>
      <div data-testid="visible">Search</div>`;
    expect(screen.queryByTestId("button-wrapper")).not.toBeEmptyDOMElement();
    expect(screen.getByText("Search")).toBeVisible();
});
