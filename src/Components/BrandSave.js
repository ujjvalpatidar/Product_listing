import React from 'react'
import { useState } from 'react';
import ApiStore,{Apiurls} from './ApiStores';
import { useNavigate } from 'react-router';
const BrandSave = () => {
    const [brand_name,setBrandName]=useState("");
    const navigate=useNavigate();

    const brandSave=async(e)=>{
        let item={brand_name}
        e.preventDefault();
    try{
        const response = await ApiStore.PostAPiCall(Apiurls.BRAND_SAVE,item)
        console.log(response)
        if(response.data.status===true){
            navigate('/productSave')
        }
    }
    catch(error){
        console.log(error)
    }
      }
  return (
<>
<h3 style={{textAlign:"center",marginTop:"115px"}}>Brand Save</h3>
    <div className='col-lg-4 offset-lg-4 mt-3'>
    <input type="text"  onChange={(e)=>setBrandName(e.target.value)} placeholder="Enter Brand" className="input-group input-group-lg" style={{height:"35px",marginBottom:"4px"}}/>
<br/>

<button className='btn btn-dark' onClick={brandSave} >Submit</button>

    </div>
</>  )
}

export default BrandSave