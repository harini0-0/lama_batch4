import React, { Fragment, useEffect, useState } from "react";
import "./AddCustomerComponent.css";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

import { useHistory } from "react-router-dom";
import { privateAxios } from "../services/helper";

function AddItemMaster(){
  const history = useHistory()

  const [itemId, setItemId] = useState("");
  const [itemDescription, setItemDescription] = useState("");
  const [issueStatus, setIssueStatus] = useState('');
  const [itemMake, setItemMake] = useState("");
  const [itemCategory, setItemCategory] = useState("");
  const [itemValuation, setItemValuation] = useState("");
  const [error, setError] = useState(null)
  const [isCreated, setIsCreated] = useState(false)

  useEffect(() => {
    if(isCreated){
      toast("Item Created Successfully",
         {position: toast.POSITION.BOTTOM_CENTER})
      setIsCreated(false)
      history.push("/itemmap")
    }
    if(error){
      toast.error(error,
      {position: toast.POSITION.BOTTOM_CENTER})
      setError(null)
    }
  },[isCreated, error])

  const createItemSubmitHandler = async (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("itemId", itemId);
    myForm.set("itemDescription", itemDescription);
    myForm.set("itemMake", itemMake);
    myForm.set("issueStatus", issueStatus);
    myForm.set("itemCategory", itemCategory);
    myForm.set("itemValuation", itemValuation);

    const config = {
      headers: {
          "Content-Type": "application/json",
      },
  };

    await privateAxios.post(`/admin/items`, myForm, config)
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
        {/* {console.log("toUpdateId", toUpdateId)} */}
            <div className="dashboard">
                <div className="newProductContainer">
                    <form
                        className="createProductForm"
                        encType="multipart/form-data"
                        onSubmit={createItemSubmitHandler}
                    >
                    <h1>Add Item</h1>
    
                    <div>
                        {/* <SpellcheckIcon /> */}
                        <input
                            type="number"
                            placeholder="Item Id"
                            value={itemId}
                            onChange={(e) => setItemId(e.target.value)}
                        />
                    </div>

                    <div>
                        {/* <SpellcheckIcon /> */}
                        <input
                            type="text"
                            placeholder="Item Description"
                            required
                            value={itemDescription}
                            onChange={(e) => setItemDescription(e.target.value)}
                        />
                    </div>
    
                    <div>
                        {/* <SpellcheckIcon /> */}
                        <input
                            type="text"
                            placeholder="Item Category"
                            required
                            value={itemCategory}
                            onChange={(e) => setItemCategory(e.target.value)}
                        />
                    </div>
    
                    <div>
                        {/* <SpellcheckIcon /> */}
                        <input
                            type="text"
                            placeholder="Issue Status"
                            required
                            value={issueStatus}
                            onChange={(e) => setIssueStatus(e.target.value)}
                        />
                    </div>
    
                    <div>
                        {/* <SpellcheckIcon /> */}
                        <input
                            type="text"
                            placeholder="Item Make"
                            required
                            value={itemMake}
                            onChange={(e) => setItemMake(e.target.value)}
                        />
                    </div>
    
                    <div>
                        {/* <StorageIcon /> */}
                        <input
                            type="number"
                            placeholder="Item Valuation"
                            value={itemValuation}
                            required
                            onChange={(e) => setItemValuation(e.target.value)}
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

export default AddItemMaster;