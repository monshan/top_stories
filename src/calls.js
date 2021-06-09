export const getArticles = genre => {
  return fetch(`https://api.nytimes.com/svc/topstories/v2/${genre}.json?api-key=1A5tcEY81u6UG91Av0Av7b81eAm4WHFY`);
}

export const getHome = () => {
  return fetch('https://api.nytimes.com/svc/topstories/v2/$home.json?api-key=1A5tcEY81u6UG91Av0Av7b81eAm4WHFY')
}
