import { pictureSetList } from './containerList.js';

function setupImageDisplay(inputElement, containerElement, emptyElement) {
  inputElement.addEventListener('change', () => {
    let selectedFile = inputElement.files [0];
    console.log("selected file:", selectedFile)

    if (selectedFile) {
      displaySelectedImage(selectedFile, containerElement, emptyElement);
    } else {
      console.log("no file selected")
    }
  });
} ;


function displaySelectedImage(selectedFile, containerElement, emptyElement) {
  if (selectedFile) {
    const reader = new FileReader();
    reader.onload = function (event) {
      emptyElement.src = event.target.result;  
      containerElement.style.display = 'block';
    }
  
    reader.readAsDataURL(selectedFile);
  } else {
    console.log("no file selected for display")
  }
}

pictureSetList.forEach((setList) => {
  setupImageDisplay(setList.inputElement, setList.containerElement, setList.emptyElement)
})

