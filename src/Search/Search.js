import { useState } from 'react';

import './Search.css';

export const Search = ({ section, setFormValue }) => {

  const targetForm = document.getElementById('searchForm');

  return (
    <div className="Search">
      <label for="searchForm">Search {section} for ... </label>
      <input type="text" id="searchForm" onChange={() => setFormValue(targetForm.value)}/>
    </div>
  )
}