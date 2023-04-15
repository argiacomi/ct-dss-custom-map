import React, { useState, useRef } from 'react';
import OfficeLocationCard from './OfficeLocationCard';
import GoogleMaps from './GoogleMaps';
import officeData from './officeData.json';

const Offices = () => {
  const [selectedLocation, setSelectedLocation] = useState({
    lat: 41.7677753,
    lng: -72.6877505
  });
  const [locationZoom, setLocationZoom] = useState(9);

  const mapContainerRef = useRef(null);

  const handleLocationClick = (location) => {
    setSelectedLocation(location.geometry.location);
    setLocationZoom(13);
    mapContainerRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <div className='col-span-full row-start-4 max-h-full w-full rounded-b-md bg-gray-50 dark:bg-gray-800 md:col-span-1 md:row-start-3 md:overflow-y-auto md:rounded-bl-md md:rounded-br-none'>
        {officeData.map((location, index) => (
          <OfficeLocationCard
            key={index}
            label={index + 1}
            title={location.title}
            address={location.address}
            city={location.city}
            place={location.place_id}
            isLast={index === officeData.length - 1}
            onClick={() => handleLocationClick(location)}
          />
        ))}
      </div>
      <div
        ref={mapContainerRef}
        className='col-span-full row-start-3 h-full w-full md:col-span-2 md:col-start-2 md:row-start-2 md:row-end-4'
      >
        <GoogleMaps
          center={selectedLocation}
          zoom={locationZoom}
          locations={officeData}
          apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}
        />
      </div>
    </>
  );
};

export default Offices;
