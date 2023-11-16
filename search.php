<?php
header('Content-Type: application/json');
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $renkaanKoko = $_POST['renkaanKoko'];
  $renkaanTyyppi = $_POST['renkaanTyyppi'];

  $servername = "localhost";
  $username = "root";
  $password = "";
  $dbname = "rengaskauppa";

  // Luo tietokantayhteys
  $yhteys = new mysqli($servername, $username, $password, $dbname);

  if ($yhteys->connect_error) {
    die("Yhteys epäonnistui: " . $yhteys->connect_error);
  }

  // Tee SQL-kysely hakua varten
  $sql = "SELECT * FROM renkaat WHERE 1";

  if ($renkaanKoko != "Kaikki") {
    $sql .= " AND Koko = '$renkaanKoko'";
  }

  if ($renkaanTyyppi != "Kaikki") {
    $sql .= " AND Tyyppi = '$renkaanTyyppi'";
  }

  $result = $yhteys->query($sql);

  $renkaat = array();

  if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
      $renkaat[] = $row;
    }
  }

  echo json_encode($renkaat);

  $yhteys->close();
}
?>