const cors = require('cors');
const express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser');


// file imports
const dbConnect = require('./config/connection')
const studentDataRoute = require('./routes/studentData.Route');

const app = express();

// Middlewares
app.use(cors({
    origin: [process.env.CLIENT_URL, 'http://localhost:3000', process.env.LOCAL_CLIENT_URL],
    methods: "GET,POST,PUT,DELETE,PATCH,OPTIONS",
    credentials: true,
}));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());



app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }))

// Connect to DB
dbConnect()

// Routes
app.use("/api/student-data", studentDataRoute);



const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});