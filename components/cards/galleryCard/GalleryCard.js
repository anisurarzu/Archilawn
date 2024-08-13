import React, { useState } from 'react';

const GalleryCard = () => {
  // Array of images
  const images = [
    'https://via.placeholder.com/600x400?text=Image+1',
    'https://via.placeholder.com/600x400?text=Image+2',
    'https://via.placeholder.com/600x400?text=Image+3',
    'https://via.placeholder.com/600x400?text=Image+4',
  ];

  // State to keep track of the current image index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to handle next image
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to handle previous image
  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="flex items-center justify-between bg-white p-8 shadow-md rounded-lg max-w-4xl mx-auto">
      <div className="max-w-md">
        <h2 className="text-2xl font-semibold mb-4">We can bring your ideas to life</h2>
        <p className="text-gray-700 mb-6">
          The use of modern, state-of-the-art technologies like 3D rendering and virtual reality to help design and 
          visualise a project has always been a crucial part in helping clients and professionals alike to really 
          understand exactly what the proposed design will look like in its context – without so much as a shovel 
          being put in the ground.
        </p>
        <button className="bg-green-500 text-white px-6 py-3 rounded-full shadow-md hover:bg-green-600 focus:outline-none">
          Get Inspired
        </button>
      </div>
      <div className="relative max-w-xs">
        <img 
          src={images[currentIndex]} 
          alt="Gallery" 
          className="rounded-lg shadow-md"
        />
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          <button 
            onClick={prevImage} 
            className="bg-white p-2 rounded-full shadow-md focus:outline-none"
          >
            &#8249; {/* Left arrow icon */}
          </button>
          <button 
            onClick={nextImage} 
            className="bg-white p-2 rounded-full shadow-md focus:outline-none"
          >
            &#8250; {/* Right arrow icon */}
          </button>
        </div>
      </div>
    </div>
  );
}

export default GalleryCard;
