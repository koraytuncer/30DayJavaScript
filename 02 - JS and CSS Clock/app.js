const secondHand = document.querySelector(".second-hand");
const minsHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function setDate(){
    const simdikiZaman = new Date();

    const saniye = simdikiZaman.getSeconds();
    const saniyeDerece = ((saniye / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${saniyeDerece}deg)`;

    const dakika = simdikiZaman.getMinutes();
    const dakikaDerece = ((dakika / 60) * 360 ) +90;
    minsHand.style.transform =`rotate(${dakikaDerece}deg)`;


    const saat = simdikiZaman.getHours();
    const saatDerece = ((saat / 12) * 360 ) +90;
    hourHand.style.transform =`rotate(${saatDerece}deg)`;

    
}

setInterval(setDate,1000);
