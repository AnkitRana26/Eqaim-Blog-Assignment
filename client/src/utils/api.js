const apiURL = 'http://localhost:8080/blog/';

//Fetch All Blogs

export const fetchBlogs =async()=>{

    try{
        const response = await fetch(apiURL);
        const data = await response.json();
        return data.data;
    }catch(err){
        console.log("Error:- " +err.message);
    }

}

//Fetch Single Blog

export const fetchBlog = async(id)=>{

    try{
        const response = await fetch(`${apiURL}${id}`);
        const data = await response.json();
        return data.data;
    }catch(err){
        console.log("Error:- " +err.message);
    }


}

//Post Blog

export const postBlog =async(body)=>{
    
    try{
        const response = await fetch(apiURL,{
            method:'POST',
            body:JSON.stringify(body),
            headers:{
                'Content-Type':'application/json'
            }
        });
        const data = response.json();
        return data.data;
    }catch(err){
        console.log("Error:- " +err.message);
    }
} 