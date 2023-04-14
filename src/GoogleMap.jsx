import React, { useEffect, useRef, useState } from 'react';
import { loadGoogleMaps } from './lib/loadGoogleMaps';

const GoogleMaps = ({ center, zoom }) => {
	const mapRef = useRef();
	const [googleMapsLoaded, setGoogleMapsLoaded] = useState(false);

	useEffect(() => {
		if (window.google && window.google.maps) {
			setGoogleMapsLoaded(true);
		} else {
			loadGoogleMaps({
				key: import.meta.env.VITE_GOOGLE_MAPS_API_KEY
				// Add other options as needed, using camel case.
				// Use the 'v' parameter to indicate the version to load (alpha, beta, weekly, etc.)
			}).then(() => setGoogleMapsLoaded(true));
		}
	}, []);

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
			className='rounded-r-lg'
			ref={mapRef}
			style={{ width: '100%', height: '100%' }}
		/>
	);
};

export default GoogleMaps;
