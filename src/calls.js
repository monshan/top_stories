export const getArticles = genre => {
  fetch(`https://api.nytimes.com/svc/topstories/v2/${genre}.json?api-key=1A5tcEY81u6UG91Av0Av7b81eAm4WHFY`)
    .then((res) => {
      // console.log(res);
      if (!res.ok) throw new Error();
      return res.json();
    })
    .then((goodRes) => {
      // console.log(goodRes);
      return goodRes.results;
    })
    .catch((badRes) => {
      // console.log(badRes);
      return badRes;
    })
}