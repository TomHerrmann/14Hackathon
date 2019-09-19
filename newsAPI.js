const newsAPI =
'https://newsapi.org/v2/top-headlines?' +
'country=us&' +
'apiKey=27670d367cd8498ea7d02d5201f9de1c';

const newsData = fetch(newsAPI)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    for (let counter=1; counter < 4; counter += 1 ){
        
        const newsContainer = document.getElementById('news');

        const singleNews = document.createElement('div');
        singleNews.id = `article${counter}`
        
        const newsImage = document.createElement('img');
        newsImage.src = data.articles[counter]['urlToImage'];

        const newsTitle = document.createElement('p');
        newsTitle.innerHTML = data.articles[counter]['title'];

        singleNews.appendChild(newsImage);
        singleNews.appendChild(newsTitle);
        newsContainer.append(singleNews);
    }
  }).catch(err => console.log(err));
