export const ActorCard = ({ name, imgSrc, id }) => {
  return (
    <a href={`/actor?id=${id}`} className="actor-card">
      <img
        src={imgSrc ?? "./assets/images/actor-placeholder.png"}
        className="actor-card__cover"
        loading="lazy"
        alt={name}
      />
      <p className="body-2-text text-nowrap">{name}</p>
    </a>
  );
};
