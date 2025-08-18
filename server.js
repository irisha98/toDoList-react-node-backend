const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config();
mongoose.set('strictQuery', false);

const app = express();

const routes = require('./ListRoutes'); 

const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(cors()); 

mongoose
    .connect(process.env.MONGODB_LINK)
    .then(() => console.log('WE ARE CONNECTED TO MONGO'))
    .catch((err) => console.log(err))

app.use(routes)

app.listen(PORT, () => {
    console.log('Server is running on port', PORT);

})

