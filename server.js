import express from 'express';
import cors from 'cors';
import compression from 'compression';
import path from 'path';
import { fileURLToPath } from 'url';
import chatRoutes from './src/routes/chatRoutes.js';
import { errorHandler } from './src/middleware/errorHandler.js';
import { config } from './src/config/config.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(compression());

// Serve static assets with caching headers
app.use(express.static('public', { maxAge: '1d', etag: true }));

// Serve static chat modules with caching headers
app.use('/chat', express.static(path.join(__dirname, 'src/chat'), { maxAge: '1d', etag: true }));

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.use('/api', chatRoutes);

// Error handling
app.use(errorHandler);

const PORT = process.env.PORT || config.port;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
