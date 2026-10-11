// – створити функцію, яка приймає масив об’єктів з наступними полями id,name,age ,
//     та виводить їх в документ. Для кожного об’єкту окремий блок.

type User49 = {id: number, name: string, age: number}[]


function showUsers(users: User49 ) : void {

    for (const user of users) {

        document.write(`
            <div>
                <h2>ID: ${user.id}</h2>
                <p>Name: ${user.name}</p>
                <p>Age: ${user.age}</p>
            </div>
            <hr>
        `);

    }

}

let users : User49 = [
    {id: 1, name: 'Vasya', age: 31},
    {id: 2, name: 'Petya', age: 30},
    {id: 3, name: 'Olya', age: 28}
];

showUsers(users);