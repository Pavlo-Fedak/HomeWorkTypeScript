// Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// //
// // Приклад exchange(10000,[{currency:’USD’,value:25},{currency:’EUR’,value:42}],’USD’) // => 400

function exchange(sumUAH: number, currencyValues: {currency: string, value: number}[], exchangeCurrency: string): number | undefined {

    for (let currency of currencyValues) {

        if (currency.currency === exchangeCurrency) {

            return sumUAH / currency.value;

        }

    }

}

let resultExchange = exchange(
    10000,
    [
        {currency: 'USD', value: 42},
        {currency: 'EUR', value: 52}
    ],
    'USD'
);

console.log(resultExchange);
