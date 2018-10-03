enum Category  {"JavaScript", "CSS", "HTML", "TypeScript", "Angular"}; 

showHello('greeting', 'TypeScript');


function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;   
}

// Task #1.1
function getAllBooks() {
    let books = [
        { title: 'Refactoring JavaScript', author: 'Evan Burchard', available: true, Category: Category.JavaScript},
        { title: 'JavaScript Testing', author: 'Liang Yuxian Eugene', available: false, Category: Category.JavaScript },
        { title: 'CSS Secrets', author: 'Lea Verou', available: true, Category: Category.CSS },
        { title: 'Mastering JavaScript Object-Oriented Programming', author: 'Andrea Chiarelli',
        available: true, Category: Category.JavaScript }
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

// Task #2.3
function getBookTitlesByCategory(category : Category){

    let jsBooks: Array<String> = new Array;

    for (const book of getAllBooks()) {
        
        if (book.Category == category){
            jsBooks.push(book.title);
        }
    }

    return jsBooks;
}

// Task #2.4
function logBookTitles(books: Array<String>): void{

    books.forEach(element => console.log(element));
}

logBookTitles(getBookTitlesByCategory(Category.JavaScript));