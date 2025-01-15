export const errorHandler = (err, req, res, next) => {
    const error = {
        message: err.message || 'Internal Server Error',
        status: err.status || 500,
        stack: process.env.NODE_ENV === 'development' ? err.stack : undefined
    };

    // Log the full error in production
    if (process.env.NODE_ENV === 'production') {
        console.error('Production Error:', {
            message: error.message,
            stack: err.stack,
            path: req.path,
            method: req.method
        });
    }

    res.status(error.status).json({
        error: error.message,
        response: 'I apologize, but I encountered an error. Please try again.',
        details: process.env.NODE_ENV === 'development' ? error : undefined
    });
};
