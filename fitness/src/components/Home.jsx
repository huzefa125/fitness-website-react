import React from 'react';
import Navbar from './Navbar';
import Poster from './Poster';
import Cards from './Cards';
import Bottom from './Bottom';
import { ClassProvider } from '../context/context';
import Carding from './Carding';

function Home() {
  return (
    <ClassProvider>
      <div className="h-full w-full overflow-x-hidden">
        <Navbar />
        <Poster />
        <Cards />
        <Carding></Carding>
        <Bottom />
      </div>
    </ClassProvider>
  );
}

export default Home;
