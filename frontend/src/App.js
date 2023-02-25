import React from 'react';
import GeoLocator from './components'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <main className='bg-slate-500 h-screen'>
        <h1 className='font-extrabold mb-5 p-5 text-white text-xl'>WikiGeoLocator</h1>
        <GeoLocator />
      </main>
    </div>
  );
}

export default App;
