const addMovieBtn = document.getElementById('add-movie-btn')
const searchBtn = document.getElementById('search-btn')

const movies = []

const rendermovies = (filter = '') => {
  const movieList = document.getElementById('movie-list')

  if (movies.length === 0) {
    movieList.classList.remove('visible')
  } else {
    movieList.classList.add('visible')
  }
  movieList.innerHTML = ''

  const fileteredMovies = !filter
    ? movies
    : movies.filter((movie) => movie.info.title.includes(filter));

  fileteredMovies.forEach((movie) => {
    const movieEl = document.createElement('li')
    const { info, ...otherProps } = movie;
    console.log(otherProps);
    const {title: movieTitle} = info;
    text = movieTitle + ' - '
    for (key in info) {
      if (key !== 'title') {
        text = text + `${key}: ${info[key]}`
      }
    }
    movieEl.textContent = text;
    movieList.append(movieEl)
  })
}
const searchMoviesHandler = () => {
  const filterTerm = document.getElementById('filter-title').value
  rendermovies(filterTerm)
}

const addMovieHandler = () => {
  const title = document.getElementById('title').value
  const extraName = document.getElementById('extra-name').value
  const extraValue = document.getElementById('extra-value').value

  if (
    title.trim() === '' ||
    extraName.trim() === '' ||
    extraValue.trim() === ''
  ) {
    alert('pelase enter valid values')
    return
  }
  const newMovie = {
    info: {
      title,
      [extraName]: extraValue,
    },
    id: Math.random().toString(), 
  }
  movies.push(newMovie)
  rendermovies()
  const newMovie2 = Object.assign({}, newMovie);
  console.log(newMovie2);
}
addMovieBtn.addEventListener('click', addMovieHandler)
searchBtn.addEventListener('click', searchMoviesHandler)
