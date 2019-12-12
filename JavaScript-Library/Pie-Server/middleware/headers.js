//jshint esversion:8

module.exports = (req, res, next) => {
    res.header('access-control-allow-origin', '*');
    res.header('access-control-allow-methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('access-control-allow-headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

    next();
};

// CORS = cross-origin resource sharing
// 1) client sends an 'OPTION' request
// 2) server sends a response with server metadata
// 3) client sends the 'official; request (get, post, put, delete)
// 4) server sends back a response with confirmation or rejection
