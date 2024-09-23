const express = require('express')
const app = express()
const port = 8000
const mongoose = require('mongoose');
app.use(express.urlencoded({ extended: true }));
const Mydata = require("./modules/schema");


app.get('/', (req, res) => {
    res.sendFile("./index.html", {root: __dirname})
})


mongoose.connect("mongodb+srv://aymancomeg2005:PlA7gWziznXw8w9O@cluster0.wjpyq.mongodb.net/all-data?retryWrites=true&w=majority&appName=Cluster0").then(() => {
    app.listen(port, () => {
      console.log(`http://localhost:${port}`);
    });
   })
   .catch((err) => {
     console.log(err);
   }); 



   app.post("/", (req, res) => {
    console.log(req.body)

    const mydata = new Mydata(req.body);

    mydata.save();

    res.redirect("/")
  });