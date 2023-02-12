import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

const app=express();
app.use(express.json({limit:"30mb",extended:true}))
app.use(express.urlencoded({limit:"30mb",extended:true}))
app.use(cors());

app.get('/',(req, res)=>{
     res.send("This is a stack overflow clone Api")
})
const PORT=process.env.PORT || 5000
const CONNECTION_URL="mongodb://localhost:27017"

mongoose.connect( "mongodb+srv://admin:Mongodb@99@stack-overflow-clone.g4jgtqb.mongodb.net/?retryWrites=true&w=majority")
    .then(() => app.listen(PORT, () => {console.log(`server running on port ${PORT}`)}))
    .catch((error) => console.log(error))
