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
import { useHistory, useParams } from "react-router-dom";

function UpdateCustomerComponent(){
//   const dispatch = useDispatch();
//   const alert = useAlert();
  const history = useHistory()
  const id = useParams()
  const toUpdateId = id.id

//   const { loading, error, success } = useSelector((state) => state.newProduct);

  const [employeeId, setEmployeeId] = useState("")
  const [employeeName, setEmployeeName] = useState("");
  const [designation, setDesignation] = useState("");
  const [department, setDepartment] = useState("");
  const [gender, setGender] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState(new Date());
  const [dateOfJoining, setDateOfJoining] = useState(new Date());
  const [error, setError] = useState(null)
  const [isUpdated, setIsUpdated] = useState(false)
  const [employee, setEmployee] = useState(null)
  

  const categories = [
    "M",
    "F"
  ];

  const getEmployee = async (id) => {
    await axios.get("http://localhost:8181/api/v1/admin/employee/"+id)
    .then((response) => {
        setEmployee(response.data)
        console.log(response.data)
    })
    .catch((err) => {
        setError(err.message)
        console.log(err.message)
    })
  }

  useEffect(() => {
    if(employee==null)
        getEmployee(toUpdateId)
    if(employee){
        setEmployeeId(employee.employeeId)
        setEmployeeName(employee.employeeName)
        setDesignation(employee.designation)
        setDepartment(employee.department)
        setGender(employee.gender)
        setDateOfBirth(employee.dateOfBirth)
        setDateOfJoining(employee.dateOfJoining)
    }
    if(isUpdated){
      toast("Employee Updated Successfully",
         {position: toast.POSITION.BOTTOM_CENTER})
      setIsUpdated(false)
      history.push("/customermap")
    }
    if(error){
      toast.error(error,
      {position: toast.POSITION.BOTTOM_CENTER})
      setError(null)
    }
  },[isUpdated,error,employee,toUpdateId])

  const updateEmployeeSubmitHandler = async (e) => {
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

    await axios.put(`http://localhost:8181/api/v1/admin/employee/`+employeeId, myForm, config)
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
        {console.log("toUpdateId",toUpdateId)}
      <div className="dashboard">
        <div className="newProductContainer">
          <form
            className="createProductForm"
            encType="multipart/form-data"
            onSubmit={updateEmployeeSubmitHandler}
          >
            <h1>Add Employee</h1>

            <div>
              {/* <SpellcheckIcon /> */}
              <input
                type="number"
                placeholder="Employee Id"
                disabled={true}
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
              Update
            </button>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default UpdateCustomerComponent;