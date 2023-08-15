'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');
//console.log(btnOpenModal);
// THE FIRST THING WE NEED TO DO IS TO ACTUALLY REACT O A CLICK ON EACH OF THESE BUTTONS HERE

// NOW NOTHING HAPPENS SO WE NEED TO ATTACH ANE VENT HANDLER TO EACH OF THESE THREE BUTTONS

const OpenModal = function () {
  //console.log('Button clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnOpenModal.length; i++)
  btnOpenModal[i].addEventListener('click', OpenModal);
// THE DOT IS ONLY FOR THE SELECTOR, HERE WE JUST PASS THE NAME OF THE CLASS

btnCloseModal.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  //console.log('a key was pressed'); // we are basically listening for events everywhere - no matter where they happen on the page they will always trigger the event handler that we are going to specify here
  console.log(e.key);

  // I ONLY WANT TO CLOSE THE MODAL IF IT IS CURRENTLY VISIBLE - AND HOW DO WE KNOW THAT? IF THE MODAL CONTAIS THE CLASS HIDDEN IT MEANS IT'S NOT VISIBLE
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    // IF THE MODAL DOES NOT CONTAIN THE HIDDEN CLASS THEN CLOSE THE MODAL
    closeModal(); // HERE WE NEED TO ACTUALLY CALL THE FUNCTION BECAUSE WHEN THIS FUNCTION IS EXECUTING - (funtion (e))- AND IT REACHES THIS LINE SOMETHING NEEDS TO HAPPEN AND WHAT NEEDS TO HAPPEN IS BASICALLY THE CODE : modal.classList.add('hidden') and overlay.classList.add('hidden)
  }
});

// WE ARE NOT CALLING THE FUNCTION () !! IF WE DID THAT IT WOULD EXECUTE IMEDIATELLY BUT WE JUST
// WANT IT TO HAPPEN THE CLICK EVENT HAPPENS
// 'click' is the name of the event and after we write the function
// just like and if-else statement, when there's only one line of code that I want to execute, I actually don't have to use curly braces (a block)
// now we need to add a modal

//for (let i = 0); i < btnOpenModal.length; i++){
//consobtnOpenModal[i].addEventListener(click, function () {});
//}
