import { Component } from "react";
import { getMovie } from "../api/api";
import { getUrlParam } from "../Router";
import { ActorCard } from "../components/ActorCard";
import { MovieHero } from "../components/MovieHero";
import { List } from "../components/List";
import { PageLayout } from "../components/PageLayout";

class MovieClass extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      movie: null
    };
  }
  async getMovieData() {
    const actorId = getUrlParam("id");
    this.setState({ isLoading: true });

    const movie = await getMovie(actorId);

    this.setState({
      isLoading: false,
      movie
    });
  }

  componentDidMount() {
    this.getMovieData();
  }
  render() {
    const { isLoading, movie } = this.state;
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
}
export { MovieClass };
