export const getArticles = genre => {
  return fetch(`https://api.nytimes.com/svc/topstories/v2/${genre}.json?api-key=${ process.env.REACT_APP_API_KEY }`);
}

export const getHome = () => {
  return fetch(`https://api.nytimes.com/svc/topstories/v2/$home.json?api-key=${ process.env.REACT_APP_API_KEY }`)
}
