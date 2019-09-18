const date = Date.now();

document.onload = () => {
  //TIME
  //Date.now - look it up
  const time = document.querySelector('#time');
  time.append(date.toLocaleTimeString());

  //DATE
  //see above
  const date = document.querySelector('#date');

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
});
