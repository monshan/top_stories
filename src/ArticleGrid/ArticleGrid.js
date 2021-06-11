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
        <Link to={`${path}/short_url=${art.short_url}`}>
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
          path={`${path}/short_url=${art.short_url}`}
          render={() =>
            <ArticleDet 
              section={art.section}
              subsection={art.subsection}
              title={art.title}
              abstract={art.abstract}
              byline={art.byline}
              nyt_url={art.url}
              multimedia={art.multimedia}              
              chooseMediaSize={chooseMediaSize}
            />}
        />
      )
    })
  }

  return (
    <div className="page">
      <Route 
        exact path={`/${section}`}
        render={() => {
          return (
            <div className="article-grid">
              { renderCards() }
            </div>
          )
        }} />
      { renderDetailsRoutes() }
    </div>
  )
}
