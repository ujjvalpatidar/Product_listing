import React from 'react'
import { useState,useEffect } from 'react';
import ApiStore,{Apiurls} from './ApiStores';
import axios from 'axios';
const ProductSave = () => {
    const [prod_name,setProdName]=useState("");
    const [prod_price,setProdPrice]=useState('');
    const [prod_cate,setProdCate]=useState("");
    const [prod_brand,setProdBrand]=useState("");
    const [prod_image,setProductImage]=useState('');

    const [catList,setCatList]=useState();
    const [brandList,setBrandList]=useState();

    const handleChange=(e)=> {
        console.log(e.target.files);
        setProductImage(e.target.files[0]);
    }
    const productSave=async(e)=>{
console.log(prod_image)
        e.preventDefault();
        let formData= new FormData()
        formData.append('prod_name',prod_name)
        formData.append('prod_price',prod_price)
        formData.append('prod_cate',prod_cate)
        formData.append('prod_brand',prod_brand)
        formData.append('prod_image',prod_image)

    try{
        const response = await axios.post('http://tutorials.codebetter.in:7085/api/product/save',formData)
        console.log(response)
    }
    catch(error){
        console.log(error)
    }
      }
      const getCatList=async()=>{
        try{
            const response = await axios.get('http://tutorials.codebetter.in:7085/api/product/list')

            // const response = await ApiStore.GetApiCall(Apiurls.CAT_LIST)
            console.log(response)
            // setCatList(response.data)
        }
        catch(error){
            console.log(error)
        }
      }
      const getBrandList=async()=>{
        try{
            const response = await ApiStore.GetApiCall(Apiurls.BRAND_LIST)
            console.log(response)
            setBrandList(response.data)
        }
        catch(error){
            console.log(error)
        }
      }
      useEffect(()=>{
        getCatList()
        getBrandList()
              },[]);
  return (
<>
<h3 style={{textAlign:"center",marginTop:"115px"}}>Product Save</h3>
    <div className='col-lg-4 offset-lg-4 mt-3'>
    <input type="text"  onChange={(e)=>setProdName(e.target.value)} placeholder="Product Name" className="input-group input-group-lg" style={{height:"35px",marginBottom:"4px"}}/>
<br/>
<input type="text"  onChange={(e)=>setProdPrice(e.target.value)} placeholder="Product Price" className="input-group input-group-lg" style={{height:"35px",marginBottom:"4px"}}/>
<br/> <input type="text"  onChange={(e)=>setProdCate(e.target.value)} placeholder="Product Category" className="input-group input-group-lg" style={{height:"35px",marginBottom:"4px"}}/>
<br/> 
<select className="form-select" aria-label="Default select example">
<option>select category</option>
{
    catList?.map((val)=>{
                return   <option value="1">{val.cate_name}</option>

            })
        }

</select>
<br/> 

<select className="form-select" aria-label="Default select example">
<option>select brand</option>
{
    brandList?.map((val)=>{
                return   <option value="1">{val.brand_name}</option>

            })
        }

</select>
<input type="text"  onChange={(e)=>setProdBrand(e.target.value)} placeholder="Product Brand" className="input-group input-group-lg" style={{height:"35px",marginBottom:"4px"}}/>
<br/> 
<div class="mb-3">
  <input type="file" onChange={handleChange}/>
</div>
<button className='btn btn-dark' onClick={productSave} >Submit</button>

    </div>
</>  )
}

export default ProductSave