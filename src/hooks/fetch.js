import axios from "axios";

const baseUrl = "https://jsonplaceholder.typicode.com"
const headers = { "Content-Type":"application/json" }

    export const getPost = async () =>{
        try {
            const post = await axios.get(`${baseUrl}/post$`,headers)
            if (post?.status === 200){
                const response = await post.data;
                return response;
            }
        } 
        catch (error){
            return
                error.message;
            
        }

    }