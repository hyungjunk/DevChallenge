import { screen, render } from "@testing-library/react";
import Layout from "../src/components/Layout";

describe("Layout", () => {
  test("render layout", () => {
    render(<Layout />);
    const l = screen.getByTestId("layout");
    console.log(l.textContent);
  });
});
