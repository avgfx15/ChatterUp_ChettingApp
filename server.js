import express from "express";
import http from "http";
import cors from 'cors'
import { Server } from 'socket.io';
import dotenv from 'dotenv';
import connectDB from "./db.js";
import userRouter from "./routes/userRoutes.js";
dotenv.config();

const app = express();

//// Cors policy
app.use(cors());


//// Get JSON Data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//// View Engine Set 
app.set('view engine', 'ejs');
app.set('views', './views');

// ////  Configure Static html File in public Folder with index.html
app.use(express.static("public"));

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST', 'PATCH', 'DELETE']
    }
});

//// User Routes

app.use('/api/users', userRouter)


const port = process.env.PORT;
server.listen(port, (err) => {
    if (err) {
        console.log('Error to listen ChatterUp App');
    } else {
        console.log('ChatterUp App is running on port ' + port);
        connectDB();
    }
})