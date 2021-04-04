const addMovieBtn = document.getElementById('add-movie-btn')
const searchBtn = document.getElementById('search-btn')

const movies = [];

const rendermovies = () => {
const movieList = document.getElementById('movie-list');


if(movies.length === 0 ){
    movieList.classList.remove('visible');
}else{
    movieList.classList.add('visible');
}
movieList.innerHTML = '';

movies.forEach((movie)=>{

    const movieEl = document.createElement('li');
    text = movie.info.title + ' - ';
    for ( key in movie.info){
        if(key !== 'title'){
            text = text + `${key}: ${movie.info[key]}`;
        }
    }
    movieEl.textContent = text;
    movieList.append(movieEl);
});

};

const addMovieHandler = () => {
  const title = document.getElementById('title').value
  const extraName = document.getElementById('extra-name').value
  const extraValue = document.getElementById('extra-value').value

  if (
    title.trim() === '' ||
    extraName.trim() === '' ||
    extraValue.trim() === ''
  ) {
      alert('pelase enter valid values');
      return;
  }
  const newMovie = {
      info:{
           title,
           [extraName]: extraValue, 
    
        },
        id: Math.random(),
  };
  movies.push(newMovie);
  rendermovies();
}

addMovieBtn.addEventListener('click', addMovieHandler);
