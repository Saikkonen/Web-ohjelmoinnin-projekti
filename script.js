function haeRenkaat() {
  var xhr = new XMLHttpRequest()
  var koko = document.getElementById('renkaanKoko').value
  var tyyppi = document.getElementById('renkaanTyyppi').value
  var url = 'search.php'

  xhr.open('POST', url, true)
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      document.getElementById('renkaat').innerHTML = xhr.responseText
    }
  }
  xhr.send('renkaanKoko=' + koko + '&renkaanTyyppi=' + tyyppi)
}

function scrollToElement(element) {
  var element = document.getElementById(element)

  element.scrollIntoView({ behavior: 'smooth' })
}
