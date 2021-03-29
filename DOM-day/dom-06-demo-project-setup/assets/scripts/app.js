const addMovieModal = document.getElementById('add-modal');
// const addMovieModal = document.body.children[1];

console.log(addMovieModal);

const startAddMovieButton = document.querySelector('header').lastElementChild;
console.log(startAddMovieButton);

const backdrop = document.getElementById('backdrop')

const cancelAddMovieButton = document.getElementById('modal_cancel');
const confirmAddMovieButton = cancelAddMovieButton.nextElementSibling;
const userInputs = addMovieModal.querySelectorAll('input')
console.log(confirmAddMovieButton);

const toggleBackdrop = () => {
    backdrop.classList.toggle('visible')
}
const toggleMovieModal = ()=>{
    addMovieModal.classList.toggle('visible');
    toggleBackdrop();
};

const cancelAddMovieHandler = () =>{
    toggleMovieModal();
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
    }
};

console.log(cancelAddMovieButton)

startAddMovieButton.addEventListener('click', toggleMovieModal);
backdrop.addEventListener('click', toggleMovieModal);
cancelAddMovieButton.addEventListener('click', cancelAddMovieHandler );
confirmAddMovieButton.addEventListener('click', addMovieHandler)