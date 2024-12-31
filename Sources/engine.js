console.info("Uses Moveless v1.2 by CornSeller");

function geid(id) {
    return document.getElementById(id);
}
function gec(classN) {
    return document.getElementsByClassName(classN);
}
function  cls() {
    return console.clear();
}
function l(a) {
    return console.log(a);
}
function e(a) {
    return console.error(a);
} 
function i(a) {
    return console.info(a);
}
function w(a) {
    return console.warn(a);
}
function d(a) {
    return console.debug(a);
}
function alis(a, b, c) {
    return addEventListener(a, b, c);
}
function rlis(a, b, c) {
    return removeEventListener(a, b, c);
}
function setT(b, c) {
    return setTimeout(b, c);
}
function setI(b, c) {
    return setInterval(b, c);
}
function remI(b, c) {
    return removeInterval(b, c);
}