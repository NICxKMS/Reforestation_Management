import express from 'express';
import { OpenAI } from 'openai';
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

// Middleware to validate chat request
const validateChatRequest = (req, res, next) => {
    const { message, forestContext } = req.body;
    
    if (!message || !forestContext) {
        return res.status(400).json({
            error: 'Missing required information',
            response: 'I need more information about the forest to help you.'
        });
    }
    
    next();
};

// Chat handler function
async function handleChatRequest(req, res, next) {
    try {
        const { message, forestContext } = req.body;
        
        const completion = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [
                {
                    role: "system",
                    content: `You are a forest expert. Respond about ${forestContext.name} with brief, factual information.`
                },
                {
                    role: "user",
                    content: message
                }
            ],
            temperature: 0.7,
            max_tokens: 1500
        });

        if (!completion.choices || completion.choices.length === 0) {
            throw new Error('No response from AI model');
        }

        res.json({ response: completion.choices[0].message.content });
    } catch (error) {
        console.error('AI Response Generation Error:', error);
        res.status(500).json({
            error: 'Failed to generate response',
            response: 'I apologize, but I encountered an error. Please try asking a different question.'
        });
    }
}

// Single route handler for chat
router.post('/chat', validateChatRequest, handleChatRequest);

export default router;
