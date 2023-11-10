import { getMovieId, getActorId } from "./convertId";

function convertMovie(apiMovie) {
  return {
    id: getMovieId(apiMovie.id),
    coverSrc: apiMovie?.image?.url,
    year: apiMovie?.year,
    title: apiMovie.title
  };
}

export function convertActorMovies(apiMovies) {
  return apiMovies.filmography.map(convertMovie);
}

export function convertActorBio(apiActorBio) {
  return {
    id: getActorId(apiActorBio.id),
    imgSrc: apiActorBio?.image?.url,
    name: apiActorBio.name,
    description: apiActorBio?.miniBios[0]?.text
  };
}
