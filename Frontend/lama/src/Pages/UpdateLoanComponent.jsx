import React, { Fragment, useEffect, useState } from "react";
import "./AddCustomerComponent.css";
import axios from "axios";
import {privateAxios} from '../services/helper';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css'; 

import { useHistory, useParams } from "react-router-dom";

function UpdateLoanComponent(){

  const history = useHistory()
  const id = useParams()
  const toUpdateId = id.id



  const [loanId, setLoanId] = useState("")
  const [loanType, setLoanType] = useState("");
  const [duration, setDuration] = useState("");
  const [error, setError] = useState(null)
  const [isUpdated, setIsUpdated] = useState(false)
  const [loan, setLoan] = useState(null)
 
  

  const categories = [
    "Appliances",
    "Furniture"
  ];

  const getLoan = async (id) => {
    await privateAxios.get("/admin/loan/"+id)
    .then((response) => {
        setLoan(response.data)
        console.log(response.data)
    })
    .catch((err) => {
        setError(err.message)
        console.log(err.message)
    })
  }

  useEffect(() => {
    if(loan==null)
        getLoan(toUpdateId)
    if(loan){
        setLoanId(loan.loanId)
        setLoanType(loan.loanType)
        setDuration(loan.durationInMonths)
        
    }
    if(isUpdated){
      toast("Loan Updated Successfully",
         {position: toast.POSITION.BOTTOM_CENTER})
      setIsUpdated(false)
      history.push("/loanmap")
    }
    if(error){
      toast.error(error,
      {position: toast.POSITION.BOTTOM_CENTER})
      setError(null)
    }
  },[isUpdated,error,loan,toUpdateId])

  const updateLoanSubmitHandler = async (e) => {
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

    await privateAxios.put(`/admin/loan/`+loanId, myForm, config)
    .then((response) => {
      console.log(response.data)
      setIsUpdated(true)
    })
    .catch((err) => {
      console.log(err.message)
      setError(err.message)
    })
  };
  return (
    
    <Fragment>
        {console.log("toUpdateId",toUpdateId)}
      <div className="dashboard">
        <div className="newProductContainer">
          <form
            className="createProductForm"
            encType="multipart/form-data"
            onSubmit={updateLoanSubmitHandler}
          >
            <h1>Update Loan</h1>

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
              Update
            </button>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default UpdateLoanComponent;