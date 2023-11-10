import { ThemeProvider, THEME } from "../ThemeContext";
import { render, screen } from "@testing-library/react";
import { PageLayout } from "../components/PageLayout";
import "@testing-library/jest-dom";

function renderWithContext(component, { theme = THEME.Light }) {
  const Wrapper = ({ children }) => (
    <ThemeProvider initialTheme={theme}>{children}</ThemeProvider>
  );
  return render(component, { wrapper: Wrapper });
}

test("render with light styles for the light theme", () => {
  renderWithContext(<PageLayout>body</PageLayout>, { theme: THEME.Light });
  const layoutDiv = screen.getByTestId("page-layout");
  expect(layoutDiv).toHaveClass("theme-light");
});

test("render with dark styles for the dark theme", () => {
  renderWithContext(<PageLayout>body</PageLayout>, { theme: THEME.Dark });
  const layoutDiv = screen.getByTestId("page-layout");
  expect(layoutDiv).toHaveClass("theme-dark");
});
