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
  //BACKGROUND
  // look into this
});
