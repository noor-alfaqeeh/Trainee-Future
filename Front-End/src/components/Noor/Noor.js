import React from 'react';
import {BrowserRouter as Router, Route,Link} from 'react-router-dom';
import Search from './search';
import List from './list';
import CardDetails from './page/cardDetails';



class Student extends React.Component {
    state = {
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
    };
    

    details=(id) => {
      this.setState({companies: [...this.state.companies.filter(company => company.id === id)]});
    }


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
        );
      }
    }
    
    export default Student;
    

