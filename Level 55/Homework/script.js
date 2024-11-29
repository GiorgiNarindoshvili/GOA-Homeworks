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

//3 best practices of JS
//best practies of JS are: var, const or let, based on these keywords, you can declare variable.

//4
//name atribute is better than id because, name atribbute is used especially in form attributes because by name you can group elements logically than id and id is more convenient for styiling some attributes or scripting