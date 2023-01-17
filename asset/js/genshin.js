const harga = document.getElementById("total")
const total = document.getElementById("total1")
const pay = document.getElementById("pembayaran")
let wallet = document.querySelectorAll("p.wallet3")





function tpg1(){
  for (let i = 0; i < wallet.length; i++) {
  pay.scrollIntoView();
  harga.style.display = "block";
  total.innerHTML = "Rp 12.000";
  // payment nominal
  wallet[i].innerHTML = "Rp 12.000";
  }
}
function tpg2(){
  for (let i = 0; i < wallet.length; i++) {
  pay.scrollIntoView();
  harga.style.display = "block";
  total.innerHTML = "Rp 61.600";
  // payment nominal
  wallet[i].innerHTML = "Rp 61.600";
  }
}
function tpg3(){
  for (let i = 0; i < wallet.length; i++) {
  pay.scrollIntoView();
  harga.style.display = "block";
  total.innerHTML = "Rp 185.000";
  // payment nominal
  wallet[i].innerHTML = "Rp 185.000";
  }
}
function tpg4(){
  for (let i = 0; i < wallet.length; i++) {
  pay.scrollIntoView();
  harga.style.display = "block";
  total.innerHTML = "Rp 401.000";
  // payment nominal
  wallet[i].innerHTML = "Rp 401.000";
  }
}
function tpg5(){
  for (let i = 0; i < wallet.length; i++) {
  pay.scrollIntoView();
  harga.style.display = "block";
  total.innerHTML = "Rp 617.000";
  // payment nominal
  wallet[i].innerHTML = "Rp 617.000";
  }
}
function tpg6(){
  for (let i = 0; i < wallet.length; i++) {
  pay.scrollIntoView();
  harga.style.display = "block";
  total.innerHTML = "Rp 1.235.000";
  // payment nominal
  wallet[i].innerHTML = "Rp 1.235.000";
  }
}
