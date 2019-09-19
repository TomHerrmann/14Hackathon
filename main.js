document.addEventListener('DOMContentLoaded', event => {
  const now = new Date();
  const hour = now.getHours();
  const minutes = now.getMinutes();
  const weekday = now.getDay();
  const dayOfMonth = now.getDate();
  const month = now.getMonth();
  const year = now.getFullYear();

  const months = {
    0: 'January',
    1: 'February',
    2: 'March',
    3: 'April',
    4: 'May',
    5: 'June',
    6: 'July',
    7: 'August',
    8: 'September',
    9: 'October',
    10: 'November',
    11: 'December'
  };

  const weekdays = {
    0: 'Sunday',
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday'
  };

  const time12Hour = (hour, minutes) => {
    let suffix = hour >= 12 ? 'PM' : 'AM';
    hour = hour > 12 ? hour - 12 : hour;
    if (minutes < 10) return `${hour}:0${minutes}<span>${suffix}</span>`;
    return `${hour}:${minutes}<span>${suffix}</span>`;
  };

  const timePercent = () => {
    const start = new Date();
    start.setHours(9, 0, 0, 0);

    const end = new Date();
    end.setHours(8, 0, 0, 0);

    const today = new Date();

    const q = Math.abs(today - start);
    const d = Math.abs(end - start);

    const percent = Math.round((q / d) * 100);

    if (percent < 100) {
      return `${percent} <span>%</span>`;
    } else {
      return 'Keep Coding!';
    }
  };

  //TIME
  //Date.now - look it up
  const time = document.querySelector('#time');
  const nowDiv = document.querySelector('#now');
  time.innerHTML = time12Hour(hour, minutes);

  const timePercentDiv = document.querySelector('#percent');
  timePercentDiv.innerHTML = timePercent();

  nowDiv.addEventListener('dblclick', function(e) {
    nowDiv.classList.toggle('show-percent');
  });

  //DATE
  //see above
  const date = document.querySelector('#date');
  date.innerHTML = `${weekdays[weekday]}, ${months[month]} ${dayOfMonth}, ${year}`;

  //WEATHER
  //get from api
  //code for local area
  const weather = document.querySelector('#weather');

  //NEWS
  // get api
  // create scroll across the footer area
  //const news = document.querySelector('#news');
  //const newsImage = breakingNews;
});

// Comment out before presentation

// news API key

const breakingNews = [];

const newsAPI =
  'https://newsapi.org/v2/top-headlines?sources=google-news&apiKey=27670d367cd8498ea7d02d5201f9de1c';

fetch(newsAPI)
  .then(function(response) {
    return response.json();
  })
  .then(data =>
    data.articles.forEach(elem => {
      breakingNews.push(elem);
    })
  );

const num1 = Math.floor(Math.random() * breakingNews.length - 1);
const num2 = Math.floor(Math.random() * breakingNews.length - 1);
const num3 = Math.floor(Math.random() * breakingNews.length - 1);

const makeNewsSection = articlesArr => {
  //dedlaring variable set to image div
  const news = document.querySelector('#news');
  //setting image 1
  const article1 = document.querySelector('article1');
  const newsImage1 = document.createElement('img');
  newsImage1.src = articlesArr[num1]['urlToImage'];
  article1.appendChild(newsImage1);
  //image 2
  const article2 = document.querySelector('article1');
  const newsImage2 = document.createElement('img');
  newsImage2.src = articlesArr[num2]['urlToImage'];
  article2.appendChild(newsImage2);
  //image 3
  const article3 = document.querySelector('article1');
  const newsImage3 = document.createElement('img');
  newsImage3.src = articlesArr[num3]['urlToImage'];
  article3.appendChild(newsImage3);
};

console.log('bn', breakingNews);
