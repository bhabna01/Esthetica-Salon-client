import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/login-banner.jpg'
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import useTitle from '../../Hookes/useTitle';

const SignUp = () => {
    const { createUser, loading, updateUserProfile } = useContext(AuthContext)
    useTitle('Sign-Up');

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;

        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value;
        const photoURL = form.photoURL.value;

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                handleUpdateUser(name, photoURL);
            })
            .catch(err => console.error(err))
    }
    const handleUpdateUser = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
            .then(() => { })
            .catch(error => console.error(error))
    }
    return (
        <div>
            {
                loading ? (
                    <button className="btn loading">loading</button>
                ) :
                    (
                        <>

                            <div className="hero w-full my-20">
                                <div className="hero-content grid md:grid-cols-2 flex-col lg:flex-row gap-20">
                                    <div className="text-center lg:text-left">

                                        <img className='w-3/4' src={img} alt=""></img>
                                    </div>
                                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100  py-20">
                                        <h1 className="text-5xl text-center font-bold">Sign Up</h1>

                                        <form onSubmit={handleSignUp} className="card-body">
                                            <div className="form-control">
                                                <label className="label">
                                                    <span className="label-text">Name</span>
                                                </label>
                                                <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                                            </div>
                                            <div className="form-control">
                                                <label className="label">
                                                    <span className="label-text">PhotoURL</span>
                                                </label>
                                                <input type="text" name='photoURL' placeholder="PhotoURL" className="input input-bordered" required />
                                            </div>
                                            <div className="form-control">
                                                <label className="label">
                                                    <span className="label-text">Email</span>
                                                </label>
                                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                                            </div>
                                            <div className="form-control">
                                                <label className="label">
                                                    <span className="label-text">Password</span>
                                                </label>
                                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />

                                            </div>
                                            <div className="form-control mt-6">
                                                <input type='submit' className="btn btn-primary" value="Sign Up" />
                                            </div>
                                        </form>
                                        <p className='text-center'>Already have an account <Link className='text-orange-600 font-bold' to='/login'>Login</Link></p>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
            }
        </div>
    );
};

export default SignUp;