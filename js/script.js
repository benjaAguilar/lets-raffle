let giveawaySection = document.querySelector("#giveaway-zone");
let btnGiveaway = document.querySelector("#giveaway");
let entrys = document.querySelector("#entrys");
let btnSort = document.querySelector("#btn-s");

giveawaySection.style.display = "none";

function getRandomNum(val){
    return Math.floor(Math.random() * val);
}

btnGiveaway.addEventListener("click", ()=>{
    giveawaySection.style.display = "flex";
    btnGiveaway.classList.add("colored");
});

btnSort.addEventListener("click", ()=>{
    let participants = entrys.value.split("\n");
    let winnerNum = getRandomNum(participants.length);

    console.log(participants);
    console.log("the winner is " + participants[winnerNum]);
});