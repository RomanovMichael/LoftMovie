export function getActorId(apiActor) {
  return apiActor.split("/")[2];
}

export function getMovieId(apiId) {
  return apiId.split("/")[2];
}
