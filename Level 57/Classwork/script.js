const form = document.getElementById("myForm");

form.reset();

function formSubmit(){
    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const password = form.elements.password.value;
}

console.log("Name: " + n);
console.log("Email: " + email);
console.log("Password: " + password);

form.addEventListener('submit', function (e){
    e.preventDefault();
    formSubmit();
})

console.log("Simona" + "Erekle" + "Barbare" + "Giorgi N" + )