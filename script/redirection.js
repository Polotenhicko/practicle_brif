const $buttonProduct = document.querySelectorAll('.product_buy');

for (let button of $buttonProduct) {
  button.onclick = function() {
      alert('Перенаправление на сайт покупки!');  
  }
}
