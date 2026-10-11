//– створити функцію, яка обчислює та повертає площу циліндру висотою h, та радіусом r

function cylinderArea(h: number, r: number): number {

    return 2 * Math.PI * r * (h + r);

}

let resultCylinder: number = cylinderArea(10, 5);

console.log(resultCylinder);
