import axios from 'axios';
import { ILoginDetails } from '../interfaces/interfaces';
const API_URL="https://private-052d6-testapi4528.apiary-mock.com"
export const login=async (loginDetails:ILoginDetails)=>{
    let token=localStorage.getItem("token")
    const config = {
        headers: { Authorization: `Bearer ${token}` }      
    };
    return await axios.post(`${API_URL}/authenticate`,loginDetails,config);
      
}

export const getProjectDetails=async ()=>{
    let token=localStorage.getItem("token")
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
    return await axios.get(`${API_URL}/info`,config);
      
}

