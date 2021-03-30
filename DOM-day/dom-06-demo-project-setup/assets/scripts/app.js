const addMovieModal = document.getElementById('add-modal');
// const addMovieModal = document.body.children[1];

console.log(addMovieModal);

const startAddMovieButton = document.querySelector('header').lastElementChild;
console.log(startAddMovieButton);

const backdrop = document.getElementById('backdrop')

const cancelAddMovieButton = document.getElementById('modal_cancel');
const confirmAddMovieButton = cancelAddMovieButton.nextElementSibling;
const userInputs = addMovieModal.querySelectorAll('input')
const  textEntrySection = document.getElementById('entry-text') 

const movies = [];

const updateUi = () =>{
    if(movies.length === 0){
        textEntrySection.style.display = 'block';
    } else {
        textEntrySection.style.display = 'none';
    }
};


const toggleBackdrop = () => {
    backdrop.classList.toggle('visible')
}
const toggleMovieModal = ()=>{
    addMovieModal.classList.toggle('visible');
    toggleBackdrop();
};

const clearUserInputs = () => {
    for(usrInput of userInputs){
        usrInput.value = ''
    } 
}
const deleteMovieHandler = (movieId) => {
    let movieIndex = 0;
    for(const movie of movies){
        if(movie.id === movieId){
            break;
        }
        movieIndex++;
    }
    movies.splice(movieIndex, 1);
    const listRoot = document.getElementById('movie-list');
listRoot.children[movieIndex].remove();
};

const cancelAddMovieHandler = () =>{
    toggleMovieModal();
    clearUserInputs();
};

const renderNewMovieElement = ( id, title, image,rating )=>{
const newMovieElement = document.createElement('li');
newMovieElement.className = 'movie-element';
newMovieElement.innerHTML = `
<div class="movie-element__image">
<img src="${image}" alt="${title}">
</div>
<div class="movie-element__info">
<h2>${title}</h2>
<h5>${rating}/5 stars</h5>
</div>
`;
const listRoot = document.getElementById('movie-list');
newMovieElement.addEventListener('click', deleteMovieHandler.bind(null,id ) )
listRoot.append(newMovieElement);
};

const backdropClickHandler = () => {
    toggleMovieModal();
};

const addMovieHandler = () => {
    const titleValue =userInputs[0].value
    const imgUrlValue =userInputs[1].value
    const ratingValue =userInputs[2].value

    if(titleValue.trim() === '' || imgUrlValue.trim() === '' || ratingValue.trim() === '' || +ratingValue < 1 || +ratingValue > 5 ){
        alert('please enter valid values');
        return;
    }
    const newMovie = {
        id: Math.random.toString(),
        title: titleValue,
        image: imgUrlValue,
        rating: ratingValue,
    }
    movies.push(newMovie);
    console.log(movies);
    toggleMovieModal();
    clearUserInputs();
    renderNewMovieElement(newMovie.id, newMovie.title, newMovie.image, newMovie.rating)
    updateUi();
};

startAddMovieButton.addEventListener('click', toggleMovieModal);
backdrop.addEventListener('click', toggleMovieModal);
cancelAddMovieButton.addEventListener('click', cancelAddMovieHandler );
confirmAddMovieButton.addEventListener('click', addMovieHandler)