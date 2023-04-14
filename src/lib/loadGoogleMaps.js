export const loadGoogleMaps = async (options) => {
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
		let url = 'https://maps.googleapis.com/maps/api/js?';
		const queryParams = new URLSearchParams();

		queryParams.set('callback', '__googleMapsCallback');
		queryParams.set('key', config.apiKey);
		queryParams.set('libraries', config.libraries.join(','));
		queryParams.set('language', config.language);
		queryParams.set('region', config.region);
		if (config.version) queryParams.set('v', config.version);

		url += queryParams.toString();
		return url;
	};

	const loadScript = () => {
		return new Promise((resolve, reject) => {
			if (window.google && window.google.maps) {
				console.warn('Google Maps already loaded.');
				resolve(window.google);
			}

			const script = document.createElement('script');
			script.src = createUrl();
			script.defer = true;
			script.async = true;
			script.nonce = document.querySelector('script[nonce]')?.nonce || '';

			script.onerror = (error) => {
				if (config.retries > 0) {
					config.retries--;
					console.warn('Retrying Google Maps script load.');
					setTimeout(() => {
						document.head.removeChild(script);
						loadScript().then(resolve).catch(reject);
					}, 1000);
				} else {
					reject(error);
				}
			};

			window.__googleMapsCallback = () => {
				resolve(window.google);
			};

			document.head.appendChild(script);
		});
	};

	await loadScript();
};
