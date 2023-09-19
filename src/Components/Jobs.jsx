import React from 'react';
import SingleJob from './SingleJob';


const Jobs = ({ jobs }) => {
  return (
    <section className='jobs'>
      {jobs.map((job) => {
        return <SingleJob key={job.id} {...job} />;
      })}
    </section>
  );
};
export default Jobs;
