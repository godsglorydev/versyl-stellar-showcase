// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
      navList.classList.remove('show');
    }
  });
});

// Mobile navigation toggle
const navToggle = document.getElementById('nav-toggle');
const navList = document.querySelector('.nav-list');
navToggle.addEventListener('click', () => {
  navList.classList.toggle('show');
});

// Chatbot functionality
const chatbotToggle = document.getElementById('chatbot-toggle');
const chatWindow = document.getElementById('chat-window');
const chatClose = document.getElementById('chat-close');
const chatMessages = document.getElementById('chat-messages');
const chatInput = document.getElementById('chat-input');
const chatSend = document.getElementById('chat-send');

const predefinedResponses = {
  services: 'We offer Branding, Web Design & Development, Advertising Campaigns, SEO, and Automations.',
  pricing: 'Our Premium Plan is $2,999/month (normally $4,999 - Save 40%!).',
  contact: 'You can reach us at hello@versyl.com or call +1 (555) 123-4567.',
  default: "That's a great question! For detailed information, please contact our team."
};

function botReply(text) {
  const msg = document.createElement('div');
  msg.className = 'chat-message bot';
  msg.textContent = text;
  chatMessages.appendChild(msg);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

chatbotToggle.addEventListener('click', () => {
  chatWindow.classList.toggle('hidden');
});
chatClose.addEventListener('click', () => {
  chatWindow.classList.add('hidden');
});

function handleUserMessage() {
  const text = chatInput.value.trim();
  if (!text) return;
  const userMsg = document.createElement('div');
  userMsg.className = 'chat-message user';
  userMsg.textContent = text;
  chatMessages.appendChild(userMsg);
  chatMessages.scrollTop = chatMessages.scrollHeight;
  chatInput.value = '';

  setTimeout(() => {
    const lower = text.toLowerCase();
    if (lower.includes('service')) botReply(predefinedResponses.services);
    else if (lower.includes('price') || lower.includes('cost')) botReply(predefinedResponses.pricing);
    else if (lower.includes('contact')) botReply(predefinedResponses.contact);
    else botReply(predefinedResponses.default);
  }, 600);
}

chatSend.addEventListener('click', handleUserMessage);
chatInput.addEventListener('keypress', e => {
  if (e.key === 'Enter') {
    e.preventDefault();
    handleUserMessage();
  }
});