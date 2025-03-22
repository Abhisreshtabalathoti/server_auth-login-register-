// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const authRouter = require('./routes/authRoute')
// const app = express();

// //middle ware 
// app.use(express.json());

// app.use(cors());
// app.use(express.json());
// //route
// app.use('api/auth',authRouter);
// //mongo db connection
// const url='mongodb+srv://balathotiabhisreshta:abhisreshta@cluster0.omdndsw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
// app.use(express.json())//parsing
// mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{})
// .catch((err)=>{});

// //global error handler
// app.use((err,res ,req, next)=>{
//     err.statuCode=err.statuCode ||500;
//     err.status = err.status || 'error';
//     res.status(err.statuCode).json({
//         status:err.status,
//         message:err.message,
//     });
// });

// //server
// const port = 3000;
// app.listen(port,()=>{
//     console.log(`App running on ${port}`);
// })
require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");

// database connection
connection();

// middlewares
app.use(express.json());
app.use(cors());

// routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

const port = process.env.PORT || 8080;
app.listen(port, console.log(`Listening on port ${port}...`));