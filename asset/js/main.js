// WINRATE CALCUALTOR DECLARATED
const tMatch = document.querySelector("#match");
const tWr = document.querySelector("#wr");
const wrReq = document.querySelector("#wrReq");
const hasil = document.querySelector("#hasil");
const resultText = document.querySelector("#resultText");

// Functions
function res() {
    const resultNum = rumus(match.value, wr.value, wrReq.value);
    const text = `Kamu memerlukan sekitar <b>${resultNum}</b> win tanpa lose untuk mendapatkan win rate <b>${wrReq.value}%</b>`;
    resultText.innerHTML = text;
}

function rumus(match, wr, wrReq) {
    let tWin = match * (wr / 100);
    let tLose = match - tWin;
    let sisaWr = 100 - wrReq;
    let wrResult = 100 / sisaWr;
    let seratusPersen = tLose * wrResult;
    let final = seratusPersen - match;
    return Math.round(final);
}

// Main
window.addEventListener("load", init);

function init() {
    load();
    eventListener();
}

function load() {}

function eventListener() {
    hasil.addEventListener("click", res);
}

// WINRATE FINAL



(function(w, d, s, l, i) {
      w[l] = w[l] || []; w[l].push({
        'gtm.start':
        new Date().getTime(), event: 'gtm.js'
      }); var f = d.getElementsByTagName(s)[0],
      j = d.createElement(s), dl = l != 'dataLayer'?'&l='+l: ''; j.async = true; j.src =
      'https://www.googletagmanager.com/gtm.js?id='+i+dl; f.parentNode.insertBefore(j, f);
    })(window, document, 'script', 'dataLayer', 'GTM-MHKDVZZ');