import express from "express"

 
const PORT = process.env.PORT || 3000;

 const app = express();

 app.get("/" , (req , res) => {




res.send("wah bhai tu ne kardiya")

console.log(req)





 } )

 app.listen(PORT , ()=>{

console.log("running server on port:" , PORT)


    
 } )