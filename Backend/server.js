require('dotenv').config();
const express = require('express')
const cors = require("cors")
const app = express()
const appRoute = require("./routes/appRoutes");
const uploadRoute = require("./routes/imageRoutes")
const dbConnection = require('./dbConnection/dbConnection')

var corsOptions = {
    origin: 'http://localhost:5173',
    methods : "GET, POST",
    credentials : true,
    optionsSuccessStatus: 200 
  }


app.use(cors(corsOptions));
app.use('/upload', express.static('upload'));
app.use('/upload', uploadRoute);


app.use(express.json());
app.use('/authroutes', appRoute)


dbConnection()
.then(()=>{
    console.log(`Database connect successfully to the server`);
})
.catch((error)=>{
    console.log(`Database connection failed with server ${error}`); 
})


const port = process.env.PORT;

app.listen(port, ()=>{
    console.log(`Server running on http://127.0.0.1:${port}`);   
})