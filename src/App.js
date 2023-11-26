import React, { useState } from 'react';
import About from './component/about';
import Portfolio from './component/Portfolio';
import Contact from './component/contact';
import Blog from './Blog/blogpost';
import { MdLightMode } from 'react-icons/md';
import './index.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeComponent, setActiveComponent] = useState('about');

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      <div className={`bg-white ${darkMode ? 'dark:bg-black' : ''}`}>
        <button
          onClick={toggleDarkMode}
          className="text-3xl bg-white text-right right-0 top-0"
        >
          <MdLightMode />
        </button>

        <div className="min-h-screen">
          <nav className="  bg-gray-50 dark:bg-gray-700">
            <div className="max-w-screen-xl px-4 py-3 justify-center mx-auto">
              <div className="flex justify-center items-center">
                <ul className="flex flex-row items-center font-medium space-between mt-0 mr-6 space-x-8 text-sm">
                  <li>
                    <a
                     href="#about"
                      className={`text-gray-900 dark:text-white hover:underline ${
                        activeComponent === 'about' ? 'font-medium' : ''
                      }`}
                      onClick={() => setActiveComponent('about')}
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                     href="#Portfolio"
                      className={`text-gray-900 dark:text-white hover:underline ${
                        activeComponent === 'Portfolio' ? 'font-medium' : ''
                      }`}
                      onClick={() => setActiveComponent('Portfolio')}
                    >
                      Portfolio
                    </a>
                  </li>
                  <li>
                    <a
                     href="#blog"
                      className={`text-gray-900 dark:text-white hover:underline ${
                        activeComponent === 'blog' ? 'font-medium' : ''
                      }`}
                      onClick={() => setActiveComponent('blog')}
                    >
                      Blog
                    </a>
                  </li> 
                  <li>
                    <a
                     href="#contact"
                      className={`text-gray-900 dark:text-white hover:underline ${
                        activeComponent === 'contact' ? 'font-medium' : ''
                      }`}
                      onClick={() => setActiveComponent('contact')}
                    >
                      Contact
                    </a>
                  </li>
                  <li>
                    <form>
                      <label
                        htmlFor="default-search"
                        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                      >
                        Search
                      </label>
                      <div className="relative justify-end">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <svg
                            className="w-4 h-4 text-gray-500 dark:text-gray-400"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 20"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                            />
                          </svg>
                        </div>
                        <input
                          type="search"
                          id="default-search"
                          className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="Search Mockups, Logos..."
                          required
                        />
                        <button
                          type="submit"
                          className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover-bg-blue-700 dark:focus-ring-blue-800 text-right"
                        >
                          Search
                        </button>
                      </div>
                    </form>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        
          <div className="absolute bottom-auto right-0">
          <div className="py-8 px-9 mx-auto max-w-sm rounded-lg sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
        <img className="h-24 mx-auto sm:flex-shrink-0 sm:m-0 rounded-full" src={require('./man.png (1).png')} alt="Akeja" />
        <div className="text-center font-light space-y-2 sm:text-left">
          <div className="space-y-0.5">
            <p className="font-semibold text-lg text-yellow-300">
              Aklilu Tamirat
            </p>
            <p className="text-medium text text-purple-800">
              Full stack developer
            </p>
          </div>
          <button className="px-4 py-2 text-sm text-purple-700 rounded-full border hover:border-transparent focus:outline-none focus:ring-violet-500 hover:text-lg hover:text-white hover:bg-purple-700 focus:ring-offset-2 font-"><a href='mailto:tamiratake@gmail.com'>Message</a></button>
        </div>
      </div>
    </div>


              <div className="px-20 py-18 mx-16 my-16">
                <p className="mx-9 my-3 text-3xl text-white">
                  I'm <span className="font-medium text-5xl text-yellow-200">Aklilu Tamirat</span>
                </p>
                <p className="text-2xl mx-9 my-3 text-yellow-280">Full Stack Web Developer</p>
                <button className="mx-14 my-5 px-4 border-t-2-yellow-500 text-yellow-400 rounded-full border font-medium bg-transparent hover:bg-yellow-400 hover:text-white hover:border-yellow-400 transition-all duration-300 py-2 ">
              <a href='tel:+251954234576' > Hire me  </a> 
                </button>
              </div>
              {activeComponent === 'about' && <About />}
              {activeComponent === 'Portfolio' && <Portfolio />}
              {activeComponent === 'contact' && <Contact />}
              {activeComponent === 'blog' && <Blog />}
            </div>
        

          
    <div class="relative bottom-0 my-3 left-0 z-50 w-full h-auto bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600">
        <div class="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
         
            <button type="button" class="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">  
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
</div>
    </>
  );
}

export default App;
