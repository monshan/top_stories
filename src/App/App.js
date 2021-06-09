import { useState } from 'react';
import { getArticles } from '../calls'; 

import './App.css';


const App = () => {
  const [section, setSection] = useState('');
  const [articlesArray, setArticlesArray] = useState(null);

  const allTopics = ['arts', 'automobiles', 'books', 'business', 'fashion', 'food', 'health', 'home', 'insider', 'magazine', 'movies', 'nyregion', 'obituaries', 'opinion', 'politics', 'realestate', 'science', 'sports', 'sundayreview', 'technology', 'theater', 't-magazine', 'travel', 'upshot', 'us', 'world'];

  const helper = () => {
    const userTopic = document.getElementById('userTopic');
    return setSection(userTopic.value);
  }

  const populate = () => {
    const results = getArticles(section);
    return setArticlesArray(results);
  }

  return (
    <div className="App">
      <p>Eventual Container</p>
      <input type="text" id="userTopic" onChange={ () => helper() }/>
      <button
        onClick={() => populate()}
      >Submit</button>
      <div>
        <p>{ articlesArray }</p>
      </div>
    </div>
  )
}

export default App;
