import React, { useState } from "react";

function Books() {
  const booksOriginal = [
    "The Great Gatsby",
    "War and Peace",
    "Hamlet",
    "Moby Dick",
    "Return Of The King",
    "The Hobbit",
  ];

  const [books, setBooks] = useState(booksOriginal);

  function sortBooks(callBackFn) {
    setBooks([...booksOriginal].sort(callBackFn));
  }

  function filterBooks(callBackFn) {
    setBooks(booksOriginal.filter(callBackFn));
  }

  return (
    <div>
      <button onClick={() => sortBooks((a, b) => a.localeCompare(b))}>
        Sort by AZ
      </button>
      <button onClick={() => sortBooks((a, b) => b.localeCompare(a))}>
        Sort by ZA
      </button>
      <button onClick={() => sortBooks((a, b) => a.length - b.length)}>
        Sort by string length
      </button>
      <button onClick={() => sortBooks((a, b) => a[1].localeCompare(b[1]))}>
        Sort by second character
      </button>
      <button
        onClick={() =>
          sortBooks((a, b) => a.split(" ").length - b.split(" ").length)
        }
      >
        Sort by amount of words
      </button>
      <button
        onClick={() =>
          sortBooks((a, b) => a.slice(-2, -1).localeCompare(b.slice(-2, -1)))
        }
      >
        Sort by second to last letter
      </button>
      <br />
      <br />
      <button onClick={() => filterBooks((item) => item.startsWith("The"))}>
        Starts with "The"
      </button>
      <button onClick={() => filterBooks((item) => item.includes("and"))}>
        Includes "and"
      </button>
      <button onClick={() => filterBooks((item) => item.length > 10)}>
        More than 10 letters
      </button>
      <button onClick={() => filterBooks((item) => item.length < 7)}>
        Less than 7 letters
      </button>
      <button onClick={() => filterBooks((item) => item.split(" ").length > 2)}>
        More than 2 words
      </button>
      <button onClick={() => filterBooks((item) => item.slice(-2, -1) === "c")}>
        Second to last letter "c"
      </button>

      {books.map((i) => (
        <div key={i}>{i}</div>
      ))}
      <button onClick={() => setBooks(booksOriginal)}>Reset to original</button>
    </div>
  );
}

export default Books;
