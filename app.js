var button = document.getElementById('submit').addEventListener("click", ValidateEmail)
var field = document.getElementById('input')


function ValidateEmail(e) {
     
     e.preventDefault();

    var error = document.querySelector('.error');
  setTimeout(() => {error.style.display ="none"}, 5000);


    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(field.value)) {
        return (true)
    } else {
        error.style.display = "block";
    }

}

// var viewMode = getCookie("view-mode");
// if(viewMode == "desktop"){
//     viewport.setAttribute('content', 'width=1024');
// }else if (viewMode == "mobile"){
//     viewport.setAttribute('content', 'width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=no');
// }
var sb = document.getElementById('sb').addEventListener('click', displayf)
var ss = document.getElementById('ss').addEventListener('click', displayfs)
var es = document.getElementById('es').addEventListener('click', displayfe)

function displayf () { 

    var sharing = document.getElementById('sharing')
        sharing.classList.remove('displayfeature');
        
    var searching = document.getElementById('searching')
        searching.classList.remove('displayfeature')  
        
    var bookmark = document.getElementById('bookmarking')
    bookmark.classList.add('displayfeature')
          

}
function displayfs () {
    var bookmark = document.getElementById('bookmarking')
    bookmark.classList.remove('displayfeature') 

    var sharing = document.getElementById('sharing')
        sharing.classList.remove('displayfeature');

    var searching = document.getElementById('searching')
        searching.classList.add('displayfeature')


}

function displayfe () {
    var bookmark = document.getElementById('bookmarking')
    bookmark.classList.remove('displayfeature') 
    
    var searching = document.getElementById('searching')
        searching.classList.remove('displayfeature')

        var sharing = document.getElementById('sharing')
        sharing.classList.add('displayfeature');
}
