export const MovieCard = ({ id, coverSrc, title, year }) => {
  return (
    <a href={`/movie?id=${id}`} className="movie-card">
      <div className="movie-card-cover">
        <img
          src={coverSrc ?? "./assets/images/movie-placeholder.jpg"}
          className="movie-card-cover__img"
          loading="lazy"
          alt={title}
        />
        <div className="movie-card-cover__tags">
          {year ? <div className="tag tag-text">{year}</div> : null}
        </div>
      </div>
      <div className="body-3-text text-nowrap">{title}</div>
    </a>
  );
};
