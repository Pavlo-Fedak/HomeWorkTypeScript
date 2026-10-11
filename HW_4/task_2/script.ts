// – створити функцію, яка обчислює та повертає площу кола з радіусом r

function circleArea(r: number):number {

    return Math.PI * r * r;

}

let resultCircle: number = circleArea(5);

console.log(resultCircle);