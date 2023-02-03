import React, { useEffect, useState } from 'react';
import UpdateModal from './UpdateModal';

const MyRecipeDetail = ({ recipe }) => {

    const [modal, setModal] = useState(false);

    const handleDelete = id => {
        fetch(`http://localhost:5000/recipe/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json()) // or res.json()
            .then(data => console.log(data))
    }
    return (
        <div className=' bg-white w-[700px] py-2 shadow-xl rounded-md mx-auto mb-5' >
            <div className="flex justify-between">
                <div className='flex'>
                    <img className='h-16 w-20 ml-5 my-3' src={recipe.img} alt="" />
                    <h2 className='text-2xl font-semibold py-7 px-5'>{recipe.name}</h2>
                </div>

                <div className='mx-5 my-8'>
                    <label onClick={() => setModal(true)} htmlFor="my-modal-3" className='btn btn-success btn-xs'>Edit</label>
                    <button onClick={() => handleDelete(recipe._id)} className='btn btn-error btn-xs ml-3'>Delete</button>
                </div>
            </div>

            {modal && <UpdateModal id={recipe._id}/>}
        </div>
    );
};

export default MyRecipeDetail;