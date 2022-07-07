console.log("this is a javascript file");

function Book(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
}

function Display() { 

}

Display.prototype.add = function (book) {
    console.log('adding to UI');
   
    
    tablebody = document.getElementById('tablebody');
    let Uistring = ` <tr>
                  
                    <td>${book.name}</td>
                    <td>${book.author}</td>
                    <td>${book.type}</td>
                    </tr> `;
    tablebody.innerHTML += Uistring; 
    
}
Display.prototype.clear = function () {
    let libraryform = document.getElementById('libraryform');
    libraryform.reset();
}
Display.prototype.validate =function (book) {
    if(book.name.length<2||book.author.length<3){
        return false;
    }else{
        return true;
    }
}

let libraryform = document.getElementById('btn');

libraryform.addEventListener('click', libraryformsubmit);
function libraryformsubmit(e) {


    let name = document.getElementById('bookName').value;
    let author = document.getElementById('Author').value;

    let fiction = document.getElementById('Fiction');
    let programming = document.getElementById('programming');
    let cooking = document.getElementById('cooking');
    let type;

    if (fiction.checked) {
        type = fiction.value;
    }
    else if (programming.checked) {
        type = programming.value;

    } else if (cooking.checked) {
        type = cooking.value;
    }
    let book = new Book(name, author, type)
    
    
    // localStorage.setItem("book", JSON.stringify(book))
    // let jsonscript = localStorage.getItem("book");
    // let retrieveObject = JSON.parse(jsonscript);
    
    
    let display = new Display();
    if(display.validate(book)){
        display.add(book);
        display.clear();
    }else {
        console.log("error is coming");
    }
    e.preventDefault();

}


