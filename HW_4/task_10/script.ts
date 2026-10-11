// – створити функцію яка повертає найменьше число з масиву

function getMinNumber(arr: number[]): number | undefined {
    if (arr.length === 0) {
        return undefined;
    }
    let min: number = arr[0]!;

    for (let number of arr) {

        if (number < min) {
            min = number;
        }

    }

    return min;
}

let numbersGetMin: number[]  = [10, 5, 99, -3, 25];

let resultGetMin: number | undefined= getMinNumber(numbersGetMin);

console.log(resultGetMin);