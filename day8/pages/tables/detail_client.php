<?php
// Menghubungkan ke database
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "maxy_academy"; // Ganti dengan nama database Anda

// Membuat koneksi
$conn = new mysqli($servername, $username, $password, $dbname);

// Memeriksa koneksi
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Mendapatkan ID klien dari URL
$id = isset($_GET['id']) ? intval($_GET['id']) : 0;

// Mengambil data detail klien
$sql = "SELECT clients.id, clients.Name, clients.Age, countries.Name AS Country, clients.Address, clients.Married 
        FROM clients 
        JOIN countries ON clients.Country = countries.Id 
        WHERE clients.id = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("i", $id);
$stmt->execute();
$result = $stmt->get_result();
$client = $result->fetch_assoc();

// Menutup koneksi
$conn->close();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Detail Klien</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
</head>
<body>
    <div class="container mt-5">
        <h1 class="text-center mb-4">Detail Klien</h1>

        <?php if ($client): ?>
        <div class="card">
            <div class="card-header">
                <h5 class="card-title">Nomor : <?php echo htmlspecialchars($client['id']); ?></h5>
            </div>
            <div class="card-body">
                <div class="mb-3">
                    <label class="form-label">Nama:</label>
                    <input type="text" class="form-control" value="<?php echo htmlspecialchars($client['Name']); ?>" readonly>
                </div>
                <div class="mb-3">
                    <label class="form-label">Umur:</label>
                    <input type="text" class="form-control" value="<?php echo htmlspecialchars($client['Age']); ?>" readonly>
                </div>
                <div class="mb-3">
                    <label class="form-label">Negara:</label>
                    <input type="text" class="form-control" value="<?php echo htmlspecialchars($client['Country']); ?>" readonly>
                </div>
                <div class="mb-3">
                    <label class="form-label">Alamat:</label>
                    <input type="text" class="form-control" value="<?php echo htmlspecialchars($client['Address']); ?>" readonly>
                </div>
                <div class="mb-3">
                    <label class="form-label">Status Menikah:</label>
                    <input type="text" class="form-control" value="<?php echo htmlspecialchars($client['Married'] ? 'Menikah' : 'Belum Menikah'); ?>" readonly>
                </div>
            </div>
            <div class="card-footer text-center">
                <a href="jsgrid.php" class="btn btn-primary">Kembali ke Daftar Klien</a>
            </div>
        </div>
        <?php else: ?>
        <p class="text-center">Data tidak ditemukan.</p>
        <?php endif; ?>
    </div>
</body>
</html>
