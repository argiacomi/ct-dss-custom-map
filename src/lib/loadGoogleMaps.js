((g) => {
	const p = 'The Google Maps JavaScript API';
	const c = 'google';
	const l = 'importLibrary';
	const q = '__ib__';
	const m = document;
	const b = window[c] || (window[c] = {});

	const d = b.maps || (b.maps = {});
	let h;

	const r = new Set();
	const e = new URLSearchParams();
	const u = () => {
		if (h) {
			return h;
		}

		h = new Promise(async (f, n) => {
			const a = m.createElement('script');

			e.set('libraries', [...r].join(','));
			for (const [k, v] of Object.entries(g)) {
				if (Object.prototype.hasOwnProperty.call(g, k)) {
					e.set(
						k.replace(/[A-Z]/g, (t) => '_' + t[0].toLowerCase()),
						v
					);
				}
			}
			e.set('callback', c + '.maps.' + q);
			a.src = `https://maps.${c}apis.com/maps/api/js?` + e;
			d[q] = f;
			a.onerror = () => h.catch((err) => n(err));
			a.nonce = m.querySelector('script[nonce]')?.nonce || '';

			m.head.append(a);
		});

		return h;
	};

	if (d[l]) {
		console.warn(`${p} only loads once. Ignoring:`, g);
	} else {
		d[l] = (f, ...n) => {
			if (!r.has(f)) {
				r.add(f);
				u().then(() => d[l](f, ...n));
			}
		};
	}
})({
	key: import.meta.env.VITE_GOOGLE_MAPS_API_KEY
});
