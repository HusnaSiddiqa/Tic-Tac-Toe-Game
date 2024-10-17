console.log("welcome to Tic Tac Toe");
let music = new Audio("music.mp3");
let turnsong = new Audio("ting.mp3");
let gameover = new Audio("gameover.mp3");
let celebsong = new Audio("Crackers.mp3");
let turn = "X";
//let boxtext=document.getElementsByClassName('.text')
let out = false;

//function to change the turn
document.querySelector(".line").style.width = "0vw";
document.querySelector('.cont').getElementsByTagName('img')[0].style.backgroundImage.width = "0px";
const changeTurn = () => {
        return turn === "X" ? "0" : "X";
    }
    //function to chck a win
const checkWin = () => {
    let boxtext = document.getElementsByClassName('text');
    let wins = [
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135],
    ]
    wins.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")) {
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " won ";
            // console.log(info.innerText)
            out = true;

            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "400px";
            document.querySelector('.cont').style.backgroundImage = "url('TIC.gif')";
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
            document.querySelector(".line").style.width = "20vw";
            celebsong.play();
        }

    })

}

//game logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
        let boxtexts = element.querySelector('.text');
        element.addEventListener('click', () => {
            if (boxtexts.innerText === '') {
                boxtexts.innerText = turn;
                turn = changeTurn();
                turnsong.play();
                checkWin();
                if (!out) {
                    document.getElementsByClassName('info')[0].innerText = "Turn for " + turn;
                }
            }
        })

    })
    // Add onclick listener to reset button
reset.addEventListener('click', () => {
    let boxtexts = document.querySelectorAll('.text');
    Array.from(boxtexts).forEach(element => {
        element.innerText = "";
    });
    turn = "X";
    out = false;
    document.querySelector(".line").style.width = "0vw";
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px";
    document.querySelector('.cont').getElementsByTagName('img')[0].style.backgroundImage.width = "0px";
   // document.querySelector('.cont').style.backgroundImage.display = "none";
    document.querySelector('.cont').style.backgroundImage = "none";
    celebsong.pause();

})