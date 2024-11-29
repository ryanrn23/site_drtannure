function sendToWhatsApp() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    // Número do WhatsApp (substitua pelo seu número , sem espaços ou símbolos)
    const phoneNumber = "5521975993777";

    // Montar a mensagem
    const whatsappMessage = `Olá, meu nome é ${name}, Meu e-mail é ${email}. Meu telefone é ${phone}, Aqui está o motivo do meu contato: ${message}`;

    // Criar o link para o WhatsApp
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    // Redirecionar para o WhatsApp
    window.open(whatsappLink, '_blank');
}