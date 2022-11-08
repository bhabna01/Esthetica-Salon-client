import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import img from '../../assets/login-banner.jpg'
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
// import { AuthContext } from '../../context/AuthProvider/AuthProvider';
// // import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Login = () => {

    const { login, loading, providerLogin } = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate();

    const googleProvider = new GoogleAuthProvider();


    const from = location.state?.from?.pathname || '/';
    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                // navigate(from, { repalce: true });
            })
            .catch(error => {
                console.error(error)

            })

    }
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        login(email, password)
            .then(result => {
                const user = result.user;
                // navigate(from, { replace: true })


                const currentUser = {
                    email: user.email
                }

                console.log(currentUser);
                fetch('https://genius-car-server-xi-eight.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        // local storage is the easiest but not the best place to store jwt token
                        localStorage.setItem('genius-token', data.token);
                        navigate(from, { replace: true });
                    });




            })
            .catch(error => console.log(error))

    }

    return (
        <div className="hero w-full my-20">



            <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img className='w-3/4' src={img} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-20">
                    <h1 className="text-5xl text-center font-bold">Login</h1>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Login" />
                            <button onClick={handleGoogleSignIn} className='btn btn-primary mb-2 mt-5'><FaGoogle></FaGoogle> Login with Google</button>
                        </div>
                    </form>
                    <p className='text-center'>New to EstheticaSalon <Link className='text-orange-600 font-bold' to="/signup">Sign Up</Link> </p>
                </div>
            </div>
        </div>
    );
};

export default Login;