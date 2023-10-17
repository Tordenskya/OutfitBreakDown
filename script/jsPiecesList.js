let container = document.querySelector('.js-piecesContainer').innerHTML;

piecesList.forEach((piece) => {
  container += `
    <div class="${piece.pieceName} pieceByPiece">
      <div>
        <form id="queued-form-${piece.pieceName}">
          <div class="queued-div js-queued-div-${piece.pieceName}"></div>
        </form>
      </div>
      <div class="input-container">
        <div class="input-div-pieces js-input-div-${piece.pieceName}">
          <p>Drag and drop ${piece.pieceName} piece or <span class="browse">Browse</span></p>
          <input type="file" class="file" multiple="multiple" accept="images/jpeg, images/jpg, images/png">
        </div>
        <div>
          <input type="text" placeholder="Description..." class="description">
        </div>
      </div>
    </div>`;
});

document.querySelector('.js-piecesContainer').innerHTML = container;

let piecesRenderd = false;
let renderContainer = document.getElementById("containerRender");

function renderPieces() {
  

  if(!piecesRenderd) {
    renderContainer.style.visibility = hidden;
    piecesRenderd = true;
  } else {
    renderContainer.style.opacity = 1;
    piecesRenderd = false;
  }
};