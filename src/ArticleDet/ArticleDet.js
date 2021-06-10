import { useParams } from 'react-router-dom';

export const ArticleDet = ({ match }) => {
  let { created } = useParams(); 

  return (
    <div className="article-det">
      <p> Made it to the article details page, created on { created } </p>
    </div>
  ) 
}
