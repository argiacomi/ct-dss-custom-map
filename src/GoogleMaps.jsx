import { useRef, useEffect, useCallback } from 'react';
import { useGoogleMapsLoader } from './lib/loadGoogleMaps';
import { MarkerClusterer } from '@googlemaps/markerclusterer';

const isSmallScreen = () => {
  return window.innerWidth < 835;
};

const getMapOptions = (center, zoom) => ({
  center: center,
  zoom: isSmallScreen() ? zoom - 2 : zoom,
  zoomControl: true,
  mapTypeControl: true,
  scaleControl: true,
  streetViewControl: true,
  rotateControl: true,
  restriction: isSmallScreen()
    ? {
        latLngBounds: {
          south: 38.950943,
          west: -75.727775,
          north: 44.050587,
          east: -69.787239
        }
      }
    : {
        latLngBounds: {
          south: 40.950943,
          west: -73.727775,
          north: 42.050587,
          east: -71.787239
        }
      }
});

const GoogleMaps = ({ center, zoom, locations, onMarkerClick, apiKey }) => {
  const mapRef = useRef(null);
  const googleMapsLoaded = useGoogleMapsLoader({
    key: apiKey,
    libraries: ['places'],
    v: 'weekly',
    language: 'en',
    region: 'US'
  });

  const infoWindow = useRef();

  const handleMarkerClick = useCallback((location, marker) => {
    const directions = new URL(
      `https://www.google.com/maps/dir//${location.geometry.location.lat},${location.geometry.location.lng}`
    );
    infoWindow.current.setContent(`
      <div class='mb-4 flex flex-row items-start'>
        <div>
          <a
            href='/'
            class='text-decoration-none cursor-pointer no-underline'
          >
            <div class='text-base font-bold text-black hover:text-primary sm:text-lg'>
              ${location.title}
            </div>
          </a>
          <div class='text-xs text-gray-600 sm:text-sm'>
            ${location.address}
          </div>
          <div class='text-xs text-gray-600 sm:text-sm'>
            ${location.city}
          </div>
          <span class='mt-2 flex space-x-1'>
            <a
              href='/'
              class='text-decoration-none cursor-pointer border-none bg-opacity-0 text-blue-400 no-underline hover:text-blue-600'
            >
              View details
            </a>
            <div data-orientation="vertical" role="none" class="bg-gray-100 dark:bg-gray-200 w-[1px] h-4"></div>
            <a
              href=${directions.href}
              target='_blank'
              rel='noreferrer'
              class='text-decoration-none cursor-pointer border-none bg-opacity-0 text-blue-400 no-underline hover:text-blue-600'
            >
              Get Directions
            </a>
          </span>
        </div>
      </div>
    `);
    infoWindow.current.open(mapRef.current, marker);
  }, []);

  useEffect(() => {
    if (googleMapsLoaded) {
      const map = new window.google.maps.Map(
        mapRef.current,
        getMapOptions(center, zoom)
      );

      infoWindow.current = new google.maps.InfoWindow();

      const markers = locations.map((location, index) => {
        const marker = new google.maps.Marker({
          position: location.geometry.location,
          map,
          label: { text: `${index + 1}`, color: 'white', fontSize: '14px' }
        });

        marker.addListener('click', () => {
          handleMarkerClick(location, marker);
        });

        return marker;
      });

      new MarkerClusterer({ markers, map });

      const bounds = new window.google.maps.LatLngBounds(
        new window.google.maps.LatLng(40.950943, -73.727775),
        new window.google.maps.LatLng(42.050587, -71.787239)
      );

      map.addListener('center_changed', () => {
        const currentCenter = map.getCenter();
        if (!bounds.contains(currentCenter)) {
          map.setCenter(center);
        }
      });
    }
  }, [googleMapsLoaded, center, zoom, handleMarkerClick]);

  return (
    <div
      ref={mapRef}
      style={{ width: '100%', height: '100%' }}
      className='aspect-square h-full w-full md:aspect-auto md:rounded-r-md'
    />
  );
};

export default GoogleMaps;
