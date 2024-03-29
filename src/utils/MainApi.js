export const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://api.nx.csproject.org"
    : "http://localhost:3002";

export const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(`Error: ${res.status}`);
  }
};

export function request(url, options) {
  return fetch(url, options).then(checkResponse);
}

export const registerUser = ({ username, email, password }) => {
  return request(`${baseUrl}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, email, password }),
  });
};

export const loginUser = ({ email, password }) => {
  const token = localStorage.getItem("jwt");
  return request(`${baseUrl}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });
};

export const getSavedArticles = () => {
  const token = localStorage.getItem("jwt");
  return request(`${baseUrl}/articles`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });
};

export const addCardBookmark = ({
  description,
  title,
  key,
  publishedAt,
  source,
  url,
  urlToImage,
  category,
}) => {
  const token = localStorage.getItem("jwt");
  return request(`${baseUrl}/articles`, {
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
      category,
    }),
  });
};

export const removeCardBookmark = (item) => {
  const token = localStorage.getItem("jwt");
  return request(`${baseUrl}/articles/${item.key}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });
};
