function createLibrary(library) {
  var newLibrary = {
    name: library,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: []},
  };
  return newLibrary;
}

class Librarian {
  constructor(name, library) {
    this.name = name;
    this.library = library;
  }
  greetPatron(patronName, morning) {
    if (morning === true){
      return `Good morning, ${patronName}!`;
    }else if (morning === undefined || morning === false) {
        return (`Hello, ${patronName}!`);
    }
  }
  findBook(book) {
    var isItHere = "";
    for (var i = 0; i <this.library.shelves.fantasy.length; i++) {
      if (this.library.shelves.fantasy[i].title.includes(book)) {
        this.library.shelves.fantasy.splice(i, 1);
        isItHere += "yes";
      }
    }
    for (var i = 0; i <this.library.shelves.fiction.length; i++) {
      if (this.library.shelves.fiction[i].title.includes(book)) {
        this.library.shelves.fiction.splice(i, 1);
        isItHere += "yes";
      }
    }
    for (var i = 0; i <this.library.shelves.nonFiction.length; i++) {
      if (this.library.shelves.nonFiction[i].title.includes(book)) {
        this.library.shelves.nonFiction.splice(i, 1);
        isItHere += "yes";
      }
    }
    if (isItHere === "yes") {
      return `Yes, we have ${book}`;
    } else {
      return `Sorry, we do not have ${book}`;
    }
  }
  calculateLateFee(days) {
    return Math.ceil(days * .25);
  }
}

module.exports = Librarian;
