import mongoose from "mongoose";
import express from "express";
import * as dotEnv from 'dotenv'
import bodyParser from 'body-parser';
import { router as invoiceRouter} from "./routes/invoice.js";

// Connecting to DB
mongoose.connect('mongodb+srv://piyushkhandelwal:ov1CbHjR5djH7Dxf@cluster0.tpgjbwl.mongodb.net/Assignment')
.then(()=>console.log('DB CONNECTED...'))
.catch((err)=>console.log(err));

// configurations
const app = express()
dotEnv.config() // to ger environment variables


// middlewares
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));

// routes
app.use('/api', invoiceRouter)

// Listening
const port = process.env.PORT || 1202;
app.listen(port, () => console.log(`Server is Up and Running on http://localhost:${port}`));


