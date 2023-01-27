const express = require('express');
const cors = require('cors');
const blogRouter = require('./routes/blog.routes');
const connect = require('./database/connect');



const app = express();
app.use(cors());
app.use(express.json());
app.use('/blog',blogRouter);

const PORT = process.argv[2] || 8080;


connect().then((res)=>{
    app.listen(PORT,()=>{
        console.log(`Server Listening at ${PORT}`);
    })
}).catch((err)=>{
    console.log(err.message);
})

