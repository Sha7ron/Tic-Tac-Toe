let arr = Array(9).fill(null)
let currentPlayer = 'X'
let gameOver = false;

function checkWinner(){
    if(
        //horizontal  match
        (arr[0] !== null && arr[0] === arr[1] && arr[1]===arr[2]) ||
        (arr[3] !== null && arr[3] === arr[4] && arr[4]===arr[5]) ||
        (arr[6] !== null && arr[6] === arr[7] && arr[7]===arr[8]) ||
        //vertical match
        (arr[0] !== null && arr[0] === arr[3] && arr[3]===arr[6]) ||
        (arr[1] !== null && arr[1] === arr[4] && arr[4]===arr[7]) ||
        (arr[2] !== null && arr[2] === arr[5] && arr[5]===arr[8]) ||
        //diagonal match
        (arr[0] !== null && arr[0] === arr[4] && arr[4]===arr[8]) ||
        (arr[2] !== null && arr[2] === arr[4] && arr[4]===arr[6])
    ){
        document.getElementById("result").innerText = `Winner is ${currentPlayer}`;
        gameOver = true;
        return;
    }

    if(!arr.some((e) => e === null)){
        document.getElementById("result").innerText = "Draw!!";
        gameOver = true;
    }
}

function handleClick(el){
    if (gameOver) return;

    const id = Number(el.id)
    if(arr[id] !== null) return;

    arr[id] = currentPlayer
    el.innerText = currentPlayer

    checkWinner()

    if (!gameOver) {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
}
