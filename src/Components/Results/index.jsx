// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Results.scss';

const Results = ({ data, headers, loading }) => {
  return (
    <section>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <div>
            <h3>Response Headers:</h3>
              {headers && JSON.stringify(headers, null, 2)}
          </div>
          <div>
            <h3>Response Data:</h3>
              {data && JSON.stringify(data, null, 2)}
          </div>
        </>
      )}
    </section>
  );
};
export default Results;