import { getActorId } from "./convertId";

export function convertMovieMeta(apiMovieMeta) {
  const movie = apiMovieMeta.results[0];
  return {
    coverSrc: movie?.image?.url,
    year: movie.year,
    time: movie.runningTimeInMinutes,
    title: movie.title,
    actors: movie.principals.map(convertActor)
  };
}

function convertActor(apiActor) {
  return getActorId(apiActor.id);
}

export function convertMovieActors(apiActors) {
  const actors = Object.values(apiActors).map((actor) => {
    return {
      name: actor.name.name,
      imgSrc: actor?.name.image?.url,
      id: getActorId(actor.name.id)
    };
  });
  return actors;
}
