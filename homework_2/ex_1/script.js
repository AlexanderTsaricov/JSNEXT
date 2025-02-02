class Library {
    #books = [];
    get allBooks() {
        return this.#books;
    }
    addBook(title) {
        this.#books.push(title);
    }
    removeBook(title) {
        const temp = [];
        this.#books.forEach((book) => {
            if (book != title) {
                temp.push(book);
            }
        });
        this.#books = temp;
    }
    hasBook(title) {
        let result = false;
        this.#books.forEach((book) => {
            if (book == title) {
                result = true;
            }
        });
        return result;
    }

    constructor(arrBook) {
        if (!(arrBook instanceof Array)) {
            throw new TypeError("arrBook must by array");
        }
        const tempArrBook = [];
        arrBook.forEach((book) => {
            if (tempArrBook.includes(book)) {
                throw new Error("arrBook must not have a dublicate");
            }
            tempArrBook.push(book);
        });
        this.#books = tempArrBook;
    }
}

try {
    const library = new Library(["Cooks", "Brother", "Cooks"]);
} catch (error) {
    console.error(error);
}

try {
    const library = new Library("Cooks");
} catch (error) {
    console.error(error);
}

const library_2 = new Library(["Cooks", "Brother", "Mather of Dragon", "Stalker"]);
console.log(library_2.allBooks);
console.log(library_2.hasBook("Cooks"));
console.log(library_2.hasBook("NotAreBooks"));
library_2.removeBook("Cooks");
library_2.addBook("NewCooks");
console.log(library_2.allBooks);
