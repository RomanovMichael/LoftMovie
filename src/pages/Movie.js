import { useState, useEffect } from "react";
import { getUrlParam } from "../Router";
import { ActorCard } from "../components/ActorCard";
import { MovieHero } from "../components/MovieHero";
import { List } from "../components/List";
import { getMovie } from "../api/api";
import { PageLayout } from "../components/PageLayout";

export function Movie() {
  const [isLoading, setIsLoading] = useState(false);
  const [movie, setMovie] = useState(null);

  const getMovieData = async () => {
    const movieId = getUrlParam("id");

    setIsLoading(true);
    const movie = await getMovie(movieId);
    setMovie(movie);

    setIsLoading(false);
  };

  useEffect(() => {
    getMovieData();
  }, []);

  return (
    <PageLayout>
      {isLoading || movie == null ? (
        <p>Загружаем...</p>
      ) : (
        <>
          <MovieHero {...movie} />
          <List variant="column" title="Актеры">
            {movie.actors.map((actor) => {
              return <ActorCard key={actor.id} {...actor} />;
            })}
          </List>
        </>
      )}
    </PageLayout>
  );
}
