import { useEffect, useState } from 'react';
import { Route, Link } from 'react-router-dom';
import { getHome, getArticles } from '../calls';
import { ArticleCard } from '../ArticleCard/ArticleCard';
import { ArticleDet } from '../ArticleDet/ArticleDet';
import './ArticleGrid.css';

export const ArticleGrid = ({ section }) => {
  const [sectionArticles, setSectionArticles] = useState([]);

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

        if (!section) {
          setSectionArticles('home');
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
        <Link to={`/${section}/${art.created_date}`}>
          <ArticleCard 
            media={ chooseMediaSize(art.multimedia, 'Normal') }
            title={ art.title }
          />
        </Link>
      )
    })
  }

  const renderArticleDets = () => {
    return sectionArticles.map(art => {
      <Route path={`/${section}/${art.created_date}`}
        children={ <ArticleDet abstract={art.abstract} title={ art.title }/> } />
    })
  }
  
  return (
    <div className="article-grid">
      <Route path={`/${section}`} children={ renderCards() } />
      { renderArticleDets() }
    </div>
  )
}
