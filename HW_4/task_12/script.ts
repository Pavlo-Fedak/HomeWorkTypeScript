// – створити функцію swap(arr,index1,index2). Функція міняє місцями значення у відповідних індексах
//
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

function swap(arr:number[], index1: number, index2: number): number[] | undefined      {

    if (arr.length === 0) {
        return undefined;
    }

    let temp = arr[index1]!;

    arr[index1] = arr[index2]!;

    arr[index2] = temp;

    return arr;
}

let resultSwap = swap([11, 22, 33, 44], 0, 2);

console.log(resultSwap);