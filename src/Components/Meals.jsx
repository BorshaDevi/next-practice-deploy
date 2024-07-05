'use client'
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

export const metadata = {
    title: 'Meals',
    description: ' Meals page',
  }
const Meals = () => {
    const [search,setSearch]=useState('')
    const [meal,setMeal]=useState([])
    console.log(meal)
    const loadData=async()=>{
    const data=await  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${search}`)
      const res = await data.json()
     
      setMeal(res.meals)
     
    }
    useEffect(() => {
        loadData()
    },[search])
    const handleSearch=e=>{
        setSearch(e.target.value)
    }
    return (
        <div>
           <div className='mt-12 text-center'>
            <form onChange={handleSearch} >
            <input className='py-2  border-blue-400 outline-none'  type="text" placeholder='Search....' />
            <button  className='btn bg-blue-400'>
                Search
            </button>
            </form>
           </div>
           <div className='grid grid-cols-2  gap-7 '>
            {
            meal.map ( mea => <div key={mea.idMeal}>
                <div className='border p-4' >
                    <Image src={mea.strMealThumb} alt={mea.strCategory} width={100} height={100}></Image>
                <p>{mea.strCategory}</p>
                <p>{mea.strArea}</p>
                </div>
            </div>)}
           </div>
        </div>
    );
};

export default Meals;