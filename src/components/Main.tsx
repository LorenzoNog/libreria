"use client";

import React, { useEffect, useMemo, useState } from "react";
import BooksList from "@/components/Books";
import { Book } from "@/types";

const Main = ({
  books,
  genres,
}: {
  books: Book[];
  genres: Book["genre"][];
}) => {
  const [genre, setGenre] = useState<Book["genre"]>("");

  const filterBooks = useMemo(() => {
    if (!genre) return books;
    return genre
      ? books.filter((book) => {
          if (genre && book.genre !== genre) return false;

          return true;
        })
      : books;
  }, [genre]);


  return (
    <main className="w-full flex flex-col justify-center items-center mt-10">
      <div className="mb-5">
        <select
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          className="bg-gray-700 text-white w-[200px] rounded p-2 font-serif"
        >
          <option value="">Todos</option>
          {genres.map((genre) => (
            <option key={genre} value={genre}>
              {genre}
            </option>
          ))}
        </select>
      </div>
      <div className="w-[80%] grid grid-cols-3 gap-[25px]">
        <BooksList books={filterBooks} />
      </div>
    </main>
  );
};

export default Main;
