const path = process.env.REACT_APP_API_URL;
const back = "/api";

export const api = path + back;

export const requestConfig = (method, data, token = null) => {
  let config;

  if (data === null) {
    config = {
      method,
      headers: {},
    };
  } else {
    config = {
      method,
      body: JSON.stringify(data),
      headers: {
        "content-Type": "application/json",
      },
    };
  }

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
};
