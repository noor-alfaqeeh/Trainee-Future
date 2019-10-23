import React from 'react';
import {BrowserRouter as Router, Route,Link} from 'react-router-dom';
import axios from 'axios';
import Search from './search';
import List from './list';
import CardDetails from './page/cardDetails';



class Student extends React.Component {
    state = {
      companies: [  ]
    };
    

    details=(id) => {
      this.setState({companies: [...this.state.companies.filter(company => company.id === id)]});
    }


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
         
        );
      }
    }
    
    export default Student;
    

