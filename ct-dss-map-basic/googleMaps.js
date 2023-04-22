const apiKey = 'YOUR_API_KEY';
const center = { lat: 41.5, lng: -72.7575 };
const zoom = 10;
const locations = [
  {
    title: 'Bridgeport Field Office',
    address: '925 Housatonic Avenue',
    city: 'Bridgeport, CT 06606',
    geometry: {
      location: {
        lat: 41.1938238,
        lng: -73.1937219
      },
      location_type: 'ROOFTOP',
      viewport: {
        south: 41.1923616697085,
        west: -73.19517043029151,
        north: 41.1950596302915,
        east: -73.1924724697085
      }
    },
    partial_match: true,
    place_id: 'ChIJl9gQJYYO6IkRH2NNKPJqnr4'
  },
  {
    title: 'Danbury Field Office',
    address: '342 Main Street',
    city: 'Danbury, CT 06810',
    geometry: {
      location: {
        lat: 41.3975982,
        lng: -73.45667259999999
      },
      location_type: 'ROOFTOP',
      viewport: {
        south: 41.3961471697085,
        west: -73.4579517802915,
        north: 41.3988451302915,
        east: -73.45525381970849
      }
    },
    partial_match: true,
    place_id: 'ChIJ5aSEVGT_54kRoNybHkmC-TI'
  },
  {
    title: 'Greater Hartford Field Office',
    address: '20 Meadow Road',
    city: 'Windsor, CT 06095',
    geometry: {
      location: {
        lat: 41.807537,
        lng: -72.6566246
      },
      location_type: 'ROOFTOP',
      viewport: {
        south: 41.80549101970849,
        west: -72.65778428029151,
        north: 41.80818898029149,
        east: -72.6550863197085
      }
    },
    partial_match: true,
    place_id: 'ChIJ9Z6kp1RU5okRfgyY545LKwA'
  },
  {
    title: 'Manchester Field Office',
    address: '699 East Middle Turnpike',
    city: 'Manchester, CT 06040',
    geometry: {
      location: {
        lat: 41.7871662,
        lng: -72.4902532
      },
      location_type: 'ROOFTOP',
      viewport: {
        south: 41.7856988197085,
        west: -72.4915795302915,
        north: 41.7883967802915,
        east: -72.4888815697085
      }
    },
    partial_match: true,
    place_id: 'ChIJjdigBkxY5okRgL-oM8za1Ww'
  },
  {
    title: 'Middletown Field Office',
    address: '2081 South Main Street, Suite B',
    city: 'Middletown, CT 06457',
    geometry: {
      location: {
        lat: 41.5039504,
        lng: -72.6755233
      },
      location_type: 'ROOFTOP',
      viewport: {
        south: 41.5026577697085,
        west: -72.67655343029149,
        north: 41.5053557302915,
        east: -72.67385546970849
      }
    },
    partial_match: true,
    place_id: 'ChIJ26GEiGlK5okRTPXMAXujvnw'
  },
  {
    title: 'New Britain Field Office',
    address: '30 Christian Lane',
    city: 'New Britain, CT 06051-4152',
    geometry: {
      location: {
        lat: 41.6529089,
        lng: -72.7501375
      },
      location_type: 'ROOFTOP',
      viewport: {
        south: 41.65154406970851,
        west: -72.7516257802915,
        north: 41.65424203029151,
        east: -72.74892781970848
      }
    },
    partial_match: true,
    place_id: 'ChIJIRWGEAyz54kROxZ8lFLUmS0'
  },
  {
    title: 'New Haven Field Office',
    address: '50 Humphrey Street',
    city: 'New Haven, CT 06513',
    geometry: {
      location: {
        lat: 41.3135768,
        lng: -72.9042461
      },
      location_type: 'ROOFTOP',
      viewport: {
        south: 41.3120420197085,
        west: -72.90584863029152,
        north: 41.3147399802915,
        east: -72.90315066970851
      }
    },
    partial_match: true,
    place_id: 'ChIJGY8XP9rZ54kRSYzf2RrCyM0'
  },
  {
    title: 'Norwich Field Office',
    address: '401 West Thames Street',
    city: 'Norwich, CT 06360',
    geometry: {
      location: {
        lat: 41.5078468,
        lng: -72.0958557
      },
      location_type: 'ROOFTOP',
      viewport: {
        south: 41.5064696697085,
        west: -72.0972169302915,
        north: 41.50916763029149,
        east: -72.09451896970849
      }
    },
    partial_match: true,
    place_id: 'ChIJq7_XuEpy5okR04gArAvdS20'
  },
  {
    title: 'Torrington Field Office',
    address: '62 Commercial Boulevard',
    city: 'Torrington, CT 06790',
    geometry: {
      location: {
        lat: 41.8260854,
        lng: -73.1048181
      },
      location_type: 'ROOFTOP',
      viewport: {
        south: 41.82462556970849,
        west: -73.10605028029151,
        north: 41.82732353029149,
        east: -73.10335231970849
      }
    },
    partial_match: true,
    place_id: 'ChIJlb_mKbqY54kR564RqRpzPrA'
  },
  {
    title: 'Stamford Field Office',
    address: '1642 Bedford Street',
    city: 'Stamford, CT 06905',
    geometry: {
      location: {
        lat: 41.0651581,
        lng: -73.5418945
      },
      location_type: 'ROOFTOP',
      viewport: {
        south: 41.0638830197085,
        west: -73.54302408029152,
        north: 41.0665809802915,
        east: -73.54032611970851
      }
    },
    partial_match: true,
    place_id: 'ChIJ7z4tUeuhwokRVeY-o2FzoDs'
  },
  {
    title: 'Waterbury Field Office',
    address: '249 Thomaston Avenue',
    city: 'Waterbury, CT 06702',
    geometry: {
      location: {
        lat: 41.5625419,
        lng: -73.0545349
      },
      location_type: 'ROOFTOP',
      viewport: {
        south: 41.5612988197085,
        west: -73.05580893029149,
        north: 41.5639967802915,
        east: -73.05311096970848
      }
    },
    partial_match: true,
    place_id: 'ChIJVRErv03A54kR_PeaRUf5tKM'
  },
  {
    title: 'Willimantic Field Office',
    address: '1320 Main Street / Tyler Square',
    city: 'Willimantic, CT 06226',
    geometry: {
      location: {
        lat: 41.713834,
        lng: -72.23073169999999
      },
      location_type: 'GEOMETRIC_CENTER',
      viewport: {
        south: 41.7125076197085,
        west: -72.2323846802915,
        north: 41.7152055802915,
        east: -72.22968671970848
      }
    },
    partial_match: true,
    place_id: 'ChIJgUOPQuRj5okRts5aRoLAlPc'
  }
];

const GOOGLE_MAPS_API_BASE_URL = 'https://maps.googleapis.com/maps/api/js?';

let loadingPromise = null;

const loadGoogleMaps = async (options) => {
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

    console.log(`${GOOGLE_MAPS_API_BASE_URL}${queryParams.toString()}`);

    return `${GOOGLE_MAPS_API_BASE_URL}${queryParams.toString()}`;
  };

  const loadScript = async () => {
    if (window.google && window.google.maps) {
      console.warn('Google Maps already loaded.');
      return window.google;
    }

    const mainScript = document.createElement('script');
    mainScript.src = createUrl();
    mainScript.defer = true;
    mainScript.async = true;
    mainScript.nonce = document.querySelector('script[nonce]')?.nonce || '';

    const clusterScript = document.createElement('script');
    clusterScript.src = 'https://unpkg.com/@googlemaps/markerclusterer/dist/index.min.js';

    const onError = (error) => {
      if (config.retries > 0) {
        config.retries--;
        console.warn('Retrying Google Maps script load.');
        setTimeout(async () => {
          document.head.removeChild(mainScript);
          document.head.removeChild(clusterScript);
          await loadScript();
        }, 1000);
      } else {
        throw error;
      }
    };

    mainScript.onerror = onError;
    clusterScript.onerror = onError;

    return new Promise((resolve) => {
      window.__googleMapsCallback = () => {
        resolve(window.google);
      };

      document.head.appendChild(mainScript);
      document.head.appendChild(clusterScript);
    });
  };

  loadingPromise = loadScript();
  return loadingPromise;
};

function isSmallScreen() {
  return window.innerWidth < 835;
}

function getMapOptions(center, zoom) {
  return {
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
  };
}

async function initMap() {
  await loadGoogleMaps({ key: apiKey, v: 'weekly' });

  const map = new google.maps.Map(document.getElementById('map'), getMapOptions(center, zoom));
  const bounds = new google.maps.LatLngBounds(new google.maps.LatLng(40.950943, -73.727775), new google.maps.LatLng(42.050587, -71.787239));

  map.addListener('center_changed', () => {
    const currentCenter = map.getCenter();
    if (!bounds.contains(currentCenter)) {
      map.setCenter(center);
    }
  });

  const infoWindow = new google.maps.InfoWindow();

  const handleMarkerClick = (location, marker) => {
    const directions = new URL(`https://www.google.com/maps/dir//${location.geometry.location.lat},${location.geometry.location.lng}`);
    infoWindow.setContent(`
      <div class="map-card">
          <a
            href="/"
            class="map-office-title-link"
          >
            <div class="map-office-title">
              ${location.title}
            </div>
          </a>
          <div class="map-office-address">
            ${location.address}
          </div>
          <div class="map-office-address">
            ${location.city}
          </div>
          <span class="map-office-link-container">
            <a
              href="/"
              class="map-office-link"
            >
              View details
            </a>
            <span class="vertical-separator"></span>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Google&query_place_id=${location.place_id}"
              target="_blank"
              rel="noreferrer"
              class="map-office-link"
            >
            Get Directions
            </a>
          </span>
      </div>
    `);
    infoWindow.open(map, marker);
  };

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

  const markerCluster = new markerClusterer.MarkerClusterer({ map, markers, imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
}

window.onload = initMap;
