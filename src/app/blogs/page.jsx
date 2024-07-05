import Link from 'next/link';
import React from 'react';

export const metadata = {
    title: {
        absolute:'Blog',
    },
    description: ' Blog page',
    keywords:['Blog , Blog page'],
  }
const BlogsPage = () => {
    return (
        <div>
            {
                blogs.map(blog => 
                <div key={blog.slug} className='border p-10 mt-3'>
                    <h2>{blog.name}</h2>
                    <h2>{blog.description}</h2>
                    <Link href={`/blogs/${blog.slug}`} className='btn bg-cyan-700'>View details</Link>
                </div>)
            }
        </div>
    );
};

const blogs=[
    {
        "slug": "product-1",
        "name": "Product One",
        "description": "This is the first product. It is designed to meet the needs of beginners. \nIt offers a range of basic features that are easy to use. \nPerfect for those just starting out."
    },
    {
        "slug": "product-2",
        "name": "Product Two",
        "description": "This is the second product. Ideal for intermediate users. \nIt includes additional features and functionalities. \nGreat for those looking to expand their skills."
    },
    {
        "slug": "product-3",
        "name": "Product Three",
        "description": "This is the third product. Aimed at advanced users. \nIt offers a comprehensive suite of features. \nPerfect for professionals seeking high performance."
    },
    {
        "slug": "product-4",
        "name": "Product Four",
        "description": "This is the fourth product. It combines elegance with functionality. \nFeaturing a sleek design and robust performance. \nIdeal for both personal and professional use."
    },
    {
        "slug": "product-5",
        "name": "Product Five",
        "description": "This is the fifth product. It is a premium offering. \nIncludes top-of-the-line features and exceptional quality. \nPerfect for those who demand the best."
    }
]

export default BlogsPage;