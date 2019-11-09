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
var viewMode = getCookie("view-mode");
if(viewMode == "desktop"){
    viewport.setAttribute('content', 'width=1024');
}else if (viewMode == "mobile"){
    viewport.setAttribute('content', 'width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=no');
}
