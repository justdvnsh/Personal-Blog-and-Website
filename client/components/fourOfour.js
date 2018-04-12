import React from 'react';
import Header from './Header/header';

const fourOfour = (props) => {
  return (
    <div>
      <Header type="red" />
      <div className="row">
        <div className="col-md-8 col-md-offset-2">
            <div className="card" >
              <div className="card-body">
                <center><h2>Page Not Found</h2></center>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default fourOfour;
