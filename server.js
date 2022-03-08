function Books(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
}
function Display() {

}
Display.prototype.clear = function ()
{
    let formReset=document.getElementById('libraryForm')
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
        disp.add(book)
        disp.clear();
    e.preventDefault();
}