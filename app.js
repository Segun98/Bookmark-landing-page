var button = document.getElementById('submit').addEventListener("click", ValidateEmail)
var field = document.getElementById('input')


function ValidateEmail() {

    var error = document.querySelector('.error');

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(field.value)) {
        return (true)
    } else {
        error.style.display = "block";
    }


}

