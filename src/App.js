import React from 'react';
import Dynamic from './Dynamic';

const App = () => {
  return (
    <div>
      <Dynamic backgroundColor="lightgreen"  height="400px">
        <h2>Hello World!</h2>
        <p>This is a dynamic div created using React functional component.</p>
      </Dynamic>
    </div>
  );
};

export default App;

