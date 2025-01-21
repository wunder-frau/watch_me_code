import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function SavedMovies(props) {
  return (
    <section className="movies">
      <SearchForm
        handleSubmit={props.handleSubmit}
        handleChangeRadio={props.handleChange}
        defaultChecked={props.defaultChecked}
        query={props.query}
        handleSaveSearchValue={props.handleSaveSearchValue}
      />
      {props.movies === "NotFound" ? (<p className="movies__found-error">No results found</p>) : null}
      <MoviesCardList {...props} isSaved={true} />
    </section>
  );
}

export default SavedMovies;