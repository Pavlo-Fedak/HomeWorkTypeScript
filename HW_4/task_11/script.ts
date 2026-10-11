// – створити функцію sum(arr), яка приймає масив чисел,
//     сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
function sum(arr: number[]): number {

    let total = 0;

    for (let number of arr) {

        total += number;

    }

    return total;
}

let resultSum = sum([1, 2, 10]);

console.log(resultSum);