const AUTHOR = {
    name: "Nikhil Kumar",
    github: "https://github.com/NICxKMS"
};

const API_ENDPOINTS = {
    CHAT: 'http://localhost:3000/api/chat'
};

const chatModule = {
    async initialize(forest) {
        const forestContext = this.createForestContext(forest);
        const chatContainer = this.createChatUI(forest);
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

    createChatUI(forest) {
        const container = document.createElement('div');
        container.className = 'chat-container';
        container.innerHTML = `
            <div class="chat-header">
                <div class="chat-header-content">
                    <h3>Chat about ${forest.name}</h3>
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

        const sendMessage = async () => {
            const message = input.value.trim();
            if (!message) return;

            this.addMessage('user', message, messages);
            input.value = '';

            try {
                const response = await fetch('http://localhost:3000/api/chat', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ message, forestContext })
                });

                if (!response.ok) throw new Error('Network response was not ok');
                const data = await response.json();
                this.addMessage('bot', data.response, messages);
            } catch (error) {
                console.error('Error:', error);
                this.addMessage('bot', 'Sorry, I encountered an error. Please try again.', messages);
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
