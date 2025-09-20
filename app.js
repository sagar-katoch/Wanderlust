const express= require("express");
const app= express();
const mongoose= require("mongoose");
const Listing= require("./models/listings.js")

main().then(()=>{
    console.log("succesfully connected to the database");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/wanderlust");

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}


app.get("/",(req,res)=>{
    res.send("hi i am root");
})

app.get("/testListing",async (req,res)=>{

let sampleListing = new Listing({
    title:"My Villa",
    description:"By the Beach",
    price:10000,
    location:"Calangute,Goa",
    country:"India"
})

await sampleListing.save();
console.log("sample was saved");
res.send("successfull testing ");

})
app.listen(8080,()=>{
    console.log("server succesfully running on the port No.8080");

})