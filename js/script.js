let giveawaySection = document.querySelector("#giveaway-zone");
let btnGiveaway = document.querySelector("#giveaway");

giveawaySection.style.display = "none";

btnGiveaway.addEventListener("click", ()=>{
    giveawaySection.style.display = "flex";
    btnGiveaway.classList.add("colored");
});