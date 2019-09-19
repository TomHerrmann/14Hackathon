const photosAPIURL = 'https://api.unsplash.com/photos/?order_by=popular&per_page=1&client_id=571b26bea33eb68f0a1ef9853d4df8f5a4f3dd15e833eb1c0e08e80256fe6c98';

const photosData = fetch(photosAPIURL)
    .then(function(response){
        return response.json();
    })
    .then(function(response){
        const HTMLTag = document.getElementsByTagName('HTML')[0];
        const imageSrc = response[0]["urls"]["full"];
        HTMLTag.style.backgroundImage = `url(${imageSrc})`;
    });