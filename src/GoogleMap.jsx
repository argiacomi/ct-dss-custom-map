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
			className='aspect-video h-full w-full md:aspect-auto md:rounded-r-md'
			ref={mapRef}
		/>
	);
};

export default React.memo(GoogleMaps);
