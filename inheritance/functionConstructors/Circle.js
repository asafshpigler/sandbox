import Shape from './Shape/Shape.js'

function Circle({ style }) {
  const localStyle = { ...style, borderRadius: '50%' }
  Shape.call(this, { style: localStyle })
}

Circle.prototype = Object.create(Shape.prototype)

export default Circle