import { CrossIcon } from "../icons/CrossIcon";

export const FavouritesModal = ({ close }) => {
  return (
    <div className="modal">
      <button className="modal__button" onClick={close}>
        <CrossIcon />
      </button>
      <div className="modal__title">Добавлено в избранное</div>
      <a href="./favourites" className="modal__link">
        Перейти в избранное
      </a>
    </div>
  );
};
