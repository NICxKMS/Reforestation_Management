export const errorHandler = (err, req, res, next) => {
    console.error('Error:', err);
    res.status(err.status || 500).json({
        error: err.message || 'Internal Server Error',
        response: 'I apologize, but I encountered an error. Please try asking a different question.'
    });
};
