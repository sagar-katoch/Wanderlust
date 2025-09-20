const mongoose = require("mongoose");

const Schema= mongoose.Schema;

const listingSchema= new Schema({
    title: {
       type: String,
required:true,
    },

    description:{
        type:String,
        
    },
   image:{
    type:String,
    default:"https://plus.unsplash.com/premium_photo-1661876449499-26de7959878f?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        set:(v)=>v===""?"https://plus.unsplash.com/premium_photo-1661876449499-26de7959878f?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D":v,
   },
   price: Number,
   location:String,
   country:String, 

})


const Listing= mongoose.model("Listing",listingSchema);
module.exports=Listing;


