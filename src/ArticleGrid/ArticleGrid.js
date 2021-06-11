import { useEffect, useState } from 'react';
import { Route, Link, useRouteMatch } from 'react-router-dom';
import { getArticles } from '../calls';
import { ArticleCard } from '../ArticleCard/ArticleCard';
import { ArticleDet } from '../ArticleDet/ArticleDet';
import './ArticleGrid.css';

export const ArticleGrid = ({ section }) => {
  let { path } = useRouteMatch();
  const [sectionArticles, setSectionArticles] = useState([]);

  useEffect(() => {
    cleanGETbySection();
  }, [section])

  const cleanGETbySection = () => {
    getArticles(section)
      .then(res => {
        if (!res.ok) throw new Error();
        return res.json();
      })
      .then(goodRes => {
        if (section) {
          setSectionArticles(goodRes.results);
        }
      })
      .catch((badRes) => {
        return badRes;
      })
  }

  const chooseMediaSize = (options, desiredFormat) => {
    if (!options) return 'nyt.png';
    const desiredOption = options.find(image => image.format.toUpperCase() === desiredFormat.toUpperCase());
    return desiredOption.url;
  }
  
  const renderCards = () => {
    return sectionArticles.map(art => {
      return (
        <Link to={`${path}/${art.created_date}`}>
          <ArticleCard 
            media={ chooseMediaSize(art.multimedia, 'Normal') }
            title={ art.title }
          />
        </Link>
      )
    })
  }

  const renderDetailsRoutes = () => {
    return sectionArticles.map(art => {
      return (
        <Route
          path={`${path}/${art.created_date}`}
          render={() =>
            <ArticleDet 
              title={art.title}
              abstract={art.abstract}
              byline={art.byline}
            />}
        />
      )
    })
  }

  return (
    <div className="page">
      <div className="article-grid">
        { renderCards() }
      </div>
      { renderDetailsRoutes() }
    </div>
    
  )
}
