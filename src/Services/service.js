import axios from 'axios';
import { url } from '../config';

const baseUrl = url;

const formservice = {
    signup: async (sdata) => {
        try {
            const response = await axios.post(`${baseUrl}/emp/signup`, sdata);
            console.log("SignUp Response => ", response.data);
            if(response.data.status!==409){
                console.log('Sign-Up Successful');
            }else{
                console.log('Sign-Up Faild');

            }
            console.log(response.data)
            return response.data;
        } catch (error) {
            if (error.response && error.response.data) {
                throw new Error(error.response.data.message);
            } else {
                throw new Error("Something went wrong while SignUp");
            }
        }
    }
}

export default formservice;
