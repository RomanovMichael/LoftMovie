function convertActorSearchResult(apiActor) {
  return {
    imgSrc: apiActor?.i?.imageUrl,
    name: apiActor.l,
    id: apiActor.id
  };
}

function convertMovieSearchResult(apiMovie) {
  return {
    id: apiMovie.id,
    title: apiMovie.l,
    coverSrc: apiMovie?.i?.imageUrl,
    year: apiMovie.y
  };
}

function convertSearchResult(apiSearchResult) {
  if ("y" in apiSearchResult) {
    return convertMovieSearchResult(apiSearchResult);
  } else {
    return convertActorSearchResult(apiSearchResult);
  }
}

export function convertSearchResults(apiSearchResults) {
  return apiSearchResults.d.map(convertSearchResult);
}
