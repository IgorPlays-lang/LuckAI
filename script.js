// Chat functionality script for LuckAI

class Chat {
    constructor() {
        this.messages = [];
    }

    sendMessage(user, text) {
        const message = {
            user: user,
            text: text,
            timestamp: new Date().toISOString(),
        };
        this.messages.push(message);
        this.displayMessage(message);
    }

    displayMessage(message) {
        console.log(`[${message.timestamp}] ${message.user}: ${message.text}`);
    }
}

const chat = new Chat();

// Example usage
chat.sendMessage('User1', 'Hello! How can I help you?');
chat.sendMessage('User2', 'I need assistance with my account.');