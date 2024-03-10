import React from 'react'
import { useState,useEffect } from 'react';
import ApiStore,{Apiurls} from './ApiStores';
import { useNavigate } from 'react-router';
import axios from 'axios';


const CatagorySave = () => {
    const navigate=useNavigate();
    const [cate_name,setCatName]=useState("");
    const [list,setList]=useState();

    const catSave=async(e)=>{
        let item ={cate_name}
        e.preventDefault();
    try{
        const response = await axios.post('http://tutorials.codebetter.in:7085/api/category/save',item,{
            headers: {
                'Content-Type': 'application/json'
            }
        })
        // const response = await ApiStore.PostAPiCall(Apiurls.CAT_SAVE,item)
        console.log(response)
        if(response.data.status===true){
            navigate('/brandSave')
        }
    }
    catch(error){
        console.log(error)
    }
      }
      const getCatList=async()=>{
        try{
            const response = await axios.get('http://tutorials.codebetter.in:7085/api/category/list')
            console.log(response)
            setList(response.data)
        }
        catch(error){
            console.log(error)
        }
      }
      
       useEffect(()=>{
getCatList()
      },[]);

const getlist =async()=>{
const response = await axios.get('http://tutorials.codebetter.in:7085/api/category/list')
console.log(response)
}

useEffect(()=>{
getlist()
},[])

  return (
<>
<h3 style={{textAlign:"center",marginTop:"115px"}}>Category Save</h3>
    <div className='col-lg-4 offset-lg-4 mt-3 float-left '>
    <input type="text"  value={cate_name} onChange={(e)=>setCatName(e.target.value)} placeholder="Enter Category" className="input-group input-group-lg" style={{height:"35px",marginBottom:"4px"}}/>


<br/>

<button className='btn btn-dark' onClick={catSave} >Submit</button>

    </div>
    <div className='float-right'>
        <h3>Catagory List</h3>
        {
            list?.map((val)=>{
                return <div key={val.id}>
                <p>{val.cate_name}</p>
                </div>
            })
        }
    </div>
</>  )
}

export default CatagorySave;