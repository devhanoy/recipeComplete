
export function jsonPost (url, data) {
  const options = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }
  const request = new Request(url, options)

  return fetch(request)
    .then(res => res.json())
}
