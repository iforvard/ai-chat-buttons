const aiChats = [
    { name: 'ChatGPT', url: 'https://chat.openai.com', color: '#10a37f' }, // OpenAI green
    { name: 'Copilot', url: 'https://copilot.microsoft.com', color: '#2f2f33' }, // Microsoft dark theme
    { name: 'Gemini', url: 'https://gemini.google.com', color: '#1a73e8' }, // Google blue
    { name: 'Mistral', url: 'https://chat.mistral.ai', color: '#4b3ab7' }, // Mistral purple
    { name: 'Grok', url: 'https://twitter.com/i/grok', color: '#000000' }, // Grok purple
    { name: 'Claude', url: 'https://claude.ai/chats', color: '#6442ff' }, // Anthropic purple
    { name: 'Perplexity', url: 'https://labs.perplexity.ai', color: '#5436da' }, // Perplexity purple
    { name: 'Poe', url: 'https://poe.com', color: '#000000' }, // Poe black
    { name: 'Crisp', url: 'https://crisp.chat', color: '#2c72ee' }, // Crisp blue
    { name: 'Kommunicate', url: 'https://www.kommunicate.io', color: '#5553ff' }, // Kommunicate blue
    { name: 'Jasper', url: 'https://www.jasper.ai', color: '#ff7a59' }, // Jasper orange
    { name: 'YouChat', url: 'https://you.com/chat', color: '#0066ff' }, // You.com blue
    { name: 'Pi', url: 'https://pi.ai', color: '#7c3aed' }, // Pi purple
    { name: 'Bard', url: 'https://bard.google.com', color: '#8e44ad' }, // Google Bard purple
    { name: 'HuggingChat', url: 'https://huggingface.co/chat', color: '#ffb526' }, // HuggingFace yellow
    { name: 'Character.AI', url: 'https://character.ai', color: '#ff6b6b' }, // Character.AI red
    { name: 'ChatSonic', url: 'https://writesonic.com/chat', color: '#e91e63' }, // ChatSonic pink
    { name: 'OpenAssistant', url: 'https://open-assistant.io', color: '#FF5722' }, // OpenAssistant orange
    { name: 'Replika', url: 'https://replika.com', color: '#FF5252' }, // Replika red
    { name: 'DeepAI', url: 'https://deepai.org/chat', color: '#3498db' }, // DeepAI blue
    { name: 'Adept', url: 'https://www.adept.ai', color: '#16a085' }, // Adept teal
    { name: 'Synthesia', url: 'https://www.synthesia.io', color: '#1abc9c' }, // Synthesia green
    { name: 'Kuki', url: 'https://www.kuki.ai', color: '#9b59b6' }, // Kuki purple
];


// Button generation
const buttonContainer = document.getElementById('buttonContainer');
aiChats.forEach(chat => {
    const button = document.createElement('button');
    button.textContent = chat.name;
    button.style.backgroundColor = chat.color;
    button.dataset.url = chat.url; // Save the URL to a data attribute
    buttonContainer.appendChild(button);
});

// Delegation of events
buttonContainer.addEventListener('click', event => {
    if (event.target.tagName === 'BUTTON') {
        const url = event.target.dataset.url;
        chrome.tabs.create({ url }); // Opening a link in a new tab
    }
});
