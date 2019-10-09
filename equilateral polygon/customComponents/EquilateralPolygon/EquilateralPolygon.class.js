import {
  getPointsOfEquilateralPolygonBySideCount,
  pointsArrayToString,
} from './getPoints.js'

const SVG_NS = 'https://www.w3.org/2000/svg/'

class EquilateralPolygon extends HTMLElement {
  constructor() {
    super()

    // Create a shadow root
    const shadow = this.attachShadow({ mode: 'open' })

    const elSvg = document.createElementNS(SVG_NS, 'svg')
    elSvg.setAttributeNS(SVG_NS, 'xmlns', SVG_NS)
    const elPolygon = document.createElement('polygon')

    const BOX_SIZE = 100
    // elSvg.style.height = BOX_SIZE
    // elSvg.style.width = BOX_SIZE
    const radius = BOX_SIZE / 2
    const points = getPointsOfEquilateralPolygonBySideCount(4, radius)
    const pointsStr = pointsArrayToString(points)
    
    elPolygon.setAttribute('points', pointsStr)

    const elLink = document.createElement('link')
    elLink.setAttribute('rel', 'stylesheet')
    elLink.setAttribute('href', 'index.css')

    shadow.appendChild(elLink)
    shadow.appendChild(elSvg)
    elSvg.appendChild(elPolygon)
    console.log(shadow)
  }

  static get observedAttributes() { return ['text'] }

  connectedCallback() {
    console.log('get appended to dom!')
  }

  attributeChangedCallback() {
    console.log('attributeChangedCallback')
    // this.info.textContent = this.getAttribute('text')
  }
}

// class EquilateralPolygon extends HTMLElement {
//   constructor() {
//     super()

//     // Create a shadow root
//     var shadow = this.attachShadow({ mode: 'open' })

//     // Create spans
//     var elSvg = document.createElement('span')
//     elSvg.setAttribute('class', 'elSvg')
//     var elPolygon = document.createElement('span')
//     elPolygon.setAttribute('class', 'elPolygon')
//     elPolygon.setAttribute('tabindex', 0)
//     this.info = document.createElement('span')
//     this.info.setAttribute('class', 'info')

//     // Take attribute content and put it inside the info span
//     var text = this.getAttribute('text')
//     this.info.textContent = text

//     // Insert elPolygon
//     var imgUrl
//     if (this.hasAttribute('img')) {
//       imgUrl = this.getAttribute('img')
//     } else {
//       imgUrl = 'img/default.png'
//     }
//     var img = document.createElement('img')
//     img.src = imgUrl
//     elPolygon.appendChild(img)

//     // Create some CSS to apply to the shadow dom
//     var style = document.createElement('style')

//     style.textContent = '.elSvg {' +
//     // CSS truncated for brevity
//     // attach the created elements to the shadow dom

//     shadow.appendChild(style)
//     shadow.appendChild(elSvg)
//     elSvg.appendChild(elPolygon)
//     elSvg.appendChild(this.info)
//   }

//   static get observedAttributes() { return ['text'] }

//   connectedCallback() {
//     console.log('get appended to dom!')
//   }

//   attributeChangedCallback() {
//     console.log('attributeChangedCallback')
//     this.info.textContent = this.getAttribute('text')
//   }
// }

export default EquilateralPolygon