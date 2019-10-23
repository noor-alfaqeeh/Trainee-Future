import React, { Component } from "react";
import axios from 'axios';

export default class AddCopm extends Component {
  state = {

  };

  change = event => {
    console.log("event.target.value :", event.target.value);
    this.setState({
      [event.target.name]: event.target.value,
    });
  };




//   addNewPost = () => {
//     console.log('this.state.field :', this.state.field);

//     this.props.addPost(this.state);

//     this.setState({
//       field: "",
//       job_description: "",
     
//     });
//   };
  //-------------RAGHAD


  addPost = async() => {
    let company_info={
        _id :"5daffec164f44117d59b2614",
        name : "noor",
        email : "awni@yahoo.com",
        website : "8ilu@@@@",
        city : "F",
        location : "LO3",
        img_path : "C:\\fakepath\\1.png",
        field : "field3",
        password : "00000",
        post : [],
        __v: 0
    }
   await company_info.post.push(this.state)

console.log('company_info', company_info)

    axios.put('http://localhost:9000/addPost', company_info )
    .then(({data}) => {
console.log('company_info', data)

    //   this.setState({ post: {array} });
     });
  }


  //----------------------------




  render() {
    const { change, addPost } = this;

    return (
      <div className="container">
        <input
          type="text"
          value={this.state.field}
          onChange={change}
          name="job_description"
          placeholder="Dis"
        ></input>
        <select
          className=" form-control sm-control"
          name="field"
          onChange={change}
        >
          <option value="DEFAULT" disabled hidden></option>
          <option className="dropdown-item" value="One">
            One
          </option>
          <option className="dropdown-item" value="Two">
            Two
          </option>
        </select>

        <button
          className="btn btn-outline-success"
          onClick={addPost.bind(this)}
        >
          ADD
        </button>

        <div>
          <p>{this.state.field}</p>
          <p>{this.state.job_description}</p>
        </div>
      </div>
    );
  }
}