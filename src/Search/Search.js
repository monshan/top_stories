import { useState } from 'react';

const Search = ({ section, setFormValue }) => {

  const currentFormValue = document.getElementById('searchForm').value;

  return (
    <div>
      <label for="searchForm">Search {section} for </label>
      <input type="text" id="searchForm" onChange={() => setFormValue(currentFormValue)}/>
    </div>
  )
}