require('dotenv').config();
require('./config/connection');
const app = require("./app");
const port = process.env.PORT 

app.listen(port,()=>{
    console.log(`connected to the port ${port}`);
})