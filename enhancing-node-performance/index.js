import cluster from 'cluster';
import { cpus } from 'os';
import process from 'process';
import * as http from "http";

// Is the file being executed in master mode?
// if (cluster.isMaster) {
    // Cause index.js to be executed *again* but in child mode.
//     cluster.fork();
//     cluster.fork();
//     cluster.fork();
//     cluster.fork();
// }

const numCPUs = cpus().length;

if (cluster.isPrimary) {
    console.log(`Primary ${process.pid} is running`);

    // Fork workers.
    for (let i = 0; i < 4; i++) {
        cluster.fork();
    }

    cluster.on('exit', (worker, code, signal) => {
        console.log(`worker ${worker.process.pid} died`);
    });
}
else {
    // Im a child, Im going to act like a server.
    const express = require('express');
    const app = express();

    function doWork(duration) {
        const start = Date.now();
        while (Date.now() - start < duration) {
        }
    }

    app.get('/', (req, res) => {
        doWork(5000);
        res.send('Hey There :)');
    });

    app.get('/fast',(req,res)=>{
        res.send('This was fast.');
    })

    app.listen(3000);



    console.log(`Worker ${process.pid} started`);

}
