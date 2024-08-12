import React, { useState } from 'react';

const faqData = [
  {
    question: 'What is a property survey and do I need one?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at facilisis turpis. Sed eget eleifend dui, et tristique velit. Donec quis neque aliquam, suscipit nibh mollis, scelerisque quam.'
  },
  {
    question: 'What should I expect from my video call with my designer?',
    answer: 'Curabitur nec lacus non leo commodo tincidunt. Pellentesque id magna at lacus euismod porta. Donec mattis in nisl sed faucibus.'
  },
  {
    question: 'Can I revise my plan?',
    answer: 'Suspendisse potenti. Etiam ut ligula tincidunt, tincidunt massa nec, interdum orci. Nulla facilisi.'
  },
  {
    question: 'Tell me about your plant delivery service?',
    answer: 'Aenean bibendum nulla vel ligula sodales facilisis. Sed facilisis ligula nec ultricies venenatis.'
  },
  {
    question: 'How long does it take to get my design?',
    answer: 'Nulla vehicula ex nec urna fringilla, sit amet facilisis justo efficitur.'
  },
  {
    question: 'What time can I arrive?',
    answer: 'Mauris nec nisi nec elit hendrerit ultricies. Praesent nec orci non leo posuere volutpat.'
  }
];

const StillHaveQuestions = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex justify-between p-8 bg-white">
      <div className="flex-1 grid grid-cols-2 gap-4">
        <img src="https://via.placeholder.com/150" alt="Image 1" className="rounded-lg shadow-md" />
        <img src="https://via.placeholder.com/150" alt="Image 2" className="rounded-lg shadow-md" />
        <img src="https://via.placeholder.com/150" alt="Image 3" className="rounded-lg shadow-md" />
        <img src="https://via.placeholder.com/150" alt="Image 4" className="rounded-lg shadow-md" />
      </div>
      <div className="flex-1 ml-8">
        <h2 className="text-2xl font-semibold mb-6">Still Have Questions?</h2>
        <div className="bg-gray-100 p-4 rounded-lg shadow-md">
          {faqData.map((faq, index) => (
            <div key={index}>
              <div
                className="cursor-pointer py-2 flex justify-between items-center border-b"
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>
                <span>{openIndex === index ? '-' : '+'}</span>
              </div>
              {openIndex === index && (
                <div className="p-4 text-sm text-gray-600">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StillHaveQuestions;
