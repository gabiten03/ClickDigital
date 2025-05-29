
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
    const response = await fetch('https://n8n.srv844090.hstgr.cloud/webhook-test/1e2225be-b9c4-4d9f-ba64-d586275c9bfc', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: text })
    });

    const data = await response.json();
    if (Array.isArray(data) && data.length > 0 && data[0].output) {
      appendMessage(data[0].output, 'bot');
    } else {
      appendMessage('Respuesta no disponible.', 'bot');
    }

  } catch (error) {
    console.error(error);
    appendMessage('Error al contactar al bot.', 'bot');
  }
}

chatInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    e.preventDefault();
    sendMessage();
  }
});
