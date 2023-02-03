import React, { useEffect, useState } from 'react';
import Recipe from './Recipe';

const AllRecipes = () => {

    const [recipes, setRecipes] = useState([]);
    useEffect(() => {
        fetch('https://food-recipe-lzw1.onrender.com/recipes')
            .then(res => res.json())
            .then(data => setRecipes(data))
    }, [recipes])

    return (
        <div>
            <h1 className='text-center text-3xl font-semibold text-yellow-500 my-5'>Food Recipes</h1>
            <div className='grid grid-cols-4 gap-y-4 my-8 mx-7'>
                {
                    recipes.map(recipe => <Recipe recipe={recipe} />)
                }
            </div>
        </div>
    );
};

export default AllRecipes;