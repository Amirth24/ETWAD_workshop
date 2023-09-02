const express = require('express');
const cors =  require('cors');
const mongoose = require('mongoose');
const router = require('./router/router');


const app = express();

app.use(express.json());
app.use(cors());



const MONGO_URI = "mongodb://127.0.0.1:27017/aucse";

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    
}).then(() => console.log("Database Connected..."))
    .catch((e) => console.log("Error "+ e));


app.use('/aliens', router);

app.listen(3000, () => {
    console.log("Server Listening at http://localhost:" + 3000);
});

