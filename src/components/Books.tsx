import React, { useEffect, useState } from "react";
import { Book } from "@/types";

interface BookListProps {
  books: Book[];
}

const BooksList = ({ books }: BookListProps) => {
  const [readList, setReadList] = useState<Book["ISBN"][]>([]);

  const onReadListChange = (callback: (readlist: Book["ISBN"][]) => void) => {
    function getReadList() {
      const readList = JSON.parse(
        localStorage.getItem("readList") ?? "[]"
      ) as Book["ISBN"][];
      callback(readList);
    }

    window.addEventListener("storage", getReadList);

    getReadList();

    return () => window.removeEventListener("storage", getReadList);
  };

  const handleBookClick = (book: Book["ISBN"]) => {
    const draft = readList.includes(book)
      ? readList.filter((readbook) => readbook !== book)
      : [...readList, book];
    setReadList(draft);
    localStorage.setItem("readList", JSON.stringify(draft));
  };

  useEffect(() => {
    const unsuscribe = onReadListChange(setReadList);
    return () => unsuscribe();
  }, []);

  return books.map((book) => (
    <div
      key={book.title}
      className="flex flex-col justify-center items-center hover:shadow-xl p-2  font-medium"
      onClick={() => handleBookClick(book.ISBN)}
    >
      <div className="w-[200px] h-[300px] mb-[20px]">
        <img className="mb-3 shadow-md w-fit h-fit" src={book.cover} />
      </div>
      <h2 className="font-bold text-left w-[50%] mb-3">
        {book.title}
        {readList.includes(book.ISBN) && <small className="">⭐</small>}
        <div className="flex flex-col items-start justify-start gap-2 mt-1">
          <small className="font-bold text-gray-500 text-start">{book.author.name}</small>
          <small className="text-black font-bold text-[20px] text-start">$ {book.price}</small>
        </div>
      </h2>
    </div>
  ));
};

export default BooksList;
