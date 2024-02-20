
export const api = "https://equilibrio-oriental-prj-9ff365050a0b.herokuapp.com/api";

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
