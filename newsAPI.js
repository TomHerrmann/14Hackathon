// news API key
/*
const newsAPI =
  'https://newsapi.org/v2/top-headlines?sources=google-news&apiKey=27670d367cd8498ea7d02d5201f9de1c';

const breakingNews = fetch(newsAPI)
  .then(function(response) {
    return response.json();
  })
  .then(elem => elem.articles);

/*
let breakingNews;

async function getTheNews() {
  breakingNews = await fetch(newsAPI)
    .then(function(response) {
      return response.json();
    })
    .then(data => {
      makeNewsSection(data.articles);
    });
}

console.log(breakingNews);*/
