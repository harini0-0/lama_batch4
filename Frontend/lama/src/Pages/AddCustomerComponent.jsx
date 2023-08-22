import React, { Fragment, useEffect, useState } from "react";
import "./AddCustomerComponent.css";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css'; 
// import { useSelector, useDispatch } from "react-redux";
// import { clearErrors, createProduct } from "../../actions/productAction";
// import { useAlert } from "react-alert";
// import { Button } from "@material-ui/core";
// import MetaData from "../layout/MetaData";
// import AccountTreeIcon from "@mui/icons-material/AccountTree";
// import DescriptionIcon from "@mui/icons-material/Description";
// import StorageIcon from "@mui/icons-material/Storage";
// import SpellcheckIcon from "@mui/icons-material/Spellcheck";
// import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
// import SideBar from "./Sidebar";
import { useHistory } from "react-router-dom";
import { privateAxios } from "../services/helper";

function AddCustomerComponent(){
//   const dispatch = useDispatch();
//   const alert = useAlert();
  const history = useHistory()

//   const { loading, error, success } = useSelector((state) => state.newProduct);

  const [employeeId, setEmployeeId] = useState("")
  const [employeeName, setEmployeeName] = useState("");
  const [designation, setDesignation] = useState("");
  const [department, setDepartment] = useState("");
  const [gender, setGender] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState();
  const [dateOfJoining, setDateOfJoining] = useState();
  const [error, setError] = useState(null)
  const [isCreated, setIsCreated] = useState(false)
  

  const categories = [
    "M",
    "F"
  ];

  useEffect(() => {
    if(isCreated){
      toast("Employee Created Successfully",
         {position: toast.POSITION.BOTTOM_CENTER})
      setIsCreated(false)
      history.push("/customermap")
    }
    if(error){
      toast.error(error,
      {position: toast.POSITION.BOTTOM_CENTER})
      setError(null)
    }
  },[isCreated,error])

  const createEmployeeSubmitHandler = async (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("employeeId", employeeId);
    myForm.set("employeeName", employeeName);
    myForm.set("designation", designation);
    myForm.set("department", department);
    myForm.set("gender", gender);
    myForm.set("dateOfBirth", dateOfBirth);
    myForm.set("dateOfJoining", dateOfJoining);

    const config = {
      headers: {
          "Content-Type": "application/json",
      },
  };

    await privateAxios.post(`/admin/employee/`, myForm, config)
    .then((response) => {
      console.log(response.data)
      setIsCreated(true)
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
      <div className="dashboard">
        <div className="newProductContainer">
          <form
            className="createProductForm"
            encType="multipart/form-data"
            onSubmit={createEmployeeSubmitHandler}
          >
            <h1>Add Employee</h1>

            <div>
              {/* <SpellcheckIcon /> */}
              <input
                type="number"
                placeholder="Employee Id"
                required
                value={employeeId}
                onChange={(e) => setEmployeeId(e.target.value)}
              />
            </div>
            <div>
              {/* <SpellcheckIcon /> */}
              <input
                type="text"
                placeholder="Employee Name"
                required
                value={employeeName}
                onChange={(e) => setEmployeeName(e.target.value)}
              />
            </div>

            <div>
              {/* <SpellcheckIcon /> */}
              <input
                type="text"
                placeholder="Employee Designation"
                required
                value={designation}
                onChange={(e) => setDesignation(e.target.value)}
              />
            </div>

            <div>
              {/* <SpellcheckIcon /> */}
              <input
                type="text"
                placeholder="Employee Department"
                required
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
              />
            </div>

            <div>
              {/* <AccountTreeIcon /> */}
              <select onChange={(e) => setGender(e.target.value)}>
                <option value="">Choose Gender</option>
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
                type="date"
                placeholder="Date of Birth"
                
                value={dateOfBirth}
                required
                onChange={(e) => setDateOfBirth(e.target.value)}
              />
            </div>


            <div>
              {/* <StorageIcon /> */}
              <input
                type="date"
                placeholder="Date of Joining"
                value={dateOfJoining}
                required
                onChange={(e) => setDateOfJoining(e.target.value)}
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

export default AddCustomerComponent;