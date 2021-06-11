import { useState } from 'react';

export const Search = ({ section, setFormValue }) => {

  const targetForm = document.getElementById('searchForm');

  return (
    <div>
      <label for="searchForm">Search {section} for </label>
      <input type="text" id="searchForm" onChange={() => setFormValue(targetForm.value)}/>
    </div>
  )
}