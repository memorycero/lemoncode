
function isBookRead(books : Book[], titleToSearch: string): boolean {
    const result : Book[] = books.filter(book => book.getTitle() === titleToSearch);
    return result.length === 0 ? false : result.pop().isRead();
  }
  
  class Book {
  
    title: string;
    read: boolean;
  
    constructor(title: string, read: boolean) {
      this.title = title;
      this.read = read;
    }
  
    getTitle() {
      return this.title;
    }
  
    isRead() {
      return this.read;
    }
  }
  
  let books : Book[] = [
    new Book("Harry Potter y la piedra filosofal", true),
    new Book("Canción de hielo y fuego", false),
    new Book("Devastación", true),
  ];
  
  console.log(isBookRead(books, "Devastación")); // true
  console.log(isBookRead(books, "Canción de hielo y fuego")); // false
  console.log(isBookRead(books, "Los Pilares de la Tierra")); // false