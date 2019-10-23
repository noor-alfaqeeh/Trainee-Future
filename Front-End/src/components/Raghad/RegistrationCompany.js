import React, { Component } from "react";
import {Link} from 'react-router-dom';

export default class RegisterCompany extends Component {
  state = {  };

  change = event => {
    console.log("event.target.value :", event.target.value);
    this.setState({
      [event.target.name]: event.target.value,
    
    });
  };

  addCompany = () => {
    this.props.addCompany(this.state);
    this.setState({
      name: "",
      email: "",
      password: "",
      website: "",
      city: "",
      location: "",
      comp_description: "",
      img_path: "",
      field: "",
      post: [
        {
          field: "",
          job_description: ""
        }
      ]
    });
  };

  render() {
    const { change, addCompany } = this;

    return (
      <div className="container">
        <div >
          <div >
            <input
              placeholder="name"
              name="name"
              type="text"
              className="validate"
              onChange={change}
            />
             <input
              placeholder="img_path"
              name="img_path"
              type="file"
              className="validate"
              onChange={change}
            />

            <input
              placeholder="email"
              name="email"
              type="text"
              className="validate"
              onChange={change}
            />
            <input
              placeholder="password"
              name="password"
              type="text"
              className="validate"
              onChange={change}
            />
            <input
              placeholder="website"
              name="website"
              type="text"
              className="validate"
              onChange={change}
            />

            <select
              className=" form-control sm-control"
              name="city"
              onChange={change}
            >
              <option value="DEFAULT" disabled hidden>
                (city)
              </option>
              <option className="dropdown-item" value="M">
                M
              </option>
              <option value="F">F</option>
            </select>

            <select
              className=" form-control sm-control"
              name="location"
              onChange={change}
            >
              <option value="DEFAULT" disabled hidden>
                (location)
              </option>
              <option className="dropdown-item" value="LO1">
                LO1
              </option>
              <option value="LO2">LO2</option>
              <option value="LO3">LO3</option>
            </select>

            <select
              className=" form-control sm-control"
              name="field"
              onChange={change}
            >
              <option value="DEFAULT" disabled hidden>
                (field)
              </option>
              <option className="dropdown-item" value="field1">
                field1
              </option>
              <option value="fiel2">field2</option>
              <option value="field3">field3</option>
            </select>
            {/* <button
              className="btn btn-outline-success"
              onClick={addCompany.bind(this)}
            >
              ADD
            </button> */}

            <Link
              to="/"
              onClick={addCompany.bind(this)}
            >
              ADD
            </Link>

            <div>{this.state.email}</div>
          </div>
        </div>
      </div>
    );
  }
}
