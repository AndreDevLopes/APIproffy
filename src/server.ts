import express from 'express';

const app = express();


app.get("/users",(request, response)=>{

    response.send("hello Word");
})


const PORT = process.env.PORT || 3333;
app.listen(PORT, ()=>{
    console.log(`server run port ${PORT}`);
})