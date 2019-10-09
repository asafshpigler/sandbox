import { Shape, Circle } from './functionConstructors/index.js'

new Circle({ style: { size: '100px', top: '200px' } })
new Shape({ style: { size: '60px', top: '100px' } })
new Shape({ style: { size: '10px', top: '300px' } })
new Shape({ style: { size: '150px', top: '500px', left: '500px', borderRadius: '50% 0', background: 'linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)' } })

// function rotate(isClockwise) {
  // const { currShape } = Shape
  // const startValue = 'rotate(0)'
  // const endValue = 'rotate()'
  // currShape.animate('transform', startValue, endValue, 100)
// }

function move(direction, multiplier) {
  const { currShape } = Shape
  const startValue = parseInt(currShape.el.style[direction])
  const endValue = startValue + 100 * multiplier
  currShape.animate(direction, startValue, endValue, 100)
}

const ctrlComboFuncs = {
  c: Shape.copy,
  v: Shape.paste,
}

const keyToMovementFuncs = {
  ArrowUp: move.bind(null, 'top', -1),
  ArrowRight: move.bind(null, 'left', 1),
  ArrowDown: move.bind(null, 'top', 1),
  ArrowLeft: move.bind(null, 'left', -1),
}

function handleKeyDown(e) {
  if (e.metaKey || e.ctrlKey && e.key) {
    const ctrlComboFunc = ctrlComboFuncs[e.key]
    if (typeof ctrlComboFunc === 'function') ctrlComboFunc()
  }

  const movementFunc = keyToMovementFuncs[e.key]
  if (typeof movementFunc === 'function') movementFunc()
}

document.body.addEventListener('keydown', handleKeyDown)