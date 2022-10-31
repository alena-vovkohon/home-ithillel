let headSection = document.querySelector('.head__section')
let inputCreate = document.querySelector('.create')
let informationDiv = document.querySelector('.information')
let background = document.querySelector('img')

///Завдання №20

// При фокусі на input додаємо клас до div.
inputCreate.addEventListener('focus', () => {
  informationDiv.classList.add('active')
  })
// При втраті фокусі з input видаляємо клас у div.
inputCreate.addEventListener('blur', () => {
    informationDiv.classList.remove('active')
})

// цей варіант з mouseover. при наведені на елемент в стилях 
// змінюємо display

headSection.addEventListener('mouseover',
  function focusIn(e) {
    let event = e.target.closest('.create');
    if(event) {
        informationDiv.style.display = "block";
    } else {
        informationDiv.style.display = "none";
    }
})

headSection.addEventListener('mouseover',
  function focusIn(e) {
    let event = e.target.closest('.create');
    if (event) {
      informationDiv.classList.add('active')
    } else {
      informationDiv.classList.remove('active')
    }
  })

/////Завдання №22
function randomImg() {
  let minNumber = 1;
  let maxNumber = 9;
  let numberRandom = Math.round(Math.random() * (maxNumber - minNumber)+minNumber)
  background.removeAttribute('src')
  // document.body.style.backgroundImage = `" url('image/${numberRandom}.jpeg')"`
  background.setAttribute('src', `image/${numberRandom}.jpeg`)
}
randomImg()

