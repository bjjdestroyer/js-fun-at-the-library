var scifiShelf = [];

function shelfBook(book, shelf) {
  if (shelf.length < 3) {
    return shelf.unshift(book);
  } else {
    return;
  }
}

function unshelfBook(book, shelf) {
  for (var i = 0; i < shelf.length; i++) {
    if (shelf[i].title === book) {
      shelf.splice(1, 1);
    }
  }
  return;
}

function listTitles(shelf) {
  var titles = "";
    for (var i = 0; i < shelf.length; i++) {
      if (i === shelf.length - 1) {
        titles += `${shelf[i].title}`;
      } else {
        titles += `${shelf[i].title}, `;
      }
    }
  return titles;
}

function searchShelf(shelf, title) {
  var isItHere = "";
  for (var i = 0; i < shelf.length; i++) {
    if (shelf[i].title.includes(title)) {
      isItHere = "yes";
    }
  }
    if (isItHere === "yes") {
      return true;
    }else {
      return false;
    }
  }

module.exports = {
  shelfBook: shelfBook,
  unshelfBook: unshelfBook,
  listTitles: listTitles,
  searchShelf: searchShelf
};
