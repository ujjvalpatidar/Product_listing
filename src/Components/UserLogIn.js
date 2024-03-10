import React from 'react'
import { useState } from 'react'
import ApiStore,{Apiurls} from './ApiStores';
const UserLogIn = () => {
    const [email,setEmail]=useState("");
    const [password,setPassowrd]=useState("");

    const LogInUser=async(e)=>{
        let item={email,password};
    
        e.preventDefault();
    
        const response = await ApiStore.PostAPiCall(Apiurls.USER_LOGIN, item);
        console.log(response)
    if(response.data.msg){
    //   dispatch(setAdminLogIn({isLogin: true}))
    
      navigate('/')
    }
}
  return (<>
    <h2 style={{textAlign:"center",marginTop:"115px"}}>User Ragister</h2>
    <div className='col-lg-4 offset-lg-4 mt-3'>
<input type="text" placeholder='Email'  onChange={(e)=>setEmail(e.target.value)} className='input-group input-group-lg' style={{height:"35px",marginBottom:"10px"}}/>
<br/>
<input type="password" placeholder='Password'  onChange={(e)=>setPassowrd(e.target.value)} className='input-group input-group-lg' style={{height:"35px",marginBottom:"10px"}}/>
<br/>
<button className='btn btn-dark' onClick={LogInUser} >LogIn</button> 
  </div>
  </>
 );
}

export default UserLogIn