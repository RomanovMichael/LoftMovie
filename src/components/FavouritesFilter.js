const filters = [
  { value: "all", label: "Все" },
  { value: "actors", label: "Актеры" },
  { value: "movies", label: "Фильмы" }
];

export const FavouritesFilter = ({ activeFilter = "all", changeFilter }) => {
  const activeFilterClassName = "filter-list__item--active";
  return (
    <section className="favourites-filter">
      <h1 className="h1-text">Избранное</h1>
      <ul className="filter-list">
        {filters.map((filter) => {
          const isActive = activeFilter === filter.value;
          return (
            <li key={filter.value}>
              <button
                onClick={() => changeFilter(filter.value)}
                className={`filter-list__item body-3-text ${
                  isActive ? activeFilterClassName : ""
                }`}
              >
                {filter.label}
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
