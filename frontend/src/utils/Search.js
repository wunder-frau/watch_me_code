function Search(movies, query, isShort) {
  return movies.filter((movie) =>
    movie.nameRU.toLowerCase().includes(query.toLowerCase()) && (!isShort || isShort && movie.duration < 40)
  );
}

export default Search;
