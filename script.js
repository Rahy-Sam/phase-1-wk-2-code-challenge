//Use fetch to make a request and retrieve data from the server
fetch("http://localhost:3000/characters")
  .then((resp) => resp.json())
  .then((characters) => {
    console.log(characters);

    displayCharacterNames(characters)
  });

// This function creates a list items element, adds an event listener to the list item and to a button
function displayCharacterNames(characters) {
  characters.forEach((character, index) => {
    const ul = document.getElementById('character-list')

    const liElement = document.createElement('li')

    liElement.innerHTML = `<a href="#">${character.name}</a>`

    liElement.addEventListener('click', () => {
      document.getElementById('character-name').textContent = character.name
      document.getElementById('character-votes').textContent = character.votes
      document.getElementById('character-image').src = character.image
    })

    ul.appendChild(liElement)

    // reset votes
    document.getElementById('btnResetVotes').addEventListener('click', () => {
      document.getElementById('character-votes').textContent = 0;
    })
  })
}
// This function sets up an event listener for a form 
function addVotes() {
  document.getElementById('form-votes').addEventListener('submit', (event) => {
    event.preventDefault();

    votesValue = document.getElementById('votes-input').value
    document.getElementById('character-votes').textContent = votesValue

    // clear input value after saving votes value in details
    document.getElementById('votes-input').value = ''
  })
}

addVotes()