import { stall } from "../utils/stall";
import { convertActorBio, convertActorMovies } from "./convertActor";
import {
  movieMetaResponse,
  movieActorsResponse,
  searchResponse,
  actorBioResponse,
  actorMoviesResponse
} from "./dummyData";
import { convertSearchResults } from "./convertSearchResults";
import { convertMovieMeta, convertMovieActors } from "./convertMovie";

const isDummyResponse = false;

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "b2004f122bmshe05976e90752d85p1cc936jsn355b206fd5d6",
    "X-RapidAPI-Host": "imdb8.p.rapidapi.com"
  }
};

export async function getSearchResults(searchText) {
  if (isDummyResponse) {
    await stall();
    return convertSearchResults(searchResponse);
  }

  return fetch(
    `https://imdb8.p.rapidapi.com/auto-complete?q=${encodeURI(searchText)}`,
    options
  )
    .then((response) => response.json())
    .then((response) => convertSearchResults(response))
    .catch((err) => console.error(err));
}

export async function getActor(actorId) {
  return Promise.all([getActorBio(actorId), getActorMovies(actorId)]).then(
    (response) => {
      return {
        bio: response[0],
        movies: response[1]
      };
    }
  );
}

async function getActorBio(actorId) {
  if (isDummyResponse) {
    await stall();
    return convertActorBio(actorBioResponse);
  }
  return fetch(
    `https://imdb8.p.rapidapi.com/actors/get-bio?nconst=${actorId}`,
    options
  )
    .then((response) => response.json())
    .then((response) => convertActorBio(response))
    .catch((err) => console.error(err));
}

async function getActorMovies(actorId) {
  if (isDummyResponse) {
    await stall();
    return convertActorMovies(actorMoviesResponse);
  }
  return fetch(
    `https://imdb8.p.rapidapi.com/actors/get-all-filmography?nconst=${actorId}`,
    options
  )
    .then((response) => response.json())
    .then((response) => convertActorMovies(response))
    .catch((err) => console.error(err));
}

export async function getMovie(movieId) {
  const movie = await getMovieMeta(movieId);
  const characters = await getMovieActors(movieId, movie.actors);
  return {
    ...movie,
    id: movieId,
    actors: characters
  };
}

async function getMovieMeta(movieId) {
  if (isDummyResponse) {
    await stall();
    return convertMovieMeta(movieMetaResponse);
  }

  return fetch(`https://imdb8.p.rapidapi.com/title/find?q=${movieId}`, options)
    .then((response) => response.json())
    .then((response) => convertMovieMeta(response))
    .catch((err) => console.error(err));
}

async function getMovieActors(movieId, actorIds) {
  if (isDummyResponse) {
    // await stall();
    return convertMovieActors(movieActorsResponse);
  }
  const ids = actorIds.join("&id=");

  return fetch(
    `https://imdb8.p.rapidapi.com/title/get-charname-list?id=${ids}&tconst=${movieId}`,
    options
  )
    .then((response) => response.json())
    .then((response) => convertMovieActors(response))
    .catch((err) => console.error(err));
}
