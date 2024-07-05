import { getData } from "./api.js";

const AUTHOR_IMAGE = (id) => `https://covers.openlibrary.org/b/id/${id}-L.jpg`;

export const getAuthor = async (author) => {
  const url = `https://openlibrary.org/search/authors.json?q=${author}`;
  const authorResponse = await getData(url);

  const authorKey = authorResponse.docs[0].key;
  const authorUrl = `https://openlibrary.org/authors/${authorKey}.json`;
  const authorData = await getData(authorUrl);

  return {
    name: authorData.name,
    image: authorData.photos ? AUTHOR_IMAGE(authorData.photos[0]) : null,
    bio: authorData.bio || "",
    url: authorData.links ? authorData.links[0].url : "#",
  };
};
