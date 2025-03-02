let boxes = document.querySelectorAll(".box");
let resetBtn = document.getElementById("reset-btn");
const winner = document.querySelector(".winner");
const winnerline = document.querySelector(".winnerpara");
const newgamebtn = document.querySelector(".newgame")
resetBtn.addEventListener("click", resetgame);
newgamebtn.addEventListener("click", resetgame)
 // Ensure it's correctly selected
let turnO = true;

const winpattern = [
    [0,1,2], [0,4,8], [0,3,6],
    [1,4,7], [2,5,8], [2,4,6],
    [3,4,5], [6,7,8]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (box.innerText === "") {  
            box.innerText = turnO ? "O" : "X";
            turnO = !turnO;
            box.disabled = true;
            checkwinner();
        }
    });
});
const resetgame = () => {
    turnO = true;
    enableboxes();
    winner.classList.add("hide");
    resetBtn.classList.remove("hide");

}
const showwinnner = (player) => {
    const winner = document.querySelector(".winner"); // Fetch inside function
    const winnerline = document.querySelector(".winnerpara");
    winner.classList.remove("hide"); 
    winnerline.innerText = `yay! The Winner is ${player}`
    resetBtn.classList.add("hide");
    disableboxes();
    // winner.innerText = `Winner: ${player}!`; 
}
const disableboxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}
const enableboxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}
const checkwinner = () => {
    for (let pattern of winpattern) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if (pos1val !== "" && pos2val !== "" && pos3val !== "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                console.log("Winner:", pos1val);
                showwinnner(pos1val); 
                return;
            }
        }
    }
};