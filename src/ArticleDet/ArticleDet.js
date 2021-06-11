import './ArticleDet.css'

export const ArticleDet = ({ title, abstract, byline }) => {

  return (
    <div className="article-det">
      <h2>{title}</h2>
      <h3>{byline}</h3>
      <hr></hr>
      <p>{abstract}</p>
    </div>
  ) 
}
