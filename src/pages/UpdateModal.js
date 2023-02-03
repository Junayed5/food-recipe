import React from 'react';

const UpdateModal = ({id}) => {

    const updateData = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const img = e.target.image.value;
        const ingredients = e.target.ingredients.value;
        const steps = e.target.steps.value;
        const description = e.target.description.value;

        const data = { name, img, ingredients, steps, description };

        fetch(`https://food-recipe-lzw1.onrender.com/recipe/${id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json; charset=UTF-8' 
            },
            body: JSON.stringify(data)
        }
        )
            .then(response => response.json())
            .then(data => console.log(data))
    }

    return (
        <div>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form onSubmit={updateData}>
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

export default UpdateModal;