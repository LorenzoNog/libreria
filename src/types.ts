export interface Root {
  library: Library[];
}

export interface Library {
  book: Book;
}

export interface Book {
  title: string;
  pages: number;
  genre: string;
  cover: string;
  synopsis: string;
  year: number;
  price: number;
  ISBN: string;
  author: {
    name: string;
    otherBooks: string[];
  };
}
