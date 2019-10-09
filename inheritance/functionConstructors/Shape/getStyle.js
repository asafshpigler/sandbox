const defaultStyle = {
  position: 'absolute',
  boxSizing: 'border-box',
  top: '0px',
  left: '0px',
  backgroundColor: 'red',
}

function getStyle(customStyle = {}) {
  const { size, ...validCssStyle } = customStyle
  const style = { ...defaultStyle, ...validCssStyle }

  if (size) {
    style.height = style.width = size
  }

  return style
}

export default getStyle