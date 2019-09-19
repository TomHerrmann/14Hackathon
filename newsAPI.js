// news API key

const newsAPI =
  'https://newsapi.org/v2/top-headlines?' +
  'country=us&' +
  'apiKey=27670d367cd8498ea7d02d5201f9de1c';

let breakingNews;

const num1 = Math.floor(Math.random() * 19);
const num2 = Math.floor(Math.random() * 19);
const num3 = Math.floor(Math.random() * 19);

async function getTheNews() {
  breakingNews = await fetch(newsAPI)
    .then(function(response) {
      return response.json();
    })
    .then(data => data.articles)
    .then(data => {
      const news = document.getElementById('news');
      const newsImage1 = document.createElement('img');
      newsImage.src = data[num1]['urlToImage'];
      news.appendChild(newsImage1);
    })
    .then(data => {
      const news = document.getElementById('news');
      const newsImage2 = document.createElement('img');
      newsImage.src = data[num2]['urlToImage'];
      news.appendChild(newsImage2);
    })
    .then(data => {
      const news = document.getElementById('news');
      const newsImage3 = document.createElement('img');
      newsImage.src = data[num3]['urlToImage'];
      news.appendChild(newsImage3);
    });
}

getTheNews();
