import React from 'react';
import HotelInfo from './HotelInfo';
import Welcome from './Welcome';
const Main = () => {
    return (
        <main id="wrapper">
          <Welcome />
          <HotelInfo />
        </main>        
    );
}
export default Main;