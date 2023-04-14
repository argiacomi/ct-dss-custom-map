import React, { useEffect, useRef } from 'react';
import { loadGoogleMaps } from './lib/loadGoogleMaps';

const GoogleMap = ({ center, zoom }) => {
	const mapRef = useRef();

	useEffect(() => {
		const initializeMap = async () => {
			const { Map } = await google.maps.importLibrary('maps');
			const map = new google.maps.Map(mapRef.current, {
				center,
				zoom
			});
		};

		if (window.google && window.google.maps) {
			initializeMap();
		} else {
			loadGoogleMaps({
				key: import.meta.env.VITE_GOOGLE_MAPS_API_KEY
				// Add other options as needed, using camel case.
				// Use the 'v' parameter to indicate the version to load (alpha, beta, weekly, etc.)
			}).then(initializeMap);
		}
	}, [center, zoom]);

	return <div ref={mapRef} style={{ width: '100%', height: '100%' }} />;
};

export default GoogleMap;
