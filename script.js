// Click handler for search button
const captureSearchValue = () => {
  const input = document.getElementById('search-bar').value;
    return input;
};

// Filter books based on search input
   const filterBooks = (searchInput, books) => {
  // Convert the search input to lowercase for case-insensitive matching
  const lowerSearchInput = searchInput.toLowerCase();

  // Flatten the book tags into an array for easy searching
  const flattenedTags = flattenObjectValuesIntoArray(books.map((book) => ({ tags: book.tags })));

  // Filter books based on exact match of search input in tags
  const filteredBooks = books.filter((book) => {
    const lowerTags = book.tags.map((tag) => tag.toLowerCase());
    return lowerTags.includes(lowerSearchInput);
  });

  return filteredBooks;
};
// Empty the book list container, iterate over list of filtered books, return list of books formatted as HTML using the function in `helper.js` 
//const structureBooksAsHtml = () => {
const structureBooksAsHtml = (filteredBooks) => {
  const bookElements = filteredBooks.map((book) => {
    // Create HTML elements for each book
    const bookDiv = document.createElement("div");
    bookDiv.setAttribute("class", "bookDiv");

    const bookTitle = document.createElement("h2");
    bookTitle.innerHTML = book.title;
    bookTitle.setAttribute("class", "bookTitle");

    const bookAuthor = document.createElement("h3");
    bookAuthor.innerHTML = book.author;

    const bookTags = document.createElement("p");
    bookTags.innerHTML = book.tags.join(", ");
    bookDiv.append(bookTitle, bookAuthor, bookTags);
    return bookDiv;
  });

  // Assuming you have a book list container with ID "bookList"
  const bookListContainer = document.querySelector("#bookList");
  bookListContainer.innerHTML = ""; // Empty the container
  bookListContainer.append(...bookElements); // Append the formatted book elements

  // You can also return the bookElements array if needed
  return bookElements;
};

// Handler triggered when a user clickers the "Search" button. Chains previously defined functions together to filter books based on the search value, formats the books as HTML and renders them to the DOM
// Handler triggered when a user clicks the "Search" button

/*const searchBtnClickHandler = (books) => {
  // Step 1: Capture the search value
  const searchInput = captureSearchValue(); // Assuming this function works correctly

  // Step 2: Filter books based on the search input
  const filteredBooks = filterBooks(searchInput, books); // Assuming you have the 'books' array

  // Step 3: Format and render the books as HTML
  structureBooksAsHtml(filteredBooks); // Assuming this function exists and appends to the DOM
};

// Wait for the DOM to be ready
document.addEventListener("DOMContentLoaded", function() {
  // Grab the search button from the DOM (assuming you have an element with ID "searchBtn")
  const searchBtn = document.querySelector("search-btn");
  // Attach an event listener to the search button
  searchBtn.addEventListener("click", searchBtnClickHandler);
});*/
const searchBtnClickHandler = (event) => {
  /*captureSearchValue();
  filterBooks();
  structureBooksAsHtml();*/
  const input = captureSearchValue();
  const filteredBooks = filterBooks(input, books);
  const bookHTML = structureBooksAsHtml(filteredBooks);
};

// Grab search button from the DOM
let searchBtn = document.getElementById("search-btn");
// Attach an event listener to the search button
searchBtn.addEventListener("click", () => {
  searchBtnClickHandler(books);
});

