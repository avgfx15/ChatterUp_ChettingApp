import express from "express";
import http from "http";
import cors from 'cors'
import { Server } from 'socket.io';
import dotenv from 'dotenv';
import connectDB from "./db.js";
dotenv.config();

const app = express();

//// Cors policy
app.use(cors());

//// Get JSON Data
app.use(express.json());

////  Configure Static html File in public Folder with index.html
app.use(express.static("public"));


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
        connectDB();
    }
})