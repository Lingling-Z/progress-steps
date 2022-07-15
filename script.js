const progress = document.querySelector('.progress')
const prev = document.querySelector('.prev')
const next = document.querySelector('.next')
const circles = document.querySelectorAll('.circle')

let currentActive = 1

next.addEventListener('click', () => {
  currentActive++
  if (currentActive > circles.length) {
    currentActive = circles.length
  }
  updateDOM()
})
prev.addEventListener('click', () => {
  currentActive--
  if (currentActive < 1) {
    currentActive = 1
  }
  updateDOM()
})

const updateDOM = () => {
  //toggle 'active' class to update border color for circles
  circles.forEach((circle, index) => {
    if (index < currentActive) {
      circle.classList.add('active')
    } else {
      circle.classList.remove('active')
    }
  })

  //update progress bar color
  const actives = document.querySelectorAll('.active')
  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + '%'
  console.log(progress.style.width)

  //grey out buttons
  if (currentActive === circles.length) {
    next.disabled = true
  } else if (currentActive === 1) {
    prev.disabled = true
  } else {
    prev.disabled = false
    next.disabled = false
  }
}
