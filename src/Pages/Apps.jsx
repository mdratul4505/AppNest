import React, { useState } from 'react';
import useAppsData from '../Hooks/useApps';
import AppCard from '../Components/AppCard';


const Apps = () => {
    const { apps } = useAppsData()
    const [search, setSearch] = useState('')
    const tram = search.trim().toLocaleLowerCase()
    const searchedApps = tram ? apps.filter(app => app.title.toLocaleLowerCase().includes(tram)) : apps

    return (

        <div>
            <div className='text-center my-16'>
                <h1 className='text-6xl font-bold'>Our All Applications</h1>
                <p className='text-gray-400 font-medium mt-5'>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>

            <div className='flex justify-between items-center w-11/12 mx-auto'>
                <h2 className='text-2xl font-semibold'>({searchedApps.length}) Apps Found</h2>
                <label className="input">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2.5"
                            fill="none"
                            stroke="currentColor"
                        >
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                        </g>
                    </svg>
                    <input value={search}
                        onChange={(e) => setSearch(e.target.value)} type="search" required placeholder="Search" />
                </label>
            </div>

            {searchedApps.length > 0 ? (
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-11/12 mx-auto gap-6 my-16'>
                    {searchedApps.map((app) => (
                        <AppCard key={app.id} app={app} />
                    ))}
                </div>
            ) : (
                <div className='text-center my-16'>
                    <div className='text-6xl font-bold '>No Apps Found</div>
                    <button
                        onClick={() => setSearch('')}
                        className='btn text-white px-8 mt-10 bg-gradient-to-tr from-[#632EE3] to-[#9F62F2] '>
                        Show All </button>
                </div> 

            )}
        </div>
    );
};

export default Apps;