import type { Book } from "./types";

// Books are displayed in the order they appear in this array.
// Replace placeholder entries with real data when client provides it.

export const books: Book[] = [
  {
    id: "interview-with-ai",
    title: "Interview with AI",
    description:
      "A cross-examination of creativity, responsibility, and artificial intelligence through direct dialogue between author and machine. *Interview with AI* explores modern fears, hopes, and ethical questions surrounding emerging technology and human identity.",
    coverImage: "/interview-with-ai-cover.jpg",
    amazonUrl: "https://www.amazon.com/dp/1971765996",
    publishedDate: "2017-07-01",
    genre: "Nonfiction / Technology / Philosophy",
  },
  {
    id: "dude-44-bravo",
    title: "Dude-44 Bravo (Coming Soon)",
    description:
      "A nonfiction account examining one of the most remarkable rescue operations in modern military history through the lens of sacrifice, aviation, and the ‘no man left behind’ ethos.",
    coverImage: "/dude-44-bravo-cover.png",
    amazonUrl: "",
    publishedDate: "2026-01-01",
    genre: "Nonfiction",
    isUpcoming: true,
  },
  {
    id: "space-cowboy",
    title: "Space Cowboy (Coming Soon)",
    description:
      "After a devastating attack destroys his peaceful domed-city life, Johny Wrongly is pulled into a brutal conflict involving bounty hunters, military conspiracies, and a growing threat that could consume humanity itself.",
    coverImage: null,
    amazonUrl: "",
    publishedDate: "2025-01-01",
    genre: "Military Science Fiction",
    isUpcoming: true,
  },
];
