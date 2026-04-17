import dotenv from 'dotenv'
import express from "express";

dotenv.config()
const server = express();


const PORT = process.env.PORT || 3000;
server.listen(PORT, (error)=>{
    if(error){
       console.log(error)    
    }

    console.log(`Servidor rodando na porta ${PORT}`)
})