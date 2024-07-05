import React from 'react';

const DetailsPage = ({params}) => {
    const blog=blogs.find(blog => blog.slug === params.slug)
    const {name,description}=blog
    return (
        <div>
            <h1>{name}</h1>
            <h1>{description}</h1>
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

export default DetailsPage;