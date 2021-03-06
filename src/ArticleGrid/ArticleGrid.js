import { useEffect, useState } from 'react';
import { Route, Link, useRouteMatch } from 'react-router-dom';
import { getArticles } from '../calls';
import { ArticleCard } from '../ArticleCard/ArticleCard';
import { ArticleDet } from '../ArticleDet/ArticleDet';
import { Search } from '../Search/Search';  
import './ArticleGrid.css';

export const ArticleGrid = ({ section }) => {
  let { url } = useRouteMatch();
  const [sectionArticles, setSectionArticles] = useState([]);
  const [formValue, setFormValue] = useState('')

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

  const checkHomePath = isHome => {
    if (isHome === 'home') return '';
    return section;
  }

  const potentialQueries = () => {
    return sectionArticles.reduce((allQueries, article) => {
      article.des_facet.forEach(facet => {
        if (!allQueries.includes(facet.toUpperCase())) {
          allQueries.push(facet.toUpperCase())
        }
      })
      article.org_facet.forEach(facet => {
        if (!allQueries.includes(facet.toUpperCase())) {
          allQueries.push(facet.toUpperCase())
        }
      })
      article.per_facet.forEach(facet => {
        if (!allQueries.includes(facet.toUpperCase())) {
          allQueries.push(facet.toUpperCase())
        }
      })
      article.geo_facet.forEach(facet => {
        if (!allQueries.includes(facet.toUpperCase())) {
          allQueries.push(facet.toUpperCase())
        }
      })
      allQueries.push(article.title.toUpperCase())
      return allQueries
    }, [])
  }
  
  const renderCards = () => {
    if (formValue) {
      return sectionArticles.map(art => {
        const potentialQueries = art.des_facet.concat(art.org_facet).concat(art.per_facet).concat(art.geo_facet).map(keyword => keyword.toUpperCase());
        potentialQueries.push(art.title.toUpperCase())
        if (potentialQueries.includes(formValue.toUpperCase())) {
          return (
            <Link to={`${url}/short_url=${art.short_url}`}>
              <ArticleCard
                media={ chooseMediaSize(art.multimedia, 'Normal') }
                title={ art.title }
              />
            </Link>
          )
        }
      })
    }
    return sectionArticles.map(art => {
      return (
        <Link to={`${url}/short_url=${art.short_url}`}>
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
          path={`${url}/short_url=${art.short_url}`}
          render={() =>
            <ArticleDet 
              historySection={section}
              section={art.section}
              subsection={art.subsection}
              title={art.title}
              abstract={art.abstract}
              byline={art.byline}
              nyt_url={art.url}
              multimedia={art.multimedia}              
              chooseMediaSize={chooseMediaSize}
              checkHomePath={checkHomePath}
            />}
        />
      )
    })
  }

  return (
    <div className="page">
      <Route 
        exact path={`/${ checkHomePath(section) }`}
        render={() => {
          return (
            <>
            <Search section={section} setFormValue={setFormValue} potentialQueries={ potentialQueries() }/>
            <div className="article-grid">
              { renderCards() }
            </div>
            </>
          )
        }} />
      { renderDetailsRoutes() }
    </div>
  )
}
