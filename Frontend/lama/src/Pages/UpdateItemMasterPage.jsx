import React, { Fragment, useEffect, useState } from "react";
import "./AddCustomerComponent.css";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useHistory, useParams } from "react-router-dom";
import { privateAxios } from "../services/helper";

function UpdateItemMaster(){
    //   const dispatch = useDispatch();
    //   const alert = useAlert();
    const history = useHistory()
    const id = useParams()
    const toUpdateId = id.id
    // console.log("I am printing here",id);
    
    //   const { loading, error, success } = useSelector((state) => state.newProduct);
    
    const [itemId, setItemId] = useState();
    const [itemDescription, setItemDescription] = useState("");
    const [issueStatus, setIssueStatus] = useState('');
    const [itemMake, setItemMake] = useState("");
    const [itemCategory, setItemCategory] = useState("");
    const [itemValuation, setItemValuation] = useState();
    const [error, setError] = useState(null)
    const [isUpdated, setIsUpdated] = useState(false)
    const [item, setItem] = useState(null)
    
    const getItem = async (id) => {
        const response = await privateAxios.get("/admin/items/"+id)
        .then((response) => {
            setItem(response.data)
            console.log(response.data)
        })
        .catch((err) => {
            setError(err.message)
            console.log(err.message)
        })
    }
    
    useEffect(() => {
        if(item==null)
            getItem(toUpdateId)
        if(item){
            setItemId(item.itemId)
            setItemDescription(item.itemDescription)
            setIssueStatus(item.issueStatus)
            setItemCategory(item.itemCategory)
            setItemValuation(item.itemValuation)
            setItemMake(item.itemMake);
        }
        if(isUpdated){
            toast("Item Updated Successfully",
                {position: toast.POSITION.BOTTOM_CENTER})
            setIsUpdated(false)
            history.push("/itemmap")
        }
        if(error){
            toast.error(error,
            {position: toast.POSITION.BOTTOM_CENTER})
            setError(null)
        }
      },[isUpdated, error, item, toUpdateId])
    
    const updateItemSubmitHandler = async (e) => {
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
    
        const response = await privateAxios.put("/admin/items/"+itemId, myForm, config)
        .then((response) => {
            console.log(response.data)
            setIsUpdated(true)
        })
        .catch((err) => {
            console.log(err.message)
            setError(err.message)
        })
        
        // dispatch(createProduct(myForm));
    };
    
    //   const createProductImagesChange = (e) => {
    
    //     //Array from creates a copy of  the array
    //     const files = Array.from(e.target.files);
    
    //     setImages([]);
    //     setImagesPreview([]);
    
    //     files.forEach((file) => {
    //       const reader = new FileReader();
    
    //       reader.onload = () => {
    //         if (reader.readyState === 2) {
    //           setImagesPreview((old) => [...old, reader.result]);
    //           setImages((old) => [...old, reader.result]);
    //         }
    //       };
    
    //       reader.readAsDataURL(file);
    //     });
    //   };
    
    return (    
        <Fragment>
        {console.log("toUpdateId", toUpdateId)}
            <div className="dashboard">
                <div className="newProductContainer">
                    <form
                        className="createProductForm"
                        encType="multipart/form-data"
                        onSubmit={updateItemSubmitHandler}
                    >
                    <h1>Update Item</h1>
    
                    <div>
                        {/* <SpellcheckIcon /> */}
                        <input
                            type="number"
                            placeholder="Item Id"
                            disabled={true}
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
                        Update
                    </button>
                    </form>
                </div>
            </div>
        </Fragment>
    );
};
    
export default UpdateItemMaster;