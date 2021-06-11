import { Route, NavLink, Switch } from 'react-router-dom';
import { ArticleGrid } from '../ArticleGrid/ArticleGrid';
import './App.css';

const App = () => {
  const allTopics = ['arts', 'automobiles', 'books', 'business', 'fashion', 'food', 'health', 'insider', 'magazine', 'movies', 'nyregion', 'obituaries', 'opinion', 'politics', 'realestate', 'science', 'sports', 'sundayreview', 'technology', 'theater', 't-magazine', 'travel', 'upshot', 'us', 'world'];

  const NavLinkActiveStyle = () => {
    return {
      fontFamily: "'Playfair Display', serif",
      fonstSize: "1.5rem",
      fontStyle: "italic",
      borderBottom: "2px solid cyan"
    }
  }

  const generateNavLinks = () => {
    return allTopics.map(topic => {
      return <NavLink to={ `/${topic}` } className="NavLink" activeStyle={ NavLinkActiveStyle() }>{ topic }.</NavLink>
    })
  }

  const generateRoutes = () => {
    return allTopics.map(topic => {
      return (
        <Route 
          path={ `/${topic}` } 
          render={() => <ArticleGrid section={topic}/>}
        />
      )
    })
  }

  return (
    <div className="App">
      <h1>Top Stories</h1>
      <div className="Navigation" data-cy="Navigation">
        { generateNavLinks() }
      </div>
        <Switch>
          <Route exact path="/" render={() => <ArticleGrid section="home" /> } />
          { generateRoutes() }
        </Switch>
    </div>
  )
}

export default App;
