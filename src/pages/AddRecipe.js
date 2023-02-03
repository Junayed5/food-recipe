import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import Navbar from '../components/layout/Navbar';
import { auth } from '../firebase.init';

const AddRecipe = () => {

    const [user] = useAuthState(auth);
    const email = user?.email;

    const postSubmit = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const img = e.target.image.value;
        const ingredients = e.target.ingredients.value;
        const steps = e.target.steps.value;
        const description = e.target.description.value;

        const data = { name, img, ingredients, steps, description, email };

        fetch('https://food-recipe-lzw1.onrender.com/recipe', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
            })
    }

    return (
        <div>
            <Navbar/>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto my-7">
                <div className="card-body">
                    <form onSubmit={postSubmit}>
                        <h1 className='text-2xl font-semibold text-center'>Add your recipe</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Image</span>
                            </label>
                            <input type="text" name='image' placeholder="image" className="input input-bordered" />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Ingredients</span>
                            </label>
                            <input type="text" name='ingredients' placeholder="ingredients" className="input input-bordered" />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Steps</span>
                            </label>
                            <input type="text" name='steps' placeholder="steps" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <textarea type="text" name='description' placeholder="Description" className="textarea textarea-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Submit" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddRecipe;