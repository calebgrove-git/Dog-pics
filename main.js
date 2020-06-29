function formSubmit() {
  $('form').submit((e) => {
    e.preventDefault();
    $('section').html(``);
    getDogPics();
  });
}

function displayResults(responseJSON) {
  responseJSON.message.forEach((message) => {
    $('section').append(`<img class="containerImage"src='` + message + `'>`);
    console.log(message);
  });
}

function getDogPics() {
  const i = $('input#quantity').val();
  fetch('https://dog.ceo/api/breeds/image/random/' + i + '')
    .then((response) => response.json())
    .then((responseJSON) => displayResults(responseJSON))
    .catch((error) => console.log('Something went wrong'));
}
$(formSubmit);
