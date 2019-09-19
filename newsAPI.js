// news API key

const newsAPI =
  'https://newsapi.org/v2/top-headlines?' +
  'country=us&' +
  'apiKey=27670d367cd8498ea7d02d5201f9de1c';

const breakingNews = fetch(newsAPI).then(function(response) {
  return response.json();
});
