const arr = [1, 2, 3, 4];
console.log(arr);

// soma o item e sua posição
const newArr = arr.map(function(item, index) {
    return item + index;
})

console.log(newArr);

// retorna o total da adição mais o próximo item
const sum = arr.reduce(function(total, next) {
    return total + next;
})

console.log(sum);

// retorna apenas os números pares
const filter = arr.filter(function(item) {
    return item % 2 === 0;
})

console.log(filter);

// verifica e retorna um item especifico dentro do array
const find = arr.find(function(item) {
    return item === 2;
})

console.log(find);