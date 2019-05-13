import React from 'react';
import appStyle from './app.module.sass';
import Home from './components/Home';

function App() {
  return (
    <div className={appStyle.app}>
      <Home />
    </div>
  );
}

export default App;
