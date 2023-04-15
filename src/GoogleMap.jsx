// GoogleMaps.js
import React, { useEffect, useRef } from 'react';
import { useGoogleMapsLoader } from './lib/loadGoogleMaps';

const GoogleMaps = ({ center, zoom }) => {
	const mapRef = useRef();
	const googleMapsLoaded = useGoogleMapsLoader({
		key: import.meta.env.VITE_GOOGLE_MAPS_API_KEY
		// Add other options as needed, using camel case.
		// Use the 'v' parameter to indicate the version to load (alpha, beta, weekly, etc.)
	});

	useEffect(() => {
		if (googleMapsLoaded) {
			const map = new google.maps.Map(mapRef.current, {
				center,
				zoom
			});
		}
	}, [googleMapsLoaded, center, zoom]);

	return (
		<div
			className='aspect-video h-full w-full md:aspect-auto md:rounded-r-md'
			ref={mapRef}
		/>
	);
};

export default React.memo(GoogleMaps);
