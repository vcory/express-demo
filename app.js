const express = require ('express')
const path = require('path')
const app = express();

app.use(express.static(path.join(__dirname, "public")))





app.get('/Code',(req,res) => {

console.log('<h1>Ooooh coding!</h1>')
    
    })


app.get('/birthdayCake',(req,res) => {

res.send({name: "Vic", age: 27})
        
    })

    app.listen(3002, () => {
        console.log("server listening on port 3002")
    })

