import './ArticleCard.css';

export const ArticleCard = ({ title, media }) => {
  return (
    <div className="ArticleCard">
      {/* <p>{ title }</p> */}
      <img src={media} />
    </div>
  )
}