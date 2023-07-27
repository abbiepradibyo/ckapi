import dotenv from "dotenv";
dotenv.config()

import express from "express";
import bodyparser from "body-parser";
import routesUser from "./routes/userRoutes.js";
import routesAuth from "./routes/authRoutes.js";
import { connect } from "./config/db.js";


const app=express();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}))

app.use("/api",routesUser);
app.use("/api",routesAuth);

app.listen(process.env.PORT,async()=>{
    console.log("Server is running");
    await connect();
    console.log("DB is running");
})