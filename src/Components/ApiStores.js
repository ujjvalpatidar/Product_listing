import axios from "axios";


class ApiStore {

    PostAPiCall(url, data) {
        return axios.post(url, data, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }
    GetApiCall(url) {
        return axios.get(url)
    }
    
}

const SERVER = "http://tutorials.codebetter.in:7085"

export const Apiurls = {

    LOGIN: `${SERVER}/auth/login`,
    CAT_SAVE:`${SERVER}/api/category/save`,
    BRAND_SAVE:`${SERVER}/api/brand/save`,
    PRODUCT_SAVE:`${SERVER}/api/product/save`,
   CAT_LIST:`${SERVER}/api/category/list`,
   BRAND_LIST:`${SERVER}/api/brand/list`,
   USER_SAVE:`${SERVER}/user/register`,
   USER_LOGIN:`${SERVER}/user/login"`



}

export default new ApiStore();