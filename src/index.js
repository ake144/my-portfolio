import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import App from './App';
import PostDetail from './Blog/postdetail';
import AddPost from './Blog/add';
import UpdatePost from './Blog/update';
import BlogPost from './Blog/blogpost';
import NotFound from './component/Notfound';

const root = ReactDOM.createRoot(document.getElementById('root'));
function MainComponent() {
  return (
    <div className='bg-custom-bg'>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route exact path="/blog" element={<BlogPost />} />
        <Route exact path="blog/add" element={<AddPost />} />
        <Route exact path="/blog/:id" element={<PostDetail />} />
        <Route exact path="/blog/:id/update" element={<UpdatePost />} />
        <Route path="*" component={NotFound} />
      </Routes>
    </div>
  );
}

root.render(
 
  <Router>
    <MainComponent />
  </Router>

);