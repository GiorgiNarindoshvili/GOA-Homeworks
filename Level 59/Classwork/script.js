const form = document.getElementById("myForm");
const submit = document.getElementById("submit")

submit.addEventListener('click', function(e){
    e.preventDefault();
    const name1 = form.elements.name.value;
    const email = form.elements.email.value;
    const password = form.elements.password.value;
    const gender = form.elements.gender.value;
    const country = form.elements.country.value;
    const terms = form.elements.terms.checked;

    if(terms) {
        console.log(name1);
        console.log(email);
        console.log(password);
        console.log(gender);
        console.log(country);
        console.log(terms);
    } else {
        console.log("Registration Not Completed")
        name1.style.border = "1px solid red"
    }
})
