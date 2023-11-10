import React from "react";
import { Home } from "./pages/Home";
import { Actor } from "./pages/Actor";
import { Favourites } from "./pages/Favourites";
// import { Movie } from "./pages/Movie";
import { MovieClass } from "./pages/MovieClass";
import { NotFound } from "./pages/NotFound";
import { SearchResults } from "./pages/SearchResults";
import Router from "./Router";
import "./styles.css";
import { ThemeProvider } from "./ThemeContext";

export default function App() {
  const routes = [
    { path: "/", component: <Home /> },
    { path: "/search-results", component: <SearchResults /> },
    { path: "/actor", component: <Actor /> },
    { path: "/movie", component: <MovieClass /> },
    { path: "/favourites", component: <Favourites /> }
  ];
  const defaultComponent = <NotFound />;

  return (
    <ThemeProvider>
      <Router routes={routes} defaultComponent={defaultComponent} />
    </ThemeProvider>
  );
}
