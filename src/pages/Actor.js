import { ActorHero } from "../components/ActorHero";
import { getActor } from "../api/api";
import { List } from "../components/List";
import { getUrlParam } from "../Router";
import { useState, useEffect } from "react";
import { MovieCard } from "../components/MovieCard";
import { PageLayout } from "../components/PageLayout";

export const Actor = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [actor, setActor] = useState(null);

  const getActorData = async () => {
    const actorId = getUrlParam("id");

    setIsLoading(true);
    const actor = await getActor(actorId);
    setActor(actor);

    setIsLoading(false);
  };

  useEffect(() => {
    getActorData();
  }, []);

  return (
    <PageLayout>
      {isLoading || actor == null ? (
        <p>Загружаем...</p>
      ) : (
        <>
          <ActorHero {...actor.bio} />
          <List variant="grid" title="Фильмы и сериалы">
            {actor.movies.map((movie) => {
              return <MovieCard key={movie.id} {...movie} />;
            })}
          </List>
        </>
      )}
    </PageLayout>
  );
};
