
/* global alert */

document.addEventListener('DOMContentLoaded', () => {
  // card options
  const cardArray = [
    {
      name: 'ape',
      img: 'images/ape.jpg'
    },
    {
      name: 'ape',
      img: 'images/ape.jpg'
    },
    {
      name: 'fish',
      img: 'images/fish.png'
    },
    {
      name: 'fish',
      img: 'images/fish.png'
    },
    {
      name: 'fish02',
      img: 'images/fish02.png'
    },
    {
      name: 'fish02',
      img: 'images/fish02.png'
    },
    {
      name: 'fish03',
      img: 'images/fish03.jpg'
    },
    {
      name: 'fish03',
      img: 'images/fish03.jpg'
    },
    {
      name: 'goku_junior',
      img: 'images/goku_junior.gif'
    },
    {
      name: 'goku_junior',
      img: 'images/goku_junior.gif'
    },
    {
      name: 'screenlick',
      img: 'images/screenlick.gif'
    },
    {
      name: 'screenlick',
      img: 'images/screenlick.gif'
    },
    {
      name: 'cat_toilet',
      img: 'images/cat_toilet.gif'
    },
    {
      name: 'cat_toilet',
      img: 'images/cat_toilet.gif'
    },
    {
      name: 'dont_poke',
      img: 'images/dont_poke.gif'
    },
    {
      name: 'dont_poke',
      img: 'images/dont_poke.gif'
    }
  ]

  cardArray.sort(() => 0.5 - Math.random())

  const grid = document.querySelector('.grid')
  const resultDisplay = document.querySelector('#result')
  var cardsChosen = []
  var cardsChosenId = []
  var cardsWon = []

  // create board
  function createBoard () {
    for (let i = 0; i < cardArray.length; i++) {
      var card = document.createElement('img')
      card.setAttribute('src', 'images/blueish.jpg')
      card.setAttribute('data-id', i)
      card.addEventListener('click', flipcard)
      grid.appendChild(card)
      resultDisplay.textContent = cardsWon.length
    }
  }

  // check vor matches
  function checkForMatch () {
    var cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    if (cardsChosen[0] === cardsChosen[1]) {
      alert('You found a match')
      cards[optionOneId].setAttribute('src', 'images/white.jpg')
      cards[optionTwoId].setAttribute('src', 'images/white.jpg')

      cardsWon.push(cardsChosen)

      cards[optionOneId].removeEventListener('click', flipcard)
      cards[optionTwoId].removeEventListener('click', flipcard)
    } else {
      cards[optionOneId].setAttribute('src', 'images/blueish.jpg')
      cards[optionTwoId].setAttribute('src', 'images/blueish.jpg')

      cards[optionOneId].addEventListener('click', flipcard)
      cards[optionTwoId].addEventListener('click', flipcard)

      alert('Sorry, try again')
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if (cardsWon.length === cardArray.length / 2) {
      resultDisplay.textContent = 'Congratulations! You found them all!'
      cardsChosen = []
      cardsChosenId = []
      cardsWon = []
    }
  }

  // flip cards
  function flipcard () {
    var cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    this.removeEventListener('click', flipcard)
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500)
    }
  }

  createBoard()
})
