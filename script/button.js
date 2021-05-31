var button = document.querySelector(".button_search");
var search = document.getElementById("header_search");

button.onclick = function() {

  window.open("https://yandex.ru/search/?text=" + search.value, "_blank");
}
