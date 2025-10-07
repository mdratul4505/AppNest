import React from 'react';
import { Link } from 'react-router';
import playStore from '../assets/fi_16076057.png'
import AppStore from '../assets/Group.png'

const Home = () => {
    return (
        <div className=''>
            <div className='text-center mt-20'>
            <h1 className='font-bold text-7xl'>We Build <br />
                <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#632EE3] to-[#9F62F2]'>Productive</span> Apps</h1>

            <p className='text-gray-600 my-8'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.<br /> Our goal is to turn your ideas into digital experiences that truly make an impact.</p>  

            <div className='flex items-center justify-center my-8 gap-5 '>
                <Link className='flex items-center gap-2.5 btn' to='https://play.google.com/store/games?hl=en'><img src={playStore} alt="" /> Google Play</Link>
                <Link className='flex items-center gap-2.5 btn' to=''> <img src={AppStore} alt="" /> App Store</Link>
            </div>  

        </div>
        {/* banner section */}
        
        </div>
    );
};

export default Home;