const FAVOURITES_STORE_KEY = "app_favourites";
const initialStoreValue = {
  actors: [],
  movies: []
};

class FavouritesStore {
  constructor() {
    this.favourites = this.getFavourites();
  }

  addMovie(movie) {
    this.favourites.movies.push(movie);
    this.sync();
  }

  addActor(actor) {
    this.favourites.actors.push(actor);
    this.sync();
  }

  sync() {
    localStorage.setItem(FAVOURITES_STORE_KEY, JSON.stringify(this.favourites));
  }

  getFavourites() {
    const storedValue = localStorage.getItem(FAVOURITES_STORE_KEY);
    return storedValue ? JSON.parse(storedValue) : initialStoreValue;
  }
}

export const favouritesStore = new FavouritesStore();
