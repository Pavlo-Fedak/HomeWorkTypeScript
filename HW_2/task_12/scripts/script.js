"use strict";
let coursesAndDurationArray = [
    { title: 'JavaScript Complex', monthDuration: 5 },
    { title: 'Java Complex', monthDuration: 6 },
    { title: 'Python Complex', monthDuration: 6 },
    { title: 'QA Complex', monthDuration: 4 },
    { title: 'FullStack', monthDuration: 7 },
    { title: 'Frontend', monthDuration: 4 }
];
const course1 = coursesAndDurationArray[0];
if (course1.monthDuration > 5) {
    console.log(course1.title + ' — Супер');
}
const course2 = coursesAndDurationArray[1];
if (course2.monthDuration > 5) {
    console.log(course2.title + ' — Супер');
}
const course3 = coursesAndDurationArray[2];
if (course3.monthDuration > 5) {
    console.log(course3.title + ' — Супер');
}
const course4 = coursesAndDurationArray[3];
if (course4.monthDuration > 5) {
    console.log(course4.title + ' — Супер');
}
const course5 = coursesAndDurationArray[4];
if (course5.monthDuration > 5) {
    console.log(course5.title + ' — Супер');
}
const course6 = coursesAndDurationArray[5];
if (course6.monthDuration > 5) {
    console.log(course6.title + ' — Супер');
}
// for (let i = 0; i < coursesAndDurationArray.length; i++) {
//     if (coursesAndDurationArray[i].monthDuration > 5) {
//         console.log(coursesAndDurationArray[i].title + ' — Супер');
//     }
// }
