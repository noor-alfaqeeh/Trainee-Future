const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/trainee-future", {
  useNewUrlParser: true,
});
const db = mongoose.connection;
db.on("error", function() {
  console.log("mongoose connection error");
  console.log("____________________________");
});
db.once("open", function() {
  console.log("mongoose connected successfully");
  console.log("____________________________");
});

//-----------------------------------TRAINEE SCHEMA
let traineesSchema = new mongoose.Schema({
  fullName:String,
  email:String,
  gender:String,
  university:String,
  password:String,
  img_path:String,
  field:String,
    
    comp_info:[{companiesSchema}]

});
let Trainee = mongoose.model("trainee", traineesSchema);

//----------------------------------------COMPANY SCHEMA

let companiesSchema = new mongoose.Schema({
  name:String,
  email:String,
  password:String,
  website:String,
  city:String,
  location:String,
  comp_description:String,
  field:String,


   post:[{
     field:String,
     job_description:String,
       
          comments:[{body:String}]

          }]

});
let Company = mongoose.model("company", companiesSchema);
