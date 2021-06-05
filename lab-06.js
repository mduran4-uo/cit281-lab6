class Book {
    constructor(title, author, pubDate, isbn) {
      this.title = title;
      this.author = author;
      this.pubDate = pubDate;
      this.isbn = isbn;
    }
  }

  let someBook = new Book(title="AP Calc", pubDate="2013", author="Banu");
  let someOtherBook = new Book(title="AP Computer Science", pubDate="2020", author="Reza");

class Library {
    constructor(name) {
      this._name = name;
      this._books = [];
    }
    get books() {
      // Return copy of books
      return JSON.parse(JSON.stringify(this._books));
    }
    get count() {
      return this._books.length;
    }
    addBook(book = {}) {
      const { title = "", author = "", pubDate = "", isbn= "" } = book;
      if (title.length > 0 && author.length > 0) {
        const newBook = { title, author, pubDate, isbn};
        this._books.push(newBook);
      }
    }
    listBooks() {
      for (const book of this._books) {
        const {title, author, pubDate, isbn} = book;
        console.log(`Title: ${title}, Author: ${author}, PubDate: ${pubDate}`)
      }
    }
    deleteBook(isbn){
      // find the book to remove
      let index = 0;
      let indexToSplice = null;
      for(const book of this._books){
        if (isbn === book.isbn){
          //found book!
          indexToSplice = index;
          break;
        }
        index += 1;
      }
      this._books.splice(indexToSplice);
    }

  }
  const atomicHabits = new Book(
    "Atomic Habits", 
    "James Clear", 
    "10/16/2018",
    "1234567890");
  
  const book2 = new Book(
    "The joy of programming", 
    "unknown", 
    "2020", 
    "0987654321");
  
  const uoLibrary = Library(
    "Knight");
  
  uoLibrary.addBook(atomicHabits);
  uoLibrary.addBook(book2);

  uoLibrary.listBooks();
  uoLibrary.deleteBook("0987654321");
  console.log("DELETED A BOOK! All books now in library are:");
  uoLibrary.listBooks();