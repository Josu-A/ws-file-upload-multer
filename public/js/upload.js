const uploadForm = document.getElementById('uploadForm');

uploadForm.addEventListener('submit', event => {
    event.preventDefault();
    
    const formData = new FormData(uploadForm);

    fetch('/profile', {
        "method" : "POST",
        "body" : formData
    })
    .then(response => response.json())
    .then(data => {
        console.log(data.response);
    })
    .catch(error => {
        console.error('Errorea fitxategia igotzean: ', error);
    })
});
