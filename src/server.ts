import express from 'express';

const app = express();

app.use(express.json());

app.get("/",(request, response)=>{
    response.json({message: "Hello Word"})
});


const PORT = process.env.PORT || 3333;

app.listen(PORT, ()=>{
    console.log(`server run port ${PORT}`);
})