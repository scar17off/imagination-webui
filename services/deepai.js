const axios = require("axios");
const FormData = require('form-data');
const fakeUa = require('fake-useragent');

function getKey(ua) {
	const userAgent = ua;
	e = Math.round(1E11 * Math.random()) + "",
	g = function() {
		for (var t = [], p = 0; 64 > p; )
			t[p] = 0 | 4294967296 * Math.sin(++p % Math.PI);
		return function(m) {
			var v, r, q, E = [v = 1732584193, r = 4023233417, ~v, ~r], I = [], H = unescape(encodeURI(m)) + "\u0080", F = H.length;
			m = --F / 4 + 2 | 15;
			for (I[--m] = 8 * F; ~F; )
				I[F >> 2] |= H.charCodeAt(F) << 8 * F--;
			for (p = H = 0; p < m; p += 16) {
				for (F = E; 64 > H; F = [q = F[3], v + ((q = F[0] + [v & r | ~v & q, q & v | ~q & r, v ^ r ^ q, r ^ (v | ~q)][F = H >> 4] + t[H] + ~~I[p | [H, 5 * H + 1, 3 * H + 5, 7 * H][F] & 15]) << (F = [7, 12, 17, 22, 5, 9, 14, 20, 4, 11, 16, 23, 6, 10, 15, 21][4 * F + H++ % 4]) | q >>> -F), v, r])
					v = F[1] | 0,
					r = F[2];
				for (H = 4; H; )
					E[--H] += F[H]
			}
			for (m = ""; 32 > H; )
				m += (E[H >> 3] >> 4 * (1 ^ H++) & 15).toString(16);
			return m.split("").reverse().join("")
		}
	}(),
	f = "tryit-" + e + "-" + g(userAgent + g(userAgent + g(userAgent + e + "x")))

	return f;
}

async function generate(options) {
	const form = new FormData();
	form.append('text', options.positive);

	const ua = fakeUa();
	
	const request = await axios.post("https://api.deepai.org/api/text2img", form, {
	  headers: {
	    'api-key': getKey(ua),
		  'client-library': 'deepai-js-client',
		  'Content-Type': 'multipart/form-data; boundary=' + form._boundary,
		  'user-agent': ua
	  }
	});

	return [request.data.output_url];
};

module.exports = generate;