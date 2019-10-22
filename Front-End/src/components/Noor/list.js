import React, { Component } from 'react';
import Card from './card';

export default class List extends Component {
 
    render() {
        // console.log(this.props.company);
        const {companies}=this.props;
        return companies.map((company)=> (<Card company={company} key={company.id} details={this.props.details} />))
            
            
            
       
    }
  }


  


