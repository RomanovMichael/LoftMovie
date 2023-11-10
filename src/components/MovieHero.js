import { BookmarkIcon } from "../icons/BookmarkIcon";
import { useFavouritesModal } from "../hooks/useFavouritesModal";
import { favouritesStore } from "../favouritesStore";

export const MovieHero = ({ id, coverSrc, year, title, time }) => {
  const { showModal, Modal } = useFavouritesModal();

  const handleFavouritesButtonClick = () => {
    favouritesStore.addMovie({ id, coverSrc, title, year });
    showModal();
  };
  return (
    <>
      <section className="movie-hero">
        <img
          src={coverSrc ?? "./assets/images/movie-placeholder.jpg"}
          className="movie-hero__img"
          loading="lazy"
          alt={title}
        />
        <div className="movie-info">
          <div className="movie-info__name">
            <h1 className="h1-text text-nowrap">{title}</h1>
            <button onClick={handleFavouritesButtonClick}>
              <BookmarkIcon />
            </button>
          </div>
          <div className="movie-info__description body-text">
            {year ? (
              <div>
                <span>Год</span>
                <span>{year}</span>
              </div>
            ) : null}
            <div>
              <span>Жанр</span>
              <span className="text-nowrap">криминал, биография, комедия</span>
            </div>
            {time ? (
              <div>
                <span>Время</span>
                <span>{time} мин.</span>
              </div>
            ) : null}
          </div>
        </div>
      </section>
      <Modal />
    </>
  );
};
