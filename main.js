function formSubmit() {
  $('form').submit((e) => {
    e.preventDefault();
    $('section').html(``);
    getDogPics();
  });
}
function resultsHTML(message) {
  return `<img class="containerImage"src='` + message + `'>`;
}
function displayResults(responseJSON) {
  console.log(responseJSON);
  responseJSON.message.forEach((message) => {
    $('section').append(resultsHTML(message));
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
