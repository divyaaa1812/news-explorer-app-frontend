const currentDate = new Date().toLocaleString("default", {
  month: "long",
  day: "numeric",
});

export async function request(url, options) {
  const res = await fetch(url, options);
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(`Error: ${res.status}`);
  }
}

export function getSearchResults(searchKeyword) {
  return request(
    `https://newsapi.org/v2/everything?q=${searchKeyword}&from=${
      currentDate - 7
    }&to=${currentDate}&apiKey=6cb3462c2b104837b32eef6da1aa7b60`,
    {
      method: "GET",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}

export const addCardBookmark = (item, key) => {
  console.log("ready to save news" + item);
  return fetch(`http://localhost:3001/articles`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),
  }).then((res) => res.json());
};

export const removeCardBookmark = (item) => {
  console.log("ready to delete saved news" + item);
  return fetch(`http://localhost:3001/articles/${item}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
};
