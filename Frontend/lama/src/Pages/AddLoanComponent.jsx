import React, { Fragment, useEffect, useState } from "react";
import "./AddCustomerComponent.css";
import axios from "axios";
import {privateAxios} from '../services/helper';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css'; 

import { useHistory } from "react-router-dom";

function AddLoanComponent(){

  const history = useHistory()

  const [loanId, setLoanId] = useState("")
  const [loanType, setLoanType] = useState("");
  const [duration, setDuration] = useState("");
  const [error, setError] = useState(null)
  const [isCreated, setIsCreated] = useState(false)

  const categories = [
    "Appliances",
    "Furniture"
  ];

  useEffect(() => {
    if(isCreated){
      toast("Loan Created Successfully",
         {position: toast.POSITION.BOTTOM_CENTER})
      setIsCreated(false)
      history.push("/loanmap")
    }
    if(error){
      toast.error(error,
      {position: toast.POSITION.BOTTOM_CENTER})
      setError(null)
    }
  },[isCreated,error])

  const createLoanSubmitHandler = async (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("loanId", loanId);
    myForm.set("loanType", loanType);
    myForm.set("durationInMonths", duration);


    const config = {
      headers: {
          "Content-Type": "application/json",
      },
  };

    await privateAxios.post(`/admin/loan/`, myForm, config)
    .then((response) => {
      console.log(response.data)
      setIsCreated(true)
    })
    .catch((err) => {
      console.log(err.message)
      setError(err.message)
    })
    
    
  };

  return (
    
    <Fragment>
      <div className="dashboard">
        <div className="newProductContainer">
          <form
            className="createProductForm"
            encType="multipart/form-data"
            onSubmit={createLoanSubmitHandler}
          >
            <h1>Add Loan</h1>

            <div>
              {/* <SpellcheckIcon /> */}
              <input
                type="number"
                placeholder="Loan Id"
                required
                value={loanId}
                onChange={(e) => setLoanId(e.target.value)}
              />
            </div>
         

            

           

            <div>
              {/* <AccountTreeIcon /> */}
              <select onChange={(e) => setLoanType(e.target.value)}>
                <option value="">Choose Loan Type</option>
                {categories.map((cate) => (
                  <option key={cate} value={cate}>
                    {cate}
                  </option>
                ))}
              </select>
            </div>

            <div>
              {/* <StorageIcon /> */}
              <input
                type="number"
                placeholder="Duration"
                value={duration}
                required
                onChange={(e) => setDuration(e.target.value)}
              />
            </div>


           

          <button
              id="createProductBtn"
              type="submit"
            >
              Create
            </button>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default AddLoanComponent;