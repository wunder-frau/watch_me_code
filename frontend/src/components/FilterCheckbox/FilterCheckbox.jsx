import React from 'react';
import { useRef } from "react";
import './FilterCheckbox.css'

const FilterCheckbox = ({ handleChangeRadio, defaultChecked }) => {
  const ref = useRef(defaultChecked);
  return (
    <div className='filter-checkbox'>
      <label className='filter-checkbox__label' htmlFor="shortfilm">
        <input
          type="checkbox"
          className="filter-checkbox__input"
          ref={ref}
          id="shortfilm"
          onChange={() => { handleChangeRadio(ref.current.checked); }}
          defaultChecked={defaultChecked}
        />
        <span className='filter-checkbox__round'/>
      </label>
      <p className='filter-checkbox__text'>Short films</p>
    </div>
  );
}

export default FilterCheckbox;