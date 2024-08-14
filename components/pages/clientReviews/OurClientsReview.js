"use client";
import Image from "next/image";
import React, { useState } from "react";
import { useEffect } from "react";

const reviews = [
  {
    name: "Wade Warren",
    role: "CEO, Warren IT",
    image: "/images/clientReview/client_Review1.png",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at facilisis turpis. Sed eget eleifend dui, et tristique velit. Donec quis neque aliquam, suscipit nibh mollis, scelerisque quam.",
    rating: 3,
  },
  {
    name: "Esther Howard",
    role: "Designer, 99 Design",
    image: "/images/clientReview/client_Review2.png",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at facilisis turpis. Sed eget eleifend dui, et tristique velit. Donec quis neque aliquam, suscipit nibh mollis, scelerisque quam.",
    rating: 5,
  },
  {
    name: "Jenny Wilson",
    role: "Lawyer",
    image: "/images/clientReview/client_Review3.png",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at facilisis turpis. Sed eget eleifend dui, et tristique velit. Donec quis neque aliquam, suscipit nibh mollis, scelerisque quam.",
    rating: 5,
  },
  {
    name: "John Doe",
    role: "CTO, Tech World",
    image: "/images/clientReview/client_Review1.png",
    review:
      "Curabitur eget libero sit amet nulla ultricies consectetur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at facilisis turpis. Sed eget eleifend dui, et tristique velit. Donec quis neque aliquam, suscipit nibh mollis, scelerisque quam, suscipit.",
    rating: 4,
  },
  {
    name: "Jane Smith",
    role: "Marketing, Creative Studio",
    image: "/images/clientReview/client_Review3.png",
    review:
      "Sed in purus a ligula euismod dapibus. Duis euismod sem a nulla aliquam, at tristique elit facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at facilisis turpis. Sed eget eleifend dui, et tristique velit. Donec quis neque aliquam, suscipit ",
    rating: 5,
  },
  {
    name: "Jane Smith",
    role: "Marketing, Creative Studio",
    image: "/images/clientReview/client_Review1.png",
    review:
      "Sed in purus a ligula euismod dapibus. Duis euismod sem a nulla aliquam, at tristique elit facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at facilisis turpis. Sed eget eleifend dui, et tristique velit. Donec quis neque aliquam, suscipit ",
    rating: 5,
  },
];

const OurClientsReview = () => {
  const [currentReview, setCurrentReview] = useState(0);
  const [reviewsToShow, setReviewsToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setReviewsToShow(1);
      } else if (width < 1024) {
        setReviewsToShow(2);
      } else {
        setReviewsToShow(3);
      }
    };

    // Initial check
    handleResize();

    // Add event listener for resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleDotClick = (index) => {
    setCurrentReview(index);
  };

  const startIndex = currentReview;
  const displayedReviews = reviews.slice(
    startIndex,
    startIndex + reviewsToShow
  );

  console.log("Displayed Reviews:", displayedReviews);

  const isLargeReview = displayedReviews.some(
    (review) => review.review.length >= 320
  );

  return (
    <div className="flex items-center justify-center">
      <div className="w-[190vh] lg:mx-0 md:mx-4 mx-3 rounded-[30px] bg-[#F3F3F9]">
        <div className="lg:px-20 md:px-4 px-3 lg:py-12 md:py-8 py-6 text-center rounded-lg">
          <h2
            className="lg:text-4xl md:text-3xl text-[22px] text-center text-[#123747] tracking-wide"
            style={{
              fontFamily: "Tinos",
            }}
          >
            Our clients reviews
          </h2>
          <div
            className={`flex lg:gap-8 md:gap-4 gap-2 lg:mt-10 md:mt-10 mt-5 ${
              isLargeReview
                ? "lg:h-[50vh] md:h-[20vh] h-[50vh]"
                : "lg:h-[45vh] md:h-[35vh] h-[60vh]"
            }`}
          >
            {displayedReviews.length > 0 ? (
              displayedReviews.map((review, index) => (
                <div
                  key={index}
                  className="bg-white lg:p-12 md:p-6 p-7 rounded-2xl"
                >
                  <div className="flex text-left text-2xl space-x-[2px]">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span
                        key={i}
                        className={
                          i < review.rating ? "text-[#FCB933]" : "text-gray-300"
                        }
                      >
                        ★
                      </span>
                    ))}
                  </div>

                  <p className="text-left text-lg my-6 text-black">{review.review}</p>

                  <div className="">
                    <hr
                      style={{ borderColor: "#D2D2D2", borderWidth: "1px" }}
                      className="lg:mt-10 md:mt-10 mt-8 mb-3"
                    />

                    <div className="flex items-center">
                      <Image
                        src={review.image}
                        alt={review.name}
                        className="w-12 h-12 mr-4 rounded-full"
                        style={{ objectFit: "cover" }}
                        width={50}
                        height={50}
                      />

                      <div className="text-left text-black">
                        <h4 className="font-semibold">{review.name}</h4>
                        <p className="">{review.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>No reviews available.</p>
            )}
          </div>

          <div className="flex justify-center lg:mt-8 md:mt-8 mt-3">
            {Array.from({
              length: Math.ceil(reviews.length - reviewsToShow + 1),
            }).map((_, index) => (
              <div
                key={index}
                onClick={() => handleDotClick(index)}
                className="flex justify-center items-center"
              >
                <div
                  className={`cursor-pointer lg:mx-1 md:mx-1 mx-2 lg:text-2xl md:text-2xl text-3xl ${
                    currentReview === index ? "text-black" : "text-gray-300"
                  }`}
                >
                  ●
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurClientsReview;
