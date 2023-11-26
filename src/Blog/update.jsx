import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const UpdatePost = () => {
  const { id } = useParams();

  const [topic, setTopic] = useState('');
  const [link, setLink] = useState('');
  const [description, setDescription] = useState('');

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    if (name === 'topic') setTopic(value);
    else if (name === 'link') setLink(value);
    else if (name === 'description') setDescription(value);
  };

  // useEffect(() => {
  //   console.log("hello , i'm  update")
  //   loadPosts();
  // }, []);

  const loadPosts = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/${id}`);
      const postData = response.data;
      setTopic(postData.Topic);
      setLink(postData.Link);
      setDescription(postData.Description);
    } catch (error) {
      console.error(error);
    }
  };

  const updateSinglePosts = async () => {
    try {
      const formPayloads = {
        topic: topic,
        link: link,
        description: description
      };

      await axios.put(`http://127.0.0.1:8000/api/${id}/`, formPayloads, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      console.log('Post updated successfully');
      // Do something after successful update
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container" id='update'>
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Update A Post</h2>

        <form>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Topic"
              name="topic"
              value={topic}
              onChange={handleFormChange}
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Link"
              name="link"
              value={link}
              onChange={handleFormChange}
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Description"
              name="description"
              value={description}
              onChange={handleFormChange}
            />
          </div>

          <button
            onClick={updateSinglePosts}
            className="btn btn-primary btn-block"
          >
            Update Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdatePost;