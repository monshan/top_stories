import { useEffect, useState } from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import { getHome, getArticles } from '../calls';
import { ArticleGrid } from '../ArticleGrid/ArticleGrid';
import './App.css';
import { ArticleCard } from '../ArticleCard/ArticleCard';

const App = () => {
  const [section, setSection] = useState('');
  const [articlesArray, setArticlesArray] = useState([]);

  const allTopics = ['arts', 'automobiles', 'books', 'business', 'fashion', 'food', 'health', 'home', 'insider', 'magazine', 'movies', 'nyregion', 'obituaries', 'opinion', 'politics', 'realestate', 'science', 'sports', 'sundayreview', 'technology', 'theater', 't-magazine', 'travel', 'upshot', 'us', 'world'];

  useEffect(() => {
    cleanGETbySection();
  }, [section])

  const cleanGETbySection = () => {
    getArticles(section)
      .then(res => {
        // console.log(res);
        if (!res.ok) throw new Error();
        return res.json();
      })
      .then(goodRes => {
        // console.log(goodRes.results);
        if (section) {
          setArticlesArray(goodRes.results);
        }

        if (!section) {
          setArticlesArray('home');
        }
      })
      .catch((badRes) => {
        // console.log(badRes);
        return badRes;
      })
  }

  const userTopicUp = () => {
    const userTopic = document.getElementById('userTopic');
    return setSection(userTopic.value);
  }

  const generateNavLinks = () => {
    return allTopics.map(topic => {
      return <NavLink to={ `/${topic}` } className="NavLink">{ topic }</NavLink>
    })
  }

  const generateRoutes = () => {
    return allTopics.map(topic => {
      return (
        <Route path={ `/${topic}` } children={ <ArticleGrid section={ topic } /> } />
      )
    })
  }

  return (
    <div className="App">
      <p>Main App</p>
      <div className="Navigation">
        { generateNavLinks() }
      </div>
      <input type="text" id="userTopic" />
      <button
        onClick={() => userTopicUp()}
      >Submit</button>
      <Switch>
        { generateRoutes() }
      </Switch>
      <ArticleGrid articles={ articlesArray } />
    </div>
  )
}

export default App;
