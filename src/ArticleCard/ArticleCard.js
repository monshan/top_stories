import './ArticleCard.css';

export const ArticleCard = ({ title, media }) => {
  return (
    <div className="article-card">
      <div className="article-card__title-hover">
        <p>{ title }</p>
      </div>
      <img src={media} className="article-card__img"/>
    </div>
  )
}