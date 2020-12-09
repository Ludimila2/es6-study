"use strict";

var arr = [1, 2, 3, 4];
console.log(arr); // soma o item e sua posição

var newArr = arr.map(function (item, index) {
  return item + index;
});
console.log(newArr); // retorna o total da adição mais o próximo item

var sum = arr.reduce(function (total, next) {
  return total + next;
});
console.log(sum); // retorna apenas os números pares

var filter = arr.filter(function (item) {
  return item % 2 === 0;
});
console.log(filter); // verifica e retorna um item especifico dentro do array

var find = arr.find(function (item) {
  return item === 2;
});
console.log(find);
