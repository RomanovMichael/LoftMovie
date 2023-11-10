import { SearchForm } from "../components/SearchForm";
import { useTheme } from "../ThemeContext";
export const Home = () => {
  const { theme } = useTheme();
  return (
    <div className={`page theme-${theme}`}>
      <main className="search-page">
        <SearchForm />
      </main>
    </div>
  );
};
