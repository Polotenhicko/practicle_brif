const $cost = document.querySelector('.amount .cost_price');

const store = 50;

let price = parseInt($cost.innerText);

const $cost5 = document.querySelector('.cost_5');
const $cost50 = document.querySelector('.cost_50');
const $cost10 = document.querySelector('.cost_10');

$cost5.innerText = price * 5 + ' руб.';
$cost10.innerText = price * 10 + ' руб.';
$cost50.innerText = price * 50 + ' руб.';

const $plus = document.querySelector('button.plus');
const $minus = document.querySelector('button.minus');
const $number = document.querySelector('.number');

let number = $number.value;

$plus.onclick = function() {
  if (number < store) {
    number++;
    $number.value = number;
    $cost.innerText = price * number;
  }
}
$minus.onclick = function() {
  if (number >= 2) {
    number--;
    $number.value = number;
    $cost.innerText = price * number;
  }
}
function cost() {
  $cost.innerText = price * $number.value;
  number = $number.value;
}
$number.oninput = function() {
  if ($number.value < store && $number.value >= 1) {
    cost()
  } else {
    $number.onchange = function() {
      if ($number.value < store && $number.value >= 1) {
      cost()
    }
      else {
        $number.value = 1;
        cost()
      }
    }
  }
}
