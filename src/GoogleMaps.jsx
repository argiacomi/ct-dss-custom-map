import React, { useEffect, useRef } from 'react';
import './lib/loadGoogleMaps';

const GoogleMap = ({ center, zoom }) => {
	const mapRef = useRef();

	useEffect(() => {
		const initializeMap = () => {
			const map = new google.maps.Map(mapRef.current, {
				center,
				zoom
			});
		};

		if (window.google && window.google.maps) {
			initializeMap();
		} else {
			window.google.maps.importLibrary('places', initializeMap);
		}
	}, [center, zoom]);

	return <div ref={mapRef} style={{ width: '100%', height: '100%' }} />;
};

export default GoogleMap;
