const addMovieModal = document.getElementById('add-modal');
// const addMovieModal = document.body.children[1];

console.log(addMovieModal);

const startAddMovieButton = document.querySelector('header').lastElementChild;
console.log(startAddMovieButton);

const backdrop = document.getElementById('backdrop')

const cancelAddMovieButton = document.getElementById('modal_cancel');
const confirmAddMovieButton = cancelAddMovieButton.nextElementSibling;
const userInputs = addMovieModal.querySelectorAll('input')

const movies = [];


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

const cancelAddMovieHandler = () =>{
    toggleMovieModal();
    clearUserInputs();
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
        title: titleValue,
        image: imgUrlValue,
        rating: ratingValue,
    }
    movies.push(newMovie);
    console.log(movies);
    toggleMovieModal();
    clearUserInputs();
};

console.log(cancelAddMovieButton)

startAddMovieButton.addEventListener('click', toggleMovieModal);
backdrop.addEventListener('click', toggleMovieModal);
cancelAddMovieButton.addEventListener('click', cancelAddMovieHandler );
confirmAddMovieButton.addEventListener('click', addMovieHandler)