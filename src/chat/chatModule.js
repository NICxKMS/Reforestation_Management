import { ChatGPTStreamFormatter, formatStreamedContent } from '../chat/chatFormatter.js';

const AUTHOR = {
    name: "Nikhil Kumar",
    github: "https://github.com/NICxKMS"
};

const API_ENDPOINTS = {
    CHAT: 'http://localhost:3000/api/chat',
    MODELS: 'http://localhost:3000/api/models'
};

// Remove the duplicate ChatGPTStreamFormatter class definition

const chatModule = {
    async initialize(forest) {
        const forestContext = this.createForestContext(forest);
        const chatContainer = await this.createChatUI(forest);
        document.body.appendChild(chatContainer);
        
        const messages = chatContainer.querySelector('.chat-messages');
        this.addMessage('bot', this.generateGreeting(forest), messages);
        this.setupEventListeners(chatContainer, forestContext, messages);
    },

    createForestContext(forest) {
        if (forest.name === "forests") {
            return {
                name: "forests",
                type: "all types",
                context: "global",
                focus: "general forest knowledge and conservation"
            };
        }

        return {
            name: forest.name,
            type: forest.type,
            country: forest.country,
            area: forest.area,
            biodiversity: {
                species: forest.biodiversity.species,
                endangered: forest.biodiversity.endangered
            },
            conservation: forest.conservation.status,
            threats: forest.historicalData.primaryThreats.map(t => t.threat).join(', ')
        };
    },

    async createChatUI(forest) {
        const container = document.createElement('div');
        container.className = 'chat-container';
        
        // Fetch available models
        let models = [];
        try {
            const response = await fetch(API_ENDPOINTS.MODELS);
            if (!response.ok) throw new Error('Failed to fetch models');
            models = await response.json();
            console.log('Available models:', models); // Debug log
        } catch (error) {
            console.error('Error fetching models:', error);
            models = [
                { id: 'gpt-3.5-turbo', name: 'GPT-3.5 Turbo (Default)', isDefault: true },
                { id: 'gpt-4o-mini', name: 'GPT-4-0 Mini (Fast)', isDefault: false }
            ];
        }

        container.innerHTML = `
            <div class="chat-header">
                <div class="chat-header-content">
                    <h3>Chat about ${forest.name}</h3>
                    <div class="model-selector">
                        <select class="model-dropdown">
                            ${models.map(model => 
                                `<option value="${model.id}" ${model.isDefault ? 'selected' : ''}>
                                    ${model.name}
                                </option>`
                            ).join('')}
                        </select>
                    </div>
                    <div class="author-info">
                        <span>Created by <a href="${AUTHOR.github}" target="_blank">${AUTHOR.name}</a></span>
                    </div>
                </div>
                <button class="chat-close">&times;</button>
            </div>
            <div class="chat-messages"></div>
            <div class="chat-input-container">
                <input type="text" class="chat-input" placeholder="Ask about this forest...">
                <button class="chat-send">Send</button>
            </div>
        `;
        return container;
    },

    generateGreeting(forest) {
        if (forest.name === "forests") {
            return `Hello! I'm your AI forest expert. I can help you learn about forests around the world, their ecosystems, conservation efforts, and more.\n\nFeel free to ask me anything about forests!`;
        }

        const facts = [
            forest.biodiversity.endangered.length > 3 ? 
                `This forest is home to several endangered species, including the remarkable ${forest.biodiversity.endangered[0]} and ${forest.biodiversity.endangered[1]}.` : null,
            parseInt(forest.area.total) > 1000 ? 
                `At ${forest.area.total}, this is one of the largest ${forest.type}s in ${forest.country}.` : null,
            forest.historicalData.totalLoss ? 
                `Since monitoring began, this forest has lost ${forest.historicalData.totalLoss} of its original area.` : null
        ].filter(fact => fact !== null);

        return `Hello! I'm your AI assistant. Did you know? ${
            facts[Math.floor(Math.random() * facts.length)] || 
            `Welcome to ${forest.name}, a beautiful ${forest.type} in ${forest.country}.`
        }\n\nFeel free to ask me anything about ${forest.name}!`;
    },

    addMessage(type, content, container) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${type}-message`;
        messageDiv.textContent = content;
        container.appendChild(messageDiv);
        container.scrollTop = container.scrollHeight;
    },

    cleanup() {
        document.querySelector('.chat-container')?.remove();
        // Remove the chat trigger button state change
    },

    async setupEventListeners(container, forestContext, messages) {
        const input = container.querySelector('.chat-input');
        const sendBtn = container.querySelector('.chat-send');
        const closeBtn = container.querySelector('.chat-close');
        const modelSelect = container.querySelector('.model-dropdown');

        const sendMessage = async () => {
            const message = input.value.trim();
            if (!message) return;

            input.value = '';
            input.disabled = true;
            sendBtn.disabled = true;

            // Add user message
            this.addMessage('user', message, messages);

            // Create bot message with loading
            const botMessageDiv = document.createElement('div');
            botMessageDiv.className = 'message bot-message typing';
            botMessageDiv.innerHTML = '<div class="typing-indicator"></div>';
            messages.appendChild(botMessageDiv);
            messages.scrollTop = messages.scrollHeight;

            try {
                const response = await fetch(API_ENDPOINTS.CHAT, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        message,
                        forestContext,
                        model: modelSelect.value
                    })
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                botMessageDiv.className = 'message bot-message';
                const formatter = new ChatGPTStreamFormatter(botMessageDiv);

                const reader = response.body.getReader();
                const decoder = new TextDecoder();

                while (true) {
                    const { value, done } = await reader.read();
                    if (done) {
                        console.log('Chat session completed');
                        break;
                    }
                    
                    const chunk = decoder.decode(value);
                    formatter.processChunk(chunk);
                    messages.scrollTop = messages.scrollHeight;
                }

            } catch (error) {
                console.error('Chat error:', error);
                botMessageDiv.className = 'message bot-message';
                botMessageDiv.textContent = 'Sorry, I encountered an error. Please try again.';
            } finally {
                input.disabled = false;
                sendBtn.disabled = false;
                input.focus();
                messages.scrollTop = messages.scrollHeight;
            }
        };

        sendBtn.addEventListener('click', sendMessage);
        input.addEventListener('keypress', e => {
            if (e.key === 'Enter') sendMessage();
        });
        closeBtn.addEventListener('click', () => container.remove());

        setTimeout(() => container.classList.add('active'), 100);
    }
};

export { chatModule };
