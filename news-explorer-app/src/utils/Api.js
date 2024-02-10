export const baseUrl = "https://newsapi.org/v2";

// export const checkResponse = (res) => {
//   if (res.ok) {
//     return res.json();
//   } else {
//     return Promise.reject(`Error: ${res.status}`);
//   }
// };

export function request(url, options) {
  return fetch(url, options).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Error: ${res.status}`);
    }
  });
}

export function getSearchResults(searchKeyword) {
  return request(
    `${baseUrl}/everything?q=${searchKeyword}&apiKey=6cb3462c2b104837b32eef6da1aa7b60`,
    {
      method: "GET",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}
