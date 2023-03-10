import React from 'react';
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase.init';

const Navbar = () => {

    const [user] = useAuthState(auth);

    const [signOut] = useSignOut(auth);

    return (
        <div className="navbar bg-base-300">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/add-recipe'>Add Recipe</Link></li>
                        <li><Link to='/my-recipe'>My Recipe</Link></li>
                        <li>{user ? <a onClick={() => signOut()}>Logout</a>:<Link to='/login'> Login</Link>}</li>
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl">Recipe</Link>
            </div>
            <div className="navbar-center">
                <input type="text" placeholder="Search your recipe" className="input input-bordered w-full max-w-xs" />
            </div>
            <div className="navbar-end hidden lg:flex">

                <ul className="menu menu-horizontal px-1">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/add-recipe'>Add Recipe</Link></li>
                    <li><Link to='/my-recipe'>My Recipe</Link></li>
                    <li>{user ? <a onClick={() => signOut()}>Logout</a>:<Link to='/login'> Login</Link>}</li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;