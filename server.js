import express from "express";
import http from "http";
import cors from 'cors'
import { Server } from 'socket.io';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST', 'PATCH', 'DELETE']
    }
});


const port = process.env.PORT;
server.listen(port, (err) => {
    if (err) {
        console.log('Error to listen ChatterUp App');
    } else {
        console.log('ChatterUp App is running on port ' + port);
    }
})