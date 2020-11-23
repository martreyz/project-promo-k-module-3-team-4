function sendRequest(data) {
  return fetch(
    'https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/',
    {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'content-type': 'application/json',
      },
    }
  ).then(function (resp) {
    return resp.json();
  });
  // .then(function (result) {
  //   showURL(result);
  // });
}

export { sendRequest };
