const addMovieModal = document.getElementById('add-modal');

// const addMovieModal = document.body.children[1];

console.log(addMovieModal);

const startAddMovieButton = document.querySelector('header').lastElementChild;
console.log(startAddMovieButton);

const toggleMovieModal = ()=>{
    addMovieModal.classList.toggle('visible')
};

startAddMovieButton.addEventListener('click', toggleMovieModal);