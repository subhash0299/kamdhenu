import React from 'react';
import DesktopHomePage from './DesktopHomePage'; // Move your current code here
import MobileHomePage from './MobileHomePage';   // Create a new mobile layout here

const HomePage = () => {
  return (
    <>
      {/* Desktop Version */}
      <div className="hidden sm:block">
        <DesktopHomePage />
      </div>
      {/* Mobile Version */}
      <div className="block sm:hidden">
        <MobileHomePage />
      </div>
    </>
  );
};

export default HomePage;