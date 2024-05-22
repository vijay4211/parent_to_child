import React from 'react';

const Dynamic = ({ backgroundColor, width, height, children }) => {
  const divStyle = {
    backgroundColor: backgroundColor || "lightblue",
    width: width || '200px',
    height: height || '200px',
    border: '1px solid black',
    padding: '10px',
    margin: '10px'
  };

  return (
    <div style={divStyle}>
      {children}
    </div>
  );
};

export default Dynamic;
