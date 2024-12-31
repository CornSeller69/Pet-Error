// Skrypt używa Moveless 1.2
alis('keypress', begin);

let error_95 = new Audio('Materials/Sounds/error95.mp3');
let error_xp = new Audio('Materials/Sounds/errorxp.mp3');
let error_7 = new Audio('Materials/Sounds/error7.mp3');
let error_8 = new Audio('Materials/Sounds/error81.mp3');
let error_10 = new Audio('Materials/Sounds/error10.mp3');
let error_11 = new Audio('Materials/Sounds/error11.mp3');
let theError = error_xp; // jaki error ma grać
let mouseclick = new Audio('Materials/Sounds/mouseclick.mp3');
let errorLine = 0; // sprawdza która linia ma być wypluta przez błąd po kliknięciu linku
let gameoverMus = new Audio('Materials/Sounds/YandereSimulatorGameOver.mp3');
let foodleft = 100;
let funleft = 100;

function begin() {
     rlis('keypress', begin);
     geid('textb4').style.visibility = 'hidden';
     geid('authormark').style.visibility = 'hidden';
     geid('enginemark').style.visibility = 'hidden';
     geid('error').style.visibility = 'visible';
     theError.play();
     geid('fakelink').addEventListener('click', tutorial); // w tej sytuacji nie można użyć Movelessowego alis(). Pobadaj to i spatchuj Move oraz Moveless
}

function tutorial() {
     let txt = geid('errortext');
     if (errorLine == 0) {
          mouseclick.play();
          txt.innerHTML = `Zacznijmy od podstaw. Te paski na dole to mój głód oraz znudzenie. Jak padną do zera to będę na ciebie zły i złamie trochę prawa jakie daje mi przeglądarka i poprawie kod, abym zniknął, bo nie jestem jak pies w jakiejś patoli co w Uwadze TVNu jest pokazany i nie będę z tobą siedział jak mnie głodować chcesz!`;
          geid('foodcounter').style.visibility = 'visible';
          geid('funcounter').style.visibility = 'visible';
          geid('foodcounter').style.opacity = 1;
          geid('funcounter').style.opacity = 1;
          errorLine++;
     } else if (errorLine == 1) {
          mouseclick.play();
          txt.innerHTML = `Następnie masz menu. Tam masz pare przydatnych rzeczy, takich jak np. zmienianie wyglądu tła albo dźwięku błędu.`;
          geid('menu').style.visibility = 'visible';
          geid('menu').style.opacity = 1;
          errorLine++;
     } else if (errorLine == 2) {
          mouseclick.play();
          txt.innerHTML = `Menu zapewnia również potrzeby. Tam znajdziesz dla mnie pożywienie oraz aktywności do moich zapotrzebowań.`;
          errorLine++;
     } else if (errorLine == 3) {
          mouseclick.play();
          txt.innerHTML = `A! Ważna jeszcze rzecz: Czasem zamiast na sobie, piszę rzeczy w konsoli. Będziesz wiedział kiedy coś znajduje się w konsoli, gdyż słychać będzie dźwięk błędu. Wyślę ci teraz wiadomość testową. Aby sprawdzić konsolę kliknij F12 i zakładka "Konsola"/"Console", a jak to nie działa, to prawy przycisk myszy i wtedy opcja "Zbadaj". Potem wchodzisz w zakładkę "Konsola"/"Console".`;
          setTimeout(function() {
               theError.play();
               e('Witam.');
          },1555);
          errorLine++;
     } else if (errorLine == 4) {
          mouseclick.play();
          txt.innerHTML = `To chyba wszystko co musisz wiedzieć. Mam nadzieję, że zajmiesz się mną znakomicie.`;
          errorLine++;
     } else if (errorLine == 5) {
          errorLine = 0;
          txt.innerHTML = ``;
          mouseclick.play();
          rmTut();
     }
}
function rmTut() {
     geid('fakelink').removeEventListener('click', tutorial);
     geid('menu').disabled = false;
     geid('menu').addEventListener('click', openMenu); // disabled/enabled jest bardzo rozchujaną funkcją w JS, więc trzeba to jakoś obejść no..........
     startupBars();
}

function startupBars() {
     setInterval(function() {
          //parseInt();
     }, 5000);
}

function openMenu() {
     geid('menucard').style.visibility = 'visible';
     geid('menucard').style.top = "30px";
}
function closeMenu() {
     geid('menucard').style.top = "-150%";
     setTimeout(function() {geid('menucard').style.visibility = 'hidden';}, 500);
}