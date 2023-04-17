const formSending = (data, url) => {
    return fetch(url, {
        method: 'POST',
        body: data,
    });
}

export default formSending;