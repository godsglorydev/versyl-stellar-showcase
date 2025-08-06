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
    $headers = "From: $email\r\nReply-To: $email";

    $sent = false;
    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $sent = mail($to, $subject, $body, $headers);
    }

    if ($sent) {
        echo "<h1>Gracias, $name!</h1><p>Tu mensaje ha sido enviado correctamente.</p>";
    } else {
        echo "<h1>Error</h1><p>No se pudo enviar tu mensaje. Inténtalo nuevamente más tarde.</p>";
    }
} else {
    header("Location: index.html");
    exit;
}
?>
