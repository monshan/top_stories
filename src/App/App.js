import { Route, Switch, NavLink } from 'react-router-dom';
import { ArticleGrid } from '../ArticleGrid/ArticleGrid';
import { ArticleDet } from '../ArticleDet/ArticleDet';
import './App.css';

const App = () => {
  const allTopics = ['arts', 'automobiles', 'books', 'business', 'fashion', 'food', 'health', 'insider', 'magazine', 'movies', 'nyregion', 'obituaries', 'opinion', 'politics', 'realestate', 'science', 'sports', 'sundayreview', 'technology', 'theater', 't-magazine', 'travel', 'upshot', 'us', 'world'];

  const generateNavLinks = () => {
    return allTopics.map(topic => {
      return <NavLink to={ `/${topic}` } className="NavLink">{ topic }</NavLink>
    })
  }

  const generateRoutes = () => {
    return allTopics.map(topic => {
      return (
        <>
        <Route exact path={ `/${topic}` } render={() => <ArticleGrid section={ topic } /> } />
        <Route path={ `/${topic}/:created` } component={ ArticleDet } />
        </>
      )
    })
  }

  return (
    <div className="App">
      <h1>Top Stories</h1>
      <div className="Navigation">
        { generateNavLinks() }
      </div>
        <Route exact path="/" render={() => <ArticleGrid section="home" /> } />
        { generateRoutes() }
    </div>
  )
}

export default App;
