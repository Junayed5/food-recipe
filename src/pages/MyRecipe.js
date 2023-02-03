import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import Navbar from '../components/layout/Navbar';
import { auth } from '../firebase.init';
import MyRecipeDetail from './MyRecipeDetail';

const MyRecipe = () => {

    const [user] = useAuthState(auth);
    const email = user?.email;

    const [myRecipes, setMyRecipes] = useState([]);
    useEffect(() => {
        fetch(`https://food-recipe-lzw1.onrender.com/my-recipe/${email}`)
            .then(res => res.json())
            .then(data => setMyRecipes(data))
    }, [myRecipes])

    return (
        <div>
            <Navbar/>
            {
                myRecipes?.map(recipe => <MyRecipeDetail recipe={recipe}/>)
            }
        </div>
    );
};

export default MyRecipe;