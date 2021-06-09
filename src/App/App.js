import { useEffect, useState } from 'react';
import { getArticles } from '../calls'; 
import './App.css';

const App = () => {
  const [section, setSection] = useState('');
  const [articlesArray, setArticlesArray] = useState([]);

  const allTopics = ['arts', 'automobiles', 'books', 'business', 'fashion', 'food', 'health', 'home', 'insider', 'magazine', 'movies', 'nyregion', 'obituaries', 'opinion', 'politics', 'realestate', 'science', 'sports', 'sundayreview', 'technology', 'theater', 't-magazine', 'travel', 'upshot', 'us', 'world'];

  useEffect(() => {
    cleanGETbySection();
  }, [])

  const cleanGETbySection = () => {
    getArticles(section)
      .then(res => {
        // console.log(res);
        if (!res.ok) throw new Error();
        return res.json();
      })
      .then(goodRes => {
        // console.log(goodRes.results);
        setArticlesArray(goodRes.results);
      })
      .catch((badRes) => {
        // console.log(badRes);
        return badRes;
      })
  }

  const helper = () => {
    const userTopic = document.getElementById('userTopic');
    return setSection(userTopic.value);
  }

  return (
    <div className="App">
      <p>Eventual Container</p>
      <input type="text" id="userTopic" />
      <button
        onClick={() => helper()}
      >Submit</button>
    </div>
  )
}

export default App;
