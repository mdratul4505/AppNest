import React from 'react';
import { Link } from 'react-router';
import playStore from '../assets/fi_16076057.png'
import AppStore from '../assets/Group.png'
import heroImg from '../assets/hero.png'
import useAppsData from '../Hooks/useApps';
import AppCard from '../Components/AppCard';

const Home = () => {
    const {apps} = useAppsData();
    
    const featuredApps = apps.slice(0, 8)
    
    
    return (
        <div className=''>
            <div className='text-center mt-10 md:14 lg:mt-20'>
                <h1 className='font-bold text-4xl md:text-5xl lg:text-7xl'>We Build <br />
                    <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#632EE3] to-[#9F62F2]'>Productive</span> Apps</h1>

                <p className='text-gray-600 my-8'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.<br /> Our goal is to turn your ideas into digital experiences that truly make an impact.</p>

                <div className='flex items-center justify-center my-8 gap-5 '>
                    <Link className='flex items-center gap-2.5 btn' to='https://play.google.com/store/games?hl=en'><img src={playStore} alt="" /> Google Play</Link>
                    <Link className='flex items-center gap-2.5 btn' to=''> <img src={AppStore} alt="" /> App Store</Link>
                </div>

            </div>
            {/* hero section */}
            <div className='flex items-center justify-center mt-10'>
                <img src={heroImg} alt="" />
            </div>
            {/* banner section */}
            <div className=" bg-gradient-to-br from-[#632EE3] to-[#9F62F2] py-5 md:py-10 lg:py-20 ">
                <h1 className='text-white font-bold text-4xl md:text-5xl lg:text-6xl text-center'>Trusted by Millions, Built for You</h1>
                <div className='flex gap-5 md:gap-10 lg:gap-20 justify-center mt-8 md:mt-12 lg:mt-16'>
                    <div className='text-white '>
                        <h4 className='mb-2.5'>Total Downloads</h4>
                        <span className='font-semibold lg:font-bold text-3xl md:text-4xl lg:text-6xl'>29.6M</span>
                        <p className='mt-2.5'>21% more than last month</p>
                    </div>
                    <div className='text-white'>
                        <h4 className='mb-2.5'>Total Reviews</h4>
                        <span className='font-semibold lg:font-bold text-3xl md:text-4xl lg:text-6xl'>906K</span>
                        <p className='mt-2.5'>46% more than last month</p>
                    </div>
                    <div className='text-white'>
                        <h4 className='mb-2.5'>Active Apps</h4>
                        <span className='font-semibold lg:font-bold text-4xl md:text-4xl lg:text-6xl'>132+</span>
                        <p className='mt-2.5'>31 more will Launch</p>
                    </div>
                </div>
            </div>

            <div className='my-20'>
                <div className='text-center'>
                    <h1 className='font-bold text-5xl'>Trending Apps</h1>
                    <p className='text-gray-500 text-xl mt-5'>Explore All Trending Apps on the Market developed by us</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-11/12 mx-auto gap-6 my-16'>
                    {
                        featuredApps.map(app => <AppCard 
                        key={app.id}
                        app = {app}
                        ></AppCard>)
                    }
                </div>

                <div className='flex justify-center'>
                    <Link to='/apps'><span className='btn flex justify-center px-10 font-medium text-white bg-gradient-to-tr from-[#632EE3] to-[#9F62F2]'>Show All</span></Link>
                </div>

            </div>




        </div>
    );
};

export default Home;