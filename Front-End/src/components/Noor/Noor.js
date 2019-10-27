import React from 'react';
import {BrowserRouter as Router, Route,Link} from 'react-router-dom';
<<<<<<< HEAD
import axios from 'axios';
=======
>>>>>>> add_form
import Search from './search';
import List from './list';
import CardDetails from './page/cardDetails';



class Student extends React.Component {
    state = {
<<<<<<< HEAD
      companies: [  ]
=======
      companies: [
        {
          id: 1,
          name:"Dar alhandaseh",
          email:"Dar_alhandaseh@gmail.com",
          password:12345,
          website:"Dar-alhandaseh.com",
          city:"Amman",
          description :" a company interested in engineering works",
          field:"Engineering"          
         
        },
        {
          id: 2,
          name:"Microsoft",
          email:"Microsoft@gmail.com",
          password:123456,
          website:"Microsoft.com",
          city:"Irbid",
          Location:"The university street",
          description :" a company works on softwares related to microsoft developing",          
          field:"IT"
        },
        {
          id: 3,
          name:"Orange",
          email:"Orange@gmail.com",
          password:1234567,
          website:"Orange.org",
          city:"Amman",
          description :" a telecommunication company " ,
          field:"Economy"    
        }
      ]
>>>>>>> add_form
    };
    

    details=(id) => {
      this.setState({companies: [...this.state.companies.filter(company => company.id === id)]});
    }


<<<<<<< HEAD
  // ___________________________ Read__________________

    componentDidMount(){
      axios.get('http://localhost:9000/data')
      .then(({data})=>{
        // console.log(data)
        this.setState({
          companies : data
        })
      })
    }


// ___________________________ ADD company__________________
    
    addCompany = (name,email,website,city,comp_description,field) => {
   
      axios.post(`http://localhost:9000/add`,{name,email,website,city,comp_description,field})
      .then((res)=>{
        this.setState({
          companies : res.data
        })
        //console.log('id' ,ID);
      })
  
    .catch(error => {
      // handle error
      console.log(error);
    });
  
    };

// __________________________________________________________

    render() {
        
        return (
         
          <div>
            

           
                <h1>Student page</h1>
                <Search/>
            <List  companies={this.state.companies} details={this.details} />
             
           
           
                <CardDetails companies={this.state.companies} details={this.details}/>
        
            
          </div>
         
=======
    render() {
        
        return (
          <Router>
          <div>
            

            <Route exact path='/' render={(props)=>(
              <React.Fragment>
                <h1>Student page</h1>
                <Search/>
            <List  companies={this.state.companies} details={this.details} />
              </React.Fragment>
            )}/>
            <Route path="/cardDetails" render={(props)=>(
              <React.Fragment>
                <CardDetails companies={this.state.companies} details={this.details}/>
              </React.Fragment>
            )} />    
            
          </div>
          </Router>
>>>>>>> add_form
        );
      }
    }
    
    export default Student;
    

