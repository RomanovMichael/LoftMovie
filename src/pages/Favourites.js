import { useState } from "react";
import { FavouritesFilter } from "../components/FavouritesFilter";
import { PageLayout } from "../components/PageLayout";
import { favouritesStore } from "../favouritesStore";
import { List } from "../components/List";
import { MovieCard } from "../components/MovieCard";
import { ActorCard } from "../components/ActorCard";

export function Favourites() {
  const [activeFilter, setActiveFilter] = useState("all");
  const { actors, movies } = favouritesStore.getFavourites();

  const handleFilterChange = (newFilter) => {
    setActiveFilter(newFilter);
  };

  const showActors = ["actors", "all"].includes(activeFilter);
  const showMovies = ["movies", "all"].includes(activeFilter);

  return (
    <PageLayout>
      <FavouritesFilter
        changeFilter={handleFilterChange}
        activeFilter={activeFilter}
      ></FavouritesFilter>
      {showActors ? (
        <List title="Актеры" variant="column">
          {actors.map((actor) => (
            <ActorCard {...actor} key={actor.id} />
          ))}
        </List>
      ) : null}
      {showMovies ? (
        <List title="Фильмы и сериалы" variant="grid">
          {movies.map((movie) => (
            <MovieCard {...movie} key={movie.id} />
          ))}
        </List>
      ) : null}
    </PageLayout>
  );
}
