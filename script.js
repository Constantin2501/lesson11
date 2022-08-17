const btn = document.querySelector('#btn')
const range = document.querySelector('#range')
const span = document.querySelector('#range-span')
const eBtn = document.querySelector('#e_btn')
const circle = document.querySelector('#circle')
const square = document.querySelector('#square')


eBtn.style = 'display: none'
span.textContent = 50 + '%'


const rangeLogger = function (event) {
  span.textContent = event.target.value + '%'
  circle.style.height = `${range.value}px`
}

const logger = function (event) {
  square.style.background = `${text.value}`
}


btn.addEventListener('click', logger)
range.addEventListener('input', rangeLogger)











