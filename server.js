import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import chatRoutes from './src/routes/chatRoutes.js';
import { errorHandler } from './src/middleware/errorHandler.js';
import { config } from './src/config/config.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

const corsOptions = {
    origin: function(origin, callback) {
        const allowedOrigins = [
            'http://localhost:3000',
            'http://localhost:5000',
            'https://reforestation-management.onrender.com',
            process.env.ALLOWED_ORIGIN,
            process.env.CLIENT_URL
        ].filter(Boolean);

        // Allow requests with no origin (like mobile apps or curl requests)
        if(!origin || allowedOrigins.includes(origin) || process.env.NODE_ENV !== 'production') {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    methods: ['GET', 'POST'],
    credentials: true,
    optionsSuccessStatus: 200,
    allowedHeaders: ['Content-Type', 'Authorization']
};

// Middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.static('public'));

// Add preflight handler
app.options('*', cors(corsOptions));

// Serve static files from src/chat for modules
app.use('/chat', express.static(path.join(__dirname, 'src/chat')));

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.use('/api', chatRoutes);

// Error handling
app.use(errorHandler);

// Add error logging middleware
app.use((err, req, res, next) => {
    console.error('Server Error:', err.stack);
    next(err);
});

const PORT = process.env.PORT || config.port;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
