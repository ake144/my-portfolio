import React from 'react';
import Posts from './users';


function Portfolio() {
  return (
    <>
      <div className="font-lg text-5xl font-mono text-center py-9">
        <p>Works</p>

        <div>
          <Posts/>
        </div>
      </div>
      
    </>
  );
}

export default Portfolio;