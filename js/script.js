let giveawaySection = document.querySelector("#giveaway-zone");
let btnGiveaway = document.querySelector("#giveaway");
let entrys = document.querySelector("#entrys");
let btnSort = document.querySelector("#btn-s");

giveawaySection.style.display = "none";

btnGiveaway.addEventListener("click", ()=>{
    giveawaySection.style.display = "flex";
    btnGiveaway.classList.add("colored");
});

btnSort.addEventListener("click", ()=>{
    let participants = entrys.value.split("\n");
    console.log(participants);
});