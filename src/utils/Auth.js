export const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://api.nx.csproject.org/"
    : "http://localhost:3002";

export const registerUser = ({ username, email, password }) => {
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

export const addCardBookmark = ({
  description,
  title,
  key,
  publishedAt,
  source,
  url,
  urlToImage,
}) => {
  const token = localStorage.getItem("jwt");
  return fetch(`${baseUrl}/articles`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      description,
      title,
      key,
      publishedAt,
      source,
      url,
      urlToImage,
    }),
  }).then((res) => res.json());
};

export const removeCardBookmark = (item) => {
  const token = localStorage.getItem("jwt");
  return fetch(`${baseUrl}/articles/${item.key}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
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

export const getSavedArticles = () => {
  const token = localStorage.getItem("jwt");
  return fetch(`${baseUrl}/articles`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  }).then((res) => res.json());
};
