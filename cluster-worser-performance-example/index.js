process.env.UV_THREADPOOL_SIZE = 1;

import cluster from 'cluster';
import process from 'process';
import crypto from "crypto";


// Is the file being executed in master mode?
if (cluster.isMaster) {
    // Cause index.js to be executed *again* but in child mode.
    cluster.fork();
    cluster.fork();
    cluster.fork();
    cluster.fork();
    cluster.fork();
    cluster.fork();
} else {
    // Im a child, Im going to act like a server.
    const express = require('express');
    const app = express();

    app.get('/', (req, res) => {
        crypto.pbkdf2('a', 'b', 100000, 512, 'sha512',
            () => {
                res.send('Hey There :)');
            });
    });

    app.get('/fast', (req, res) => {
        res.send('This was fast.');
    })

    app.listen(3000);

    console.log(`Worker ${process.pid} started`);
}
