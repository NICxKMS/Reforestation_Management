import express from 'express';
import { OpenAI } from 'openai';
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

// Single models definition with merged values
const PREFERRED_MODELS = {
    'gpt-3.5-turbo': 'GPT-3.5 Turbo (Balanced)',
    'gpt-4o-mini': 'GPT-4-0 Mini (Fast)',
    'gpt-4': 'GPT-4 (Advanced)',
    'gpt-4-turbo-preview': 'GPT-4 Turbo (Latest)',
    'gpt-3.5-turbo-16k': 'GPT-3.5 Turbo 16K (Extended)'
};

// System prompts for contextual responses
const SYSTEM_PROMPTS = {
    general: `You are a forest expert.    always try to include bullet points.
     Please provide detailed responses including:
    • Relevant facts and statistics
    • Historical context when applicable
    • Environmental impact considerations
    • Conservation recommendations
    • Bullet points for key information
    always try to include bullet points.

    Keep responses informative yet engaging.`,
    
    specific: (forest) => `You are an expert on ${forest.name}. always try to include bullet points.
    Please provide:
    • Specific details about this ${forest.type}
    • Current conservation status and challenges
    • Local biodiversity information
    • Historical and cultural significance
    • Relevant regional context
    always try to include bullet points.
    Use bullet points for clarity when listing information.`
};

// Get available models
router.get('/models', async (req, res) => {
    try {
        // Return static model list instead of fetching from API
        const models = [
            {
                id: 'gpt-3.5-turbo',
                name: PREFERRED_MODELS['gpt-3.5-turbo'],
                isDefault: true
            },
            {
                id: 'gpt-4o-mini',
                name: PREFERRED_MODELS['gpt-4o-mini'],
                isDefault: false
            },
            {
                id: 'gpt-4',
                name: PREFERRED_MODELS['gpt-4'],
                isDefault: false
            },
            {
                id: 'gpt-4-turbo-preview',
                name: PREFERRED_MODELS['gpt-4-turbo-preview'],
                isDefault: false
            },
            {
                id: 'gpt-3.5-turbo-16k',
                name: PREFERRED_MODELS['gpt-3.5-turbo-16k'],
                isDefault: false
            }
        ];

        res.json(models);
    } catch (error) {
        console.error('Error with models:', error);
        // Return minimal fallback models if error occurs
        res.status(200).json([
            { id: 'gpt-3.5-turbo', name: 'GPT-3.5 Turbo (Default)', isDefault: true },
            { id: 'gpt-4o-mini', name: 'GPT-4-0 Mini (Fast)', isDefault: false }
        ]);
    }
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
async function handleChatRequest(req, res) {
    try {
        const { message, forestContext, model = 'gpt-3.5-turbo' } = req.body;

        const systemPrompt = forestContext.name === "forests" 
            ? SYSTEM_PROMPTS.general
            : SYSTEM_PROMPTS.specific(forestContext);

        const completion = await openai.chat.completions.create({
            model: model,
            messages: [
                {
                    role: "system",
                    content: systemPrompt
                },
                {
                    role: "user",
                    content: message
                }
            ],
            temperature: 0.7,
            max_tokens: 4000,
            stream: true  // Enable streaming
        });

        // Set headers for streaming
        res.setHeader('Content-Type', 'text/event-stream');
        res.setHeader('Cache-Control', 'no-cache');
        res.setHeader('Connection', 'keep-alive');

        // Stream the response
        for await (const chunk of completion) {
            const content = chunk.choices[0]?.delta?.content || '';
            if (content) {
                const data = JSON.stringify({ content });
                res.write(`data: ${data}\n\n`);
            }
        }

        res.write('data: [DONE]\n\n');
        res.end();

    } catch (error) {
        console.error('Chat Error:', error);
        res.status(500).json({
            error: 'Failed to generate response',
            response: 'I apologize, but I encountered an error. Please try again.'
        });
    }
}

// Single route handler for chat
router.post('/chat', validateChatRequest, handleChatRequest);

export default router;
