import { useEffect, useState } from 'react';
import { Route, Link, useRouteMatch } from 'react-router-dom';
import { getHome, getArticles } from '../calls';
import { ArticleCard } from '../ArticleCard/ArticleCard';
import { ArticleDet } from '../ArticleDet/ArticleDet';
import './ArticleGrid.css';

export const ArticleGrid = ({ section }) => {
  const [sectionArticles, setSectionArticles] = useState([]);
  let { path, url } = useRouteMatch();

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
          setSectionArticles(goodRes.results);
        }
      })
      .catch((badRes) => {
        // console.log(badRes);
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
  
  return (
    <div className="article-grid">
      { renderCards() }
    </div>
  )
}
