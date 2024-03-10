import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import { setAdminLogIn } from '../Redux/action/Actions';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
const LogIn = () => {
  const navigate=useNavigate();
  const dispatch=useDispatch();

  const [adminid ,setAdminid ]=useState("")
  const [password,setPassowrd]=useState("");

  const logIn=async(e)=>{
    let item={adminid,password};

    e.preventDefault();

    const response = await axios.post('http://tutorials.codebetter.in:7085/user/adminlogin', item);
    console.log(response)
if(response.data.msg){
  dispatch(setAdminLogIn({isLogin: true}))

  navigate('/')
}
  }
  const getlist =async()=>{
    const response = await axios.get("http://tutorials.codebetter.in:7085/api/category/list")
    console.log(response)
    }
    
    useEffect(()=>{
    getlist()
    },[])
  return (
<>
<h2 style={{textAlign:"center",marginTop:"115px"}}>LogIn Page</h2>
    <div className='col-lg-4 offset-lg-4 mt-3'>
    <input type="text" name="EMAIL" onChange={(e)=>setAdminid(e.target.value)} placeholder=" Admin Id " className="input-group input-group-lg" style={{height:"35px",marginBottom:"10px"}}/>


<br/>
<input type="password" placeholder='Password'  onChange={(e)=>setPassowrd(e.target.value)} className='input-group input-group-lg' style={{height:"35px",marginBottom:"10px"}}/>


<br/>
<button className='btn btn-dark' onClick={logIn} >Login</button>

    </div>
</>
  )
}

export default LogIn