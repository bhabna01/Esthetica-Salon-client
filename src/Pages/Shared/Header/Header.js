import React, { useContext } from 'react';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo-svg.png'
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(err => console.log(err))
    }

    const menuItems = <>

        <li className='font-semibold'><Link to='/'>Home</Link></li>
        <li className='font-semibold'><Link to='/blog'>Blog</Link></li>
        {
            user?.uid ?

                <>
                    <li className='font-semibold'><Link to=''>My Reviews</Link></li>
                    <li className='font-semibold'><Link to='/addService'>Add Service</Link></li>
                    <li className='font-semibold'>
                        <button onClick={handleLogOut} className='btn-ghost'>Sign Out</button>
                    </li>
                    <li>
                        <span className=' me-2 font-semibold'> {user?.displayName}</span>
                        {user?.photoURL ?
                            <img className='me-2 rounded-full' style={{ height: '70px' }} alt="" src={user?.photoURL} title={user?.displayName} />
                            :
                            <FaUser></FaUser>
                        }

                    </li>

                </>
                :
                <li className='font-semibold'><Link to='/login'>Login</Link></li>
        }

    </>
    return (
        <div className="navbar h-20 mb-20 pt-12 bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl">
                    <img src={logo} alt=""></img>
                    <h1 className='ml-3'>EstheticaSalon</h1>

                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>

        </div>


    );
};

export default Header;
