let playerInfo = document.querySelector(".current-player");
let boxes = document.querySelectorAll(".box");
let newGameBtn = document.querySelector(".new-game-btn");

let currentPlayer ="X";
let gridBox = ["", "", "", "", "", "", "", "", "" ];
let counter = 0;

playerInfo.innerText = `Current Player - ${currentPlayer}`;
const winningPositions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
function initGame(){
    gridBox = ["", "", "", "", "", "", "", "", ""];
    counter = 0;
    boxes.forEach((box, index) => {
        
        box.innerText = "";
        boxes[index].style.pointerEvents = "all";
        box.classList = `box box${index+1}`;

    });
    
}
// initGame();


function checkCurrentPlayer(){
    if(currentPlayer === "X")
    {
        currentPlayer = "O"
        playerInfo.innerText = `Current Player - ${currentPlayer}`;
    }
    
    else{
        currentPlayer = "X";
        playerInfo.innerText = `Current Player - ${currentPlayer}`;
    }
//  console.log(gridBox);

}



function checkWinner(){
    let answer = "";

    winningPositions.forEach((positions) => {
        if((gridBox[positions[0]] !== "" || gridBox[positions[1]] !== "" || gridBox[positions[2]] !== "") && 
        (gridBox[positions[0]] ===  gridBox[positions[1]]) && (gridBox[positions[1]] ===  gridBox[positions[2]]))
        {
            if(gridBox[positions[0]] === "X")
            {
                answer = "X"
            }
            else
            {
                answer = "O";
            }
            playerInfo.innerText = `Winner is ${answer}`;
            boxes[positions[0]].classList.add("win");
            boxes[positions[1]].classList.add("win");
            boxes[positions[2]].classList.add("win");
            newGameBtn.classList.add("active");
            
        }
        if(counter === 9 && answer === "")
        {
            playerInfo.innerText = "Game Tied";
            newGameBtn.classList.add("active");

        }

       if(answer !== ""){
        boxes.forEach(box => {
            box.style.pointerEvents = "none";
        });
     
       
    }
      

    });

   
    
};

newGameBtn.addEventListener('click', initGame());


function handleClick(index){
    if(gridBox[index] === ""){
        counter++;
    gridBox[index] = currentPlayer;    
    boxes[index].innerText = currentPlayer;
    boxes[index].style.pointerEvents = "none";
    checkCurrentPlayer();
    checkWinner();
    }

}



boxes.forEach((box, index) => {
    box.addEventListener("click", () => {
        handleClick(index);
    })
});