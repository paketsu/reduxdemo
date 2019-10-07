import React from 'react';
import './App.css';
import Counter from './containers/Counter/Counter';

const App = () => {
  return (
    <div className="App">
      <main>
        <div>
          <Counter />
        </div>
      </main>
    </div>
  );
}

export default App;
