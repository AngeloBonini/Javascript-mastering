const addMovieModal = document.getElementById('add-modal');
// const addMovieModal = document.body.children[1];

console.log(addMovieModal);

const startAddMovieButton = document.querySelector('header').lastElementChild;
console.log(startAddMovieButton);

const backdrop = document.getElementById('backdrop')

const cancelAddMovieButton = document.getElementById('modal_cancel');

const toggleBackdrop = () => {
    backdrop.classList.toggle('visible')
}
const toggleMovieModal = ()=>{
    addMovieModal.classList.toggle('visible');
    toggleBackdrop();
};

const cancelAddMovie = () =>{
    toggleMovieModal();
};

const backdropClickHandler = () => {
    toggleMovieModal();
};
console.log(cancelAddMovieButton)
startAddMovieButton.addEventListener('click', toggleMovieModal);
backdrop.addEventListener('click', toggleMovieModal);
cancelAddMovieButton.addEventListener('click', cancelAddMovie );