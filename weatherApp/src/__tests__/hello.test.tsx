import { render } from "@testing-library/react";
import Layout from "../components/Layout";

describe("UI test", () => {
  test("layout", async () => {
    const screen = render(<Layout />);
    const div = await screen.findByRole("layout");
    expect(div).toBeTruthy();
  });
});
