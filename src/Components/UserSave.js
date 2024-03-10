import React from 'react'
import { useState } from 'react'
import ApiStore,{Apiurls} from './ApiStores';

const UserSave = () => {
    const [name ,setName ]=useState("")
    const [phone,setPhone]=useState();
    const [email,setEmail]=useState("");
 const [password,setPassowrd]=useState("");

  const HandleRagister=async(e)=>{
    let item={name,phone,email,password};

    e.preventDefault();

    const response = await ApiStore.PostAPiCall(Apiurls.USER_SAVE, item);
    console.log(response)
if(response.data.msg){
//   dispatch(setAdminLogIn({isLogin: true}))

  navigate('/')
}
  }
  return (
<>
<h2 style={{textAlign:"center",marginTop:"115px"}}>User Ragister</h2>
    <div className='col-lg-4 offset-lg-4 mt-3'>
    <input type="text" onChange={(e)=>setName(e.target.value)} placeholder="Name" className="input-group input-group-lg" style={{height:"35px",marginBottom:"10px"}}/>
<br/>
<input type="text" placeholder='Phone Number'  onChange={(e)=>setPhone(e.target.value)} className='input-group input-group-lg' style={{height:"35px",marginBottom:"10px"}}/>
<br/>
<input type="text" placeholder='Email'  onChange={(e)=>setEmail(e.target.value)} className='input-group input-group-lg' style={{height:"35px",marginBottom:"10px"}}/>
<br/>
<input type="password" placeholder='Password'  onChange={(e)=>setPassowrd(e.target.value)} className='input-group input-group-lg' style={{height:"35px",marginBottom:"10px"}}/>
<br/>
<button className='btn btn-dark' onClick={HandleRagister} >Ragister</button>

    </div>
</>  )
}

export default UserSave