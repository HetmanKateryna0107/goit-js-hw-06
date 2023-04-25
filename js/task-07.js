const input = document.querySelector("#font-size-control");
const span = document.querySelector("#text")

input.addEventListener("input", (event) => {
  const size =input.value;
  span.style.fontSize=`${size}px`
  
  })







