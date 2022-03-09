function Books(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
}
function Display() {

}
Display.prototype.clear = function () {
    let formReset = document.getElementById('libraryForm')
    formReset.reset();
}
Display.prototype.add = function (book) {
    let tableBody = document.getElementById('tableBody')
    let ui = `<tr>
<td>${book.name}</td>
<td>${book.author}</td>
<td>${book.type}</td>
</tr>`;
    tableBody.innerHTML += ui;
}
<<<<<<< HEAD
Display.prototype.show = function (type, message) {
    let grab = document.getElementById("message")
    grab.innerHTML = `<div class="alert alert-${type} d-flex align-items-center" role="alert" id="alerts">
    <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Danger:"><use xlink:href="#exclamation-triangle-fill"/></svg>
    <div id="alert_disp">
    ${message}
    </div>
  </div>`
    setTimeout(function () {
        grab.innerHTML = ""
    }, 2000);
}
// Display.prototype.validate = function(book)
// {
//     if(book.bookName.length <2 || book.author.length <2)
//     {
//         return false
//     }
//     else
//     {
//         return true;
//     }
// }
=======

>>>>>>> deb1f1a9b3b49ca83617a0006aaf0179bdb709e0

let libraryForm = document.getElementById('libraryForm')
libraryForm.addEventListener('submit', sub)
function sub(e) {
    let bookName = document.getElementById('bookName').value;
    let author = document.getElementById('author').value;
    let fiction = document.getElementById('fiction')
    let programming = document.getElementById('programming')
    let cooking = document.getElementById('cooking')
    let type;
    if (fiction.checked) {
        type = fiction.value;
    }
    else if (programming.checked) {
        type = programming.value;
    }
    else if (cooking.checked) {
        type = cooking.value;
    }
    let book = new Books(bookName, author, type)
    console.log(book)
    let disp = new Display();
    if (book.name.length > 2 & book.author.length > 2) {
        disp.add(book)
        disp.show("success", " <i class='fa fa-check-circle'></i> Done ")
        disp.clear();
    }
    else {
        disp.clear();
        disp.show("danger", " <i class='fa fa-times-circle'></i>  Enter valid Book name and Author!");
    }

    e.preventDefault();
}
