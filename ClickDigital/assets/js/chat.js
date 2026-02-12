const chatMessages = document.getElementById('chatMessages');
const chatInput = document.getElementById('chatInput');
const chatToggleButton = document.getElementById('chatToggleButton');
const chatWidget = document.getElementById('chatWidget');

let isChatOpen = false;

function toggleChat() {
  isChatOpen = !isChatOpen;
  chatWidget.style.display = isChatOpen ? 'flex' : 'none';
  chatToggleButton.textContent = isChatOpen ? '⌄' : '💬';

  if (isChatOpen && chatMessages.children.length === 0) {
    appendMessage("¡Hola! 👋", 'bot');
    appendMessage("Soy el asistente virtual de ClickDigital. ¿En qué puedo ayudarte hoy?", 'bot');
  }
}

function appendMessage(text, sender) {
  const div = document.createElement('div');
  div.classList.add('message', sender);
  div.textContent = text;
  chatMessages.appendChild(div);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

async function sendMessage() {
  const text = chatInput.value.trim();
  if (!text) return;

  appendMessage(text, 'user');
  chatInput.value = '';

  try {

    //test
    console.log('Enviando mensaje al webhook...');
    const response = await fetch('https://rucahaian.srv844090.hstgr.cloud/webhook/ruca-chatbot', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: text })
    });

    console.log('Respuesta recibida:', response);
    console.log('Status de la respuesta:', response.status);
    console.log('Headers de la respuesta:', response.headers);

    const clonedResponse = response.clone();
    const responseText = await clonedResponse.text();
    console.log('Contenido de la respuesta (texto crudo):', responseText);

    if (!responseText) {
      appendMessage('Respuesta vacía del servidor.', 'bot');
      return;
    }

    let data;
    try {
      data = JSON.parse(responseText);
    } catch (jsonError) {
      console.error('Error parseando JSON:', jsonError);
      appendMessage('Error interpretando la respuesta del bot.', 'bot');
      return;
    }

    console.log('Datos parseados (JSON):', data);

    if (Array.isArray(data) && data.length > 0 && data[0].output) {
      appendMessage(data[0].output, 'bot');
    } else if (data.output) {
      appendMessage(data.output, 'bot');
    } else {
      appendMessage('Respuesta no disponible.', 'bot');
    }

  } catch (error) {
    console.error('Error en sendMessage:', error);
    appendMessage('Error al contactar al bot.', 'bot');
  }
}


chatInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    e.preventDefault();
    sendMessage();
  }
});