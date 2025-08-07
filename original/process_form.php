<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = htmlspecialchars(trim($_POST['name'] ?? ''));
    $email = filter_var(trim($_POST['email'] ?? ''), FILTER_SANITIZE_EMAIL);
    $company = htmlspecialchars(trim($_POST['company'] ?? ''));
    $phone = htmlspecialchars(trim($_POST['phone'] ?? ''));
    $service = htmlspecialchars(trim($_POST['budget'] ?? ''));
    $message = htmlspecialchars(trim($_POST['message'] ?? ''));

    $to = "contact@example.com"; // TODO: change to your email address
    $subject = "Nuevo mensaje de $name";
    $body = "Nombre: $name\n" .
            "Email: $email\n" .
            "Empresa: $company\n" .
            "Teléfono: $phone\n" .
            "Servicio: $service\n\n" .
            "Mensaje:\n$message";
    $headers  = "From: $name <$email>\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    $sent = false;
    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $sent = mail($to, $subject, $body, $headers);
    }

    header('Content-Type: application/json');
    if ($sent) {
        echo json_encode(['success' => true, 'message' => "¡Gracias, $name! Tu mensaje ha sido enviado correctamente."]);
    } else {
        http_response_code(500);
        echo json_encode(['success' => false, 'message' => 'No se pudo enviar tu mensaje. Inténtalo nuevamente más tarde.']);
    }
} else {
    header("Location: index.html");
    exit;
}
?>
