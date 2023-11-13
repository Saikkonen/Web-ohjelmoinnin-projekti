<!DOCTYPE html>
<html>

<head>
  <title>Hakutulokset</title>
</head>

<body>

  <?php
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

    if ($result->num_rows > 0) {
      // Tulosta hakutulokset
      echo "<table><tr><th>Merkki</th><th>Malli</th><th>Tyyppi</th><th>Koko</th><th>Hinta</th><th>Saldo</th></tr>";
      while ($row = $result->fetch_assoc()) {
        echo "<tr><td>" . $row["Merkki"] . "</td><td>" . $row["Malli"] . "</td><td>" . $row["Tyyppi"] . "</td><td>" . $row["Koko"] . "</td><td>" . $row["Hinta"] . "</td><td>" . $row["Saldo"] . "</td></tr>";
      }
      echo "</table>";
    } else {
      echo "Ei hakutuloksia";
    }

    $yhteys->close(); // Sulje tietokantayhteys
  }
  ?>

</body>

</html>