const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '6e2ae15c7fmshb43e85d7303320ep12b178jsn3f5c68348e63',
    'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com'
  }
};

fetch('https://echo.paw.cloud/', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));