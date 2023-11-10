import { Header } from "../components/Header";
import { useTheme } from "../ThemeContext";

export const PageLayout = ({ children }) => {
  const { theme } = useTheme();
  return (
    <div className={`page theme-${theme}`} data-testId="page-layout">
      <Header />
      <main>
        <div className="page-layout container">{children}</div>
      </main>
    </div>
  );
};
