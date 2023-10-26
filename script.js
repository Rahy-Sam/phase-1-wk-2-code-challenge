//Use fetch to make a request and retrieve data from the server
fetch("https://my-json-server.typicode.com/Rahy-Sam/phase-1-wk-2-code-challenge/characters")
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

    // This function enables the votes to add from the current input
    // let characterVotes= document.getElementById('vote-count')
    // characterVotes.textContent = candidate.votes;
    // let currentVote= parseInt(characterVotes.textContent, 10)
    // let votesForm= document.getElementById('votes-input')
    // let votes = document.getElementById('votes-box')

    // //Submit event for the votes
    // votesForm.addEventListener('submit',(event)=>{
    //   event.preventDefault()
    //   // stops reset to default
    //   let newVote = parseInt(votes.value, 10)
    //   currentVote= currentVote + newVote
    //   characterVotes.textContent= currentVote
    // })

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

    let votesValue = document.getElementById('votes-input').value
    let charVotes = document.getElementById('character-votes').innerText 
    charVotes = votesValue;
console.log(charVotes)
    // clear input value after saving votes value in details
    document.getElementById('votes-input').value = ''
  })
}

addVotes()