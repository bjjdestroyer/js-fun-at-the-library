var scifiShelf = [];

function shelfBook(book, shelf) {
  if (shelf.length < 3) {
    return shelf.unshift(book);
  } else {
    return;
  }
}

function unshelfBook(book, shelf) {
  return shelf.splice(1, 1);
}

function listTitles(shelf) {
  var titles = `${shelf[0].title}, ${shelf[1].title}, ${shelf[2].title}`;
  return titles;
}

function searchShelf(shelf, title) {
  var duneBook = shelf[0].title;
  var hyperionBook = shelf[1].title
  if (duneBook === title || hyperionBook === title) {
    return true;
  } else {
    return false;
  }
}

module.exports = {
  shelfBook: shelfBook,
  unshelfBook: unshelfBook,
  listTitles: listTitles,
  searchShelf: searchShelf
};
