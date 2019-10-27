import React, { Component } from 'react';
import Logo from './com.jpg';
import {Link} from 'react-router-dom'; 


export default class Card extends Component {
 
    render() {
<<<<<<< HEAD
       const {_id,name,email,website,city,Location,comp_description,field}= this.props.company;
=======
       const {id,name,email,website,city,Location,description,field}= this.props.company;
>>>>>>> add_form
        return(
           <div>
 <div className="card mt-4">
  <h4 className="card-header text-center">{name}</h4>
  <div className="row no-gutters">
    <div className="col-md-4">
      <img src={Logo} className="card-img img-thumbnail float-left" alt="company logo"/>
    </div>
  <div className="card-body">
    <h5 className="card-title">Description</h5>
<<<<<<< HEAD
    <p className="card-text">{comp_description}</p>
    <h5 className="card-title">The Field</h5>
    <p className="card-text">{field}</p>
    <Link to= "/cardDetails" className="btn btn-primary float-right" onClick={this.props.details.bind(this,_id)} >See Details</Link>
=======
    <p className="card-text">{description}</p>
    <h5 className="card-title">The Field</h5>
    <p className="card-text">{field}</p>
    <Link to= "/cardDetails" className="btn btn-primary float-right" onClick={this.props.details.bind(this,id)} >See Details</Link>
>>>>>>> add_form
  </div>
</div>
</div>
           </div>
        )
    }
  }
