function updateTimer(){
    const targetDate = new Date("2024-06-21T00:00+01:00").getTime();
    const currentDate = new Date().getTime();
    const timeDifference = targetDate - currentDate;

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
    const milliseconds = timeDifference % 1000;

    if(timeDifference > 0){
        document.getElementById('timer').innerHTML = `${days} dni<br>${hours} godzin<br>${minutes} minut<br>${seconds} sekund<br>${milliseconds} milisekund`
    } else{
        document.getElementById('timer').innerHTML = `Odliczanie officjalnie zakończone!<br>Serwery wkrótce zostaną zaaktualizowane!<br>Widzimy się w kolejnym odliczaniu!`
    }
}

setInterval(updateTimer, 1);
updateTimer();