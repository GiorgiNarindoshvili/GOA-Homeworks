//1
let num1 = prompt("Enter Your Number: ")
let num2 = prompt("Enter Your Second Number: ")

num1 = Number(num1)
num2 = Number(num2)

console.log(num1 + num2)

//2
const form = document.getElementById("formm1")


form.addEventListener('click', function (e){
    e.preventDefault();
    console.log(form.elements.name.value);
})

console.log(movieRating);
let movieRating = 25;
//3 best practices of JS
//best practies of JS are: var, const or let, based on these keywords, you can declare variable.

//4
//One of the best practices are comments to describe, comments are helping people to understand productively about code, also best practice is indentation, based on the indentation, our code will look like more exceptional and will be good for read.