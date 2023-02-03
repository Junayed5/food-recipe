import React from 'react';
import { Link } from 'react-router-dom';

const Recipe = ({recipe}) => {

    const {_id,img, name} = recipe;

    return (
        <div className="card w-72 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>Click the detail button and see detail.</p>
                <div className="card-actions">
                    <Link to={`/detail-recipe/${_id}`}><button  className="btn btn-warning">Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Recipe;