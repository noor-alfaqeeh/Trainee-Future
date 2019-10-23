import React, { Component } from "react";
import {Link} from 'react-router-dom'; 

export default class RegisterTrainee extends Component {
  state = {

  };

  change = event => {
    console.log("event.target.value :", event.target.value);
    this.setState({
      [event.target.name]: event.target.value

    });
  };

  addTrainee = () => {
    this.props.addT(this.state);
    this.setState({
      fullName: "",
      email: "",
      gender: "",
      university: "",
      password: "",
      img_path: "",
      field: ""
    });
  };

  render() {
    const { change, addTrainee } = this;

    return (
      <div className="row">
        <div className="row">
          <div className="input-field col s6">
            <input
              placeholder="fullName"
              name="fullName"
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

            <select
              className=" form-control sm-control"
              name="gender"
              onChange={change}
            >
              <option value="DEFAULT" disabled hidden>
                (M/F)
              </option>
              <option className="dropdown-item" value="M">
                M
              </option>
              <option value="F">F</option>
            </select>

            <select
              className=" form-control sm-control"
              name="university"
              onChange={change}
            >
              <option value="DEFAULT" disabled hidden>
                (uni)
              </option>
              <option className="dropdown-item" value="Uni1">
                uni1
              </option>
              <option value="uni2">uni2</option>
              <option value="uni3">uni3</option>
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
              onClick={addTrainee.bind(this)}
            >
              ADD
            </button> */}
            <Link to= "/student" className="btn btn-outline-success" onClick={addTrainee.bind(this)} >Regist</Link>

            <div>{this.state.email}</div>
          </div>
        </div>
      </div>
    );
  }
}