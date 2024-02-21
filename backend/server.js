import express from 'express'
import {config} from 'dotenv'
import cors from 'cors'
import productRouter from './routes/products.js'
import bcrypt from 'bcrypt'
import cookieParser from 'cookie-parser'
import jwt from 'jsonwebtoken'
config()


const PORT=process.env.PORT || 7890

const app=express()

app.use(cors())

app.use(express.json())

app.use(express.static('views'))

// app.use(cookieParser())

app.use('/products',productRouter)

app.listen(PORT,()=>{
    console.log(`This is running on http://localhost:${PORT}`);
})

