import React from "react";
import { type Book } from "@/types";
import Main from "@/components/Main";

const Page = async () => {
  const books: Book[] = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        import("@/books.json").then((data) =>
          data.library.map((data) => data.book)
        )
      );
    }, 3000);
  });

  const genres: Book["genre"][] = Array.from(
    new Set(books.map((book) => book.genre))
  );
  return <Main books={books} genres={genres} />;
};

export default Page;
