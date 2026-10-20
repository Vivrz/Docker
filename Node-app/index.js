const express = require('express');


const PORT = process.env.PORT || 8000;


const app = express();


app.get("/" , (req , res)=>{
    return res.json({
        status : "success",
        message : "Hello from express server"
    });
});

app.listen(PORT , ()=>{
    console.log(`Server is running on port ${PORT}`)
})


// Now to run this application we need a node version 
// which is v26.4.0 and we need to have npm installed of this version : 11.17.0


