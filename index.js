const express = require('express');
const app = express();
const { db } = require('./config/db');

 const userRoutes = require('./routes/userRoutes' )

db.connect();

app.use(express.json());



app.use("/api/user",userRoutes);



app.listen(8081, () => {
    console.log('running');
})