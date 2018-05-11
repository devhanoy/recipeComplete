export function jsonPost(url, data) {
  const token = localStorage.getItem("token");
  const options = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(data)
  };
  const request = new Request(url, options);

  return fetch(request).then(res => res.json());
}

export function get(url) {
  const token = localStorage.getItem("token");
  return fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }).then(response => response.json());
}

export function del(url) {
  const token = localStorage.getItem("token");
  return fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
      method: "DELETE"
    }
  }).then(response => response.json());
}
