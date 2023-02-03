import React from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import { auth } from '../firebase.init';

const Login = () => {

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const submitLogin = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        signInWithEmailAndPassword(email, password)

    }

    const navigate = useNavigate();

    return (
        <div>
            <Navbar />
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto my-7">
                <div className="card-body">
                    <form onSubmit={submitLogin}>
                        <h1 className='text-2xl font-semibold text-center'>Please Login</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />
                        </div>
                        {
                            error && <p className='text-red-600 text-sm'>{error.message}</p>
                        }
                        <p>New to <span className='text-blue-500 cursor-pointer'><Link to='/register'>Create an account</Link></span></p>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Login" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;