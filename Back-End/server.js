const express = require("express");
const cors = require("cors");
const DB = require("./db");
const app = express();

app.use(express.json());
app.use(cors());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/", (req, res) => {
  res.json(`SERVER ON`);
});


// ___________________________ Read company__________________
app.get("/data", (req, res) => {
  DB.getCompany(result => {console.log('CALL BACK FROM SERVER');
  res.json(result);
});})


// ___________________________ ADD company__________________

app.post('/addComp',(req,res)=>{
  console.log("REQ.BODYCOMPANY", req.body);
  let box = req.body;
  DB.addCompany(comp =>{
    res.json(comp);
  }, box);
});

// app.post('/add', (req, res) =>{
//   let company = req.body;
//   console.log('COMPANY:', company);
//   DB.insert(result => {
//     console.log('CALL BACK FROM SERVER');
//     res.json(result)
//   },company);
//   });

// ___________________________ ADD Trainee__________________


app.post("/addT", (req, res) => {
  console.log("REQ.BODYTTTTTTTT", req.body);
  let box = req.body;
  DB.addT(Trainee => {
    res.json(Trainee);
  }, box);
});


//----------------------------ADD POST--------------------

app.put('/addPost', (req,res) =>{
  let box= req.body;
  console.log('BOXPOST', req.body)

  DB.addPost(box,(index)=>{
    console.log('iner poooooooooost');
    res.json(index);


  })
})

const PORT = 9000;
app.listen(PORT, () => console.log(`Server listening to ${PORT}`));






/*companies: [
  {
    id: 1,
    "name":"Dar alhandaseh",
    "email":"Dar_alhandaseh@gmail.com",
    "password":12345,
    "website":"Dar-alhandaseh.com",
    "city":"Amman",
    "comp_description" :" a company interested in engineering works",
    "field":"Engineering"          
   
  },
  {
    id: 2,
    "name":"Microsoft",
    "email":"Microsoft@gmail.com",
    "password":123456,
    "website":"Microsoft.com",
    "city":"Irbid",
    "Location":"The university street",
    "comp_description" :" a company works on softwares related to microsoft developing",          
    "field":"IT"
  },
  {
    id: 3,
    "name":"Orange",
    "email":"Orange@gmail.com",
    "password":1234567,
    "website":"Orange.org",
    "city":"Amman",
    "comp_description" :" a telecommunication company " ,
    "field":"Economy"    
  }
]
*/