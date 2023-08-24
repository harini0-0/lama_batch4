//isLoggedIn=>

export const isLoggedIn = () => {
    let data = localStorage.getItem("data");
    if (data != null) return true;
    else return false;
  };
  
  //doLogin=> data=>set to localstorage
  
  export const doLogin = (data,next) => {
    localStorage.setItem("data", JSON.stringify(data));
    next()
  };
  
  //doLogout=> remove from localStorage
  
  export const doLogout = async (next) => {
    localStorage.removeItem("data");
    next()
  };
  
  //get currentUser
  export const getCurrentUserDetail = () => {
    if (isLoggedIn()) {
      return JSON.parse(localStorage.getItem("data")).id;
    } else {
      return undefined;
    }
  };
  
  export const getToken=()=>{
    if(isLoggedIn()){
      const token = JSON.parse(localStorage.getItem("data")).accessToken
      // console.log("Token getToken", token)
      return token; 
    }else{
      console.log("Not logged In")
      return null;
    }
  }