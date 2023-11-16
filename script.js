function haeRenkaat() {
  var xhr = new XMLHttpRequest()
  var koko = document.getElementById('renkaanKoko').value
  var tyyppi = document.getElementById('renkaanTyyppi').value
  var url = 'search.php'

  xhr.open('POST', url, true)
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var renkaat = JSON.parse(xhr.responseText)
      paivitaSivu(renkaat)
    }
  }
  xhr.send('renkaanKoko=' + koko + '&renkaanTyyppi=' + tyyppi)
}

function paivitaSivu(renkaat) {
  var tuloksetDiv = document.getElementById('renkaat')
  console.log(renkaat)
  tuloksetDiv.innerHTML = '' // Tyhjennä nykyiset tulokset

  if (renkaat.length > 0) {
    for (var i = 0; i < renkaat.length; i++) {
      var renkaanDiv = document.createElement('div')
      renkaanDiv.classList.add('renkaan-tiedot')

      for (var avain in renkaat[i]) {
        var pElementti = document.createElement('p')
        pElementti.innerHTML = avain + ': ' + renkaat[i][avain]
        renkaanDiv.appendChild(pElementti)
      }

      tuloksetDiv.appendChild(renkaanDiv)
    }
  } else {
    tuloksetDiv.innerHTML = 'Ei hakutuloksia'
  }
}

function scrollToElement(element) {
  var element = document.getElementById(element)

  element.scrollIntoView({ behavior: 'smooth' })
}
