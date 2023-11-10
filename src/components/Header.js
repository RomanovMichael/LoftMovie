import { BookmarkIcon } from "../icons/BookmarkIcon";
import { BrandIcon } from "../icons/BrandIcon";
import { SearchIcon } from "../icons/SearchIcon";
import { SunIcon } from "../icons/SunIcon";
import { MoonIcon } from "../icons/MoonIcon";
import { THEME, useTheme } from "../ThemeContext";

export function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header>
      <div className="container header">
        <a href="/" className="header__logo">
          <BrandIcon />
        </a>
        <ul className="header__navigation">
          <li className="header__navigation-item">
            <a href="/">
              <SearchIcon />
            </a>
          </li>
          <li className="header__navigation-item">
            <button onClick={toggleTheme}>
              {theme === THEME.Light ? <SunIcon /> : <MoonIcon />}
            </button>
          </li>
          <li className="header__navigation-item">
            <a href="/favourites">
              <BookmarkIcon />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
