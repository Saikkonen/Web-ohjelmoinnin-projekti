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
  tuloksetDiv.innerHTML = '' // Tyhjennä nykyiset tulokset

  if (renkaat.length > 0) {
    for (var i = 0; i < renkaat.length; i++) {
      var renkaanDiv = document.createElement('div')
      renkaanDiv.classList.add('renkaan-tiedot')

      // Renkaan merkki ja malli <p> tägiin
      var merkkiJaMalli = document.createElement('p')
      merkkiJaMalli.innerHTML = renkaat[i].Merkki + ' ' + renkaat[i].Malli
      renkaanDiv.appendChild(merkkiJaMalli)

      // Renkaan tyyppi <p> tägiin
      var tyyppi = document.createElement('p')
      tyyppi.innerHTML = renkaat[i].Tyyppi + 'renkaat'
      renkaanDiv.appendChild(tyyppi)

      // Renkaan koko <p> tägiin
      var koko = document.createElement('p')
      koko.innerHTML = renkaat[i].Koko
      renkaanDiv.appendChild(koko)

      // Renkaan hinta <p> tägiin
      var hinta = document.createElement('p')
      hinta.innerHTML = renkaat[i].Hinta + ' €'
      renkaanDiv.appendChild(hinta)

      // Renkaan kuva <img> tägiin
      var kuva = document.createElement('img')
      kuva.src = 'img/rengaskuvat/ES31-kesärengas-HA.png'
      kuva.width = 100
      renkaanDiv.appendChild(kuva)

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
