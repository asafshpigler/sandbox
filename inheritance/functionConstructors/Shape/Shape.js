import getStyle from './getStyle.js'

const defaultAttrs = {
  tabIndex: '0',
}

function Shape({ el, style: customStyle }) {
  if (el) {
    this.el = el
  }
  else {
    const newEl = document.createElement('div')
    const style = getStyle(customStyle)
    
    for (const attr in style) {
      if (style.hasOwnProperty(attr)) {
        newEl.style[attr] = style[attr]
      }
    }

    this.el = newEl
  }

  for (const attr in defaultAttrs) {
    if (defaultAttrs.hasOwnProperty(attr)) {
      this.el.setAttribute(attr, defaultAttrs[attr])
    }
  }

  const onShapeFocus = () => {
    const { children: bodyChildren } = document.body
    for (let index = 0; index < bodyChildren.length; index++) {
      const bodyChild = bodyChildren[index]
      bodyChild.style.border = ''
    }
    this.el.style.border = '5px solid black'
    Shape.currShape = this
  }

  this.el.addEventListener('focus', onShapeFocus)
  document.body.appendChild(this.el)
}

Shape.prototype.frameRate = 0.06
Shape.prototype.animate = function animate(property, startValue, endValue, time) {
  if (this.isAnimated) return
  this.isAnimated = true

  let frame = 0
  const delta = (endValue - startValue) / time / this.frameRate

  const interval = setInterval(() => {
    frame++
    let value = startValue + delta * frame
    this.el.style[property] = value + 'px'

    if (value == endValue) {
      this.isAnimated = false
      clearInterval(interval)
    }
  }, 1 / this.frameRate)
}

Shape.copy = function copy() {
  Shape.copiedShape = Shape.currShape
}

Shape.paste = function paste() {
  const { copiedShape } = Shape
  if (!copiedShape) return

  const copiedShapeClone = copiedShape.el.cloneNode(true)
  copiedShapeClone.style.top = (parseInt(copiedShapeClone.style.top) + 24) + 'px'
  copiedShapeClone.style.left = (parseInt(copiedShapeClone.style.left) + 24) + 'px'
  new Shape({ el: copiedShapeClone })
}

export default Shape