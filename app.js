const grid = document.querySelector('.grid')
const result = document.querySelector('#result')
const images = [
    {name:'cheeseburger',
     img:'images/cheeseburger.png'
    },
    {name:'fries',
     img:'images/fries.png'
    },
    {name:'hotdog',
     img:'images/hotdog.png'
    },
    {name:'ice-cream',
     img:'images/ice-cream.png'
    },
    {name:'milkshake',
     img:'images/milkshake.png'
    },
    {name:'pizza',
     img:'images/pizza.png'
    },
    {name:'cheeseburger',
     img:'images/cheeseburger.png'
    },
    {name:'fries',
     img:'images/fries.png'
    },
    {name:'hotdog',
     img:'images/hotdog.png'
    },
    {name:'ice-cream',
     img:'images/ice-cream.png'
    },
    {name:'milkshake',
     img:'images/milkshake.png'
    },
    {name:'pizza',
     img:'images/pizza.png'
    }
]
let cardChosenId = []
let nameCardChosen= []
let cardWon = []

images.sort(()=>0.5-Math.random())
const createBoard = () => {
    for(let i=0; i< images.length; i++){
        const card = document.createElement('img')
        card.src= 'images/blank.png'
        card.id = i
        card.addEventListener('click',flipCard)
        grid.append(card)
    }
}

function flipCard(){
    const cardId=this.id
    cardChosenId.push(cardId)
    nameCardChosen.push(images[cardId].name)
    this.src = images[cardId].img
    if(cardChosenId.length===2){
        setTimeout(checkForMatch,'600')
    }
}

function checkForMatch() {
    const imgChosen = document.querySelectorAll(`img[id='${cardChosenId[0]}'],img[id='${cardChosenId[1]}']`)
    if(nameCardChosen[0]===nameCardChosen[1]){
        for (img of imgChosen){
            img.src= 'images/white.png'
            img.removeEventListener('click',flipCard)
        }
        cardWon.push(nameCardChosen[0])
    }else{
        for (img of imgChosen){
            img.src= 'images/blank.png'
        }
    }
    cardChosenId = []
    nameCardChosen = []
    result.innerText=cardWon.length
    if(cardWon.length == images.length/2){
        result.innerText=  'Congratulations! You found them all!'
    }
}
createBoard()
