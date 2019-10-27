import React, { Component } from 'react';
import Logo from '../com.jpg';



export default class CardDetails extends Component {
    
    render() {
<<<<<<< HEAD
      //  const {name,email,website,city,Location,comp_description,field}= this.props.companies[0];
    
      //  console.log(this.props.companies)
=======
       const {id,name,email,website,city,Location,description,field}= this.props.companies[0];
    
       console.log(this.props.companies)
>>>>>>> add_form

        return(
            <div>
                <h1>Card Details</h1>
                <div className="card mt-4">
<<<<<<< HEAD
  {/* <h4 className="card-header text-center">{name}</h4> */}
  <div className="row no-gutters">
    <div className="col-md-4">
      {/* <img src={Logo} className="card-img  float-left" alt="company logo"/> */}
    </div>
  <div className="card-body">
  <h5 className="card-title">Email</h5>
    {/* <p className="card-text">{email}</p> */}
    <h5 className="card-title">Website</h5>
    {/* <p className="card-text">{website}</p> */}
    <h5 className="card-title">City</h5>
    {/* <p className="card-text">{city}</p> */}
    <h5 className="card-title">Description</h5>
    {/* <p className="card-text">{comp_description}</p> */}
    <h5 className="card-title">The Field</h5>
    {/* <p className="card-text">{field}</p> */}
=======
  <h4 className="card-header text-center">{name}</h4>
  <div className="row no-gutters">
    <div className="col-md-4">
      <img src={Logo} className="card-img  float-left" alt="company logo"/>
    </div>
  <div className="card-body">
  <h5 className="card-title">Email</h5>
    <p className="card-text">{email}</p>
    <h5 className="card-title">Website</h5>
    <p className="card-text">{website}</p>
    <h5 className="card-title">City</h5>
    <p className="card-text">{city}</p>
    <h5 className="card-title">Description</h5>
    <p className="card-text">{description}</p>
    <h5 className="card-title">The Field</h5>
    <p className="card-text">{field}</p>
>>>>>>> add_form
   
</div>
</div>


           </div>
           </div>
        )
    }
  }
