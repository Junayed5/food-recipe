import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';

const RecipeDetail = () => {

    const { id } = useParams();

    const [recipe, setRecipe] = useState({});

    const { img, name, description, ingredients, steps } = recipe
    useEffect(() => {
        fetch(`https://food-recipe-lzw1.onrender.com/recipe/${id}`)
            .then(res => res.json())
            .then(data => setRecipe(data))
    }, [])


    return (
        <div>
            <Navbar/>
            <img className='mx-auto my-6 h-40 w-60' src={img} alt="" />

            <div className='mx-10'>
                <p className='text-center text-2xl font-semibold text-orange-400 my-5'>{name}</p>
                <p className='my-4'><span className='font-semibold'>Description:</span> {description}</p>
                <p className='my-4'><span className='font-semibold'>Steps:</span>{steps}</p>
                <p className='my-4'> <span className='font-semibold'>Ingredients :</span>{ingredients}</p>
            </div>
        </div>
    );
};

export default RecipeDetail;