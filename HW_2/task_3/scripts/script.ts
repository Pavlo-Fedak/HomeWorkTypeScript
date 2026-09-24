
type Author = {name: string, age: number};
type Book = {
    title: string,
    pageCount: number,
    genre: string,
    authors: Author[]
    };


let book1: Book = {
    title:'dddddd',
    pageCount:200,
    genre:'bbbb',
    authors:[
        {name:'Johnson', age: 40},
        {name:'William', age: 45}
    ]
}
let book2: Book = {
    title:'dsdsddd',
    pageCount:250,
    genre:'cccc',
    authors:[
        {name:'James', age: 30},
        {name:'Oliver', age: 45}
    ]
}
let book3: Book = {
    title:'ssssddd',
    pageCount:300,
    genre:'bbbbdfs',
    authors:[
        {name:'Johnson', age: 40},
        {name:'Lucas', age: 45}
    ]
}