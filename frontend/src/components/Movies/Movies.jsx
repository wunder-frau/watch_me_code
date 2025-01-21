import React from "react";
import "./Movies.css";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

const Movies = (props) => {
  return (
    <section className="movies">
      <Preloader /> 
      <SearchForm 
        handleSubmit={props.handleSubmit}
        handleChangeRadio={props.handleChange}
        defaultChecked={props.defaultChecked}
        query={props.query}
        handleSaveSearchValue={props.handleSaveSearchValue}
      />
      {props.isLoading ? <Preloader /> : null}
      {props.isNotFound ? (<p className="movies__found-error">No results found</p>) : null}
      {props.isError ? (
        <p className="movies__error">
          An error occurred during the request. 
          There may be a connection issue or the server is unavailable.
          Please wait a bit and try again.
        </p>
      ) : null}
      <MoviesCardList isSaved={false} {...props} />
    </section>
  );
};

export default Movies;