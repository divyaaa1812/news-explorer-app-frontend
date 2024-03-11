export const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://api.nx.csproject.org/"
    : "http://localhost:3002";

export const registerUser = ({ username, email, password }) => {
  console.log(username);
  return fetch(`${baseUrl}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, email, password }),
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

export const verifyToken = (token) => {
  return fetch(`${baseUrl}/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });
};
