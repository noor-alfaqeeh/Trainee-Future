const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/trainee-future", {
  useNewUrlParser: true
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
//-----------------------------------ALL SCHEMA

let allSchema = new mongoose.Schema({
  trainees: [
    {
      fullName: String,
      email: String,
      gender: String,
      university: String,
      password: String,
      img_path: String,
      field: String
    }
  ],

  companies: [
    {
      name: String,
      email: String,
      password: String,
      website: String,
      city: String,
      location: String,
      comp_description: String,
      img_path: String,
      field: String,

      post: [
        {
          field: String,
          job_description: String,

          comments: [{ body: String }]
        }
      ]
    }
  ]
});
let AllSchema = mongoose.model("allschema", allSchema);
