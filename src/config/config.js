import dotenv from 'dotenv';
dotenv.config();

export const config = {
    port: process.env.PORT || 3000,
    openaiApiKey: process.env.OPENAI_API_KEY,
    environment: process.env.NODE_ENV || 'development',
    clientUrl: process.env.CLIENT_URL || 'https://reforestation-management.onrender.com',
    allowedOrigins: [
        'http://localhost:3000',
        'http://localhost:5000',
        'https://reforestation-management.onrender.com',
        process.env.ALLOWED_ORIGIN,
        process.env.CLIENT_URL
    ].filter(Boolean),
    isProduction: process.env.NODE_ENV === 'production',
    corsOptions: {
        credentials: true,
        optionsSuccessStatus: 200
    }
};
