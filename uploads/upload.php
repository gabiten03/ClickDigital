// Token esperado
$tokenEsperado = 'click2025!'; // 🔒 CAMBIÁ esto por tu clave real
$headers = getallheaders();
$authHeader = $headers['Authorization'] ?? '';

if (!preg_match('/Bearer\\s+(.*)/', $authHeader, $matches) || $matches[1] !== $tokenEsperado) {
    http_response_code(401);
    echo json_encode(["error" => "No autorizado"]);
    exit;
}

if (!isset($_FILES['file']) || $_FILES['file']['error'] !== UPLOAD_ERR_OK) {
    http_response_code(400);
    echo json_encode(["error" => "Archivo no recibido correctamente"]);
    exit;
}

$targetDir = "./";
if (!is_dir($targetDir)) {
    mkdir($targetDir, 0755, true);
}

$nombreArchivo = basename($_FILES["file"]["name"]);
$rutaDestino = $targetDir . $nombreArchivo;

if (move_uploaded_file($_FILES["file"]["tmp_name"], $rutaDestino)) {
    // 👉 Generar la URL correcta SIN repetir "uploads/"
  $url = "https://" . $_SERVER['HTTP_HOST'] . "/uploads/" . $nombreArchivo;
    echo json_encode(["url" => $url]);
} else {
    http_response_code(500);
    echo json_encode(["error" => "Error al guardar el archivo"]);
}
?>