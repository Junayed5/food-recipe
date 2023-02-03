import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../firebase.init';
import Navbar from '../components/layout/Navbar';

const Registration = () => {

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    console.log(user, error);

    const submitRegister = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        await createUserWithEmailAndPassword(email, password);
    }

    const navigate = useNavigate()

    if (user) {
        navigate('/')
    }

    return (
        <div>
            <Navbar />
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto my-7">
                <div className="card-body">
                    <form onSubmit={submitRegister}>
                        <h1 className='text-2xl font-semibold text-center'>Please Register</h1>
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
                        <p>Already have an account <span className='text-blue-500 cursor-pointer'><Link to='/login'>Please Login</Link></span></p>
                        <div className="form-control mt-6">
                            {/* <i className="btn btn-primary">Registration</i> */}
                            <input className="btn btn-primary" type="submit" value="Registration" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Registration;