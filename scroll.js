var btn = document.querySelector(".btn_up");

window.onscroll = function scroll() {
  var scroll = window.pageYOffset;
  if (scroll > 1000) {
    btn.style.display = "block";
  }
  else {
    btn.style.display = "none";
  }
  console.log(scroll);
}
btn.onclick = function scrollTop() {
  window.scroll(0,0);
  
}
