const formSending = (data, url) => fetch(url, {
  method: 'POST',
  body: data,
});

export default formSending;
