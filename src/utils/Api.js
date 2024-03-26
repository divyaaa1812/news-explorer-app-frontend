const currentDate = new Date();
const pastDate = new Date();
pastDate.setDate(currentDate.getDate() - 7);

const formatDate = (date) => {
  return date.toISOString().split("T")[0]; // Format date to 'YYYY-MM-DD'
};

export function getSearchResults(searchKeyword) {
  return fetch(
    `https://nomoreparties.co/news/v2/everything?q=${searchKeyword}&from=${formatDate(
      pastDate
    )}&to=${formatDate(
      currentDate
    )}&sortBy=publishedAt&language=en&apiKey=6cb3462c2b104837b32eef6da1aa7b60`
  ).then((res) => res.json());
}
