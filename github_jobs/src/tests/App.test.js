import { render, screen } from "@testing-library/react";
import App from "../App";
import MainLogo from "../components/MainLogo";
import SearchBar from "../components/SearchBar";

describe("MainLogo", () => {
  beforeEach(() => {
    render(<MainLogo />);
  });
  it("renders", () => {
    expect(screen.getByText(/Github Jobs/i)).toBeInTheDocument();
  });
  it("is Clickable and goes to main page", () => {
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "/");
  });
});

describe("SearchBar", () => {
  it("renders", () => {
    render(<SearchBar />);
    expect(screen.getByText(/Search Bar/i)).toBeInTheDocument();
  });
});
