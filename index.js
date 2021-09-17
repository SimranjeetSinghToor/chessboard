window.addEventListener("DOMContentLoaded", function(){
  const root = document.querySelector("#root");
  root.addEventListener("click",clickHandler)
  renderChess();
  
  function createCell() {
    let cell = document.createElement("div");
    cell.classList.add("box")
    return cell;
  }

  function renderChess() {
    let isBlack = true;
    for(let i =0; i < 8; i++) {
       if(i % 2 == 0) isBlack = false; else isBlack = true;
       for(let j =0; j< 8; j++) {
         let cell = createCell();
         cell.id = i+" "+j;
         if(isBlack){
           isBlack = false;
           cell.classList.add("black")
         }
         else {
           cell.classList.add("white")
           isBlack=true;
         }
         root.appendChild(cell)
       }
    }
  }
  
  function resetColors() {
    for(let i =0; i < 8; i++) {
      for(let j =0; j< 8; j++) {
          document.getElementById(i+" "+j).classList.remove("highlight")
      }
    }
  }

  function clickHandler(e) {
    resetColors();
    let id = e.target.id;
    const [row,column] = id.split(" ")
    let crow = row;
    let col = column
    while(crow >= 0 && col >= 0) {
      document.getElementById(crow+" "+col).classList.add("highlight")
      col--;
      crow--;
    }
     crow = row;
     col = column
    while(crow < 8 && col < 8) {
      document.getElementById(crow+" "+col).classList.add("highlight")
      col++;
      crow++;
    }
     crow = row;
     col = column
    while(crow < 8 && col >= 0 ) {
      document.getElementById(crow+" "+col).classList.add("highlight")
      col--;
      crow++;
    } 
     crow = row;
     col = column
    while(crow >= 0 && col < 8) {
      document.getElementById(crow+" "+col).classList.add("highlight")
      col++;
      crow--;
    } 
  }
})

