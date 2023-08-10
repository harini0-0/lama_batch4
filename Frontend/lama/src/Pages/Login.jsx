import React from "react";
import { useForm } from "react-hook-form";


function LoginPage(){
    const { register, handleSubmit, formState: { errors } } = useForm();
 
    const onSubmit = (data) => console.log(data);

    return (
        <div className="wrapper">
            <p className="title">Login Form</p>
 
            <form className="wrapper2" onSubmit={handleSubmit(onSubmit)}>
                
                <input type="username" placeholder="Enter username" {...register("username", { required: true })} />
                {errors.email && <span style={{ color: "red" }}>
                    *Email* is mandatory </span>}
                <input type="password" placeholder="Enter password"{...register("password")} />
                <input type={"submit"} style={{ backgroundColor: "grey", width:"100px" }} />
            </form>
        </div>
    )
};
export default LoginPage;