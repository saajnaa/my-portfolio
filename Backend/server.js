import express from "express"
import cors from "cors"

const app = express();
const PORT = 3000;


// middleware section
app.use(cors())
app.use(express.json())

 

// post request
app.post('/contact', (req, res)=>{


console.log(req.body)




})



app.listen(PORT, () => {

  console.log("running server on port:", PORT)


})