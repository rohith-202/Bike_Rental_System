import React from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import bike from '../img/faq.png';

export const FAQ = () => {
  const faqs= [
    {
      question: '1. What makes comparing bike rental deals important?',
      answer: 'Comparing bike rental deals is important because it allows you to find the best possible deal for your needs. By comparing the prices and features of different bike rental companies, you can ensure that you are getting the best value for your money. This can help you save money on your bike rental and ensure that you have a great experience while exploring the city.'
    },
    {
      question: '2. How can I find the best bike rental deals?',
      answer: 'To find the best bike rental deals, you should start by comparing the prices and features of different bike rental companies. You can do this by visiting the websites of different bike rental companies and checking their prices and features. You can also use online bike rental comparison websites to compare the prices and features of different bike rental companies in one place. This can help you find the best bike rental deals quickly and easily.'
    },
    {
      question: '3. What should I look for when comparing bike rental deals?',
      answer: 'When comparing bike rental deals, you should look for a company that offers competitive prices, a wide range of bikes to choose from, and excellent customer service. You should also consider the location of the bike rental company and the quality of their bikes. By considering these factors, you can find the best bike rental deal for your needs and have a great experience while exploring the city.'
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  }

  return (
    <>
      <div className='flex h-[660px]' id='FAQ'>
        <div className='container h-[660px]'>
          <div className='pl-[20rem]'>
            <span className='flex justify-center text-xl font-bold mt-12'>FAQ</span>
            <span className='flex justify-center text-4xl font-extrabold mt-2'>Frequently Asked Questions</span>
            <span className='flex justify-center text-lg mt-2'>Frequently Asked Questions About the Bike Rental Reservation Process on Our Website: Responses to</span>
            <span className='flex justify-center text-lg'>Common Queries and Concerns.</span>
          </div>

          <div className='flex justify-center flex-row '>
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.3 }} 
            >
              <img src={bike} alt="Bike" />
            </motion.div>
            <div className="flex flex-col bg-white rounded-lg items-start shadow-lg mt-20 w-[50rem] h-min">
              {faqs.map((faq, index) => (
                <div key={index} className={`w-full`}>
                  <div className={`cursor-pointer p-6 w-full ${openIndex === index ? 'bg-black text-white shadow-xl shadow-blue-200' : 'bg-white'}`} onClick={() => {toggle(index)}}>
                    <div className='flex flex-col'>
                      {faq.question}
                    </div>
                  </div> 
                  {openIndex === index && (
                    <div className="mt-2 p-4">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FAQ;
