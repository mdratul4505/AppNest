

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import useAppsData from '../Hooks/useApps';
import downloadImg from '../assets/icon-downloads.png';
import ratengsImg from '../assets/icon-ratings.png';
import reviewImg from '../assets/icon-review.png';



const AppsDetails = () => {
  const { id } = useParams();
  const { apps } = useAppsData();
  const app = apps.find(a => String(a.id) === id);

  const [installed, setInstalled] = useState(false);

  useEffect(() => {
  
    if (!app) return;

    const existingList = JSON.parse(localStorage.getItem('Installed')) || [];
    const isInstalled = existingList.some(a => a.id === app.id);
    setInstalled(isInstalled);
  }, [app]); 

 
  if (!app) {
    return (
      <div className="py-10 text-gray-500 flex items-center justify-center">
        <h1>Loading...</h1>
      </div>
    );
  }

  const { title, image, ratingAvg, downloads, reviews, companyName, size } = app;

  const handleAddToInstallation = () => {
    const existingList = JSON.parse(localStorage.getItem('Installed')) || [];

    const isDuplicate = existingList.some(a => a.id === app.id);
    if (isDuplicate) return alert(`${title} is already installed!`);

    const updatedList = [...existingList, app];
    localStorage.setItem('Installed', JSON.stringify(updatedList));

    setInstalled(true);
    alert(`${title} installed successfully!`);
  };

  return (
    
    <div className="w-10/12 mx-auto my-20">
      {/* card section */}
      <div className="flex gap-30">
        <div>
          <img
            className="w-[350px] h-[300px] rounded-xl"
            src={image}
            alt={title}
          />
        </div>
        <div className="flex-1">
          <h1 className="text-3xl font-bold">{title}</h1>
          <h4 className="text-xl font-semibold">
            Developed by{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#632EE3] to-[#9F62F2]">
              {companyName}
            </span>
          </h4>

          <div className="border-t border-gray-200 flex my-9.5"></div>

          <div className="flex gap-20">
            <div>
              <img className="w-8" src={downloadImg} alt="downloads" />
              <p className="py-1">Downloads</p>
              <h4 className="text-3xl font-bold">{downloads}M</h4>
            </div>
            <div>
              <img className="w-8" src={ratengsImg} alt="ratings" />
              <p className="py-1">Average Ratings</p>
              <h4 className="text-3xl font-bold">{ratingAvg}</h4>
            </div>
            <div>
              <img className="w-8" src={reviewImg} alt="reviews" />
              <p className="py-1">Total Reviews</p>
              <h4 className="text-3xl font-bold">{reviews}k</h4>
            </div>
          </div>

          <button
            onClick={handleAddToInstallation}
            disabled={installed}
            className={`btn mt-5 text-xl font-medium ${
              installed
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-[#00d390] text-white'
            }`}
          >
            {installed ? 'Installed' : `Install Now (${size} Mb)`}
          </button>
        </div>
      </div>

      <div className="border border-gray-300 my-8"></div>
    </div>
  );
};

export default AppsDetails;
