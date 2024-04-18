export const fetchAdapter = async (url, method = 'POST', headers = {}, body = null) => {
  return new Promise((resolve, reject) => {
    fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
        ...headers
      },
      body: body ? JSON.stringify(body) : null
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(`Error ${response.status}: ${response.statusText}`);
        }
      })
      .then(data => resolve(data))
      .catch(error => reject(error));
  });
};