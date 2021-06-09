const ArticleCard = ({ title, media }) => {
  return (
    <div className="ArticleCard">
      <h2>{ title }</h2>
      <image src={media} />
    </div>
  )
}