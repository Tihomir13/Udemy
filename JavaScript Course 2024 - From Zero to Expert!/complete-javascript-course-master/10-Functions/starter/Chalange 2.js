// (function () {
//     const header = document.querySelector('h1');
//     header.style.color = `red`;
//     document.
//         querySelector('body').addEventListener
//         ('click', function () {
//             header.style.color = `blue`;
//         })
// })();

function counter() {
    let count = 0;
    return function () {
        count++;
        console.log(count);
    };
}

const incrementCounter = counter();

incrementCounter(); // 1
incrementCounter(); // 2
incrementCounter(); // 3
