import { useFavouritesModal } from "../hooks/useFavouritesModal";
import { BookmarkIcon } from "../icons/BookmarkIcon";
import { favouritesStore } from "../favouritesStore";

export const ActorHero = ({ id, imgSrc, name, description }) => {
  const { showModal, Modal } = useFavouritesModal();

  const handleFavouritesButtonClick = () => {
    favouritesStore.addActor({ name, imgSrc, id });

    showModal();
  };
  return (
    <>
      <section className="actor-hero">
        <img
          src={imgSrc ?? "./assets/images/actor-placeholder.png"}
          className="actor-hero__img"
          loading="lazy"
          alt={name}
        />
        <div className="actor-info">
          <div className="actor-info__name">
            <h1 className="h1-text text-nowrap">{name}</h1>
            <button onClick={handleFavouritesButtonClick}>
              <BookmarkIcon />
            </button>
          </div>
          {description ? (
            <div className="actor-info__description">
              <p className="body-text">{description}</p>
              <button className="tag-text">Подробнее</button>
            </div>
          ) : null}
        </div>
      </section>
      <Modal />
    </>
  );
};
