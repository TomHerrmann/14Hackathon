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

  const time12Hour = (h, n) => {
    // if (h > 12) h = h - 12;
    // else ap = 'AM';
    // if ((h = 0)) h = 12;
    if (n < 10) return `${h}:0${n}`;
    return `${h}:${n}`;
  };

  //TIME
  //Date.now - look it up
  const time = document.querySelector('#time');
  time.innerHTML = time12Hour(hour, minutes);

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
  const news = document.querySelector('#news');

  //BACKGROUND
  // look into this
  console.log(breakingNews);
});
