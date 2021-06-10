import { useEffect, useState } from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
// import { getHome, getArticles } from '../calls';
import { ArticleGrid } from '../ArticleGrid/ArticleGrid';
import './App.css';
import { ArticleCard } from '../ArticleCard/ArticleCard';

const App = () => {
  const allTopics = ['arts', 'automobiles', 'books', 'business', 'fashion', 'food', 'health', 'home', 'insider', 'magazine', 'movies', 'nyregion', 'obituaries', 'opinion', 'politics', 'realestate', 'science', 'sports', 'sundayreview', 'technology', 'theater', 't-magazine', 'travel', 'upshot', 'us', 'world'];

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
      <h1>Top Stories</h1>
      <div className="Navigation">
        { generateNavLinks() }
      </div>
      <Switch>
        { generateRoutes() }
      </Switch>
    </div>
  )
}

export default App;
