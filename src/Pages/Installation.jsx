import React, { useEffect, useState } from 'react';
import downloadImg from '../assets/icon-downloads.png';
import ratengsImg from '../assets/icon-ratings.png';
 import { ToastContainer, toast } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';



const Installation = () => {
    const [installed, setInstalled] = useState([])
    const [sortOrder, setSortorder] = useState('none')
    useEffect(() => {
        const savedList = JSON.parse(localStorage.getItem('Installed')) || [];
        if (savedList) setInstalled(savedList)
    }, [])

    const sortedItem = (() => {
        if (sortOrder === 'downloads-asc') {
            return [...installed].sort((a, b) => a.downloads - b.downloads)
        } else if (sortOrder === 'downloads-desc') {
            return [...installed].sort((a, b) => b.downloads - a.downloads)
        } else {
            return installed
        }
    }) ()



    const handleRemove = (id) => {
    const existingList = JSON.parse(localStorage.getItem('Installed')) || [];
    const removedApp = existingList.find(a => a.id === id); 
    const updatedList = existingList.filter(a => a.id !== id);
    
    localStorage.setItem('Installed', JSON.stringify(updatedList));
    setInstalled(updatedList); 
    toast.success(`${removedApp?.title} Uninstalled Successfully!✅`);
  };
    return (
        <div className='w-11/12 my-20 mx-auto'>
            <div>
                <div className='text-center my-9'>
                    <h1 className='font-bold text-5xl'>Your Installed Apps</h1>
                    <p className='text-gray-400 mt-3 text-xl'>Explore All Trending Apps on the Market developed by us</p>
                </div>
                <div className='flex justify-between items-center'>
                    <h2 className='text-3xl font-semibold'>({installed.length}) Apps Found</h2>


                    <label className='bg-gray-500 text-white rounded-2xl p-3'>
                        <select className='bg-gray-500 text-white ' value={sortOrder} onChange={(e) => setSortorder(e.target.value)}>
                            <option value="none">Sort By Download</option>
                            <option value="downloads-asc">Low-&gt;High</option>
                            <option value="downloads-desc">High-&gt;Low</option>
                        </select>
                    </label>

                </div>
            </div>

            <div className='my-5'>
                {
                    sortedItem.map(a => (<div key={a.id} className='bg-base-100  shadow-sm border border-gray-200 p-8 flex justify-between items-center'>

                        <div className='flex gap-8  items-center'>
                            <div><img className='w-[200px] rounded-2xl' src={a.image} alt="" /></div>
                            <div>
                                <h3 className='text-2xl font-semibold mb-8'>{a.title}</h3>
                                <div className='flex gap-5'>
                                    <div className='flex gap-2 text-xl font-semibold'>
                                        <img className='h-6' src={downloadImg} alt="" />
                                        <span className='text-[#00D390]'>{a.downloads}M</span>
                                    </div>
                                    <div className='flex gap-2 text-xl font-semibold'>
                                        <img className='h-6' src={ratengsImg} alt="" />
                                        <span className='text-orange-400'>{a.ratingAvg}</span>
                                    </div>
                                    <div className='flex gap-2 text-xl font-semibold'>

                                        <span >{a.reviews}MB</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div>
                            <button  onClick={() => handleRemove(a.id)} className='bg-[#00d390] text-white btn px-8 py-4'> Usntall</button>
                        </div>

                    </div>))
                }

            </div>

                <ToastContainer /> 

        </div>
    );
};

export default Installation;