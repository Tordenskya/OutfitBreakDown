const arrayList = [{
  epmtyArray: [],
  queuedForm: document.querySelector("#queued-form-whole"),
  queuedDiv: document.querySelector(".js-queued-div-whole"),
  inputDiv: document.querySelector(".js-input-div-whole"),
  input: document.querySelector(".js-input-div-whole input")
},{
  epmtyArray: [],
  queuedForm: document.querySelector("#queued-form-head"),
  queuedDiv: document.querySelector(".js-queued-div-head"),
  inputDiv: document.querySelector(".js-input-div-head"),
  input: document.querySelector(".js-input-div-head input")
},{
  epmtyArray: [],
  queuedForm: document.querySelector("#queued-form-torso"),
  queuedDiv: document.querySelector(".js-queued-div-torso"),
  inputDiv: document.querySelector(".js-input-div-torso"),
  input: document.querySelector(".js-input-div-torso input")
},{
  epmtyArray: [],
  queuedForm: document.querySelector("#queued-form-legs"),
  queuedDiv: document.querySelector(".js-queued-div-legs"),
  inputDiv: document.querySelector(".js-input-div-legs"),
  input: document.querySelector(".js-input-div-legs input")
},{
  epmtyArray: [],
  queuedForm: document.querySelector("#queued-form-feet"),
  queuedDiv: document.querySelector(".js-queued-div-feet"),
  inputDiv: document.querySelector(".js-input-div-feet"),
  input: document.querySelector(".js-input-div-feet input")
}];

function deleteQueuedImage(arrayIndex, imageIndex) {
arrayList[arrayIndex].epmtyArray.splice(imageIndex, 1);
let images = '';
arrayList[arrayIndex].epmtyArray.forEach((image, index) => {
      images += `
      <div class="image">
        <img src="${URL.createObjectURL(image)}" alt="image">
        <span onclick="deleteQueuedImage(${arrayIndex}, ${index})">&times;</span>
      </div>
      `;
    })
    arrayList[arrayIndex].queuedDiv.innerHTML = images;
};

function displayImagesList(epmtyArray, queuedForm, queuedDiv, inputDiv, input, arrayIndex) {

input.addEventListener("change", () => {
const files = input.files;
for(let i = 0; i < files.length; i++ ) {
epmtyArray.push(files[i])
}
displayQueuedImages();
})

inputDiv.addEventListener("drop", (e) => {
e.preventDefault()
const files = e.dataTransfer.files; 
for(let i = 0; i < files.length; i++) {
if(!files[i].type.match("image")) continue

if(epmtyArray.every(image => image.name !== files[i].name))
epmtyArray.push(files[i]);
}
displayQueuedImages();
})

function displayQueuedImages() {
let images = '';
epmtyArray.forEach((image, index) => {
images += `
<div class="image">
<img src="${URL.createObjectURL(image)}" alt="image">
<span onclick="deleteQueuedImage(${arrayIndex}, ${index})">&times;</span>
</div>
`;
})
queuedDiv.innerHTML = images;
}
}

arrayList.forEach((list, arrayIndex) => {
displayImagesList(list.epmtyArray, list.queuedForm, list.queuedDiv, list.inputDiv, list.input, arrayIndex)
})
