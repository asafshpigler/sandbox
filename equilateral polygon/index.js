function Point(x, y) {
  this.x = x
  this.y = y
}

function radians(degrees) {
  return degrees * Math.PI / 180
};

function getPointsOfEquilateralPolygonBySideCount(sideCount, radius) {
  // return [new Point(0,0), new Point(radius, radius), new Point(0,radius), new Point(0, 0)]
  const isValidArgs = (
    typeof sideCount === 'number' && sideCount >= 3 &&
    typeof radius === 'number' && radius > 0
  )
  if (!isValidArgs) return

  const points = []
  const angleDelta = 360 / sideCount
  const center = new Point(radius, radius)

  let angle = null
  let x = null
  let y = null

  for (let i = 0; i < sideCount; i++) {
    angle = angleDelta * i - 90
    angleInRadians = radians(angle)

    x = center.x
    y = center.y
    x += radius * Math.cos(angleInRadians)
    y += radius * Math.sin(angleInRadians)
    points.push(new Point(x.toFixed(2), y.toFixed(2)))
  }

  return points
}

function pointsArrayToString(points) {
  const pointsStr = points.reduce((str, point, index) => {
    str += point.x + ',' + point.y
    if (index !== points.length - 1) str += ' '
    return str
  }, '')

  return pointsStr
}

// ------

(function setupPolygon() {
  const elSvg = document.getElementsByTagName('svg')[0]
  const elPolygon = document.getElementsByTagName('polygon')[0]
  const elInput = document.getElementsByTagName('input')[0]
  
  const BOX_SIZE = 100
  elSvg.style.height = BOX_SIZE
  elSvg.style.width = BOX_SIZE
  const radius = BOX_SIZE / 2
  updatePoints(4)

  elInput.addEventListener('input', (e) => {
    console.log(e.target.value)
    updatePoints(+e.target.value)
  })

  function updatePoints(sideCount) {
    const points = getPointsOfEquilateralPolygonBySideCount(sideCount, radius)
    const pointsStr = pointsArrayToString(points)
    elPolygon.setAttribute('points', pointsStr)
  }
})()