import React, { useState, useEffect } from 'react';
// import { createClient } from '@supabase/supabase-js'

// import { Auth } from '@supabase/auth-ui-react'
// import { ThemeSupa } from '@supabase/auth-ui-shared'
// const supabase = createClient('https://zxhpkfdcdpvfestydkfl.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp4aHBrZmRjZHB2ZmVzdHlka2ZsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTg1MzYwNjgsImV4cCI6MjAxNDExMjA2OH0.rWoZmHDXcvo66vOl_hg4sJiU7E0ZBBuuD2zHvEENrDY')

// const auth = supabase.auth
const toBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => {
      resolve(reader.result);
    };

    reader.onerror = (error) => {
      reject(error);
    };
  });
};

function AddPostForm() {
//   const [session, setSession] = useState(null)
//    useEffect(() => {
//     supabase.auth.getSession().then(({ data: { session } }) => {
//       setSession(session)
//       console.log(session);
//     })

//     const {
//       data: { subscription },
//     } = supabase.auth.onAuthStateChange((_event, session) => {
//       setSession(session)
//     })

//     return () => subscription.unsubscribe()
//   }, [])

  const [formPayloads, setFormPayloads] = useState({
    topic: '',
    link: '',
    description: '',
    image: ""
  });
  const [isPostedSuccessfully, setIsPostedSuccessfully] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormPayloads((prevState) => ({
      ...prevState,
      [name]: value
    }));

    console.log(formPayloads)
  };

  const handleImageChange = async (event) => {
    const file = event.target.files[0];
    const base64String = await toBase64(file);
    console.log(base64String)
    setFormPayloads((prevState) => ({
      ...prevState,
      image: base64String
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let result ;
      try{
          result  =  await  fetch("http://127.0.0.1:8000/api/", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(formPayloads),
          })

        
          
      }
      catch(err){
        console.log("❌❌❌❌",err)
      }
      setIsPostedSuccessfully(true)
      console.log("😁👍👍 posted some staff",result)
  };

//   if (!session) {
//      console.log("must Logged in");
//     return (<Auth className='bg-yellow-600 text-gray-100 focus:border-red-50 font-thin ' supabaseClient={supabase} appearance={{ theme: ThemeSupa }} />)
//   }
// else {
//   console.log("welcome man");}
  return (
    <div className="container mx-auto py-10">
      <div className="w-3/4 mx-auto bg-white shadow-md p-5 rounded-lg">
        <h2 className="text-3xl font-semibold text-center mb-4">Add A Post</h2>
        {isPostedSuccessfully ? (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-2 mb-4 rounded-md">
            Successfully added! 
            <button
              className="float-right text-sm text-red-500 ml-4"
              onClick={() => setIsPostedSuccessfully(false)}
            >
              Close
            </button>
 

          </div>
        ) : null}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="topic" className="block text-sm font-medium text-gray-700">
              Topic
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              name="topic"
              value={formPayloads.topic}
              onChange={handleChange}
              placeholder="Enter your topic"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="link" className="block text-sm font-medium text-gray-700">
              Link
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              name="link"
              value={formPayloads.link}
              onChange={handleChange}
              placeholder="Enter your link"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              value={formPayloads.description}
              onChange={handleChange}
              rows="4"
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              placeholder="Write the content here..."
              name="description"
            ></textarea>
          </div>
          <div className="mb-4">
            <label htmlFor="file" className="block text-sm font-medium text-gray-700">
              Upload Your Image
            </label>
            <input type="file" name="file" onChange={handleImageChange} />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300">
           
            Post
          </button>
        </form>
      </div>
    </div>
  );
}



/*
      to add image field i'm going to use 
<label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="user_avatar">Upload file</label>
<input class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="user_avatar_help" id="user_avatar" type="file">
<div class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="user_avatar_help">A profile picture is useful to confirm your are logged into your account</div>

*/


export default AddPostForm;