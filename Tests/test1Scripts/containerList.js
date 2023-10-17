const whole = document.querySelector('.js-inputImg-whole');
const head = document.querySelector('.js-inputImg-head');
const torso = document.querySelector('.js-inputImg-torso');
const legs = document.querySelector('.js-inputImg-legs');
const feet = document.querySelector('.js-inputImg-feet');



export const pictureSetList = [{
  inputElement: whole,
  containerElement:  document.querySelector('.outfitContainer-whole'),
  emptyElement: document.querySelector('.js-emptyFoto-whole')
}, {
  inputElement: head,
  containerElement: document.querySelector('.outfitContainer-head'),
  emptyElement: document.querySelector('.js-emptyFoto-head')  
}, {
  inputElement: torso,
  containerElement: document.querySelector('.outfitContainer-torso'),
  emptyElement: document.querySelector('.js-emptyFoto-torso')
}, {
  inputElement: legs,
  containerElement: document.querySelector('.outfitContainer-legs'),
  emptyElement: document.querySelector('.js-emptyFoto-legs')
}, {
  inputElement: feet,
  containerElement: document.querySelector('.outfitContainer-feet'),
  emptyElement: document.querySelector('.js-emptyFoto-feet')
}];