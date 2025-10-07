import { Github } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router';
import logo from '../assets/logo.png'

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <Link to='/'>Home</Link>
        <Link to='/apps'>Apps</Link>
        <Link to='/installation'>Installation</Link>
      </ul>
    </div>
    <Link className='flex items-center gap-2' to='/'> <img className='w-10 h-10 ' src={logo} alt="Logo" /> <span className='font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#632EE3] to-[#9F62F2]'>HERO.IO</span> </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 gap-10 font-medium text-lg">
      <Link to='/'>Home</Link>
        <Link to='/apps'>Apps</Link>
        <Link to='/installation'>Installation</Link>
    </ul>
  </div>
  <div className="navbar-end">
    <Link to='https://github.com/mdratul4505' className="btn bg-gradient-to-tr from-[#632EE3] to-[#9F62F2]"> <Github className='bg-white rounded-full'/> <span className='text-white font-medium'>Contribute</span> </Link>
  </div>
</div>
    );
};

export default Navbar;