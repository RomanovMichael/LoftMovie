const { createContext, useState, useMemo, useContext } = require("react");

export const THEME = {
  Light: "light",
  Dark: "dark"
};
const ThemeContext = createContext();

const ThemeProvider = ({ children, initialTheme = THEME.Light }) => {
  const [theme, setTheme] = useState(initialTheme);

  const toggleTheme = () => {
    setTheme((currentTheme) =>
      currentTheme === THEME.Light ? THEME.Dark : THEME.Light
    );
  };

  const value = useMemo(() => {
    return {
      theme,
      toggleTheme
    };
  }, [theme]);

  // toggleTheme()

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

function useTheme() {
  const theme = useContext(ThemeContext);

  if (theme === undefined) {
    throw new Error("useTheme должен быть внутри ThemeProvider");
  }

  return theme;
}

export { ThemeProvider, useTheme };
