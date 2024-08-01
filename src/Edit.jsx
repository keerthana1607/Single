import React, { useEffect, useState }from 'react'
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";

function Edit() {
    const { id }= useParams();
    const [data, setData]= useState([]);
    const navigate= useNavigate();
    useEffect(()=>{
        axios
        .get("http://localhost:2221/car/" + id)
        .then((response)=> setData(response.data))
        .catch((err)=> console.log(err));

    },[]);

    let handleSubmit = (e) => {
        e.preventDefault();
        axios.put("http://localhost:2221/car" , data).then((res)=>{
            alert("User updated successfully");
            navigate("/");
        });
    };

  return (
    <div>
      <div
        id="edit2"
        className="d-flex w-100 vh-100 justify-content-center align-items-center "
      >
        <div className="w-50 border bg-light p-5">
          <form onSubmit={handleSubmit}>
            <h1>Used Car Management System</h1>
            <div>
              <lable htmlFor="id">ID :</lable>
              <input
                type="text"
                disabled
                name="id"
                className="form-control"
                value={data.id}
                //onChange={(e) => setData({ ...data, name: e.target.value })}
              />
            </div>

            <div>
              <lable htmlFor="carname">CarName :</lable>
              <input
                type="text"
                name="carname"
                className="form-control"
                value={data.carname}
                onChange={(e) => setData({ ...data, carname: e.target.value })}
              />
            </div>
           
            

            <div>
              <lable htmlFor="price">Price :</lable>
              <input
                type="text"
                name="price"
                className="form-control"
                value={data.price}
                onChange={(e) => setData({ ...data, price: e.target.value })}
              />
            </div>

            <div>
              <lable htmlFor="usedfor">usedfor :</lable>
              <input
                type="text"
                name="usedfor"
                className="form-control"
                value={data.usedfor}
                onChange={(e) => setData({ ...data, usedfor: e.target.value })}
              />
            </div>
            
        
            <br />

            <button className="btn btn-info ">Update</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Edit
