import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App2.css";

function Add() {
  const [inputData, setInputData] = useState({
    carname: "",
   price: "",
   usedfor: "",
  });

  const naviget = useNavigate();

  let handleSubmit = (e) => {
    e.preventDefault();
    let result = validateValues(inputData);
    // setSubmitting(true);

    if (result === true) {
      axios
        .post("http://localhost:2221/car", inputData)
        .then((res) => {
          alert("Data added Successfully");
          naviget("/");
          console.log(res.data);
        })
        .catch((err) => console.log(err));
    } else {
      alert("Please Enter the Valid Inputs!!!");
    }
  };

  // validation Part for add user for student management system
  // const [errors, setErrors] = useState({});
  // const [submitting, setSubmitting] = useState(false);

  const validateValues = (inputData) => {
    if (inputData.carname.length === 0) {
      alert("Please enter  Name !!! ");
      return false;
    
    } else if (inputData.price.length === 0) {
      alert("Please enter price !!!");
      return false;
    } else if (inputData.usedfor.length === 0) {
      alert("Please Enter the used time period!!!");
      return false;
    } 
    
    else {
      return true;
    }
  };

  return (
    <div
      id="add2"
      className="d-flex w-100 vh-100 justify-content-center align-items-center "
    >
      <div className="w-50 border bg-light p-5">
        <form onSubmit={handleSubmit}>
          <h1 title="heading">ADD CAR DATA</h1>
          <div>
            <lable htmlFor="carname">CarName</lable>
            <input
              type="text"
              name="carname"
              className="form-control"
              onChange={(e) =>
                setInputData({ ...inputData, carname: e.target.value })
              }
            />
          </div>
          

          <div>
            <lable htmlFor="price">Price :</lable>
            <input
              type="text"
              name="price"
              className="form-control"
              onChange={(e) =>
                setInputData({ ...inputData, price: e.target.value })
              }
            />
          </div>

          <div>
            <lable htmlFor="usedfor">usedfor :</lable>
            <input
              type="text"
              name="usedfor"
              className="form-control"
              onChange={(e) =>
                setInputData({ ...inputData, usedfor: e.target.value })
              }
            />
          </div>
          
         
          
          <br />

          <button className="btn btn-info " name="sbtn">Submit</button>
        </form>

        
      </div>
    </div>
  );
}

export default Add;
  