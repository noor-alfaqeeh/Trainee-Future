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

});
let Trainee = mongoose.model("trainee", traineesSchema);

//----------------------------------------COMPANY SCHEMA

let companiesSchema = new mongoose.Schema({

});
let Company = mongoose.model("company", companiesSchema);
