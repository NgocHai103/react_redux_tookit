import axiosClient from "../axiosClient";
const productApi = {
    getProducts:()=>{
        const url = `/api/products/featured/vi/10`;
        return axiosClient.get(url);
    }
}
export default  productApi;