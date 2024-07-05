import React from 'react';

const CategoryDetailsPage = ({params}) => {
    console.log({params})
    if(params.categorydetailpage.length === 1){
        return <p>{params.categorydetailpage[0]}</p>
    }
    if(params.categorydetailpage.length === 2){
        return <p>{params.categorydetailpage[1]}</p>
    }
    if(params.categorydetailpage.length === 3){
        return <p>{params.categorydetailpage[2]}</p>
    }
    if(params.categorydetailpage.length === 4){
        return <p>{params.categorydetailpage[3]}</p>
    }
    return (
        <div>
            detail page
        </div>
    );
};

export default CategoryDetailsPage;