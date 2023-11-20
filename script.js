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

      var tietojenDiv = document.createElement('div')
      renkaanDiv.appendChild(tietojenDiv)

      // Renkaan merkki ja malli <p> tägiin
      var merkkiJaMalli = document.createElement('p')
      merkkiJaMalli.innerHTML = renkaat[i].Merkki + ' ' + renkaat[i].Malli
      tietojenDiv.appendChild(merkkiJaMalli)

      // Renkaan tyyppi <p> tägiin
      var tyyppi = document.createElement('p')
      tyyppi.innerHTML = renkaat[i].Tyyppi + 'renkaat'
      tietojenDiv.appendChild(tyyppi)

      // Renkaan koko <p> tägiin
      var koko = document.createElement('p')
      koko.innerHTML = renkaat[i].Koko
      tietojenDiv.appendChild(koko)

      // Renkaan hinta <p> tägiin
      var hinta = document.createElement('p')
      hinta.innerHTML = renkaat[i].Hinta + ' €'
      tietojenDiv.appendChild(hinta)

      // Renkaan kuva <img> tägiin
      var kuva = document.createElement('img')
      kuva.classList.add('tuotekuva')
      kuva.src = 'img/rengaskuvat/' + getImageName(renkaat[i].Malli) + '.png'
      renkaanDiv.appendChild(kuva)

      tuloksetDiv.appendChild(renkaanDiv)
    }
  } else {
    tuloksetDiv.innerHTML = 'Ei hakutuloksia'
  }
}

// Tehtävänannossa oli todella huonot kuvat niin tein näin
function getImageName(image) {
  let result
  switch (image) {
    case 'Hakkapeliitta 8':
      result = 'Nokian_Hakka_Black'
      break
    case 'Hakkapeliitta 8 SUV':
      result = 'Nokian_Hakka_Green_3'
      break
    case 'Hakkapeliitta 9':
      result = 'Nokian_Hakkapeliitta_9'
      break
    case 'Hakkapeliitta R3':
      result = 'Nokian_Hakka_Green_3'
      break
    case 'Wi31+':
      result = 'Kumho-Wi31UUSI'
      break
    case 'WS71':
      result = 'WinterCraft-SUV-ice-WS51'
      break
    case 'RW11':
      result = 'HK_RW11'
      break
    case 'K125':
      result = 'HK_K125_L'
      break
    case 'Ventus Prime 3 K125':
      result = 'HK_K125_L'
      break
    case 'Nordman RS2':
      result = 'Nokian_Nordman_RS_'
      break
    case 'Ecowing ES-31':
      result = 'ES31-kesärengas-HA'
      break
    default:
      result = 'default'
      break
  }
  return result
}

function scrollToElement(element) {
  var element = document.getElementById(element)

  element.scrollIntoView({ behavior: 'smooth' })
}
