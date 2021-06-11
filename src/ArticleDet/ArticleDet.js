import { Link } from 'react-router-dom';
import './ArticleDet.css'

export const ArticleDet = ({ title, abstract, byline, section, subsection, nyt_url, multimedia }) => {

  const includeSubsection = () => {
    if (subsection) {
      return `  ➤  ${subsection}`
    }
    return '';
  }

  const banner = multimedia.find(image => image.format.toUpperCase() === 'SUPERJUMBO');

  return (
    <div className="article-det">
      <img src={banner.url} alt={banner.caption} className="article-det__img"/>
      <h2>{title}</h2>
      <h3>{byline}</h3>
      <hr></hr>
      <h4>{section}{includeSubsection()}</h4>
      <p>{abstract}</p>
      <div className="article-det__buttons">
        <button className="article-det__button __go-back ">Go Back </button>
        <a href={nyt_url} target="_blank">
          <button className="article-det__button __read-on-nyt">Read on NYT</button>
        </a>
      </div>
    </div>
  ) 
}
