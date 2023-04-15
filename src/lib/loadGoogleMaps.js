import { useState, useEffect } from 'react';

const GOOGLE_MAPS_API_BASE_URL = 'https://maps.googleapis.com/maps/api/js?';

let loadingPromise = null;

export const loadGoogleMaps = async (options) => {
  if (loadingPromise) {
    return loadingPromise;
  }

  const document = window.document;
  const config = {
    apiKey: options.key,
    libraries: options.libraries || [],
    version: options.v,
    language: options.language,
    region: options.region,
    retries: 3
  };

  const createUrl = () => {
    const queryParams = new URLSearchParams();
    queryParams.set('callback', '__googleMapsCallback');
    queryParams.set('key', config.apiKey);
    queryParams.set('libraries', config.libraries.join(','));
    queryParams.set('language', config.language);
    queryParams.set('region', config.region);
    if (config.version) queryParams.set('v', config.version);

    return `${GOOGLE_MAPS_API_BASE_URL}${queryParams.toString()}`;
  };

  const loadScript = async () => {
    if (window.google && window.google.maps) {
      console.warn('Google Maps already loaded.');
      return window.google;
    }

    const script = document.createElement('script');
    script.src = createUrl();
    script.defer = true;
    script.async = true;
    script.nonce = document.querySelector('script[nonce]')?.nonce || '';

    const onError = (error) => {
      if (config.retries > 0) {
        config.retries--;
        console.warn('Retrying Google Maps script load.');
        setTimeout(async () => {
          document.head.removeChild(script);
          await loadScript();
        }, 1000);
      } else {
        throw error;
      }
    };

    script.onerror = onError;

    return new Promise((resolve) => {
      window.__googleMapsCallback = () => {
        resolve(window.google);
      };

      document.head.appendChild(script);
    });
  };

  loadingPromise = loadScript();
  return loadingPromise;
};

export const useGoogleMapsLoader = (options) => {
  const [googleMapsLoaded, setGoogleMapsLoaded] = useState(false);
  const [loadingPromise, setLoadingPromise] = useState(null);

  useEffect(() => {
    if (!googleMapsLoaded && !loadingPromise) {
      const promise = loadGoogleMaps(options);
      setLoadingPromise(promise);
      promise.then(() => {
        setGoogleMapsLoaded(true);
      });
    }
  }, [googleMapsLoaded, loadingPromise, options]);

  return googleMapsLoaded;
};
