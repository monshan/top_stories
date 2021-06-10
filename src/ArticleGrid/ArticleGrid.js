import { ArticleCard } from '../ArticleCard/ArticleCard';
import './ArticleGrid.css';

export const ArticleGrid = ({ articles }) => {

  const chooseMediaSize = (options, desiredFormat) => {
    const desiredOption = options.find(image => image.format.toUpperCase() === desiredFormat.toUpperCase());
    return desiredOption.url;
  }
  
  const renderCards = () => {
    return articles.map(art => {
      return (
        <ArticleCard 
          media={ chooseMediaSize(art.multimedia, 'Normal') }
          title={ art.title }
        />
      )
    })
  }
  
  return (
    <div className="article-grid">
      { renderCards() }
    </div>
  )
}
