const decrementButton = document.querySelector('[data-action="decrement"]')
const incrementButton = document.querySelector('[ data-action="increment"]')
const counterValue= document.querySelector('#value')

let counterValueStart  = 0

decrementButton.addEventListener("click", (e) => {
    counterValueStart-=1
   counterValue.textContent = counterValueStart
  });
  incrementButton.addEventListener("click", (e) => {
    counterValueStart+=1
   counterValue.textContent = counterValueStart
  });
