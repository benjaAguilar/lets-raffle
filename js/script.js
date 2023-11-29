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
    //choose a winner
    let participants = entrys.value.split("\n");
    let winnerNum = getRandomNum(participants.length);

    //Roulette Part
    let principal = document.querySelector("#principal");
    let less = document.querySelector("#less");
    let plus = document.querySelector("#plus");

    participants.forEach(participant => {
        let pIndex = participants.indexOf(participant);
        let lessI = pIndex - 1;
        let plusI = pIndex + 1;

        principal.textContent = participants[pIndex];
        less.textContent = participants[lessI];
        plus.textContent = participants[plusI];

    });
});