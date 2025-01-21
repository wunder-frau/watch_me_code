import { useContext, useState } from 'react';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import Validation from '../../hooks/Validation';
import CurrentUserContext from '../../contexts/CurrentUserContext';

function SearchForm({ handleSubmit, handleChangeRadio, defaultChecked, query, handleSaveSearchValue }) {
  const { values, handleChange, errors, isValid } = Validation({key: query});

  const [searchError, setSearchError] = useState('');

  function handleSearchSubmit(evt) {
    evt.preventDefault();
    if (isValid) {
      setSearchError('');
      handleSubmit(values.key);
    } else if (values.key.length > 0) {
      setSearchError(errors.key);
    } else {
      setSearchError('Please, enter a keyword');
    }
  }

  return (
    <section className='search-form'>
      <div className='search-form__container'>
        <form className='search-form__form' onSubmit={handleSearchSubmit}>
          <div className='search-form__wrap'>
            <input placeholder='Movie'
              className='search-form__input search-form__text'
              value={values.key}
              onChange={handleChange}
              handleSaveSearchValue={handleSaveSearchValue}
              name='key'
              autoComplete='off'
              id='key-input'
              type='text'
              minLength='1'
              maxLength='60'
              required
            />
          </div>
          <span className='searchform__error' id='key-input-error'> {searchError}</span>
          <FilterCheckbox 
            filterText='Short films'
            handleChangeRadio={handleChangeRadio}
            defaultChecked={defaultChecked}
          />
        </form>
        <button type='submit' onClick={handleSearchSubmit} className='search-form__submit'>Search</button>
      </div>
    </section>
  );
}
export default SearchForm;