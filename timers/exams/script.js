function updatePolishTimer(){
    const targetDate = new Date("2024-05-14T09:00+01:00").getTime();
    const currentDate = new Date().getTime();
    const timeDifference = targetDate - currentDate;

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
    const milliseconds = timeDifference % 1000;

    if(timeDifference > 0){
        document.getElementById('timer-polski').innerHTML = `${days} dni<br>${hours} godzin<br>${minutes} minut<br>${seconds} sekund<br>${milliseconds} milisekund`
    } else{
        document.getElementById('timer-polski').innerHTML = `Odliczanie officjalnie zakończone!<br>Serwery wkrótce zostaną zaaktualizowane!<br>Widzimy się w kolejnym odliczaniu!`
    }
}

function updateMathsTimer(){
    const targetDate = new Date("2024-05-15T09:00+01:00").getTime();
    const currentDate = new Date().getTime();
    const timeDifference = targetDate - currentDate;

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
    const milliseconds = timeDifference % 1000;

    if(timeDifference > 0){
        document.getElementById('timer-matematyka').innerHTML = `${days} dni<br>${hours} godzin<br>${minutes} minut<br>${seconds} sekund<br>${milliseconds} milisekund`
    } else{
        document.getElementById('timer-matematyka').innerHTML = `Odliczanie officjalnie zakończone!<br>Serwery wkrótce zostaną zaaktualizowane!<br>Widzimy się w kolejnym odliczaniu!`
    }
}

function updateEnglishTimer(){
    const targetDate = new Date("2024-05-16T09:00+01:00").getTime();
    const currentDate = new Date().getTime();
    const timeDifference = targetDate - currentDate;

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
    const milliseconds = timeDifference % 1000;

    if(timeDifference > 0){
        document.getElementById('timer-angielski').innerHTML = `${days} dni<br>${hours} godzin<br>${minutes} minut<br>${seconds} sekund<br>${milliseconds} milisekund`
    } else{
        document.getElementById('timer-angielski').innerHTML = `Odliczanie officjalnie zakończone!<br>Serwery wkrótce zostaną zaaktualizowane!<br>Widzimy się w kolejnym odliczaniu!`
    }
}

setInterval(updateEnglishTimer, 1);
setInterval(updateMathsTimer, 1);
setInterval(updatePolishTimer, 1);
updatePolishTimer();