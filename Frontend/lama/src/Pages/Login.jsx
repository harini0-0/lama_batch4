import { Button } from 'react-bootstrap';
import React, { useState } from 'react';
import { useNavigate } from 'react-router';

function LoginPage(){
    const [errors, setErrors] = useState({});
    let [input, setInput] = useState({});
    // const [isValid, setValid] = useState(true);
    const navigate = useNavigate();
    function handleChange(event) {
        let input1 = input;
        input1[event.target.name] = event.target.value;
      
        setInput(input1);
      }
         
     function  handleSubmit(event) {
        event.preventDefault();
      
        if(validate()){
            // console.log(this.state);
      
            const input1 = {};
            
            input1["email"] = "";
            input1["password"] = "";
            
            setInput(input1);
      
            // alert('Demo Form is submitted');
            // navigate('/adminpage');
            navigate('/adminpage', {page: '1'});
            // this.history.push('/adminpage');
        }
      }

    
  function validate(){
    let input1 = input;
    let errors = {};
    let isValid = true;

    if (!input1["email"]) {
      isValid = false;
      errors["email"] = "Please enter your email Address.";
    }

    if (typeof input1["email"] !== "undefined") {
        
      var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if (!pattern.test(input1["email"])) {
        isValid = false;
        errors["email"] = "Please enter valid email address.";
      }
    }

    if (!input1["password"]) {
      isValid = false;
      errors["password"] = "Please enter your password.";
    }
    if (typeof input1["password"] !== "undefined") {
      if(input1["password"].length < 6){
          isValid = false;
          errors["password"] = "Please add at least 6 charachter.";
      }
    }

    setErrors(errors);

    return isValid;
}
// eslint-disable-next-line no-use-before-define
    return (
        <div className='wrapper'>
         <h1 className='title' style={{fontFamily: "EB Garamond"}}>Login Form</h1>
         <form className='wrapper2' onSubmit={(event)=>{handleSubmit(event);}}>
  
           <div className="form-group">
             <label htmlFor="email">Email:</label>
             <input 
              type="text" 
              name="email" 
              value={input.email}
              onChange={(event)=>{handleChange(event);}}
              className="form-control" 
              placeholder="Enter email" 
              id="email" />
  
               <div className="text-danger">{errors.email}</div>
           </div>
  
           <div className="form-group">
             <label htmlFor="password">Password:</label>
             <input 
               type="password" 
               name="password" 
               value={input.password}
               onChange={(event)=>{handleChange(event);}}
               className="form-control" 
               placeholder="Enter password" 
               id="password" />
  
               <div className="text-danger">{errors.password}</div>
           </div>

             
           <Button variant="secondary" type="submit" value={'Submit'}>Submit</Button>{''}
         </form>
       </div>
    );
};
// class LoginPage extends React.Component {

//     // navigate = useNavigate();
//     // history = useHistory();
//     constructor() {
//     super();
//     this.state = {
//       input: {},
//       errors: {}
//     };
     
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }
     
//   handleChange(event) {
//     let input = this.state.input;
//     input[event.target.name] = event.target.value;
  
//     this.setState({
//       input
//     });
//   }
     
//   handleSubmit(event) {
//     event.preventDefault();
  
//     if(this.validate()){
//         console.log(this.state);
  
//         let input = {};
        
//         input["email"] = "";
//         input["password"] = "";
        
//         this.setState({input:input});
  
//         alert('Demo Form is submitted');
//         // this.navigate('/adminpage')
//         this.history.push('/adminpage');
//     }
//   }
  
//   validate(){
//       let input = this.state.input;
//       let errors = {};
//       let isValid = true;
   
//       if (!input["username"]) {
//         isValid = false;
//         errors["username"] = "Please enter your username.";
//       }
  
//       if (!input["email"]) {
//         isValid = false;
//         errors["email"] = "Please enter your email Address.";
//       }
  
//       if (typeof input["email"] !== "undefined") {
          
//         var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
//         if (!pattern.test(input["email"])) {
//           isValid = false;
//           errors["email"] = "Please enter valid email address.";
//         }
//       }
  
//       if (!input["password"]) {
//         isValid = false;
//         errors["password"] = "Please enter your password.";
//       }
//       if (typeof input["password"] !== "undefined") {
//         if(input["password"].length < 6){
//             isValid = false;
//             errors["password"] = "Please add at least 6 charachter.";
//         }
//       }
  
//       this.setState({
//         errors: errors
//       });
  
//       return isValid;
//   }
     
//   render() {
//     return (
//       <div className='wrapper'>
//         <h1 className='title' style={{fontFamily: "EB Garamond"}}>Login Form</h1>
//         <form className='wrapper2' onSubmit={this.handleSubmit}>
  
//           <div class="form-group">
//             <label for="email">Email:</label>
//             <input 
//               type="text" 
//               name="email" 
//               value={this.state.input.email}
//               onChange={this.handleChange}
//               class="form-control" 
//               placeholder="Enter email" 
//               id="email" />
  
//               <div className="text-danger">{this.state.errors.email}</div>
//           </div>
  
//           <div class="form-group">
//             <label for="password">Password:</label>
//             <input 
//               type="password" 
//               name="password" 
//               value={this.state.input.password}
//               onChange={this.handleChange}
//               class="form-control" 
//               placeholder="Enter password" 
//               id="password" />
  
//               <div className="text-danger">{this.state.errors.password}</div>
//           </div>

             
//           <Button variant="secondary" type="submit" value={'Submit'}>Submit</Button>{''}
//         </form>
//       </div>
//     );
//   }
// }
  
export default LoginPage;