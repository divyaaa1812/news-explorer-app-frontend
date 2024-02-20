const baseUrl = "http://localhost:3001";

export const registerUser = ({ email, password, username }) => {
  return fetch(`${baseUrl}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password, username }),
  }).then((res) => res.json());
};

export const loginUser = ({ email, password }) => {
  return fetch(`${baseUrl}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  }).then((res) => res.json());
};

export const addCardBookmark = (item, key) => {
  console.log("ready to save news" + item);
  return fetch(`${baseUrl}/articles`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),
  }).then((res) => res.json());
};

export const removeCardBookmark = (item) => {
  console.log("ready to delete saved news" + item);
  return fetch(`${baseUrl}/articles/${item}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
};
