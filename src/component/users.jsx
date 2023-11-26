import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Posts() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/portfolio/')
      .then(response => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (users.length === 0) {
    return <div>No users found</div>;
  }

  return (
    <div id='works' className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <div className="grid grid-cols-2 gap-4 min-h-screen">
      <div className="col-span-1 px-2 py-2 rounded-lg mx-4 my-5 bg-gray-800 text-white font-bold text-3xl">
        <div>WordPress Websites</div>
        <div className="col-span-2 rounded-sm h-40 mx-10 my-8 px-4 py-2 text-center bg-purple-300">
          <a
            href="https://coinocrypt.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black font-semibold"
          >
            coinocrypt
          </a>
        </div>
        <div className="col-span-1 px-2 py-2 rounded-lg mx-4 my-9 bg-purple-300 h-40 text-white">
          <a
            href="https://gedicoin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black font-semibold"
          >
            gedicoin
   
          </a>
        </div>
           
      </div>
      <div className="col-span-1 px-2 py-2 rounded-lg mx-4 my-5 bg-gray-800 text-white font-bold text-3xl">
        <div>Other Projects</div>
        <div className="col-span-2 rounded-sm bg-yellow-300 h-40 mx-10 my-8 px-4 py-2 text-center flex items-center justify-center">
          <img
            src="path/to/image1.jpg"
            alt="Project 1"
            className="w-32 h-32 object-cover rounded-lg"
          />
        </div>
        <div className="col-span-1 rounded-sm bg-yellow-300 h-40 mx-13 my-14 px-6 py-5 text-center flex items-center justify-center">
          <img
            src="path/to/image2.jpg"
            alt="Project 2"
            className="w-32 h-32 object-cover rounded-lg"
          />
        </div>
      </div>
  
      {users.map((item, index) => (
        <div
          key={item.id}
          className={`col-span-1 px-2 py-2 rounded-lg mx-4 my-5 ${
            index % 2 === 0 ? 'bg-purple-300' : 'bg-yellow-300'
          } text-white`}
        >
          <a href={item.link}>
            <img
              src={item.image}
              alt={item.name}
              className="mb-2 w-full h-40 object-cover rounded-lg"
            />
          </a>
          <a href={item.link}>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {item.name}
            </h5>
          </a>
         
          <a
            href={item.link}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit site
            <svg
              className="w-3.5 h-3.5 ml-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      ))}
    </div>
  </div>
  )  }

export default Posts;