showHello('greeting', 'TypeScript');


function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;   
}

// Task #1.1
function getAllBooks() {
    let books = [
        { title: 'Refactoring JavaScript', author: 'Evan Burchard', available: true},
        { title: 'JavaScript Testing', author: 'Liang Yuxian Eugene', available: false },
        { title: 'CSS Secrets', author: 'Lea Verou', available: true },
        { title: 'Mastering JavaScript Object-Oriented Programming', author: 'Andrea Chiarelli',
        available: true }
    ]

    return books;
}

// Task #1.2
function logFirstAvailable(books: { title: string, author: string, available: boolean }[]) : void {
    
    console.log('Length of books : '+books.length);
    
    for (const book of books) {
        if (book!=null){
            console.log('Title of first book : '+book.title);
            break;
        }
    }
}
// Task #1.3
logFirstAvailable(getAllBooks());