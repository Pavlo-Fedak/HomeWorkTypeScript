// – створити функцію, яка приймає масив та виводить кожен його елемент

function showArray(arr:any[]): void {

    for (let item of arr) {

        console.log(item);

    }

}

let numbers: any[] = [10, 20, 30, 40];

showArray(numbers);