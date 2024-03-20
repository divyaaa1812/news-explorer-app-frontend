export const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://api.nx.csproject.org/"
    : "http://localhost:3002";

export const verifyToken = (token) => {
  return fetch(`${baseUrl}/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });
};
