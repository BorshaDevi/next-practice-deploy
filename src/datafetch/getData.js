export const getData=async()=>{
    const postData= await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`) 
    const data=postData.json()
    return data;
 }