import { getData } from '@/datafetch/getData';
import Link from 'next/link';
import React from 'react';
import {Oswald} from 'next/font/google'

const oswald=Oswald({weight:['200','300','400'],subsets:['latin']})
export const metadata = {
  title: 'Post',
  description: 'post page',
}
const PostPage = async() => {
    const userData= await getData()
    
    return (
        <div>
          <div className='grid grid-cols-3 gap-5'>
          {
            userData?.slice(0,20).map(({id,title,body}) => <div key={id} className='border p-10'>

           <h1>Name:{title}</h1>
           <h1 className={`${oswald.className}`}>Description:{body}</h1>
           <Link className='btn bg-sky-700' href={`/post/${id}`}>View Details</Link>
           
            </div>)
          }
          </div>
        </div>
    );
};

export default PostPage;