import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { NavLink} from 'react-router-dom';

const PostDetail = () => {
  const [post, setPost] = useState({});
  const { id } = useParams();



  const getSinglePost = async () => {
    try {
      const { data } = await axios.get(`http://127.0.0.1:8000/api/${id}/`);
      setPost(data);
      console.log(data)
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(()=>{
    getSinglePost()
  },[])

  const handleDeleteUser = async (id) => {
    const confirmed = window.confirm('Are you sure you want to delete this user?');
  
    if (confirmed) {
      try {
        await axios.delete(`http://127.0.0.1:8000/api/${id}/`);
        window.alert("successfully removed")
        const nav = NavLink();
       nav('/blog');     
        // Handle successful deletion or UI updates here
      } catch (error) {
        console.error(error);
        // Handle errors, such as failed deletion
      }
    }
  };
  

  return (<>
  <div id='postdetail'>
    <header>
    <nav class="bg-white border-gray-200 px-4 lg:px-6 py-2.5  dark:bg-gray-800">
        <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <a href="https://gedicoin.com" class="flex items-center rounded-t-md">
                
                <span class="self-center text-xl whitespace-nowrap dark:text-white font-semibold  ">Akeja</span>
            </a>
            <div class="flex items-center lg:order-2">
                <HashLink href="" class="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Log in</HashLink>
                <HashLink to={{pathname : `/blog/add`}} class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"> Add a Post</HashLink>
                <button data-collapse-toggle="mobile-menu-2" type="button" class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                    <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </button>
            </div>
            <div class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                    <li>
                        <a href="#" class="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white" aria-current="page">Home</a>
                    </li>
                    <li>
                        <a href="#blog" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">posts</a>
                    </li>
                    <li>
                        <a href="" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Team</a>
                    </li>
                    <li>
                        <a href="#contact" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</header>



    <div id='detail' className="flex items-center justify-center ">
      <div className="w-1/2 bg-custom-bg ">
        <div className="max-w-3xl mx-auto   shadow-lg rounded-lg overflow-hidden">   </div>
        <img
              className="w-full h-64 object-cover"
                      src={post.image}
                      alt={`${post.topic}`}
                  />
               <h4 className='text-center text-white my-2 font-bold text-2xl'>{post?.topic}</h4>

              <p className="text-base text-white space-y-8 space-x-5 mb-3">
                {post?.description}
              </p>
    
            <div className="flex justify-center">
              <button
                className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
                onClick={()=>handleDeleteUser(post.id)}
              >
                Delete
              </button>
              <Link
                to={{pathname :`${post.id}/update`}}
                className="px-4 py-2 ml-2 text-white bg-green-500 rounded-md hover:bg-green-600"
              >
                Update
              </Link>
            </div>
          
                <div class="flex bg-white shadow-lg rounded-lg mx-4 md:mx-auto my-56 max-w-md  md:max-w-2xl "> <div class="flex items-start px-4 py-6">
                      <img class="w-12 h-12 rounded-full object-cover mr-4 shadow" src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="avatar"/>
                      <div class="">
                        <div class="flex items-center justify-between">
                            <h2 class="text-lg font-semibold text-gray-900 -mt-1">akeja  </h2>
                            <small class="text-sm text-gray-700">22h ago</small>
                        </div>
                        <p class="text-gray-700">{Date} </p>
                        <span className="font-medium text-1xl text-yellow-300">
                          Passionate Content Creator
                        </span>
                        <span className="text-1xl text-blue-500"> and </span>
                        <span className="font-medium text- text-yellow-300">
                          Writer
                        </span>
                        <div class="mt-4 flex items-center">
                            <div class="flex mr-2 text-gray-700 text-sm mr-3">
                              <svg fill="none" viewBox="0 0 24 24"  class="w-4 h-4 mr-1" stroke="currentColor">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                                </svg>
                              <span>40</span>
                            </div> 
                            <div class="flex mr-2 text-gray-700 text-sm mr-8">
                              <svg fill="none" viewBox="0 0 24 24" class="w-4 h-4 mr-1" stroke="currentColor">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"/>
                              </svg>
                              <span>55</span>
                            </div>
                            <div class="flex mr-2 text-gray-700 text-sm mr-4">
                              <svg fill="none" viewBox="0 0 24 24" class="w-4 h-4 mr-1" stroke="currentColor">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"/>
                                </svg>
                              <span><a href='https://twitter.com/'>share  </a></span>
                            </div>
                        </div>
                      </div>
                  </div>
                </div>
          </div>
        </div>
      </div>


    <div class="relative bottom-0 my-3 left-0 z-50 w-full h-auto bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600">
        <div class="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
             <button type="button" onClick={()=>{'https://coinged.com'}} class="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
                <svg class="w-5 h-5 mb-2 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
                </svg>
                <span class="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">Home</span>
            </button>
               <button type="button" class="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
                    <svg class="w-5 h-5 mb-2 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M11.074 4 8.442.408A.95.95 0 0 0 7.014.254L2.926 4h8.148ZM9 13v-1a4 4 0 0 1 4-4h6V6a1 1 0 0 0-1-1H1a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h17a1 1 0 0 0 1-1v-2h-6a4 4 0 0 1-4-4Z"/>
                    <path d="M19 10h-6a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h6a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1Zm-4.5 3.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM12.62 4h2.78L12.539.41a1.086 1.086 0 1 0-1.7 1.352L12.62 4Z"/>
                    </svg>
                    <span class="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">Privacy Policy</span>
                </button>
            <button type="button" class="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
                <svg class="w-5 h-5 mb-2 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12.25V1m0 11.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M4 19v-2.25m6-13.5V1m0 2.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M10 19V7.75m6 4.5V1m0 11.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM16 19v-2"/>
                </svg>
                <span class="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">Terms and Conditions</span>
            </button>
            <button type="button" class="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
                <svg class="w-5 h-5 mb-2 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
                </svg>
                <span class="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">Profile</span>
            </button>
              <p class="w-full px-3 py-2 text-gray-500 dark:text-gray-400 mt-4">
              &copy; 2023 <a href="https://portfo-puce.vercel.app/" class="text-blue-600 text-1xl dark:text-blue-500">akeja</a>
              </p>
        </div>
    </div>
    </>
  
  );
};

export default PostDetail;