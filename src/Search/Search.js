import './Search.css';

export const Search = ({ section, setFormValue, potentialQueries }) => {

  const targetForm = document.getElementById('searchForm');

  const renderDataOptions = () => {
    return potentialQueries.map(query => {
      return <option>{ query }</option>;
    })
  }

  return (
    <div className="Search">
      <label for="searchForm">Search {section} for ... </label>
      <input type="text" id="searchForm" onChange={() => setFormValue(targetForm.value)} list="searchOptions"/>
      <datalist id="searchOptions">
        { renderDataOptions() }
      </datalist>
    </div>
  )
}