import React from 'react';


const getPostData=async(id)=>{
    const postData=await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const res = await postData.json()
    return res
}
export const generateMetadata=async({params})=>{
    const metadata=await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    const res =await metadata.json()
    
    return {
        title:{
            absolute:`${res.title}`,
        },
        description:res.body,
        keywords:res.body.split(' '),
    }

}
const PostDetailsPage = async({params}) => {
    const data= await getPostData(params.id)
    const {title , body}=data
    return (
        <div>
            <p>Title : {title}</p>
            <p>Body : {body}</p>
        </div>
    );
};

export default PostDetailsPage;