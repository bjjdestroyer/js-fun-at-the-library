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

function addBook(newLibrary, book) {
  if (book.genre === "fantasy") {
    return newLibrary.shelves.fantasy.push(book);
  } else if (book.genre === "fiction") {
    return newLibrary.shelves.fiction.push(book);
  } else {
    return newLibrary.shelves.nonFiction.push(book);
  }
}

function checkoutBook(newLibrary, bookName) {
  var isItHere = "";
  for (var i = 0; i <newLibrary.shelves.fantasy.length; i++) {
    if (newLibrary.shelves.fantasy[i].title.includes(bookName)) {
      newLibrary.shelves.fantasy.splice(i, 1);
      isItHere += "yes";
    }
  }
  for (var i = 0; i <newLibrary.shelves.fiction.length; i++) {
    if (newLibrary.shelves.fiction[i].title.includes(bookName)) {
      newLibrary.shelves.fiction.splice(i, 1);
      isItHere += "yes";
    }
  }
  for (var i = 0; i <newLibrary.shelves.nonFiction.length; i++) {
    if (newLibrary.shelves.nonFiction[i].title.includes(bookName)) {
      newLibrary.shelves.nonFiction.splice(i, 1);
      isItHere += "yes";
    }
  }
  if (isItHere === "yes") {
    return `You have now checked out ${bookName} from the ${newLibrary.name}`;
  } else {
    return `Sorry, there are currently no copies of ${bookName} available at the ${newLibrary.name}`;
  }
}

module.exports = {
  createLibrary: createLibrary,
  addBook: addBook,
  checkoutBook: checkoutBook
};
