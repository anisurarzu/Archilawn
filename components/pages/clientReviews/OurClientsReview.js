import React, { useState } from 'react';

const reviews = [
  {
    name: 'Wade Warren',
    role: 'CEO, Warren IT',
    image: 'https://via.placeholder.com/50', // replace with actual image URL
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at facilisis turpis. Sed eget eleifend dui, et tristique velit. Donec quis neque aliquam, suscipit nibh mollis, scelerisque quam.',
    rating: 5
  },
  {
    name: 'Esther Howard',
    role: 'Designer, 99 Design',
    image: 'https://via.placeholder.com/50', // replace with actual image URL
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at facilisis turpis. Sed eget eleifend dui, et tristique velit. Donec quis neque aliquam, suscipit nibh mollis, scelerisque quam.',
    rating: 5
  },
  {
    name: 'Jenny Wilson',
    role: 'Lawyer',
    image: 'https://via.placeholder.com/50', // replace with actual image URL
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at facilisis turpis. Sed eget eleifend dui, et tristique velit. Donec quis neque aliquam, suscipit nibh mollis, scelerisque quam.',
    rating: 5
  },
  {
    name: 'John Doe',
    role: 'CTO, Tech World',
    image: 'https://via.placeholder.com/50', // replace with actual image URL
    review: 'Curabitur eget libero sit amet nulla ultricies consectetur. Vivamus a libero ac leo pharetra malesuada quis eget purus.',
    rating: 4
  },
  {
    name: 'Jane Smith',
    role: 'Marketing, Creative Studio',
    image: 'https://via.placeholder.com/50', // replace with actual image URL
    review: 'Sed in purus a ligula euismod dapibus. Duis euismod sem a nulla aliquam, at tristique elit facilisis.',
    rating: 5
  }
];

const OurClientsReview = () => {
  const [currentReview, setCurrentReview] = useState(0);

  const handleDotClick = (index) => {
    setCurrentReview(index);
  };

  const startIndex = currentReview * 3;
  const displayedReviews = reviews.slice(startIndex, startIndex + 3);

  return (
    <div className="p-12 text-center bg-gray-100 rounded-lg">
      <h2 className="text-2xl font-semibold">Our clients reviews</h2>
      <div className="flex justify-center gap-8 mt-8">
        {displayedReviews.map((review, index) => (
          <div key={index} className="p-6 bg-white rounded-lg shadow-lg w-72">
            <div className="mb-4 text-yellow-500">
              {'★'.repeat(review.rating)}
            </div>
            <p>{review.review}</p>
            <div className="flex items-center mt-6">
              <img src={review.image} alt={review.name} className="w-12 h-12 mr-4 rounded-full" />
              <div>
                <h4 className="m-0 font-medium">{review.name}</h4>
                <p className="m-0 text-gray-500">{review.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        {Array.from({ length: Math.ceil(reviews.length / 3) }).map((_, index) => (
          <span
            key={index}
            onClick={() => handleDotClick(index)}
            className={`cursor-pointer mx-1 text-2xl ${currentReview === index ? 'text-black' : 'text-gray-300'}`}
          >
            ●
          </span>
        ))}
      </div>
    </div>
  );
};

export default OurClientsReview;
