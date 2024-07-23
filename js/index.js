  const picker = document.getElementById('picker')
  const img = document.getElementById('img')
  const code = document.getElementById('code').children
  const error = document.getElementById('error')
  const errMsg = document.getElementById('errorMsg')

  const codePropMapping = {
    colorMargin: 0,
    colorsPerRow: 1,
    colorSize: 2,
    defaultTint: 3,
    fixedMinHeight: 4,
    palette: 5,
    useSpectrumPicker: 6,
    value: 7
  }
  const bl = '#000000'
  const wh = '#ffffff'

  function listenerEvent (event) {
    const color = event.detail[0]
    console.log('Selected Color:', color)
    picker.value = color
    if (colorPicker.colorIsLight(color, 160)) {
      img.style.color = bl
    }
    else {
      img.style.color = wh
    }
    document.getElementById('selectedHex').innerHTML = color
    img.style.background = color
    code[codePropMapping.value].innerHTML = '="' + color + '"'
  }

  if (picker.addEventListener) {
    picker.addEventListener('change', listenerEvent, false)
  }
  else {
    picker.attachEvent('change', listenerEvent)
  }

  function changeProp (sourceElm, value, targetID, targetProp, min, max) {
    const tar = document.getElementById(targetID)

    if (value < min) {
      errMsg.innerHTML = 'The value is to small. The smallest possible value is: <b>' + min + '</b>'
      error.style.display = 'block'
      sourceElm.value = min
    }
    else if (value > max) {
      errMsg.innerHTML = 'The value is to big. The biggest possible value is: <b>' + max + '</b>'
      error.style.display = 'block'
      sourceElm.value = max
    }
    else {
      error.style.display = 'none'
      tar[targetProp] = value
      code[codePropMapping[targetProp]].innerHTML = '="' + value + '"'
    }
  }
