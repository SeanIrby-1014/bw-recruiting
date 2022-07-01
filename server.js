import http from 'http';
import app from './app/app.js';

const server = http.createServer(app);
console.log('Starting server');
server.listen(3000, () => console.log('App loaded and listening on port 3000!'));
