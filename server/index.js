import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import userRoutes from './routes/users.js'

dotenv.config();
const app=express();
app.use(express.json({limit:"30mb",extended:true}))
app.use(express.urlencoded({limit:"30mb",extended:true}))
app.use(cors());

//app.get('/',(req, res)=>{
    // res.send("This is a stack overflow clone Api")
//})
app.use('/user',userRoutes)

const PORT=process.env.PORT || 5000

const CONNECTION_URL="mongodb://localhost:27017"

mongoose.connect("mongodb+srv://admin:Nullclass@cluster0.apvrdln.mongodb.net/?retryWrites=true&w=majority")
 .then(() => app.listen(PORT, () => {console.log(`server running on port ${PORT}`)}))
 .catch((error) => console.log(error))
