var e = {
	schema: "slosh-params/1",
	modelVersion: "0.1.0",
	vehicle: {
		m_q: {
			v: 1.5207,
			src: "R-1 Table 2"
		},
		J: {
			v: [
				.0211,
				.0216,
				.01455
			],
			src: "R-1 Table 2"
		},
		arm: {
			v: .241,
			src: "R-1 Table 2"
		},
		k_f: {
			v: 58597e-10,
			src: "R-1 Table 2"
		},
		k_tau: {
			v: 2.925e-9,
			src: "R-1 Table 2"
		},
		pivotOffset: {
			v: [
				0,
				0,
				0
			],
			src: "assumed"
		}
	},
	pendulum: {
		m_p: {
			v: .05,
			src: "R-1 Table 2"
		},
		L: {
			v: 1,
			src: "R-1 Table 2"
		},
		k_damp: {
			v: .001,
			src: "assumed, k1 = k2"
		}
	},
	motor: {
		tau: {
			v: .04,
			src: "assumed"
		},
		omegaMin: {
			v: 100,
			src: "assumed"
		},
		omegaMax: {
			v: 1147,
			src: "assumed"
		}
	},
	control: {
		rateHz: {
			v: 100,
			src: "assumed"
		},
		attMax: {
			v: .35,
			src: "assumed"
		},
		inner: {
			Kp: {
				v: 13.02,
				src: "designed (reconstruction)"
			},
			Kd: {
				v: 3.473,
				src: "designed (reconstruction)"
			}
		},
		outer: {
			Kp: {
				v: 1.092,
				src: "designed (reconstruction)"
			},
			Kd: {
				v: .8717,
				src: "designed (reconstruction)"
			}
		},
		alt: {
			Kp: {
				v: 16,
				src: "designed (reconstruction)"
			},
			Kd: {
				v: 7.2,
				src: "designed (reconstruction)"
			}
		},
		yaw: {
			Kp: {
				v: 25,
				src: "designed (reconstruction)"
			},
			Kd: {
				v: 9,
				src: "designed (reconstruction)"
			}
		}
	},
	aac: {
		a0: {
			v: .148765,
			src: "tuned (reconstruction)"
		},
		b_e: {
			v: 0,
			src: "R-1 §III.B"
		},
		b_s: {
			v: 5171.57,
			src: "tuned (reconstruction)"
		},
		kMin: {
			v: .05,
			src: "tuned (reconstruction)"
		},
		kMax: {
			v: 2,
			src: "assumed"
		},
		hp: {
			fc: {
				v: .30509411894772775,
				src: "tuned (reconstruction)"
			},
			order: {
				v: 2,
				src: "tuned (reconstruction)"
			},
			sos: {
				v: [[
					.9865364763034353,
					-1.9730729526068707,
					.9865364763034353,
					-1.9728916779214147,
					.9732542272923266
				]],
				src: "designed (reconstruction)"
			}
		},
		lp: {
			fc: {
				v: .05460514697251041,
				src: "tuned (reconstruction)"
			},
			order: {
				v: 1,
				src: "tuned (reconstruction)"
			},
			sos: {
				v: [[
					.001712535160783077,
					.001712535160783077,
					0,
					-.9965749296784338,
					0
				]],
				src: "designed (reconstruction)"
			}
		},
		threshold: {
			v: .00166448,
			src: "tuned (reconstruction)"
		},
		clearRatio: {
			v: .5,
			src: "tuned (reconstruction)"
		},
		clearHoldS: {
			v: 2,
			src: "tuned (reconstruction)"
		},
		engageRampS: {
			v: 0,
			src: "assumed"
		},
		refLeadS: {
			v: 1,
			src: "assumed (reconstruction)"
		},
		refLagS: {
			v: .25,
			src: "assumed (reconstruction)"
		}
	},
	sensing: {
		latencyMs: {
			v: 0,
			src: "optional realism, off"
		},
		noise: {
			enabled: {
				v: !1,
				src: "optional realism, off"
			},
			pos: {
				v: .001,
				src: "optional realism, off"
			},
			att: {
				v: .002,
				src: "optional realism, off"
			},
			rate: {
				v: .01,
				src: "optional realism, off"
			}
		}
	},
	sim: {
		dt: {
			v: .001,
			src: "assumed"
		},
		controlDecimation: {
			v: 10,
			src: "assumed"
		},
		seed: {
			v: 1,
			src: "assumed"
		},
		g: {
			v: 9.80665,
			src: "assumed (standard gravity)"
		}
	}
};
// src/core/params.ts
function t(e) {
	return typeof e == "object" && !!e && !Array.isArray(e);
}
function n(e) {
	return t(e) ? Object.keys(e).length === 2 && "v" in e && "src" in e && typeof e.src == "string" : !1;
}
function r(e, i, a) {
	if (n(e)) return a[i] = e.src, e.v;
	if (!t(e)) throw Error(`params: expected object at "${i}"`);
	let o = {};
	for (let [t, n] of Object.entries(e)) (i !== "" || t !== "schema" && t !== "modelVersion") && (o[t] = r(n, i === "" ? t : `${i}.${t}`, a));
	return o;
}
function i(n = e) {
	if (!t(n) || typeof n.modelVersion != "string") throw Error("params: missing modelVersion");
	let i = {}, a = r(n, "", i);
	return {
		params: {
			modelVersion: n.modelVersion,
			...a
		},
		provenance: i
	};
}
var a = i(e), o = {
	schema: "slosh-preset/1",
	id: "fig12",
	title: "Fig 12: stable",
	caption: "Gain shift 1, AAC off. The slosh oscillation decays on its own.",
	durationS: 60,
	initial: {
		theta: .2,
		thetaDot: 0,
		phi: 0,
		phiDot: .6,
		gainShift: 1,
		aacMode: "off"
	},
	events: []
}, s = {
	schema: "slosh-preset/1",
	id: "fig13",
	title: "Fig 13: unstable",
	caption: "Gain shift 2.3, AAC in Monitor: K_T is computed but not applied; the oscillation grows and does not recover",
	durationS: 60,
	initial: {
		theta: .2,
		thetaDot: 0,
		phi: 0,
		phiDot: .6,
		gainShift: 2.3,
		aacMode: "monitor"
	},
	events: []
}, c = {
	schema: "slosh-preset/1",
	id: "fig14",
	title: "Fig 14: AAC engaged",
	caption: "Gain shift 2.3, AAC engaged. The detector trips and K_T is lowered to suppress the slosh.",
	durationS: 60,
	initial: {
		theta: .2,
		thetaDot: 0,
		phi: 0,
		phiDot: .6,
		gainShift: 2.3,
		aacMode: "engaged"
	},
	events: []
}, l = {
	schema: "slosh-preset/1",
	id: "story",
	title: "Story: nominal, gain shift, AAC engaged",
	caption: "One continuous flight: nominal, then a gain shift the detector catches, then the AAC suppresses it.",
	durationS: 52,
	initial: {
		theta: .2,
		thetaDot: 0,
		phi: 0,
		phiDot: .6,
		gainShift: 1,
		aacMode: "off"
	},
	events: [
		{
			t: 8,
			type: "rampGainShift",
			to: 2.3,
			durationS: 1.5
		},
		{
			t: 8,
			type: "setAacMode",
			mode: "monitor"
		},
		{
			t: 22,
			type: "setAacMode",
			mode: "engaged"
		}
	],
	regimeCaptions: {
		nominal: "Nominal: the slosh oscillation slowly decays. Try a Kick to excite it.",
		gainShift: "Gain shift: the slosh oscillation is now growing; the detector is watching.",
		engaged: "AAC engaged: K_T is lowered and the oscillation stops growing and decays."
	}
}, u = {
	schema: "slosh-preset/1",
	id: "vb",
	title: "Section V.B flight-test sequence",
	caption: "Gain shift ramps to 2 over 20 s with AAC in Monitor; AAC is engaged at t = 100 s.",
	durationS: 130,
	initial: {
		theta: .05,
		thetaDot: 0,
		phi: 0,
		phiDot: .2,
		gainShift: 1,
		aacMode: "monitor"
	},
	events: [{
		t: 0,
		type: "rampGainShift",
		to: 2,
		durationS: 20
	}, {
		t: 100,
		type: "setAacMode",
		mode: "engaged"
	}]
}, d = [
	"story",
	"fig12",
	"fig13",
	"fig14",
	"vb"
];
function f(e, t) {
	let n = e;
	if (n.id !== t) throw Error(`preset ${t} has id ${String(n.id)}`);
	let r = n.events.map((e) => ({ ...e })).sort((e, t) => e.t - t.t);
	return {
		id: n.id,
		title: n.title,
		caption: n.caption,
		durationS: n.durationS,
		initial: { ...n.initial },
		events: r
	};
}
var p = {
	story: f(l, "story"),
	fig12: f(o, "fig12"),
	fig13: f(s, "fig13"),
	fig14: f(c, "fig14"),
	vb: f(u, "vb")
};
function m(e) {
	let t = p[e];
	if (t === void 0) throw Error(`unknown preset ${String(e)}`);
	return t;
}
// src/core/filters.ts
var h = class {
	b0;
	b1;
	b2;
	a1;
	a2;
	z1 = 0;
	z2 = 0;
	constructor(e, t, n, r, i) {
		this.b0 = e, this.b1 = t, this.b2 = n, this.a1 = r, this.a2 = i;
	}
	step(e) {
		let t = this.b0 * e + this.z1;
		return this.z1 = this.b1 * e - this.a1 * t + this.z2, this.z2 = this.b2 * e - this.a2 * t, t;
	}
	reset() {
		this.z1 = 0, this.z2 = 0;
	}
}, g = class {
	sections = [];
	constructor(e) {
		for (let t of e) {
			if (t.length !== 5) throw Error(`biquad row needs 5 coefficients, got ${t.length}`);
			this.sections.push(new h(t[0], t[1], t[2], t[3], t[4]));
		}
	}
	step(e) {
		let t = e;
		for (let e of this.sections) t = e.step(t);
		return t;
	}
	reset() {
		for (let e of this.sections) e.reset();
	}
}, _ = .01;
function v(e) {
	let t = Math.round(e);
	return Math.abs(e % 1) === .5 && t % 2 != 0 ? t - 1 : t;
}
var y = class {
	b0;
	b1;
	a1;
	z = 0;
	constructor(e, t, n = _) {
		let r = 2 / n, i = r * t + 1;
		this.b0 = (r * e + 1) / i, this.b1 = (1 - r * e) / i, this.a1 = (1 - r * t) / i;
	}
	step(e) {
		let t = this.b0 * e + this.z;
		return this.z = this.b1 * e - this.a1 * t, t;
	}
	reset() {
		this.z = 0;
	}
};
function b(e, t, n) {
	let r = t === void 0 ? n : t;
	if (r === null) throw Error(`aac.${e} is not tuned yet; pass it explicitly`);
	return r;
}
var x = class {
	a0;
	bS;
	bE;
	threshold;
	kMin;
	kMax;
	clearLevel;
	clearTicks;
	slew;
	hp;
	lp;
	eFilt;
	k = 1;
	kApplied = 1;
	y = 0;
	detect = !1;
	calm = 0;
	mode = "off";
	constructor(e, t = {}) {
		let n = e.aac;
		this.a0 = b("a0", t.a0, n.a0), this.bS = b("b_s", t.b_s, n.b_s), this.bE = t.b_e === void 0 ? n.b_e : t.b_e, this.threshold = b("threshold", t.threshold, n.threshold), this.kMin = n.kMin, this.kMax = n.kMax, this.clearLevel = n.clearRatio * this.threshold, this.clearTicks = v(n.clearHoldS / _), this.slew = n.engageRampS > 0 ? (n.kMax - n.kMin) / n.engageRampS * _ : Infinity, this.hp = new g(n.hp.sos), this.lp = new g(n.lp.sos), this.eFilt = new y(n.refLeadS, n.refLagS), this.reset();
	}
	reset() {
		this.hp.reset(), this.lp.reset(), this.eFilt.reset(), this.k = 1, this.kApplied = 1, this.y = 0, this.detect = !1, this.calm = 0, this.mode = "off";
	}
	step(e, t, n) {
		if (n !== "off" && n !== "monitor" && n !== "engaged") throw Error(`unknown AAC mode ${String(n)}`);
		if (n === "off") return this.reset(), {
			kT: 1,
			kTApplied: 1,
			ySD: 0,
			detect: !1,
			tripEdge: !1
		};
		let r = this.hp.step(e);
		this.y = this.lp.step(r * r);
		let i = this.eFilt.step(t), a = this.k, o = -this.a0 * (a - 1) + this.bE * i * i * (this.kMax - a) - this.bS * this.y * (a - this.kMin);
		a += _ * o, this.k = Math.min(this.kMax, Math.max(this.kMin, a));
		let s = !1;
		if (this.y > this.threshold ? (s = !this.detect, this.detect = !0, this.calm = 0) : this.detect && (this.y < this.clearLevel ? (this.calm += 1, this.calm >= this.clearTicks && (this.detect = !1, this.calm = 0)) : this.calm = 0), n === "monitor") this.kApplied = 1;
		else {
			let e = this.mode === "engaged" ? this.kApplied : 1;
			this.kApplied = this.slew === Infinity ? this.k : this.k > e ? Math.min(this.k, e + this.slew) : Math.max(this.k, e - this.slew);
		}
		return this.mode = n, {
			kT: this.k,
			kTApplied: this.kApplied,
			ySD: this.y,
			detect: this.detect,
			tripEdge: s
		};
	}
};
// src/core/dynamics.ts
function S(e) {
	let t = e.vehicle.m_q, n = e.pendulum.m_p, r = t + n;
	return {
		mQ: t,
		L: e.pendulum.L,
		k: e.pendulum.k_damp,
		g: e.sim.g,
		Jx: e.vehicle.J[0],
		Jy: e.vehicle.J[1],
		Jz: e.vehicle.J[2],
		mu: t * n / r,
		kf: e.vehicle.k_f,
		invTm: 1 / e.motor.tau
	};
}
function C(e, t, n, r) {
	let i = r.mQ, a = r.L, o = r.mu, s = t[3], c = t[4], l = t[5], u = t[6], d = t[7], f = t[8], p = t[9], m = t[10], h = t[11], g = t[12], _ = t[13], v = t[14], y = t[15], b = t[16], x = t[17], S = t[18], C = t[19], w = t[20], T = t[21], E = t[22], D = r.kf * (C * C + w * w + T * T + E * E), O = -D * (2 * (d * p + u * f)), k = -D * (2 * (f * p - u * d)), A = -D * (1 - 2 * (d * d + f * f)), j = x * y - S * v, M = S * _ - b * y, N = b * v - x * _, P = r.k / a, ee = -P * j, F = -P * M, te = -P * N, I = b * b + x * x + S * S, L = _ * O + v * k + y * A, R = o * (a * I - L / i), z = ee / o - O / i, B = F / o - k / i, V = te / o - A / i, ne = (v * V - y * B) / a, re = (y * z - _ * V) / a, ie = (_ * B - v * z) / a, ae = (O + R * _ - ee) / i, oe = (k + R * v - F) / i, se = (A + R * y - te) / i + r.g, ce = r.Jx, le = r.Jy, ue = r.Jz, de = n.tau[0], fe = n.tau[1], pe = n.tau[2], me = (de - (h * ue * g - g * le * h)) / ce, he = (fe - (g * ce * m - m * ue * g)) / le, ge = (pe - (m * le * h - h * ce * m)) / ue, H = .5 * (-d * m - f * h - p * g), U = .5 * (u * m + f * g - p * h), W = .5 * (u * h + p * m - d * g), _e = .5 * (u * g + d * h - f * m), G = r.invTm, ve = n.omegaCmd;
	return e[0] = s, e[1] = c, e[2] = l, e[3] = ae, e[4] = oe, e[5] = se, e[6] = H, e[7] = U, e[8] = W, e[9] = _e, e[10] = me, e[11] = he, e[12] = ge, e[13] = j, e[14] = M, e[15] = N, e[16] = ne, e[17] = re, e[18] = ie, e[19] = (ve[0] - C) * G, e[20] = (ve[1] - w) * G, e[21] = (ve[2] - T) * G, e[22] = (ve[3] - E) * G, e;
}
function w(e) {
	let t = Math.max(-1, Math.min(1, e[15]));
	return [Math.acos(t), Math.atan2(e[14], e[13])];
}
function T(e, t) {
	return [
		t * e[13],
		t * e[14],
		t * e[15]
	];
}
function E(e, t, n, r) {
	let i = Math.atan2(2 * (e * t + n * r), 1 - 2 * (t * t + n * n)), a = Math.max(-1, Math.min(1, 2 * (e * n - r * t)));
	return [
		i,
		Math.asin(a),
		Math.atan2(2 * (e * r + t * n), 1 - 2 * (n * n + r * r))
	];
}
function D(e, t, n, r) {
	let i = Math.sin(e), a = Math.cos(e), o = Math.sin(n), s = Math.cos(n), c = [
		i * s,
		i * o,
		a
	], l = a * s, u = a * o, d = -i, f = -o, p = s, m = t * l + i * r * f, h = t * u + i * r * p, g = t * d;
	return [c, [
		c[1] * g - c[2] * h,
		c[2] * m - c[0] * g,
		c[0] * h - c[1] * m
	]];
}
function O(e) {
	let t = e.vehicle.m_q + e.pendulum.m_p;
	return Math.sqrt(t * e.sim.g / (4 * e.vehicle.k_f));
}
function k(e, t = 0, n = 0, r = 0, i = 0, a = [
	0,
	0,
	0
]) {
	let [o, s] = D(t, n, r, i), c = /* @__PURE__ */ new Float64Array(23);
	c[0] = a[0], c[1] = a[1], c[2] = a[2], c[6] = 1, c[13] = o[0], c[14] = o[1], c[15] = o[2], c[16] = s[0], c[17] = s[1], c[18] = s[2];
	let l = O(e);
	return c[19] = l, c[20] = l, c[21] = l, c[22] = l, c;
}
// src/core/mixer.ts
var A = [
	1,
	-1,
	-1,
	1
], j = [
	-1,
	-1,
	1,
	1
], M = [
	1,
	-1,
	1,
	-1
];
function N(e) {
	let t = e.vehicle.k_f;
	return {
		kF: t,
		kappa: e.vehicle.k_tau / t,
		d: e.vehicle.arm / Math.sqrt(2),
		tLo: t * e.motor.omegaMin * e.motor.omegaMin,
		tHi: t * e.motor.omegaMax * e.motor.omegaMax
	};
}
function P(e, t, n, r, i, a) {
	let o = t / 4, s = n / (4 * a.d), c = r / (4 * a.d), l = i / (4 * a.kappa);
	for (let t = 0; t < 4; t++) {
		let n = o + A[t] * s + j[t] * c + M[t] * l;
		n = Math.min(Math.max(n, a.tLo), a.tHi), e[t] = Math.sqrt(n / a.kF);
	}
}
function ee(e, t, n, r, i) {
	let a = e / 4, o = t / (4 * i.d), s = n / (4 * i.d), c = r / (4 * i.kappa);
	for (let e = 0; e < 4; e++) {
		let t = a + A[e] * o + j[e] * s + M[e] * c;
		if (t < i.tLo || t > i.tHi) return !0;
	}
	return !1;
}
// src/core/rng.ts
var F = 4294967296;
function te(e) {
	let t = e + 2654435769 >>> 0, n = (t ^ t >>> 16) >>> 0;
	return n = Math.imul(n, 569420461) >>> 0, n = (n ^ n >>> 15) >>> 0, n = Math.imul(n, 1935289751) >>> 0, [t, (n ^ n >>> 15) >>> 0];
}
function I(e, t) {
	return (e << t | e >>> 32 - t) >>> 0;
}
var L = class {
	s0;
	s1;
	s2;
	s3;
	cache = null;
	constructor(e) {
		let t = e >>> 0, n = [];
		for (let e = 0; e < 4; e++) {
			let [e, r] = te(t);
			t = e, n.push(r);
		}
		n[0] === 0 && n[1] === 0 && n[2] === 0 && n[3] === 0 && (n[0] = 1), this.s0 = n[0], this.s1 = n[1], this.s2 = n[2], this.s3 = n[3];
	}
	nextU32() {
		let e = Math.imul(I(Math.imul(this.s1, 5) >>> 0, 7), 9) >>> 0, t = this.s1 << 9 >>> 0;
		return this.s2 = (this.s2 ^ this.s0) >>> 0, this.s3 = (this.s3 ^ this.s1) >>> 0, this.s1 = (this.s1 ^ this.s2) >>> 0, this.s0 = (this.s0 ^ this.s3) >>> 0, this.s2 = (this.s2 ^ t) >>> 0, this.s3 = I(this.s3, 11), e;
	}
	uniform() {
		return (this.nextU32() + .5) / F;
	}
	normal() {
		if (this.cache !== null) {
			let e = this.cache;
			return this.cache = null, e;
		}
		let e = this.uniform(), t = this.uniform(), n = Math.sqrt(-2 * Math.log(e)), r = 2 * Math.PI * t;
		return this.cache = n * Math.sin(r), n * Math.cos(r);
	}
};
// src/core/controller.ts
function R(e) {
	let t = (t) => e[t];
	return {
		pos: [
			t(0),
			t(1),
			t(2)
		],
		vel: [
			t(3),
			t(4),
			t(5)
		],
		q: [
			t(6),
			t(7),
			t(8),
			t(9)
		],
		wB: [
			t(10),
			t(11),
			t(12)
		]
	};
}
function z(e, t) {
	return Math.max(-t, Math.min(t, e));
}
var B = class {
	p;
	kpAtt;
	kdAtt;
	kpPos;
	kdPos;
	kpZ;
	kdZ;
	kpYaw;
	kdYaw;
	mT;
	fMin;
	fMax;
	mc;
	delayTicks;
	rng;
	fifo = [];
	constructor(e, t) {
		let n = e.control;
		for (let e of [
			n.inner,
			n.outer,
			n.alt,
			n.yaw
		]) if (e.Kp === null || e.Kd === null || e.Kp === void 0 || e.Kd === void 0) throw Error("control gains are not set in the parameter file");
		this.p = e, this.kpAtt = n.inner.Kp, this.kdAtt = n.inner.Kd, this.kpPos = n.outer.Kp, this.kdPos = n.outer.Kd, this.kpZ = n.alt.Kp, this.kdZ = n.alt.Kd, this.kpYaw = n.yaw.Kp, this.kdYaw = n.yaw.Kd, this.mT = e.vehicle.m_q + e.pendulum.m_p;
		let r = e.vehicle.k_f;
		this.fMin = 4 * r * (e.motor.omegaMin * e.motor.omegaMin), this.fMax = 4 * r * (e.motor.omegaMax * e.motor.omegaMax), this.mc = N(e);
		let i = e.sim.controlDecimation * e.sim.dt;
		this.delayTicks = Math.max(0, v(e.sensing.latencyMs * .001 / i)), this.rng = new L(t === void 0 ? e.sim.seed : t);
	}
	reset(e) {
		this.fifo = [], this.rng = new L(e === void 0 ? this.p.sim.seed : e);
	}
	sense(e) {
		let [t, n, r] = E(e.q[0], e.q[1], e.q[2], e.q[3]), i = [
			e.pos[0],
			e.pos[1],
			e.pos[2]
		], a = [
			e.vel[0],
			e.vel[1],
			e.vel[2]
		], o = [
			e.wB[0],
			e.wB[1],
			e.wB[2]
		], s = this.p.sensing.noise;
		if (s.enabled) {
			let e = () => this.rng.normal();
			i = [
				i[0] + s.pos * e(),
				i[1] + s.pos * e(),
				i[2] + s.pos * e()
			], a = [
				a[0] + s.rate * e(),
				a[1] + s.rate * e(),
				a[2] + s.rate * e()
			], t += s.att * e(), n += s.att * e(), r += s.att * e(), o = [
				o[0] + s.rate * e(),
				o[1] + s.rate * e(),
				o[2] + s.rate * e()
			];
		}
		return {
			pos: i,
			vel: a,
			roll: t,
			pitch: n,
			yaw: r,
			rates: o
		};
	}
	delayed(e) {
		return this.fifo.push(e), this.fifo.length > this.delayTicks + 1 && this.fifo.shift(), this.fifo[0];
	}
	step(e, t, n, r = [1, 1]) {
		let i = this.p.sim.g, a = this.p.control.attMax, o = this.delayed(this.sense(e)), { roll: s, pitch: c, yaw: l } = o, u = t.pos[0] - o.pos[0], d = t.pos[1] - o.pos[1], f = -o.vel[0], p = -o.vel[1], m = Math.cos(l), h = Math.sin(l), g = m * u + h * d, _ = -h * u + m * d, v = m * f + h * p, y = -h * f + m * p, b = r[0] * n * (this.kpPos * g + this.kdPos * v), x = r[1] * n * (this.kpPos * _ + this.kdPos * y), S = z(-b / i, a), C = z(x / i, a), w = Math.abs(b / i) > a || Math.abs(x / i) > a, [T, E, D] = this.p.vehicle.J, O = T * (this.kpAtt * (C - s) - this.kdAtt * o.rates[0]), k = E * (this.kpAtt * (S - c) - this.kdAtt * o.rates[1]), A = D * (this.kpYaw * (t.yaw - l) - this.kdYaw * o.rates[2]), j = t.pos[2] - o.pos[2], M = -o.vel[2], N = Math.max(Math.cos(s) * Math.cos(c), .5), F = this.mT * (i - this.kpZ * j - this.kdZ * M) / N, te = F < this.fMin || F > this.fMax;
		F = Math.min(Math.max(F, this.fMin), this.fMax);
		let I = [
			0,
			0,
			0,
			0
		];
		return P(I, F, O, k, A, this.mc), {
			u: [b, x],
			pitchC: S,
			rollC: C,
			f: F,
			tau: [
				O,
				k,
				A
			],
			omegaCmd: I,
			sensed: o,
			satAtt: w,
			satMotor: te || ee(F, O, k, A, this.mc)
		};
	}
}, V = class {
	k1 = /* @__PURE__ */ new Float64Array(23);
	k2 = /* @__PURE__ */ new Float64Array(23);
	k3 = /* @__PURE__ */ new Float64Array(23);
	k4 = /* @__PURE__ */ new Float64Array(23);
	tmp = /* @__PURE__ */ new Float64Array(23);
};
function ne(e, t, n, r, i, a) {
	let { k1: o, k2: s, k3: c, k4: l, tmp: u } = a;
	C(o, t, r, i);
	let d = .5 * n;
	for (let e = 0; e < 23; e++) u[e] = t[e] + d * o[e];
	C(s, u, r, i);
	for (let e = 0; e < 23; e++) u[e] = t[e] + d * s[e];
	C(c, u, r, i);
	for (let e = 0; e < 23; e++) u[e] = t[e] + n * c[e];
	C(l, u, r, i);
	let f = n / 6;
	for (let n = 0; n < 23; n++) e[n] = t[n] + f * (o[n] + 2 * s[n] + 2 * c[n] + l[n]);
	return re(e), e;
}
function re(e) {
	let t = 1 / Math.sqrt(ie(e));
	e[13] *= t, e[14] *= t, e[15] *= t;
	let n = e[16] * e[13] + e[17] * e[14] + e[18] * e[15];
	e[16] -= n * e[13], e[17] -= n * e[14], e[18] -= n * e[15], t = 1 / Math.sqrt(e[6] * e[6] + e[7] * e[7] + e[8] * e[8] + e[9] * e[9]), e[6] *= t, e[7] *= t, e[8] *= t, e[9] *= t;
}
function ie(e) {
	return e[13] * e[13] + e[14] * e[14] + e[15] * e[15];
}
// src/core/sim.ts
var ae = .5;
function oe(e) {
	return Math.min(3, Math.max(ae, e));
}
var se = [
	"setGainShift",
	"rampGainShift",
	"setAacMode",
	"kick",
	"clearSchedule",
	"loadPreset",
	"reset"
], ce = [
	"off",
	"monitor",
	"engaged"
], le = class {
	p;
	seed;
	consts;
	scratch = new V();
	ctrl;
	aac;
	dt;
	substeps;
	dtCtrl;
	omegaMin;
	omegaSpan;
	refTarget = {
		pos: [
			0,
			0,
			0
		],
		yaw: 0
	};
	holdTau = /* @__PURE__ */ new Float64Array(3);
	holdCmd = /* @__PURE__ */ new Float64Array(4);
	hold = {
		tau: this.holdTau,
		omegaCmd: this.holdCmd
	};
	_tick = 0;
	tOrigin = 0;
	log = [];
	queue = [];
	scheduled = [];
	preset = null;
	ramp = null;
	x = /* @__PURE__ */ new Float64Array(23);
	gs = 1;
	mode = "off";
	uPrev0 = 0;
	uPrev1 = 0;
	tel = {
		t: 0,
		theta: 0,
		phi: 0,
		massRel: [
			0,
			0,
			0
		],
		quadPos: [
			0,
			0,
			0
		],
		roll: 0,
		pitch: 0,
		yaw: 0,
		kT: [1, 1],
		kTApplied: [1, 1],
		ySD: [0, 0],
		detect: [!1, !1],
		gainShift: 1,
		aacMode: "off",
		motorCmd: [
			0,
			0,
			0,
			0
		],
		motorOmega: [
			0,
			0,
			0,
			0
		]
	};
	constructor(e, t = 1, n = {}) {
		this.p = e, this.seed = t, this.consts = S(e), this.dt = e.sim.dt, this.substeps = e.sim.controlDecimation, this.dtCtrl = this.substeps * this.dt, this.ctrl = new B(e, t), this.aac = [new x(e, n), new x(e, n)], this.omegaMin = e.motor.omegaMin, this.omegaSpan = e.motor.omegaMax - e.motor.omegaMin, this.restore();
	}
	get state() {
		return this.x;
	}
	get tick() {
		return this._tick;
	}
	get t() {
		return (this._tick - this.tOrigin) * this.dtCtrl;
	}
	commandLog() {
		return this.log;
	}
	enqueue(e) {
		let t = e.type;
		if (typeof t != "string" || !se.includes(t)) throw Error(`unknown command type ${String(t)}`);
		if (e.type === "setAacMode" && !ce.includes(e.mode)) throw Error(`unknown AAC mode ${String(e.mode)}`);
		this.queue.push({ ...e });
	}
	stepControl() {
		this.applyCommands(), this.advanceRamp();
		let e = R(this.x), [t, n] = this.refError(e.q, e.pos), r = this.aac[0].step(this.uPrev0, t, this.mode), i = this.aac[1].step(this.uPrev1, n, this.mode), a = this.ctrl.step(e, this.refTarget, this.gs, [r.kTApplied, i.kTApplied]);
		this.uPrev0 = a.u[0], this.uPrev1 = a.u[1];
		let o = this.hold;
		for (let e = 0; e < 3; e++) this.holdTau[e] = a.tau[e];
		for (let e = 0; e < 4; e++) this.holdCmd[e] = a.omegaCmd[e];
		for (let e = 0; e < this.substeps; e++) ne(this.x, this.x, this.dt, o, this.consts, this.scratch);
		return this._tick += 1, this.fillTelemetry(a.omegaCmd, r, i);
	}
	applyCommands() {
		let e = this.queue;
		if (e.length > 0) {
			this.queue = [];
			for (let t of e) this.apply(t);
		}
		for (; this.scheduled.length > 0 && this.scheduled[0][0] <= this._tick;) {
			let [, e] = this.scheduled.shift();
			this.apply(e);
		}
	}
	apply(e) {
		switch (this.log.push([this._tick, e]), e.type) {
			case "setGainShift":
				this.gs = oe(e.value), this.ramp = null;
				break;
			case "rampGainShift": {
				let t = v(e.durationS / this.dtCtrl), n = oe(e.to);
				t <= 0 ? (this.gs = n, this.ramp = null) : this.ramp = {
					gs0: this.gs,
					to: n,
					n: t,
					start: this._tick
				};
				break;
			}
			case "setAacMode":
				this.mode = e.mode;
				break;
			case "kick":
				this.kick(e.theta ?? .2, e.phiDot ?? .6);
				break;
			case "clearSchedule":
				this.scheduled = [];
				break;
			case "loadPreset":
				this.preset = m(e.id), this.restore();
				break;
			case "reset": this.restore();
		}
	}
	kick(e, t) {
		let n = this.x, [r, i] = D(e, 0, Math.atan2(n[14], n[13]), t);
		n[13] = r[0], n[14] = r[1], n[15] = r[2], n[16] = i[0], n[17] = i[1], n[18] = i[2];
	}
	advanceRamp() {
		let e = this.ramp;
		if (e === null) return;
		let t = this._tick - e.start + 1;
		t >= e.n ? (this.gs = e.to, this.ramp = null) : this.gs = e.gs0 + (e.to - e.gs0) * (t / e.n);
	}
	restore() {
		this.ctrl.reset(this.seed);
		for (let e of this.aac) e.reset();
		this.ramp = null, this.scheduled = [], this.uPrev0 = 0, this.uPrev1 = 0, this.tOrigin = this._tick;
		let e = this.preset;
		if (e === null) {
			this.x = k(this.p), this.gs = 1, this.mode = "off";
			return;
		}
		let t = e.initial;
		this.x = k(this.p, t.theta, t.thetaDot, t.phi, t.phiDot), this.gs = oe(t.gainShift), this.mode = t.aacMode;
		for (let t of e.events) {
			let { t: e, ...n } = t;
			this.scheduled.push([this._tick + v(e / this.dtCtrl), n]);
		}
		this.scheduled.sort((e, t) => e[0] - t[0]);
	}
	refError(e, t) {
		let n = E(e[0], e[1], e[2], e[3])[2], r = this.refTarget.pos[0] - t[0], i = this.refTarget.pos[1] - t[1], a = Math.cos(n), o = Math.sin(n);
		return [a * r + o * i, -o * r + a * i];
	}
	fillTelemetry(e, t, n) {
		let r = this.x, i = this.tel, [a, o] = w(r), [s, c, l] = T(r, this.p.pendulum.L), [u, d, f] = E(r[6], r[7], r[8], r[9]);
		i.t = this.t, i.theta = a, i.phi = o, i.massRel[0] = s, i.massRel[1] = c, i.massRel[2] = l, i.quadPos[0] = r[0], i.quadPos[1] = r[1], i.quadPos[2] = r[2], i.roll = u, i.pitch = d, i.yaw = f, i.kT[0] = t.kT, i.kT[1] = n.kT, i.kTApplied[0] = t.kTApplied, i.kTApplied[1] = n.kTApplied, i.ySD[0] = t.ySD, i.ySD[1] = n.ySD, i.detect[0] = t.detect, i.detect[1] = n.detect, i.gainShift = this.gs, i.aacMode = this.mode;
		for (let t = 0; t < 4; t++) i.motorCmd[t] = (e[t] - this.omegaMin) / this.omegaSpan, i.motorOmega[t] = r[19 + t];
		return i;
	}
}, ue = /* @__PURE__ */ "t.theta.phi.massX.massY.massZ.quadX.quadY.quadZ.roll.pitch.yaw.kTPitch.kTRoll.kTAppliedPitch.kTAppliedRoll.ySDPitch.ySDRoll.detectPitch.detectRoll.gainShift.motorCmd0.motorCmd1.motorCmd2.motorCmd3.motorOmega0.motorOmega1.motorOmega2.motorOmega3".split("."), de = ["pitch", "roll"], fe = [];
function pe(e) {
	return String(Number(e.toFixed(2)));
}
function me(e, t) {
	switch (e.type) {
		case "setGainShift": return {
			t,
			kind: "gainShift",
			label: `Gain shift \u2192 ${pe(e.value)}`
		};
		case "rampGainShift": return {
			t,
			kind: "gainShift",
			label: `Gain shift \u2192 ${pe(e.to)}`
		};
		case "setAacMode": return {
			t,
			kind: "aacMode",
			label: e.mode === "off" ? "AAC off" : e.mode === "monitor" ? "AAC monitoring" : "AAC engaged"
		};
		case "kick": return {
			t,
			kind: "kick",
			label: "Disturbance"
		};
		default: return null;
	}
}
function he(e) {
	return e.aacMode === "engaged" ? "engaged" : e.gainShift > 1 + 1e-9 || e.aacMode === "monitor" ? "gainShift" : "nominal";
}
var ge = Object.fromEntries(ue.map((e, t) => [e, t])), H = class {
	capacity;
	data;
	out;
	head = 0;
	n = 0;
	_latest = null;
	lastT = -Infinity;
	prevDetect = [!1, !1];
	trips = [];
	marks = [];
	bandList = [];
	_pushes = 0;
	constructor(e = 3e3) {
		if (!Number.isInteger(e) || e < 1) throw Error("capacity must be a positive integer");
		this.capacity = e, this.data = ue.map(() => new Float64Array(e)), this.out = ue.map(() => new Float64Array(e));
	}
	get length() {
		return this.n;
	}
	get version() {
		return this._pushes;
	}
	push(e, t = fe) {
		let n = -1;
		for (let e = 0; e < t.length; e++) {
			let r = t[e][1].type;
			(r === "reset" || r === "loadPreset") && (n = e);
		}
		(n >= 0 || e.t <= this.lastT) && this.clear();
		for (let r = n + 1; r < t.length; r++) {
			let n = me(t[r][1], e.t);
			n !== null && this.marks.push(n);
		}
		this.lastT = e.t;
		let r = this.head, i = this.data;
		i[ge.t][r] = e.t, i[ge.theta][r] = e.theta, i[ge.phi][r] = e.phi, i[ge.massX][r] = e.massRel[0], i[ge.massY][r] = e.massRel[1], i[ge.massZ][r] = e.massRel[2], i[ge.quadX][r] = e.quadPos[0], i[ge.quadY][r] = e.quadPos[1], i[ge.quadZ][r] = e.quadPos[2], i[ge.roll][r] = e.roll, i[ge.pitch][r] = e.pitch, i[ge.yaw][r] = e.yaw, i[ge.kTPitch][r] = e.kT[0], i[ge.kTRoll][r] = e.kT[1], i[ge.kTAppliedPitch][r] = e.kTApplied[0], i[ge.kTAppliedRoll][r] = e.kTApplied[1], i[ge.ySDPitch][r] = e.ySD[0], i[ge.ySDRoll][r] = e.ySD[1], i[ge.detectPitch][r] = +!!e.detect[0], i[ge.detectRoll][r] = +!!e.detect[1], i[ge.gainShift][r] = e.gainShift;
		for (let t = 0; t < 4; t++) i[ge.motorCmd0 + t][r] = e.motorCmd[t], i[ge.motorOmega0 + t][r] = e.motorOmega[t];
		this.head = (r + 1) % this.capacity, this.n < this.capacity && (this.n += 1), this._pushes += 1;
		for (let t = 0; t < 2; t++) {
			let n = e.detect[t];
			n && !this.prevDetect[t] && (this.trips.push({
				t: e.t,
				axis: t
			}), e.aacMode !== "off" && this.marks.push({
				t: e.t,
				kind: "trip",
				label: `Detector tripped (${de[t]})`,
				axis: t
			})), this.prevDetect[t] = n;
		}
		let a = he(e), o = this.bandList, s = o[o.length - 1];
		s === void 0 ? o.push({
			t0: e.t,
			t1: e.t,
			regime: a
		}) : s.regime === a ? s.t1 = e.t : (s.t1 = e.t, o.push({
			t0: e.t,
			t1: e.t,
			regime: a
		}));
		let c = i[ge.t][(this.head - this.n + this.capacity) % this.capacity];
		U(this.trips, c, (e) => e.t), U(this.marks, c, (e) => e.t), U(o, c, (e) => e.t1);
		let l = this._latest;
		if (l === null) this._latest = {
			t: e.t,
			theta: e.theta,
			phi: e.phi,
			massRel: [...e.massRel],
			quadPos: [...e.quadPos],
			roll: e.roll,
			pitch: e.pitch,
			yaw: e.yaw,
			kT: [...e.kT],
			kTApplied: [...e.kTApplied],
			ySD: [...e.ySD],
			detect: [...e.detect],
			gainShift: e.gainShift,
			aacMode: e.aacMode,
			motorCmd: [...e.motorCmd],
			motorOmega: [...e.motorOmega]
		};
		else {
			l.t = e.t, l.theta = e.theta, l.phi = e.phi, l.roll = e.roll, l.pitch = e.pitch, l.yaw = e.yaw, l.gainShift = e.gainShift, l.aacMode = e.aacMode;
			for (let t = 0; t < 3; t++) l.massRel[t] = e.massRel[t], l.quadPos[t] = e.quadPos[t];
			for (let t = 0; t < 2; t++) l.kT[t] = e.kT[t], l.kTApplied[t] = e.kTApplied[t], l.ySD[t] = e.ySD[t], l.detect[t] = e.detect[t];
			for (let t = 0; t < 4; t++) l.motorCmd[t] = e.motorCmd[t], l.motorOmega[t] = e.motorOmega[t];
		}
	}
	view(e) {
		let t = ge[e];
		if (t === void 0) throw Error(`unknown channel ${String(e)}`);
		let n = this.data[t], r = this.out[t], i = this.n;
		if (i < this.capacity) r.set(n.subarray(0, i));
		else {
			let e = this.head, t = this.capacity - e;
			r.set(n.subarray(e), 0), r.set(n.subarray(0, e), t);
		}
		return r.subarray(0, i);
	}
	detections() {
		return this.trips.map((e) => ({
			t: e.t,
			axis: e.axis
		}));
	}
	markers() {
		return this.marks.map((e) => ({ ...e }));
	}
	bands() {
		if (this.n === 0) return [];
		let e = this.data[ge.t][(this.head - this.n + this.capacity) % this.capacity];
		return this.bandList.map((t) => ({
			t0: Math.max(t.t0, e),
			t1: t.t1,
			regime: t.regime
		}));
	}
	latest() {
		return this.n === 0 ? null : this._latest;
	}
	clear() {
		this.head = 0, this.n = 0, this.lastT = -Infinity, this.prevDetect = [!1, !1], this.trips = [], this.marks = [], this.bandList = [], this._pushes += 1;
	}
};
function U(e, t, n) {
	let r = 0;
	for (; r < e.length && n(e[r]) < t;) r++;
	r > 0 && e.splice(0, r);
}
// src/runtime/runner.ts
var W = .01, _e = 1e-9, G = () => typeof document < "u" && document.hidden, ve = (e) => typeof document > "u" ? () => void 0 : (document.addEventListener("visibilitychange", e), () => document.removeEventListener("visibilitychange", e)), K = class {
	sim;
	ring;
	now;
	raf;
	caf;
	maxBatches;
	isHidden;
	subscribeVisibility;
	perf;
	handlers = {
		frame: [],
		detect: [],
		"preset-done": []
	};
	running = !1;
	paused = !1;
	speed = 1;
	timeScale = 1;
	acc = 0;
	last = 0;
	rafId = null;
	unsubVisibility = null;
	prevDetect = [!1, !1];
	activePreset = null;
	presetDoneFired = !1;
	logRef = null;
	logCursor = 0;
	onFrameBound = () => this.onFrame(this.now());
	constructor(e, t, n = {}) {
		this.sim = e, this.ring = t, this.now = n.now ?? (() => performance.now()), this.raf = n.raf ?? ((e) => requestAnimationFrame(e)), this.caf = n.caf ?? ((e) => cancelAnimationFrame(e)), this.maxBatches = n.maxBatchesPerFrame ?? 10, this.isHidden = n.isHidden ?? G, this.subscribeVisibility = n.onVisibilityChange ?? ve, this.perf = n.perf ?? null;
	}
	get isPaused() {
		return this.paused;
	}
	get isRunning() {
		return this.running;
	}
	get currentSpeed() {
		return this.speed;
	}
	start() {
		this.running || (this.running = !0, this.last = this.now(), this.acc = 0, this.unsubVisibility = this.subscribeVisibility(() => {
			this.last = this.now(), this.perf?.skip();
		}), this.schedule());
	}
	stop() {
		this.running = !1, this.rafId !== null && this.caf(this.rafId), this.rafId = null, this.unsubVisibility?.(), this.unsubVisibility = null;
	}
	pause() {
		this.paused = !0;
	}
	resume() {
		this.paused && (this.paused = !1, this.last = this.now(), this.perf?.skip());
	}
	setSpeed(e) {
		if (e !== 1 && e !== .5) throw Error(`unsupported speed ${String(e)}`);
		this.speed = e;
	}
	setTimeScale(e) {
		if (!(e > 0 && e <= 8)) throw Error(`unsupported time scale ${String(e)}`);
		this.timeScale = e;
	}
	send(e) {
		let t = Array.isArray(e) ? e : [e];
		for (let e of t) e.type === "loadPreset" ? (this.activePreset = e.id, this.presetDoneFired = !1) : (e.type === "reset" || e.type === "clearSchedule") && (this.activePreset = null), this.sim.enqueue(e);
	}
	on(e, t) {
		let n = this.handlers[e];
		return n.push(t), () => {
			let e = n.indexOf(t);
			e >= 0 && n.splice(e, 1);
		};
	}
	ingest(e) {
		let t = this.sim.commandLog?.();
		if (t === void 0) this.ring.push(e);
		else if (t !== this.logRef && (this.logRef = t, this.logCursor = 0), t.length > this.logCursor) {
			let n = t.slice(this.logCursor);
			this.logCursor = t.length, this.ring.push(e, n);
		} else this.ring.push(e);
	}
	schedule() {
		this.rafId = this.raf(this.onFrameBound);
	}
	onFrame(e) {
		if (this.running) {
			this.rafId = null;
			try {
				this.frame(e);
			} finally {
				this.running && this.schedule();
			}
		}
	}
	frame(e) {
		if (this.paused || this.isHidden()) {
			this.last = e;
			return;
		}
		let t = Math.max(0, (e - this.last) / 1e3);
		this.last = e, this.acc += Math.min(t * this.speed * this.timeScale, this.maxBatches * W);
		let n = this.perf, r = n === null ? 0 : this.now(), i = 0;
		for (; this.acc >= .009999999 && i < this.maxBatches;) {
			let e = this.sim.stepControl();
			this.ingest(e), this.acc -= W, i += 1, this.afterTick(e);
		}
		this.acc < 0 && (this.acc = 0), n?.add("sim", this.now() - r);
		let a = this.ring.latest();
		if (a !== null) for (let e of this.handlers.frame.slice()) e(a, { ticks: i });
		n?.endFrame();
	}
	afterTick(e) {
		for (let t = 0; t < 2; t++) {
			let n = e.detect[t];
			if (n && !this.prevDetect[t]) for (let n of this.handlers.detect.slice()) n(t, e.t);
			this.prevDetect[t] = n;
		}
		let t = this.activePreset;
		if (t !== null && !this.presetDoneFired && e.t >= m(t).durationS - _e) {
			this.presetDoneFired = !0;
			for (let e of this.handlers["preset-done"].slice()) e(t);
		}
	}
}, q = {
	nominal: {
		title: "Nominal · Fig 12",
		body: "Gain shift 1 and the AAC off. The PD controller alone damps the hanging mass, so the slosh oscillation dies out, as in R-1 Fig 12."
	},
	gainShift: {
		title: "Gain shift · Fig 13",
		body: "We are raising the outer-loop gains on purpose (×2.3) to drive the slosh mode unstable, so the fuel slosh grows. The AAC is only monitoring: K_T is computed but not applied, so the motion is the same as with the AAC off (R-1 Fig 13)."
	},
	engaged: {
		title: "AAC engaged · Fig 14",
		body: "The AAC now applies K_T to the forward loop while the raised gains stay in place. Watch K_T drop and the slosh oscillation decay (R-1 Fig 14)."
	},
	replay: {
		title: "Replay the paper · Figs 12–14 and the §V.B flight test",
		body: "The flight restarts and steps through Nominal (Fig 12), Gain shift (Fig 13) and AAC engaged (Fig 14) on its own, like the flight-test sequence in §V.B of R-1. Tap a regime button to take over."
	}
}, ye = ["pitch", "roll"], be = "Detector", xe = "The spectral-damper detector watches the ~0.5 Hz control activity and flags growing slosh.", Se = "\n.sc-info { z-index: 3; display: flex; align-items: flex-start; gap: 8px; padding: 8px 10px; font: 13px/1.4 system-ui, sans-serif;\n  color: var(--sc-fg, inherit); background: color-mix(in srgb, var(--sc-surface, #fff) 90%, transparent);\n  border-top: 3px solid var(--sc-accent, #0b5cad); }\n.sc-info[hidden] { display: none; }\n.sc-info * { box-sizing: border-box; }\n.sc-info-text { flex: 1 1 auto; min-width: 0; display: flex; flex-direction: column; gap: 2px; }\n.sc-info-title { margin: 0; font-size: 14px; font-weight: 700; }\n.sc-info-body, .sc-info-caption { margin: 0; }\n.sc-info-caption { font-weight: 600; }\n.sc-info-caption:empty { display: none; }\n.sc-info[data-trip=\"true\"] .sc-info-caption { color: var(--sc-danger, #b3290a); }\n.sc-info-close { flex: none; width: 32px; height: 32px; padding: 0; font: inherit; font-size: 18px; line-height: 1; cursor: pointer;\n  color: var(--sc-fg, inherit); background: transparent; border: 1px solid var(--sc-border, currentColor); border-radius: 6px; }\n.sc-info-close:hover { border-color: var(--sc-accent, currentColor); }\n.sc-info-close:focus-visible { outline: 3px solid var(--sc-focus, #0b5cad); outline-offset: 2px; }\n/* the info banner is the last item of the view's dock (player bar above it): the dock overlays the lower part of the\n   scene on desktop (see styles.css) and sits directly under the scene in the compact layout (below 640 px) */\n.sc-dock > .sc-info { position: static; border-radius: 0 0 6px 6px; }\n.frame[data-layout='compact'] .sc-dock > .sc-info { background: var(--sc-surface, #fff); }\n", Ce = 0;
function we(e) {
	let t = e.ownerDocument, n = `scinfo${++Ce}`, r = t.createElement("div");
	r.className = "sc-info", r.setAttribute("role", "status"), r.hidden = !0;
	let i = t.createElement("div");
	i.className = "sc-info-text";
	let a = t.createElement("p");
	a.className = "sc-info-title", a.id = `${n}-title`;
	let o = t.createElement("p");
	o.className = "sc-info-body";
	let s = t.createElement("p");
	s.className = "sc-info-caption", i.append(a, o, s);
	let c = t.createElement("button");
	c.type = "button", c.className = "sc-info-close", c.textContent = "×", c.setAttribute("aria-label", "Dismiss the info banner"), r.append(i, c), e.appendChild(r);
	let l = null, u = !1, d = "", f = [null, null], p = () => {
		let e = [];
		for (let t = 0; t < 2; t++) {
			let n = f[t];
			n != null && e.push(`Slosh anomaly detected on the ${ye[t]} axis at t = ${n.toFixed(1)} s`);
		}
		return e.join(". ");
	}, m = () => {
		let e = p(), t = l === null ? e === "" ? {
			title: "",
			body: ""
		} : {
			title: be,
			body: xe
		} : q[l];
		a.textContent !== t.title && (a.textContent = t.title), o.textContent !== t.body && (o.textContent = t.body);
		let n = e === "" ? d : e;
		s.textContent !== n && (s.textContent = n), r.dataset.trip = String(e !== "");
	}, h = () => {
		r.hidden = !1;
	}, g = () => {
		u = !0, r.hidden = !0;
	}, _ = () => g();
	return c.addEventListener("click", _), {
		element: r,
		showPhase(e) {
			l = e, u = !1, f[0] = null, f[1] = null, d = "", m(), h();
		},
		setCaption(e) {
			d = e, m();
		},
		showTrip(e, t) {
			f[e] === null && (f[e] = t), m(), u || h();
		},
		clearTrips() {
			f[0] = null, f[1] = null, m();
		},
		reset() {
			l = null, u = !1, f[0] = null, f[1] = null, m(), r.hidden = !0;
		},
		dismiss: g,
		isVisible: () => !r.hidden,
		phase: () => l,
		dispose() {
			c.removeEventListener("click", _), r.remove();
		}
	};
}
var Te = "\n.sc-about { font: 14px/1.4 system-ui, sans-serif; color: var(--sc-fg, inherit); border: 1px solid var(--sc-border, currentColor); border-radius: 6px; padding: 6px 10px; }\n.sc-about summary { cursor: pointer; font-weight: 600; }\n.sc-about summary:focus-visible { outline: 3px solid var(--sc-focus, #0b5cad); outline-offset: 2px; }\n.sc-about p { margin: 6px 0; color: var(--sc-muted, inherit); }\n.sc-about ul { margin: 4px 0 8px; padding-left: 18px; }\n.sc-about li { margin: 2px 0; }\n.sc-about code { font-family: ui-monospace, monospace; font-size: 12px; }\n.sc-about .sc-src { color: var(--sc-muted, inherit); }\n";
function Ee(e) {
	return e.replace(/\s*\(Q-\d+\)/g, "").trim();
}
function De(e) {
	return /^(assumed|designed|tuned)\b/.test(e);
}
function Oe(e, t) {
	let n = e;
	for (let e of t.split(".")) {
		if (typeof n != "object" || !n) return;
		n = n[e];
	}
	return n;
}
function ke(e) {
	return typeof e == "number" ? String(Number(e.toPrecision(5))) : typeof e == "boolean" || typeof e == "string" ? String(e) : e === null ? "not set" : Array.isArray(e) ? `${e.length} coefficient rows` : "";
}
function Ae(e, t) {
	let n = [];
	for (let [r, i] of Object.entries(e)) i !== "R-1 Table 2" && n.push({
		path: r,
		value: t === void 0 ? "" : ke(Oe(t, r)),
		src: i,
		label: Ee(i),
		reconstruction: De(i)
	});
	return n;
}
function je(e, t, n) {
	let r = e.ownerDocument, i = Ae(t, n), a = r.createElement("details");
	a.className = "sc-about";
	let o = r.createElement("summary");
	o.textContent = "About these parameters", a.appendChild(o);
	let s = r.createElement("p");
	s.textContent = "The vehicle and pendulum values listed in the paper’s parameter table are used as given. The original controller gains, motor time constant, controller rate, adaptive-law settings and detection threshold are not available, so the values below are a reconstruction: assumed, designed or tuned for this simulation to reproduce the published behaviour qualitatively.", a.appendChild(s);
	let c = r.createElement("ul");
	for (let e of i) {
		let t = r.createElement("li");
		t.dataset.param = e.path, t.dataset.src = e.src, t.dataset.reconstruction = String(e.reconstruction);
		let n = r.createElement("code");
		n.textContent = e.path;
		let i = r.createElement("span");
		i.className = "sc-src", i.textContent = ` ${e.value === "" ? "" : `= ${e.value} `}(${e.label}${e.reconstruction && !e.label.includes("reconstruction") ? ", reconstruction" : ""})`, t.append(n, i), c.appendChild(t);
	}
	return a.appendChild(c), e.appendChild(a), {
		element: a,
		entries: i,
		dispose: () => a.remove()
	};
}
// node_modules/uplot/dist/uPlot.esm.js
var Me = !0, Ne = "uplot", Pe = "u-hz", Fe = "u-vt", Ie = "u-title", Le = "u-wrap", Re = "u-under", ze = "u-over", Be = "u-axis", Ve = "u-off", He = "u-select", Ue = "u-cursor-x", We = "u-cursor-y", Ge = "u-cursor-pt", Ke = "u-legend", qe = "u-live", Je = "u-inline", Ye = "u-series", Xe = "u-marker", Ze = "u-label", Qe = "u-value", $e = "width", et = "height", tt = "top", nt = "bottom", rt = "left", it = "right", at = "#000", ot = "#0000", st = "mousemove", ct = "mousedown", lt = "mouseup", ut = "mouseenter", dt = "mouseleave", ft = "dblclick", pt = "resize", mt = "scroll", ht = "change", gt = "dppxchange", _t = "--", vt = typeof window < "u", yt = vt ? document : null, bt = vt ? window : null, xt = vt ? navigator : null, St, Ct;
function wt() {
	let e = devicePixelRatio;
	St != e && (St = e, Ct && zt(ht, Ct, wt), Ct = matchMedia(`(min-resolution: ${St - .001}dppx) and (max-resolution: ${St + .001}dppx)`), Rt(ht, Ct, wt), bt.dispatchEvent(new CustomEvent(gt)));
}
function Tt(e, t) {
	if (t != null) {
		let n = e.classList;
		!n.contains(t) && n.add(t);
	}
}
function Et(e, t) {
	let n = e.classList;
	n.contains(t) && n.remove(t);
}
function Dt(e, t, n) {
	e.style[t] = n + "px";
}
function Ot(e, t, n, r) {
	let i = yt.createElement(e);
	return t != null && Tt(i, t), n?.insertBefore(i, r), i;
}
function kt(e, t) {
	return Ot("div", e, t);
}
var At = /* @__PURE__ */ new WeakMap();
function jt(e, t, n, r, i) {
	let a = "translate(" + t + "px," + n + "px)";
	a != At.get(e) && (e.style.transform = a, At.set(e, a), t < 0 || n < 0 || t > r || n > i ? Tt(e, Ve) : Et(e, Ve));
}
var Mt = /* @__PURE__ */ new WeakMap();
function Nt(e, t, n) {
	let r = t + n;
	r != Mt.get(e) && (Mt.set(e, r), e.style.background = t, e.style.borderColor = n);
}
var Pt = /* @__PURE__ */ new WeakMap();
function Ft(e, t, n, r) {
	let i = t + "" + n;
	i != Pt.get(e) && (Pt.set(e, i), e.style.height = n + "px", e.style.width = t + "px", e.style.marginLeft = r ? -t / 2 + "px" : 0, e.style.marginTop = r ? -n / 2 + "px" : 0);
}
var It = { passive: !0 }, Lt = {
	...It,
	capture: !0
};
function Rt(e, t, n, r) {
	t.addEventListener(e, n, r ? Lt : It);
}
function zt(e, t, n, r) {
	t.removeEventListener(e, n, It);
}
vt && wt();
function Bt(e, t, n, r) {
	let i;
	n ||= 0, r ||= t.length - 1;
	let a = r <= 2147483647;
	for (; r - n > 1;) i = a ? n + r >> 1 : ln((n + r) / 2), t[i] < e ? n = i : r = i;
	return e - t[n] <= t[r] - e ? n : r;
}
function Vt(e) {
	return (t, n, r) => {
		let i = -1, a = -1;
		for (let a = n; a <= r; a++) if (e(t[a])) {
			i = a;
			break;
		}
		for (let i = r; i >= n; i--) if (e(t[i])) {
			a = i;
			break;
		}
		return [i, a];
	};
}
var Ht = (e) => e != null, Ut = (e) => e != null && e > 0, Wt = Vt(Ht), Gt = Vt(Ut);
function Kt(e, t, n, r = 0, i = !1) {
	let a = i ? Gt : Wt, o = i ? Ut : Ht;
	[t, n] = a(e, t, n);
	let s = e[t], c = e[t];
	if (t > -1) {
		if (r == 1) s = e[t], c = e[n];
		else if (r == -1) s = e[n], c = e[t];
		else for (let r = t; r <= n; r++) {
			let t = e[r];
			o(t) && (t < s ? s = t : t > c && (c = t));
		}
	}
	return [s ?? bn, c ?? -bn];
}
function qt(e, t, n, r) {
	let i = hn(e), a = hn(t);
	e == t && (i == -1 ? (e *= n, t /= n) : (e /= n, t *= n));
	let o = n == 10 ? gn : _n, s = i == 1 ? ln : dn, c = a == 1 ? dn : ln, l = s(o(cn(e))), u = c(o(cn(t))), d = mn(n, l), f = mn(n, u);
	return n == 10 && (l < 0 && (d = In(d, -l)), u < 0 && (f = In(f, -u))), r || n == 2 ? (e = d * i, t = f * a) : (e = Fn(e, d), t = Pn(t, f)), [e, t];
}
function Jt(e, t, n, r) {
	let i = qt(e, t, n, r);
	return e == 0 && (i[0] = 0), t == 0 && (i[1] = 0), i;
}
var Yt = .1, Xt = {
	mode: 3,
	pad: Yt
}, Zt = {
	pad: 0,
	soft: null,
	mode: 0
}, Qt = {
	min: Zt,
	max: Zt
};
function $t(e, t, n, r) {
	return qn(n) ? nn(e, t, n) : (Zt.pad = n, Zt.soft = r ? 0 : null, Zt.mode = r ? 3 : 0, nn(e, t, Qt));
}
function en(e, t) {
	return e ?? t;
}
function tn(e, t, n) {
	for (t = en(t, 0), n = en(n, e.length - 1); t <= n;) {
		if (e[t] != null) return !0;
		t++;
	}
	return !1;
}
function nn(e, t, n) {
	let r = n.min, i = n.max, a = en(r.pad, 0), o = en(i.pad, 0), s = en(r.hard, -bn), c = en(i.hard, bn), l = en(r.soft, bn), u = en(i.soft, -bn), d = en(r.mode, 0), f = en(i.mode, 0), p = t - e, m = gn(p), h = pn(cn(e), cn(t)), g = cn(gn(h) - m);
	(p < 1e-24 || g > 10) && (p = 0, (e == 0 || t == 0) && (p = 1e-24, d == 2 && l != bn && (a = 0), f == 2 && u != -bn && (o = 0)));
	let _ = p || h || 1e3, v = mn(10, ln(gn(_))), y = In(Fn(e - _ * (p == 0 ? e == 0 ? .1 : 1 : a), v / 10), 24), b = e >= l && (d == 1 || d == 3 && y <= l || d == 2 && y >= l) ? l : bn, x = pn(s, y < b && e >= b ? b : fn(b, y)), S = In(Pn(t + _ * (p == 0 ? t == 0 ? .1 : 1 : o), v / 10), 24), C = t <= u && (f == 1 || f == 3 && S >= u || f == 2 && S <= u) ? u : -bn, w = fn(c, S > C && t <= C ? C : pn(C, S));
	return x == w && x == 0 && (w = 100), [x, w];
}
var rn = new Intl.NumberFormat(vt ? xt.language : "en-US"), an = (e) => rn.format(e), on = Math, sn = on.PI, cn = on.abs, ln = on.floor, un = on.round, dn = on.ceil, fn = on.min, pn = on.max, mn = on.pow, hn = on.sign, gn = on.log10, _n = on.log2, vn = (e, t = 1) => on.sinh(e) * t, yn = (e, t = 1) => on.asinh(e / t), bn = Infinity;
function xn(e) {
	return (gn((e ^ e >> 31) - (e >> 31)) | 0) + 1;
}
function Sn(e, t, n) {
	return fn(pn(e, t), n);
}
function Cn(e) {
	return typeof e == "function";
}
function wn(e) {
	return Cn(e) ? e : () => e;
}
var Tn = () => {}, En = (e) => e, Dn = (e, t) => t, On = (e) => null, kn = (e) => !0, An = (e, t) => e == t, jn = /\.\d*?(?=9{6,}|0{6,})/gm, Mn = (e) => {
	if (Wn(e) || Ln.has(e)) return e;
	let t = `${e}`, n = t.match(jn);
	if (n == null) return e;
	let r = n[0].length - 1;
	if (t.indexOf("e-") != -1) {
		let [e, n] = t.split("e");
		return +`${Mn(e)}e${n}`;
	}
	return In(e, r);
};
function Nn(e, t) {
	return Mn(In(Mn(e / t)) * t);
}
function Pn(e, t) {
	return Mn(dn(Mn(e / t)) * t);
}
function Fn(e, t) {
	return Mn(ln(Mn(e / t)) * t);
}
function In(e, t = 0) {
	if (Wn(e)) return e;
	let n = 10 ** t;
	return un(e * n * (1 + 2 ** -52)) / n;
}
var Ln = /* @__PURE__ */ new Map();
function Rn(e) {
	return (("" + e).split(".")[1] || "").length;
}
function zn(e, t, n, r) {
	let i = [], a = r.map(Rn);
	for (let o = t; o < n; o++) {
		let t = cn(o), n = In(mn(e, o), t);
		for (let s = 0; s < r.length; s++) {
			let c = e == 10 ? +`${r[s]}e${o}` : r[s] * n, l = (o >= 0 ? 0 : t) + (o >= a[s] ? 0 : a[s]), u = e == 10 ? c : In(c, l);
			i.push(u), Ln.set(u, l);
		}
	}
	return i;
}
var Bn = {}, Vn = [], Hn = [null, null], Un = Array.isArray, Wn = Number.isInteger, Gn = (e) => e === void 0;
function Kn(e) {
	return typeof e == "string";
}
function qn(e) {
	let t = !1;
	if (e != null) {
		let n = e.constructor;
		t = n == null || n == Object;
	}
	return t;
}
function Jn(e) {
	return typeof e == "object" && !!e;
}
var Yn = Object.getPrototypeOf(Uint8Array), Xn = "__proto__";
function Zn(e, t = qn) {
	let n;
	if (Un(e)) {
		let r = e.find((e) => e != null);
		if (Un(r) || t(r)) {
			n = Array(e.length);
			for (let r = 0; r < e.length; r++) n[r] = Zn(e[r], t);
		} else n = e.slice();
	} else if (e instanceof Yn) n = e.slice();
	else if (t(e)) {
		n = {};
		for (let r in e) r != Xn && (n[r] = Zn(e[r], t));
	} else n = e;
	return n;
}
function Qn(e) {
	let t = arguments;
	for (let n = 1; n < t.length; n++) {
		let r = t[n];
		for (let t in r) t != Xn && (qn(e[t]) ? Qn(e[t], Zn(r[t])) : e[t] = Zn(r[t]));
	}
	return e;
}
var $n = 0, er = 1, tr = 2;
function nr(e, t, n) {
	for (let r = 0, i, a = -1; r < t.length; r++) {
		let o = t[r];
		if (o > a) {
			for (i = o - 1; i >= 0 && e[i] == null;) e[i--] = null;
			for (i = o + 1; i < n && e[i] == null;) e[a = i++] = null;
		}
	}
}
function rr(e, t) {
	if (or(e)) {
		let t = e[0].slice();
		for (let n = 1; n < e.length; n++) t.push(...e[n].slice(1));
		return sr(t[0]) || (t = ar(t)), t;
	}
	let n = /* @__PURE__ */ new Set();
	for (let t = 0; t < e.length; t++) {
		let r = e[t][0], i = r.length;
		for (let e = 0; e < i; e++) n.add(r[e]);
	}
	let r = [Array.from(n).sort((e, t) => e - t)], i = r[0].length, a = /* @__PURE__ */ new Map();
	for (let e = 0; e < i; e++) a.set(r[0][e], e);
	for (let n = 0; n < e.length; n++) {
		let o = e[n], s = o[0];
		for (let e = 1; e < o.length; e++) {
			let c = o[e], l = Array(i).fill(void 0), u = t ? t[n][e] : er, d = [];
			for (let e = 0; e < c.length; e++) {
				let t = c[e], n = a.get(s[e]);
				t === null ? u != $n && (l[n] = t, u == tr && d.push(n)) : l[n] = t;
			}
			nr(l, d, i), r.push(l);
		}
	}
	return r;
}
var ir = typeof queueMicrotask > "u" ? (e) => Promise.resolve().then(e) : queueMicrotask;
function ar(e) {
	let t = e[0], n = t.length, r = Array(n);
	for (let e = 0; e < r.length; e++) r[e] = e;
	r.sort((e, n) => t[e] - t[n]);
	let i = [];
	for (let t = 0; t < e.length; t++) {
		let a = e[t], o = Array(n);
		for (let e = 0; e < n; e++) o[e] = a[r[e]];
		i.push(o);
	}
	return i;
}
function or(e) {
	let t = e[0][0], n = t.length;
	for (let r = 1; r < e.length; r++) {
		let i = e[r][0];
		if (i.length != n) return !1;
		if (i != t) {
			for (let e = 0; e < n; e++) if (i[e] != t[e]) return !1;
		}
	}
	return !0;
}
function sr(e, t = 100) {
	let n = e.length;
	if (n <= 1) return !0;
	let r = 0, i = n - 1;
	for (; r <= i && e[r] == null;) r++;
	for (; i >= r && e[i] == null;) i--;
	if (i <= r) return !0;
	let a = pn(1, ln((i - r + 1) / t));
	for (let t = e[r], n = r + a; n <= i; n += a) {
		let r = e[n];
		if (r != null) {
			if (r <= t) return !1;
			t = r;
		}
	}
	return !0;
}
var cr = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December"
], lr = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday"
];
function ur(e) {
	return e.slice(0, 3);
}
var dr = lr.map(ur), fr = {
	MMMM: cr,
	MMM: cr.map(ur),
	WWWW: lr,
	WWW: dr
};
function pr(e) {
	return (e < 10 ? "0" : "") + e;
}
function mr(e) {
	return (e < 10 ? "00" : e < 100 ? "0" : "") + e;
}
var hr = {
	YYYY: (e) => e.getFullYear(),
	YY: (e) => (e.getFullYear() + "").slice(2),
	MMMM: (e, t) => t.MMMM[e.getMonth()],
	MMM: (e, t) => t.MMM[e.getMonth()],
	MM: (e) => pr(e.getMonth() + 1),
	M: (e) => e.getMonth() + 1,
	DD: (e) => pr(e.getDate()),
	D: (e) => e.getDate(),
	WWWW: (e, t) => t.WWWW[e.getDay()],
	WWW: (e, t) => t.WWW[e.getDay()],
	HH: (e) => pr(e.getHours()),
	H: (e) => e.getHours(),
	h: (e) => {
		let t = e.getHours();
		return t == 0 ? 12 : t > 12 ? t - 12 : t;
	},
	AA: (e) => e.getHours() >= 12 ? "PM" : "AM",
	aa: (e) => e.getHours() >= 12 ? "pm" : "am",
	a: (e) => e.getHours() >= 12 ? "p" : "a",
	mm: (e) => pr(e.getMinutes()),
	m: (e) => e.getMinutes(),
	ss: (e) => pr(e.getSeconds()),
	s: (e) => e.getSeconds(),
	fff: (e) => mr(e.getMilliseconds())
};
function gr(e, t) {
	t ||= fr;
	let n = [], r = /\{([a-z]+)\}|[^{]+/gi, i;
	for (; i = r.exec(e);) n.push(i[0][0] == "{" ? hr[i[1]] : i[0]);
	return (e) => {
		let r = "";
		for (let i = 0; i < n.length; i++) r += typeof n[i] == "string" ? n[i] : n[i](e, t);
		return r;
	};
}
var _r = new Intl.DateTimeFormat().resolvedOptions().timeZone;
function vr(e, t) {
	let n;
	return t == "UTC" || t == "Etc/UTC" ? n = /* @__PURE__ */ new Date(+e + e.getTimezoneOffset() * 6e4) : t == _r ? n = e : (n = new Date(e.toLocaleString("en-US", { timeZone: t })), n.setMilliseconds(e.getMilliseconds())), n;
}
var yr = (e) => e % 1 == 0, br = [
	1,
	2,
	2.5,
	5
], xr = zn(10, -32, 0, br), Sr = zn(10, 0, 32, br), Cr = Sr.filter(yr), wr = xr.concat(Sr), Tr = "\n", Er = "{YYYY}", Dr = Tr + Er, Or = "{M}/{D}", kr = Tr + Or, Ar = kr + "/{YY}", jr = "{aa}", Mr = "{h}:{mm}" + jr, Nr = Tr + Mr, Pr = ":{ss}", Fr = null;
function Ir(e) {
	let t = e * 1e3, n = t * 60, r = n * 60, i = r * 24, a = i * 30, o = i * 365, s = (e == 1 ? zn(10, 0, 3, br).filter(yr) : zn(10, -3, 0, br)).concat([
		t,
		t * 5,
		t * 10,
		t * 15,
		t * 30,
		n,
		n * 5,
		n * 10,
		n * 15,
		n * 30,
		r,
		r * 2,
		r * 3,
		r * 4,
		r * 6,
		r * 8,
		r * 12,
		i,
		i * 2,
		i * 3,
		i * 4,
		i * 5,
		i * 6,
		i * 7,
		i * 8,
		i * 9,
		i * 10,
		i * 15,
		a,
		a * 2,
		a * 3,
		a * 4,
		a * 6,
		o,
		o * 2,
		o * 5,
		o * 10,
		o * 25,
		o * 50,
		o * 100
	]), c = [
		[
			o,
			Er,
			Fr,
			Fr,
			Fr,
			Fr,
			Fr,
			Fr,
			1
		],
		[
			i * 28,
			"{MMM}",
			Dr,
			Fr,
			Fr,
			Fr,
			Fr,
			Fr,
			1
		],
		[
			i,
			Or,
			Dr,
			Fr,
			Fr,
			Fr,
			Fr,
			Fr,
			1
		],
		[
			r,
			"{h}" + jr,
			Ar,
			Fr,
			kr,
			Fr,
			Fr,
			Fr,
			1
		],
		[
			n,
			Mr,
			Ar,
			Fr,
			kr,
			Fr,
			Fr,
			Fr,
			1
		],
		[
			t,
			Pr,
			Ar + " " + Mr,
			Fr,
			kr + " " + Mr,
			Fr,
			Nr,
			Fr,
			1
		],
		[
			e,
			Pr + ".{fff}",
			Ar + " " + Mr,
			Fr,
			kr + " " + Mr,
			Fr,
			Nr,
			Fr,
			1
		]
	];
	function l(t) {
		return (s, c, l, u, d, f) => {
			let p = [], m = d >= o, h = d >= a && d < o, g = t(l), _ = In(g * e, 3), v = Kr(g.getFullYear(), m ? 0 : g.getMonth(), h || m ? 1 : g.getDate()), y = In(v * e, 3);
			if (h || m) {
				let n = h ? d / a : 0, r = m ? d / o : 0, i = _ == y ? _ : In(Kr(v.getFullYear() + r, v.getMonth() + n, 1) * e, 3), s = new Date(un(i / e)), c = s.getFullYear(), l = s.getMonth();
				for (let a = 0; i <= u; a++) {
					let o = Kr(c + r * a, l + n * a, 1), s = o - t(In(o * e, 3));
					i = In((+o + s) * e, 3), i <= u && p.push(i);
				}
			} else {
				let a = d >= i ? i : d, o = y + (ln(l) - ln(_)) + Pn(_ - y, a);
				p.push(o);
				let m = t(o), h = m.getHours() + m.getMinutes() / n + m.getSeconds() / r, g = d / r, v = f / s.axes[c]._space;
				for (; o = In(o + d, e == 1 ? 0 : 3), !(o > u);) if (g > 1) {
					let e = ln(In(h + g, 6)) % 24, n = t(o).getHours() - e;
					n > 1 && (n = -1), o -= n * r, h = (h + g) % 24;
					let i = p[p.length - 1];
					In((o - i) / d, 3) * v >= .7 && p.push(o);
				} else p.push(o);
			}
			return p;
		};
	}
	return [
		s,
		c,
		l
	];
}
var [Lr, Rr, zr] = Ir(1), [Br, Vr, Hr] = Ir(.001);
zn(2, -53, 53, [1]);
function Ur(e, t) {
	return e.map((e) => e.map((n, r) => r == 0 || r == 8 || n == null ? n : t(r == 1 || e[8] == 0 ? n : e[1] + n)));
}
function Wr(e, t) {
	return (n, r, i, a, o) => {
		let s = t.find((e) => o >= e[0]) || t[t.length - 1], c, l, u, d, f, p;
		return r.map((t) => {
			let n = e(t), r = n.getFullYear(), i = n.getMonth(), a = n.getDate(), o = n.getHours(), m = n.getMinutes(), h = n.getSeconds(), g = r != c && s[2] || i != l && s[3] || a != u && s[4] || o != d && s[5] || m != f && s[6] || h != p && s[7] || s[1];
			return c = r, l = i, u = a, d = o, f = m, p = h, g(n);
		});
	};
}
function Gr(e, t) {
	let n = gr(t);
	return (t, r, i, a, o) => r.map((t) => n(e(t)));
}
function Kr(e, t, n) {
	return new Date(e, t, n);
}
function qr(e, t) {
	return t(e);
}
var Jr = "{YYYY}-{MM}-{DD} {h}:{mm}{aa}";
function Yr(e, t) {
	return (n, r, i, a) => a == null ? _t : t(e(r));
}
function Xr(e, t) {
	let n = e.series[t];
	return n.width ? n.stroke(e, t) : n.points.width ? n.points.stroke(e, t) : null;
}
function Zr(e, t) {
	return e.series[t].fill(e, t);
}
var Qr = {
	show: !0,
	live: !0,
	isolate: !1,
	mount: Tn,
	markers: {
		show: !0,
		width: 2,
		stroke: Xr,
		fill: Zr,
		dash: "solid"
	},
	idx: null,
	idxs: null,
	values: []
};
function $r(e, t) {
	let n = e.cursor.points, r = kt(), i = n.size(e, t);
	Dt(r, $e, i), Dt(r, et, i);
	let a = i / -2;
	Dt(r, "marginLeft", a), Dt(r, "marginTop", a);
	let o = n.width(e, t, i);
	return o && Dt(r, "borderWidth", o), r;
}
function ei(e, t) {
	let n = e.series[t].points;
	return n._fill || n._stroke;
}
function ti(e, t) {
	let n = e.series[t].points;
	return n._stroke || n._fill;
}
function ni(e, t) {
	return e.series[t].points.size;
}
var ri = [0, 0];
function ii(e, t, n) {
	return ri[0] = t, ri[1] = n, ri;
}
function ai(e, t, n, r = !0) {
	return (e) => {
		e.button != 0 || r && e.target != t || n(e);
	};
}
function oi(e, t, n, r = !0) {
	return (e) => {
		r && e.target != t || n(e);
	};
}
var si = {
	show: !0,
	x: !0,
	y: !0,
	lock: !1,
	move: ii,
	points: {
		one: !1,
		show: $r,
		size: ni,
		width: 0,
		stroke: ti,
		fill: ei
	},
	bind: {
		mousedown: ai,
		mouseup: ai,
		click: ai,
		dblclick: ai,
		mousemove: oi,
		mouseleave: oi,
		mouseenter: oi
	},
	drag: {
		setScale: !0,
		x: !0,
		y: !1,
		dist: 0,
		uni: null,
		click: (e, t) => {
			t.stopPropagation(), t.stopImmediatePropagation();
		},
		_x: !1,
		_y: !1
	},
	focus: {
		dist: (e, t, n, r, i) => r - i,
		prox: -1,
		bias: 0
	},
	hover: {
		skip: [void 0],
		prox: null,
		bias: 0
	},
	left: -10,
	top: -10,
	idx: null,
	dataIdx: null,
	idxs: null,
	event: null
}, ci = {
	show: !0,
	stroke: "rgba(0,0,0,0.07)",
	width: 2
}, li = Qn({}, ci, { filter: Dn }), ui = Qn({}, li, { size: 10 }), di = Qn({}, ci, { show: !1 }), fi = "12px system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"", pi = "bold " + fi, mi = 1.5, hi = {
	show: !0,
	scale: "x",
	stroke: at,
	space: 50,
	gap: 5,
	alignTo: 1,
	size: 50,
	labelGap: 0,
	labelSize: 30,
	labelFont: pi,
	side: 2,
	grid: li,
	ticks: ui,
	border: di,
	font: fi,
	lineGap: mi,
	rotate: 0
}, gi = "Value", _i = "Time", vi = {
	show: !0,
	scale: "x",
	auto: !1,
	sorted: 1,
	min: bn,
	max: -Infinity,
	idxs: []
};
function yi(e, t, n, r, i) {
	return t.map((e) => e == null ? "" : an(e));
}
function bi(e, t, n, r, i, a, o) {
	let s = [], c = Ln.get(i) || 0;
	n = o ? n : In(Pn(n, i), c);
	for (let e = n; e <= r; e = In(e + i, c)) s.push(Object.is(e, -0) ? 0 : e);
	return s;
}
function xi(e, t, n, r, i, a, o) {
	let s = [], c = e.scales[e.axes[t].scale].log;
	i = mn(c, ln((c == 10 ? gn : _n)(n))), c == 10 && (i = wr[Bt(i, wr)]);
	let l = n, u = i * c;
	c == 10 && (u = wr[Bt(u, wr)]);
	do
		s.push(l), l += i, c == 10 && !Ln.has(l) && (l = In(l, Ln.get(i))), l >= u && (i = l, u = i * c, c == 10 && (u = wr[Bt(u, wr)]));
	while (l <= r);
	return s;
}
function Si(e, t, n, r, i, a, o) {
	let s = e.scales[e.axes[t].scale].asinh, c = r > s ? xi(e, t, pn(s, n), r, i) : [s], l = r >= 0 && n <= 0 ? [0] : [];
	return (n < -s ? xi(e, t, pn(s, -r), -n, i) : [s]).reverse().map((e) => -e).concat(l, c);
}
var Ci = /./, wi = /[12357]/, Ti = /[125]/, Ei = /1/, Di = (e, t, n, r) => e.map((e, i) => t == 4 && e == 0 || i % r == 0 && n.test(e.toExponential()[+(e < 0)]) ? e : null);
function Oi(e, t, n, r, i) {
	let a = e.axes[n], o = a.scale, s = e.scales[o], c = e.valToPos, l = a._space, u = c(10, o), d = c(9, o) - u >= l ? Ci : c(7, o) - u >= l ? wi : c(5, o) - u >= l ? Ti : Ei;
	if (d == Ei) {
		let e = cn(c(1, o) - u);
		if (e < l) return Di(t.slice().reverse(), s.distr, d, dn(l / e)).reverse();
	}
	return Di(t, s.distr, d, 1);
}
function ki(e, t, n, r, i) {
	let a = e.axes[n], o = a.scale, s = a._space, c = e.valToPos, l = cn(c(1, o) - c(2, o));
	return l < s ? Di(t.slice().reverse(), 3, Ci, dn(s / l)).reverse() : t;
}
function Ai(e, t, n, r) {
	return r == null ? _t : t == null ? "" : an(t);
}
var ji = {
	show: !0,
	scale: "y",
	stroke: at,
	space: 30,
	gap: 5,
	alignTo: 1,
	size: 50,
	labelGap: 0,
	labelSize: 30,
	labelFont: pi,
	side: 3,
	grid: li,
	ticks: ui,
	border: di,
	font: fi,
	lineGap: mi,
	rotate: 0
};
function Mi(e, t) {
	return In((3 + (e || 1) * 2) * t, 3);
}
function Ni(e, t) {
	let { scale: n, idxs: r } = e.series[0], i = e._data[0], a = e.valToPos(i[r[0]], n, !0), o = cn(e.valToPos(i[r[1]], n, !0) - a) / (e.series[t].points.space * St);
	return r[1] - r[0] <= o;
}
var Pi = {
	scale: null,
	auto: !0,
	sorted: 0,
	min: bn,
	max: -Infinity
}, Fi = (e, t, n, r, i) => i, Ii = {
	show: !0,
	auto: !0,
	sorted: 0,
	gaps: Fi,
	alpha: 1,
	facets: [Qn({}, Pi, { scale: "x" }), Qn({}, Pi, { scale: "y" })]
}, Li = {
	scale: "y",
	auto: !0,
	sorted: 0,
	show: !0,
	spanGaps: !1,
	gaps: Fi,
	alpha: 1,
	points: {
		show: Ni,
		filter: null
	},
	values: null,
	min: bn,
	max: -Infinity,
	idxs: [],
	path: null,
	clip: null
};
function Ri(e, t, n, r, i) {
	return n / 10;
}
var zi = {
	time: Me,
	auto: !0,
	distr: 1,
	log: 10,
	asinh: 1,
	min: null,
	max: null,
	dir: 1,
	ori: 0
}, Bi = Qn({}, zi, {
	time: !1,
	ori: 1
}), Vi = {};
function Hi(e, t) {
	let n = Vi[e];
	return n || (n = {
		key: e,
		plots: [],
		sub(e) {
			n.plots.push(e);
		},
		unsub(e) {
			n.plots = n.plots.filter((t) => t != e);
		},
		pub(e, t, r, i, a, o, s) {
			for (let c = 0; c < n.plots.length; c++) n.plots[c] != t && n.plots[c].pub(e, t, r, i, a, o, s);
		}
	}, e != null && (Vi[e] = n)), n;
}
var Ui = 1, Wi = 2;
function Gi(e, t, n) {
	let r = e.mode, i = e.series[t], a = r == 2 ? e._data[t] : e._data, o = e.scales, s = e.bbox, c = a[0], l = r == 2 ? a[1] : a[t], u = r == 2 ? o[i.facets[0].scale] : o[e.series[0].scale], d = r == 2 ? o[i.facets[1].scale] : o[i.scale], f = s.left, p = s.top, m = s.width, h = s.height, g = e.valToPosH, _ = e.valToPosV;
	return u.ori == 0 ? n(i, c, l, u, d, g, _, f, p, m, h, ea, na, ia, oa, ca) : n(i, c, l, u, d, _, g, p, f, h, m, ta, ra, aa, sa, la);
}
function Ki(e, t) {
	let n = 0, r = 0, i = en(e.bands, Vn);
	for (let e = 0; e < i.length; e++) {
		let a = i[e];
		a.series[0] == t ? n = a.dir : a.series[1] == t && (a.dir == 1 ? r |= 1 : r |= 2);
	}
	return [n, r == 1 ? -1 : r == 2 ? 1 : r == 3 ? 2 : 0];
}
function qi(e, t, n, r, i) {
	let a = e.mode, o = e.series[t], s = a == 2 ? o.facets[1].scale : o.scale, c = e.scales[s];
	return i == -1 ? c.min : i == 1 ? c.max : c.distr == 3 ? c.dir == 1 ? c.min : c.max : 0;
}
function Ji(e, t, n, r, i, a) {
	return Gi(e, t, (e, t, o, s, c, l, u, d, f, p, m) => {
		let h = e.pxRound, g = s.dir * (s.ori == 0 ? 1 : -1), _ = s.ori == 0 ? na : ra, v, y;
		g == 1 ? (v = n, y = r) : (v = r, y = n);
		let b = h(l(t[v], s, p, d)), x = h(u(o[v], c, m, f)), S = h(l(t[y], s, p, d)), C = h(u(a == 1 ? c.max : c.min, c, m, f)), w = new Path2D(i);
		return _(w, S, C), _(w, b, C), _(w, b, x), w;
	});
}
function Yi(e, t, n, r, i, a) {
	let o = null;
	if (e.length > 0) {
		o = new Path2D();
		let s = t == 0 ? ia : aa, c = n;
		for (let t = 0; t < e.length; t++) {
			let n = e[t];
			if (n[1] > n[0]) {
				let e = n[0] - c;
				e > 0 && s(o, c, r, e, r + a), c = n[1];
			}
		}
		let l = n + i - c;
		l > 0 && s(o, c, r - 5, l, r + a + 10);
	}
	return o;
}
function Xi(e, t, n) {
	let r = e[e.length - 1];
	r && r[0] == t ? r[1] = n : e.push([t, n]);
}
function Zi(e, t, n, r, i, a, o) {
	let s = [], c = e.length;
	for (let l = i == 1 ? n : r; l >= n && l <= r; l += i) if (t[l] === null) {
		let u = l, d = l;
		if (i == 1) for (; ++l <= r && t[l] === null;) d = l;
		else for (; --l >= n && t[l] === null;) d = l;
		let f = a(e[u]), p = d == u ? f : a(e[d]), m = u - i;
		f = o <= 0 && m >= 0 && m < c ? a(e[m]) : f;
		let h = d + i;
		p = o >= 0 && h >= 0 && h < c ? a(e[h]) : p, p >= f && s.push([f, p]);
	}
	return s;
}
function Qi(e) {
	return e == 0 ? En : e == 1 ? un : (t) => Nn(t, e);
}
function $i(e) {
	let t = e == 0 ? ea : ta, n = e == 0 ? (e, t, n, r, i, a) => {
		e.arcTo(t, n, r, i, a);
	} : (e, t, n, r, i, a) => {
		e.arcTo(n, t, i, r, a);
	}, r = e == 0 ? (e, t, n, r, i) => {
		e.rect(t, n, r, i);
	} : (e, t, n, r, i) => {
		e.rect(n, t, i, r);
	};
	return (e, i, a, o, s, c = 0, l = 0) => {
		c == 0 && l == 0 ? r(e, i, a, o, s) : (c = fn(c, o / 2, s / 2), l = fn(l, o / 2, s / 2), t(e, i + c, a), n(e, i + o, a, i + o, a + s, c), n(e, i + o, a + s, i, a + s, l), n(e, i, a + s, i, a, l), n(e, i, a, i + o, a, c), e.closePath());
	};
}
var ea = (e, t, n) => {
	e.moveTo(t, n);
}, ta = (e, t, n) => {
	e.moveTo(n, t);
}, na = (e, t, n) => {
	e.lineTo(t, n);
}, ra = (e, t, n) => {
	e.lineTo(n, t);
}, ia = $i(0), aa = $i(1), oa = (e, t, n, r, i, a) => {
	e.arc(t, n, r, i, a);
}, sa = (e, t, n, r, i, a) => {
	e.arc(n, t, r, i, a);
}, ca = (e, t, n, r, i, a, o) => {
	e.bezierCurveTo(t, n, r, i, a, o);
}, la = (e, t, n, r, i, a, o) => {
	e.bezierCurveTo(n, t, i, r, o, a);
};
function ua(e) {
	return (e, t, n, r, i) => Gi(e, t, (t, a, o, s, c, l, u, d, f, p, m) => {
		let { pxRound: h, points: g } = t, _, v;
		s.ori == 0 ? (_ = ea, v = oa) : (_ = ta, v = sa);
		let y = In(g.width * St, 3), b = (g.size - g.width) / 2 * St, x = In(b * 2, 3), S = new Path2D(), C = new Path2D(), { left: w, top: T, width: E, height: D } = e.bbox;
		ia(C, w - x, T - x, E + x * 2, D + x * 2);
		let O = (e) => {
			if (o[e] != null) {
				let t = h(l(a[e], s, p, d)), n = h(u(o[e], c, m, f));
				_(S, t + b, n), v(S, t, n, b, 0, sn * 2);
			}
		};
		if (i) i.forEach(O);
		else for (let e = n; e <= r; e++) O(e);
		return {
			stroke: y > 0 ? S : null,
			fill: S,
			clip: C,
			flags: 3
		};
	});
}
function da(e) {
	return (t, n, r, i, a, o) => {
		r != i && (a != r && o != r && e(t, n, r), a != i && o != i && e(t, n, i), e(t, n, o));
	};
}
var fa = da(na), pa = da(ra);
function ma(e) {
	let t = en(e?.alignGaps, 0);
	return (e, n, r, i) => Gi(e, n, (a, o, s, c, l, u, d, f, p, m, h) => {
		[r, i] = Wt(s, r, i);
		let g = a.pxRound, _ = (e) => g(u(e, c, m, f)), v = (e) => g(d(e, l, h, p)), y, b;
		c.ori == 0 ? (y = na, b = fa) : (y = ra, b = pa);
		let x = c.dir * (c.ori == 0 ? 1 : -1), S = {
			stroke: new Path2D(),
			fill: null,
			clip: null,
			band: null,
			gaps: null,
			flags: Ui
		}, C = S.stroke, w = !1;
		if (i - r >= m * 4) {
			let t = (t) => e.posToVal(t, c.key, !0), n = null, a = null, l, u, d, f = _(o[x == 1 ? r : i]), p = _(o[r]), m = _(o[i]), h = t(x == 1 ? p + 1 : m - 1);
			for (let e = x == 1 ? r : i; e >= r && e <= i; e += x) {
				let r = o[e], i = (x == 1 ? r < h : r > h) ? f : _(r), c = s[e];
				i == f ? c == null ? c === null && (w = !0) : (u = c, n == null ? (y(C, i, v(u)), l = n = a = u) : u < n ? n = u : u > a && (a = u)) : (n != null && b(C, f, v(n), v(a), v(l), v(u)), c == null ? (n = a = null, c === null && (w = !0)) : (u = c, y(C, i, v(u)), n = a = l = u), f = i, h = t(f + x));
			}
			n != null && n != a && d != f && b(C, f, v(n), v(a), v(l), v(u));
		} else for (let e = x == 1 ? r : i; e >= r && e <= i; e += x) {
			let t = s[e];
			t === null ? w = !0 : t != null && y(C, _(o[e]), v(t));
		}
		let [T, E] = Ki(e, n);
		if (a.fill != null || T != 0) {
			let t = S.fill = new Path2D(C), s = v(a.fillTo(e, n, a.min, a.max, T)), c = _(o[r]), l = _(o[i]);
			x == -1 && ([l, c] = [c, l]), y(t, l, s), y(t, c, s);
		}
		if (!a.spanGaps) {
			let l = [];
			w && l.push(...Zi(o, s, r, i, x, _, t)), S.gaps = l = a.gaps(e, n, r, i, l), S.clip = Yi(l, c.ori, f, p, m, h);
		}
		return E != 0 && (S.band = E == 2 ? [Ji(e, n, r, i, C, -1), Ji(e, n, r, i, C, 1)] : Ji(e, n, r, i, C, E)), S;
	});
}
function ha(e) {
	let t = en(e.align, 1), n = en(e.ascDesc, !1), r = en(e.alignGaps, 0), i = en(e.extend, !1);
	return (e, a, o, s) => Gi(e, a, (c, l, u, d, f, p, m, h, g, _, v) => {
		[o, s] = Wt(u, o, s);
		let y = c.pxRound, { left: b, width: x } = e.bbox, S = (e) => y(p(e, d, _, h)), C = (e) => y(m(e, f, v, g)), w = d.ori == 0 ? na : ra, T = {
			stroke: new Path2D(),
			fill: null,
			clip: null,
			band: null,
			gaps: null,
			flags: Ui
		}, E = T.stroke, D = d.dir * (d.ori == 0 ? 1 : -1), O = C(u[D == 1 ? o : s]), k = S(l[D == 1 ? o : s]), A = k, j = k;
		i && t == -1 && (j = b, w(E, j, O)), w(E, k, O);
		for (let e = D == 1 ? o : s; e >= o && e <= s; e += D) {
			let n = u[e];
			if (n == null) continue;
			let r = S(l[e]), i = C(n);
			t == 1 ? w(E, r, O) : w(E, A, i), w(E, r, i), O = i, A = r;
		}
		let M = A;
		i && t == 1 && (M = b + x, w(E, M, O));
		let [N, P] = Ki(e, a);
		if (c.fill != null || N != 0) {
			let t = T.fill = new Path2D(E), n = C(c.fillTo(e, a, c.min, c.max, N));
			w(t, M, n), w(t, j, n);
		}
		if (!c.spanGaps) {
			let i = [];
			i.push(...Zi(l, u, o, s, D, S, r));
			let f = c.width * St / 2, p = n || t == 1 ? f : -f, m = n || t == -1 ? -f : f;
			i.forEach((e) => {
				e[0] += p, e[1] += m;
			}), T.gaps = i = c.gaps(e, a, o, s, i), T.clip = Yi(i, d.ori, h, g, _, v);
		}
		return P != 0 && (T.band = P == 2 ? [Ji(e, a, o, s, E, -1), Ji(e, a, o, s, E, 1)] : Ji(e, a, o, s, E, P)), T;
	});
}
function ga(e, t, n, r, i, a, o = bn) {
	if (e.length > 1) {
		let s = null;
		for (let c = 0, l = Infinity; c < e.length; c++) if (t[c] !== void 0) {
			if (s != null) {
				let t = cn(e[c] - e[s]);
				t < l && (l = t, o = cn(n(e[c], r, i, a) - n(e[s], r, i, a)));
			}
			s = c;
		}
	}
	return o;
}
function _a(e) {
	e ||= Bn;
	let t = en(e.size, [
		.6,
		bn,
		1
	]), n = e.align || 0, r = e.gap || 0, i = e.radius;
	i = i == null ? [0, 0] : typeof i == "number" ? [i, 0] : i;
	let a = wn(i), o = 1 - t[0], s = en(t[1], bn), c = en(t[2], 1), l = en(e.disp, Bn), u = en(e.each, (e) => {}), { fill: d, stroke: f } = l;
	return (e, t, i, p) => Gi(e, t, (m, h, g, _, v, y, b, x, S, C, w) => {
		let T = m.pxRound, E = n, D = r * St, O = s * St, k = c * St, A, j;
		_.ori == 0 ? [A, j] = a(e, t) : [j, A] = a(e, t);
		let M = _.dir * (_.ori == 0 ? 1 : -1), N = _.ori == 0 ? ia : aa, P = _.ori == 0 ? u : (e, t, n, r, i, a, o) => {
			u(e, t, n, i, r, o, a);
		}, ee = en(e.bands, Vn).find((e) => e.series[0] == t), F = ee == null ? 0 : ee.dir, te = m.fillTo(e, t, m.min, m.max, F), I = T(b(te, v, w, S)), L, R, z, B = C, V = T(m.width * St), ne = !1, re = null, ie = null, ae = null, oe = null;
		d != null && (V == 0 || f != null) && (ne = !0, re = d.values(e, t, i, p), ie = /* @__PURE__ */ new Map(), new Set(re).forEach((e) => {
			e != null && ie.set(e, new Path2D());
		}), V > 0 && (ae = f.values(e, t, i, p), oe = /* @__PURE__ */ new Map(), new Set(ae).forEach((e) => {
			e != null && oe.set(e, new Path2D());
		})));
		let { x0: se, size: ce } = l;
		if (se != null && ce != null) {
			E = 1, h = se.values(e, t, i, p), se.unit == 2 && (h = h.map((t) => e.posToVal(x + t * C, _.key, !0)));
			let n = ce.values(e, t, i, p);
			R = ce.unit == 2 ? n[0] * C : y(n[0], _, C, x) - y(0, _, C, x), B = ga(h, g, y, _, C, x, B), z = B - R + D;
		} else B = ga(h, g, y, _, C, x, B), z = B * o + D, R = B - z;
		z < 1 && (z = 0), V >= R / 2 && (V = 0), z < 5 && (T = En);
		let le = z > 0, ue = B - z - (le ? V : 0);
		R = T(Sn(ue, k, O)), L = (E == 0 ? R / 2 : E == M ? 0 : R) - E * M * ((E == 0 ? D / 2 : 0) + (le ? V / 2 : 0));
		let de = {
			stroke: null,
			fill: null,
			clip: null,
			band: null,
			gaps: null,
			flags: 0
		}, fe = ne ? null : new Path2D(), pe = null;
		if (ee != null) pe = e.data[ee.series[1]];
		else {
			let { y0: n, y1: r } = l;
			n != null && r != null && (g = r.values(e, t, i, p), pe = n.values(e, t, i, p));
		}
		let me = A * R, he = j * R;
		for (let n = M == 1 ? i : p; n >= i && n <= p; n += M) {
			let r = g[n];
			if (r == null) continue;
			if (pe != null) {
				let e = pe[n] ?? 0;
				if (r - e == 0) continue;
				I = b(e, v, w, S);
			}
			let i = y(_.distr != 2 || l != null ? h[n] : n, _, C, x), a = b(en(r, te), v, w, S), o = T(i - L), s = T(pn(a, I)), c = T(fn(a, I)), u = s - c;
			if (r != null) {
				let i = r < 0 ? he : me, a = r < 0 ? me : he;
				ne ? (V > 0 && ae[n] != null && N(oe.get(ae[n]), o, c + ln(V / 2), R, pn(0, u - V), i, a), re[n] != null && N(ie.get(re[n]), o, c + ln(V / 2), R, pn(0, u - V), i, a)) : N(fe, o, c + ln(V / 2), R, pn(0, u - V), i, a), P(e, t, n, o - V / 2, c, R + V, u);
			}
		}
		return V > 0 ? de.stroke = ne ? oe : fe : ne || (de._fill = m.width == 0 ? m._fill : m._stroke ?? m._fill, de.width = 0), de.fill = ne ? ie : fe, de;
	});
}
function va(e, t) {
	let n = en(t?.alignGaps, 0);
	return (t, r, i, a) => Gi(t, r, (o, s, c, l, u, d, f, p, m, h, g) => {
		[i, a] = Wt(c, i, a);
		let _ = o.pxRound, v = (e) => _(d(e, l, h, p)), y = (e) => _(f(e, u, g, m)), b, x, S;
		l.ori == 0 ? (b = ea, S = na, x = ca) : (b = ta, S = ra, x = la);
		let C = l.dir * (l.ori == 0 ? 1 : -1), w = v(s[C == 1 ? i : a]), T = w, E = [], D = [];
		for (let e = C == 1 ? i : a; e >= i && e <= a; e += C) if (c[e] != null) {
			let t = s[e], n = v(t);
			E.push(T = n), D.push(y(c[e]));
		}
		let O = {
			stroke: e(E, D, b, S, x, _),
			fill: null,
			clip: null,
			band: null,
			gaps: null,
			flags: Ui
		}, k = O.stroke, [A, j] = Ki(t, r);
		if (o.fill != null || A != 0) {
			let e = O.fill = new Path2D(k), n = y(o.fillTo(t, r, o.min, o.max, A));
			S(e, T, n), S(e, w, n);
		}
		if (!o.spanGaps) {
			let e = [];
			e.push(...Zi(s, c, i, a, C, v, n)), O.gaps = e = o.gaps(t, r, i, a, e), O.clip = Yi(e, l.ori, p, m, h, g);
		}
		return j != 0 && (O.band = j == 2 ? [Ji(t, r, i, a, k, -1), Ji(t, r, i, a, k, 1)] : Ji(t, r, i, a, k, j)), O;
	});
}
function ya(e) {
	return va(ba, e);
}
function ba(e, t, n, r, i, a) {
	let o = e.length;
	if (o < 2) return null;
	let s = new Path2D();
	if (n(s, e[0], t[0]), o == 2) r(s, e[1], t[1]);
	else {
		let n = Array(o), r = Array(o - 1), a = Array(o - 1), c = Array(o - 1);
		for (let n = 0; n < o - 1; n++) a[n] = t[n + 1] - t[n], c[n] = e[n + 1] - e[n], r[n] = a[n] / c[n];
		n[0] = r[0];
		for (let e = 1; e < o - 1; e++) r[e] === 0 || r[e - 1] === 0 || r[e - 1] > 0 != r[e] > 0 ? n[e] = 0 : (n[e] = 3 * (c[e - 1] + c[e]) / ((2 * c[e] + c[e - 1]) / r[e - 1] + (c[e] + 2 * c[e - 1]) / r[e]), isFinite(n[e]) || (n[e] = 0));
		n[o - 1] = r[o - 2];
		for (let r = 0; r < o - 1; r++) i(s, e[r] + c[r] / 3, t[r] + n[r] * c[r] / 3, e[r + 1] - c[r] / 3, t[r + 1] - n[r + 1] * c[r] / 3, e[r + 1], t[r + 1]);
	}
	return s;
}
var xa = /* @__PURE__ */ new Set();
function Sa() {
	for (let e of xa) e.syncRect(!0);
}
vt && (Rt(pt, bt, Sa), Rt(mt, bt, Sa, !0), Rt(gt, bt, () => {
	Ra.pxRatio = St;
}));
var Ca = ma(), wa = ua();
function Ta(e, t, n, r) {
	return (r ? [e[0], e[1]].concat(e.slice(2)) : [e[0]].concat(e.slice(1))).map((e, r) => Da(e, r, t, n));
}
function Ea(e, t) {
	return e.map((e, n) => n == 0 ? {} : Qn({}, t, e));
}
function Da(e, t, n, r) {
	return Qn({}, t == 0 ? n : r, e);
}
function Oa(e, t, n) {
	return t == null ? Hn : [t, n];
}
var ka = Oa;
function Aa(e, t, n) {
	return t == null ? Hn : $t(t, n, Yt, !0);
}
function ja(e, t, n, r) {
	return t == null ? Hn : qt(t, n, e.scales[r].log, !1);
}
var Ma = ja;
function Na(e, t, n, r) {
	return t == null ? Hn : Jt(t, n, e.scales[r].log, !1);
}
var Pa = Na;
function Fa(e, t, n, r, i) {
	let a = pn(xn(e), xn(t)), o = t - e, s = Bt(i / r * o, n);
	do {
		let e = n[s], t = r * e / o;
		if (t >= i && a + (e < 5 ? Ln.get(e) : 0) <= 17) return [e, t];
	} while (++s < n.length);
	return [0, 0];
}
function Ia(e) {
	let t, n;
	return e = e.replace(/(\d+)px/, (e, r) => (t = un((n = +r) * St)) + "px"), [
		e,
		t,
		n
	];
}
function La(e) {
	e.show && [e.font, e.labelFont].forEach((e) => {
		let t = In(e[2] * St, 1);
		e[0] = e[0].replace(/[0-9.]+px/, t + "px"), e[1] = t;
	});
}
function Ra(e, t, n) {
	let r = { mode: en(e.mode, 1) }, i = r.mode;
	function a(e, t, n, r) {
		let i = t.valToPct(e);
		return r + n * (t.dir == -1 ? 1 - i : i);
	}
	function o(e, t, n, r) {
		let i = t.valToPct(e);
		return r + n * (t.dir == -1 ? i : 1 - i);
	}
	function s(e, t, n, r) {
		return t.ori == 0 ? a(e, t, n, r) : o(e, t, n, r);
	}
	r.valToPosH = a, r.valToPosV = o;
	let c = !1;
	r.status = 0;
	let l = r.root = kt(Ne);
	if (e.id != null && (l.id = e.id), Tt(l, e.class), e.title) {
		let t = kt(Ie, l);
		t.textContent = e.title;
	}
	let u = Ot("canvas"), d = r.ctx = u.getContext("2d"), f = kt(Le, l);
	Rt("click", f, (e) => {
		e.target === m && ($r != Ir || ei != Kr) && ni.click(r, e);
	}, !0);
	let p = r.under = kt(Re, f);
	f.appendChild(u);
	let m = r.over = kt(ze, f);
	e = Zn(e);
	let h = +en(e.pxAlign, 1), g = Qi(h);
	(e.plugins || []).forEach((t) => {
		t.opts && (e = t.opts(r, e) || e);
	});
	let _ = e.ms || .001, v = r.series = i == 1 ? Ta(e.series || [], vi, Li, !1) : Ea(e.series || [null], Ii), y = r.axes = Ta(e.axes || [], hi, ji, !0), b = r.scales = {}, x = r.bands = e.bands || [];
	x.forEach((e) => {
		e.fill = wn(e.fill || null), e.dir = en(e.dir, -1);
	});
	let S = i == 2 ? v[1].facets[0].scale : v[0].scale, C = {
		axes: vr,
		series: or
	}, w = (e.drawOrder || ["axes", "series"]).map((e) => C[e]);
	function T(e) {
		let t = e.distr == 3 ? (t) => gn(t > 0 ? t : e.clamp(r, t, e.min, e.max, e.key)) : e.distr == 4 ? (t) => yn(t, e.asinh) : e.distr == 100 ? (t) => e.fwd(t) : (e) => e;
		return (n) => {
			let r = t(n), { _min: i, _max: a } = e, o = a - i;
			return (r - i) / o;
		};
	}
	function E(t) {
		let n = b[t];
		if (n == null) {
			let r = (e.scales || Bn)[t] || Bn;
			if (r.from != null) {
				E(r.from);
				let e = Qn({}, b[r.from], r, { key: t });
				e.valToPct = T(e), b[t] = e;
			} else {
				n = b[t] = Qn({}, t == S ? zi : Bi, r), n.key = t;
				let e = n.time, a = n.range, o = Un(a);
				if ((t != S || i == 2 && !e) && (o && (a[0] == null || a[1] == null) && (a = {
					min: a[0] == null ? Xt : {
						mode: 1,
						hard: a[0],
						soft: a[0]
					},
					max: a[1] == null ? Xt : {
						mode: 1,
						hard: a[1],
						soft: a[1]
					}
				}, o = !1), !o && qn(a))) {
					let e = a;
					a = (t, n, r) => n == null ? Hn : $t(n, r, e);
				}
				n.range = wn(a || (e ? ka : t == S ? n.distr == 3 ? Ma : n.distr == 4 ? Pa : Oa : n.distr == 3 ? ja : n.distr == 4 ? Na : Aa)), n.auto = wn(!o && n.auto), n.clamp = wn(n.clamp || Ri), n._min = n._max = null, n.valToPct = T(n);
			}
		}
	}
	E("x"), E("y"), i == 1 && v.forEach((e) => {
		E(e.scale);
	}), y.forEach((e) => {
		E(e.scale);
	});
	for (let t in e.scales) E(t);
	let D = b[S], O = D.distr, k, A;
	D.ori == 0 ? (Tt(l, Pe), k = a, A = o) : (Tt(l, Fe), k = o, A = a);
	let j = {};
	for (let e in b) {
		let t = b[e];
		(t.min != null || t.max != null) && (j[e] = {
			min: t.min,
			max: t.max
		}, t.min = t.max = null);
	}
	let M = e.tzDate || ((e) => new Date(un(e / _))), N = e.fmtDate || gr, P = _ == 1 ? zr(M) : Hr(M), ee = Wr(M, Ur(_ == 1 ? Rr : Vr, N)), F = Yr(M, qr(Jr, N)), te = [], I = r.legend = Qn({}, Qr, e.legend), L = r.cursor = Qn({}, si, { drag: { y: i == 2 } }, e.cursor), R = I.show, z = L.show, B = I.markers;
	I.idxs = te, B.width = wn(B.width), B.dash = wn(B.dash), B.stroke = wn(B.stroke), B.fill = wn(B.fill);
	let V, ne, re, ie = [], ae = [], oe, se = !1, ce = {};
	if (I.live) {
		let e = v[1] ? v[1].values : null;
		se = e != null, oe = se ? e(r, 1, 0) : { _: 0 };
		for (let e in oe) ce[e] = _t;
	}
	if (R) {
		if (V = Ot("table", Ke, l), re = Ot("tbody", null, V), I.mount(r, V), se) {
			ne = Ot("thead", null, V, re);
			let e = Ot("tr", null, ne);
			for (var le in Ot("th", null, e), oe) Ot("th", Ze, e).textContent = le;
		} else Tt(V, Je), I.live && Tt(V, qe);
	}
	let ue = { show: !0 }, de = { show: !1 };
	function fe(e, t) {
		if (t == 0 && (se || !I.live || i == 2)) return Hn;
		let n = [], a = Ot("tr", Ye, re, re.childNodes[t]);
		Tt(a, e.class), e.show || Tt(a, Ve);
		let o = Ot("th", null, a);
		if (B.show) {
			let e = kt(Xe, o);
			if (t > 0) {
				let n = B.width(r, t);
				n && (e.style.border = n + "px " + B.dash(r, t) + " " + B.stroke(r, t)), e.style.background = B.fill(r, t);
			}
		}
		let s = kt(Ze, o);
		for (var c in e.label instanceof HTMLElement ? s.appendChild(e.label) : s.textContent = e.label, t > 0 && (B.show || (s.style.color = e.width > 0 ? B.stroke(r, t) : B.fill(r, t)), me("click", o, (t) => {
			if (L._lock) return;
			ht(t);
			let n = v.indexOf(e);
			if ((t.ctrlKey || t.metaKey) != I.isolate) {
				let e = v.some((e, t) => t > 0 && t != n && e.show);
				v.forEach((t, r) => {
					r > 0 && di(r, e ? r == n ? ue : de : ue, !0, ya.setSeries);
				});
			} else di(n, { show: !e.show }, !0, ya.setSeries);
		}, !1), Ct && me(ut, o, (t) => {
			L._lock || (ht(t), di(v.indexOf(e), Di, !0, ya.setSeries));
		}, !1)), oe) {
			let e = Ot("td", Qe, a);
			e.textContent = "--", n.push(e);
		}
		return [a, n];
	}
	let pe = /* @__PURE__ */ new Map();
	function me(e, t, n, i = !0) {
		let a = pe.get(t) || {}, o = L.bind[e](r, t, n, i);
		o && (Rt(e, t, a[e] = o), pe.set(t, a));
	}
	function he(e, t, n) {
		let r = pe.get(t) || {};
		for (let n in r) (e == null || n == e) && (zt(n, t, r[n]), delete r[n]);
		e ?? pe.delete(t);
	}
	let ge = 0, H = 0, U = 0, W = 0, _e = 0, G = 0, ve = _e, K = G, q = U, ye = W, be = 0, xe = 0, Se = 0, Ce = 0;
	r.bbox = {};
	let we = !1, Te = !1, Ee = !1, De = !1, Oe = !1, ke = !1;
	function Ae(e, t, n) {
		(n || e != r.width || t != r.height) && je(e, t), yr(!1), Ee = !0, Te = !0, Er();
	}
	function je(e, t) {
		r.width = ge = U = e, r.height = H = W = t, _e = G = 0, pt(), mt();
		let n = r.bbox;
		be = n.left = Nn(_e * St, .5), xe = n.top = Nn(G * St, .5), Se = n.width = Nn(U * St, .5), Ce = n.height = Nn(W * St, .5);
	}
	function Me() {
		let e = !1, t = 0;
		for (; !e;) {
			t++;
			let n = hr(t), i = _r(t);
			e = t == 3 || n && i, e || (je(r.width, r.height), Te = !0);
		}
	}
	function at({ width: e, height: t }) {
		Ae(e, t);
	}
	r.setSize = at;
	function pt() {
		let e = !1, t = !1, n = !1, r = !1;
		y.forEach((i, a) => {
			if (i.show && i._show) {
				let { side: a, _size: o } = i, s = a % 2, c = o + (i.label == null ? 0 : i.labelSize);
				c > 0 && (s ? (U -= c, a == 3 ? (_e += c, r = !0) : n = !0) : (W -= c, a == 0 ? (G += c, e = !0) : t = !0));
			}
		}), Ut[0] = e, Ut[1] = n, Ut[2] = t, Ut[3] = r, U -= Qt[1] + Qt[3], _e += Qt[3], W -= Qt[2] + Qt[0], G += Qt[0];
	}
	function mt() {
		let e = _e + U, t = G + W, n = _e, r = G;
		function i(i, a) {
			switch (i) {
				case 1: return e += a, e - a;
				case 2: return t += a, t - a;
				case 3: return n -= a, n + a;
				case 0: return r -= a, r + a;
			}
		}
		y.forEach((e, t) => {
			if (e.show && e._show) {
				let t = e.side;
				e._pos = i(t, e._size), e.label != null && (e._lpos = i(t, e.labelSize));
			}
		});
	}
	if (L.dataIdx == null) {
		let e = L.hover, n = e.skip = new Set(e.skip ?? []);
		n.add(void 0);
		let r = e.prox = wn(e.prox), i = e.bias ??= 0;
		L.dataIdx = (e, a, o, s) => {
			if (a == 0) return o;
			let c = o, l = r(e, a, o, s) ?? bn, u = l >= 0 && l < bn, d = D.ori == 0 ? U : W, f = L.left, p = t[0], m = t[a];
			if (n.has(m[o])) {
				c = null;
				let e = null, t = null, r;
				if (i == 0 || i == -1) for (r = o; e == null && r-- > 0;) n.has(m[r]) || (e = r);
				if (i == 0 || i == 1) for (r = o; t == null && r++ < m.length;) n.has(m[r]) || (t = r);
				if (e != null || t != null) {
					if (u) {
						let n = e == null ? -Infinity : k(p[e], D, d, 0), r = t == null ? Infinity : k(p[t], D, d, 0), i = f - n, a = r - f;
						i <= a ? i <= l && (c = e) : a <= l && (c = t);
					} else c = t == null ? e : e == null ? t : o - e <= t - o ? e : t;
				}
			} else u && cn(f - k(p[o], D, d, 0)) > l && (c = null);
			return c;
		};
	}
	let ht = (e) => {
		L.event = e;
	};
	L.idxs = te, L._lock = !1;
	let vt = L.points;
	vt.show = wn(vt.show), vt.size = wn(vt.size), vt.stroke = wn(vt.stroke), vt.width = wn(vt.width), vt.fill = wn(vt.fill);
	let xt = r.focus = Qn({}, e.focus || { alpha: .3 }, L.focus), Ct = xt.prox >= 0, wt = Ct && vt.one, At = [], Mt = [], Pt = [];
	function It(e, t) {
		let n = vt.show(r, t);
		if (n instanceof HTMLElement) return Tt(n, Ge), Tt(n, e.class), jt(n, -10, -10, U, W), m.insertBefore(n, At[t]), n;
	}
	function Lt(e, t) {
		if (i == 1 || t > 0) {
			let t = i == 1 && b[e.scale].time, n = e.value;
			e.value = t ? Kn(n) ? Yr(M, qr(n, N)) : n || F : n || Ai, e.label = e.label || (t ? _i : gi);
		}
		if (wt || t > 0) {
			e.width = e.width == null ? 1 : e.width, e.paths = e.paths || Ca || On, e.fillTo = wn(e.fillTo || qi), e.pxAlign = +en(e.pxAlign, h), e.pxRound = Qi(e.pxAlign), e.stroke = wn(e.stroke || null), e.fill = wn(e.fill || null), e._stroke = e._fill = e._paths = e._focus = null;
			let t = Mi(pn(1, e.width), 1), n = e.points = Qn({}, {
				size: t,
				width: pn(1, t * .2),
				stroke: e.stroke,
				space: t * 2,
				paths: wa,
				_stroke: null,
				_fill: null
			}, e.points);
			n.show = wn(n.show), n.filter = wn(n.filter), n.fill = wn(n.fill), n.stroke = wn(n.stroke), n.paths = wn(n.paths), n.pxAlign = e.pxAlign;
		}
		if (R) {
			let n = fe(e, t);
			ie.splice(t, 0, n[0]), ae.splice(t, 0, n[1]), I.values.push(null);
		}
		if (z) {
			te.splice(t, 0, null);
			let n = null;
			wt ? t == 0 && (n = It(e, t)) : t > 0 && (n = It(e, t)), At.splice(t, 0, n), Mt.splice(t, 0, 0), Pt.splice(t, 0, 0);
		}
		_a("addSeries", t);
	}
	function Vt(e, t) {
		t ??= v.length, e = i == 1 ? Da(e, t, vi, Li) : Da(e, t, {}, Ii), v.splice(t, 0, e), Lt(v[t], t);
	}
	r.addSeries = Vt;
	function Ht(e) {
		if (v.splice(e, 1), R) {
			I.values.splice(e, 1), ae.splice(e, 1);
			let t = ie.splice(e, 1)[0];
			he(null, t.firstChild), t.remove();
		}
		z && (te.splice(e, 1), At.splice(e, 1)[0].remove(), Mt.splice(e, 1), Pt.splice(e, 1)), _a("delSeries", e);
	}
	r.delSeries = Ht;
	let Ut = [
		!1,
		!1,
		!1,
		!1
	];
	function Wt(e, t) {
		if (e._show = e.show, e.show) {
			let n = e.side % 2, i = b[e.scale];
			i ??= (e.scale = n ? v[1].scale : S, b[e.scale]);
			let a = i.time;
			e.size = wn(e.size), e.space = wn(e.space), e.rotate = wn(e.rotate), Un(e.incrs) && e.incrs.forEach((e) => {
				!Ln.has(e) && Ln.set(e, Rn(e));
			}), e.incrs = wn(e.incrs || (i.distr == 2 ? Cr : a ? _ == 1 ? Lr : Br : wr)), e.splits = wn(e.splits || (a && i.distr == 1 ? P : i.distr == 3 ? xi : i.distr == 4 ? Si : bi)), e.stroke = wn(e.stroke), e.grid.stroke = wn(e.grid.stroke), e.ticks.stroke = wn(e.ticks.stroke), e.border.stroke = wn(e.border.stroke);
			let o = e.values;
			e.values = Un(o) && !Un(o[0]) ? wn(o) : a ? Un(o) ? Wr(M, Ur(o, N)) : Kn(o) ? Gr(M, o) : o || ee : o || yi, e.filter = wn(e.filter || (i.distr >= 3 && i.log == 10 ? Oi : i.distr == 3 && i.log == 2 ? ki : Dn)), e.font = Ia(e.font), e.labelFont = Ia(e.labelFont), e._size = e.size(r, null, t, 0), e._space = e._rotate = e._incrs = e._found = e._splits = e._values = null, e._size > 0 && (Ut[t] = !0, e._el = kt(Be, f));
		}
	}
	function Gt(e, t, n, r) {
		let [i, a, o, s] = n, c = t % 2, l = 0;
		return c == 0 && (s || a) && (l = t == 0 && !i || t == 2 && !o ? un(hi.size / 3) : 0), c == 1 && (i || o) && (l = t == 1 && !a || t == 3 && !s ? un(ji.size / 2) : 0), l;
	}
	let Zt = r.padding = (e.padding || [
		Gt,
		Gt,
		Gt,
		Gt
	]).map((e) => wn(en(e, Gt))), Qt = r._padding = Zt.map((e, t) => e(r, t, Ut, 0)), nn, rn = null, an = null, on = i == 1 ? v[0].idxs : null, ln = null, hn = !1;
	function _n(e, n) {
		if (t = e ?? [], r.data = r._data = t, i == 2) {
			nn = 0;
			for (let e = 1; e < v.length; e++) nn += t[e][0].length;
		} else {
			t.length == 0 && (r.data = r._data = t = [[]]), ln = t[0], nn = ln.length;
			let e = t;
			if (O == 2) {
				e = t.slice();
				let n = e[0] = Array(nn);
				for (let e = 0; e < nn; e++) n[e] = e;
			}
			r._data = t = e;
		}
		if (yr(!0), _a("setData"), O == 2 && (Ee = !0), n !== !1) {
			let e = D;
			e.auto(r, hn) ? xn() : ui(S, e.min, e.max), De ||= L.left >= 0, ke = !0, Er();
		}
	}
	r.setData = _n;
	function xn() {
		hn = !0;
		let e, n;
		i == 1 && (nn > 0 ? (rn = on[0] = 0, an = on[1] = nn - 1, e = t[0][rn], n = t[0][an], O == 2 ? (e = rn, n = an) : e == n && (O == 3 ? [e, n] = qt(e, e, D.log, !1) : O == 4 ? [e, n] = Jt(e, e, D.log, !1) : D.time ? n = e + un(86400 / _) : [e, n] = $t(e, n, Yt, !0))) : (rn = on[0] = e = null, an = on[1] = n = null)), ui(S, e, n);
	}
	let Tn, En, jn, Mn, Pn, Fn, zn, Wn, Yn, Xn;
	function $n(e, t, n, r, i, a) {
		e ??= ot, n ??= Vn, r ??= "butt", i ??= ot, a ??= "round", e != Tn && (d.strokeStyle = Tn = e), i != En && (d.fillStyle = En = i), t != jn && (d.lineWidth = jn = t), a != Pn && (d.lineJoin = Pn = a), r != Fn && (d.lineCap = Fn = r), n != Mn && d.setLineDash(Mn = n);
	}
	function er(e, t, n, r) {
		t != En && (d.fillStyle = En = t), e != zn && (d.font = zn = e), n != Wn && (d.textAlign = Wn = n), r != Yn && (d.textBaseline = Yn = r);
	}
	function tr(e, t, n, i, a = 0) {
		if (i.length > 0 && e.auto(r, hn) && (t == null || t.min == null)) {
			let t = en(rn, 0), r = en(an, i.length - 1), o = n.min == null ? Kt(i, t, r, a, e.distr == 3) : [n.min, n.max];
			e.min = fn(e.min, n.min = o[0]), e.max = pn(e.max, n.max = o[1]);
		}
	}
	let nr = {
		min: null,
		max: null
	};
	function rr() {
		for (let e in b) {
			let t = b[e];
			j[e] == null && (t.min == null || j[S] != null && t.auto(r, hn)) && (j[e] = nr);
		}
		for (let e in b) {
			let t = b[e];
			j[e] == null && t.from != null && j[t.from] != null && (j[e] = nr);
		}
		j[S] != null && yr(!0);
		let e = {};
		for (let t in j) {
			let n = j[t];
			if (n != null) {
				let a = e[t] = Zn(b[t], Jn);
				if (n.min != null) Qn(a, n);
				else if (t != S || i == 2) {
					if (nn == 0 && a.from == null) {
						let e = a.range(r, null, null, t);
						a.min = e[0], a.max = e[1];
					} else a.min = bn, a.max = -Infinity;
				}
			}
		}
		if (nn > 0) {
			v.forEach((n, a) => {
				if (i == 1) {
					let i = n.scale, o = j[i];
					if (o == null) return;
					let s = e[i];
					if (a == 0) {
						let e = s.range(r, s.min, s.max, i);
						s.min = e[0], s.max = e[1], rn = Bt(s.min, t[0]), an = Bt(s.max, t[0]), an - rn > 1 && (t[0][rn] < s.min && rn++, t[0][an] > s.max && an--), n.min = ln[rn], n.max = ln[an];
					} else n.show && n.auto && tr(s, o, n, t[a], n.sorted);
					n.idxs[0] = rn, n.idxs[1] = an;
				} else if (a > 0 && n.show && n.auto) {
					let [r, i] = n.facets, o = r.scale, s = i.scale, [c, l] = t[a], u = e[o], d = e[s];
					u != null && tr(u, j[o], r, c, r.sorted), d != null && tr(d, j[s], i, l, i.sorted), n.min = i.min, n.max = i.max;
				}
			});
			for (let t in e) {
				let n = e[t], i = j[t];
				if (n.from == null && (i == null || i.min == null)) {
					let e = n.range(r, n.min == bn ? null : n.min, n.max == -Infinity ? null : n.max, t);
					n.min = e[0], n.max = e[1];
				}
			}
		}
		for (let t in e) {
			let n = e[t];
			if (n.from != null) {
				let i = e[n.from];
				if (i.min == null) n.min = n.max = null;
				else {
					let e = n.range(r, i.min, i.max, t);
					n.min = e[0], n.max = e[1];
				}
			}
		}
		let n = {}, a = !1;
		for (let t in e) {
			let r = e[t], i = b[t];
			if (i.min != r.min || i.max != r.max) {
				i.min = r.min, i.max = r.max;
				let e = i.distr;
				i._min = e == 3 ? gn(i.min) : e == 4 ? yn(i.min, i.asinh) : e == 100 ? i.fwd(i.min) : i.min, i._max = e == 3 ? gn(i.max) : e == 4 ? yn(i.max, i.asinh) : e == 100 ? i.fwd(i.max) : i.max, n[t] = a = !0;
			}
		}
		if (a) {
			v.forEach((e, t) => {
				i == 2 ? t > 0 && n.y && (e._paths = null) : n[e.scale] && (e._paths = null);
			});
			for (let e in n) Ee = !0, _a("setScale", e);
			z && L.left >= 0 && (De = ke = !0);
		}
		for (let e in j) j[e] = null;
	}
	function ar(e) {
		let t = Sn(rn - 1, 0, nn - 1), n = Sn(an + 1, 0, nn - 1);
		for (; e[t] == null && t > 0;) t--;
		for (; e[n] == null && n < nn - 1;) n++;
		return [t, n];
	}
	function or() {
		if (nn > 0) {
			let e = v.some((e) => e._focus) && Xn != xt.alpha;
			e && (d.globalAlpha = Xn = xt.alpha), v.forEach((e, n) => {
				if (n > 0 && e.show && (sr(n, !1), sr(n, !0), e._paths == null)) {
					let a = Xn;
					Xn != e.alpha && (d.globalAlpha = Xn = e.alpha);
					let o = i == 2 ? [0, t[n][0].length - 1] : ar(t[n]);
					e._paths = e.paths(r, n, o[0], o[1]), Xn != a && (d.globalAlpha = Xn = a);
				}
			}), v.forEach((e, t) => {
				if (t > 0 && e.show) {
					let n = Xn;
					Xn != e.alpha && (d.globalAlpha = Xn = e.alpha), e._paths != null && cr(t, !1);
					{
						let n = e._paths == null ? null : e._paths.gaps, i = e.points.show(r, t, rn, an, n), a = e.points.filter(r, t, i, n);
						(i || a) && (e.points._paths = e.points.paths(r, t, rn, an, a), cr(t, !0));
					}
					Xn != n && (d.globalAlpha = Xn = n), _a("drawSeries", t);
				}
			}), e && (d.globalAlpha = Xn = 1);
		}
	}
	function sr(e, t) {
		let n = t ? v[e].points : v[e];
		n._stroke = n.stroke(r, e), n._fill = n.fill(r, e);
	}
	function cr(e, t) {
		let n = t ? v[e].points : v[e], { stroke: r, fill: i, clip: a, flags: o, _stroke: s = n._stroke, _fill: c = n._fill, _width: l = n.width } = n._paths;
		l = In(l * St, 3);
		let u = null, f = l % 2 / 2;
		t && c == null && (c = l > 0 ? "#fff" : s);
		let p = n.pxAlign == 1 && f > 0;
		if (p && d.translate(f, f), !t) {
			let e = be - l / 2, t = xe - l / 2, n = Se + l, r = Ce + l;
			u = new Path2D(), u.rect(e, t, n, r);
		}
		t ? ur(s, l, n.dash, n.cap, c, r, i, o, a) : lr(e, s, l, n.dash, n.cap, c, r, i, o, u, a), p && d.translate(-f, -f);
	}
	function lr(e, n, i, a, o, s, c, l, u, d, f) {
		let p = !1;
		u != 0 && x.forEach((m, h) => {
			if (m.series[0] == e) {
				let e = v[m.series[1]], g = t[m.series[1]], _ = (e._paths || Bn).band;
				Un(_) && (_ = m.dir == 1 ? _[0] : _[1]);
				let y, b = null;
				e.show && _ && tn(g, rn, an) ? (b = m.fill(r, h) || s, y = e._paths.clip) : _ = null, ur(n, i, a, o, b, c, l, u, d, f, y, _), p = !0;
			}
		}), p || ur(n, i, a, o, s, c, l, u, d, f);
	}
	function ur(e, t, n, r, i, a, o, s, c, l, u, f) {
		$n(e, t, n, r, i), (c || l || f) && (d.save(), c && d.clip(c), l && d.clip(l)), f ? (s & 3) == 3 ? (d.clip(f), u && d.clip(u), fr(i, o), dr(e, a, t)) : s & Wi ? (fr(i, o), d.clip(f), dr(e, a, t)) : s & Ui && (d.save(), d.clip(f), u && d.clip(u), fr(i, o), d.restore(), dr(e, a, t)) : (fr(i, o), dr(e, a, t)), (c || l || f) && d.restore();
	}
	function dr(e, t, n) {
		n > 0 && (t instanceof Map ? t.forEach((e, t) => {
			d.strokeStyle = Tn = t, d.stroke(e);
		}) : t != null && e && d.stroke(t));
	}
	function fr(e, t) {
		t instanceof Map ? t.forEach((e, t) => {
			d.fillStyle = En = t, d.fill(e);
		}) : t != null && e && d.fill(t);
	}
	function pr(e, t, n, i) {
		let a = y[e], o;
		if (i <= 0) o = [0, 0];
		else {
			let s = a._space = a.space(r, e, t, n, i);
			o = Fa(t, n, a._incrs = a.incrs(r, e, t, n, i, s), i, s);
		}
		return a._found = o;
	}
	function mr(e, t, n, r, i, a, o, s, c, l) {
		let u = o % 2 / 2;
		h == 1 && d.translate(u, u), $n(s, o, c, l, s), d.beginPath();
		let f, p, m, g, _ = i + (r == 0 || r == 3 ? -a : a);
		n == 0 ? (p = i, g = _) : (f = i, m = _);
		for (let r = 0; r < e.length; r++) t[r] != null && (n == 0 ? f = m = e[r] : p = g = e[r], d.moveTo(f, p), d.lineTo(m, g));
		d.stroke(), h == 1 && d.translate(-u, -u);
	}
	function hr(e) {
		let t = !0;
		return y.forEach((n, i) => {
			if (!n.show) return;
			let a = b[n.scale];
			if (a.min == null) {
				n._show && (t = !1, n._show = !1, yr(!1));
				return;
			}
			n._show || (t = !1, n._show = !0, yr(!1));
			let o = n.side, s = o % 2, { min: c, max: l } = a, [u, d] = pr(i, c, l, s == 0 ? U : W);
			if (d == 0) return;
			let f = a.distr == 2, p = n._splits = n.splits(r, i, c, l, u, d, f), m = a.distr == 2 ? p.map((e) => ln[e]) : p, h = a.distr == 2 ? ln[p[1]] - ln[p[0]] : u, g = n._values = n.values(r, n.filter(r, m, i, d, h), i, d, h);
			n._rotate = o == 2 ? n.rotate(r, g, i, d) : 0;
			let _ = n._size;
			n._size = dn(n.size(r, g, i, e)), _ != null && n._size != _ && (t = !1);
		}), t;
	}
	function _r(e) {
		let t = !0;
		return Zt.forEach((n, i) => {
			let a = n(r, i, Ut, e);
			a != Qt[i] && (t = !1), Qt[i] = a;
		}), t;
	}
	function vr() {
		for (let e = 0; e < y.length; e++) {
			let t = y[e];
			if (!t.show || !t._show) continue;
			let n = t.side, i = n % 2, a, o, c = t.stroke(r, e), l = n == 0 || n == 3 ? -1 : 1, [u, f] = t._found;
			if (t.label != null) {
				let s = t.labelGap * l, p = un((t._lpos + s) * St);
				er(t.labelFont[0], c, "center", n == 2 ? tt : nt), d.save(), i == 1 ? (a = o = 0, d.translate(p, un(xe + Ce / 2)), d.rotate((n == 3 ? -sn : sn) / 2)) : (a = un(be + Se / 2), o = p);
				let m = Cn(t.label) ? t.label(r, e, u, f) : t.label;
				d.fillText(m, a, o), d.restore();
			}
			if (f == 0) continue;
			let p = b[t.scale], m = i == 0 ? Se : Ce, h = i == 0 ? be : xe, _ = t._splits, v = p.distr == 2 ? _.map((e) => ln[e]) : _, x = p.distr == 2 ? ln[_[1]] - ln[_[0]] : u, S = t.ticks, C = t.border, w = S.show ? S.size : 0, T = un(w * St), E = un((t.alignTo == 2 ? t._size - w - t.gap : t.gap) * St), D = t._rotate * -sn / 180, O = g(t._pos * St), k = O + (T + E) * l;
			o = i == 0 ? k : 0, a = i == 1 ? k : 0;
			let A = t.font[0];
			er(A, c, t.align == 1 ? rt : t.align == 2 ? it : D > 0 ? rt : D < 0 ? it : i == 0 ? "center" : n == 3 ? it : rt, D || i == 1 ? "middle" : n == 2 ? tt : nt);
			let j = t.font[1] * t.lineGap, M = _.map((e) => g(s(e, p, m, h))), N = t._values;
			for (let e = 0; e < N.length; e++) {
				let t = N[e];
				if (t != null) {
					i == 0 ? a = M[e] : o = M[e], t = "" + t;
					let n = t.indexOf("\n") == -1 ? [t] : t.split(/\n/gm);
					for (let e = 0; e < n.length; e++) {
						let t = n[e];
						D ? (d.save(), d.translate(a, o + e * j), d.rotate(D), d.fillText(t, 0, 0), d.restore()) : d.fillText(t, a, o + e * j);
					}
				}
			}
			S.show && mr(M, S.filter(r, v, e, f, x), i, n, O, T, In(S.width * St, 3), S.stroke(r, e), S.dash, S.cap);
			let P = t.grid;
			P.show && mr(M, P.filter(r, v, e, f, x), i, i == 0 ? 2 : 1, i == 0 ? xe : be, i == 0 ? Ce : Se, In(P.width * St, 3), P.stroke(r, e), P.dash, P.cap), C.show && mr([O], [1], +(i == 0), i == 0 ? 1 : 2, i == 1 ? xe : be, i == 1 ? Ce : Se, In(C.width * St, 3), C.stroke(r, e), C.dash, C.cap);
		}
		_a("drawAxes");
	}
	function yr(e) {
		v.forEach((t, n) => {
			n > 0 && (t._paths = null, e && (i == 1 ? (t.min = null, t.max = null) : t.facets.forEach((e) => {
				e.min = null, e.max = null;
			})));
		});
	}
	let br = !1, xr = !1, Sr = [];
	function Tr() {
		xr = !1;
		for (let e = 0; e < Sr.length; e++) _a(...Sr[e]);
		Sr.length = 0;
	}
	function Er() {
		br ||= (ir(Or), !0);
	}
	function Dr(e, t = !1) {
		br = !0, xr = t, e(r), Or(), t && Sr.length > 0 && queueMicrotask(Tr);
	}
	r.batch = Dr;
	function Or() {
		if (we &&= (rr(), !1), Ee &&= (Me(), !1), Te) {
			if (Dt(p, rt, _e), Dt(p, tt, G), Dt(p, $e, U), Dt(p, et, W), Dt(m, rt, _e), Dt(m, tt, G), Dt(m, $e, U), Dt(m, et, W), Dt(f, $e, ge), Dt(f, et, H), u.width = un(ge * St), u.height = un(H * St), y.forEach(({ _el: e, _show: t, _size: n, _pos: r, side: i }) => {
				if (e != null) {
					if (t) {
						let t = i === 3 || i === 0 ? n : 0, a = i % 2 == 1;
						Dt(e, a ? "left" : "top", r - t), Dt(e, a ? "width" : "height", n), Dt(e, a ? "top" : "left", a ? G : _e), Dt(e, a ? "height" : "width", a ? W : U), Et(e, Ve);
					} else Tt(e, Ve);
				}
			}), Tn = En = jn = Pn = Fn = zn = Wn = Yn = Mn = null, Xn = 1, ta(!0), _e != ve || G != K || U != q || W != ye) {
				yr(!1);
				let e = U / q, t = W / ye;
				if (z && !De && L.left >= 0) {
					L.left *= e, L.top *= t, Mr && jt(Mr, un(L.left), 0, U, W), Nr && jt(Nr, 0, un(L.top), U, W);
					for (let n = 0; n < At.length; n++) {
						let r = At[n];
						r != null && (Mt[n] *= e, Pt[n] *= t, jt(r, dn(Mt[n]), dn(Pt[n]), U, W));
					}
				}
				if (ai.show && !Oe && ai.left >= 0 && ai.width > 0) {
					ai.left *= e, ai.width *= e, ai.top *= t, ai.height *= t;
					for (let e in ia) Dt(oi, e, ai[e]);
				}
				ve = _e, K = G, q = U, ye = W;
			}
			_a("setSize"), Te = !1;
		}
		ge > 0 && H > 0 && (d.clearRect(0, 0, u.width, u.height), _a("drawClear"), w.forEach((e) => e()), _a("draw")), ai.show && Oe && (ci(ai), Oe = !1), z && De && ($i(null, !0, !1), De = !1), I.show && I.live && ke && (Xi(), ke = !1), c || (c = !0, r.status = 1, _a("ready")), hn = !1, br = !1;
	}
	r.redraw = (e, t) => {
		Ee = t || !1, e === !1 ? Er() : ui(S, D.min, D.max);
	};
	function kr(e, n) {
		let i = b[e];
		if (i.from == null) {
			if (nn == 0) {
				let t = i.range(r, n.min, n.max, e);
				n.min = t[0], n.max = t[1];
			}
			if (n.min > n.max) {
				let e = n.min;
				n.min = n.max, n.max = e;
			}
			if (nn > 1 && n.min != null && n.max != null && n.max - n.min < 1e-16) return;
			e == S && i.distr == 2 && nn > 0 && (n.min = Bt(n.min, t[0]), n.max = Bt(n.max, t[0]), n.min == n.max && n.max++), j[e] = n, we = !0, Er();
		}
	}
	r.setScale = kr;
	let Ar, jr, Mr, Nr, Pr, Fr, Ir, Kr, Xr, Zr, $r, ei, ti = !1, ni = L.drag, ri = ni.x, ii = ni.y;
	z && (L.x && (Ar = kt(Ue, m)), L.y && (jr = kt(We, m)), D.ori == 0 ? (Mr = Ar, Nr = jr) : (Mr = jr, Nr = Ar), $r = L.left, ei = L.top);
	let ai = r.select = Qn({
		show: !0,
		over: !0,
		left: 0,
		width: 0,
		top: 0,
		height: 0
	}, e.select), oi = ai.show ? kt(He, ai.over ? m : p) : null;
	function ci(e, t) {
		if (ai.show) {
			for (let t in e) ai[t] = e[t], t in ia && Dt(oi, t, e[t]);
			t !== !1 && _a("setSelect");
		}
	}
	r.setSelect = ci;
	function li(e) {
		if (v[e].show) R && Et(ie[e], Ve);
		else if (R && Tt(ie[e], Ve), z) {
			let t = wt ? At[0] : At[e];
			t != null && jt(t, -10, -10, U, W);
		}
	}
	function ui(e, t, n) {
		kr(e, {
			min: t,
			max: n
		});
	}
	function di(e, t, n, a) {
		t.focus != null && Ni(e), t.show != null && v.forEach((n, r) => {
			r > 0 && (e == r || e == null) && (n.show = t.show, li(r), i == 2 ? (ui(n.facets[0].scale, null, null), ui(n.facets[1].scale, null, null)) : ui(n.scale, null, null), Er());
		}), n !== !1 && _a("setSeries", e, t), a && Ra("setSeries", r, e, t);
	}
	r.setSeries = di;
	function fi(e, t) {
		Qn(x[e], t);
	}
	function pi(e, t) {
		e.fill = wn(e.fill || null), e.dir = en(e.dir, -1), t ??= x.length, x.splice(t, 0, e);
	}
	function mi(e) {
		e == null ? x.length = 0 : x.splice(e, 1);
	}
	r.addBand = pi, r.setBand = fi, r.delBand = mi;
	function Ci(e, t) {
		v[e].alpha = t, z && At[e] != null && (At[e].style.opacity = t), R && ie[e] && (ie[e].style.opacity = t);
	}
	let wi, Ti, Ei, Di = { focus: !0 };
	function Ni(e) {
		if (e != Ei) {
			let t = e == null, n = xt.alpha != 1;
			v.forEach((r, a) => {
				if (i == 1 || a > 0) {
					let i = t || a == 0 || a == e;
					r._focus = t ? null : i, n && Ci(a, i ? 1 : xt.alpha);
				}
			}), Ei = e, n && Er();
		}
	}
	R && Ct && me(dt, V, (e) => {
		L._lock || (ht(e), Ei != null && di(null, Di, !0, ya.setSeries));
	});
	function Pi(e, t, n) {
		let r = b[t];
		n && (e = e / St - (r.ori == 1 ? G : _e));
		let i = U;
		r.ori == 1 && (i = W, e = i - e), r.dir == -1 && (e = i - e);
		let a = r._min, o = r._max, s = e / i, c = a + (o - a) * s, l = r.distr;
		return l == 3 ? mn(10, c) : l == 4 ? vn(c, r.asinh) : l == 100 ? r.bwd(c) : c;
	}
	function Fi(e, n) {
		return Bt(Pi(e, S, n), t[0], rn, an);
	}
	r.valToIdx = (e) => Bt(e, t[0]), r.posToIdx = Fi, r.posToVal = Pi, r.valToPos = (e, t, n) => b[t].ori == 0 ? a(e, b[t], n ? Se : U, n ? be : 0) : o(e, b[t], n ? Ce : W, n ? xe : 0), r.setCursor = (e, t, n) => {
		$r = e.left, ei = e.top, $i(null, t, n);
	};
	function Vi(e, t) {
		Dt(oi, rt, ai.left = e), Dt(oi, $e, ai.width = t);
	}
	function Gi(e, t) {
		Dt(oi, tt, ai.top = e), Dt(oi, et, ai.height = t);
	}
	let Ki = D.ori == 0 ? Vi : Gi, Ji = D.ori == 1 ? Vi : Gi;
	function Yi() {
		if (R && I.live) for (let e = +(i == 2); e < v.length; e++) {
			if (e == 0 && se) continue;
			let t = I.values[e], n = 0;
			for (let r in t) ae[e][n++].firstChild.nodeValue = t[r];
		}
	}
	function Xi(e, t) {
		if (e != null && (e.idxs ? e.idxs.forEach((e, t) => {
			te[t] = e;
		}) : Gn(e.idx) || te.fill(e.idx), I.idx = te[0]), R && I.live) {
			for (let e = 0; e < v.length; e++) (e > 0 || i == 1 && !se) && Zi(e, te[e]);
			Yi();
		}
		ke = !1, t !== !1 && _a("setLegend");
	}
	r.setLegend = Xi;
	function Zi(e, n) {
		let i = v[e], a = e == 0 && O == 2 ? ln : t[e], o;
		se ? o = i.values(r, e, n) ?? ce : (o = i.value(r, n == null ? null : a[n], e, n), o = o == null ? ce : { _: o }), I.values[e] = o;
	}
	function $i(e, n, a) {
		Xr = $r, Zr = ei, [$r, ei] = L.move(r, $r, ei), L.left = $r, L.top = ei, z && (Mr && jt(Mr, un($r), 0, U, W), Nr && jt(Nr, 0, un(ei), U, W));
		let o, s = rn > an;
		wi = bn, Ti = null;
		let c = D.ori == 0 ? U : W, l = D.ori == 1 ? U : W;
		if ($r < 0 || nn == 0 || s) {
			o = L.idx = null;
			for (let e = 0; e < v.length; e++) {
				let t = At[e];
				t != null && jt(t, -10, -10, U, W);
			}
			Ct && di(null, Di, !0, e == null && ya.setSeries), I.live && (te.fill(o), ke = !0);
		} else {
			let e, n, a;
			i == 1 && (e = D.ori == 0 ? $r : ei, n = Pi(e, S), o = L.idx = Bt(n, t[0], rn, an), a = k(t[0][o], D, c, 0));
			let s = -10, u = -10, d = 0, f = 0, p = !0, m = "", h = "";
			for (let e = +(i == 2); e < v.length; e++) {
				let g = v[e], _ = te[e], y = _ == null ? null : i == 1 ? t[e][_] : t[e][1][_], x = L.dataIdx(r, e, o, n), S = x == null ? null : i == 1 ? t[e][x] : t[e][1][x];
				if (ke = ke || S != y || x != _, te[e] = x, e > 0 && g.show) {
					let n = x == null ? -10 : x == o ? a : k(i == 1 ? t[0][x] : t[e][0][x], D, c, 0), _ = S == null ? -10 : A(S, i == 1 ? b[g.scale] : b[g.facets[1].scale], l, 0);
					if (Ct && S != null) {
						let t = D.ori == 1 ? $r : ei, n = cn(xt.dist(r, e, x, _, t));
						if (n < wi) {
							let r = xt.bias;
							if (r != 0) {
								let i = Pi(t, g.scale), a = S >= 0 ? 1 : -1, o = i >= 0 ? 1 : -1;
								o == a && (o == 1 ? r == 1 ? S >= i : S <= i : r == 1 ? S <= i : S >= i) && (wi = n, Ti = e);
							} else wi = n, Ti = e;
						}
					}
					if (ke || wt) {
						let t, i;
						D.ori == 0 ? (t = n, i = _) : (t = _, i = n);
						let a, o, c, l, g, v, y = !0, b = vt.bbox;
						if (b != null) {
							y = !1;
							let t = b(r, e);
							c = t.left, l = t.top, a = t.width, o = t.height;
						} else c = t, l = i, a = o = vt.size(r, e);
						if (v = vt.fill(r, e), g = vt.stroke(r, e), wt) e == Ti && wi <= xt.prox && (s = c, u = l, d = a, f = o, p = y, m = v, h = g);
						else {
							let t = At[e];
							t != null && (Mt[e] = c, Pt[e] = l, Ft(t, a, o, y), Nt(t, v, g), jt(t, dn(c), dn(l), U, W));
						}
					}
				}
			}
			if (wt) {
				let e = xt.prox;
				if (ke || (Ei == null ? wi <= e : wi > e || Ti != Ei)) {
					let e = At[0];
					e != null && (Mt[0] = s, Pt[0] = u, Ft(e, d, f, p), Nt(e, m, h), jt(e, dn(s), dn(u), U, W));
				}
			}
		}
		if (ai.show && ti) {
			if (e != null) {
				let [t, n] = ya.scales, [r, i] = ya.match, [a, o] = e.cursor.sync.scales, s = e.cursor.drag;
				if (ri = s._x, ii = s._y, ri || ii) {
					let { left: s, top: u, width: d, height: f } = e.select, p = e.scales[a].ori, m = e.posToVal, h, g, _, v, y, x = t != null && r(t, a), S = n != null && i(n, o);
					x && ri ? (p == 0 ? (h = s, g = d) : (h = u, g = f), _ = b[t], v = k(m(h, a), _, c, 0), y = k(m(h + g, a), _, c, 0), Ki(fn(v, y), cn(y - v))) : Ki(0, c), S && ii ? (p == 1 ? (h = s, g = d) : (h = u, g = f), _ = b[n], v = A(m(h, o), _, l, 0), y = A(m(h + g, o), _, l, 0), Ji(fn(v, y), cn(y - v))) : Ji(0, l);
				} else aa();
			} else {
				let e = cn(Xr - Pr), t = cn(Zr - Fr);
				if (D.ori == 1) {
					let n = e;
					e = t, t = n;
				}
				ri = ni.x && e >= ni.dist, ii = ni.y && t >= ni.dist;
				let n = ni.uni;
				n == null ? ni.x && ni.y && (ri || ii) && (ri = ii = !0) : ri && ii && (ri = e >= n, ii = t >= n, !ri && !ii && (t > e ? ii = !0 : ri = !0));
				let r, i;
				ri && (D.ori == 0 ? (r = Ir, i = $r) : (r = Kr, i = ei), Ki(fn(r, i), cn(i - r)), ii || Ji(0, l)), ii && (D.ori == 1 ? (r = Ir, i = $r) : (r = Kr, i = ei), Ji(fn(r, i), cn(i - r)), ri || Ki(0, c)), !ri && !ii && (Ki(0, 0), Ji(0, 0));
			}
		}
		if (ni._x = ri, ni._y = ii, e == null) {
			if (a) {
				if (ba != null) {
					let [e, t] = ya.scales;
					ya.values[0] = e == null ? null : Pi(D.ori == 0 ? $r : ei, e), ya.values[1] = t == null ? null : Pi(D.ori == 1 ? $r : ei, t);
				}
				Ra(st, r, $r, ei, U, W, o);
			}
			if (Ct) {
				let e = a && ya.setSeries, t = xt.prox;
				Ei == null ? wi <= t && di(Ti, Di, !0, e) : wi > t ? di(null, Di, !0, e) : Ti != Ei && di(Ti, Di, !0, e);
			}
		}
		ke && (I.idx = o, Xi()), n !== !1 && _a("setCursor");
	}
	let ea = null;
	Object.defineProperty(r, "rect", { get() {
		return ea ?? ta(!1), ea;
	} });
	function ta(e = !1) {
		e ? ea = null : (ea = m.getBoundingClientRect(), _a("syncRect", ea));
	}
	function na(e, t, n, r, i, a, o) {
		L._lock || ti && e != null && e.movementX == 0 && e.movementY == 0 || (ra(e, t, n, r, i, a, o, !1, e != null), e == null ? $i(t, !0, !1) : $i(null, !0, !0));
	}
	function ra(e, t, n, i, a, o, c, l, u) {
		if (ea ?? ta(!1), ht(e), e != null) n = e.clientX - ea.left, i = e.clientY - ea.top;
		else {
			if (n < 0 || i < 0) {
				$r = -10, ei = -10;
				return;
			}
			let [e, r] = ya.scales, c = t.cursor.sync, [l, u] = c.values, [d, f] = c.scales, [p, m] = ya.match, h = t.axes[0].side % 2 == 1, g = D.ori == 0 ? U : W, _ = D.ori == 1 ? U : W, v = h ? o : a, y = h ? a : o, x = h ? i : n, S = h ? n : i;
			if (n = d == null ? x / v * g : p(e, d) ? s(l, b[e], g, 0) : -10, i = f == null ? S / y * _ : m(r, f) ? s(u, b[r], _, 0) : -10, D.ori == 1) {
				let e = n;
				n = i, i = e;
			}
		}
		u && (t == null || t.cursor.event.type == st) && ((n <= 1 || n >= U - 1) && (n = Nn(n, U)), (i <= 1 || i >= W - 1) && (i = Nn(i, W))), l ? (Pr = n, Fr = i, [Ir, Kr] = L.move(r, n, i)) : ($r = n, ei = i);
	}
	let ia = {
		width: 0,
		height: 0,
		left: 0,
		top: 0
	};
	function aa() {
		ci(ia, !1);
	}
	let oa, sa, ca, la;
	function ua(e, t, n, i, a, o, s) {
		ti = !0, ri = ii = ni._x = ni._y = !1, ra(e, t, n, i, a, o, s, !0, !1), e != null && (me(lt, yt, da, !1), Ra(ct, r, Ir, Kr, U, W, null));
		let { left: c, top: l, width: u, height: d } = ai;
		oa = c, sa = l, ca = u, la = d;
	}
	function da(e, t, n, i, a, o, s) {
		ti = ni._x = ni._y = !1, ra(e, t, n, i, a, o, s, !1, !0);
		let { left: c, top: l, width: u, height: d } = ai, f = u > 0 || d > 0, p = oa != c || sa != l || ca != u || la != d;
		if (f && p && ci(ai), ni.setScale && f && p) {
			let e = c, t = u, n = l, r = d;
			if (D.ori == 1 && (e = l, t = d, n = c, r = u), ri && ui(S, Pi(e, S), Pi(e + t, S)), ii) for (let e in b) {
				let t = b[e];
				e != S && t.from == null && t.min != bn && ui(e, Pi(n + r, e), Pi(n, e));
			}
			aa();
		} else L.lock && (L._lock = !L._lock, $i(t, !0, e != null));
		e != null && (he(lt, yt), Ra(lt, r, $r, ei, U, W, null));
	}
	function fa(e, t, n, r, i, a, o) {
		if (L._lock) return;
		ht(e);
		let s = ti;
		if (ti) {
			let e = !0, t = !0, n, r;
			D.ori == 0 ? (n = ri, r = ii) : (n = ii, r = ri), n && r && (e = $r <= 10 || $r >= U - 10, t = ei <= 10 || ei >= W - 10), n && e && ($r = $r < Ir ? 0 : U), r && t && (ei = ei < Kr ? 0 : W), $i(null, !0, !0), ti = !1;
		}
		$r = -10, ei = -10, te.fill(null), $i(null, !0, !0), s && (ti = s);
	}
	function pa(e, t, n, i, a, o, s) {
		L._lock || (ht(e), xn(), aa(), e != null && Ra(ft, r, $r, ei, U, W, null));
	}
	function ma() {
		y.forEach(La), Ae(r.width, r.height, !0);
	}
	Rt(gt, bt, ma);
	let ha = {};
	ha.mousedown = ua, ha.mousemove = na, ha.mouseup = da, ha.dblclick = pa, ha.setSeries = (e, t, n, i) => {
		let a = ya.match[2];
		n = a(r, t, n), n != -1 && di(n, i, !0, !1);
	}, z && (me(ct, m, ua), me(st, m, na), me(ut, m, (e) => {
		ht(e), ta(!1);
	}), me(dt, m, fa), me(ft, m, pa), xa.add(r), r.syncRect = ta);
	let ga = r.hooks = e.hooks || {};
	function _a(e, t, n) {
		xr ? Sr.push([
			e,
			t,
			n
		]) : e in ga && ga[e].forEach((e) => {
			e.call(null, r, t, n);
		});
	}
	(e.plugins || []).forEach((e) => {
		for (let t in e.hooks) ga[t] = (ga[t] || []).concat(e.hooks[t]);
	});
	let va = (e, t, n) => n, ya = Qn({
		key: null,
		setSeries: !1,
		filters: {
			pub: kn,
			sub: kn
		},
		scales: [S, v[1] ? v[1].scale : null],
		match: [
			An,
			An,
			va
		],
		values: [null, null]
	}, L.sync);
	ya.match.length == 2 && ya.match.push(va), L.sync = ya;
	let ba = ya.key, Sa = Hi(ba);
	function Ra(e, t, n, r, i, a, o) {
		ya.filters.pub(e, t, n, r, i, a, o) && Sa.pub(e, t, n, r, i, a, o);
	}
	Sa.sub(r);
	function za(e, t, n, r, i, a, o) {
		ya.filters.sub(e, t, n, r, i, a, o) && ha[e](null, t, n, r, i, a, o);
	}
	r.pub = za;
	function Ba() {
		Sa.unsub(r), xa.delete(r), pe.clear(), zt(gt, bt, ma), l.remove(), V?.remove(), _a("destroy");
	}
	r.destroy = Ba;
	function Va() {
		_a("init", e, t), _n(t || e.data, !1), j[S] ? kr(S, j[S]) : xn(), Oe = ai.show && (ai.width > 0 || ai.height > 0), De = ke = !0, Ae(e.width, e.height);
	}
	return v.forEach(Lt), y.forEach(Wt), n ? n instanceof HTMLElement ? (n.appendChild(l), Va()) : n(r, Va) : Va(), r;
}
Ra.assign = Qn, Ra.fmtNum = an, Ra.rangeNum = $t, Ra.rangeLog = qt, Ra.rangeAsinh = Jt, Ra.orient = Gi, Ra.pxRatio = St, Ra.join = rr, Ra.fmtDate = gr, Ra.tzDate = vr, Ra.sync = Hi;
{
	Ra.addGap = Xi, Ra.clipGaps = Yi;
	let e = Ra.paths = { points: ua };
	e.linear = ma, e.stepped = ha, e.bars = _a, e.spline = ya;
}
// node_modules/uplot/dist/uPlot.min.css?inline
var za = ".uplot,.uplot *,.uplot :before,.uplot :after{box-sizing:border-box}.uplot{width:min-content;font-family:system-ui,-apple-system,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;line-height:1.5}.u-title{text-align:center;font-size:18px;font-weight:700}.u-wrap{-webkit-user-select:none;user-select:none;position:relative}.u-over,.u-under{position:absolute}.u-under{overflow:hidden}.uplot canvas{width:100%;height:100%;display:block;position:relative}.u-axis{position:absolute}.u-legend{text-align:center;margin:auto;font-size:14px}.u-inline{display:block}.u-inline *{display:inline-block}.u-inline tr{margin-right:16px}.u-legend th{font-weight:600}.u-legend th>*{vertical-align:middle;display:inline-block}.u-legend .u-marker{width:1em;height:1em;margin-right:4px;background-clip:padding-box!important}.u-inline.u-live th:after{content:\":\";vertical-align:middle}.u-inline:not(.u-live) .u-value{display:none}.u-series>*{padding:4px}.u-series th{cursor:pointer}.u-legend .u-off>*{opacity:.3}.u-select{pointer-events:none;background:#00000012;position:absolute}.u-cursor-x,.u-cursor-y{pointer-events:none;will-change:transform;position:absolute;top:0;left:0}.u-hz .u-cursor-x,.u-vt .u-cursor-y{border-right:1px dashed #607d8b;height:100%}.u-hz .u-cursor-y,.u-vt .u-cursor-x{border-bottom:1px dashed #607d8b;width:100%}.u-cursor-pt{pointer-events:none;will-change:transform;border:0 solid;border-radius:50%;position:absolute;top:0;left:0;background-clip:padding-box!important}.u-axis.u-off,.u-select.u-off,.u-cursor-x.u-off,.u-cursor-y.u-off,.u-cursor-pt.u-off{display:none}", Ba = {
	background: "#f4f6f8",
	gridMajor: "#9aa5b1",
	gridMinor: "#d3d9df",
	body: "#3b4a5a",
	arm: "#56687a",
	armFront: "#d9480f",
	rotor: "#1c7ed6",
	rod: "#495057",
	mass: "#e8590c",
	trail: "#e8590c",
	hemiSky: "#ffffff",
	hemiGround: "#b8c0c8",
	hemiIntensity: 1.1,
	dirIntensity: 1.6
}, Va = {
	background: "#14181d",
	gridMajor: "#56616d",
	gridMinor: "#2a323a",
	body: "#aab7c4",
	arm: "#8795a3",
	armFront: "#ff922b",
	rotor: "#74c0fc",
	rod: "#ced4da",
	mass: "#ffa94d",
	trail: "#ffa94d",
	hemiSky: "#c5d4e8",
	hemiGround: "#20262d",
	hemiIntensity: .9,
	dirIntensity: 1.4
}, Ha = {
	black: "#000000",
	orange: "#E69F00",
	skyBlue: "#56B4E9",
	bluishGreen: "#009E73",
	yellow: "#F0E442",
	blue: "#0072B2",
	vermillion: "#D55E00",
	reddishPurple: "#CC79A7"
}, Ua = {
	solid: [],
	dashed: [8, 4],
	dotted: [2, 3],
	dashDot: [
		10,
		3,
		2,
		3
	],
	sparse: [3, 6]
}, Wa = Ha, Ga = {
	name: "light",
	css: {
		bg: "#f4f6f8",
		surface: "#ffffff",
		fg: "#1a1d21",
		muted: "#4a5561",
		border: "#c3cad2",
		accent: "#0b5cad",
		accentFg: "#ffffff",
		danger: "#b3290a",
		dangerBg: "#fdece7",
		focus: "#0b5cad"
	},
	scene: Ba,
	chart: {
		axis: "#3d4650",
		grid: "rgba(60, 70, 80, 0.16)",
		primary: Wa.black,
		pitch: Wa.vermillion,
		pitchApplied: Wa.orange,
		roll: Wa.blue,
		rollApplied: Wa.skyBlue,
		threshold: Wa.reddishPurple,
		motors: [
			Wa.black,
			Wa.vermillion,
			Wa.blue,
			Wa.bluishGreen
		],
		trip: "#b3290a",
		detectFill: "rgba(213, 94, 0, 0.08)",
		transition: "#3d4650",
		bands: {
			nominal: {
				fill: "rgba(120, 130, 140, 0.10)",
				stroke: "#6b7782"
			},
			gainShift: {
				fill: "rgba(230, 159, 0, 0.24)",
				stroke: "#b07800"
			},
			engaged: {
				fill: "rgba(0, 114, 178, 0.16)",
				stroke: "#0072b2"
			}
		}
	}
}, Ka = {
	name: "dark",
	css: {
		bg: "#14181d",
		surface: "#1c2229",
		fg: "#e6e9ec",
		muted: "#aab4bf",
		border: "#3a444e",
		accent: "#74c0fc",
		accentFg: "#0b1117",
		danger: "#ff8f6b",
		dangerBg: "#3a1f17",
		focus: "#74c0fc"
	},
	scene: Va,
	chart: {
		axis: "#c4ccd4",
		grid: "rgba(200, 210, 220, 0.20)",
		primary: "#d9d9d9",
		pitch: Wa.orange,
		pitchApplied: Wa.yellow,
		roll: Wa.skyBlue,
		rollApplied: "#4fd1a5",
		threshold: Wa.reddishPurple,
		motors: [
			"#d9d9d9",
			Wa.orange,
			Wa.skyBlue,
			"#4fd1a5"
		],
		trip: "#ff8f6b",
		detectFill: "rgba(255, 143, 107, 0.10)",
		transition: "#e0e5ea",
		bands: {
			nominal: {
				fill: "rgba(170, 180, 190, 0.10)",
				stroke: "#9aa5b1"
			},
			gainShift: {
				fill: "rgba(230, 159, 0, 0.26)",
				stroke: "#e69f00"
			},
			engaged: {
				fill: "rgba(86, 180, 233, 0.22)",
				stroke: "#56b4e9"
			}
		}
	}
};
function qa(e) {
	return e ? Ka : Ga;
}
var Ja = "data-theme", Ya = "theme";
function Xa(e) {
	return e === "light" || e === "dark" ? e : null;
}
var Za = class {
	host;
	doc;
	container;
	opts;
	mql;
	observers = [];
	onMql = () => this.refresh();
	disposed = !1;
	theme;
	constructor(e, t) {
		this.host = e, this.opts = t, this.doc = t.doc ?? e.ownerDocument, this.container = t.container ?? e;
		let n = this.doc.defaultView, r = t.matchMedia ?? (n?.matchMedia ? n.matchMedia.bind(n) : void 0);
		this.mql = r ? r("(prefers-color-scheme: dark)") : null, this.mql?.addEventListener("change", this.onMql);
		let i = t.createObserver ?? (n?.MutationObserver ? (e) => new n.MutationObserver(e) : void 0);
		if (i) {
			let e = i(() => this.refresh());
			e.observe(this.doc.documentElement, {
				attributes: !0,
				attributeFilter: [Ja]
			});
			let t = i(() => this.refresh());
			t.observe(this.host, {
				attributes: !0,
				attributeFilter: [Ya]
			}), this.observers.push(e, t);
		}
		this.theme = this.resolve(), this.container.setAttribute("data-theme", this.theme);
	}
	resolve() {
		return Xa(this.host.getAttribute(Ya)) || Xa(this.doc.documentElement.getAttribute(Ja)) || (this.mql?.matches ? "dark" : "light");
	}
	current() {
		return this.theme;
	}
	palette() {
		return qa(this.theme === "dark");
	}
	refresh() {
		if (this.disposed) return;
		let e = this.resolve();
		e !== this.theme && (this.theme = e, this.container.setAttribute("data-theme", e), this.opts.onChange(this.palette()));
	}
	dispose() {
		if (!this.disposed) {
			this.disposed = !0;
			for (let e of this.observers) e.disconnect();
			this.observers.length = 0, this.mql?.removeEventListener("change", this.onMql);
		}
	}
}, Qa = 180 / Math.PI, $a = 1e3 / 30;
function eo(e, t) {
	switch (t) {
		case "primary": return e.primary;
		case "pitch": return e.pitch;
		case "pitchApplied": return e.pitchApplied;
		case "roll": return e.roll;
		case "rollApplied": return e.rollApplied;
		case "threshold": return e.threshold;
		case "motor0": return e.motors[0];
		case "motor1": return e.motors[1];
		case "motor2": return e.motors[2];
		case "motor3": return e.motors[3];
	}
}
var to = [
	{
		id: "theta",
		title: "Pendulum angle θ",
		description: "Angle of the hanging mass from straight down, in radians (right axis: degrees).",
		yLabel: "θ [rad]",
		series: [{
			label: "θ",
			role: "primary",
			dash: Ua.solid,
			channel: "theta"
		}]
	},
	{
		id: "mass",
		title: "Mass position relative to the quad",
		description: "Mass offset from the quad along north (x) and east (y), in metres.",
		yLabel: "position [m]",
		series: [{
			label: "x (north)",
			role: "pitch",
			dash: Ua.solid,
			channel: "massX"
		}, {
			label: "y (east)",
			role: "roll",
			dash: Ua.dashed,
			channel: "massY"
		}]
	},
	{
		id: "attitude",
		title: "Quad roll and pitch",
		description: "Quadrotor roll and pitch angles in degrees.",
		yLabel: "angle [deg]",
		series: [{
			label: "pitch",
			role: "pitch",
			dash: Ua.solid,
			channel: "pitch",
			toDeg: !0
		}, {
			label: "roll",
			role: "roll",
			dash: Ua.dashed,
			channel: "roll",
			toDeg: !0
		}]
	},
	{
		id: "kT",
		title: "Adaptive forward-loop gain K_T",
		description: "AAC gain state per axis (solid and dashed). In Monitor mode the dotted lines show the gain that would be applied.",
		yLabel: "K_T",
		series: [
			{
				label: "pitch K_T",
				role: "pitch",
				dash: Ua.solid,
				channel: "kTPitch"
			},
			{
				label: "roll K_T",
				role: "roll",
				dash: Ua.dashed,
				channel: "kTRoll"
			},
			{
				label: "pitch applied",
				role: "pitchApplied",
				dash: Ua.dotted,
				channel: "kTAppliedPitch",
				monitorOnly: !0
			},
			{
				label: "roll applied",
				role: "rollApplied",
				dash: Ua.dashDot,
				channel: "kTAppliedRoll",
				monitorOnly: !0
			}
		]
	},
	{
		id: "ySD",
		title: "Spectral damper output y_SD",
		description: "Detector signal per axis against the detection threshold.",
		yLabel: "y_SD",
		series: [
			{
				label: "pitch y_SD",
				role: "pitch",
				dash: Ua.solid,
				channel: "ySDPitch"
			},
			{
				label: "roll y_SD",
				role: "roll",
				dash: Ua.dashed,
				channel: "ySDRoll"
			},
			{
				label: "threshold",
				role: "threshold",
				dash: Ua.sparse,
				channel: "threshold"
			}
		]
	},
	{
		id: "motors",
		title: "Motor commands",
		description: "Normalized commands of the four motors, from 0 to 1.",
		yLabel: "command [0..1]",
		series: [
			{
				label: "motor 1",
				role: "motor0",
				dash: Ua.solid,
				channel: "motorCmd0"
			},
			{
				label: "motor 2",
				role: "motor1",
				dash: Ua.dashed,
				channel: "motorCmd1"
			},
			{
				label: "motor 3",
				role: "motor2",
				dash: Ua.dotted,
				channel: "motorCmd2"
			},
			{
				label: "motor 4",
				role: "motor3",
				dash: Ua.dashDot,
				channel: "motorCmd3"
			}
		]
	}
];
function no(e) {
	return { hooks: { draw: (t) => {
		let n = e.trips();
		if (n.length === 0) return;
		let r = e.palette(), i = t.ctx, { left: a, top: o, width: s, height: c } = t.bbox, l = typeof devicePixelRatio == "number" && devicePixelRatio > 0 ? devicePixelRatio : 1;
		i.save(), i.beginPath(), i.rect(a, o, s, c), i.clip();
		let u = Infinity;
		for (let e of n) e.t < u && (u = e.t);
		let d = Math.max(a, t.valToPos(u, "x", !0));
		i.fillStyle = r.detectFill, i.fillRect(d, o, a + s - d, c), i.strokeStyle = r.trip, i.fillStyle = r.trip, i.lineWidth = 1.5 * l, i.font = `${10 * l}px system-ui, sans-serif`, i.textAlign = "center", i.textBaseline = "top";
		for (let e of n) {
			let n = t.valToPos(e.t, "x", !0);
			n < a || n > a + s || (i.setLineDash([6 * l, 4 * l]), i.beginPath(), i.moveTo(n, o), i.lineTo(n, o + c), i.stroke(), i.fillText("▲", n, o + 1 * l + e.axis * 11 * l));
		}
		i.restore();
	} } };
}
function ro(e) {
	let t = () => typeof devicePixelRatio == "number" && devicePixelRatio > 0 ? devicePixelRatio : 1;
	return { hooks: {
		drawClear: (n) => {
			let r = e.bands();
			if (r.length === 0) return;
			let i = e.palette().bands, a = n.ctx, { left: o, top: s, width: c, height: l } = n.bbox, u = t();
			a.save(), a.beginPath(), a.rect(o, s, c, l), a.clip();
			for (let e of r) {
				let t = Math.max(o, n.valToPos(e.t0, "x", !0)), r = Math.min(o + c, n.valToPos(e.t1, "x", !0));
				if (!(r > t)) continue;
				let d = i[e.regime];
				a.fillStyle = d.fill, a.fillRect(t, s, r - t, l), a.fillStyle = d.stroke, a.fillRect(t, s, r - t, 3 * u);
			}
			a.restore();
		},
		draw: (n) => {
			let r = e.markers().filter((e) => e.kind !== "trip");
			if (r.length === 0) return;
			let i = e.palette(), a = n.ctx, { left: o, top: s, width: c, height: l } = n.bbox, u = t(), d = e.showLabels(n);
			a.save(), a.beginPath(), a.rect(o, s, c, l), a.clip(), a.strokeStyle = i.transition, a.fillStyle = i.transition, a.lineWidth = 1.5 * u, a.setLineDash([]), a.font = `${10 * u}px system-ui, sans-serif`, a.textBaseline = "top";
			let f = [
				-Infinity,
				-Infinity,
				-Infinity
			], p = o + c;
			for (let e of r) {
				let t = n.valToPos(e.t, "x", !0);
				if (t < o || t > p || (a.beginPath(), a.moveTo(t, s), a.lineTo(t, s + l), a.stroke(), !d)) continue;
				let r = a.measureText(e.label).width, i = t + 4 * u + r > p ? t - 4 * u - r : t + 4 * u, c = f.findIndex((e) => i > e);
				c < 0 && (c = 0), f[c] = i + r + 4 * u, a.textAlign = "left", a.fillText(e.label, i, s + (5 + c * 12) * u);
			}
			a.restore();
		}
	} };
}
function io(e, t, n, r) {
	let i = e ?? 0, a = t ?? 0;
	r !== void 0 && (i = Math.min(i, r), a = Math.max(a, r));
	let o = Math.max(a - i, n), s = (i + a) / 2;
	return [s - o * .55, s + o * .55];
}
function ao(e, t, n) {
	let r = Math.max(Math.abs(e ?? 0), Math.abs(t ?? 0), n) * 1.1;
	return [-r, r];
}
function oo(e, t) {
	let n = "http://www.w3.org/2000/svg", r = document.createElementNS(n, "svg");
	r.setAttribute("width", "30"), r.setAttribute("height", "8"), r.setAttribute("aria-hidden", "true");
	let i = document.createElementNS(n, "line");
	return i.setAttribute("x1", "0"), i.setAttribute("x2", "30"), i.setAttribute("y1", "4"), i.setAttribute("y2", "4"), i.setAttribute("stroke", t), i.setAttribute("stroke-width", "2"), e.length > 0 && i.setAttribute("stroke-dasharray", e.join(" ")), r.appendChild(i), r;
}
var so = "\n.slosh-charts { display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 320px), 1fr)); gap: 10px; color: var(--sc-fg, inherit); }\n.slosh-charts figure { margin: 0; min-width: 0; }\n.slosh-charts figcaption { font: 12px/1.3 system-ui, sans-serif; margin-top: 2px; color: var(--sc-fg, inherit); }\n.slosh-charts .sc-title { font-weight: 600; display: block; }\n.slosh-charts .sc-key { display: inline-flex; align-items: center; gap: 4px; margin-right: 10px; color: var(--sc-muted, inherit); white-space: nowrap; }\n.slosh-charts .sc-key[hidden] { display: none; }\n.slosh-charts .sc-plot { min-height: 20px; }\n.slosh-charts .sc-regimes { grid-column: 1 / -1; display: flex; flex-wrap: wrap; gap: 4px 14px; font: 12px/1.3 system-ui, sans-serif; color: var(--sc-muted, inherit); }\n.slosh-charts .sc-regimes > span { display: inline-flex; align-items: center; gap: 5px; white-space: nowrap; }\n.slosh-charts .sc-swatch { display: inline-block; width: 16px; height: 10px; box-sizing: border-box; border-top: 3px solid; }\n.slosh-charts .sc-trans { display: inline-block; width: 0; height: 12px; border-left: 2px solid; }\n.slosh-charts .sc-trip { font-size: 11px; }\n", co = 130;
function lo(e, t, n = {}) {
	let r = e.ownerDocument, i = n.now ?? (() => performance.now()), a = n.windowS ?? 30, o = n.chartHeight ?? 150, s = n.palette ?? Ga, c = n.threshold ?? 1, l = !1, u = r.createElement("div");
	u.className = "slosh-charts";
	let d = r.createElement("style");
	d.textContent = za + so, u.appendChild(d), e.appendChild(u);
	let f = r.createElement("div");
	f.className = "sc-regimes";
	let p = [], m = (e, t) => {
		let n = r.createElement("span"), i = r.createElement("span");
		return i.className = e, i.setAttribute("aria-hidden", "true"), n.appendChild(i), n.appendChild(r.createTextNode(t)), f.appendChild(n), i;
	};
	for (let [e, t] of [
		["nominal", "Nominal"],
		["gainShift", "Gain shift"],
		["engaged", "AAC engaged"]
	]) p.push({
		swatch: m("sc-swatch", t),
		regime: e
	});
	let h = m("sc-trans", "regime change / reader action"), g = m("sc-trip", " detector trip");
	g.textContent = "▲", u.appendChild(f);
	let _ = t.capacity, v = /* @__PURE__ */ new Map(), y = new Float64Array(_), b = -1, x = -1, S = -1, C = [], w = [], T = [], E = () => {
		if (S !== t.version) {
			S = t.version, C = t.markers(), w = t.bands(), T = [];
			for (let e of C) e.kind === "trip" && T.push({
				t: e.t,
				axis: e.axis ?? 0
			});
		}
	}, D = /* @__PURE__ */ new Map(), O = no({
		trips: () => (E(), T),
		palette: () => s.chart
	}), k = (e) => ro({
		bands: () => (E(), w),
		markers: () => (E(), C),
		palette: () => s.chart,
		showLabels: () => o >= co && (D.get(e) ?? !0)
	}), A = [], j = {
		stroke: () => s.chart.axis,
		grid: {
			stroke: () => s.chart.grid,
			width: 1
		},
		ticks: {
			stroke: () => s.chart.axis,
			width: 1,
			size: 4
		},
		font: "11px system-ui, sans-serif",
		labelFont: "11px system-ui, sans-serif"
	}, M = (e) => (t, n, r) => {
		let i = Number.isFinite(n) ? n : null, a = Number.isFinite(r) ? r : null;
		switch (e) {
			case "theta": return [0, Math.max(.1, (a ?? 0) * 1.1)];
			case "mass": return ao(i, a, .1);
			case "attitude": return ao(i, a, 2);
			case "kT": return io(i, a, .2, 1);
			case "ySD": return [0, Math.max(c * 1.5, (a ?? 0) * 1.1)];
			case "motors": return [0, 1];
		}
	}, N = (e) => Math.max(120, Math.floor(e.clientWidth) || 300);
	for (let e of to) {
		let t = r.createElement("figure");
		t.setAttribute("aria-label", e.title), t.dataset.chart = e.id;
		let n = r.createElement("div");
		n.className = "sc-plot", n.setAttribute("role", "img"), n.setAttribute("aria-label", `${e.title}. ${e.description}`);
		let i = r.createElement("figcaption"), c = r.createElement("span");
		c.className = "sc-title", c.textContent = e.title, i.appendChild(c);
		let l = [];
		for (let t of e.series) {
			let e = r.createElement("span");
			e.className = "sc-key";
			let n = oo(t.dash, eo(s.chart, t.role));
			e.appendChild(n), e.appendChild(r.createTextNode(t.label)), i.appendChild(e), l.push({
				el: e,
				svg: n.firstChild,
				spec: t
			});
		}
		t.appendChild(n), t.appendChild(i), u.appendChild(t);
		let d = e.id === "theta", f = {
			width: N(n),
			height: o,
			padding: [
				8,
				8,
				0,
				0
			],
			legend: { show: !1 },
			cursor: { show: !1 },
			select: {
				show: !1,
				left: 0,
				top: 0,
				width: 0,
				height: 0
			},
			plugins: [k(e.id), O],
			scales: {
				x: {
					time: !1,
					range: (e, t, n) => {
						let r = Math.max(Number.isFinite(n) ? n : 0, a);
						return [r - a, r];
					}
				},
				y: { range: M(e.id) },
				...d ? { deg: {
					from: "y",
					range: (e, t, n) => [t * Qa, n * Qa]
				} } : {}
			},
			axes: [
				{
					...j,
					scale: "x",
					size: 36,
					label: "sim time [s]",
					labelSize: 14,
					incrs: [
						1,
						2,
						5,
						10
					]
				},
				{
					...j,
					scale: "y",
					size: 54,
					label: e.yLabel,
					labelSize: 14
				},
				...d ? [{
					...j,
					scale: "deg",
					side: 1,
					size: 44,
					label: "θ [deg]",
					labelSize: 14,
					grid: { show: !1 }
				}] : []
			],
			series: [{}, ...e.series.map((e) => ({
				label: e.label,
				scale: "y",
				stroke: () => eo(s.chart, e.role),
				width: 1.6,
				dash: [...e.dash],
				points: { show: !1 },
				show: !e.monitorOnly
			}))]
		}, p = new Ra(f, [[], ...e.series.map(() => [])], n);
		A.push({
			spec: e,
			u: p,
			host: n,
			keys: l,
			width: f.width
		});
	}
	let P = /* @__PURE__ */ new Map(), ee = (e, n) => {
		let r = e, i = P.get(r);
		if (i === void 0 && (i = t.view(e), P.set(r, i)), !n) return i;
		let a = v.get(e);
		a === void 0 && (a = new Float64Array(_), v.set(e, a));
		for (let e = 0; e < i.length; e++) a[e] = i[e] * Qa;
		return a.subarray(0, i.length);
	}, F = (e) => ((b !== c || x !== e) && (y.fill(c, 0, e), b = c, x = e), y.subarray(0, e)), te = () => {
		let e = s.css;
		u.style.setProperty("--sc-fg", e.fg), u.style.setProperty("--sc-muted", e.muted);
		for (let e of A) for (let t of e.keys) t.svg.setAttribute("stroke", eo(s.chart, t.spec.role));
		for (let e of p) {
			let t = s.chart.bands[e.regime];
			e.swatch.style.background = t.fill, e.swatch.style.borderTopColor = t.stroke;
		}
		h.style.borderLeftColor = s.chart.transition, g.style.color = s.chart.trip;
	};
	te();
	let I = () => {
		let e = A.map((e) => e.host.parentElement.getBoundingClientRect());
		A.forEach((t, n) => {
			let r = e[n], i = !(r.height === 0 && r.width === 0 && e.some((e) => e.height > 0));
			i && e.forEach((e, t) => {
				t !== n && e.height > 0 && Math.abs(e.left - r.left) < 4 && e.top < r.top - 1 && (i = !1);
			}), D.set(t.spec.id, i);
		});
	}, L = () => {
		P.clear(), I();
		let e = t.length, n = ee("t", !1), r = t.latest()?.aacMode === "monitor";
		for (let t of A) {
			let i = t.spec.series.map((t) => t.channel === "threshold" ? F(e) : ee(t.channel, t.toDeg === !0));
			t.u.setData([n, ...i], !0), t.spec.series.forEach((e, n) => {
				if (e.monitorOnly === !0) {
					let e = t.u.series[n + 1];
					e !== void 0 && e.show !== r && t.u.setSeries(n + 1, { show: r });
					let i = t.keys[n];
					i !== void 0 && (i.el.hidden = !r);
				}
			});
		}
	};
	for (let e of A) for (let t of e.keys) t.spec.monitorOnly === !0 && (t.el.hidden = !0);
	let R = -Infinity, z = -1, B = !0, V = (e = !1) => {
		if (l) return;
		let n = i();
		!e && (n + .001 < R || t.version === z && !B) || (R = n - R > 33.333333333333336 ? n + $a : R + $a, L(), z = t.version, B = !1);
	}, ne = () => {
		if (l) return;
		let e = !1;
		for (let t of A) {
			let n = N(t.host);
			n !== t.width && (t.width = n, t.u.setSize({
				width: n,
				height: o
			}), e = !0);
		}
		e && V(!0);
	}, re = null;
	return n.observeResize !== !1 && typeof ResizeObserver < "u" && (re = new ResizeObserver(() => ne()), re.observe(e)), {
		redraw: V,
		resize: ne,
		setThreshold(e) {
			c = e, B = !0, V(!0);
		},
		setHeight(e) {
			if (e !== o) {
				o = e;
				for (let e of A) e.u.setSize({
					width: e.width,
					height: o
				});
				B = !0, V(!0);
			}
		},
		setTheme(e) {
			s = e, te(), B = !0, V(!0);
		},
		dispose() {
			if (!l) {
				l = !0, re?.disconnect();
				for (let e of A) e.u.destroy();
				u.remove();
			}
		},
		plots: A.map((e) => e.u),
		root: u
	};
}
var uo = "\n.sc-summary { position: absolute; width: 1px; height: 1px; margin: -1px; padding: 0; overflow: hidden;\n  clip-path: inset(50%); white-space: nowrap; border: 0; }\n", fo = {
	off: "Off",
	monitor: "Monitor",
	engaged: "Engaged"
}, po = ["pitch", "roll"];
function mo(e, t, n, r) {
	let i = NaN;
	for (let a = e.length - 1; a >= 0; a--) {
		let o = e[a];
		if (o > r + 1e-9) continue;
		if (o <= n + 1e-9) break;
		let s = Math.abs(t[a]);
		s <= i || (i = s);
	}
	return i;
}
function ho(e, t) {
	let n = e.length;
	if (n === 0) return {
		amplitude: 0,
		trend: null
	};
	let r = e[n - 1], i = mo(e, t, r - 2, r);
	if (!(e[0] <= r - 4 + .015)) return {
		amplitude: i,
		trend: null
	};
	let a = mo(e, t, r - 4, r - 2), o = "steady";
	return i > a * 1.1 ? o = "growing" : i < a / 1.1 && (o = "decaying"), {
		amplitude: i,
		trend: o
	};
}
function go(e) {
	return e.map((e, t) => e ? po[t] : null).filter((e) => e !== null).join(" and ");
}
function _o(e) {
	let { amplitude: t, trend: n } = ho(e.t, e.theta), r = `θ amplitude ${t.toFixed(2)} rad`;
	n !== null && (r += ` and ${n}`), r += `; AAC ${fo[e.aacMode]}`;
	let i = go(e.detect);
	if (i !== "") r += `; detector tripped on ${i}`;
	else if (e.trips.length > 0) {
		let t = [!1, !1];
		for (let n of e.trips) t[n.axis] = !0;
		r += `; detector tripped earlier on ${go(t)}, now clear`;
	} else r += "; detector not tripped";
	return `${r}.`;
}
function vo(e) {
	let t = e.ownerDocument.createElement("div");
	t.className = "sc-summary", t.setAttribute("aria-live", "polite"), t.setAttribute("aria-atomic", "true"), t.setAttribute("role", "status"), t.setAttribute("aria-label", "Simulation state summary"), e.appendChild(t);
	let n = -Infinity, r = "", i = null, a = (e, i) => {
		let a = _o({
			t: e.view("t"),
			theta: e.view("theta"),
			aacMode: i.aacMode,
			detect: i.detect,
			trips: e.detections()
		}), o = r === "" ? a : `${a} ${r}`;
		t.textContent !== o && (t.textContent = o), n = i.t;
	};
	return {
		element: t,
		maybeUpdate(e) {
			i = e;
			let t = e.latest();
			return t === null ? !1 : t.t >= n + 1 - 1e-9 || t.t < n ? (a(e, t), !0) : !1;
		},
		update(e) {
			i = e;
			let t = e.latest();
			t !== null && a(e, t);
		},
		setCaption(e) {
			if (e === r) return !1;
			r = e;
			let n = i?.latest();
			return i !== null && n != null ? a(i, n) : t.textContent = r, !0;
		},
		dispose() {
			t.remove();
		}
	};
}
// src/view/story.ts
var yo = 1.5, bo = 2.3, xo = [
	{
		id: "nominal",
		label: "Nominal · Fig 12",
		fig: "Fig 12",
		name: "Nominal · Fig 12"
	},
	{
		id: "gainShift",
		label: "Gain shift · Fig 13",
		fig: "Fig 13",
		name: "Gain shift · Fig 13"
	},
	{
		id: "engaged",
		label: "AAC engaged · Fig 14",
		fig: "Fig 14",
		name: "AAC engaged · Fig 14"
	}
], So = "Replay the paper", Co = .2, wo = .6;
function To(e, t = Infinity) {
	switch (e) {
		case "nominal": return [
			{ type: "clearSchedule" },
			{
				type: "rampGainShift",
				to: 1,
				durationS: yo
			},
			{
				type: "setAacMode",
				mode: "off"
			}
		];
		case "gainShift": {
			let e = [
				{ type: "clearSchedule" },
				{
					type: "rampGainShift",
					to: bo,
					durationS: yo
				},
				{
					type: "setAacMode",
					mode: "monitor"
				}
			];
			return t < .05 && e.push({
				type: "kick",
				theta: Co,
				phiDot: wo
			}), e;
		}
		case "engaged": return [{ type: "clearSchedule" }, {
			type: "setAacMode",
			mode: "engaged"
		}];
	}
}
function Eo() {
	return [{
		type: "loadPreset",
		id: "story"
	}];
}
function Do() {
	return [{
		type: "loadPreset",
		id: "story"
	}, { type: "clearSchedule" }];
}
function Oo(e, t) {
	switch (e.kind) {
		case "regime": return To(e.regime, t);
		case "play": return Eo();
		case "restart": return Do();
	}
}
function ko(e) {
	return ho(e.view("t"), e.view("theta")).amplitude;
}
p.story.initial;
function Ao(e) {
	let t;
	switch (e.regime) {
		case "nominal":
			t = "Nominal: the PD controller damps the slosh.";
			break;
		case "gainShift":
			t = e.tripSinceEntry === void 0 ? e.aacMode === "off" ? e.thetaTrend === "growing" ? "The slosh oscillation is now growing; the AAC is off, so nothing is watching." : "Gain shift applied with the AAC off; nothing is watching the slosh." : e.thetaTrend === "growing" ? "The slosh oscillation is now growing; the detector is watching." : "Gain shift applied; the detector is watching the slosh." : `Detector tripped ${e.tripSinceEntry.toFixed(1)} s after the shift. K_T is computed but not applied.`;
			break;
		case "engaged": t = e.kTApplied < .95 ? e.thetaTrend === "decaying" ? "K_T lowered, oscillation decays." : `K_T lowered to ${e.kTApplied.toFixed(2)}; the AAC is suppressing the oscillation.` : "AAC engaged: K_T is applied; it drops when the detector sees the slosh grow.";
	}
	return t;
}
var jo = class {
	lastEval = -Infinity;
	_caption = "";
	get caption() {
		return this._caption;
	}
	update(e, t = !1) {
		let n = e.latest();
		if (n === null || (n.t < this.lastEval && (t = !0), !t && n.t < this.lastEval + .5 - 1e-9)) return null;
		this.lastEval = n.t;
		let r = he(n), i = e.bands(), a = i[i.length - 1], o = a !== void 0 && a.regime === r ? a.t0 : n.t, s = e.detections().find((e) => e.t >= o - 1e-9), { amplitude: c, trend: l } = ho(e.view("t"), e.view("theta")), u = Ao({
			regime: r,
			tSinceEntry: n.t - o,
			thetaEnv: c,
			thetaTrend: l,
			tripSinceEntry: s === void 0 ? void 0 : s.t - o,
			kTApplied: Math.min(n.kTApplied[0], n.kTApplied[1]),
			aacMode: n.aacMode
		});
		return u === this._caption ? null : (this._caption = u, u);
	}
	reset() {
		this.lastEval = -Infinity, this._caption = "";
	}
}, Mo = .5, No = .05, Po = [
	{
		id: "off",
		label: "Off"
	},
	{
		id: "monitor",
		label: "Monitor"
	},
	{
		id: "engaged",
		label: "Engaged"
	}
], Fo = .5, Io = "\n.sc-controls { display: flex; flex-direction: column; gap: 10px; font: 14px/1.4 system-ui, sans-serif; color: var(--sc-fg, inherit); }\n.sc-controls * { box-sizing: border-box; }\n.sc-row { display: flex; flex-wrap: wrap; gap: 8px 16px; align-items: center; }\n.sc-controls button, .sc-controls input, .sc-controls summary { font: inherit; }\n.sc-controls.sc-regime { flex-direction: row; gap: 6px; }\n.sc-controls button { min-height: 36px; padding: 4px 12px; border-radius: 6px; cursor: pointer;\n  color: var(--sc-fg, inherit); background: var(--sc-surface, transparent); border: 1px solid var(--sc-border, currentColor); }\n.sc-controls button:hover { border-color: var(--sc-accent, currentColor); }\n.sc-controls button[aria-pressed=\"true\"] { background: var(--sc-accent, #0b5cad); color: var(--sc-accent-fg, #fff); border-color: var(--sc-accent, #0b5cad); }\n.sc-controls button[hidden] { display: none; }\n.sc-controls :focus-visible { outline: 3px solid var(--sc-focus, #0b5cad); outline-offset: 2px; }\n.sc-gs { display: flex; align-items: center; gap: 8px; flex: 1 1 260px; }\n.sc-gs input[type=range] { flex: 1 1 auto; min-width: 120px; accent-color: var(--sc-accent, #0b5cad); }\n.sc-gs output { min-width: 3.2em; font-variant-numeric: tabular-nums; font-weight: 600; }\n.sc-controls fieldset { border: 1px solid var(--sc-border, currentColor); border-radius: 6px; margin: 0; padding: 4px 10px 6px; }\n.sc-controls legend { padding: 0 4px; color: var(--sc-muted, inherit); }\n.sc-controls fieldset label { margin-right: 12px; white-space: nowrap; }\n.sc-regime { display: flex; flex-wrap: wrap; gap: 6px; align-items: stretch; padding: 6px; }\n.sc-regime button { min-height: 40px; min-width: 40px; line-height: 1.2; }\n.sc-regime button .sc-fig { white-space: nowrap; }\n.sc-exp > summary { cursor: pointer; font-weight: 700; padding: 6px 0; }\n.sc-exp > .sc-exp-body { display: flex; flex-direction: column; gap: 10px; padding-top: 4px; }\n", Lo = 0;
function Ro(e, t) {
	let n = e.style;
	n.setProperty("--sc-bg", t.bg), n.setProperty("--sc-surface", t.surface), n.setProperty("--sc-fg", t.fg), n.setProperty("--sc-muted", t.muted), n.setProperty("--sc-border", t.border), n.setProperty("--sc-accent", t.accent), n.setProperty("--sc-accent-fg", t.accentFg), n.setProperty("--sc-danger", t.danger), n.setProperty("--sc-danger-bg", t.dangerBg), n.setProperty("--sc-focus", t.focus);
}
function zo(e) {
	return Math.min(3, Math.max(Mo, e));
}
function Bo(e) {
	return e.toFixed(2);
}
function Vo(e, t) {
	let n = e.ownerDocument, r = t.host, i = `sc${++Lo}`, a = (e, t) => {
		let r = n.createElement(e);
		return t !== void 0 && (r.className = t), r;
	}, o = a("div", "sc-controls");
	o.setAttribute("role", "group"), o.setAttribute("aria-label", "Simulation controls");
	let s = a("div", "sc-row"), c = a("div", "sc-gs"), l = a("label");
	l.htmlFor = `${i}-gs`, l.textContent = "Gain shift";
	let u = a("input");
	u.type = "range", u.id = `${i}-gs`, u.min = String(Mo), u.max = "3", u.step = String(No), u.setAttribute("aria-label", "Gain shift");
	let d = a("output");
	d.htmlFor = u.id, d.setAttribute("aria-live", "off"), c.append(l, u, d);
	let f = a("fieldset"), m = a("legend");
	m.textContent = "AAC mode", f.appendChild(m);
	let h = /* @__PURE__ */ new Map();
	for (let e of Po) {
		let t = a("label"), r = a("input");
		r.type = "radio", r.name = `${i}-mode`, r.value = e.id, t.append(r, n.createTextNode(` ${e.label}`)), f.appendChild(t), h.set(e.id, r);
	}
	s.append(c, f);
	let g = (e, t) => {
		let n = a("button");
		return n.type = "button", n.textContent = e, n.setAttribute("aria-label", t), n;
	}, _ = a("div", "sc-controls sc-regime");
	_.setAttribute("role", "group"), _.setAttribute("aria-label", "Regime");
	let v = /* @__PURE__ */ new Map();
	for (let e of xo) {
		let t = g(e.label, e.name), r = e.label.indexOf(" · ");
		if (r > 0) {
			let i = a("span", "sc-fig"), o = a("span", "sc-dot");
			o.textContent = " · ", i.append(o, n.createTextNode(e.label.slice(r + 3))), t.textContent = "", t.append(a("span", "sc-name"), i), t.firstChild.textContent = e.label.slice(0, r);
		}
		t.dataset.regime = e.id, t.setAttribute("aria-pressed", "false"), v.set(e.id, t), _.appendChild(t);
	}
	let y = g(So, So);
	y.dataset.story = "play";
	let b = g("Restart", "Restart");
	b.dataset.story = "restart", _.append(y, b);
	let x = a("details", "sc-exp");
	x.open = !1;
	let S = a("summary");
	S.textContent = "Fine-tune (advanced)";
	let C = a("div", "sc-exp-body"), w = a("div", "sc-exp-about");
	C.append(s, w), x.append(S, C), o.append(x), e.appendChild(o), (t.regimeContainer ?? o).prepend(_);
	let T = 0, E = null, D = null, O = null, k = (e) => {
		let t = Bo(e);
		d.textContent !== t && (d.textContent = t), u.value !== String(e) && (u.value = String(e));
	}, A = (e) => {
		for (let [t, n] of h) n.checked = t === e;
	};
	k(zo(t.initial?.gainShift ?? 1)), A(t.initial?.aacMode ?? "off");
	let j = (e) => {
		if (r.send(Oo(e, e.kind === "regime" ? t.thetaEnvelope?.() ?? Infinity : void 0)), E = null, D = null, e.kind !== "regime") {
			O = {
				value: null,
				t0: T
			};
			let e = p.story.initial;
			k(zo(e.gainShift)), A(e.aacMode);
		}
		t.onStoryAction?.(e);
	};
	for (let [e, t] of v) t.addEventListener("click", () => j({
		kind: "regime",
		regime: e
	}));
	y.addEventListener("click", () => j({ kind: "play" })), b.addEventListener("click", () => j({ kind: "restart" })), u.addEventListener("input", () => {
		let e = zo(Number(u.value));
		d.textContent = Bo(e), E = {
			value: e,
			t0: T
		}, r.send({
			type: "setGainShift",
			value: e
		});
	});
	for (let [e, t] of h) t.addEventListener("change", () => {
		t.checked && (D = {
			value: e,
			t0: T
		}, r.send({
			type: "setAacMode",
			mode: e
		}));
	});
	return {
		element: o,
		regimeBar: _,
		aboutSlot: w,
		sync(e) {
			e.t < T && (E = null, D = null, O = null), T = e.t;
			let t = he(e);
			for (let [e, n] of v) {
				let r = String(e === t);
				n.getAttribute("aria-pressed") !== r && n.setAttribute("aria-pressed", r);
			}
			O !== null && (e.t <= O.t0 || e.t > O.t0 + Fo) && (O = null), E !== null && (Math.abs(e.gainShift - E.value) < 1e-9 || e.t > E.t0 + Fo) && (E = null), D !== null && (e.aacMode === D.value || e.t > D.t0 + Fo) && (D = null), E === null && O === null && k(zo(e.gainShift)), D === null && O === null && A(e.aacMode);
		},
		setPalette(e) {
			Ro(o, e), Ro(_, e);
		},
		dispose() {
			_.remove(), o.remove();
		}
	};
}
// src/view/fullscreen.ts
var Ho = "fullscreen-overlay", Uo = ":host([fullscreen-overlay]) { position: fixed; inset: 0; z-index: 2000; height: 100dvh; }", Wo = class {
	host;
	doc;
	onChange;
	current = null;
	savedOverflow = "";
	pending = !1;
	disposed = !1;
	onKey = (e) => {
		e.key === "Escape" && this.current && this.exit();
	};
	onFsChange = () => this.syncNative();
	constructor(e, t) {
		this.host = e, this.doc = t.doc ?? e.ownerDocument, this.onChange = t.onChange, this.doc.addEventListener("keydown", this.onKey), this.doc.addEventListener("fullscreenchange", this.onFsChange), this.doc.addEventListener("webkitfullscreenchange", this.onFsChange);
	}
	isActive() {
		return this.current !== null;
	}
	mode() {
		return this.current;
	}
	nativeAvailable() {
		return !(!this.doc.fullscreenEnabled && !this.doc.webkitFullscreenEnabled || !this.host.requestFullscreen && !this.host.webkitRequestFullscreen);
	}
	fsElement() {
		return this.doc.fullscreenElement ?? this.doc.webkitFullscreenElement ?? null;
	}
	emit() {
		this.onChange({
			active: this.current !== null,
			mode: this.current
		});
	}
	enterOverlay() {
		this.host.setAttribute(Ho, "");
		let e = this.doc.documentElement;
		this.savedOverflow = e.style.overflow, e.style.overflow = "hidden", this.current = "overlay", this.emit();
	}
	leaveOverlay() {
		this.host.removeAttribute(Ho), this.doc.documentElement.style.overflow = this.savedOverflow, this.current = null, this.emit();
	}
	async enter() {
		if (!(this.current || this.pending || this.disposed)) {
			if (this.nativeAvailable()) {
				this.pending = !0;
				try {
					if (await (this.host.requestFullscreen ? this.host.requestFullscreen() : this.host.webkitRequestFullscreen?.()), this.pending = !1, this.disposed) return;
					this.current || (this.current = "native", this.emit());
					return;
				} catch {
					this.pending = !1;
				}
			}
			!this.current && !this.disposed && this.enterOverlay();
		}
	}
	async exit() {
		if (this.current === "overlay") this.leaveOverlay();
		else if (this.current === "native") {
			if (this.fsElement()) try {
				await (this.doc.exitFullscreen ? this.doc.exitFullscreen() : this.doc.webkitExitFullscreen?.());
			} catch {}
			this.current === "native" && (this.current = null, this.emit());
		}
	}
	toggle() {
		return this.current ? this.exit() : this.enter();
	}
	syncNative() {
		if (this.disposed) return;
		let e = this.fsElement() === this.host;
		this.current === "native" && !e ? (this.current = null, this.emit()) : !this.current && e && (this.current = "native", this.emit());
	}
	dispose() {
		this.disposed || (this.current === "overlay" && this.leaveOverlay(), this.disposed = !0, this.doc.removeEventListener("keydown", this.onKey), this.doc.removeEventListener("fullscreenchange", this.onFsChange), this.doc.removeEventListener("webkitfullscreenchange", this.onFsChange));
	}
}, Go = class {
	id = null;
	x0 = 0;
	y0 = 0;
	t0 = 0;
	moved = !1;
	down(e, t, n, r) {
		this.id !== null && this.id !== e ? (this.cancel(), this.moved = !0) : (this.id = e, this.x0 = t, this.y0 = n, this.t0 = r, this.moved = !1);
	}
	move(e, t, n) {
		e === this.id && Math.hypot(t - this.x0, n - this.y0) >= 8 && (this.moved = !0);
	}
	up(e, t, n, r) {
		if (e !== this.id) return !1;
		let i = !this.moved && Math.hypot(t - this.x0, n - this.y0) < 8 && r - this.t0 < 300;
		return this.cancel(), i;
	}
	cancel() {
		this.id = null, this.moved = !1;
	}
}, Ko = "\n.sc-player { display: flex; flex-wrap: wrap; gap: 6px; align-items: center; padding: 6px; z-index: 3;\n  font: 14px/1.4 system-ui, sans-serif; color: var(--sc-fg, inherit);\n  background: color-mix(in srgb, var(--sc-surface, #fff) 80%, transparent); }\n.sc-player * { box-sizing: border-box; }\n.sc-player button { font: inherit; min-height: 40px; min-width: 40px; padding: 4px 12px; border-radius: 6px; cursor: pointer;\n  color: var(--sc-fg, inherit); background: var(--sc-surface, transparent); border: 1px solid var(--sc-border, currentColor); }\n.sc-player button:hover { border-color: var(--sc-accent, currentColor); }\n.sc-player button[aria-pressed=\"true\"] { background: var(--sc-accent, #0b5cad); color: var(--sc-accent-fg, #fff); border-color: var(--sc-accent, #0b5cad); }\n.sc-player button[hidden] { display: none; }\n.sc-player .sc-grow { flex: 1 1 8px; }\n.sc-player :focus-visible, .sc-play-overlay :focus-visible { outline: 3px solid var(--sc-focus, #0b5cad); outline-offset: 2px; }\n.sc-play-overlay { position: absolute; inset: 0; z-index: 2; display: flex; align-items: center; justify-content: center;\n  background: color-mix(in srgb, var(--sc-bg, #000) 45%, transparent); pointer-events: none; }\n.sc-play-overlay[hidden] { display: none; }\n.sc-play-disc { pointer-events: auto; width: 72px; height: 72px; padding: 0 0 0 6px; border-radius: 50%; cursor: pointer; font-size: 32px; line-height: 1;\n  color: var(--sc-accent-fg, #fff); background: var(--sc-accent, #0b5cad); border: 3px solid var(--sc-accent-fg, #fff); }\n";
function qo(e) {
	let { host: t, view: n, surface: r } = e, i = n.ownerDocument, a = e.now ?? (() => performance.now()), o = (e, t) => {
		let n = i.createElement(e);
		return t !== void 0 && (n.className = t), n;
	}, s = (e, t) => {
		let n = o("button");
		return n.type = "button", n.textContent = e, n.setAttribute("aria-label", t), n;
	}, c = o("div", "sc-player");
	c.setAttribute("role", "group"), c.setAttribute("aria-label", "Player");
	let l = s("Play", "Play");
	l.setAttribute("aria-pressed", "true"), l.dataset.player = "play";
	let u = o("span", "sc-grow"), d = s("Speed 1×", "Speed 1×, press for half speed");
	d.setAttribute("aria-pressed", "false");
	let f = s("Full screen", "Full screen");
	f.setAttribute("aria-pressed", "false"), e.showFullscreen === !1 && (f.hidden = !0), c.append(l, u, d, f), (e.dock ?? n).appendChild(c);
	let p = o("div", "sc-play-overlay"), m = o("button", "sc-play-disc");
	m.type = "button", m.textContent = "▶", m.setAttribute("aria-label", "Play"), m.dataset.player = "overlay", p.appendChild(m), r.appendChild(p);
	let h = !0, g = !1, _ = () => {
		p.hidden = !h;
		let e = h ? "Play" : "Pause";
		l.textContent = e, l.setAttribute("aria-label", e), l.setAttribute("aria-pressed", String(h));
	}, v = (e) => {
		h = e, _();
	}, y = () => {
		let e = !h;
		v(e), e ? t.pause() : t.resume();
	};
	_(), l.addEventListener("click", y), m.addEventListener("click", y);
	let b = () => {
		let e = g ? "Speed 0.5×" : "Speed 1×";
		d.textContent = e, d.setAttribute("aria-label", `${e}, press for ${g ? "normal" : "half"} speed`), d.setAttribute("aria-pressed", String(g));
	};
	d.addEventListener("click", () => {
		g = !g, b(), t.setSpeed(g ? .5 : 1);
	}), f.addEventListener("click", () => e.onFullscreenToggle?.());
	let x = new Go(), S = (e) => e.target?.closest?.("button, a, input, summary") != null, C = (e) => {
		S(e) || (e.pointerType !== "mouse" || e.button === 0) && x.down(e.pointerId, e.clientX, e.clientY, a());
	}, w = (e) => x.move(e.pointerId, e.clientX, e.clientY), T = (e) => {
		x.up(e.pointerId, e.clientX, e.clientY, a()) && y();
	}, E = () => x.cancel(), D = (e) => {
		e.target !== r || e.ctrlKey || e.metaKey || e.altKey || (e.key === " " || e.code === "Space" || e.key === "k" || e.key === "K") && (e.preventDefault(), y());
	};
	return r.addEventListener("pointerdown", C), r.addEventListener("pointermove", w), r.addEventListener("pointerup", T), r.addEventListener("pointercancel", E), r.addEventListener("keydown", D), {
		bar: c,
		overlay: m,
		scrim: p,
		setPaused: v,
		isPaused: () => h,
		setSpeed(e) {
			g = e === .5, b();
		},
		setFullscreenActive(e) {
			f.textContent = e ? "Exit full screen" : "Full screen", f.setAttribute("aria-label", e ? "Exit full screen" : "Full screen"), f.setAttribute("aria-pressed", String(e));
		},
		setFullscreenVisible(e) {
			f.hidden = !e;
		},
		dispose() {
			r.removeEventListener("pointerdown", C), r.removeEventListener("pointermove", w), r.removeEventListener("pointerup", T), r.removeEventListener("pointercancel", E), r.removeEventListener("keydown", D), c.remove(), p.remove();
		}
	};
}
var Jo = {
	LEFT: 0,
	MIDDLE: 1,
	RIGHT: 2,
	ROTATE: 0,
	DOLLY: 1,
	PAN: 2
}, Yo = {
	ROTATE: 0,
	PAN: 1,
	DOLLY_PAN: 2,
	DOLLY_ROTATE: 3
}, Xo = 1e3, Zo = 1001, Qo = 1002, $o = 1003, es = 1004, ts = 1005, ns = 1006, rs = 1007, is = 1008, as = 1009, os = 1010, ss = 1011, cs = 1012, ls = 1013, us = 1014, ds = 1015, fs = 1016, ps = 1017, ms = 1018, hs = 1020, gs = 35902, _s = 35899, vs = 1021, ys = 1022, bs = 1023, xs = 1026, Ss = 1027, Cs = 1028, ws = 1029, Ts = 1030, Es = 1031, Ds = 1033, Os = 33776, ks = 33777, As = 33778, js = 33779, Ms = 35840, Ns = 35841, Ps = 35842, Fs = 35843, Is = 36196, Ls = 37492, Rs = 37496, zs = 37488, Bs = 37489, Vs = 37490, Hs = 37491, Us = 37808, Ws = 37809, Gs = 37810, Ks = 37811, qs = 37812, Js = 37813, Ys = 37814, Xs = 37815, Zs = 37816, Qs = 37817, $s = 37818, ec = 37819, tc = 37820, nc = 37821, rc = 36492, ic = 36494, ac = 36495, oc = 36283, sc = 36284, cc = 36285, lc = 36286, uc = 2300, dc = 2301, fc = 2302, pc = 2303, mc = 2400, hc = 2401, gc = 2402, _c = 3200, vc = "srgb", yc = "srgb-linear", bc = "linear", xc = "srgb", Sc = 7680, Cc = 35044, wc = 2e3;
function Tc(e) {
	for (let t = e.length - 1; t >= 0; --t) if (e[t] >= 65535) return !0;
	return !1;
}
function Ec(e) {
	return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function Dc(e) {
	return document.createElementNS("http://www.w3.org/1999/xhtml", e);
}
function Oc() {
	let e = Dc("canvas");
	return e.style.display = "block", e;
}
var kc = {};
function Ac(...e) {
	let t = "THREE." + e.shift();
	console.log(t, ...e);
}
function jc(e) {
	let t = e[0];
	if (typeof t == "string" && t.startsWith("TSL:")) {
		let t = e[1];
		t && t.isStackTrace ? e[0] += " " + t.getLocation() : e[1] = "Stack trace not available. Enable \"THREE.Node.captureStackTrace\" to capture stack traces.";
	}
	return e;
}
function J(...e) {
	e = jc(e);
	let t = "THREE." + e.shift();
	{
		let n = e[0];
		n && n.isStackTrace ? console.warn(n.getError(t)) : console.warn(t, ...e);
	}
}
function Y(...e) {
	e = jc(e);
	let t = "THREE." + e.shift();
	{
		let n = e[0];
		n && n.isStackTrace ? console.error(n.getError(t)) : console.error(t, ...e);
	}
}
function Mc(...e) {
	let t = e.join(" ");
	t in kc || (kc[t] = !0, J(...e));
}
function Nc(e, t, n) {
	return new Promise(function(r, i) {
		function a() {
			switch (e.clientWaitSync(t, e.SYNC_FLUSH_COMMANDS_BIT, 0)) {
				case e.WAIT_FAILED:
					i();
					break;
				case e.TIMEOUT_EXPIRED:
					setTimeout(a, n);
					break;
				default: r();
			}
		}
		setTimeout(a, n);
	});
}
var Pc = {
	0: 0,
	2: 6,
	4: 4,
	3: 5,
	1: 1,
	6: 2,
	7: 7,
	5: 3
}, Fc = class {
	addEventListener(e, t) {
		this._listeners === void 0 && (this._listeners = {});
		let n = this._listeners;
		n[e] === void 0 && (n[e] = []), n[e].indexOf(t) === -1 && n[e].push(t);
	}
	hasEventListener(e, t) {
		let n = this._listeners;
		return n !== void 0 && n[e] !== void 0 && n[e].indexOf(t) !== -1;
	}
	removeEventListener(e, t) {
		let n = this._listeners;
		if (n === void 0) return;
		let r = n[e];
		if (r !== void 0) {
			let e = r.indexOf(t);
			e !== -1 && r.splice(e, 1);
		}
	}
	dispatchEvent(e) {
		let t = this._listeners;
		if (t === void 0) return;
		let n = t[e.type];
		if (n !== void 0) {
			e.target = this;
			let t = n.slice(0);
			for (let n = 0, r = t.length; n < r; n++) t[n].call(this, e);
			e.target = null;
		}
	}
}, Ic = /* @__PURE__ */ "00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff".split("."), Lc = 1234567, Rc = Math.PI / 180, zc = 180 / Math.PI;
function Bc() {
	let e = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, n = Math.random() * 4294967295 | 0, r = Math.random() * 4294967295 | 0;
	return (Ic[e & 255] + Ic[e >> 8 & 255] + Ic[e >> 16 & 255] + Ic[e >> 24 & 255] + "-" + Ic[t & 255] + Ic[t >> 8 & 255] + "-" + Ic[t >> 16 & 15 | 64] + Ic[t >> 24 & 255] + "-" + Ic[n & 63 | 128] + Ic[n >> 8 & 255] + "-" + Ic[n >> 16 & 255] + Ic[n >> 24 & 255] + Ic[r & 255] + Ic[r >> 8 & 255] + Ic[r >> 16 & 255] + Ic[r >> 24 & 255]).toLowerCase();
}
function Vc(e, t, n) {
	return Math.max(t, Math.min(n, e));
}
function Hc(e, t) {
	return (e % t + t) % t;
}
function Uc(e, t, n, r, i) {
	return r + (e - t) * (i - r) / (n - t);
}
function Wc(e, t, n) {
	return e === t ? 0 : (n - e) / (t - e);
}
function Gc(e, t, n) {
	return (1 - n) * e + n * t;
}
function Kc(e, t, n, r) {
	return Gc(e, t, 1 - Math.exp(-n * r));
}
function qc(e, t = 1) {
	return t - Math.abs(Hc(e, t * 2) - t);
}
function Jc(e, t, n) {
	return e <= t ? 0 : e >= n ? 1 : (e = (e - t) / (n - t), e * e * (3 - 2 * e));
}
function Yc(e, t, n) {
	return e <= t ? 0 : e >= n ? 1 : (e = (e - t) / (n - t), e * e * e * (e * (e * 6 - 15) + 10));
}
function Xc(e, t) {
	return e + Math.floor(Math.random() * (t - e + 1));
}
function Zc(e, t) {
	return e + Math.random() * (t - e);
}
function Qc(e) {
	return e * (.5 - Math.random());
}
function $c(e) {
	e !== void 0 && (Lc = e);
	let t = Lc += 1831565813;
	return t = Math.imul(t ^ t >>> 15, t | 1), t ^= t + Math.imul(t ^ t >>> 7, t | 61), ((t ^ t >>> 14) >>> 0) / 4294967296;
}
function el(e) {
	return e * Rc;
}
function tl(e) {
	return e * zc;
}
function nl(e) {
	return e > 0 && Number.isInteger(e) && 2 ** Math.round(Math.log2(e)) === e;
}
function rl(e) {
	return 2 ** Math.ceil(Math.log(e) / Math.LN2);
}
function il(e) {
	return 2 ** Math.floor(Math.log(e) / Math.LN2);
}
function al(e, t, n, r, i) {
	let a = Math.cos, o = Math.sin, s = a(n / 2), c = o(n / 2), l = a((t + r) / 2), u = o((t + r) / 2), d = a((t - r) / 2), f = o((t - r) / 2), p = a((r - t) / 2), m = o((r - t) / 2);
	switch (i) {
		case "XYX":
			e.set(s * u, c * d, c * f, s * l);
			break;
		case "YZY":
			e.set(c * f, s * u, c * d, s * l);
			break;
		case "ZXZ":
			e.set(c * d, c * f, s * u, s * l);
			break;
		case "XZX":
			e.set(s * u, c * m, c * p, s * l);
			break;
		case "YXY":
			e.set(c * p, s * u, c * m, s * l);
			break;
		case "ZYZ":
			e.set(c * m, c * p, s * u, s * l);
			break;
		default: J("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " + i);
	}
}
function ol(e) {
	switch (e.constructor) {
		case Uint32Array: return 4294967295;
		case Uint16Array: return 65535;
		case Uint8Array:
		case Uint8ClampedArray: return 255;
		case Int32Array: return 2147483647;
		case Int16Array: return 32767;
		case Int8Array: return 127;
		default: return;
	}
}
function sl(e, t) {
	if (t.constructor === Float32Array) return e;
	let n = ol(t);
	if (n === void 0) throw Error("THREE.MathUtils: Invalid component type.");
	return Math.max(e / n, -1);
}
function cl(e, t) {
	if (t.constructor === Float32Array) return e;
	let n = ol(t);
	if (n === void 0) throw Error("THREE.MathUtils: Invalid component type.");
	return Math.round(e * n);
}
var ll = {
	DEG2RAD: Rc,
	RAD2DEG: zc,
	generateUUID: Bc,
	clamp: Vc,
	euclideanModulo: Hc,
	mapLinear: Uc,
	inverseLerp: Wc,
	lerp: Gc,
	damp: Kc,
	pingpong: qc,
	smoothstep: Jc,
	smootherstep: Yc,
	randInt: Xc,
	randFloat: Zc,
	randFloatSpread: Qc,
	seededRandom: $c,
	degToRad: el,
	radToDeg: tl,
	isPowerOfTwo: nl,
	ceilPowerOfTwo: rl,
	floorPowerOfTwo: il,
	setQuaternionFromProperEuler: al,
	normalize: cl,
	denormalize: sl
}, X = class {
	static {
		this.prototype.isVector2 = !0;
	}
	constructor(e = 0, t = 0) {
		this.x = e, this.y = t;
	}
	get width() {
		return this.x;
	}
	set width(e) {
		this.x = e;
	}
	get height() {
		return this.y;
	}
	set height(e) {
		this.y = e;
	}
	set(e, t) {
		return this.x = e, this.y = t, this;
	}
	setScalar(e) {
		return this.x = e, this.y = e, this;
	}
	setX(e) {
		return this.x = e, this;
	}
	setY(e) {
		return this.y = e, this;
	}
	setComponent(e, t) {
		switch (e) {
			case 0:
				this.x = t;
				break;
			case 1:
				this.y = t;
				break;
			default: throw Error("THREE.Vector2: index is out of range: " + e);
		}
		return this;
	}
	getComponent(e) {
		switch (e) {
			case 0: return this.x;
			case 1: return this.y;
			default: throw Error("THREE.Vector2: index is out of range: " + e);
		}
	}
	clone() {
		return new this.constructor(this.x, this.y);
	}
	copy(e) {
		return this.x = e.x, this.y = e.y, this;
	}
	add(e) {
		return this.x += e.x, this.y += e.y, this;
	}
	addScalar(e) {
		return this.x += e, this.y += e, this;
	}
	addVectors(e, t) {
		return this.x = e.x + t.x, this.y = e.y + t.y, this;
	}
	addScaledVector(e, t) {
		return this.x += e.x * t, this.y += e.y * t, this;
	}
	sub(e) {
		return this.x -= e.x, this.y -= e.y, this;
	}
	subScalar(e) {
		return this.x -= e, this.y -= e, this;
	}
	subVectors(e, t) {
		return this.x = e.x - t.x, this.y = e.y - t.y, this;
	}
	multiply(e) {
		return this.x *= e.x, this.y *= e.y, this;
	}
	multiplyScalar(e) {
		return this.x *= e, this.y *= e, this;
	}
	divide(e) {
		return this.x /= e.x, this.y /= e.y, this;
	}
	divideScalar(e) {
		return this.multiplyScalar(1 / e);
	}
	applyMatrix3(e) {
		let t = this.x, n = this.y, r = e.elements;
		return this.x = r[0] * t + r[3] * n + r[6], this.y = r[1] * t + r[4] * n + r[7], this;
	}
	min(e) {
		return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this;
	}
	max(e) {
		return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this;
	}
	clamp(e, t) {
		return this.x = Vc(this.x, e.x, t.x), this.y = Vc(this.y, e.y, t.y), this;
	}
	clampScalar(e, t) {
		return this.x = Vc(this.x, e, t), this.y = Vc(this.y, e, t), this;
	}
	clampLength(e, t) {
		let n = this.length();
		return this.divideScalar(n || 1).multiplyScalar(Vc(n, e, t));
	}
	floor() {
		return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
	}
	ceil() {
		return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
	}
	round() {
		return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
	}
	roundToZero() {
		return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this;
	}
	negate() {
		return this.x = -this.x, this.y = -this.y, this;
	}
	dot(e) {
		return this.x * e.x + this.y * e.y;
	}
	cross(e) {
		return this.x * e.y - this.y * e.x;
	}
	lengthSq() {
		return this.x * this.x + this.y * this.y;
	}
	length() {
		return Math.sqrt(this.x * this.x + this.y * this.y);
	}
	manhattanLength() {
		return Math.abs(this.x) + Math.abs(this.y);
	}
	normalize() {
		return this.divideScalar(this.length() || 1);
	}
	angle() {
		return Math.atan2(-this.y, -this.x) + Math.PI;
	}
	angleTo(e) {
		let t = Math.sqrt(this.lengthSq() * e.lengthSq());
		if (t === 0) return Math.PI / 2;
		let n = this.dot(e) / t;
		return Math.acos(Vc(n, -1, 1));
	}
	distanceTo(e) {
		return Math.sqrt(this.distanceToSquared(e));
	}
	distanceToSquared(e) {
		let t = this.x - e.x, n = this.y - e.y;
		return t * t + n * n;
	}
	manhattanDistanceTo(e) {
		return Math.abs(this.x - e.x) + Math.abs(this.y - e.y);
	}
	setLength(e) {
		return this.normalize().multiplyScalar(e);
	}
	lerp(e, t) {
		return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this;
	}
	lerpVectors(e, t, n) {
		return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this;
	}
	equals(e) {
		return e.x === this.x && e.y === this.y;
	}
	fromArray(e, t = 0) {
		return this.x = e[t], this.y = e[t + 1], this;
	}
	toArray(e = [], t = 0) {
		return e[t] = this.x, e[t + 1] = this.y, e;
	}
	fromBufferAttribute(e, t) {
		return this.x = e.getX(t), this.y = e.getY(t), this;
	}
	rotateAround(e, t) {
		let n = Math.cos(t), r = Math.sin(t), i = this.x - e.x, a = this.y - e.y;
		return this.x = i * n - a * r + e.x, this.y = i * r + a * n + e.y, this;
	}
	random() {
		return this.x = Math.random(), this.y = Math.random(), this;
	}
	*[Symbol.iterator]() {
		yield this.x, yield this.y;
	}
}, ul = class {
	constructor(e = 0, t = 0, n = 0, r = 1) {
		this.isQuaternion = !0, this._x = e, this._y = t, this._z = n, this._w = r;
	}
	static slerpFlat(e, t, n, r, i, a, o) {
		let s = n[r + 0], c = n[r + 1], l = n[r + 2], u = n[r + 3], d = i[a + 0], f = i[a + 1], p = i[a + 2], m = i[a + 3];
		if (u !== m || s !== d || c !== f || l !== p) {
			let e = s * d + c * f + l * p + u * m;
			e < 0 && (d = -d, f = -f, p = -p, m = -m, e = -e);
			let t = 1 - o;
			if (e < .9995) {
				let n = Math.acos(e), r = Math.sin(n);
				t = Math.sin(t * n) / r, o = Math.sin(o * n) / r, s = s * t + d * o, c = c * t + f * o, l = l * t + p * o, u = u * t + m * o;
			} else {
				s = s * t + d * o, c = c * t + f * o, l = l * t + p * o, u = u * t + m * o;
				let e = 1 / Math.sqrt(s * s + c * c + l * l + u * u);
				s *= e, c *= e, l *= e, u *= e;
			}
		}
		e[t] = s, e[t + 1] = c, e[t + 2] = l, e[t + 3] = u;
	}
	static multiplyQuaternionsFlat(e, t, n, r, i, a) {
		let o = n[r], s = n[r + 1], c = n[r + 2], l = n[r + 3], u = i[a], d = i[a + 1], f = i[a + 2], p = i[a + 3];
		return e[t] = o * p + l * u + s * f - c * d, e[t + 1] = s * p + l * d + c * u - o * f, e[t + 2] = c * p + l * f + o * d - s * u, e[t + 3] = l * p - o * u - s * d - c * f, e;
	}
	get x() {
		return this._x;
	}
	set x(e) {
		this._x = e, this._onChangeCallback();
	}
	get y() {
		return this._y;
	}
	set y(e) {
		this._y = e, this._onChangeCallback();
	}
	get z() {
		return this._z;
	}
	set z(e) {
		this._z = e, this._onChangeCallback();
	}
	get w() {
		return this._w;
	}
	set w(e) {
		this._w = e, this._onChangeCallback();
	}
	set(e, t, n, r) {
		return this._x = e, this._y = t, this._z = n, this._w = r, this._onChangeCallback(), this;
	}
	clone() {
		return new this.constructor(this._x, this._y, this._z, this._w);
	}
	copy(e) {
		return this._x = e.x, this._y = e.y, this._z = e.z, this._w = e.w, this._onChangeCallback(), this;
	}
	setFromEuler(e, t = !0) {
		let n = e._x, r = e._y, i = e._z, a = e._order, o = Math.cos, s = Math.sin, c = o(n / 2), l = o(r / 2), u = o(i / 2), d = s(n / 2), f = s(r / 2), p = s(i / 2);
		switch (a) {
			case "XYZ":
				this._x = d * l * u + c * f * p, this._y = c * f * u - d * l * p, this._z = c * l * p + d * f * u, this._w = c * l * u - d * f * p;
				break;
			case "YXZ":
				this._x = d * l * u + c * f * p, this._y = c * f * u - d * l * p, this._z = c * l * p - d * f * u, this._w = c * l * u + d * f * p;
				break;
			case "ZXY":
				this._x = d * l * u - c * f * p, this._y = c * f * u + d * l * p, this._z = c * l * p + d * f * u, this._w = c * l * u - d * f * p;
				break;
			case "ZYX":
				this._x = d * l * u - c * f * p, this._y = c * f * u + d * l * p, this._z = c * l * p - d * f * u, this._w = c * l * u + d * f * p;
				break;
			case "YZX":
				this._x = d * l * u + c * f * p, this._y = c * f * u + d * l * p, this._z = c * l * p - d * f * u, this._w = c * l * u - d * f * p;
				break;
			case "XZY":
				this._x = d * l * u - c * f * p, this._y = c * f * u - d * l * p, this._z = c * l * p + d * f * u, this._w = c * l * u + d * f * p;
				break;
			default: J("Quaternion: .setFromEuler() encountered an unknown order: " + a);
		}
		return t === !0 && this._onChangeCallback(), this;
	}
	setFromAxisAngle(e, t) {
		let n = t / 2, r = Math.sin(n);
		return this._x = e.x * r, this._y = e.y * r, this._z = e.z * r, this._w = Math.cos(n), this._onChangeCallback(), this;
	}
	setFromRotationMatrix(e) {
		let t = e.elements, n = t[0], r = t[4], i = t[8], a = t[1], o = t[5], s = t[9], c = t[2], l = t[6], u = t[10], d = n + o + u;
		if (d > 0) {
			let e = .5 / Math.sqrt(d + 1);
			this._w = .25 / e, this._x = (l - s) * e, this._y = (i - c) * e, this._z = (a - r) * e;
		} else if (n > o && n > u) {
			let e = 2 * Math.sqrt(1 + n - o - u);
			this._w = (l - s) / e, this._x = .25 * e, this._y = (r + a) / e, this._z = (i + c) / e;
		} else if (o > u) {
			let e = 2 * Math.sqrt(1 + o - n - u);
			this._w = (i - c) / e, this._x = (r + a) / e, this._y = .25 * e, this._z = (s + l) / e;
		} else {
			let e = 2 * Math.sqrt(1 + u - n - o);
			this._w = (a - r) / e, this._x = (i + c) / e, this._y = (s + l) / e, this._z = .25 * e;
		}
		return this._onChangeCallback(), this;
	}
	setFromUnitVectors(e, t) {
		let n = e.dot(t) + 1;
		return n < 1e-8 ? (n = 0, Math.abs(e.x) > Math.abs(e.z) ? (this._x = -e.y, this._y = e.x, this._z = 0, this._w = n) : (this._x = 0, this._y = -e.z, this._z = e.y, this._w = n)) : (this._x = e.y * t.z - e.z * t.y, this._y = e.z * t.x - e.x * t.z, this._z = e.x * t.y - e.y * t.x, this._w = n), this.normalize();
	}
	angleTo(e) {
		return 2 * Math.acos(Math.abs(Vc(this.dot(e), -1, 1)));
	}
	rotateTowards(e, t) {
		let n = this.angleTo(e);
		if (n === 0) return this;
		let r = Math.min(1, t / n);
		return this.slerp(e, r), this;
	}
	identity() {
		return this.set(0, 0, 0, 1);
	}
	invert() {
		return this.conjugate();
	}
	conjugate() {
		return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this;
	}
	dot(e) {
		return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w;
	}
	lengthSq() {
		return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
	}
	length() {
		return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
	}
	normalize() {
		let e = this.length();
		return e === 0 ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (e = 1 / e, this._x *= e, this._y *= e, this._z *= e, this._w *= e), this._onChangeCallback(), this;
	}
	multiply(e) {
		return this.multiplyQuaternions(this, e);
	}
	premultiply(e) {
		return this.multiplyQuaternions(e, this);
	}
	multiplyQuaternions(e, t) {
		let n = e._x, r = e._y, i = e._z, a = e._w, o = t._x, s = t._y, c = t._z, l = t._w;
		return this._x = n * l + a * o + r * c - i * s, this._y = r * l + a * s + i * o - n * c, this._z = i * l + a * c + n * s - r * o, this._w = a * l - n * o - r * s - i * c, this._onChangeCallback(), this;
	}
	slerp(e, t) {
		let n = e._x, r = e._y, i = e._z, a = e._w, o = this.dot(e);
		o < 0 && (n = -n, r = -r, i = -i, a = -a, o = -o);
		let s = 1 - t;
		if (o < .9995) {
			let e = Math.acos(o), c = Math.sin(e);
			s = Math.sin(s * e) / c, t = Math.sin(t * e) / c, this._x = this._x * s + n * t, this._y = this._y * s + r * t, this._z = this._z * s + i * t, this._w = this._w * s + a * t, this._onChangeCallback();
		} else this._x = this._x * s + n * t, this._y = this._y * s + r * t, this._z = this._z * s + i * t, this._w = this._w * s + a * t, this.normalize();
		return this;
	}
	slerpQuaternions(e, t, n) {
		return this.copy(e).slerp(t, n);
	}
	random() {
		let e = 2 * Math.PI * Math.random(), t = 2 * Math.PI * Math.random(), n = Math.random(), r = Math.sqrt(1 - n), i = Math.sqrt(n);
		return this.set(r * Math.sin(e), r * Math.cos(e), i * Math.sin(t), i * Math.cos(t));
	}
	equals(e) {
		return e._x === this._x && e._y === this._y && e._z === this._z && e._w === this._w;
	}
	fromArray(e, t = 0) {
		return this._x = e[t], this._y = e[t + 1], this._z = e[t + 2], this._w = e[t + 3], this._onChangeCallback(), this;
	}
	toArray(e = [], t = 0) {
		return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._w, e;
	}
	fromBufferAttribute(e, t) {
		return this._x = e.getX(t), this._y = e.getY(t), this._z = e.getZ(t), this._w = e.getW(t), this._onChangeCallback(), this;
	}
	toJSON() {
		return this.toArray();
	}
	_onChange(e) {
		return this._onChangeCallback = e, this;
	}
	_onChangeCallback() {}
	*[Symbol.iterator]() {
		yield this._x, yield this._y, yield this._z, yield this._w;
	}
}, Z = class {
	static {
		this.prototype.isVector3 = !0;
	}
	constructor(e = 0, t = 0, n = 0) {
		this.x = e, this.y = t, this.z = n;
	}
	set(e, t, n) {
		return n === void 0 && (n = this.z), this.x = e, this.y = t, this.z = n, this;
	}
	setScalar(e) {
		return this.x = e, this.y = e, this.z = e, this;
	}
	setX(e) {
		return this.x = e, this;
	}
	setY(e) {
		return this.y = e, this;
	}
	setZ(e) {
		return this.z = e, this;
	}
	setComponent(e, t) {
		switch (e) {
			case 0:
				this.x = t;
				break;
			case 1:
				this.y = t;
				break;
			case 2:
				this.z = t;
				break;
			default: throw Error("THREE.Vector3: index is out of range: " + e);
		}
		return this;
	}
	getComponent(e) {
		switch (e) {
			case 0: return this.x;
			case 1: return this.y;
			case 2: return this.z;
			default: throw Error("THREE.Vector3: index is out of range: " + e);
		}
	}
	clone() {
		return new this.constructor(this.x, this.y, this.z);
	}
	copy(e) {
		return this.x = e.x, this.y = e.y, this.z = e.z, this;
	}
	add(e) {
		return this.x += e.x, this.y += e.y, this.z += e.z, this;
	}
	addScalar(e) {
		return this.x += e, this.y += e, this.z += e, this;
	}
	addVectors(e, t) {
		return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this;
	}
	addScaledVector(e, t) {
		return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this;
	}
	sub(e) {
		return this.x -= e.x, this.y -= e.y, this.z -= e.z, this;
	}
	subScalar(e) {
		return this.x -= e, this.y -= e, this.z -= e, this;
	}
	subVectors(e, t) {
		return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this;
	}
	multiply(e) {
		return this.x *= e.x, this.y *= e.y, this.z *= e.z, this;
	}
	multiplyScalar(e) {
		return this.x *= e, this.y *= e, this.z *= e, this;
	}
	multiplyVectors(e, t) {
		return this.x = e.x * t.x, this.y = e.y * t.y, this.z = e.z * t.z, this;
	}
	applyEuler(e) {
		return this.applyQuaternion(fl.setFromEuler(e));
	}
	applyAxisAngle(e, t) {
		return this.applyQuaternion(fl.setFromAxisAngle(e, t));
	}
	applyMatrix3(e) {
		let t = this.x, n = this.y, r = this.z, i = e.elements;
		return this.x = i[0] * t + i[3] * n + i[6] * r, this.y = i[1] * t + i[4] * n + i[7] * r, this.z = i[2] * t + i[5] * n + i[8] * r, this;
	}
	applyNormalMatrix(e) {
		return this.applyMatrix3(e).normalize();
	}
	applyMatrix4(e) {
		let t = this.x, n = this.y, r = this.z, i = e.elements, a = 1 / (i[3] * t + i[7] * n + i[11] * r + i[15]);
		return this.x = (i[0] * t + i[4] * n + i[8] * r + i[12]) * a, this.y = (i[1] * t + i[5] * n + i[9] * r + i[13]) * a, this.z = (i[2] * t + i[6] * n + i[10] * r + i[14]) * a, this;
	}
	applyQuaternion(e) {
		let t = this.x, n = this.y, r = this.z, i = e.x, a = e.y, o = e.z, s = e.w, c = 2 * (a * r - o * n), l = 2 * (o * t - i * r), u = 2 * (i * n - a * t);
		return this.x = t + s * c + a * u - o * l, this.y = n + s * l + o * c - i * u, this.z = r + s * u + i * l - a * c, this;
	}
	project(e) {
		return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix);
	}
	unproject(e) {
		return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld);
	}
	transformDirection(e) {
		let t = this.x, n = this.y, r = this.z, i = e.elements;
		return this.x = i[0] * t + i[4] * n + i[8] * r, this.y = i[1] * t + i[5] * n + i[9] * r, this.z = i[2] * t + i[6] * n + i[10] * r, this.normalize();
	}
	divide(e) {
		return this.x /= e.x, this.y /= e.y, this.z /= e.z, this;
	}
	divideScalar(e) {
		return this.multiplyScalar(1 / e);
	}
	min(e) {
		return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this;
	}
	max(e) {
		return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this;
	}
	clamp(e, t) {
		return this.x = Vc(this.x, e.x, t.x), this.y = Vc(this.y, e.y, t.y), this.z = Vc(this.z, e.z, t.z), this;
	}
	clampScalar(e, t) {
		return this.x = Vc(this.x, e, t), this.y = Vc(this.y, e, t), this.z = Vc(this.z, e, t), this;
	}
	clampLength(e, t) {
		let n = this.length();
		return this.divideScalar(n || 1).multiplyScalar(Vc(n, e, t));
	}
	floor() {
		return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this;
	}
	ceil() {
		return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this;
	}
	round() {
		return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this;
	}
	roundToZero() {
		return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this;
	}
	negate() {
		return this.x = -this.x, this.y = -this.y, this.z = -this.z, this;
	}
	dot(e) {
		return this.x * e.x + this.y * e.y + this.z * e.z;
	}
	lengthSq() {
		return this.x * this.x + this.y * this.y + this.z * this.z;
	}
	length() {
		return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
	}
	manhattanLength() {
		return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
	}
	normalize() {
		return this.divideScalar(this.length() || 1);
	}
	setLength(e) {
		return this.normalize().multiplyScalar(e);
	}
	lerp(e, t) {
		return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this;
	}
	lerpVectors(e, t, n) {
		return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this;
	}
	cross(e) {
		return this.crossVectors(this, e);
	}
	crossVectors(e, t) {
		let n = e.x, r = e.y, i = e.z, a = t.x, o = t.y, s = t.z;
		return this.x = r * s - i * o, this.y = i * a - n * s, this.z = n * o - r * a, this;
	}
	projectOnVector(e) {
		let t = e.lengthSq();
		if (t === 0) return this.set(0, 0, 0);
		let n = e.dot(this) / t;
		return this.copy(e).multiplyScalar(n);
	}
	projectOnPlane(e) {
		return dl.copy(this).projectOnVector(e), this.sub(dl);
	}
	reflect(e) {
		return this.sub(dl.copy(e).multiplyScalar(2 * this.dot(e)));
	}
	angleTo(e) {
		let t = Math.sqrt(this.lengthSq() * e.lengthSq());
		if (t === 0) return Math.PI / 2;
		let n = this.dot(e) / t;
		return Math.acos(Vc(n, -1, 1));
	}
	distanceTo(e) {
		return Math.sqrt(this.distanceToSquared(e));
	}
	distanceToSquared(e) {
		let t = this.x - e.x, n = this.y - e.y, r = this.z - e.z;
		return t * t + n * n + r * r;
	}
	manhattanDistanceTo(e) {
		return Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z);
	}
	setFromSpherical(e) {
		return this.setFromSphericalCoords(e.radius, e.phi, e.theta);
	}
	setFromSphericalCoords(e, t, n) {
		let r = Math.sin(t) * e;
		return this.x = r * Math.sin(n), this.y = Math.cos(t) * e, this.z = r * Math.cos(n), this;
	}
	setFromCylindrical(e) {
		return this.setFromCylindricalCoords(e.radius, e.theta, e.y);
	}
	setFromCylindricalCoords(e, t, n) {
		return this.x = e * Math.sin(t), this.y = n, this.z = e * Math.cos(t), this;
	}
	setFromMatrixPosition(e) {
		let t = e.elements;
		return this.x = t[12], this.y = t[13], this.z = t[14], this;
	}
	setFromMatrixScale(e) {
		let t = this.setFromMatrixColumn(e, 0).length(), n = this.setFromMatrixColumn(e, 1).length(), r = this.setFromMatrixColumn(e, 2).length();
		return this.x = t, this.y = n, this.z = r, this;
	}
	setFromMatrixColumn(e, t) {
		return this.fromArray(e.elements, t * 4);
	}
	setFromMatrix3Column(e, t) {
		return this.fromArray(e.elements, t * 3);
	}
	setFromEuler(e) {
		return this.x = e._x, this.y = e._y, this.z = e._z, this;
	}
	setFromColor(e) {
		return this.x = e.r, this.y = e.g, this.z = e.b, this;
	}
	equals(e) {
		return e.x === this.x && e.y === this.y && e.z === this.z;
	}
	fromArray(e, t = 0) {
		return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this;
	}
	toArray(e = [], t = 0) {
		return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e;
	}
	fromBufferAttribute(e, t) {
		return this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this;
	}
	random() {
		return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this;
	}
	randomDirection() {
		let e = Math.random() * Math.PI * 2, t = Math.random() * 2 - 1, n = Math.sqrt(1 - t * t);
		return this.x = n * Math.cos(e), this.y = t, this.z = n * Math.sin(e), this;
	}
	*[Symbol.iterator]() {
		yield this.x, yield this.y, yield this.z;
	}
}, dl = /*@__PURE__*/ new Z(), fl = /*@__PURE__*/ new ul(), Q = class {
	static {
		this.prototype.isMatrix3 = !0;
	}
	constructor(e, t, n, r, i, a, o, s, c) {
		this.elements = [
			1,
			0,
			0,
			0,
			1,
			0,
			0,
			0,
			1
		], e !== void 0 && this.set(e, t, n, r, i, a, o, s, c);
	}
	set(e, t, n, r, i, a, o, s, c) {
		let l = this.elements;
		return l[0] = e, l[1] = r, l[2] = o, l[3] = t, l[4] = i, l[5] = s, l[6] = n, l[7] = a, l[8] = c, this;
	}
	identity() {
		return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this;
	}
	copy(e) {
		let t = this.elements, n = e.elements;
		return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], this;
	}
	extractBasis(e, t, n) {
		return e.setFromMatrix3Column(this, 0), t.setFromMatrix3Column(this, 1), n.setFromMatrix3Column(this, 2), this;
	}
	setFromMatrix4(e) {
		let t = e.elements;
		return this.set(t[0], t[4], t[8], t[1], t[5], t[9], t[2], t[6], t[10]), this;
	}
	multiply(e) {
		return this.multiplyMatrices(this, e);
	}
	premultiply(e) {
		return this.multiplyMatrices(e, this);
	}
	multiplyMatrices(e, t) {
		let n = e.elements, r = t.elements, i = this.elements, a = n[0], o = n[3], s = n[6], c = n[1], l = n[4], u = n[7], d = n[2], f = n[5], p = n[8], m = r[0], h = r[3], g = r[6], _ = r[1], v = r[4], y = r[7], b = r[2], x = r[5], S = r[8];
		return i[0] = a * m + o * _ + s * b, i[3] = a * h + o * v + s * x, i[6] = a * g + o * y + s * S, i[1] = c * m + l * _ + u * b, i[4] = c * h + l * v + u * x, i[7] = c * g + l * y + u * S, i[2] = d * m + f * _ + p * b, i[5] = d * h + f * v + p * x, i[8] = d * g + f * y + p * S, this;
	}
	multiplyScalar(e) {
		let t = this.elements;
		return t[0] *= e, t[3] *= e, t[6] *= e, t[1] *= e, t[4] *= e, t[7] *= e, t[2] *= e, t[5] *= e, t[8] *= e, this;
	}
	determinant() {
		let e = this.elements, t = e[0], n = e[1], r = e[2], i = e[3], a = e[4], o = e[5], s = e[6], c = e[7], l = e[8];
		return t * a * l - t * o * c - n * i * l + n * o * s + r * i * c - r * a * s;
	}
	invert() {
		let e = this.elements, t = e[0], n = e[1], r = e[2], i = e[3], a = e[4], o = e[5], s = e[6], c = e[7], l = e[8], u = l * a - o * c, d = o * s - l * i, f = c * i - a * s, p = t * u + n * d + r * f;
		if (p === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
		let m = 1 / p;
		return e[0] = u * m, e[1] = (r * c - l * n) * m, e[2] = (o * n - r * a) * m, e[3] = d * m, e[4] = (l * t - r * s) * m, e[5] = (r * i - o * t) * m, e[6] = f * m, e[7] = (n * s - c * t) * m, e[8] = (a * t - n * i) * m, this;
	}
	transpose() {
		let e, t = this.elements;
		return e = t[1], t[1] = t[3], t[3] = e, e = t[2], t[2] = t[6], t[6] = e, e = t[5], t[5] = t[7], t[7] = e, this;
	}
	getNormalMatrix(e) {
		return this.setFromMatrix4(e).invert().transpose();
	}
	transposeIntoArray(e) {
		let t = this.elements;
		return e[0] = t[0], e[1] = t[3], e[2] = t[6], e[3] = t[1], e[4] = t[4], e[5] = t[7], e[6] = t[2], e[7] = t[5], e[8] = t[8], this;
	}
	setUvTransform(e, t, n, r, i, a, o) {
		let s = Math.cos(i), c = Math.sin(i);
		return this.set(n * s, n * c, -n * (s * a + c * o) + a + e, -r * c, r * s, -r * (-c * a + s * o) + o + t, 0, 0, 1), this;
	}
	scale(e, t) {
		return Mc("Matrix3: .scale() is deprecated. Use .makeScale() instead."), this.premultiply(pl.makeScale(e, t)), this;
	}
	rotate(e) {
		return Mc("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."), this.premultiply(pl.makeRotation(-e)), this;
	}
	translate(e, t) {
		return Mc("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."), this.premultiply(pl.makeTranslation(e, t)), this;
	}
	makeTranslation(e, t) {
		return e.isVector2 ? this.set(1, 0, e.x, 0, 1, e.y, 0, 0, 1) : this.set(1, 0, e, 0, 1, t, 0, 0, 1), this;
	}
	makeRotation(e) {
		let t = Math.cos(e), n = Math.sin(e);
		return this.set(t, -n, 0, n, t, 0, 0, 0, 1), this;
	}
	makeScale(e, t) {
		return this.set(e, 0, 0, 0, t, 0, 0, 0, 1), this;
	}
	equals(e) {
		let t = this.elements, n = e.elements;
		for (let e = 0; e < 9; e++) if (t[e] !== n[e]) return !1;
		return !0;
	}
	fromArray(e, t = 0) {
		for (let n = 0; n < 9; n++) this.elements[n] = e[n + t];
		return this;
	}
	toArray(e = [], t = 0) {
		let n = this.elements;
		return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e;
	}
	clone() {
		return new this.constructor().fromArray(this.elements);
	}
}, pl = /*@__PURE__*/ new Q(), ml = /*@__PURE__*/ new Q().set(.4123908, .3575843, .1804808, .212639, .7151687, .0721923, .0193308, .1191948, .9505322), hl = /*@__PURE__*/ new Q().set(3.2409699, -1.5373832, -.4986108, -.9692436, 1.8759675, .0415551, .0556301, -.203977, 1.0569715);
function gl() {
	let e = {
		enabled: !0,
		workingColorSpace: yc,
		spaces: {},
		convert: function(e, t, n) {
			return this.enabled === !1 || t === n || !t || !n || (this.spaces[t].transfer === "srgb" && (e.r = vl(e.r), e.g = vl(e.g), e.b = vl(e.b)), this.spaces[t].primaries !== this.spaces[n].primaries && (e.applyMatrix3(this.spaces[t].toXYZ), e.applyMatrix3(this.spaces[n].fromXYZ)), this.spaces[n].transfer === "srgb" && (e.r = yl(e.r), e.g = yl(e.g), e.b = yl(e.b))), e;
		},
		workingToColorSpace: function(e, t) {
			return this.convert(e, this.workingColorSpace, t);
		},
		colorSpaceToWorking: function(e, t) {
			return this.convert(e, t, this.workingColorSpace);
		},
		getPrimaries: function(e) {
			return this.spaces[e].primaries;
		},
		getTransfer: function(e) {
			return e === "" ? bc : this.spaces[e].transfer;
		},
		getToneMappingMode: function(e) {
			return this.spaces[e].outputColorSpaceConfig.toneMappingMode || "standard";
		},
		getLuminanceCoefficients: function(e, t = this.workingColorSpace) {
			return e.fromArray(this.spaces[t].luminanceCoefficients);
		},
		define: function(e) {
			Object.assign(this.spaces, e);
		},
		_getMatrix: function(e, t, n) {
			return e.copy(this.spaces[n].fromXYZ).multiply(this.spaces[t].toXYZ);
		},
		_getDrawingBufferColorSpace: function(e) {
			return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace;
		},
		_getUnpackColorSpace: function(e = this.workingColorSpace) {
			return this.spaces[e].workingColorSpaceConfig.unpackColorSpace;
		}
	}, t = [
		.64,
		.33,
		.3,
		.6,
		.15,
		.06
	], n = [
		.2126,
		.7152,
		.0722
	], r = [.3127, .329];
	return e.define({
		[yc]: {
			primaries: t,
			whitePoint: r,
			transfer: bc,
			toXYZ: ml,
			fromXYZ: hl,
			luminanceCoefficients: n,
			workingColorSpaceConfig: { unpackColorSpace: vc },
			outputColorSpaceConfig: { drawingBufferColorSpace: vc }
		},
		[vc]: {
			primaries: t,
			whitePoint: r,
			transfer: xc,
			toXYZ: ml,
			fromXYZ: hl,
			luminanceCoefficients: n,
			outputColorSpaceConfig: { drawingBufferColorSpace: vc }
		}
	}), e;
}
var _l = /*@__PURE__*/ gl();
function vl(e) {
	return e < .04045 ? e * .0773993808 : (e * .9478672986 + .0521327014) ** 2.4;
}
function yl(e) {
	return e < .0031308 ? e * 12.92 : 1.055 * e ** .41666 - .055;
}
var bl, xl = class {
	static getDataURL(e, t = "image/png") {
		if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > "u") return e.src;
		let n;
		if (e instanceof HTMLCanvasElement) n = e;
		else {
			bl === void 0 && (bl = Dc("canvas")), bl.width = e.width, bl.height = e.height;
			let t = bl.getContext("2d");
			e instanceof ImageData ? t.putImageData(e, 0, 0) : t.drawImage(e, 0, 0, e.width, e.height), n = bl;
		}
		return n.toDataURL(t);
	}
	static sRGBToLinear(e) {
		if (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && e instanceof ImageBitmap) {
			let t = Dc("canvas");
			t.width = e.width, t.height = e.height;
			let n = t.getContext("2d");
			n.drawImage(e, 0, 0, e.width, e.height);
			let r = n.getImageData(0, 0, e.width, e.height), i = r.data;
			for (let e = 0; e < i.length; e++) i[e] = vl(i[e] / 255) * 255;
			return n.putImageData(r, 0, 0), t;
		}
		if (e.data) {
			let t = e.data.slice(0);
			for (let e = 0; e < t.length; e++) t instanceof Uint8Array || t instanceof Uint8ClampedArray ? t[e] = Math.floor(vl(t[e] / 255) * 255) : t[e] = vl(t[e]);
			return {
				data: t,
				width: e.width,
				height: e.height
			};
		}
		return J("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), e;
	}
}, Sl = 0, Cl = class {
	constructor(e = null) {
		this.isTextureSource = !0, Object.defineProperty(this, "id", { value: Sl++ }), this.uuid = Bc(), this.data = e, this.dataReady = !0, this.version = 0;
	}
	getSize(e) {
		let t = this.data;
		return typeof HTMLVideoElement < "u" && t instanceof HTMLVideoElement ? e.set(t.videoWidth, t.videoHeight, 0) : typeof VideoFrame < "u" && t instanceof VideoFrame ? e.set(t.displayWidth, t.displayHeight, 0) : t === null ? e.set(0, 0, 0) : e.set(t.width || 0, t.height || 0, t.depth || 0), e;
	}
	set needsUpdate(e) {
		e === !0 && this.version++;
	}
	toJSON(e) {
		let t = e === void 0 || typeof e == "string";
		if (!t && e.images[this.uuid] !== void 0) return e.images[this.uuid];
		let n = {
			uuid: this.uuid,
			url: ""
		}, r = this.data;
		if (r !== null) {
			let e;
			if (Array.isArray(r)) {
				e = [];
				for (let t = 0, n = r.length; t < n; t++) r[t].isDataTexture ? e.push(wl(r[t].image)) : e.push(wl(r[t]));
			} else e = wl(r);
			n.url = e;
		}
		return t || (e.images[this.uuid] = n), n;
	}
};
function wl(e) {
	return typeof HTMLImageElement < "u" && e instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && e instanceof ImageBitmap ? xl.getDataURL(e) : e.data ? {
		data: Array.from(e.data),
		width: e.width,
		height: e.height,
		type: e.data.constructor.name
	} : (J("Texture: Unable to serialize Texture."), {});
}
var Tl = 0, El = /*@__PURE__*/ new Z(), Dl = class e extends Fc {
	constructor(t = e.DEFAULT_IMAGE, n = e.DEFAULT_MAPPING, r = Zo, i = Zo, a = ns, o = is, s = bs, c = as, l = e.DEFAULT_ANISOTROPY, u = "") {
		super(), this.isTexture = !0, Object.defineProperty(this, "id", { value: Tl++ }), this.uuid = Bc(), this.name = "", this.source = new Cl(t), this.mipmaps = [], this.mapping = n, this.channel = 0, this.wrapS = r, this.wrapT = i, this.magFilter = a, this.minFilter = o, this.anisotropy = l, this.format = s, this.internalFormat = null, this.type = c, this.offset = new X(0, 0), this.repeat = new X(1, 1), this.center = new X(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new Q(), this.generateMipmaps = !0, this.mipmapsAutoUpdate = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.colorSpace = u, this.userData = {}, this.updateRanges = [], this.version = 0, this.onUpdate = null, this.renderTarget = null, this.isRenderTargetTexture = !1, this.isArrayTexture = !!(t && t.depth && t.depth > 1), this.pmremVersion = 0, this.isPMREMTexture = !1, this.normalized = !1;
	}
	get width() {
		return this.source.getSize(El).x;
	}
	get height() {
		return this.source.getSize(El).y;
	}
	get depth() {
		return this.source.getSize(El).z;
	}
	get image() {
		return this.source.data;
	}
	set image(e) {
		this.source.data = e;
	}
	updateMatrix() {
		this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y);
	}
	addUpdateRange(e, t) {
		this.updateRanges.push({
			start: e,
			count: t
		});
	}
	clearUpdateRanges() {
		this.updateRanges.length = 0;
	}
	clone() {
		return new this.constructor().copy(this);
	}
	copy(e) {
		return this.name = e.name, this.source = e.source, this.mipmaps = e.mipmaps.slice(0), this.mapping = e.mapping, this.channel = e.channel, this.wrapS = e.wrapS, this.wrapT = e.wrapT, this.magFilter = e.magFilter, this.minFilter = e.minFilter, this.anisotropy = e.anisotropy, this.format = e.format, this.internalFormat = e.internalFormat, this.type = e.type, this.normalized = e.normalized, this.offset.copy(e.offset), this.repeat.copy(e.repeat), this.center.copy(e.center), this.rotation = e.rotation, this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrix.copy(e.matrix), this.generateMipmaps = e.generateMipmaps, this.mipmapsAutoUpdate = e.mipmapsAutoUpdate, this.premultiplyAlpha = e.premultiplyAlpha, this.flipY = e.flipY, this.unpackAlignment = e.unpackAlignment, this.colorSpace = e.colorSpace, this.renderTarget = e.renderTarget, this.isRenderTargetTexture = e.isRenderTargetTexture, this.isPMREMTexture = e.isPMREMTexture, this.isArrayTexture = e.isArrayTexture, this.userData = JSON.parse(JSON.stringify(e.userData)), this.needsUpdate = !0, this;
	}
	setValues(e) {
		for (let t in e) {
			let n = e[t];
			if (n === void 0) {
				J(`Texture.setValues(): parameter '${t}' has value of undefined.`);
				continue;
			}
			let r = this[t];
			r === void 0 ? J(`Texture.setValues(): property '${t}' does not exist.`) : r && n && r.isVector2 && n.isVector2 || r && n && r.isVector3 && n.isVector3 || r && n && r.isMatrix3 && n.isMatrix3 ? r.copy(n) : this[t] = n;
		}
	}
	toJSON(e) {
		let t = e === void 0 || typeof e == "string";
		if (!t && e.textures[this.uuid] !== void 0) return e.textures[this.uuid];
		let n = {
			metadata: {
				version: 4.7,
				type: "Texture",
				generator: "Texture.toJSON"
			},
			uuid: this.uuid,
			name: this.name,
			image: this.source.toJSON(e).uuid,
			mapping: this.mapping,
			channel: this.channel,
			repeat: [this.repeat.x, this.repeat.y],
			offset: [this.offset.x, this.offset.y],
			center: [this.center.x, this.center.y],
			rotation: this.rotation,
			wrap: [this.wrapS, this.wrapT],
			format: this.format,
			internalFormat: this.internalFormat,
			type: this.type,
			normalized: this.normalized,
			colorSpace: this.colorSpace,
			minFilter: this.minFilter,
			magFilter: this.magFilter,
			anisotropy: this.anisotropy,
			flipY: this.flipY,
			generateMipmaps: this.generateMipmaps,
			mipmapsAutoUpdate: this.mipmapsAutoUpdate,
			premultiplyAlpha: this.premultiplyAlpha,
			unpackAlignment: this.unpackAlignment
		};
		return Object.keys(this.userData).length > 0 && (n.userData = this.userData), t || (e.textures[this.uuid] = n), n;
	}
	dispose() {
		this.dispatchEvent({ type: "dispose" });
	}
	transformUv(e) {
		if (this.mapping !== 300) return e;
		if (e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1) switch (this.wrapS) {
			case Xo:
				e.x -= Math.floor(e.x);
				break;
			case Zo:
				e.x = e.x < 0 ? 0 : 1;
				break;
			case Qo: Math.abs(Math.floor(e.x) % 2) === 1 ? e.x = Math.ceil(e.x) - e.x : e.x -= Math.floor(e.x);
		}
		if (e.y < 0 || e.y > 1) switch (this.wrapT) {
			case Xo:
				e.y -= Math.floor(e.y);
				break;
			case Zo:
				e.y = e.y < 0 ? 0 : 1;
				break;
			case Qo: Math.abs(Math.floor(e.y) % 2) === 1 ? e.y = Math.ceil(e.y) - e.y : e.y -= Math.floor(e.y);
		}
		return this.flipY && (e.y = 1 - e.y), e;
	}
	set needsUpdate(e) {
		e === !0 && (this.version++, this.source.needsUpdate = !0);
	}
	set needsPMREMUpdate(e) {
		e === !0 && this.pmremVersion++;
	}
};
Dl.DEFAULT_IMAGE = null, Dl.DEFAULT_MAPPING = 300, Dl.DEFAULT_ANISOTROPY = 1;
var Ol = class {
	static {
		this.prototype.isVector4 = !0;
	}
	constructor(e = 0, t = 0, n = 0, r = 1) {
		this.x = e, this.y = t, this.z = n, this.w = r;
	}
	get width() {
		return this.z;
	}
	set width(e) {
		this.z = e;
	}
	get height() {
		return this.w;
	}
	set height(e) {
		this.w = e;
	}
	set(e, t, n, r) {
		return this.x = e, this.y = t, this.z = n, this.w = r, this;
	}
	setScalar(e) {
		return this.x = e, this.y = e, this.z = e, this.w = e, this;
	}
	setX(e) {
		return this.x = e, this;
	}
	setY(e) {
		return this.y = e, this;
	}
	setZ(e) {
		return this.z = e, this;
	}
	setW(e) {
		return this.w = e, this;
	}
	setComponent(e, t) {
		switch (e) {
			case 0:
				this.x = t;
				break;
			case 1:
				this.y = t;
				break;
			case 2:
				this.z = t;
				break;
			case 3:
				this.w = t;
				break;
			default: throw Error("THREE.Vector4: index is out of range: " + e);
		}
		return this;
	}
	getComponent(e) {
		switch (e) {
			case 0: return this.x;
			case 1: return this.y;
			case 2: return this.z;
			case 3: return this.w;
			default: throw Error("THREE.Vector4: index is out of range: " + e);
		}
	}
	clone() {
		return new this.constructor(this.x, this.y, this.z, this.w);
	}
	copy(e) {
		return this.x = e.x, this.y = e.y, this.z = e.z, this.w = e.w === void 0 ? 1 : e.w, this;
	}
	add(e) {
		return this.x += e.x, this.y += e.y, this.z += e.z, this.w += e.w, this;
	}
	addScalar(e) {
		return this.x += e, this.y += e, this.z += e, this.w += e, this;
	}
	addVectors(e, t) {
		return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this.w = e.w + t.w, this;
	}
	addScaledVector(e, t) {
		return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this.w += e.w * t, this;
	}
	sub(e) {
		return this.x -= e.x, this.y -= e.y, this.z -= e.z, this.w -= e.w, this;
	}
	subScalar(e) {
		return this.x -= e, this.y -= e, this.z -= e, this.w -= e, this;
	}
	subVectors(e, t) {
		return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this.w = e.w - t.w, this;
	}
	multiply(e) {
		return this.x *= e.x, this.y *= e.y, this.z *= e.z, this.w *= e.w, this;
	}
	multiplyScalar(e) {
		return this.x *= e, this.y *= e, this.z *= e, this.w *= e, this;
	}
	applyMatrix4(e) {
		let t = this.x, n = this.y, r = this.z, i = this.w, a = e.elements;
		return this.x = a[0] * t + a[4] * n + a[8] * r + a[12] * i, this.y = a[1] * t + a[5] * n + a[9] * r + a[13] * i, this.z = a[2] * t + a[6] * n + a[10] * r + a[14] * i, this.w = a[3] * t + a[7] * n + a[11] * r + a[15] * i, this;
	}
	divide(e) {
		return this.x /= e.x, this.y /= e.y, this.z /= e.z, this.w /= e.w, this;
	}
	divideScalar(e) {
		return this.multiplyScalar(1 / e);
	}
	setAxisAngleFromQuaternion(e) {
		this.w = 2 * Math.acos(e.w);
		let t = Math.sqrt(1 - e.w * e.w);
		return t < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = e.x / t, this.y = e.y / t, this.z = e.z / t), this;
	}
	setAxisAngleFromRotationMatrix(e) {
		let t, n, r, i, a = .01, o = .1, s = e.elements, c = s[0], l = s[4], u = s[8], d = s[1], f = s[5], p = s[9], m = s[2], h = s[6], g = s[10];
		if (Math.abs(l - d) < a && Math.abs(u - m) < a && Math.abs(p - h) < a) {
			if (Math.abs(l + d) < o && Math.abs(u + m) < o && Math.abs(p + h) < o && Math.abs(c + f + g - 3) < o) return this.set(1, 0, 0, 0), this;
			t = Math.PI;
			let e = (c + 1) / 2, s = (f + 1) / 2, _ = (g + 1) / 2, v = (l + d) / 4, y = (u + m) / 4, b = (p + h) / 4;
			return e > s && e > _ ? e < a ? (n = 0, r = .707106781, i = .707106781) : (n = Math.sqrt(e), r = v / n, i = y / n) : s > _ ? s < a ? (n = .707106781, r = 0, i = .707106781) : (r = Math.sqrt(s), n = v / r, i = b / r) : _ < a ? (n = .707106781, r = .707106781, i = 0) : (i = Math.sqrt(_), n = y / i, r = b / i), this.set(n, r, i, t), this;
		}
		let _ = Math.sqrt((h - p) * (h - p) + (u - m) * (u - m) + (d - l) * (d - l));
		return Math.abs(_) < .001 && (_ = 1), this.x = (h - p) / _, this.y = (u - m) / _, this.z = (d - l) / _, this.w = Math.acos((c + f + g - 1) / 2), this;
	}
	setFromMatrixPosition(e) {
		let t = e.elements;
		return this.x = t[12], this.y = t[13], this.z = t[14], this.w = t[15], this;
	}
	min(e) {
		return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this.w = Math.min(this.w, e.w), this;
	}
	max(e) {
		return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this.w = Math.max(this.w, e.w), this;
	}
	clamp(e, t) {
		return this.x = Vc(this.x, e.x, t.x), this.y = Vc(this.y, e.y, t.y), this.z = Vc(this.z, e.z, t.z), this.w = Vc(this.w, e.w, t.w), this;
	}
	clampScalar(e, t) {
		return this.x = Vc(this.x, e, t), this.y = Vc(this.y, e, t), this.z = Vc(this.z, e, t), this.w = Vc(this.w, e, t), this;
	}
	clampLength(e, t) {
		let n = this.length();
		return this.divideScalar(n || 1).multiplyScalar(Vc(n, e, t));
	}
	floor() {
		return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this;
	}
	ceil() {
		return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this;
	}
	round() {
		return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this;
	}
	roundToZero() {
		return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this.w = Math.trunc(this.w), this;
	}
	negate() {
		return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this;
	}
	dot(e) {
		return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w;
	}
	lengthSq() {
		return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
	}
	length() {
		return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
	}
	manhattanLength() {
		return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w);
	}
	normalize() {
		return this.divideScalar(this.length() || 1);
	}
	setLength(e) {
		return this.normalize().multiplyScalar(e);
	}
	lerp(e, t) {
		return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this.w += (e.w - this.w) * t, this;
	}
	lerpVectors(e, t, n) {
		return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this.w = e.w + (t.w - e.w) * n, this;
	}
	equals(e) {
		return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w;
	}
	fromArray(e, t = 0) {
		return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this.w = e[t + 3], this;
	}
	toArray(e = [], t = 0) {
		return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e[t + 3] = this.w, e;
	}
	fromBufferAttribute(e, t) {
		return this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this.w = e.getW(t), this;
	}
	random() {
		return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this;
	}
	*[Symbol.iterator]() {
		yield this.x, yield this.y, yield this.z, yield this.w;
	}
}, kl = class extends Fc {
	constructor(e = 1, t = 1, n = {}) {
		super(), n = Object.assign({
			generateMipmaps: !1,
			internalFormat: null,
			minFilter: ns,
			depthBuffer: !0,
			stencilBuffer: !1,
			resolveColorBuffer: !0,
			resolveDepthBuffer: !0,
			resolveStencilBuffer: !0,
			storeMultisampledColorBuffer: !0,
			storeMultisampledDepthBuffer: !0,
			storeMultisampledStencilBuffer: !0,
			depthTexture: null,
			samples: 0,
			count: 1,
			depth: 1,
			multiview: !1,
			useArrayDepthTexture: !1
		}, n), this.isRenderTarget = !0, this.width = e, this.height = t, this.depth = n.depth, this.scissor = new Ol(0, 0, e, t), this.scissorTest = !1, this.viewport = new Ol(0, 0, e, t), this.textures = [];
		let r = n.count;
		for (let i = 0; i < r; i++) this.textures[i] = new Dl({
			width: e,
			height: t,
			depth: n.depth
		}), this.textures[i].isRenderTargetTexture = !0, this.textures[i].renderTarget = this;
		this._setTextureOptions(n), this.depthBuffer = n.depthBuffer, this.stencilBuffer = n.stencilBuffer, this.resolveColorBuffer = n.resolveColorBuffer, this.resolveDepthBuffer = n.resolveDepthBuffer, this.resolveStencilBuffer = n.resolveStencilBuffer, this.storeMultisampledColorBuffer = n.storeMultisampledColorBuffer, this.storeMultisampledDepthBuffer = n.storeMultisampledDepthBuffer, this.storeMultisampledStencilBuffer = n.storeMultisampledStencilBuffer, this._depthTexture = null, this.depthTexture = n.depthTexture, this.samples = n.samples, this.multiview = n.multiview, this.useArrayDepthTexture = n.useArrayDepthTexture;
	}
	_setTextureOptions(e = {}) {
		let t = {
			minFilter: ns,
			generateMipmaps: !1,
			flipY: !1,
			internalFormat: null
		};
		e.mapping !== void 0 && (t.mapping = e.mapping), e.wrapS !== void 0 && (t.wrapS = e.wrapS), e.wrapT !== void 0 && (t.wrapT = e.wrapT), e.wrapR !== void 0 && (t.wrapR = e.wrapR), e.magFilter !== void 0 && (t.magFilter = e.magFilter), e.minFilter !== void 0 && (t.minFilter = e.minFilter), e.format !== void 0 && (t.format = e.format), e.type !== void 0 && (t.type = e.type), e.anisotropy !== void 0 && (t.anisotropy = e.anisotropy), e.colorSpace !== void 0 && (t.colorSpace = e.colorSpace), e.flipY !== void 0 && (t.flipY = e.flipY), e.generateMipmaps !== void 0 && (t.generateMipmaps = e.generateMipmaps), e.mipmapsAutoUpdate !== void 0 && (t.mipmapsAutoUpdate = e.mipmapsAutoUpdate), e.internalFormat !== void 0 && (t.internalFormat = e.internalFormat);
		for (let e = 0; e < this.textures.length; e++) this.textures[e].setValues(t);
	}
	get texture() {
		return this.textures[0];
	}
	set texture(e) {
		this.textures[0] = e;
	}
	set depthTexture(e) {
		this._depthTexture !== null && this._depthTexture.renderTarget === this && (this._depthTexture.renderTarget = null), e !== null && e.renderTarget === null && (e.renderTarget = this), this._depthTexture = e;
	}
	get depthTexture() {
		return this._depthTexture;
	}
	setSize(e, t, n = 1) {
		if (this.width !== e || this.height !== t || this.depth !== n) {
			this.width = e, this.height = t, this.depth = n;
			for (let r = 0, i = this.textures.length; r < i; r++) this.textures[r].image.width = e, this.textures[r].image.height = t, this.textures[r].image.depth = n, this.textures[r].isData3DTexture !== !0 && (this.textures[r].isArrayTexture = this.textures[r].image.depth > 1);
			this.dispose();
		}
		this.viewport.set(0, 0, e, t), this.scissor.set(0, 0, e, t);
	}
	clone() {
		return new this.constructor().copy(this);
	}
	copy(e) {
		this.width = e.width, this.height = e.height, this.depth = e.depth, this.scissor.copy(e.scissor), this.scissorTest = e.scissorTest, this.viewport.copy(e.viewport), this.textures.length = 0;
		for (let t = 0, n = e.textures.length; t < n; t++) {
			this.textures[t] = e.textures[t].clone(), this.textures[t].isRenderTargetTexture = !0, this.textures[t].renderTarget = this;
			let n = Object.assign({}, e.textures[t].image);
			this.textures[t].source = new Cl(n);
		}
		if (this.depthBuffer = e.depthBuffer, this.stencilBuffer = e.stencilBuffer, this.resolveColorBuffer = e.resolveColorBuffer, this.resolveDepthBuffer = e.resolveDepthBuffer, this.resolveStencilBuffer = e.resolveStencilBuffer, this.storeMultisampledColorBuffer = e.storeMultisampledColorBuffer, this.storeMultisampledDepthBuffer = e.storeMultisampledDepthBuffer, this.storeMultisampledStencilBuffer = e.storeMultisampledStencilBuffer, e.depthTexture !== null) {
			if (e.depthTexture.renderTarget === e) {
				let t = e.depthTexture.clone();
				t.renderTarget = null, this.depthTexture = t;
			} else this.depthTexture = e.depthTexture;
		} else this.depthTexture = null;
		return this.samples = e.samples, this.multiview = e.multiview, this.useArrayDepthTexture = e.useArrayDepthTexture, this;
	}
	dispose() {
		this.dispatchEvent({ type: "dispose" });
	}
}, Al = class extends kl {
	constructor(e = 1, t = 1, n = {}) {
		super(e, t, n), this.isWebGLRenderTarget = !0;
	}
}, jl = class extends Dl {
	constructor(e = null, t = 1, n = 1, r = 1) {
		super(null), this.isDataArrayTexture = !0, this.image = {
			data: e,
			width: t,
			height: n,
			depth: r
		}, this.magFilter = $o, this.minFilter = $o, this.wrapR = Zo, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1, this.layerUpdates = /* @__PURE__ */ new Set();
	}
	copy(e) {
		return super.copy(e), this.wrapR = e.wrapR, this;
	}
	addLayerUpdate(e) {
		this.layerUpdates.add(e);
	}
	clearLayerUpdates() {
		this.layerUpdates.clear();
	}
}, Ml = class extends Dl {
	constructor(e = null, t = 1, n = 1, r = 1) {
		super(null), this.isData3DTexture = !0, this.image = {
			data: e,
			width: t,
			height: n,
			depth: r
		}, this.magFilter = $o, this.minFilter = $o, this.wrapR = Zo, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
	}
	copy(e) {
		return super.copy(e), this.wrapR = e.wrapR, this;
	}
}, Nl = class e {
	static {
		this.prototype.isMatrix4 = !0;
	}
	constructor(e, t, n, r, i, a, o, s, c, l, u, d, f, p, m, h) {
		this.elements = [
			1,
			0,
			0,
			0,
			0,
			1,
			0,
			0,
			0,
			0,
			1,
			0,
			0,
			0,
			0,
			1
		], e !== void 0 && this.set(e, t, n, r, i, a, o, s, c, l, u, d, f, p, m, h);
	}
	set(e, t, n, r, i, a, o, s, c, l, u, d, f, p, m, h) {
		let g = this.elements;
		return g[0] = e, g[4] = t, g[8] = n, g[12] = r, g[1] = i, g[5] = a, g[9] = o, g[13] = s, g[2] = c, g[6] = l, g[10] = u, g[14] = d, g[3] = f, g[7] = p, g[11] = m, g[15] = h, this;
	}
	identity() {
		return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
	}
	clone() {
		return new e().fromArray(this.elements);
	}
	copy(e) {
		let t = this.elements, n = e.elements;
		return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], t[9] = n[9], t[10] = n[10], t[11] = n[11], t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15], this;
	}
	copyPosition(e) {
		let t = this.elements, n = e.elements;
		return t[12] = n[12], t[13] = n[13], t[14] = n[14], this;
	}
	setFromMatrix3(e) {
		let t = e.elements;
		return this.set(t[0], t[3], t[6], 0, t[1], t[4], t[7], 0, t[2], t[5], t[8], 0, 0, 0, 0, 1), this;
	}
	extractBasis(e, t, n) {
		return this.determinantAffine() === 0 ? (e.set(1, 0, 0), t.set(0, 1, 0), n.set(0, 0, 1), this) : (e.setFromMatrixColumn(this, 0), t.setFromMatrixColumn(this, 1), n.setFromMatrixColumn(this, 2), this);
	}
	makeBasis(e, t, n) {
		return this.set(e.x, t.x, n.x, 0, e.y, t.y, n.y, 0, e.z, t.z, n.z, 0, 0, 0, 0, 1), this;
	}
	extractRotation(e) {
		if (e.determinantAffine() === 0) return this.identity();
		let t = this.elements, n = e.elements, r = 1 / Pl.setFromMatrixColumn(e, 0).length(), i = 1 / Pl.setFromMatrixColumn(e, 1).length(), a = 1 / Pl.setFromMatrixColumn(e, 2).length();
		return t[0] = n[0] * r, t[1] = n[1] * r, t[2] = n[2] * r, t[3] = 0, t[4] = n[4] * i, t[5] = n[5] * i, t[6] = n[6] * i, t[7] = 0, t[8] = n[8] * a, t[9] = n[9] * a, t[10] = n[10] * a, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
	}
	makeRotationFromEuler(e) {
		let t = this.elements, n = e.x, r = e.y, i = e.z, a = Math.cos(n), o = Math.sin(n), s = Math.cos(r), c = Math.sin(r), l = Math.cos(i), u = Math.sin(i);
		if (e.order === "XYZ") {
			let e = a * l, n = a * u, r = o * l, i = o * u;
			t[0] = s * l, t[4] = -s * u, t[8] = c, t[1] = n + r * c, t[5] = e - i * c, t[9] = -o * s, t[2] = i - e * c, t[6] = r + n * c, t[10] = a * s;
		} else if (e.order === "YXZ") {
			let e = s * l, n = s * u, r = c * l, i = c * u;
			t[0] = e + i * o, t[4] = r * o - n, t[8] = a * c, t[1] = a * u, t[5] = a * l, t[9] = -o, t[2] = n * o - r, t[6] = i + e * o, t[10] = a * s;
		} else if (e.order === "ZXY") {
			let e = s * l, n = s * u, r = c * l, i = c * u;
			t[0] = e - i * o, t[4] = -a * u, t[8] = r + n * o, t[1] = n + r * o, t[5] = a * l, t[9] = i - e * o, t[2] = -a * c, t[6] = o, t[10] = a * s;
		} else if (e.order === "ZYX") {
			let e = a * l, n = a * u, r = o * l, i = o * u;
			t[0] = s * l, t[4] = r * c - n, t[8] = e * c + i, t[1] = s * u, t[5] = i * c + e, t[9] = n * c - r, t[2] = -c, t[6] = o * s, t[10] = a * s;
		} else if (e.order === "YZX") {
			let e = a * s, n = a * c, r = o * s, i = o * c;
			t[0] = s * l, t[4] = i - e * u, t[8] = r * u + n, t[1] = u, t[5] = a * l, t[9] = -o * l, t[2] = -c * l, t[6] = n * u + r, t[10] = e - i * u;
		} else if (e.order === "XZY") {
			let e = a * s, n = a * c, r = o * s, i = o * c;
			t[0] = s * l, t[4] = -u, t[8] = c * l, t[1] = e * u + i, t[5] = a * l, t[9] = n * u - r, t[2] = r * u - n, t[6] = o * l, t[10] = i * u + e;
		}
		return t[3] = 0, t[7] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
	}
	makeRotationFromQuaternion(e) {
		return this.compose(Il, e, Ll);
	}
	lookAt(e, t, n) {
		let r = this.elements;
		return Bl.subVectors(e, t), Bl.lengthSq() === 0 && (Bl.z = 1), Bl.normalize(), Rl.crossVectors(n, Bl), Rl.lengthSq() === 0 && (Math.abs(n.z) === 1 ? Bl.x += 1e-4 : Bl.z += 1e-4, Bl.normalize(), Rl.crossVectors(n, Bl)), Rl.normalize(), zl.crossVectors(Bl, Rl), r[0] = Rl.x, r[4] = zl.x, r[8] = Bl.x, r[1] = Rl.y, r[5] = zl.y, r[9] = Bl.y, r[2] = Rl.z, r[6] = zl.z, r[10] = Bl.z, this;
	}
	multiply(e) {
		return this.multiplyMatrices(this, e);
	}
	premultiply(e) {
		return this.multiplyMatrices(e, this);
	}
	multiplyMatrices(e, t) {
		let n = e.elements, r = t.elements, i = this.elements, a = n[0], o = n[4], s = n[8], c = n[12], l = n[1], u = n[5], d = n[9], f = n[13], p = n[2], m = n[6], h = n[10], g = n[14], _ = n[3], v = n[7], y = n[11], b = n[15], x = r[0], S = r[4], C = r[8], w = r[12], T = r[1], E = r[5], D = r[9], O = r[13], k = r[2], A = r[6], j = r[10], M = r[14], N = r[3], P = r[7], ee = r[11], F = r[15];
		return i[0] = a * x + o * T + s * k + c * N, i[4] = a * S + o * E + s * A + c * P, i[8] = a * C + o * D + s * j + c * ee, i[12] = a * w + o * O + s * M + c * F, i[1] = l * x + u * T + d * k + f * N, i[5] = l * S + u * E + d * A + f * P, i[9] = l * C + u * D + d * j + f * ee, i[13] = l * w + u * O + d * M + f * F, i[2] = p * x + m * T + h * k + g * N, i[6] = p * S + m * E + h * A + g * P, i[10] = p * C + m * D + h * j + g * ee, i[14] = p * w + m * O + h * M + g * F, i[3] = _ * x + v * T + y * k + b * N, i[7] = _ * S + v * E + y * A + b * P, i[11] = _ * C + v * D + y * j + b * ee, i[15] = _ * w + v * O + y * M + b * F, this;
	}
	multiplyScalar(e) {
		let t = this.elements;
		return t[0] *= e, t[4] *= e, t[8] *= e, t[12] *= e, t[1] *= e, t[5] *= e, t[9] *= e, t[13] *= e, t[2] *= e, t[6] *= e, t[10] *= e, t[14] *= e, t[3] *= e, t[7] *= e, t[11] *= e, t[15] *= e, this;
	}
	determinant() {
		let e = this.elements, t = e[0], n = e[4], r = e[8], i = e[12], a = e[1], o = e[5], s = e[9], c = e[13], l = e[2], u = e[6], d = e[10], f = e[14], p = e[3], m = e[7], h = e[11], g = e[15], _ = s * f - c * d, v = o * f - c * u, y = o * d - s * u, b = a * f - c * l, x = a * d - s * l, S = a * u - o * l;
		return t * (m * _ - h * v + g * y) - n * (p * _ - h * b + g * x) + r * (p * v - m * b + g * S) - i * (p * y - m * x + h * S);
	}
	determinantAffine() {
		let e = this.elements, t = e[0], n = e[4], r = e[8], i = e[1], a = e[5], o = e[9], s = e[2], c = e[6], l = e[10];
		return t * (a * l - o * c) - n * (i * l - o * s) + r * (i * c - a * s);
	}
	transpose() {
		let e = this.elements, t;
		return t = e[1], e[1] = e[4], e[4] = t, t = e[2], e[2] = e[8], e[8] = t, t = e[6], e[6] = e[9], e[9] = t, t = e[3], e[3] = e[12], e[12] = t, t = e[7], e[7] = e[13], e[13] = t, t = e[11], e[11] = e[14], e[14] = t, this;
	}
	setPosition(e, t, n) {
		let r = this.elements;
		return e.isVector3 ? (r[12] = e.x, r[13] = e.y, r[14] = e.z) : (r[12] = e, r[13] = t, r[14] = n), this;
	}
	invert() {
		let e = this.elements, t = e[0], n = e[1], r = e[2], i = e[3], a = e[4], o = e[5], s = e[6], c = e[7], l = e[8], u = e[9], d = e[10], f = e[11], p = e[12], m = e[13], h = e[14], g = e[15], _ = t * o - n * a, v = t * s - r * a, y = t * c - i * a, b = n * s - r * o, x = n * c - i * o, S = r * c - i * s, C = l * m - u * p, w = l * h - d * p, T = l * g - f * p, E = u * h - d * m, D = u * g - f * m, O = d * g - f * h, k = _ * O - v * D + y * E + b * T - x * w + S * C;
		if (k === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
		let A = 1 / k;
		return e[0] = (o * O - s * D + c * E) * A, e[1] = (r * D - n * O - i * E) * A, e[2] = (m * S - h * x + g * b) * A, e[3] = (d * x - u * S - f * b) * A, e[4] = (s * T - a * O - c * w) * A, e[5] = (t * O - r * T + i * w) * A, e[6] = (h * y - p * S - g * v) * A, e[7] = (l * S - d * y + f * v) * A, e[8] = (a * D - o * T + c * C) * A, e[9] = (n * T - t * D - i * C) * A, e[10] = (p * x - m * y + g * _) * A, e[11] = (u * y - l * x - f * _) * A, e[12] = (o * w - a * E - s * C) * A, e[13] = (t * E - n * w + r * C) * A, e[14] = (m * v - p * b - h * _) * A, e[15] = (l * b - u * v + d * _) * A, this;
	}
	scale(e) {
		let t = this.elements, n = e.x, r = e.y, i = e.z;
		return t[0] *= n, t[4] *= r, t[8] *= i, t[1] *= n, t[5] *= r, t[9] *= i, t[2] *= n, t[6] *= r, t[10] *= i, t[3] *= n, t[7] *= r, t[11] *= i, this;
	}
	getMaxScaleOnAxis() {
		let e = this.elements, t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2], n = e[4] * e[4] + e[5] * e[5] + e[6] * e[6], r = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
		return Math.sqrt(Math.max(t, n, r));
	}
	makeTranslation(e, t, n) {
		return e.isVector3 ? this.set(1, 0, 0, e.x, 0, 1, 0, e.y, 0, 0, 1, e.z, 0, 0, 0, 1) : this.set(1, 0, 0, e, 0, 1, 0, t, 0, 0, 1, n, 0, 0, 0, 1), this;
	}
	makeRotationX(e) {
		let t = Math.cos(e), n = Math.sin(e);
		return this.set(1, 0, 0, 0, 0, t, -n, 0, 0, n, t, 0, 0, 0, 0, 1), this;
	}
	makeRotationY(e) {
		let t = Math.cos(e), n = Math.sin(e);
		return this.set(t, 0, n, 0, 0, 1, 0, 0, -n, 0, t, 0, 0, 0, 0, 1), this;
	}
	makeRotationZ(e) {
		let t = Math.cos(e), n = Math.sin(e);
		return this.set(t, -n, 0, 0, n, t, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
	}
	makeRotationAxis(e, t) {
		let n = Math.cos(t), r = Math.sin(t), i = 1 - n, a = e.x, o = e.y, s = e.z, c = i * a, l = i * o;
		return this.set(c * a + n, c * o - r * s, c * s + r * o, 0, c * o + r * s, l * o + n, l * s - r * a, 0, c * s - r * o, l * s + r * a, i * s * s + n, 0, 0, 0, 0, 1), this;
	}
	makeScale(e, t, n) {
		return this.set(e, 0, 0, 0, 0, t, 0, 0, 0, 0, n, 0, 0, 0, 0, 1), this;
	}
	makeShear(e, t, n, r, i, a) {
		return this.set(1, n, i, 0, e, 1, a, 0, t, r, 1, 0, 0, 0, 0, 1), this;
	}
	compose(e, t, n) {
		let r = this.elements, i = t._x, a = t._y, o = t._z, s = t._w, c = i + i, l = a + a, u = o + o, d = i * c, f = i * l, p = i * u, m = a * l, h = a * u, g = o * u, _ = s * c, v = s * l, y = s * u, b = n.x, x = n.y, S = n.z;
		return r[0] = (1 - (m + g)) * b, r[1] = (f + y) * b, r[2] = (p - v) * b, r[3] = 0, r[4] = (f - y) * x, r[5] = (1 - (d + g)) * x, r[6] = (h + _) * x, r[7] = 0, r[8] = (p + v) * S, r[9] = (h - _) * S, r[10] = (1 - (d + m)) * S, r[11] = 0, r[12] = e.x, r[13] = e.y, r[14] = e.z, r[15] = 1, this;
	}
	decompose(e, t, n) {
		let r = this.elements;
		e.x = r[12], e.y = r[13], e.z = r[14];
		let i = this.determinantAffine();
		if (i === 0) return n.set(1, 1, 1), t.identity(), this;
		let a = Pl.set(r[0], r[1], r[2]).length(), o = Pl.set(r[4], r[5], r[6]).length(), s = Pl.set(r[8], r[9], r[10]).length();
		i < 0 && (a = -a), Fl.copy(this);
		let c = 1 / a, l = 1 / o, u = 1 / s;
		return Fl.elements[0] *= c, Fl.elements[1] *= c, Fl.elements[2] *= c, Fl.elements[4] *= l, Fl.elements[5] *= l, Fl.elements[6] *= l, Fl.elements[8] *= u, Fl.elements[9] *= u, Fl.elements[10] *= u, t.setFromRotationMatrix(Fl), n.x = a, n.y = o, n.z = s, this;
	}
	makePerspective(e, t, n, r, i, a, o = wc, s = !1) {
		let c = this.elements, l = 2 * i / (t - e), u = 2 * i / (n - r), d = (t + e) / (t - e), f = (n + r) / (n - r), p, m;
		if (s) p = i / (a - i), m = a * i / (a - i);
		else if (o === 2e3) p = -(a + i) / (a - i), m = -2 * a * i / (a - i);
		else if (o === 2001) p = -a / (a - i), m = -a * i / (a - i);
		else throw Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + o);
		return c[0] = l, c[4] = 0, c[8] = d, c[12] = 0, c[1] = 0, c[5] = u, c[9] = f, c[13] = 0, c[2] = 0, c[6] = 0, c[10] = p, c[14] = m, c[3] = 0, c[7] = 0, c[11] = -1, c[15] = 0, this;
	}
	makeOrthographic(e, t, n, r, i, a, o = wc, s = !1) {
		let c = this.elements, l = 2 / (t - e), u = 2 / (n - r), d = -(t + e) / (t - e), f = -(n + r) / (n - r), p, m;
		if (s) p = 1 / (a - i), m = a / (a - i);
		else if (o === 2e3) p = -2 / (a - i), m = -(a + i) / (a - i);
		else if (o === 2001) p = -1 / (a - i), m = -i / (a - i);
		else throw Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + o);
		return c[0] = l, c[4] = 0, c[8] = 0, c[12] = d, c[1] = 0, c[5] = u, c[9] = 0, c[13] = f, c[2] = 0, c[6] = 0, c[10] = p, c[14] = m, c[3] = 0, c[7] = 0, c[11] = 0, c[15] = 1, this;
	}
	equals(e) {
		let t = this.elements, n = e.elements;
		for (let e = 0; e < 16; e++) if (t[e] !== n[e]) return !1;
		return !0;
	}
	fromArray(e, t = 0) {
		for (let n = 0; n < 16; n++) this.elements[n] = e[n + t];
		return this;
	}
	toArray(e = [], t = 0) {
		let n = this.elements;
		return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e[t + 9] = n[9], e[t + 10] = n[10], e[t + 11] = n[11], e[t + 12] = n[12], e[t + 13] = n[13], e[t + 14] = n[14], e[t + 15] = n[15], e;
	}
}, Pl = /*@__PURE__*/ new Z(), Fl = /*@__PURE__*/ new Nl(), Il = /*@__PURE__*/ new Z(0, 0, 0), Ll = /*@__PURE__*/ new Z(1, 1, 1), Rl = /*@__PURE__*/ new Z(), zl = /*@__PURE__*/ new Z(), Bl = /*@__PURE__*/ new Z(), Vl = /*@__PURE__*/ new Nl(), Hl = /*@__PURE__*/ new ul(), Ul = class e {
	constructor(t = 0, n = 0, r = 0, i = e.DEFAULT_ORDER) {
		this.isEuler = !0, this._x = t, this._y = n, this._z = r, this._order = i;
	}
	get x() {
		return this._x;
	}
	set x(e) {
		this._x = e, this._onChangeCallback();
	}
	get y() {
		return this._y;
	}
	set y(e) {
		this._y = e, this._onChangeCallback();
	}
	get z() {
		return this._z;
	}
	set z(e) {
		this._z = e, this._onChangeCallback();
	}
	get order() {
		return this._order;
	}
	set order(e) {
		this._order = e, this._onChangeCallback();
	}
	set(e, t, n, r = this._order) {
		return this._x = e, this._y = t, this._z = n, this._order = r, this._onChangeCallback(), this;
	}
	clone() {
		return new this.constructor(this._x, this._y, this._z, this._order);
	}
	copy(e) {
		return this._x = e._x, this._y = e._y, this._z = e._z, this._order = e._order, this._onChangeCallback(), this;
	}
	setFromRotationMatrix(e, t = this._order, n = !0) {
		let r = e.elements, i = r[0], a = r[4], o = r[8], s = r[1], c = r[5], l = r[9], u = r[2], d = r[6], f = r[10];
		switch (t) {
			case "XYZ":
				this._y = Math.asin(Vc(o, -1, 1)), Math.abs(o) < .9999999 ? (this._x = Math.atan2(-l, f), this._z = Math.atan2(-a, i)) : (this._x = Math.atan2(d, c), this._z = 0);
				break;
			case "YXZ":
				this._x = Math.asin(-Vc(l, -1, 1)), Math.abs(l) < .9999999 ? (this._y = Math.atan2(o, f), this._z = Math.atan2(s, c)) : (this._y = Math.atan2(-u, i), this._z = 0);
				break;
			case "ZXY":
				this._x = Math.asin(Vc(d, -1, 1)), Math.abs(d) < .9999999 ? (this._y = Math.atan2(-u, f), this._z = Math.atan2(-a, c)) : (this._y = 0, this._z = Math.atan2(s, i));
				break;
			case "ZYX":
				this._y = Math.asin(-Vc(u, -1, 1)), Math.abs(u) < .9999999 ? (this._x = Math.atan2(d, f), this._z = Math.atan2(s, i)) : (this._x = 0, this._z = Math.atan2(-a, c));
				break;
			case "YZX":
				this._z = Math.asin(Vc(s, -1, 1)), Math.abs(s) < .9999999 ? (this._x = Math.atan2(-l, c), this._y = Math.atan2(-u, i)) : (this._x = 0, this._y = Math.atan2(o, f));
				break;
			case "XZY":
				this._z = Math.asin(-Vc(a, -1, 1)), Math.abs(a) < .9999999 ? (this._x = Math.atan2(d, c), this._y = Math.atan2(o, i)) : (this._x = Math.atan2(-l, f), this._y = 0);
				break;
			default: J("Euler: .setFromRotationMatrix() encountered an unknown order: " + t);
		}
		return this._order = t, n === !0 && this._onChangeCallback(), this;
	}
	setFromQuaternion(e, t, n) {
		return Vl.makeRotationFromQuaternion(e), this.setFromRotationMatrix(Vl, t, n);
	}
	setFromVector3(e, t = this._order) {
		return this.set(e.x, e.y, e.z, t);
	}
	reorder(e) {
		return Hl.setFromEuler(this), this.setFromQuaternion(Hl, e);
	}
	equals(e) {
		return e._x === this._x && e._y === this._y && e._z === this._z && e._order === this._order;
	}
	fromArray(e) {
		return this._x = e[0], this._y = e[1], this._z = e[2], e[3] !== void 0 && (this._order = e[3]), this._onChangeCallback(), this;
	}
	toArray(e = [], t = 0) {
		return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._order, e;
	}
	_onChange(e) {
		return this._onChangeCallback = e, this;
	}
	_onChangeCallback() {}
	*[Symbol.iterator]() {
		yield this._x, yield this._y, yield this._z, yield this._order;
	}
};
Ul.DEFAULT_ORDER = "XYZ";
var Wl = class {
	constructor() {
		this.mask = 1;
	}
	set(e) {
		this.mask = 1 << e >>> 0;
	}
	enable(e) {
		this.mask |= 1 << e;
	}
	enableAll() {
		this.mask = -1;
	}
	toggle(e) {
		this.mask ^= 1 << e;
	}
	disable(e) {
		this.mask &= ~(1 << e);
	}
	disableAll() {
		this.mask = 0;
	}
	test(e) {
		return (this.mask & e.mask) !== 0;
	}
	isEnabled(e) {
		return !!(this.mask & 1 << e);
	}
}, Gl = 0, Kl = /*@__PURE__*/ new Z(), ql = /*@__PURE__*/ new ul(), Jl = /*@__PURE__*/ new Nl(), Yl = /*@__PURE__*/ new Z(), Xl = /*@__PURE__*/ new Z(), Zl = /*@__PURE__*/ new Z(), Ql = /*@__PURE__*/ new ul(), $l = /*@__PURE__*/ new Z(1, 0, 0), eu = /*@__PURE__*/ new Z(0, 1, 0), tu = /*@__PURE__*/ new Z(0, 0, 1), nu = { type: "added" }, ru = { type: "removed" }, iu = {
	type: "childadded",
	child: null
}, au = {
	type: "childremoved",
	child: null
}, ou = class e extends Fc {
	constructor() {
		super(), this.isObject3D = !0, Object.defineProperty(this, "id", { value: Gl++ }), this.uuid = Bc(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = e.DEFAULT_UP.clone();
		let t = new Z(), n = new Ul(), r = new ul(), i = new Z(1, 1, 1);
		function a() {
			r.setFromEuler(n, !1);
		}
		function o() {
			n.setFromQuaternion(r, void 0, !1);
		}
		n._onChange(a), r._onChange(o), Object.defineProperties(this, {
			position: {
				configurable: !0,
				enumerable: !0,
				value: t
			},
			rotation: {
				configurable: !0,
				enumerable: !0,
				value: n
			},
			quaternion: {
				configurable: !0,
				enumerable: !0,
				value: r
			},
			scale: {
				configurable: !0,
				enumerable: !0,
				value: i
			},
			modelViewMatrix: { value: new Nl() },
			normalMatrix: { value: new Q() }
		}), this.matrix = new Nl(), this.matrixWorld = new Nl(), this.matrixAutoUpdate = e.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldAutoUpdate = e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.matrixWorldNeedsUpdate = !1, this.layers = new Wl(), this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.customDepthMaterial = void 0, this.customDistanceMaterial = void 0, this.static = !1, this.userData = {}, this.pivot = null;
	}
	onBeforeShadow() {}
	onAfterShadow() {}
	onBeforeRender() {}
	onAfterRender() {}
	applyMatrix4(e) {
		this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(e), this.matrix.decompose(this.position, this.quaternion, this.scale), this.pivot !== null && this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot);
	}
	applyQuaternion(e) {
		return this.quaternion.premultiply(e), this;
	}
	setRotationFromAxisAngle(e, t) {
		this.quaternion.setFromAxisAngle(e, t);
	}
	setRotationFromEuler(e) {
		this.quaternion.setFromEuler(e, !0);
	}
	setRotationFromMatrix(e) {
		this.quaternion.setFromRotationMatrix(e);
	}
	setRotationFromQuaternion(e) {
		this.quaternion.copy(e);
	}
	rotateOnAxis(e, t) {
		return ql.setFromAxisAngle(e, t), this.quaternion.multiply(ql), this;
	}
	rotateOnWorldAxis(e, t) {
		return ql.setFromAxisAngle(e, t), this.quaternion.premultiply(ql), this;
	}
	rotateX(e) {
		return this.rotateOnAxis($l, e);
	}
	rotateY(e) {
		return this.rotateOnAxis(eu, e);
	}
	rotateZ(e) {
		return this.rotateOnAxis(tu, e);
	}
	translateOnAxis(e, t) {
		return Kl.copy(e).applyQuaternion(this.quaternion), this.position.add(Kl.multiplyScalar(t)), this;
	}
	translateX(e) {
		return this.translateOnAxis($l, e);
	}
	translateY(e) {
		return this.translateOnAxis(eu, e);
	}
	translateZ(e) {
		return this.translateOnAxis(tu, e);
	}
	localToWorld(e) {
		return this.updateWorldMatrix(!0, !1), e.applyMatrix4(this.matrixWorld);
	}
	worldToLocal(e) {
		return this.updateWorldMatrix(!0, !1), e.applyMatrix4(Jl.copy(this.matrixWorld).invert());
	}
	lookAt(e, t, n) {
		e.isVector3 ? Yl.copy(e) : Yl.set(e, t, n);
		let r = this.parent;
		this.updateWorldMatrix(!0, !1), Xl.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? Jl.lookAt(Xl, Yl, this.up) : Jl.lookAt(Yl, Xl, this.up), this.quaternion.setFromRotationMatrix(Jl), r && (Jl.extractRotation(r.matrixWorld), ql.setFromRotationMatrix(Jl), this.quaternion.premultiply(ql.invert()));
	}
	add(e) {
		if (arguments.length > 1) {
			for (let e = 0; e < arguments.length; e++) this.add(arguments[e]);
			return this;
		}
		return e === this ? (Y("Object3D.add: object can't be added as a child of itself.", e), this) : (e && e.isObject3D ? (e.removeFromParent(), e.parent = this, this.children.push(e), e.dispatchEvent(nu), iu.child = e, this.dispatchEvent(iu), iu.child = null) : Y("Object3D.add: object not an instance of THREE.Object3D.", e), this);
	}
	remove(e) {
		if (arguments.length > 1) {
			for (let e = 0; e < arguments.length; e++) this.remove(arguments[e]);
			return this;
		}
		let t = this.children.indexOf(e);
		return t !== -1 && (e.parent = null, this.children.splice(t, 1), e.dispatchEvent(ru), au.child = e, this.dispatchEvent(au), au.child = null), this;
	}
	removeFromParent() {
		let e = this.parent;
		return e !== null && e.remove(this), this;
	}
	clear() {
		return this.remove(...this.children);
	}
	attach(e) {
		return this.updateWorldMatrix(!0, !1), Jl.copy(this.matrixWorld).invert(), e.parent !== null && (e.parent.updateWorldMatrix(!0, !1), Jl.multiply(e.parent.matrixWorld)), e.applyMatrix4(Jl), e.removeFromParent(), e.parent = this, this.children.push(e), e.updateWorldMatrix(!1, !0), e.dispatchEvent(nu), iu.child = e, this.dispatchEvent(iu), iu.child = null, this;
	}
	getObjectById(e) {
		return this.getObjectByProperty("id", e);
	}
	getObjectByName(e) {
		return this.getObjectByProperty("name", e);
	}
	getObjectByProperty(e, t) {
		if (this[e] === t) return this;
		for (let n = 0, r = this.children.length; n < r; n++) {
			let r = this.children[n].getObjectByProperty(e, t);
			if (r !== void 0) return r;
		}
	}
	getObjectsByProperty(e, t, n = []) {
		this[e] === t && n.push(this);
		let r = this.children;
		for (let i = 0, a = r.length; i < a; i++) r[i].getObjectsByProperty(e, t, n);
		return n;
	}
	getWorldPosition(e) {
		return this.updateWorldMatrix(!0, !1), e.setFromMatrixPosition(this.matrixWorld);
	}
	getWorldQuaternion(e) {
		return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Xl, e, Zl), e;
	}
	getWorldScale(e) {
		return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Xl, Ql, e), e;
	}
	getWorldDirection(e) {
		this.updateWorldMatrix(!0, !1);
		let t = this.matrixWorld.elements;
		return e.set(t[8], t[9], t[10]).normalize();
	}
	raycast() {}
	intersectsFrustum() {
		return !0;
	}
	traverse(e) {
		e(this);
		let t = this.children;
		for (let n = 0, r = t.length; n < r; n++) t[n].traverse(e);
	}
	traverseVisible(e) {
		if (this.visible === !1) return;
		e(this);
		let t = this.children;
		for (let n = 0, r = t.length; n < r; n++) t[n].traverseVisible(e);
	}
	traverseAncestors(e) {
		let t = this.parent;
		t !== null && (e(t), t.traverseAncestors(e));
	}
	updateMatrix() {
		this.matrix.compose(this.position, this.quaternion, this.scale);
		let e = this.pivot;
		if (e !== null) {
			let t = e.x, n = e.y, r = e.z, i = this.matrix.elements;
			i[12] += t - i[0] * t - i[4] * n - i[8] * r, i[13] += n - i[1] * t - i[5] * n - i[9] * r, i[14] += r - i[2] * t - i[6] * n - i[10] * r;
		}
		this.matrixWorldNeedsUpdate = !0;
	}
	updateMatrixWorld(e) {
		this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || e) && (this.matrixWorldAutoUpdate === !0 && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), this.matrixWorldNeedsUpdate = !1, e = !0);
		let t = this.children;
		for (let n = 0, r = t.length; n < r; n++) t[n].updateMatrixWorld(e);
	}
	updateWorldMatrix(e, t, n = !1) {
		let r = this.parent;
		if (e === !0 && r !== null && r.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || n) && (this.matrixWorldAutoUpdate === !0 && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), this.matrixWorldNeedsUpdate = !1, n = !0), t === !0) {
			let e = this.children;
			for (let t = 0, r = e.length; t < r; t++) e[t].updateWorldMatrix(!1, !0, n);
		}
	}
	toJSON(e) {
		let t = e === void 0 || typeof e == "string", n = {};
		t && (e = {
			geometries: {},
			materials: {},
			textures: {},
			images: {},
			shapes: {},
			skeletons: {},
			animations: {},
			nodes: {}
		}, n.metadata = {
			version: 4.7,
			type: "Object",
			generator: "Object3D.toJSON"
		});
		let r = {};
		r.uuid = this.uuid, r.type = this.type, r.name = this.name, r.castShadow = this.castShadow, r.receiveShadow = this.receiveShadow, r.visible = this.visible, r.frustumCulled = this.frustumCulled, r.renderOrder = this.renderOrder, r.static = this.static, r.matrixAutoUpdate = this.matrixAutoUpdate, Object.keys(this.userData).length > 0 && (r.userData = this.userData), r.layers = this.layers.mask, r.matrix = this.matrix.toArray(), r.up = this.up.toArray(), this.pivot !== null && (r.pivot = this.pivot.toArray()), this.morphTargetDictionary !== void 0 && (r.morphTargetDictionary = Object.assign({}, this.morphTargetDictionary)), this.morphTargetInfluences !== void 0 && (r.morphTargetInfluences = this.morphTargetInfluences.slice()), this.isInstancedMesh && (r.type = "InstancedMesh", r.count = this.count, r.instanceMatrix = this.instanceMatrix.toJSON(), this.instanceColor !== null && (r.instanceColor = this.instanceColor.toJSON())), this.isBatchedMesh && (r.type = "BatchedMesh", r.perObjectFrustumCulled = this.perObjectFrustumCulled, r.sortObjects = this.sortObjects, r.drawRanges = this._drawRanges, r.reservedRanges = this._reservedRanges, r.geometryInfo = this._geometryInfo.map((e) => ({
			...e,
			boundingBox: e.boundingBox ? e.boundingBox.toJSON() : void 0,
			boundingSphere: e.boundingSphere ? e.boundingSphere.toJSON() : void 0
		})), r.instanceInfo = this._instanceInfo.map((e) => ({ ...e })), r.availableInstanceIds = this._availableInstanceIds.slice(), r.availableGeometryIds = this._availableGeometryIds.slice(), r.nextIndexStart = this._nextIndexStart, r.nextVertexStart = this._nextVertexStart, r.geometryCount = this._geometryCount, r.maxInstanceCount = this._maxInstanceCount, r.maxVertexCount = this._maxVertexCount, r.maxIndexCount = this._maxIndexCount, r.geometryInitialized = this._geometryInitialized, r.matricesTexture = this._matricesTexture.toJSON(e), r.indirectTexture = this._indirectTexture.toJSON(e), this._colorsTexture !== null && (r.colorsTexture = this._colorsTexture.toJSON(e)), this.boundingSphere !== null && (r.boundingSphere = this.boundingSphere.toJSON()), this.boundingBox !== null && (r.boundingBox = this.boundingBox.toJSON()));
		function i(t, n) {
			return t[n.uuid] === void 0 && (t[n.uuid] = n.toJSON(e)), n.uuid;
		}
		if (this.isScene) this.background && (this.background.isColor ? r.background = this.background.toJSON() : this.background.isTexture && (r.background = this.background.toJSON(e).uuid)), this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== !0 && (r.environment = this.environment.toJSON(e).uuid);
		else if (this.isMesh || this.isLine || this.isPoints) {
			r.geometry = i(e.geometries, this.geometry);
			let t = this.geometry.parameters;
			if (t !== void 0 && t.shapes !== void 0) {
				let n = t.shapes;
				if (Array.isArray(n)) for (let t = 0, r = n.length; t < r; t++) {
					let r = n[t];
					i(e.shapes, r);
				}
				else i(e.shapes, n);
			}
		}
		if (this.isSkinnedMesh && (r.bindMode = this.bindMode, r.bindMatrix = this.bindMatrix.toArray(), this.skeleton !== void 0 && (i(e.skeletons, this.skeleton), r.skeleton = this.skeleton.uuid)), this.material !== void 0) {
			if (Array.isArray(this.material)) {
				let t = [];
				for (let n = 0, r = this.material.length; n < r; n++) t.push(i(e.materials, this.material[n]));
				r.material = t;
			} else r.material = i(e.materials, this.material);
		}
		if (this.children.length > 0) {
			r.children = [];
			for (let t = 0; t < this.children.length; t++) r.children.push(this.children[t].toJSON(e).object);
		}
		if (this.animations.length > 0) {
			r.animations = [];
			for (let t = 0; t < this.animations.length; t++) {
				let n = this.animations[t];
				r.animations.push(i(e.animations, n));
			}
		}
		if (t) {
			let t = a(e.geometries), r = a(e.materials), i = a(e.textures), o = a(e.images), s = a(e.shapes), c = a(e.skeletons), l = a(e.animations), u = a(e.nodes);
			t.length > 0 && (n.geometries = t), r.length > 0 && (n.materials = r), i.length > 0 && (n.textures = i), o.length > 0 && (n.images = o), s.length > 0 && (n.shapes = s), c.length > 0 && (n.skeletons = c), l.length > 0 && (n.animations = l), u.length > 0 && (n.nodes = u);
		}
		return n.object = r, n;
		function a(e) {
			let t = [];
			for (let n in e) {
				let r = e[n];
				delete r.metadata, t.push(r);
			}
			return t;
		}
	}
	clone(e) {
		return new this.constructor().copy(this, e);
	}
	copy(e, t = !0) {
		if (this.name = e.name, this.up.copy(e.up), this.position.copy(e.position), this.rotation.order = e.rotation.order, this.quaternion.copy(e.quaternion), this.scale.copy(e.scale), this.pivot = e.pivot === null ? null : e.pivot.clone(), this.matrix.copy(e.matrix), this.matrixWorld.copy(e.matrixWorld), this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrixWorldAutoUpdate = e.matrixWorldAutoUpdate, this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate, this.layers.mask = e.layers.mask, this.visible = e.visible, this.castShadow = e.castShadow, this.receiveShadow = e.receiveShadow, this.frustumCulled = e.frustumCulled, this.renderOrder = e.renderOrder, this.static = e.static, this.animations = e.animations.slice(), this.userData = JSON.parse(JSON.stringify(e.userData)), t === !0) for (let t = 0; t < e.children.length; t++) {
			let n = e.children[t];
			this.add(n.clone());
		}
		return this;
	}
	dispose() {
		this.dispatchEvent({ type: "dispose" });
	}
};
ou.DEFAULT_UP = /*@__PURE__*/ new Z(0, 1, 0), ou.DEFAULT_MATRIX_AUTO_UPDATE = !0, ou.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0;
var su = class extends ou {
	constructor() {
		super(), this.isGroup = !0, this.type = "Group";
	}
}, cu = { type: "move" }, lu = class {
	constructor() {
		this._targetRay = null, this._grip = null, this._hand = null;
	}
	getHandSpace() {
		return this._hand === null && (this._hand = new su(), this._hand.matrixAutoUpdate = !1, this._hand.visible = !1, this._hand.joints = {}, this._hand.inputState = { pinching: !1 }), this._hand;
	}
	getTargetRaySpace() {
		return this._targetRay === null && (this._targetRay = new su(), this._targetRay.matrixAutoUpdate = !1, this._targetRay.visible = !1, this._targetRay.hasLinearVelocity = !1, this._targetRay.linearVelocity = new Z(), this._targetRay.hasAngularVelocity = !1, this._targetRay.angularVelocity = new Z()), this._targetRay;
	}
	getGripSpace() {
		return this._grip === null && (this._grip = new su(), this._grip.matrixAutoUpdate = !1, this._grip.visible = !1, this._grip.hasLinearVelocity = !1, this._grip.linearVelocity = new Z(), this._grip.hasAngularVelocity = !1, this._grip.angularVelocity = new Z(), this._grip.eventsEnabled = !1), this._grip;
	}
	dispatchEvent(e) {
		return this._targetRay !== null && this._targetRay.dispatchEvent(e), this._grip !== null && this._grip.dispatchEvent(e), this._hand !== null && this._hand.dispatchEvent(e), this;
	}
	connect(e) {
		if (e && e.hand) {
			let t = this._hand;
			if (t) for (let n of e.hand.values()) this._getHandJoint(t, n);
		}
		return this.dispatchEvent({
			type: "connected",
			data: e
		}), this;
	}
	disconnect(e) {
		return this.dispatchEvent({
			type: "disconnected",
			data: e
		}), this._targetRay !== null && (this._targetRay.visible = !1), this._grip !== null && (this._grip.visible = !1), this._hand !== null && (this._hand.visible = !1), this;
	}
	update(e, t, n) {
		let r = null, i = null, a = null, o = this._targetRay, s = this._grip, c = this._hand;
		if (e && t.session.visibilityState !== "visible-blurred") {
			if (c && e.hand) {
				a = !0;
				for (let r of e.hand.values()) {
					let e = t.getJointPose(r, n), i = this._getHandJoint(c, r);
					e !== null && (i.matrix.fromArray(e.transform.matrix), i.matrix.decompose(i.position, i.quaternion, i.scale), i.matrixWorldNeedsUpdate = !0, i.jointRadius = e.radius), i.visible = e !== null;
				}
				let r = c.joints["index-finger-tip"], i = c.joints["thumb-tip"], o = r.position.distanceTo(i.position);
				c.inputState.pinching && o > .025 ? (c.inputState.pinching = !1, this.dispatchEvent({
					type: "pinchend",
					handedness: e.handedness,
					target: this
				})) : !c.inputState.pinching && o <= .015 && (c.inputState.pinching = !0, this.dispatchEvent({
					type: "pinchstart",
					handedness: e.handedness,
					target: this
				}));
			} else s !== null && e.gripSpace && (i = t.getPose(e.gripSpace, n), i !== null && (s.matrix.fromArray(i.transform.matrix), s.matrix.decompose(s.position, s.quaternion, s.scale), s.matrixWorldNeedsUpdate = !0, i.linearVelocity ? (s.hasLinearVelocity = !0, s.linearVelocity.copy(i.linearVelocity)) : s.hasLinearVelocity = !1, i.angularVelocity ? (s.hasAngularVelocity = !0, s.angularVelocity.copy(i.angularVelocity)) : s.hasAngularVelocity = !1, s.eventsEnabled && s.dispatchEvent({
				type: "gripUpdated",
				data: e,
				target: this
			})));
			o !== null && (r = t.getPose(e.targetRaySpace, n), r === null && i !== null && (r = i), r !== null && (o.matrix.fromArray(r.transform.matrix), o.matrix.decompose(o.position, o.quaternion, o.scale), o.matrixWorldNeedsUpdate = !0, r.linearVelocity ? (o.hasLinearVelocity = !0, o.linearVelocity.copy(r.linearVelocity)) : o.hasLinearVelocity = !1, r.angularVelocity ? (o.hasAngularVelocity = !0, o.angularVelocity.copy(r.angularVelocity)) : o.hasAngularVelocity = !1, this.dispatchEvent(cu)));
		}
		return o !== null && (o.visible = r !== null), s !== null && (s.visible = i !== null), c !== null && (c.visible = a !== null), this;
	}
	_getHandJoint(e, t) {
		if (e.joints[t.jointName] === void 0) {
			let n = new su();
			n.matrixAutoUpdate = !1, n.visible = !1, e.joints[t.jointName] = n, e.add(n);
		}
		return e.joints[t.jointName];
	}
}, uu = {
	aliceblue: 15792383,
	antiquewhite: 16444375,
	aqua: 65535,
	aquamarine: 8388564,
	azure: 15794175,
	beige: 16119260,
	bisque: 16770244,
	black: 0,
	blanchedalmond: 16772045,
	blue: 255,
	blueviolet: 9055202,
	brown: 10824234,
	burlywood: 14596231,
	cadetblue: 6266528,
	chartreuse: 8388352,
	chocolate: 13789470,
	coral: 16744272,
	cornflowerblue: 6591981,
	cornsilk: 16775388,
	crimson: 14423100,
	cyan: 65535,
	darkblue: 139,
	darkcyan: 35723,
	darkgoldenrod: 12092939,
	darkgray: 11119017,
	darkgreen: 25600,
	darkgrey: 11119017,
	darkkhaki: 12433259,
	darkmagenta: 9109643,
	darkolivegreen: 5597999,
	darkorange: 16747520,
	darkorchid: 10040012,
	darkred: 9109504,
	darksalmon: 15308410,
	darkseagreen: 9419919,
	darkslateblue: 4734347,
	darkslategray: 3100495,
	darkslategrey: 3100495,
	darkturquoise: 52945,
	darkviolet: 9699539,
	deeppink: 16716947,
	deepskyblue: 49151,
	dimgray: 6908265,
	dimgrey: 6908265,
	dodgerblue: 2003199,
	firebrick: 11674146,
	floralwhite: 16775920,
	forestgreen: 2263842,
	fuchsia: 16711935,
	gainsboro: 14474460,
	ghostwhite: 16316671,
	gold: 16766720,
	goldenrod: 14329120,
	gray: 8421504,
	green: 32768,
	greenyellow: 11403055,
	grey: 8421504,
	honeydew: 15794160,
	hotpink: 16738740,
	indianred: 13458524,
	indigo: 4915330,
	ivory: 16777200,
	khaki: 15787660,
	lavender: 15132410,
	lavenderblush: 16773365,
	lawngreen: 8190976,
	lemonchiffon: 16775885,
	lightblue: 11393254,
	lightcoral: 15761536,
	lightcyan: 14745599,
	lightgoldenrodyellow: 16448210,
	lightgray: 13882323,
	lightgreen: 9498256,
	lightgrey: 13882323,
	lightpink: 16758465,
	lightsalmon: 16752762,
	lightseagreen: 2142890,
	lightskyblue: 8900346,
	lightslategray: 7833753,
	lightslategrey: 7833753,
	lightsteelblue: 11584734,
	lightyellow: 16777184,
	lime: 65280,
	limegreen: 3329330,
	linen: 16445670,
	magenta: 16711935,
	maroon: 8388608,
	mediumaquamarine: 6737322,
	mediumblue: 205,
	mediumorchid: 12211667,
	mediumpurple: 9662683,
	mediumseagreen: 3978097,
	mediumslateblue: 8087790,
	mediumspringgreen: 64154,
	mediumturquoise: 4772300,
	mediumvioletred: 13047173,
	midnightblue: 1644912,
	mintcream: 16121850,
	mistyrose: 16770273,
	moccasin: 16770229,
	navajowhite: 16768685,
	navy: 128,
	oldlace: 16643558,
	olive: 8421376,
	olivedrab: 7048739,
	orange: 16753920,
	orangered: 16729344,
	orchid: 14315734,
	palegoldenrod: 15657130,
	palegreen: 10025880,
	paleturquoise: 11529966,
	palevioletred: 14381203,
	papayawhip: 16773077,
	peachpuff: 16767673,
	peru: 13468991,
	pink: 16761035,
	plum: 14524637,
	powderblue: 11591910,
	purple: 8388736,
	rebeccapurple: 6697881,
	red: 16711680,
	rosybrown: 12357519,
	royalblue: 4286945,
	saddlebrown: 9127187,
	salmon: 16416882,
	sandybrown: 16032864,
	seagreen: 3050327,
	seashell: 16774638,
	sienna: 10506797,
	silver: 12632256,
	skyblue: 8900331,
	slateblue: 6970061,
	slategray: 7372944,
	slategrey: 7372944,
	snow: 16775930,
	springgreen: 65407,
	steelblue: 4620980,
	tan: 13808780,
	teal: 32896,
	thistle: 14204888,
	tomato: 16737095,
	turquoise: 4251856,
	violet: 15631086,
	wheat: 16113331,
	white: 16777215,
	whitesmoke: 16119285,
	yellow: 16776960,
	yellowgreen: 10145074
}, du = {
	h: 0,
	s: 0,
	l: 0
}, fu = {
	h: 0,
	s: 0,
	l: 0
};
function pu(e, t, n) {
	return n < 0 && (n += 1), n > 1 && --n, n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * 6 * (2 / 3 - n) : e;
}
var mu = class {
	constructor(e, t, n) {
		return this.isColor = !0, this.r = 1, this.g = 1, this.b = 1, this.set(e, t, n);
	}
	set(e, t, n) {
		if (t === void 0 && n === void 0) {
			let t = e;
			t && t.isColor ? this.copy(t) : typeof t == "number" ? this.setHex(t) : typeof t == "string" && this.setStyle(t);
		} else this.setRGB(e, t, n);
		return this;
	}
	setScalar(e) {
		return this.r = e, this.g = e, this.b = e, this;
	}
	setHex(e, t = vc) {
		return e = Math.floor(e), this.r = (e >> 16 & 255) / 255, this.g = (e >> 8 & 255) / 255, this.b = (e & 255) / 255, _l.colorSpaceToWorking(this, t), this;
	}
	setRGB(e, t, n, r = _l.workingColorSpace) {
		return this.r = e, this.g = t, this.b = n, _l.colorSpaceToWorking(this, r), this;
	}
	setHSL(e, t, n, r = _l.workingColorSpace) {
		if (e = Hc(e, 1), t = Vc(t, 0, 1), n = Vc(n, 0, 1), t === 0) this.r = this.g = this.b = n;
		else {
			let r = n <= .5 ? n * (1 + t) : n + t - n * t, i = 2 * n - r;
			this.r = pu(i, r, e + 1 / 3), this.g = pu(i, r, e), this.b = pu(i, r, e - 1 / 3);
		}
		return _l.colorSpaceToWorking(this, r), this;
	}
	setStyle(e, t = vc) {
		function n(t) {
			t !== void 0 && parseFloat(t) < 1 && J("Color: Alpha component of " + e + " will be ignored.");
		}
		let r;
		if (r = /^(\w+)\(([^\)]*)\)/.exec(e)) {
			let i, a = r[1], o = r[2];
			switch (a) {
				case "rgb":
				case "rgba":
					if (i = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o)) return n(i[4]), this.setRGB(Math.min(255, parseInt(i[1], 10)) / 255, Math.min(255, parseInt(i[2], 10)) / 255, Math.min(255, parseInt(i[3], 10)) / 255, t);
					if (i = /^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o)) return n(i[4]), this.setRGB(Math.min(100, parseFloat(i[1])) / 100, Math.min(100, parseFloat(i[2])) / 100, Math.min(100, parseFloat(i[3])) / 100, t);
					break;
				case "hsl":
				case "hsla":
					if (i = /^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o)) return n(i[4]), this.setHSL(parseFloat(i[1]) / 360, parseFloat(i[2]) / 100, parseFloat(i[3]) / 100, t);
					break;
				default: J("Color: Unknown color model " + e);
			}
		} else if (r = /^\#([A-Fa-f\d]+)$/.exec(e)) {
			let n = r[1], i = n.length;
			if (i === 3) return this.setRGB(parseInt(n.charAt(0), 16) / 15, parseInt(n.charAt(1), 16) / 15, parseInt(n.charAt(2), 16) / 15, t);
			if (i === 6) return this.setHex(parseInt(n, 16), t);
			J("Color: Invalid hex color " + e);
		} else if (e && e.length > 0) return this.setColorName(e, t);
		return this;
	}
	setColorName(e, t = vc) {
		let n = uu[e.toLowerCase()];
		return n === void 0 ? J("Color: Unknown color " + e) : this.setHex(n, t), this;
	}
	clone() {
		return new this.constructor(this.r, this.g, this.b);
	}
	copy(e) {
		return this.r = e.r, this.g = e.g, this.b = e.b, this;
	}
	copySRGBToLinear(e) {
		return this.r = vl(e.r), this.g = vl(e.g), this.b = vl(e.b), this;
	}
	copyLinearToSRGB(e) {
		return this.r = yl(e.r), this.g = yl(e.g), this.b = yl(e.b), this;
	}
	convertSRGBToLinear() {
		return this.copySRGBToLinear(this), this;
	}
	convertLinearToSRGB() {
		return this.copyLinearToSRGB(this), this;
	}
	getHex(e = vc) {
		return _l.workingToColorSpace(hu.copy(this), e), Math.round(Vc(hu.r * 255, 0, 255)) * 65536 + Math.round(Vc(hu.g * 255, 0, 255)) * 256 + Math.round(Vc(hu.b * 255, 0, 255));
	}
	getHexString(e = vc) {
		return ("000000" + this.getHex(e).toString(16)).slice(-6);
	}
	getHSL(e, t = _l.workingColorSpace) {
		_l.workingToColorSpace(hu.copy(this), t);
		let n = hu.r, r = hu.g, i = hu.b, a = Math.max(n, r, i), o = Math.min(n, r, i), s, c, l = (o + a) / 2;
		if (o === a) s = 0, c = 0;
		else {
			let e = a - o;
			switch (c = l <= .5 ? e / (a + o) : e / (2 - a - o), a) {
				case n:
					s = (r - i) / e + (r < i ? 6 : 0);
					break;
				case r:
					s = (i - n) / e + 2;
					break;
				case i: s = (n - r) / e + 4;
			}
			s /= 6;
		}
		return e.h = s, e.s = c, e.l = l, e;
	}
	getRGB(e, t = _l.workingColorSpace) {
		return _l.workingToColorSpace(hu.copy(this), t), e.r = hu.r, e.g = hu.g, e.b = hu.b, e;
	}
	getStyle(e = vc) {
		_l.workingToColorSpace(hu.copy(this), e);
		let t = hu.r, n = hu.g, r = hu.b;
		return e === "srgb" ? `rgb(${Math.round(t * 255)},${Math.round(n * 255)},${Math.round(r * 255)})` : `color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`;
	}
	offsetHSL(e, t, n) {
		return this.getHSL(du), this.setHSL(du.h + e, du.s + t, du.l + n);
	}
	add(e) {
		return this.r += e.r, this.g += e.g, this.b += e.b, this;
	}
	addColors(e, t) {
		return this.r = e.r + t.r, this.g = e.g + t.g, this.b = e.b + t.b, this;
	}
	addScalar(e) {
		return this.r += e, this.g += e, this.b += e, this;
	}
	sub(e) {
		return this.r = Math.max(0, this.r - e.r), this.g = Math.max(0, this.g - e.g), this.b = Math.max(0, this.b - e.b), this;
	}
	multiply(e) {
		return this.r *= e.r, this.g *= e.g, this.b *= e.b, this;
	}
	multiplyScalar(e) {
		return this.r *= e, this.g *= e, this.b *= e, this;
	}
	lerp(e, t) {
		return this.r += (e.r - this.r) * t, this.g += (e.g - this.g) * t, this.b += (e.b - this.b) * t, this;
	}
	lerpColors(e, t, n) {
		return this.r = e.r + (t.r - e.r) * n, this.g = e.g + (t.g - e.g) * n, this.b = e.b + (t.b - e.b) * n, this;
	}
	lerpHSL(e, t) {
		this.getHSL(du), e.getHSL(fu);
		let n = Gc(du.h, fu.h, t), r = Gc(du.s, fu.s, t), i = Gc(du.l, fu.l, t);
		return this.setHSL(n, r, i), this;
	}
	setFromVector3(e) {
		return this.r = e.x, this.g = e.y, this.b = e.z, this;
	}
	applyMatrix3(e) {
		let t = this.r, n = this.g, r = this.b, i = e.elements;
		return this.r = i[0] * t + i[3] * n + i[6] * r, this.g = i[1] * t + i[4] * n + i[7] * r, this.b = i[2] * t + i[5] * n + i[8] * r, this;
	}
	equals(e) {
		return e.r === this.r && e.g === this.g && e.b === this.b;
	}
	fromArray(e, t = 0) {
		return this.r = e[t], this.g = e[t + 1], this.b = e[t + 2], this;
	}
	toArray(e = [], t = 0) {
		return e[t] = this.r, e[t + 1] = this.g, e[t + 2] = this.b, e;
	}
	fromBufferAttribute(e, t) {
		return this.r = e.getX(t), this.g = e.getY(t), this.b = e.getZ(t), this;
	}
	toJSON() {
		return this.getHex();
	}
	*[Symbol.iterator]() {
		yield this.r, yield this.g, yield this.b;
	}
}, hu = /*@__PURE__*/ new mu();
mu.NAMES = uu;
var gu = class extends ou {
	constructor() {
		super(), this.isScene = !0, this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.backgroundBlurriness = 0, this.backgroundIntensity = 1, this.backgroundRotation = new Ul(), this.environmentIntensity = 1, this.environmentRotation = new Ul(), this.overrideMaterial = null, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
	}
	copy(e, t) {
		return super.copy(e, t), this.background = e.background === null ? null : e.background.clone(), this.environment = e.environment === null ? null : e.environment.clone(), this.fog = e.fog === null ? null : e.fog.clone(), this.backgroundBlurriness = e.backgroundBlurriness, this.backgroundIntensity = e.backgroundIntensity, this.backgroundRotation.copy(e.backgroundRotation), this.environmentIntensity = e.environmentIntensity, this.environmentRotation.copy(e.environmentRotation), this.overrideMaterial = e.overrideMaterial === null ? null : e.overrideMaterial.clone(), this.matrixAutoUpdate = e.matrixAutoUpdate, this;
	}
	toJSON(e) {
		let t = super.toJSON(e);
		return this.fog !== null && (t.object.fog = this.fog.toJSON()), t.object.backgroundBlurriness = this.backgroundBlurriness, t.object.backgroundIntensity = this.backgroundIntensity, t.object.backgroundRotation = this.backgroundRotation.toArray(), t.object.environmentIntensity = this.environmentIntensity, t.object.environmentRotation = this.environmentRotation.toArray(), t;
	}
}, _u = /*@__PURE__*/ new Z(), vu = /*@__PURE__*/ new Z(), yu = /*@__PURE__*/ new Z(), bu = /*@__PURE__*/ new Z(), xu = /*@__PURE__*/ new Z(), Su = /*@__PURE__*/ new Z(), Cu = /*@__PURE__*/ new Z(), wu = /*@__PURE__*/ new Z(), Tu = /*@__PURE__*/ new Z(), Eu = /*@__PURE__*/ new Z(), Du = /*@__PURE__*/ new Ol(), Ou = /*@__PURE__*/ new Ol(), ku = /*@__PURE__*/ new Ol(), Au = class e {
	constructor(e = new Z(), t = new Z(), n = new Z()) {
		this.a = e, this.b = t, this.c = n;
	}
	static getNormal(e, t, n, r) {
		r.subVectors(n, t), _u.subVectors(e, t), r.cross(_u);
		let i = r.lengthSq();
		return i > 0 ? r.multiplyScalar(1 / Math.sqrt(i)) : r.set(0, 0, 0);
	}
	static getBarycoord(e, t, n, r, i) {
		_u.subVectors(r, t), vu.subVectors(n, t), yu.subVectors(e, t);
		let a = _u.dot(_u), o = _u.dot(vu), s = _u.dot(yu), c = vu.dot(vu), l = vu.dot(yu), u = a * c - o * o;
		if (u === 0) return i.set(0, 0, 0), null;
		let d = 1 / u, f = (c * s - o * l) * d, p = (a * l - o * s) * d;
		return i.set(1 - f - p, p, f);
	}
	static containsPoint(e, t, n, r) {
		return this.getBarycoord(e, t, n, r, bu) !== null && bu.x >= 0 && bu.y >= 0 && bu.x + bu.y <= 1;
	}
	static getInterpolation(e, t, n, r, i, a, o, s) {
		return this.getBarycoord(e, t, n, r, bu) === null ? (s.x = 0, s.y = 0, "z" in s && (s.z = 0), "w" in s && (s.w = 0), null) : (s.setScalar(0), s.addScaledVector(i, bu.x), s.addScaledVector(a, bu.y), s.addScaledVector(o, bu.z), s);
	}
	static getInterpolatedAttribute(e, t, n, r, i, a) {
		return Du.setScalar(0), Ou.setScalar(0), ku.setScalar(0), Du.fromBufferAttribute(e, t), Ou.fromBufferAttribute(e, n), ku.fromBufferAttribute(e, r), a.setScalar(0), a.addScaledVector(Du, i.x), a.addScaledVector(Ou, i.y), a.addScaledVector(ku, i.z), a;
	}
	static isFrontFacing(e, t, n, r) {
		return _u.subVectors(n, t), vu.subVectors(e, t), _u.cross(vu).dot(r) < 0;
	}
	set(e, t, n) {
		return this.a.copy(e), this.b.copy(t), this.c.copy(n), this;
	}
	setFromPointsAndIndices(e, t, n, r) {
		return this.a.copy(e[t]), this.b.copy(e[n]), this.c.copy(e[r]), this;
	}
	setFromAttributeAndIndices(e, t, n, r) {
		return this.a.fromBufferAttribute(e, t), this.b.fromBufferAttribute(e, n), this.c.fromBufferAttribute(e, r), this;
	}
	clone() {
		return new this.constructor().copy(this);
	}
	copy(e) {
		return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this;
	}
	getArea() {
		return _u.subVectors(this.c, this.b), vu.subVectors(this.a, this.b), _u.cross(vu).length() * .5;
	}
	getMidpoint(e) {
		return e.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
	}
	getNormal(t) {
		return e.getNormal(this.a, this.b, this.c, t);
	}
	getPlane(e) {
		return e.setFromCoplanarPoints(this.a, this.b, this.c);
	}
	getBarycoord(t, n) {
		return e.getBarycoord(t, this.a, this.b, this.c, n);
	}
	getInterpolation(t, n, r, i, a) {
		return e.getInterpolation(t, this.a, this.b, this.c, n, r, i, a);
	}
	containsPoint(t) {
		return e.containsPoint(t, this.a, this.b, this.c);
	}
	isFrontFacing(t) {
		return e.isFrontFacing(this.a, this.b, this.c, t);
	}
	intersectsBox(e) {
		return e.intersectsTriangle(this);
	}
	closestPointToPoint(e, t) {
		let n = this.a, r = this.b, i = this.c, a, o;
		xu.subVectors(r, n), Su.subVectors(i, n), wu.subVectors(e, n);
		let s = xu.dot(wu), c = Su.dot(wu);
		if (s <= 0 && c <= 0) return t.copy(n);
		Tu.subVectors(e, r);
		let l = xu.dot(Tu), u = Su.dot(Tu);
		if (l >= 0 && u <= l) return t.copy(r);
		let d = s * u - l * c;
		if (d <= 0 && s >= 0 && l <= 0 && s - l > 0) return a = s / (s - l), t.copy(n).addScaledVector(xu, a);
		Eu.subVectors(e, i);
		let f = xu.dot(Eu), p = Su.dot(Eu);
		if (p >= 0 && f <= p) return t.copy(i);
		let m = f * c - s * p;
		if (m <= 0 && c >= 0 && p <= 0) return o = c / (c - p), t.copy(n).addScaledVector(Su, o);
		let h = l * p - f * u;
		if (h <= 0 && u - l >= 0 && f - p >= 0) return Cu.subVectors(i, r), o = (u - l) / (u - l + (f - p)), t.copy(r).addScaledVector(Cu, o);
		let g = 1 / (h + m + d);
		return a = m * g, o = d * g, t.copy(n).addScaledVector(xu, a).addScaledVector(Su, o);
	}
	equals(e) {
		return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
	}
}, ju = class {
	constructor(e = new Z(Infinity, Infinity, Infinity), t = new Z(-Infinity, -Infinity, -Infinity)) {
		this.isBox3 = !0, this.min = e, this.max = t;
	}
	set(e, t) {
		return this.min.copy(e), this.max.copy(t), this;
	}
	setFromArray(e) {
		this.makeEmpty();
		for (let t = 0, n = e.length; t < n; t += 3) this.expandByPoint(Nu.fromArray(e, t));
		return this;
	}
	setFromBufferAttribute(e) {
		this.makeEmpty();
		for (let t = 0, n = e.count; t < n; t++) this.expandByPoint(Nu.fromBufferAttribute(e, t));
		return this;
	}
	setFromPoints(e) {
		this.makeEmpty();
		for (let t = 0, n = e.length; t < n; t++) this.expandByPoint(e[t]);
		return this;
	}
	setFromCenterAndSize(e, t) {
		let n = Nu.copy(t).multiplyScalar(.5);
		return this.min.copy(e).sub(n), this.max.copy(e).add(n), this;
	}
	setFromObject(e, t = !1) {
		return this.makeEmpty(), this.expandByObject(e, t);
	}
	clone() {
		return new this.constructor().copy(this);
	}
	copy(e) {
		return this.min.copy(e.min), this.max.copy(e.max), this;
	}
	makeEmpty() {
		return this.min.x = this.min.y = this.min.z = Infinity, this.max.x = this.max.y = this.max.z = -Infinity, this;
	}
	isEmpty() {
		return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
	}
	getCenter(e) {
		return this.isEmpty() ? e.set(0, 0, 0) : e.addVectors(this.min, this.max).multiplyScalar(.5);
	}
	getSize(e) {
		return this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min);
	}
	expandByPoint(e) {
		return this.min.min(e), this.max.max(e), this;
	}
	expandByVector(e) {
		return this.min.sub(e), this.max.add(e), this;
	}
	expandByScalar(e) {
		return this.min.addScalar(-e), this.max.addScalar(e), this;
	}
	expandByObject(e, t = !1) {
		e.updateWorldMatrix(!1, !1);
		let n = e.geometry;
		if (n !== void 0) {
			let r = n.getAttribute("position");
			if (t === !0 && r !== void 0 && e.isInstancedMesh !== !0 && e.isBatchedMesh !== !0) for (let t = 0, n = r.count; t < n; t++) e.isMesh === !0 ? e.getVertexPosition(t, Nu) : Nu.fromBufferAttribute(r, t), Nu.applyMatrix4(e.matrixWorld), this.expandByPoint(Nu);
			else e.boundingBox === void 0 ? (n.boundingBox === null && n.computeBoundingBox(), Pu.copy(n.boundingBox)) : (e.boundingBox === null && e.computeBoundingBox(), Pu.copy(e.boundingBox)), Pu.applyMatrix4(e.matrixWorld), this.union(Pu);
		}
		let r = e.children;
		for (let e = 0, n = r.length; e < n; e++) this.expandByObject(r[e], t);
		return this;
	}
	containsPoint(e) {
		return e.x >= this.min.x && e.x <= this.max.x && e.y >= this.min.y && e.y <= this.max.y && e.z >= this.min.z && e.z <= this.max.z;
	}
	containsBox(e) {
		return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y && this.min.z <= e.min.z && e.max.z <= this.max.z;
	}
	getParameter(e, t) {
		return t.set((e.x - this.min.x) / (this.max.x - this.min.x), (e.y - this.min.y) / (this.max.y - this.min.y), (e.z - this.min.z) / (this.max.z - this.min.z));
	}
	intersectsBox(e) {
		return e.max.x >= this.min.x && e.min.x <= this.max.x && e.max.y >= this.min.y && e.min.y <= this.max.y && e.max.z >= this.min.z && e.min.z <= this.max.z;
	}
	intersectsSphere(e) {
		return this.clampPoint(e.center, Nu), Nu.distanceToSquared(e.center) <= e.radius * e.radius;
	}
	intersectsPlane(e) {
		let t, n;
		return e.normal.x > 0 ? (t = e.normal.x * this.min.x, n = e.normal.x * this.max.x) : (t = e.normal.x * this.max.x, n = e.normal.x * this.min.x), e.normal.y > 0 ? (t += e.normal.y * this.min.y, n += e.normal.y * this.max.y) : (t += e.normal.y * this.max.y, n += e.normal.y * this.min.y), e.normal.z > 0 ? (t += e.normal.z * this.min.z, n += e.normal.z * this.max.z) : (t += e.normal.z * this.max.z, n += e.normal.z * this.min.z), t <= -e.constant && n >= -e.constant;
	}
	intersectsTriangle(e) {
		if (this.isEmpty()) return !1;
		this.getCenter(Vu), Hu.subVectors(this.max, Vu), Fu.subVectors(e.a, Vu), Iu.subVectors(e.b, Vu), Lu.subVectors(e.c, Vu), Ru.subVectors(Iu, Fu), zu.subVectors(Lu, Iu), Bu.subVectors(Fu, Lu);
		let t = [
			0,
			-Ru.z,
			Ru.y,
			0,
			-zu.z,
			zu.y,
			0,
			-Bu.z,
			Bu.y,
			Ru.z,
			0,
			-Ru.x,
			zu.z,
			0,
			-zu.x,
			Bu.z,
			0,
			-Bu.x,
			-Ru.y,
			Ru.x,
			0,
			-zu.y,
			zu.x,
			0,
			-Bu.y,
			Bu.x,
			0
		];
		return !Gu(t, Fu, Iu, Lu, Hu) || (t = [
			1,
			0,
			0,
			0,
			1,
			0,
			0,
			0,
			1
		], !Gu(t, Fu, Iu, Lu, Hu)) ? !1 : (Uu.crossVectors(Ru, zu), t = [
			Uu.x,
			Uu.y,
			Uu.z
		], Gu(t, Fu, Iu, Lu, Hu));
	}
	clampPoint(e, t) {
		return t.copy(e).clamp(this.min, this.max);
	}
	distanceToPoint(e) {
		return this.clampPoint(e, Nu).distanceTo(e);
	}
	getBoundingSphere(e) {
		return this.isEmpty() ? e.makeEmpty() : (this.getCenter(e.center), e.radius = this.getSize(Nu).length() * .5), e;
	}
	intersect(e) {
		return this.min.max(e.min), this.max.min(e.max), this.isEmpty() && this.makeEmpty(), this;
	}
	union(e) {
		return this.min.min(e.min), this.max.max(e.max), this;
	}
	applyMatrix4(e) {
		return this.isEmpty() || (Mu[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e), Mu[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e), Mu[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e), Mu[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e), Mu[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e), Mu[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e), Mu[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e), Mu[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e), this.setFromPoints(Mu)), this;
	}
	translate(e) {
		return this.min.add(e), this.max.add(e), this;
	}
	equals(e) {
		return e.min.equals(this.min) && e.max.equals(this.max);
	}
	toJSON() {
		return {
			min: this.min.toArray(),
			max: this.max.toArray()
		};
	}
	fromJSON(e) {
		return this.min.fromArray(e.min), this.max.fromArray(e.max), this;
	}
}, Mu = [
	/*@__PURE__*/ new Z(),
	/*@__PURE__*/ new Z(),
	/*@__PURE__*/ new Z(),
	/*@__PURE__*/ new Z(),
	/*@__PURE__*/ new Z(),
	/*@__PURE__*/ new Z(),
	/*@__PURE__*/ new Z(),
	/*@__PURE__*/ new Z()
], Nu = /*@__PURE__*/ new Z(), Pu = /*@__PURE__*/ new ju(), Fu = /*@__PURE__*/ new Z(), Iu = /*@__PURE__*/ new Z(), Lu = /*@__PURE__*/ new Z(), Ru = /*@__PURE__*/ new Z(), zu = /*@__PURE__*/ new Z(), Bu = /*@__PURE__*/ new Z(), Vu = /*@__PURE__*/ new Z(), Hu = /*@__PURE__*/ new Z(), Uu = /*@__PURE__*/ new Z(), Wu = /*@__PURE__*/ new Z();
function Gu(e, t, n, r, i) {
	for (let a = 0, o = e.length - 3; a <= o; a += 3) {
		Wu.fromArray(e, a);
		let o = i.x * Math.abs(Wu.x) + i.y * Math.abs(Wu.y) + i.z * Math.abs(Wu.z), s = t.dot(Wu), c = n.dot(Wu), l = r.dot(Wu);
		if (Math.max(-Math.max(s, c, l), Math.min(s, c, l)) > o) return !1;
	}
	return !0;
}
var Ku = /*@__PURE__*/ new Z(), qu = /*@__PURE__*/ new X(), Ju = 0, Yu = class extends Fc {
	constructor(e, t, n = !1) {
		if (super(), Array.isArray(e)) throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");
		this.isBufferAttribute = !0, Object.defineProperty(this, "id", { value: Ju++ }), this.name = "", this.array = e, this.itemSize = t, this.count = e === void 0 ? 0 : e.length / t, this.normalized = n, this.usage = Cc, this.updateRanges = [], this.gpuType = ds, this.version = 0, this._normalizationScale = e === void 0 ? void 0 : ol(e);
	}
	onUploadCallback() {}
	set needsUpdate(e) {
		e === !0 && this.version++;
	}
	setUsage(e) {
		return this.usage = e, this;
	}
	addUpdateRange(e, t) {
		this.updateRanges.push({
			start: e,
			count: t
		});
	}
	clearUpdateRanges() {
		this.updateRanges.length = 0;
	}
	copy(e) {
		return this.name = e.name, this.array = new e.array.constructor(e.array), this.itemSize = e.itemSize, this.count = e.count, this.normalized = e.normalized, this.usage = e.usage, this.gpuType = e.gpuType, this._normalizationScale = e._normalizationScale, this;
	}
	copyAt(e, t, n) {
		e *= this.itemSize, n *= t.itemSize;
		for (let r = 0, i = this.itemSize; r < i; r++) this.array[e + r] = t.array[n + r];
		return this;
	}
	copyArray(e) {
		return this.array.set(e), this;
	}
	applyMatrix3(e) {
		if (this.itemSize === 2) for (let t = 0, n = this.count; t < n; t++) qu.fromBufferAttribute(this, t), qu.applyMatrix3(e), this.setXY(t, qu.x, qu.y);
		else if (this.itemSize === 3) for (let t = 0, n = this.count; t < n; t++) Ku.fromBufferAttribute(this, t), Ku.applyMatrix3(e), this.setXYZ(t, Ku.x, Ku.y, Ku.z);
		return this;
	}
	applyMatrix4(e) {
		for (let t = 0, n = this.count; t < n; t++) Ku.fromBufferAttribute(this, t), Ku.applyMatrix4(e), this.setXYZ(t, Ku.x, Ku.y, Ku.z);
		return this;
	}
	applyNormalMatrix(e) {
		for (let t = 0, n = this.count; t < n; t++) Ku.fromBufferAttribute(this, t), Ku.applyNormalMatrix(e), this.setXYZ(t, Ku.x, Ku.y, Ku.z);
		return this;
	}
	transformDirection(e) {
		for (let t = 0, n = this.count; t < n; t++) Ku.fromBufferAttribute(this, t), Ku.transformDirection(e), this.setXYZ(t, Ku.x, Ku.y, Ku.z);
		return this;
	}
	set(e, t = 0) {
		return this.array.set(e, t), this;
	}
	getComponent(e, t) {
		let n = this.array[e * this.itemSize + t];
		return this.normalized && (n = this._denormalize(n)), n;
	}
	setComponent(e, t, n) {
		return this.normalized && (n = this._normalize(n)), this.array[e * this.itemSize + t] = n, this;
	}
	getX(e) {
		let t = this.array[e * this.itemSize];
		return this.normalized && (t = this._denormalize(t)), t;
	}
	setX(e, t) {
		return this.normalized && (t = this._normalize(t)), this.array[e * this.itemSize] = t, this;
	}
	getY(e) {
		let t = this.array[e * this.itemSize + 1];
		return this.normalized && (t = this._denormalize(t)), t;
	}
	setY(e, t) {
		return this.normalized && (t = this._normalize(t)), this.array[e * this.itemSize + 1] = t, this;
	}
	getZ(e) {
		let t = this.array[e * this.itemSize + 2];
		return this.normalized && (t = this._denormalize(t)), t;
	}
	setZ(e, t) {
		return this.normalized && (t = this._normalize(t)), this.array[e * this.itemSize + 2] = t, this;
	}
	getW(e) {
		let t = this.array[e * this.itemSize + 3];
		return this.normalized && (t = this._denormalize(t)), t;
	}
	setW(e, t) {
		return this.normalized && (t = this._normalize(t)), this.array[e * this.itemSize + 3] = t, this;
	}
	setXY(e, t, n) {
		return e *= this.itemSize, this.normalized && (t = this._normalize(t), n = this._normalize(n)), this.array[e + 0] = t, this.array[e + 1] = n, this;
	}
	setXYZ(e, t, n, r) {
		return e *= this.itemSize, this.normalized && (t = this._normalize(t), n = this._normalize(n), r = this._normalize(r)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = r, this;
	}
	setXYZW(e, t, n, r, i) {
		return e *= this.itemSize, this.normalized && (t = this._normalize(t), n = this._normalize(n), r = this._normalize(r), i = this._normalize(i)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = r, this.array[e + 3] = i, this;
	}
	onUpload(e) {
		return this.onUploadCallback = e, this;
	}
	clone() {
		return new this.constructor(this.array, this.itemSize).copy(this);
	}
	toJSON() {
		let e = {
			itemSize: this.itemSize,
			type: this.array.constructor.name,
			array: Array.from(this.array),
			normalized: this.normalized
		};
		return e.name = this.name, e.usage = this.usage, e.gpuType = this.gpuType, e;
	}
	dispose() {
		this.dispatchEvent({ type: "dispose" });
	}
	_denormalize(e) {
		let t = this._normalizationScale;
		return t === void 0 ? sl(e, this.array) : Math.max(e / t, -1);
	}
	_normalize(e) {
		let t = this._normalizationScale;
		return t === void 0 ? cl(e, this.array) : Math.round(e * t);
	}
}, Xu = class extends Yu {
	constructor(e, t, n) {
		super(new Uint16Array(e), t, n);
	}
}, Zu = class extends Yu {
	constructor(e, t, n) {
		super(new Uint32Array(e), t, n);
	}
}, Qu = class extends Yu {
	constructor(e, t, n) {
		super(new Float32Array(e), t, n);
	}
}, $u = /*@__PURE__*/ new ju(), ed = /*@__PURE__*/ new Z(), td = /*@__PURE__*/ new Z(), nd = class {
	constructor(e = new Z(), t = -1) {
		this.isSphere = !0, this.center = e, this.radius = t;
	}
	set(e, t) {
		return this.center.copy(e), this.radius = t, this;
	}
	setFromPoints(e, t) {
		let n = this.center;
		t === void 0 ? $u.setFromPoints(e).getCenter(n) : n.copy(t);
		let r = 0;
		for (let t = 0, i = e.length; t < i; t++) r = Math.max(r, n.distanceToSquared(e[t]));
		return this.radius = Math.sqrt(r), this;
	}
	copy(e) {
		return this.center.copy(e.center), this.radius = e.radius, this;
	}
	isEmpty() {
		return this.radius < 0;
	}
	makeEmpty() {
		return this.center.set(0, 0, 0), this.radius = -1, this;
	}
	containsPoint(e) {
		return e.distanceToSquared(this.center) <= this.radius * this.radius;
	}
	distanceToPoint(e) {
		return e.distanceTo(this.center) - this.radius;
	}
	intersectsSphere(e) {
		let t = this.radius + e.radius;
		return e.center.distanceToSquared(this.center) <= t * t;
	}
	intersectsBox(e) {
		return e.intersectsSphere(this);
	}
	intersectsPlane(e) {
		return Math.abs(e.distanceToPoint(this.center)) <= this.radius;
	}
	clampPoint(e, t) {
		let n = this.center.distanceToSquared(e);
		return t.copy(e), n > this.radius * this.radius && (t.sub(this.center).normalize(), t.multiplyScalar(this.radius).add(this.center)), t;
	}
	getBoundingBox(e) {
		return this.isEmpty() ? (e.makeEmpty(), e) : (e.set(this.center, this.center), e.expandByScalar(this.radius), e);
	}
	applyMatrix4(e) {
		return this.center.applyMatrix4(e), this.radius *= e.getMaxScaleOnAxis(), this;
	}
	translate(e) {
		return this.center.add(e), this;
	}
	expandByPoint(e) {
		if (this.isEmpty()) return this.center.copy(e), this.radius = 0, this;
		ed.subVectors(e, this.center);
		let t = ed.lengthSq();
		if (t > this.radius * this.radius) {
			let e = Math.sqrt(t), n = (e - this.radius) * .5;
			this.center.addScaledVector(ed, n / e), this.radius += n;
		}
		return this;
	}
	union(e) {
		return e.isEmpty() ? this : this.isEmpty() ? (this.copy(e), this) : (this.center.equals(e.center) === !0 ? this.radius = Math.max(this.radius, e.radius) : (td.subVectors(e.center, this.center).setLength(e.radius), this.expandByPoint(ed.copy(e.center).add(td)), this.expandByPoint(ed.copy(e.center).sub(td))), this);
	}
	equals(e) {
		return e.center.equals(this.center) && e.radius === this.radius;
	}
	clone() {
		return new this.constructor().copy(this);
	}
	toJSON() {
		return {
			radius: this.radius,
			center: this.center.toArray()
		};
	}
	fromJSON(e) {
		return this.radius = e.radius, this.center.fromArray(e.center), this;
	}
}, rd = 0, id = /*@__PURE__*/ new Nl(), ad = /*@__PURE__*/ new ou(), od = /*@__PURE__*/ new Z(), sd = /*@__PURE__*/ new ju(), cd = /*@__PURE__*/ new ju(), ld = /*@__PURE__*/ new Z(), ud = class e extends Fc {
	constructor() {
		super(), this.isBufferGeometry = !0, Object.defineProperty(this, "id", { value: rd++ }), this.uuid = Bc(), this.name = "", this.type = "BufferGeometry", this.index = null, this.indirect = null, this.indirectOffset = 0, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = {
			start: 0,
			count: Infinity
		}, this.userData = {}, this._transformed = !1;
	}
	getIndex() {
		return this.index;
	}
	setIndex(e) {
		return this.index = Array.isArray(e) ? new (Tc(e) ? Zu : Xu)(e, 1) : e, this;
	}
	setIndirect(e, t = 0) {
		return this.indirect = e, this.indirectOffset = t, this;
	}
	getIndirect() {
		return this.indirect;
	}
	getAttribute(e) {
		return this.attributes[e];
	}
	setAttribute(e, t) {
		return this.attributes[e] = t, this;
	}
	deleteAttribute(e) {
		return delete this.attributes[e], this;
	}
	hasAttribute(e) {
		return this.attributes[e] !== void 0;
	}
	addGroup(e, t, n = 0) {
		this.groups.push({
			start: e,
			count: t,
			materialIndex: n
		});
	}
	clearGroups() {
		this.groups = [];
	}
	setDrawRange(e, t) {
		this.drawRange.start = e, this.drawRange.count = t;
	}
	applyMatrix4(e) {
		let t = this.attributes.position;
		t !== void 0 && (t.applyMatrix4(e), t.needsUpdate = !0);
		let n = this.attributes.normal;
		if (n !== void 0) {
			let t = new Q().getNormalMatrix(e);
			n.applyNormalMatrix(t), n.needsUpdate = !0;
		}
		let r = this.attributes.tangent;
		return r !== void 0 && (r.transformDirection(e), r.needsUpdate = !0), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this._transformed = !0, this;
	}
	applyQuaternion(e) {
		return id.makeRotationFromQuaternion(e), this.applyMatrix4(id), this;
	}
	rotateX(e) {
		return id.makeRotationX(e), this.applyMatrix4(id), this;
	}
	rotateY(e) {
		return id.makeRotationY(e), this.applyMatrix4(id), this;
	}
	rotateZ(e) {
		return id.makeRotationZ(e), this.applyMatrix4(id), this;
	}
	translate(e, t, n) {
		return id.makeTranslation(e, t, n), this.applyMatrix4(id), this;
	}
	scale(e, t, n) {
		return id.makeScale(e, t, n), this.applyMatrix4(id), this;
	}
	lookAt(e) {
		return ad.lookAt(e), ad.updateMatrix(), this.applyMatrix4(ad.matrix), this;
	}
	center() {
		return this.computeBoundingBox(), this.boundingBox.getCenter(od).negate(), this.translate(od.x, od.y, od.z), this;
	}
	setFromPoints(e) {
		let t = this.getAttribute("position");
		if (t === void 0) {
			let t = [];
			for (let n = 0, r = e.length; n < r; n++) {
				let r = e[n];
				t.push(r.x, r.y, r.z || 0);
			}
			this.setAttribute("position", new Qu(t, 3));
		} else {
			let n = Math.min(e.length, t.count);
			for (let r = 0; r < n; r++) {
				let n = e[r];
				t.setXYZ(r, n.x, n.y, n.z || 0);
			}
			e.length > t.count && J("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."), t.needsUpdate = !0;
		}
		return this;
	}
	computeBoundingBox() {
		this.boundingBox === null && (this.boundingBox = new ju());
		let e = this.attributes.position, t = this.morphAttributes.position;
		if (e && e.isGLBufferAttribute) Y("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.", this), this.boundingBox.set(new Z(-Infinity, -Infinity, -Infinity), new Z(Infinity, Infinity, Infinity));
		else {
			if (e !== void 0) {
				if (this.boundingBox.setFromBufferAttribute(e), t) for (let e = 0, n = t.length; e < n; e++) {
					let n = t[e];
					sd.setFromBufferAttribute(n), this.morphTargetsRelative ? (ld.addVectors(this.boundingBox.min, sd.min), this.boundingBox.expandByPoint(ld), ld.addVectors(this.boundingBox.max, sd.max), this.boundingBox.expandByPoint(ld)) : (this.boundingBox.expandByPoint(sd.min), this.boundingBox.expandByPoint(sd.max));
				}
			} else this.boundingBox.makeEmpty();
			(isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && Y("BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The \"position\" attribute is likely to have NaN values.", this);
		}
	}
	computeBoundingSphere() {
		this.boundingSphere === null && (this.boundingSphere = new nd());
		let e = this.attributes.position, t = this.morphAttributes.position;
		if (e && e.isGLBufferAttribute) Y("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.", this), this.boundingSphere.set(new Z(), Infinity);
		else if (e) {
			let n = this.boundingSphere.center;
			if (sd.setFromBufferAttribute(e), t) for (let e = 0, n = t.length; e < n; e++) {
				let n = t[e];
				cd.setFromBufferAttribute(n), this.morphTargetsRelative ? (ld.addVectors(sd.min, cd.min), sd.expandByPoint(ld), ld.addVectors(sd.max, cd.max), sd.expandByPoint(ld)) : (sd.expandByPoint(cd.min), sd.expandByPoint(cd.max));
			}
			sd.getCenter(n);
			let r = 0;
			for (let t = 0, i = e.count; t < i; t++) ld.fromBufferAttribute(e, t), r = Math.max(r, n.distanceToSquared(ld));
			if (t) for (let i = 0, a = t.length; i < a; i++) {
				let a = t[i], o = this.morphTargetsRelative;
				for (let t = 0, i = a.count; t < i; t++) ld.fromBufferAttribute(a, t), o && (od.fromBufferAttribute(e, t), ld.add(od)), r = Math.max(r, n.distanceToSquared(ld));
			}
			this.boundingSphere.radius = Math.sqrt(r), isNaN(this.boundingSphere.radius) && Y("BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The \"position\" attribute is likely to have NaN values.", this);
		}
	}
	computeTangents() {
		let e = this.index, t = this.attributes;
		if (e === null || t.position === void 0 || t.normal === void 0 || t.uv === void 0) {
			Y("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
			return;
		}
		let n = t.position, r = t.normal, i = t.uv, a = this.getAttribute("tangent");
		(a === void 0 || a.count !== n.count) && (a = new Yu(new Float32Array(4 * n.count), 4), this.setAttribute("tangent", a));
		let o = [], s = [], c = new Uint8Array(n.count);
		for (let e = 0; e < n.count; e++) o[e] = new Z(), s[e] = new Z();
		let l = new Z(), u = new Z(), d = new Z(), f = new X(), p = new X(), m = new X(), h = new Z(), g = new Z();
		function _(e, t, r) {
			c[e] = c[t] = c[r] = 1, l.fromBufferAttribute(n, e), u.fromBufferAttribute(n, t), d.fromBufferAttribute(n, r), f.fromBufferAttribute(i, e), p.fromBufferAttribute(i, t), m.fromBufferAttribute(i, r), u.sub(l), d.sub(l), p.sub(f), m.sub(f);
			let a = 1 / (p.x * m.y - m.x * p.y);
			isFinite(a) && (h.copy(u).multiplyScalar(m.y).addScaledVector(d, -p.y).multiplyScalar(a), g.copy(d).multiplyScalar(p.x).addScaledVector(u, -m.x).multiplyScalar(a), o[e].add(h), o[t].add(h), o[r].add(h), s[e].add(g), s[t].add(g), s[r].add(g));
		}
		let v = this.groups;
		v.length === 0 && (v = [{
			start: 0,
			count: e.count
		}]);
		for (let t = 0, n = v.length; t < n; ++t) {
			let n = v[t], r = n.start, i = n.count;
			for (let t = r, n = r + i; t < n; t += 3) _(e.getX(t + 0), e.getX(t + 1), e.getX(t + 2));
		}
		let y = new Z(), b = new Z(), x = new Z(), S = new Z();
		function C(e) {
			x.fromBufferAttribute(r, e), S.copy(x);
			let t = o[e];
			y.copy(t), y.sub(x.multiplyScalar(x.dot(t))).normalize(), b.crossVectors(S, t);
			let n = b.dot(s[e]) < 0 ? -1 : 1;
			a.setXYZW(e, y.x, y.y, y.z, n);
		}
		for (let e = 0, t = n.count; e < t; ++e) c[e] && C(e);
		this._transformed = !0;
	}
	computeVertexNormals() {
		let e = this.index, t = this.getAttribute("position");
		if (t !== void 0) {
			let n = this.getAttribute("normal");
			if (n === void 0 || n.count !== t.count) n = new Yu(new Float32Array(t.count * 3), 3), this.setAttribute("normal", n);
			else for (let e = 0, t = n.count; e < t; e++) n.setXYZ(e, 0, 0, 0);
			let r = new Z(), i = new Z(), a = new Z(), o = new Z(), s = new Z(), c = new Z(), l = new Z(), u = new Z();
			if (e) for (let d = 0, f = e.count; d < f; d += 3) {
				let f = e.getX(d + 0), p = e.getX(d + 1), m = e.getX(d + 2);
				r.fromBufferAttribute(t, f), i.fromBufferAttribute(t, p), a.fromBufferAttribute(t, m), l.subVectors(a, i), u.subVectors(r, i), l.cross(u), o.fromBufferAttribute(n, f), s.fromBufferAttribute(n, p), c.fromBufferAttribute(n, m), o.add(l), s.add(l), c.add(l), n.setXYZ(f, o.x, o.y, o.z), n.setXYZ(p, s.x, s.y, s.z), n.setXYZ(m, c.x, c.y, c.z);
			}
			else for (let e = 0, o = t.count; e < o; e += 3) r.fromBufferAttribute(t, e + 0), i.fromBufferAttribute(t, e + 1), a.fromBufferAttribute(t, e + 2), l.subVectors(a, i), u.subVectors(r, i), l.cross(u), n.setXYZ(e + 0, l.x, l.y, l.z), n.setXYZ(e + 1, l.x, l.y, l.z), n.setXYZ(e + 2, l.x, l.y, l.z);
			this.normalizeNormals(), n.needsUpdate = !0;
		}
	}
	normalizeNormals() {
		let e = this.attributes.normal;
		for (let t = 0, n = e.count; t < n; t++) ld.fromBufferAttribute(e, t), ld.normalize(), e.setXYZ(t, ld.x, ld.y, ld.z);
	}
	toNonIndexed() {
		function t(e, t) {
			let n = e.array, r = e.itemSize, i = e.normalized, a = new n.constructor(t.length * r), o = 0, s = 0;
			for (let i = 0, c = t.length; i < c; i++) {
				o = e.isInterleavedBufferAttribute ? t[i] * e.data.stride + e.offset : t[i] * r;
				for (let e = 0; e < r; e++) a[s++] = n[o++];
			}
			return new Yu(a, r, i);
		}
		if (this.index === null) return J("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
		let n = new e(), r = this.index.array, i = this.attributes;
		for (let e in i) {
			let a = i[e], o = t(a, r);
			n.setAttribute(e, o);
		}
		let a = this.morphAttributes;
		for (let e in a) {
			let i = [], o = a[e];
			for (let e = 0, n = o.length; e < n; e++) {
				let n = o[e], a = t(n, r);
				i.push(a);
			}
			n.morphAttributes[e] = i;
		}
		n.morphTargetsRelative = this.morphTargetsRelative;
		let o = this.groups;
		for (let e = 0, t = o.length; e < t; e++) {
			let t = o[e];
			n.addGroup(t.start, t.count, t.materialIndex);
		}
		return n;
	}
	toJSON() {
		let e = { metadata: {
			version: 4.7,
			type: "BufferGeometry",
			generator: "BufferGeometry.toJSON"
		} };
		if (e.uuid = this.uuid, e.type = this.parameters !== void 0 && this._transformed === !0 ? "BufferGeometry" : this.type, e.name = this.name, Object.keys(this.userData).length > 0 && (e.userData = this.userData), this.parameters !== void 0 && this._transformed !== !0) {
			let t = this.parameters;
			for (let n in t) t[n] !== void 0 && (e[n] = t[n]);
			return e;
		}
		e.data = { attributes: {} };
		let t = this.index;
		t !== null && (e.data.index = {
			type: t.array.constructor.name,
			array: Array.prototype.slice.call(t.array)
		});
		let n = this.attributes;
		for (let t in n) {
			let r = n[t];
			e.data.attributes[t] = r.toJSON(e.data);
		}
		let r = {}, i = !1;
		for (let t in this.morphAttributes) {
			let n = this.morphAttributes[t], a = [];
			for (let t = 0, r = n.length; t < r; t++) {
				let r = n[t];
				a.push(r.toJSON(e.data));
			}
			a.length > 0 && (r[t] = a, i = !0);
		}
		i && (e.data.morphAttributes = r, e.data.morphTargetsRelative = this.morphTargetsRelative);
		let a = this.groups;
		a.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(a)));
		let o = this.boundingSphere;
		return o !== null && (e.data.boundingSphere = o.toJSON()), e;
	}
	clone() {
		return new this.constructor().copy(this);
	}
	copy(e) {
		this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null;
		let t = {};
		this.name = e.name;
		let n = e.index;
		n !== null && this.setIndex(n.clone());
		let r = e.attributes;
		for (let e in r) {
			let n = r[e];
			this.setAttribute(e, n.clone(t));
		}
		let i = e.morphAttributes;
		for (let e in i) {
			let n = [], r = i[e];
			for (let e = 0, i = r.length; e < i; e++) n.push(r[e].clone(t));
			this.morphAttributes[e] = n;
		}
		this.morphTargetsRelative = e.morphTargetsRelative;
		let a = e.groups;
		for (let e = 0, t = a.length; e < t; e++) {
			let t = a[e];
			this.addGroup(t.start, t.count, t.materialIndex);
		}
		let o = e.boundingBox;
		o !== null && (this.boundingBox = o.clone());
		let s = e.boundingSphere;
		return s !== null && (this.boundingSphere = s.clone()), this.drawRange.start = e.drawRange.start, this.drawRange.count = e.drawRange.count, this.userData = e.userData, this._transformed = e._transformed, this;
	}
	dispose() {
		this.dispatchEvent({ type: "dispose" });
	}
}, dd = /*@__PURE__*/ new Z(), fd = /*@__PURE__*/ new Z(), pd = /*@__PURE__*/ new Q(), md = class {
	constructor(e = new Z(1, 0, 0), t = 0) {
		this.isPlane = !0, this.normal = e, this.constant = t;
	}
	set(e, t) {
		return this.normal.copy(e), this.constant = t, this;
	}
	setComponents(e, t, n, r) {
		return this.normal.set(e, t, n), this.constant = r, this;
	}
	setFromNormalAndCoplanarPoint(e, t) {
		return this.normal.copy(e), this.constant = -t.dot(this.normal), this;
	}
	setFromCoplanarPoints(e, t, n) {
		let r = dd.subVectors(n, t).cross(fd.subVectors(e, t)).normalize();
		return this.setFromNormalAndCoplanarPoint(r, e), this;
	}
	copy(e) {
		return this.normal.copy(e.normal), this.constant = e.constant, this;
	}
	normalize() {
		let e = 1 / this.normal.length();
		return this.normal.multiplyScalar(e), this.constant *= e, this;
	}
	negate() {
		return this.constant *= -1, this.normal.negate(), this;
	}
	distanceToPoint(e) {
		return this.normal.dot(e) + this.constant;
	}
	distanceToSphere(e) {
		return this.distanceToPoint(e.center) - e.radius;
	}
	projectPoint(e, t) {
		return t.copy(e).addScaledVector(this.normal, -this.distanceToPoint(e));
	}
	intersectLine(e, t, n = !0) {
		let r = e.delta(dd), i = this.normal.dot(r);
		if (i === 0) return this.distanceToPoint(e.start) === 0 ? t.copy(e.start) : null;
		let a = -(e.start.dot(this.normal) + this.constant) / i;
		return n === !0 && (a < 0 || a > 1) ? null : t.copy(e.start).addScaledVector(r, a);
	}
	intersectsLine(e) {
		let t = this.distanceToPoint(e.start), n = this.distanceToPoint(e.end);
		return t < 0 && n > 0 || n < 0 && t > 0;
	}
	intersectsBox(e) {
		return e.intersectsPlane(this);
	}
	intersectsSphere(e) {
		return e.intersectsPlane(this);
	}
	coplanarPoint(e) {
		return e.copy(this.normal).multiplyScalar(-this.constant);
	}
	applyMatrix4(e, t) {
		let n = t || pd.getNormalMatrix(e), r = this.coplanarPoint(dd).applyMatrix4(e), i = this.normal.applyMatrix3(n).normalize();
		return this.constant = -r.dot(i), this;
	}
	translate(e) {
		return this.constant -= e.dot(this.normal), this;
	}
	equals(e) {
		return e.normal.equals(this.normal) && e.constant === this.constant;
	}
	clone() {
		return new this.constructor().copy(this);
	}
	toJSON() {
		return {
			normal: this.normal.toArray(),
			constant: this.constant
		};
	}
	fromJSON(e) {
		return this.normal.fromArray(e.normal), this.constant = e.constant, this;
	}
}, hd = 0, gd = class extends Fc {
	constructor() {
		super(), this.isMaterial = !0, Object.defineProperty(this, "id", { value: hd++ }), this.uuid = Bc(), this.name = "", this.type = "Material", this.blending = 1, this.side = 0, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.alphaHash = !1, this.blendSrc = 204, this.blendDst = 205, this.blendEquation = 100, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.blendColor = new mu(0, 0, 0), this.blendAlpha = 0, this.depthFunc = 3, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = 519, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = Sc, this.stencilZFail = Sc, this.stencilZPass = Sc, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.forceSinglePass = !1, this.allowOverride = !0, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0, this._alphaTest = 0;
	}
	get alphaTest() {
		return this._alphaTest;
	}
	set alphaTest(e) {
		this._alphaTest > 0 != e > 0 && this.version++, this._alphaTest = e;
	}
	onBeforeRender() {}
	onBeforeCompile() {}
	customProgramCacheKey() {
		return this.onBeforeCompile.toString();
	}
	setValues(e) {
		if (e !== void 0) for (let t in e) {
			let n = e[t];
			if (n === void 0) {
				J(`Material: parameter '${t}' has value of undefined.`);
				continue;
			}
			let r = this[t];
			r === void 0 ? J(`Material: '${t}' is not a property of THREE.${this.type}.`) : r && r.isColor ? r.set(n) : r && r.isVector2 && n && n.isVector2 || r && r.isEuler && n && n.isEuler || r && r.isVector3 && n && n.isVector3 ? r.copy(n) : this[t] = n;
		}
	}
	toJSON(e) {
		let t = e === void 0 || typeof e == "string";
		t && (e = {
			textures: {},
			images: {}
		});
		let n = { metadata: {
			version: 4.7,
			type: "Material",
			generator: "Material.toJSON"
		} };
		n.uuid = this.uuid, n.type = this.type, n.blending = this.blending, n.side = this.side, n.shadowSide = this.shadowSide, n.vertexColors = this.vertexColors, n.opacity = this.opacity, n.transparent = this.transparent, n.blendSrc = this.blendSrc, n.blendDst = this.blendDst, n.blendEquation = this.blendEquation, n.blendSrcAlpha = this.blendSrcAlpha, n.blendDstAlpha = this.blendDstAlpha, n.blendEquationAlpha = this.blendEquationAlpha, n.blendColor = this.blendColor.getHex(), n.blendAlpha = this.blendAlpha, n.depthFunc = this.depthFunc, n.depthTest = this.depthTest, n.depthWrite = this.depthWrite, n.colorWrite = this.colorWrite, n.clipIntersection = this.clipIntersection, n.clipShadows = this.clipShadows, n.stencilWriteMask = this.stencilWriteMask, n.stencilFunc = this.stencilFunc, n.stencilRef = this.stencilRef, n.stencilFuncMask = this.stencilFuncMask, n.stencilFail = this.stencilFail, n.stencilZFail = this.stencilZFail, n.stencilZPass = this.stencilZPass, n.stencilWrite = this.stencilWrite, n.polygonOffset = this.polygonOffset, n.polygonOffsetFactor = this.polygonOffsetFactor, n.polygonOffsetUnits = this.polygonOffsetUnits, n.dithering = this.dithering, n.alphaTest = this.alphaTest, n.alphaHash = this.alphaHash, n.alphaToCoverage = this.alphaToCoverage, n.premultipliedAlpha = this.premultipliedAlpha, n.forceSinglePass = this.forceSinglePass, n.allowOverride = this.allowOverride, n.visible = this.visible, n.toneMapped = this.toneMapped, n.name = this.name, this.color && this.color.isColor && (n.color = this.color.getHex()), this.roughness !== void 0 && (n.roughness = this.roughness), this.metalness !== void 0 && (n.metalness = this.metalness), this.sheen !== void 0 && (n.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (n.sheenColor = this.sheenColor.getHex()), this.sheenRoughness !== void 0 && (n.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), this.emissiveIntensity !== void 0 && (n.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n.specular = this.specular.getHex()), this.specularIntensity !== void 0 && (n.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (n.specularColor = this.specularColor.getHex()), this.shininess !== void 0 && (n.shininess = this.shininess), this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (n.clearcoatRoughness = this.clearcoatRoughness), this.diffuseRoughness !== void 0 && (n.diffuseRoughness = this.diffuseRoughness), this.diffuseRoughnessMap && this.diffuseRoughnessMap.isTexture && (n.diffuseRoughnessMap = this.diffuseRoughnessMap.toJSON(e).uuid), this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(e).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid, n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.sheenColorMap && this.sheenColorMap.isTexture && (n.sheenColorMap = this.sheenColorMap.toJSON(e).uuid), this.sheenRoughnessMap && this.sheenRoughnessMap.isTexture && (n.sheenRoughnessMap = this.sheenRoughnessMap.toJSON(e).uuid), this.dispersion !== void 0 && (n.dispersion = this.dispersion), this.retroreflectivity !== void 0 && (n.retroreflectivity = this.retroreflectivity), this.iridescence !== void 0 && (n.iridescence = this.iridescence), this.iridescenceIOR !== void 0 && (n.iridescenceIOR = this.iridescenceIOR), this.iridescenceThicknessMinimum !== void 0 && (n.iridescenceThicknessMinimum = this.iridescenceThicknessMinimum), this.iridescenceThicknessMaximum !== void 0 && (n.iridescenceThicknessMaximum = this.iridescenceThicknessMaximum), this.iridescenceMap && this.iridescenceMap.isTexture && (n.iridescenceMap = this.iridescenceMap.toJSON(e).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (n.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(e).uuid), this.anisotropy !== void 0 && (n.anisotropy = this.anisotropy), this.anisotropyRotation !== void 0 && (n.anisotropyRotation = this.anisotropyRotation), this.anisotropyMap && this.anisotropyMap.isTexture && (n.anisotropyMap = this.anisotropyMap.toJSON(e).uuid), this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid), this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(e).uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(e).uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(e).uuid, n.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(e).uuid, n.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(e).uuid, n.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(e).uuid, n.normalMapType = this.normalMapType, n.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(e).uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(e).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(e).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(e).uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(e).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (n.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid), this.specularColorMap && this.specularColorMap.isTexture && (n.specularColorMap = this.specularColorMap.toJSON(e).uuid), this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(e).uuid, this.combine !== void 0 && (n.combine = this.combine)), this.envMapRotation !== void 0 && (n.envMapRotation = this.envMapRotation.toArray()), this.envMapIntensity !== void 0 && (n.envMapIntensity = this.envMapIntensity), this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (n.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(e).uuid), this.transmission !== void 0 && (n.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (n.transmissionMap = this.transmissionMap.toJSON(e).uuid), this.thickness !== void 0 && (n.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (n.thicknessMap = this.thicknessMap.toJSON(e).uuid), this.attenuationDistance !== void 0 && (n.attenuationDistance = this.attenuationDistance), this.attenuationColor !== void 0 && (n.attenuationColor = this.attenuationColor.getHex()), this.size !== void 0 && (n.size = this.size), this.sizeAttenuation !== void 0 && (n.sizeAttenuation = this.sizeAttenuation), Array.isArray(this.clippingPlanes) && this.clippingPlanes.length > 0 && (n.clippingPlanes = this.clippingPlanes.map((e) => e.toJSON())), this.rotation !== void 0 && (n.rotation = this.rotation), this.depthPacking !== void 0 && (n.depthPacking = this.depthPacking), this.linewidth !== void 0 && (n.linewidth = this.linewidth), this.linecap !== void 0 && (n.linecap = this.linecap), this.linejoin !== void 0 && (n.linejoin = this.linejoin), this.dashSize !== void 0 && (n.dashSize = this.dashSize), this.gapSize !== void 0 && (n.gapSize = this.gapSize), this.scale !== void 0 && (n.scale = this.scale), this.wireframe !== void 0 && (n.wireframe = this.wireframe), this.wireframeLinewidth !== void 0 && (n.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== void 0 && (n.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== void 0 && (n.wireframeLinejoin = this.wireframeLinejoin), this.flatShading !== void 0 && (n.flatShading = this.flatShading), this.fog !== void 0 && (n.fog = this.fog), Object.keys(this.userData).length > 0 && (n.userData = this.userData);
		function r(e) {
			let t = [];
			for (let n in e) {
				let r = e[n];
				delete r.metadata, t.push(r);
			}
			return t;
		}
		if (t) {
			let t = r(e.textures), i = r(e.images);
			t.length > 0 && (n.textures = t), i.length > 0 && (n.images = i);
		}
		return n;
	}
	fromJSON(e, t) {
		if (e.uuid !== void 0 && (this.uuid = e.uuid), e.name !== void 0 && (this.name = e.name), e.color !== void 0 && this.color !== void 0 && this.color.setHex(e.color), e.roughness !== void 0 && (this.roughness = e.roughness), e.metalness !== void 0 && (this.metalness = e.metalness), e.sheen !== void 0 && (this.sheen = e.sheen), e.sheenColor !== void 0 && (this.sheenColor = new mu().setHex(e.sheenColor)), e.sheenRoughness !== void 0 && (this.sheenRoughness = e.sheenRoughness), e.emissive !== void 0 && this.emissive !== void 0 && this.emissive.setHex(e.emissive), e.specular !== void 0 && this.specular !== void 0 && this.specular.setHex(e.specular), e.specularIntensity !== void 0 && (this.specularIntensity = e.specularIntensity), e.specularColor !== void 0 && this.specularColor !== void 0 && this.specularColor.setHex(e.specularColor), e.shininess !== void 0 && (this.shininess = e.shininess), e.clearcoat !== void 0 && (this.clearcoat = e.clearcoat), e.clearcoatRoughness !== void 0 && (this.clearcoatRoughness = e.clearcoatRoughness), e.diffuseRoughness !== void 0 && (this.diffuseRoughness = e.diffuseRoughness), e.dispersion !== void 0 && (this.dispersion = e.dispersion), e.retroreflectivity !== void 0 && (this.retroreflectivity = e.retroreflectivity), e.iridescence !== void 0 && (this.iridescence = e.iridescence), e.iridescenceIOR !== void 0 && (this.iridescenceIOR = e.iridescenceIOR), e.iridescenceThicknessMinimum !== void 0 && (this.iridescenceThicknessMinimum = e.iridescenceThicknessMinimum), e.iridescenceThicknessMaximum !== void 0 && (this.iridescenceThicknessMaximum = e.iridescenceThicknessMaximum), e.iridescenceThicknessRange !== void 0 && (this.iridescenceThicknessMinimum = e.iridescenceThicknessRange[0], this.iridescenceThicknessMaximum = e.iridescenceThicknessRange[1]), e.transmission !== void 0 && (this.transmission = e.transmission), e.thickness !== void 0 && (this.thickness = e.thickness), e.attenuationDistance !== void 0 && (this.attenuationDistance = e.attenuationDistance), e.attenuationColor !== void 0 && this.attenuationColor !== void 0 && this.attenuationColor.setHex(e.attenuationColor), e.anisotropy !== void 0 && (this.anisotropy = e.anisotropy), e.anisotropyRotation !== void 0 && (this.anisotropyRotation = e.anisotropyRotation), e.fog !== void 0 && (this.fog = e.fog), e.flatShading !== void 0 && (this.flatShading = e.flatShading), e.blending !== void 0 && (this.blending = e.blending), e.combine !== void 0 && (this.combine = e.combine), e.side !== void 0 && (this.side = e.side), e.shadowSide !== void 0 && (this.shadowSide = e.shadowSide), e.opacity !== void 0 && (this.opacity = e.opacity), e.transparent !== void 0 && (this.transparent = e.transparent), e.alphaTest !== void 0 && (this.alphaTest = e.alphaTest), e.alphaHash !== void 0 && (this.alphaHash = e.alphaHash), e.depthFunc !== void 0 && (this.depthFunc = e.depthFunc), e.depthTest !== void 0 && (this.depthTest = e.depthTest), e.depthWrite !== void 0 && (this.depthWrite = e.depthWrite), e.colorWrite !== void 0 && (this.colorWrite = e.colorWrite), e.clippingPlanes !== void 0 && (this.clippingPlanes = e.clippingPlanes.map((e) => new md().fromJSON(e))), e.clipIntersection !== void 0 && (this.clipIntersection = e.clipIntersection), e.clipShadows !== void 0 && (this.clipShadows = e.clipShadows), e.depthPacking !== void 0 && (this.depthPacking = e.depthPacking), e.blendSrc !== void 0 && (this.blendSrc = e.blendSrc), e.blendDst !== void 0 && (this.blendDst = e.blendDst), e.blendEquation !== void 0 && (this.blendEquation = e.blendEquation), e.blendSrcAlpha !== void 0 && (this.blendSrcAlpha = e.blendSrcAlpha), e.blendDstAlpha !== void 0 && (this.blendDstAlpha = e.blendDstAlpha), e.blendEquationAlpha !== void 0 && (this.blendEquationAlpha = e.blendEquationAlpha), e.blendColor !== void 0 && this.blendColor !== void 0 && this.blendColor.setHex(e.blendColor), e.blendAlpha !== void 0 && (this.blendAlpha = e.blendAlpha), e.stencilWriteMask !== void 0 && (this.stencilWriteMask = e.stencilWriteMask), e.stencilFunc !== void 0 && (this.stencilFunc = e.stencilFunc), e.stencilRef !== void 0 && (this.stencilRef = e.stencilRef), e.stencilFuncMask !== void 0 && (this.stencilFuncMask = e.stencilFuncMask), e.stencilFail !== void 0 && (this.stencilFail = e.stencilFail), e.stencilZFail !== void 0 && (this.stencilZFail = e.stencilZFail), e.stencilZPass !== void 0 && (this.stencilZPass = e.stencilZPass), e.stencilWrite !== void 0 && (this.stencilWrite = e.stencilWrite), e.wireframe !== void 0 && (this.wireframe = e.wireframe), e.wireframeLinewidth !== void 0 && (this.wireframeLinewidth = e.wireframeLinewidth), e.wireframeLinecap !== void 0 && (this.wireframeLinecap = e.wireframeLinecap), e.wireframeLinejoin !== void 0 && (this.wireframeLinejoin = e.wireframeLinejoin), e.rotation !== void 0 && (this.rotation = e.rotation), e.linewidth !== void 0 && (this.linewidth = e.linewidth), e.linecap !== void 0 && (this.linecap = e.linecap), e.linejoin !== void 0 && (this.linejoin = e.linejoin), e.dashSize !== void 0 && (this.dashSize = e.dashSize), e.gapSize !== void 0 && (this.gapSize = e.gapSize), e.scale !== void 0 && (this.scale = e.scale), e.polygonOffset !== void 0 && (this.polygonOffset = e.polygonOffset), e.polygonOffsetFactor !== void 0 && (this.polygonOffsetFactor = e.polygonOffsetFactor), e.polygonOffsetUnits !== void 0 && (this.polygonOffsetUnits = e.polygonOffsetUnits), e.dithering !== void 0 && (this.dithering = e.dithering), e.alphaToCoverage !== void 0 && (this.alphaToCoverage = e.alphaToCoverage), e.premultipliedAlpha !== void 0 && (this.premultipliedAlpha = e.premultipliedAlpha), e.forceSinglePass !== void 0 && (this.forceSinglePass = e.forceSinglePass), e.allowOverride !== void 0 && (this.allowOverride = e.allowOverride), e.visible !== void 0 && (this.visible = e.visible), e.toneMapped !== void 0 && (this.toneMapped = e.toneMapped), e.userData !== void 0 && (this.userData = e.userData), e.vertexColors !== void 0 && (this.vertexColors = typeof e.vertexColors == "number" ? e.vertexColors > 0 : e.vertexColors), e.size !== void 0 && (this.size = e.size), e.sizeAttenuation !== void 0 && (this.sizeAttenuation = e.sizeAttenuation), e.map !== void 0 && (this.map = t[e.map] || null), e.matcap !== void 0 && (this.matcap = t[e.matcap] || null), e.alphaMap !== void 0 && (this.alphaMap = t[e.alphaMap] || null), e.bumpMap !== void 0 && (this.bumpMap = t[e.bumpMap] || null), e.bumpScale !== void 0 && (this.bumpScale = e.bumpScale), e.normalMap !== void 0 && (this.normalMap = t[e.normalMap] || null), e.normalMapType !== void 0 && (this.normalMapType = e.normalMapType), e.normalScale !== void 0) {
			let t = e.normalScale;
			Array.isArray(t) === !1 && (t = [t, t]), this.normalScale = new X().fromArray(t);
		}
		return e.displacementMap !== void 0 && (this.displacementMap = t[e.displacementMap] || null), e.displacementScale !== void 0 && (this.displacementScale = e.displacementScale), e.displacementBias !== void 0 && (this.displacementBias = e.displacementBias), e.roughnessMap !== void 0 && (this.roughnessMap = t[e.roughnessMap] || null), e.metalnessMap !== void 0 && (this.metalnessMap = t[e.metalnessMap] || null), e.emissiveMap !== void 0 && (this.emissiveMap = t[e.emissiveMap] || null), e.emissiveIntensity !== void 0 && (this.emissiveIntensity = e.emissiveIntensity), e.specularMap !== void 0 && (this.specularMap = t[e.specularMap] || null), e.specularIntensityMap !== void 0 && (this.specularIntensityMap = t[e.specularIntensityMap] || null), e.specularColorMap !== void 0 && (this.specularColorMap = t[e.specularColorMap] || null), e.envMap !== void 0 && (this.envMap = t[e.envMap] || null), e.envMapRotation !== void 0 && this.envMapRotation.fromArray(e.envMapRotation), e.envMapIntensity !== void 0 && (this.envMapIntensity = e.envMapIntensity), e.reflectivity !== void 0 && (this.reflectivity = e.reflectivity), e.refractionRatio !== void 0 && (this.refractionRatio = e.refractionRatio), e.lightMap !== void 0 && (this.lightMap = t[e.lightMap] || null), e.lightMapIntensity !== void 0 && (this.lightMapIntensity = e.lightMapIntensity), e.aoMap !== void 0 && (this.aoMap = t[e.aoMap] || null), e.aoMapIntensity !== void 0 && (this.aoMapIntensity = e.aoMapIntensity), e.gradientMap !== void 0 && (this.gradientMap = t[e.gradientMap] || null), e.clearcoatMap !== void 0 && (this.clearcoatMap = t[e.clearcoatMap] || null), e.clearcoatRoughnessMap !== void 0 && (this.clearcoatRoughnessMap = t[e.clearcoatRoughnessMap] || null), e.clearcoatNormalMap !== void 0 && (this.clearcoatNormalMap = t[e.clearcoatNormalMap] || null), e.clearcoatNormalScale !== void 0 && (this.clearcoatNormalScale = new X().fromArray(e.clearcoatNormalScale)), e.diffuseRoughnessMap !== void 0 && (this.diffuseRoughnessMap = t[e.diffuseRoughnessMap] || null), e.iridescenceMap !== void 0 && (this.iridescenceMap = t[e.iridescenceMap] || null), e.iridescenceThicknessMap !== void 0 && (this.iridescenceThicknessMap = t[e.iridescenceThicknessMap] || null), e.transmissionMap !== void 0 && (this.transmissionMap = t[e.transmissionMap] || null), e.thicknessMap !== void 0 && (this.thicknessMap = t[e.thicknessMap] || null), e.anisotropyMap !== void 0 && (this.anisotropyMap = t[e.anisotropyMap] || null), e.sheenColorMap !== void 0 && (this.sheenColorMap = t[e.sheenColorMap] || null), e.sheenRoughnessMap !== void 0 && (this.sheenRoughnessMap = t[e.sheenRoughnessMap] || null), this;
	}
	clone() {
		return new this.constructor().copy(this);
	}
	copy(e) {
		this.name = e.name, this.blending = e.blending, this.side = e.side, this.vertexColors = e.vertexColors, this.opacity = e.opacity, this.transparent = e.transparent, this.blendSrc = e.blendSrc, this.blendDst = e.blendDst, this.blendEquation = e.blendEquation, this.blendSrcAlpha = e.blendSrcAlpha, this.blendDstAlpha = e.blendDstAlpha, this.blendEquationAlpha = e.blendEquationAlpha, this.blendColor.copy(e.blendColor), this.blendAlpha = e.blendAlpha, this.depthFunc = e.depthFunc, this.depthTest = e.depthTest, this.depthWrite = e.depthWrite, this.stencilWriteMask = e.stencilWriteMask, this.stencilFunc = e.stencilFunc, this.stencilRef = e.stencilRef, this.stencilFuncMask = e.stencilFuncMask, this.stencilFail = e.stencilFail, this.stencilZFail = e.stencilZFail, this.stencilZPass = e.stencilZPass, this.stencilWrite = e.stencilWrite;
		let t = e.clippingPlanes, n = null;
		if (t !== null) {
			let e = t.length;
			n = Array(e);
			for (let r = 0; r !== e; ++r) n[r] = t[r].clone();
		}
		return this.clippingPlanes = n, this.clipIntersection = e.clipIntersection, this.clipShadows = e.clipShadows, this.shadowSide = e.shadowSide, this.colorWrite = e.colorWrite, this.precision = e.precision, this.polygonOffset = e.polygonOffset, this.polygonOffsetFactor = e.polygonOffsetFactor, this.polygonOffsetUnits = e.polygonOffsetUnits, this.dithering = e.dithering, this.alphaTest = e.alphaTest, this.alphaHash = e.alphaHash, this.alphaToCoverage = e.alphaToCoverage, this.premultipliedAlpha = e.premultipliedAlpha, this.forceSinglePass = e.forceSinglePass, this.allowOverride = e.allowOverride, this.visible = e.visible, this.toneMapped = e.toneMapped, this.userData = JSON.parse(JSON.stringify(e.userData)), this;
	}
	dispose() {
		this.dispatchEvent({ type: "dispose" });
	}
	set needsUpdate(e) {
		e === !0 && this.version++;
	}
}, _d = /*@__PURE__*/ new Z(), vd = /*@__PURE__*/ new Z(), yd = /*@__PURE__*/ new Z(), bd = /*@__PURE__*/ new Z(), xd = class {
	constructor(e = new Z(), t = new Z(0, 0, -1)) {
		this.origin = e, this.direction = t;
	}
	set(e, t) {
		return this.origin.copy(e), this.direction.copy(t), this;
	}
	copy(e) {
		return this.origin.copy(e.origin), this.direction.copy(e.direction), this;
	}
	at(e, t) {
		return t.copy(this.origin).addScaledVector(this.direction, e);
	}
	lookAt(e) {
		return this.direction.copy(e).sub(this.origin).normalize(), this;
	}
	recast(e) {
		return this.origin.copy(this.at(e, _d)), this;
	}
	closestPointToPoint(e, t) {
		t.subVectors(e, this.origin);
		let n = t.dot(this.direction);
		return n < 0 ? t.copy(this.origin) : t.copy(this.origin).addScaledVector(this.direction, n);
	}
	distanceToPoint(e) {
		return Math.sqrt(this.distanceSqToPoint(e));
	}
	distanceSqToPoint(e) {
		let t = _d.subVectors(e, this.origin).dot(this.direction);
		return t < 0 ? this.origin.distanceToSquared(e) : (_d.copy(this.origin).addScaledVector(this.direction, t), _d.distanceToSquared(e));
	}
	distanceSqToSegment(e, t, n, r) {
		vd.copy(e).add(t).multiplyScalar(.5), yd.copy(t).sub(e).normalize(), bd.copy(this.origin).sub(vd);
		let i = e.distanceTo(t) * .5, a = -this.direction.dot(yd), o = bd.dot(this.direction), s = -bd.dot(yd), c = bd.lengthSq(), l = Math.abs(1 - a * a), u, d, f, p;
		if (l > 0) {
			if (u = a * s - o, d = a * o - s, p = i * l, u >= 0) {
				if (d >= -p) {
					if (d <= p) {
						let e = 1 / l;
						u *= e, d *= e, f = u * (u + a * d + 2 * o) + d * (a * u + d + 2 * s) + c;
					} else d = i, u = Math.max(0, -(a * d + o)), f = -u * u + d * (d + 2 * s) + c;
				} else d = -i, u = Math.max(0, -(a * d + o)), f = -u * u + d * (d + 2 * s) + c;
			} else d <= -p ? (u = Math.max(0, -(-a * i + o)), d = u > 0 ? -i : Math.min(Math.max(-i, -s), i), f = -u * u + d * (d + 2 * s) + c) : d <= p ? (u = 0, d = Math.min(Math.max(-i, -s), i), f = d * (d + 2 * s) + c) : (u = Math.max(0, -(a * i + o)), d = u > 0 ? i : Math.min(Math.max(-i, -s), i), f = -u * u + d * (d + 2 * s) + c);
		} else d = a > 0 ? -i : i, u = Math.max(0, -(a * d + o)), f = -u * u + d * (d + 2 * s) + c;
		return n && n.copy(this.origin).addScaledVector(this.direction, u), r && r.copy(vd).addScaledVector(yd, d), f;
	}
	intersectSphere(e, t) {
		if (e.radius < 0) return null;
		_d.subVectors(e.center, this.origin);
		let n = _d.dot(this.direction), r = _d.dot(_d) - n * n, i = e.radius * e.radius;
		if (r > i) return null;
		let a = Math.sqrt(i - r), o = n - a, s = n + a;
		return s < 0 ? null : o < 0 ? this.at(s, t) : this.at(o, t);
	}
	intersectsSphere(e) {
		return e.radius < 0 ? !1 : this.distanceSqToPoint(e.center) <= e.radius * e.radius;
	}
	distanceToPlane(e) {
		let t = e.normal.dot(this.direction);
		if (t === 0) return e.distanceToPoint(this.origin) === 0 ? 0 : null;
		let n = -(this.origin.dot(e.normal) + e.constant) / t;
		return n >= 0 ? n : null;
	}
	intersectPlane(e, t) {
		let n = this.distanceToPlane(e);
		return n === null ? null : this.at(n, t);
	}
	intersectsPlane(e) {
		let t = e.distanceToPoint(this.origin);
		return t === 0 || e.normal.dot(this.direction) * t < 0;
	}
	intersectBox(e, t) {
		let n, r, i, a, o, s, c = 1 / this.direction.x, l = 1 / this.direction.y, u = 1 / this.direction.z, d = this.origin;
		return c >= 0 ? (n = (e.min.x - d.x) * c, r = (e.max.x - d.x) * c) : (n = (e.max.x - d.x) * c, r = (e.min.x - d.x) * c), l >= 0 ? (i = (e.min.y - d.y) * l, a = (e.max.y - d.y) * l) : (i = (e.max.y - d.y) * l, a = (e.min.y - d.y) * l), n > a || i > r || ((i > n || isNaN(n)) && (n = i), (a < r || isNaN(r)) && (r = a), u >= 0 ? (o = (e.min.z - d.z) * u, s = (e.max.z - d.z) * u) : (o = (e.max.z - d.z) * u, s = (e.min.z - d.z) * u), n > s || o > r) || ((o > n || n !== n) && (n = o), (s < r || r !== r) && (r = s), r < 0) ? null : this.at(n >= 0 ? n : r, t);
	}
	intersectsBox(e) {
		return this.intersectBox(e, _d) !== null;
	}
	intersectTriangle(e, t, n, r, i) {
		let a = this.origin, o = this.direction, s = o.x, c = o.y, l = o.z, u = e.x - a.x, d = e.y - a.y, f = e.z - a.z, p = t.x - a.x, m = t.y - a.y, h = t.z - a.z, g = n.x - a.x, _ = n.y - a.y, v = n.z - a.z, y = Math.abs(s), b = Math.abs(c), x = Math.abs(l), S, C, w, T, E, D, O, k, A, j, M, N;
		if (y >= b && y >= x ? (w = s, D = u, A = p, N = g, s >= 0 ? (S = c, C = l, T = d, E = f, O = m, k = h, j = _, M = v) : (S = l, C = c, T = f, E = d, O = h, k = m, j = v, M = _)) : b >= x ? (w = c, D = d, A = m, N = _, c >= 0 ? (S = l, C = s, T = f, E = u, O = h, k = p, j = v, M = g) : (S = s, C = l, T = u, E = f, O = p, k = h, j = g, M = v)) : (w = l, D = f, A = h, N = v, l >= 0 ? (S = s, C = c, T = u, E = d, O = p, k = m, j = g, M = _) : (S = c, C = s, T = d, E = u, O = m, k = p, j = _, M = g)), w === 0) return null;
		let P = S / w, ee = C / w, F = 1 / w, te = T - P * D, I = E - ee * D, L = O - P * A, R = k - ee * A, z = j - P * N, B = M - ee * N, V = z * R - B * L, ne = te * B - I * z, re = L * I - R * te;
		if (r) {
			if (V < 0 || ne < 0 || re < 0) return null;
		} else if ((V < 0 || ne < 0 || re < 0) && (V > 0 || ne > 0 || re > 0)) return null;
		let ie = V + ne + re;
		if (ie === 0) return null;
		let ae = F * (V * D + ne * A + re * N);
		return (ie > 0 ? ae < 0 : ae > 0) ? null : this.at(ae / ie, i);
	}
	applyMatrix4(e) {
		return this.origin.applyMatrix4(e), this.direction.transformDirection(e), this;
	}
	equals(e) {
		return e.origin.equals(this.origin) && e.direction.equals(this.direction);
	}
	clone() {
		return new this.constructor().copy(this);
	}
}, Sd = class extends gd {
	constructor(e) {
		super(), this.isMeshBasicMaterial = !0, this.type = "MeshBasicMaterial", this.color = new mu(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new Ul(), this.combine = 0, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = !0, this.setValues(e);
	}
	copy(e) {
		return super.copy(e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapRotation.copy(e.envMapRotation), this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.fog = e.fog, this;
	}
}, Cd = /*@__PURE__*/ new Nl(), wd = /*@__PURE__*/ new xd(), Td = /*@__PURE__*/ new nd(), Ed = /*@__PURE__*/ new Z(), Dd = /*@__PURE__*/ new Z(), Od = /*@__PURE__*/ new Z(), kd = /*@__PURE__*/ new Z(), Ad = /*@__PURE__*/ new Z(), jd = /*@__PURE__*/ new Z(), Md = /*@__PURE__*/ new Z(), Nd = /*@__PURE__*/ new Z(), Pd = class extends ou {
	constructor(e = new ud(), t = new Sd()) {
		super(), this.isMesh = !0, this.type = "Mesh", this.geometry = e, this.material = t, this.morphTargetDictionary = void 0, this.morphTargetInfluences = void 0, this.count = 1, this.updateMorphTargets();
	}
	copy(e, t) {
		return super.copy(e, t), this.morphTargetInfluences = e.morphTargetInfluences === void 0 ? void 0 : e.morphTargetInfluences.slice(), this.morphTargetDictionary = e.morphTargetDictionary === void 0 ? void 0 : Object.assign({}, e.morphTargetDictionary), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
	}
	updateMorphTargets() {
		let e = this.geometry.morphAttributes, t = Object.keys(e);
		if (t.length > 0) {
			let n = e[t[0]];
			if (n !== void 0) {
				this.morphTargetInfluences = [], this.morphTargetDictionary = {};
				for (let e = 0, t = n.length; e < t; e++) {
					let t = n[e].name || String(e);
					this.morphTargetInfluences.push(0), this.morphTargetDictionary[t] = e;
				}
			}
		}
	}
	getVertexPosition(e, t) {
		let n = this.geometry, r = n.attributes.position, i = n.morphAttributes.position, a = n.morphTargetsRelative;
		t.fromBufferAttribute(r, e);
		let o = this.morphTargetInfluences;
		if (i && o) {
			jd.set(0, 0, 0);
			for (let n = 0, r = i.length; n < r; n++) {
				let r = o[n], s = i[n];
				r !== 0 && (Ad.fromBufferAttribute(s, e), a ? jd.addScaledVector(Ad, r) : jd.addScaledVector(Ad.sub(t), r));
			}
			t.add(jd);
		}
		return t;
	}
	intersectsFrustum(e) {
		return e.intersectsObject(this);
	}
	raycast(e, t) {
		let n = this.geometry, r = this.material, i = this.matrixWorld;
		r !== void 0 && (n.boundingSphere === null && n.computeBoundingSphere(), Td.copy(n.boundingSphere), Td.applyMatrix4(i), wd.copy(e.ray).recast(e.near), Td.containsPoint(wd.origin) === !1 && (wd.intersectSphere(Td, Ed) === null || wd.origin.distanceToSquared(Ed) > (e.far - e.near) ** 2) || (Cd.copy(i).invert(), wd.copy(e.ray).applyMatrix4(Cd), (n.boundingBox === null || wd.intersectsBox(n.boundingBox) !== !1) && this._computeIntersections(e, t, wd)));
	}
	_computeIntersections(e, t, n) {
		let r, i = this.geometry, a = this.material, o = i.index, s = i.attributes.position, c = i.attributes.uv, l = i.attributes.uv1, u = i.attributes.normal, d = i.groups, f = i.drawRange;
		if (o !== null) {
			if (Array.isArray(a)) for (let i = 0, s = d.length; i < s; i++) {
				let s = d[i], p = a[s.materialIndex], m = Math.max(s.start, f.start), h = Math.min(o.count, Math.min(s.start + s.count, f.start + f.count));
				for (let i = m, a = h; i < a; i += 3) {
					let a = o.getX(i), d = o.getX(i + 1), f = o.getX(i + 2);
					r = Id(this, p, e, n, c, l, u, a, d, f), r && (r.faceIndex = Math.floor(i / 3), r.face.materialIndex = s.materialIndex, t.push(r));
				}
			}
			else {
				let i = Math.max(0, f.start), s = Math.min(o.count, f.start + f.count);
				for (let d = i, f = s; d < f; d += 3) {
					let i = o.getX(d), s = o.getX(d + 1), f = o.getX(d + 2);
					r = Id(this, a, e, n, c, l, u, i, s, f), r && (r.faceIndex = Math.floor(d / 3), t.push(r));
				}
			}
		} else if (s !== void 0) {
			if (Array.isArray(a)) for (let i = 0, o = d.length; i < o; i++) {
				let o = d[i], p = a[o.materialIndex], m = Math.max(o.start, f.start), h = Math.min(s.count, Math.min(o.start + o.count, f.start + f.count));
				for (let i = m, a = h; i < a; i += 3) {
					let a = i, s = i + 1, d = i + 2;
					r = Id(this, p, e, n, c, l, u, a, s, d), r && (r.faceIndex = Math.floor(i / 3), r.face.materialIndex = o.materialIndex, t.push(r));
				}
			}
			else {
				let i = Math.max(0, f.start), o = Math.min(s.count, f.start + f.count);
				for (let s = i, d = o; s < d; s += 3) {
					let i = s, o = s + 1, d = s + 2;
					r = Id(this, a, e, n, c, l, u, i, o, d), r && (r.faceIndex = Math.floor(s / 3), t.push(r));
				}
			}
		}
	}
};
function Fd(e, t, n, r, i, a, o, s) {
	let c;
	if (c = t.side === 1 ? r.intersectTriangle(o, a, i, !0, s) : r.intersectTriangle(i, a, o, t.side === 0, s), c === null) return null;
	Nd.copy(s), Nd.applyMatrix4(e.matrixWorld);
	let l = n.ray.origin.distanceTo(Nd);
	return l < n.near || l > n.far ? null : {
		distance: l,
		point: Nd.clone(),
		object: e
	};
}
function Id(e, t, n, r, i, a, o, s, c, l) {
	e.getVertexPosition(s, Dd), e.getVertexPosition(c, Od), e.getVertexPosition(l, kd);
	let u = Fd(e, t, n, r, Dd, Od, kd, Md);
	if (u) {
		let e = new Z();
		Au.getBarycoord(Md, Dd, Od, kd, e), i && (u.uv = Au.getInterpolatedAttribute(i, s, c, l, e, new X())), a && (u.uv1 = Au.getInterpolatedAttribute(a, s, c, l, e, new X())), o && (u.normal = Au.getInterpolatedAttribute(o, s, c, l, e, new Z()), u.normal.dot(r.direction) > 0 && u.normal.multiplyScalar(-1));
		let t = {
			a: s,
			b: c,
			c: l,
			normal: new Z(),
			materialIndex: 0
		};
		Au.getNormal(Dd, Od, kd, t.normal), u.face = t, u.barycoord = e;
	}
	return u;
}
var Ld = class extends Dl {
	constructor(e = null, t = 1, n = 1, r, i, a, o, s, c = $o, l = $o, u, d) {
		super(null, a, o, s, c, l, r, i, u, d), this.isDataTexture = !0, this.image = {
			data: e,
			width: t,
			height: n
		}, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
	}
}, Rd = /*@__PURE__*/ new nd(), zd = /*@__PURE__*/ new X(.5, .5), Bd = /*@__PURE__*/ new Z(), Vd = class {
	constructor(e = new md(), t = new md(), n = new md(), r = new md(), i = new md(), a = new md()) {
		this.planes = [
			e,
			t,
			n,
			r,
			i,
			a
		];
	}
	set(e, t, n, r, i, a) {
		let o = this.planes;
		return o[0].copy(e), o[1].copy(t), o[2].copy(n), o[3].copy(r), o[4].copy(i), o[5].copy(a), this;
	}
	copy(e) {
		let t = this.planes;
		for (let n = 0; n < 6; n++) t[n].copy(e.planes[n]);
		return this;
	}
	setFromProjectionMatrix(e, t = wc, n = !1) {
		let r = this.planes, i = e.elements, a = i[0], o = i[1], s = i[2], c = i[3], l = i[4], u = i[5], d = i[6], f = i[7], p = i[8], m = i[9], h = i[10], g = i[11], _ = i[12], v = i[13], y = i[14], b = i[15];
		if (r[0].setComponents(c - a, f - l, g - p, b - _).normalize(), r[1].setComponents(c + a, f + l, g + p, b + _).normalize(), r[2].setComponents(c + o, f + u, g + m, b + v).normalize(), r[3].setComponents(c - o, f - u, g - m, b - v).normalize(), n) r[4].setComponents(s, d, h, y).normalize(), r[5].setComponents(c - s, f - d, g - h, b - y).normalize();
		else if (r[4].setComponents(c - s, f - d, g - h, b - y).normalize(), t === 2e3) r[5].setComponents(c + s, f + d, g + h, b + y).normalize();
		else if (t === 2001) r[5].setComponents(s, d, h, y).normalize();
		else throw Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " + t);
		return this;
	}
	intersectsObject(e) {
		if (e.boundingSphere !== void 0) e.boundingSphere === null && e.computeBoundingSphere(), Rd.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);
		else {
			let t = e.geometry;
			t.boundingSphere === null && t.computeBoundingSphere(), Rd.copy(t.boundingSphere).applyMatrix4(e.matrixWorld);
		}
		return this.intersectsSphere(Rd);
	}
	intersectsSprite(e) {
		return Rd.center.set(0, 0, 0), Rd.radius = .7071067811865476 + zd.distanceTo(e.center), Rd.applyMatrix4(e.matrixWorld), this.intersectsSphere(Rd);
	}
	intersectsSphere(e) {
		let t = this.planes, n = e.center, r = -e.radius;
		for (let e = 0; e < 6; e++) if (t[e].distanceToPoint(n) < r) return !1;
		return !0;
	}
	intersectsBox(e) {
		let t = this.planes;
		for (let n = 0; n < 6; n++) {
			let r = t[n];
			if (Bd.x = r.normal.x > 0 ? e.max.x : e.min.x, Bd.y = r.normal.y > 0 ? e.max.y : e.min.y, Bd.z = r.normal.z > 0 ? e.max.z : e.min.z, r.distanceToPoint(Bd) < 0) return !1;
		}
		return !0;
	}
	containsPoint(e) {
		let t = this.planes;
		for (let n = 0; n < 6; n++) if (t[n].distanceToPoint(e) < 0) return !1;
		return !0;
	}
	clone() {
		return new this.constructor().copy(this);
	}
}, Hd = /*@__PURE__*/ new Nl(), Ud = class e {
	constructor() {
		this.coordinateSystem = wc, this._frustums = [], this._count = 0;
	}
	setFromArrayCamera(e) {
		let t = e.cameras, n = this._frustums;
		for (let e = 0; e < t.length; e++) {
			let r = t[e];
			Hd.multiplyMatrices(r.projectionMatrix, r.matrixWorldInverse), n[e] === void 0 && (n[e] = new Vd()), n[e].setFromProjectionMatrix(Hd, r.coordinateSystem, r.reversedDepth);
		}
		return this._count = t.length, this;
	}
	getFrustum(e) {
		return this._frustums[e];
	}
	intersectsObject(e) {
		let t = this._frustums;
		for (let n = 0; n < this._count; n++) if (t[n].intersectsObject(e)) return !0;
		return !1;
	}
	intersectsSprite(e) {
		let t = this._frustums;
		for (let n = 0; n < this._count; n++) if (t[n].intersectsSprite(e)) return !0;
		return !1;
	}
	intersectsSphere(e) {
		let t = this._frustums;
		for (let n = 0; n < this._count; n++) if (t[n].intersectsSphere(e)) return !0;
		return !1;
	}
	intersectsBox(e) {
		let t = this._frustums;
		for (let n = 0; n < this._count; n++) if (t[n].intersectsBox(e)) return !0;
		return !1;
	}
	containsPoint(e) {
		let t = this._frustums;
		for (let n = 0; n < this._count; n++) if (t[n].containsPoint(e)) return !0;
		return !1;
	}
	copy(e) {
		this.coordinateSystem = e.coordinateSystem;
		let t = this._frustums, n = e._frustums;
		for (let r = 0; r < e._count; r++) t[r] === void 0 && (t[r] = new Vd()), t[r].copy(n[r]);
		return this._count = e._count, this;
	}
	clone() {
		return new e().copy(this);
	}
}, Wd = class extends gd {
	constructor(e) {
		super(), this.isLineBasicMaterial = !0, this.type = "LineBasicMaterial", this.color = new mu(16777215), this.map = null, this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.fog = !0, this.setValues(e);
	}
	copy(e) {
		return super.copy(e), this.color.copy(e.color), this.map = e.map, this.linewidth = e.linewidth, this.linecap = e.linecap, this.linejoin = e.linejoin, this.fog = e.fog, this;
	}
}, Gd = /*@__PURE__*/ new Z(), Kd = /*@__PURE__*/ new Z(), qd = /*@__PURE__*/ new Nl(), Jd = /*@__PURE__*/ new xd(), Yd = /*@__PURE__*/ new nd(), Xd = /*@__PURE__*/ new Z(), Zd = /*@__PURE__*/ new Z(), Qd = class extends ou {
	constructor(e = new ud(), t = new Wd()) {
		super(), this.isLine = !0, this.type = "Line", this.geometry = e, this.material = t, this.morphTargetDictionary = void 0, this.morphTargetInfluences = void 0, this.updateMorphTargets();
	}
	copy(e, t) {
		return super.copy(e, t), this.morphTargetInfluences = e.morphTargetInfluences === void 0 ? void 0 : e.morphTargetInfluences.slice(), this.morphTargetDictionary = e.morphTargetDictionary === void 0 ? void 0 : Object.assign({}, e.morphTargetDictionary), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
	}
	computeLineDistances() {
		let e = this.geometry;
		if (e.index === null) {
			let t = e.attributes.position, n = [0];
			for (let e = 1, r = t.count; e < r; e++) Gd.fromBufferAttribute(t, e - 1), Kd.fromBufferAttribute(t, e), n[e] = n[e - 1], n[e] += Gd.distanceTo(Kd);
			e.setAttribute("lineDistance", new Qu(n, 1));
		} else J("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
		return this;
	}
	intersectsFrustum(e) {
		return e.intersectsObject(this);
	}
	raycast(e, t) {
		let n = this.geometry, r = this.matrixWorld, i = e.params.Line.threshold, a = n.drawRange;
		if (n.boundingSphere === null && n.computeBoundingSphere(), Yd.copy(n.boundingSphere), Yd.applyMatrix4(r), Yd.radius += i, e.ray.intersectsSphere(Yd) === !1) return;
		qd.copy(r).invert(), Jd.copy(e.ray).applyMatrix4(qd);
		let o = i / ((this.scale.x + this.scale.y + this.scale.z) / 3), s = o * o, c = this.isLineSegments ? 2 : 1, l = n.index, u = n.attributes.position;
		if (l !== null) {
			let n = Math.max(0, a.start), r = Math.min(l.count, a.start + a.count);
			for (let i = n, a = r - 1; i < a; i += c) {
				let n = l.getX(i), r = l.getX(i + 1), a = $d(this, e, Jd, s, n, r, i);
				a && t.push(a);
			}
			if (this.isLineLoop) {
				let i = l.getX(r - 1), a = l.getX(n), o = $d(this, e, Jd, s, i, a, r - 1);
				o && t.push(o);
			}
		} else {
			let n = Math.max(0, a.start), r = Math.min(u.count, a.start + a.count);
			for (let i = n, a = r - 1; i < a; i += c) {
				let n = $d(this, e, Jd, s, i, i + 1, i);
				n && t.push(n);
			}
			if (this.isLineLoop) {
				let i = $d(this, e, Jd, s, r - 1, n, r - 1);
				i && t.push(i);
			}
		}
	}
	updateMorphTargets() {
		let e = this.geometry.morphAttributes, t = Object.keys(e);
		if (t.length > 0) {
			let n = e[t[0]];
			if (n !== void 0) {
				this.morphTargetInfluences = [], this.morphTargetDictionary = {};
				for (let e = 0, t = n.length; e < t; e++) {
					let t = n[e].name || String(e);
					this.morphTargetInfluences.push(0), this.morphTargetDictionary[t] = e;
				}
			}
		}
	}
};
function $d(e, t, n, r, i, a, o) {
	let s = e.geometry.attributes.position;
	if (Gd.fromBufferAttribute(s, i), Kd.fromBufferAttribute(s, a), n.distanceSqToSegment(Gd, Kd, Xd, Zd) > r) return;
	Xd.applyMatrix4(e.matrixWorld);
	let c = t.ray.origin.distanceTo(Xd);
	if (!(c < t.near || c > t.far)) return {
		distance: c,
		point: Zd.clone().applyMatrix4(e.matrixWorld),
		index: o,
		face: null,
		faceIndex: null,
		barycoord: null,
		object: e
	};
}
var ef = /*@__PURE__*/ new Z(), tf = /*@__PURE__*/ new Z(), nf = class extends Qd {
	constructor(e, t) {
		super(e, t), this.isLineSegments = !0, this.type = "LineSegments";
	}
	computeLineDistances() {
		let e = this.geometry;
		if (e.index === null) {
			let t = e.attributes.position, n = [];
			for (let e = 0, r = t.count; e < r; e += 2) ef.fromBufferAttribute(t, e), tf.fromBufferAttribute(t, e + 1), n[e] = e === 0 ? 0 : n[e - 1], n[e + 1] = n[e] + ef.distanceTo(tf);
			e.setAttribute("lineDistance", new Qu(n, 1));
		} else J("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
		return this;
	}
}, rf = class extends Dl {
	constructor(e = [], t = 301, n, r, i, a, o, s, c, l) {
		super(e, t, n, r, i, a, o, s, c, l), this.isCubeTexture = !0, this.flipY = !1;
	}
	get images() {
		return this.image;
	}
	set images(e) {
		this.image = e;
	}
}, af = class extends Dl {
	constructor(e, t, n = us, r, i, a, o = $o, s = $o, c, l = xs, u = 1) {
		if (l !== 1026 && l !== 1027) throw Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
		super({
			width: e,
			height: t,
			depth: u
		}, r, i, a, o, s, l, n, c), this.isDepthTexture = !0, this.flipY = !1, this.generateMipmaps = !1, this.compareFunction = null;
	}
	copy(e) {
		return super.copy(e), this.source = new Cl(Object.assign({}, e.image)), this.compareFunction = e.compareFunction, this;
	}
	toJSON(e) {
		let t = super.toJSON(e);
		return t.compareFunction = this.compareFunction, t;
	}
}, of = class extends af {
	constructor(e, t = us, n = 301, r, i, a = $o, o = $o, s, c = xs) {
		let l = {
			width: e,
			height: e,
			depth: 1
		}, u = [
			l,
			l,
			l,
			l,
			l,
			l
		];
		super(e, e, t, n, r, i, a, o, s, c), this.image = u, this.isCubeDepthTexture = !0, this.isCubeTexture = !0;
	}
	get images() {
		return this.image;
	}
	set images(e) {
		this.image = e;
	}
}, sf = class extends Dl {
	constructor(e = null) {
		super(), this.sourceTexture = e, this.isExternalTexture = !0;
	}
	copy(e) {
		return super.copy(e), this.sourceTexture = e.sourceTexture, this;
	}
}, cf = class e extends ud {
	constructor(e = 1, t = 1, n = 1, r = 1, i = 1, a = 1) {
		super(), this.type = "BoxGeometry", this.parameters = {
			width: e,
			height: t,
			depth: n,
			widthSegments: r,
			heightSegments: i,
			depthSegments: a
		};
		let o = this;
		r = Math.floor(r), i = Math.floor(i), a = Math.floor(a);
		let s = [], c = [], l = [], u = [], d = 0, f = 0;
		p("z", "y", "x", -1, -1, n, t, e, a, i, 0), p("z", "y", "x", 1, -1, n, t, -e, a, i, 1), p("x", "z", "y", 1, 1, e, n, t, r, a, 2), p("x", "z", "y", 1, -1, e, n, -t, r, a, 3), p("x", "y", "z", 1, -1, e, t, n, r, i, 4), p("x", "y", "z", -1, -1, e, t, -n, r, i, 5), this.setIndex(s), this.setAttribute("position", new Qu(c, 3)), this.setAttribute("normal", new Qu(l, 3)), this.setAttribute("uv", new Qu(u, 2));
		function p(e, t, n, r, i, a, p, m, h, g, _) {
			let v = a / h, y = p / g, b = a / 2, x = p / 2, S = m / 2, C = h + 1, w = g + 1, T = 0, E = 0, D = new Z();
			for (let a = 0; a < w; a++) {
				let o = a * y - x;
				for (let s = 0; s < C; s++) D[e] = (s * v - b) * r, D[t] = o * i, D[n] = S, c.push(D.x, D.y, D.z), D[e] = 0, D[t] = 0, D[n] = m > 0 ? 1 : -1, l.push(D.x, D.y, D.z), u.push(s / h), u.push(1 - a / g), T += 1;
			}
			for (let e = 0; e < g; e++) for (let t = 0; t < h; t++) {
				let n = d + t + C * e, r = d + t + C * (e + 1), i = d + (t + 1) + C * (e + 1), a = d + (t + 1) + C * e;
				s.push(n, r, a), s.push(r, i, a), E += 6;
			}
			o.addGroup(f, E, _), f += E, d += T;
		}
	}
	copy(e) {
		return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
	}
	static fromJSON(t) {
		return new e(t.width, t.height, t.depth, t.widthSegments, t.heightSegments, t.depthSegments);
	}
}, lf = class e extends ud {
	constructor(e = 1, t = 1, n = 1, r = 32, i = 1, a = !1, o = 0, s = Math.PI * 2) {
		super(), this.type = "CylinderGeometry", this.parameters = {
			radiusTop: e,
			radiusBottom: t,
			height: n,
			radialSegments: r,
			heightSegments: i,
			openEnded: a,
			thetaStart: o,
			thetaLength: s
		};
		let c = this;
		r = Math.floor(r), i = Math.floor(i);
		let l = [], u = [], d = [], f = [], p = 0, m = [], h = n / 2, g = 0;
		_(), a === !1 && (e > 0 && v(!0), t > 0 && v(!1)), this.setIndex(l), this.setAttribute("position", new Qu(u, 3)), this.setAttribute("normal", new Qu(d, 3)), this.setAttribute("uv", new Qu(f, 2));
		function _() {
			let a = new Z(), _ = new Z(), v = 0, y = (t - e) / n;
			for (let c = 0; c <= i; c++) {
				let l = [], g = c / i, v = g * (t - e) + e;
				for (let e = 0; e <= r; e++) {
					let t = e / r, i = t * s + o, c = Math.sin(i), m = Math.cos(i);
					_.x = v * c, _.y = -g * n + h, _.z = v * m, u.push(_.x, _.y, _.z), a.set(c, y, m).normalize(), d.push(a.x, a.y, a.z), f.push(t, 1 - g), l.push(p++);
				}
				m.push(l);
			}
			for (let n = 0; n < r; n++) for (let r = 0; r < i; r++) {
				let a = m[r][n], o = m[r + 1][n], s = m[r + 1][n + 1], c = m[r][n + 1];
				(e > 0 || r !== 0) && (l.push(a, o, c), v += 3), (t > 0 || r !== i - 1) && (l.push(o, s, c), v += 3);
			}
			c.addGroup(g, v, 0), g += v;
		}
		function v(n) {
			let i = p, a = new X(), m = new Z(), _ = 0, v = n === !0 ? e : t, y = n === !0 ? 1 : -1;
			for (let e = 1; e <= r; e++) u.push(0, h * y, 0), d.push(0, y, 0), f.push(.5, .5), p++;
			let b = p;
			for (let e = 0; e <= r; e++) {
				let t = e / r * s + o, n = Math.cos(t), i = Math.sin(t);
				m.x = v * i, m.y = h * y, m.z = v * n, u.push(m.x, m.y, m.z), d.push(0, y, 0), a.x = n * .5 + .5, a.y = i * .5 * y + .5, f.push(a.x, a.y), p++;
			}
			for (let e = 0; e < r; e++) {
				let t = i + e, r = b + e;
				n === !0 ? l.push(r, r + 1, t) : l.push(r + 1, r, t), _ += 3;
			}
			c.addGroup(g, _, n === !0 ? 1 : 2), g += _;
		}
	}
	copy(e) {
		return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
	}
	static fromJSON(t) {
		return new e(t.radiusTop, t.radiusBottom, t.height, t.radialSegments, t.heightSegments, t.openEnded, t.thetaStart, t.thetaLength);
	}
}, uf = class e extends ud {
	constructor(e = 1, t = 1, n = 1, r = 1) {
		super(), this.type = "PlaneGeometry", this.parameters = {
			width: e,
			height: t,
			widthSegments: n,
			heightSegments: r
		};
		let i = e / 2, a = t / 2, o = Math.floor(n), s = Math.floor(r), c = o + 1, l = s + 1, u = e / o, d = t / s, f = [], p = [], m = [], h = [];
		for (let e = 0; e < l; e++) {
			let t = e * d - a;
			for (let n = 0; n < c; n++) {
				let r = n * u - i;
				p.push(r, -t, 0), m.push(0, 0, 1), h.push(n / o), h.push(1 - e / s);
			}
		}
		for (let e = 0; e < s; e++) for (let t = 0; t < o; t++) {
			let n = t + c * e, r = t + c * (e + 1), i = t + 1 + c * (e + 1), a = t + 1 + c * e;
			f.push(n, r, a), f.push(r, i, a);
		}
		this.setIndex(f), this.setAttribute("position", new Qu(p, 3)), this.setAttribute("normal", new Qu(m, 3)), this.setAttribute("uv", new Qu(h, 2));
	}
	copy(e) {
		return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
	}
	static fromJSON(t) {
		return new e(t.width, t.height, t.widthSegments, t.heightSegments);
	}
}, df = class e extends ud {
	constructor(e = 1, t = 32, n = 16, r = 0, i = Math.PI * 2, a = 0, o = Math.PI) {
		super(), this.type = "SphereGeometry", this.parameters = {
			radius: e,
			widthSegments: t,
			heightSegments: n,
			phiStart: r,
			phiLength: i,
			thetaStart: a,
			thetaLength: o
		}, t = Math.max(3, Math.floor(t)), n = Math.max(2, Math.floor(n));
		let s = Math.min(a + o, Math.PI), c = 0, l = [], u = new Z(), d = new Z(), f = [], p = [], m = [], h = [];
		for (let f = 0; f <= n; f++) {
			let g = [], _ = f / n, v = a + _ * o, y = e * Math.cos(v), b = Math.sqrt(e * e - y * y), x = 0;
			f === 0 && a === 0 ? x = .5 / t : f === n && s === Math.PI && (x = -.5 / t);
			for (let e = 0; e <= t; e++) {
				let n = e / t, a = r + n * i;
				u.x = -b * Math.cos(a), u.y = y, u.z = b * Math.sin(a), p.push(u.x, u.y, u.z), d.copy(u).normalize(), m.push(d.x, d.y, d.z), h.push(n + x, 1 - _), g.push(c++);
			}
			l.push(g);
		}
		for (let e = 0; e < n; e++) for (let r = 0; r < t; r++) {
			let t = l[e][r + 1], i = l[e][r], o = l[e + 1][r], c = l[e + 1][r + 1];
			(e !== 0 || a > 0) && f.push(t, i, c), (e !== n - 1 || s < Math.PI) && f.push(i, o, c);
		}
		this.setIndex(f), this.setAttribute("position", new Qu(p, 3)), this.setAttribute("normal", new Qu(m, 3)), this.setAttribute("uv", new Qu(h, 2));
	}
	copy(e) {
		return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
	}
	static fromJSON(t) {
		return new e(t.radius, t.widthSegments, t.heightSegments, t.phiStart, t.phiLength, t.thetaStart, t.thetaLength);
	}
};
function ff(e) {
	let t = {};
	for (let n in e) {
		t[n] = {};
		for (let r in e[n]) {
			let i = e[n][r];
			if (mf(i)) i.isRenderTargetTexture ? (J("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."), t[n][r] = null) : t[n][r] = i.clone();
			else if (Array.isArray(i)) {
				if (mf(i[0])) {
					let e = [];
					for (let t = 0, n = i.length; t < n; t++) e[t] = i[t].clone();
					t[n][r] = e;
				} else t[n][r] = i.slice();
			} else t[n][r] = i;
		}
	}
	return t;
}
function pf(e) {
	let t = {};
	for (let n = 0; n < e.length; n++) {
		let r = ff(e[n]);
		for (let e in r) t[e] = r[e];
	}
	return t;
}
function mf(e) {
	return e && (e.isColor || e.isMatrix3 || e.isMatrix4 || e.isVector2 || e.isVector3 || e.isVector4 || e.isTexture || e.isQuaternion);
}
function hf(e) {
	let t = [];
	for (let n = 0; n < e.length; n++) t.push(e[n].clone());
	return t;
}
function gf(e) {
	let t = e.getRenderTarget();
	return t === null ? e.outputColorSpace : t.isXRRenderTarget === !0 ? t.texture.colorSpace : _l.workingColorSpace;
}
var _f = {
	clone: ff,
	merge: pf
}, vf = "void main() {\n	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}", yf = "void main() {\n	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}", bf = class extends gd {
	constructor(e) {
		super(), this.isShaderMaterial = !0, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = vf, this.fragmentShader = yf, this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.forceSinglePass = !0, this.extensions = {
			clipCullDistance: !1,
			multiDraw: !1
		}, this.defaultAttributeValues = {
			color: [
				1,
				1,
				1
			],
			uv: [0, 0],
			uv1: [0, 0]
		}, this.index0AttributeName = void 0, this.uniformsNeedUpdate = !1, this.glslVersion = null, e !== void 0 && this.setValues(e);
	}
	copy(e) {
		return super.copy(e), this.fragmentShader = e.fragmentShader, this.vertexShader = e.vertexShader, this.uniforms = ff(e.uniforms), this.uniformsGroups = hf(e.uniformsGroups), this.defines = Object.assign({}, e.defines), this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.fog = e.fog, this.lights = e.lights, this.clipping = e.clipping, this.extensions = Object.assign({}, e.extensions), this.glslVersion = e.glslVersion, this.defaultAttributeValues = Object.assign({}, e.defaultAttributeValues), this.index0AttributeName = e.index0AttributeName, this.uniformsNeedUpdate = e.uniformsNeedUpdate, this;
	}
	toJSON(e) {
		let t = super.toJSON(e);
		t.glslVersion = this.glslVersion, t.uniforms = {};
		for (let n in this.uniforms) {
			let r = this.uniforms[n].value;
			r && r.isTexture ? t.uniforms[n] = {
				type: "t",
				value: r.toJSON(e).uuid
			} : r && r.isColor ? t.uniforms[n] = {
				type: "c",
				value: r.getHex()
			} : r && r.isVector2 ? t.uniforms[n] = {
				type: "v2",
				value: r.toArray()
			} : r && r.isVector3 ? t.uniforms[n] = {
				type: "v3",
				value: r.toArray()
			} : r && r.isVector4 ? t.uniforms[n] = {
				type: "v4",
				value: r.toArray()
			} : r && r.isMatrix3 ? t.uniforms[n] = {
				type: "m3",
				value: r.toArray()
			} : r && r.isMatrix4 ? t.uniforms[n] = {
				type: "m4",
				value: r.toArray()
			} : t.uniforms[n] = { value: r };
		}
		Object.keys(this.defines).length > 0 && (t.defines = this.defines), t.vertexShader = this.vertexShader, t.fragmentShader = this.fragmentShader, t.lights = this.lights, t.clipping = this.clipping;
		let n = {};
		for (let e in this.extensions) this.extensions[e] === !0 && (n[e] = !0);
		return Object.keys(n).length > 0 && (t.extensions = n), t;
	}
	fromJSON(e, t) {
		if (super.fromJSON(e, t), e.uniforms !== void 0) for (let n in e.uniforms) {
			let r = e.uniforms[n];
			switch (this.uniforms[n] = {}, r.type) {
				case "t":
					this.uniforms[n].value = t[r.value] || null;
					break;
				case "c":
					this.uniforms[n].value = new mu().setHex(r.value);
					break;
				case "v2":
					this.uniforms[n].value = new X().fromArray(r.value);
					break;
				case "v3":
					this.uniforms[n].value = new Z().fromArray(r.value);
					break;
				case "v4":
					this.uniforms[n].value = new Ol().fromArray(r.value);
					break;
				case "m3":
					this.uniforms[n].value = new Q().fromArray(r.value);
					break;
				case "m4":
					this.uniforms[n].value = new Nl().fromArray(r.value);
					break;
				default: this.uniforms[n].value = r.value;
			}
		}
		if (e.defines !== void 0 && (this.defines = e.defines), e.vertexShader !== void 0 && (this.vertexShader = e.vertexShader), e.fragmentShader !== void 0 && (this.fragmentShader = e.fragmentShader), e.glslVersion !== void 0 && (this.glslVersion = e.glslVersion), e.extensions !== void 0) for (let t in e.extensions) this.extensions[t] = e.extensions[t];
		return e.lights !== void 0 && (this.lights = e.lights), e.clipping !== void 0 && (this.clipping = e.clipping), this;
	}
}, xf = class extends bf {
	constructor(e) {
		super(e), this.isRawShaderMaterial = !0, this.type = "RawShaderMaterial";
	}
}, Sf = class extends gd {
	constructor(e) {
		super(), this.isMeshLambertMaterial = !0, this.type = "MeshLambertMaterial", this.color = new mu(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new mu(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new X(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new Ul(), this.combine = 0, this.reflectivity = 1, this.envMapIntensity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.fog = !0, this.setValues(e);
	}
	copy(e) {
		return super.copy(e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapRotation.copy(e.envMapRotation), this.combine = e.combine, this.reflectivity = e.reflectivity, this.envMapIntensity = e.envMapIntensity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.flatShading = e.flatShading, this.fog = e.fog, this;
	}
}, Cf = class extends gd {
	constructor(e) {
		super(), this.isMeshDepthMaterial = !0, this.type = "MeshDepthMaterial", this.depthPacking = _c, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.setValues(e);
	}
	copy(e) {
		return super.copy(e), this.depthPacking = e.depthPacking, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this;
	}
}, wf = class extends gd {
	constructor(e) {
		super(), this.isMeshDistanceMaterial = !0, this.type = "MeshDistanceMaterial", this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(e);
	}
	copy(e) {
		return super.copy(e), this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this;
	}
};
function Tf(e, t) {
	return !e || e.constructor === t ? e : typeof t.BYTES_PER_ELEMENT == "number" ? new t(e) : Array.prototype.slice.call(e);
}
function Ef(e) {
	return e !== void 0 && e.inTangents !== void 0 && e.outTangents !== void 0;
}
var Df = class {
	constructor(e, t, n, r) {
		this.parameterPositions = e, this._cachedIndex = 0, this.resultBuffer = r === void 0 ? new t.constructor(n) : r, this.sampleValues = t, this.valueSize = n, this.settings = null, this.DefaultSettings_ = {};
	}
	evaluate(e) {
		let t = this.parameterPositions, n = this._cachedIndex, r = t[n], i = t[n - 1];
		validate_interval: {
			seek: {
				let a;
				linear_scan: {
					forward_scan: if (!(e < r)) {
						for (let a = n + 2;;) {
							if (r === void 0) {
								if (e < i) break forward_scan;
								return n = t.length, this._cachedIndex = n, this.copySampleValue_(n - 1);
							}
							if (n === a) break;
							if (i = r, r = t[++n], e < r) break seek;
						}
						a = t.length;
						break linear_scan;
					}
					if (!(e >= i)) {
						let o = t[1];
						e < o && (n = 2, i = o);
						for (let a = n - 2;;) {
							if (i === void 0) return this._cachedIndex = 0, this.copySampleValue_(0);
							if (n === a) break;
							if (r = i, i = t[--n - 1], e >= i) break seek;
						}
						a = n, n = 0;
						break linear_scan;
					}
					break validate_interval;
				}
				for (; n < a;) {
					let r = n + a >>> 1;
					e < t[r] ? a = r : n = r + 1;
				}
				if (r = t[n], i = t[n - 1], i === void 0) return this._cachedIndex = 0, this.copySampleValue_(0);
				if (r === void 0) return n = t.length, this._cachedIndex = n, this.copySampleValue_(n - 1);
			}
			this._cachedIndex = n, this.intervalChanged_(n, i, r);
		}
		return this.interpolate_(n, i, e, r);
	}
	getSettings_() {
		return this.settings || this.DefaultSettings_;
	}
	copySampleValue_(e) {
		let t = this.resultBuffer, n = this.sampleValues, r = this.valueSize, i = e * r;
		for (let e = 0; e !== r; ++e) t[e] = n[i + e];
		return t;
	}
	interpolate_() {
		throw Error("THREE.Interpolant: Call to abstract method.");
	}
	intervalChanged_() {}
}, Of = class extends Df {
	constructor(e, t, n, r) {
		super(e, t, n, r), this._weightPrev = -0, this._offsetPrev = -0, this._weightNext = -0, this._offsetNext = -0, this.DefaultSettings_ = {
			endingStart: mc,
			endingEnd: mc
		};
	}
	intervalChanged_(e, t, n) {
		let r = this.parameterPositions, i = e - 2, a = e + 1, o = r[i], s = r[a];
		if (o === void 0) switch (this.getSettings_().endingStart) {
			case hc:
				i = e, o = 2 * t - n;
				break;
			case gc:
				i = r.length - 2, o = t + r[i] - r[i + 1];
				break;
			default: i = e, o = n;
		}
		if (s === void 0) switch (this.getSettings_().endingEnd) {
			case hc:
				a = e, s = 2 * n - t;
				break;
			case gc:
				a = 1, s = n + r[1] - r[0];
				break;
			default: a = e - 1, s = t;
		}
		let c = (n - t) * .5, l = this.valueSize;
		this._weightPrev = c / (t - o), this._weightNext = c / (s - n), this._offsetPrev = i * l, this._offsetNext = a * l;
	}
	interpolate_(e, t, n, r) {
		let i = this.resultBuffer, a = this.sampleValues, o = this.valueSize, s = e * o, c = s - o, l = this._offsetPrev, u = this._offsetNext, d = this._weightPrev, f = this._weightNext, p = (n - t) / (r - t), m = p * p, h = m * p, g = -d * h + 2 * d * m - d * p, _ = (1 + d) * h + (-1.5 - 2 * d) * m + (-.5 + d) * p + 1, v = (-1 - f) * h + (1.5 + f) * m + .5 * p, y = f * h - f * m;
		for (let e = 0; e !== o; ++e) i[e] = g * a[l + e] + _ * a[c + e] + v * a[s + e] + y * a[u + e];
		return i;
	}
}, kf = class extends Df {
	constructor(e, t, n, r) {
		super(e, t, n, r);
	}
	interpolate_(e, t, n, r) {
		let i = this.resultBuffer, a = this.sampleValues, o = this.valueSize, s = e * o, c = s - o, l = (n - t) / (r - t), u = 1 - l;
		for (let e = 0; e !== o; ++e) i[e] = a[c + e] * u + a[s + e] * l;
		return i;
	}
}, Af = class extends Df {
	constructor(e, t, n, r) {
		super(e, t, n, r);
	}
	interpolate_(e) {
		return this.copySampleValue_(e - 1);
	}
}, jf = class extends Df {
	interpolate_(e, t, n, r) {
		let i = this.resultBuffer, a = this.sampleValues, o = this.valueSize, s = e * o, c = s - o, l = this.inTangents, u = this.outTangents;
		if (!l || !u) {
			let e = (n - t) / (r - t), l = 1 - e;
			for (let t = 0; t !== o; ++t) i[t] = a[c + t] * l + a[s + t] * e;
			return i;
		}
		let d = o * 2, f = e - 1;
		for (let p = 0; p !== o; ++p) {
			let o = a[c + p], m = a[s + p], h = f * d + p * 2, g = u[h], _ = u[h + 1], v = e * d + p * 2, y = l[v], b = l[v + 1], x = Pf(n, t, g, y, r);
			i[p] = Mf(x, o, _, b, m);
		}
		return i;
	}
};
function Mf(e, t, n, r, i) {
	let a = 1 - e;
	return a * a * a * t + 3 * a * a * e * n + 3 * a * e * e * r + e * e * e * i;
}
function Nf(e, t, n, r, i) {
	let a = 1 - e;
	return 3 * a * a * (n - t) + 6 * a * e * (r - n) + 3 * e * e * (i - r);
}
function Pf(e, t, n, r, i) {
	let a = (e - t) / (i - t);
	for (let o = 0; o < 8; o++) {
		let o = Mf(a, t, n, r, i) - e;
		if (Math.abs(o) < 1e-10) break;
		let s = Nf(a, t, n, r, i);
		if (Math.abs(s) < 1e-10) break;
		a = Math.max(0, Math.min(1, a - o / s));
	}
	return a;
}
var Ff = class {
	constructor(e, t, n, r) {
		if (e === void 0) throw Error("THREE.KeyframeTrack: track name is undefined");
		if (t === void 0 || t.length === 0) throw Error("THREE.KeyframeTrack: no keyframes in track named " + e);
		this.name = e, this.times = Tf(t, this.TimeBufferType), this.values = Tf(n, this.ValueBufferType), this.setInterpolation(r || this.DefaultInterpolation);
	}
	static toJSON(e) {
		let t = e.constructor, n;
		if (t.toJSON !== this.toJSON) n = t.toJSON(e);
		else {
			n = {
				name: e.name,
				times: Tf(e.times, Array),
				values: Tf(e.values, Array)
			};
			let t = e.getInterpolation();
			t !== e.DefaultInterpolation && (n.interpolation = t), Ef(e.settings) && (n.settings = {
				inTangents: Tf(e.settings.inTangents, Array),
				outTangents: Tf(e.settings.outTangents, Array)
			});
		}
		return n.type = e.ValueTypeName, n;
	}
	InterpolantFactoryMethodDiscrete(e) {
		return new Af(this.times, this.values, this.getValueSize(), e);
	}
	InterpolantFactoryMethodLinear(e) {
		return new kf(this.times, this.values, this.getValueSize(), e);
	}
	InterpolantFactoryMethodSmooth(e) {
		return new Of(this.times, this.values, this.getValueSize(), e);
	}
	InterpolantFactoryMethodBezier(e) {
		let t = new jf(this.times, this.values, this.getValueSize(), e);
		return this.settings && (t.inTangents = this.settings.inTangents, t.outTangents = this.settings.outTangents), t;
	}
	setInterpolation(e) {
		let t;
		switch (e) {
			case uc:
				t = this.InterpolantFactoryMethodDiscrete;
				break;
			case dc:
				t = this.InterpolantFactoryMethodLinear;
				break;
			case fc:
				t = this.InterpolantFactoryMethodSmooth;
				break;
			case pc: t = this.InterpolantFactoryMethodBezier;
		}
		if (t === void 0) {
			let t = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name;
			if (this.createInterpolant === void 0) {
				if (e !== this.DefaultInterpolation) this.setInterpolation(this.DefaultInterpolation);
				else throw Error(t);
			}
			return J("KeyframeTrack:", t), this;
		}
		return this.createInterpolant = t, this;
	}
	getInterpolation() {
		switch (this.createInterpolant) {
			case this.InterpolantFactoryMethodDiscrete: return uc;
			case this.InterpolantFactoryMethodLinear: return dc;
			case this.InterpolantFactoryMethodSmooth: return fc;
			case this.InterpolantFactoryMethodBezier: return pc;
		}
	}
	getValueSize() {
		return this.values.length / this.times.length;
	}
	shift(e) {
		if (e !== 0) {
			let t = this.times;
			for (let n = 0, r = t.length; n !== r; ++n) t[n] += e;
			Ef(this.settings) && (If(this.settings.inTangents, e), If(this.settings.outTangents, e));
		}
		return this;
	}
	scale(e) {
		if (e !== 1) {
			let t = this.times;
			for (let n = 0, r = t.length; n !== r; ++n) t[n] *= e;
			Ef(this.settings) && (Lf(this.settings.inTangents, e), Lf(this.settings.outTangents, e));
		}
		return this;
	}
	trim(e, t) {
		let n = this.times, r = n.length, i = 0, a = r - 1;
		for (; i !== r && n[i] < e;) ++i;
		for (; a !== -1 && n[a] > t;) --a;
		if (++a, i !== 0 || a !== r) {
			i >= a && (a = Math.max(a, 1), i = a - 1);
			let e = this.getValueSize();
			this.times = n.slice(i, a), this.values = this.values.slice(i * e, a * e);
		}
		return this;
	}
	validate() {
		let e = !0, t = this.getValueSize();
		t - Math.floor(t) !== 0 && (Y("KeyframeTrack: Invalid value size in track.", this), e = !1);
		let n = this.times, r = this.values, i = n.length;
		i === 0 && (Y("KeyframeTrack: Track is empty.", this), e = !1);
		let a = null;
		for (let t = 0; t !== i; t++) {
			let r = n[t];
			if (typeof r == "number" && isNaN(r)) {
				Y("KeyframeTrack: Time is not a valid number.", this, t, r), e = !1;
				break;
			}
			if (a !== null && a > r) {
				Y("KeyframeTrack: Out of order keys.", this, t, r, a), e = !1;
				break;
			}
			a = r;
		}
		if (r !== void 0 && Ec(r)) for (let t = 0, n = r.length; t !== n; ++t) {
			let n = r[t];
			if (isNaN(n)) {
				Y("KeyframeTrack: Value is not a valid number.", this, t, n), e = !1;
				break;
			}
		}
		return e;
	}
	optimize() {
		let e = this.times.slice(), t = this.values.slice(), n = this.getValueSize(), r = this.getInterpolation() === fc, i = e.length - 1, a = 1;
		for (let o = 1; o < i; ++o) {
			let i = !1, s = e[o];
			if (s !== e[o + 1] && (o !== 1 || s !== e[0])) {
				if (r) i = !0;
				else {
					let e = o * n, r = e - n, a = e + n;
					for (let o = 0; o !== n; ++o) {
						let n = t[e + o];
						if (n !== t[r + o] || n !== t[a + o]) {
							i = !0;
							break;
						}
					}
				}
			}
			if (i) {
				if (o !== a) {
					e[a] = e[o];
					let r = o * n, i = a * n;
					for (let e = 0; e !== n; ++e) t[i + e] = t[r + e];
				}
				++a;
			}
		}
		if (i > 0) {
			e[a] = e[i];
			for (let e = i * n, r = a * n, o = 0; o !== n; ++o) t[r + o] = t[e + o];
			++a;
		}
		return a === e.length ? (this.times = e, this.values = t) : (this.times = e.slice(0, a), this.values = t.slice(0, a * n)), this;
	}
	clone() {
		let e = this.times.slice(), t = this.values.slice(), n = this.constructor, r = new n(this.name, e, t);
		return r.createInterpolant = this.createInterpolant, Ef(this.settings) && (r.settings = {
			inTangents: this.settings.inTangents.slice(),
			outTangents: this.settings.outTangents.slice()
		}), r;
	}
};
function If(e, t) {
	for (let n = 0, r = e.length; n !== r; n += 2) e[n] += t;
}
function Lf(e, t) {
	for (let n = 0, r = e.length; n !== r; n += 2) e[n] *= t;
}
Ff.prototype.ValueTypeName = "", Ff.prototype.TimeBufferType = Float32Array, Ff.prototype.ValueBufferType = Float32Array, Ff.prototype.DefaultInterpolation = dc;
var Rf = class extends Ff {
	constructor(e, t, n) {
		super(e, t, n);
	}
};
Rf.prototype.ValueTypeName = "bool", Rf.prototype.ValueBufferType = Array, Rf.prototype.DefaultInterpolation = uc, Rf.prototype.InterpolantFactoryMethodLinear = void 0, Rf.prototype.InterpolantFactoryMethodSmooth = void 0;
var zf = class extends Ff {
	constructor(e, t, n, r) {
		super(e, t, n, r);
	}
};
zf.prototype.ValueTypeName = "color";
var Bf = class extends Ff {
	constructor(e, t, n, r) {
		super(e, t, n, r);
	}
};
Bf.prototype.ValueTypeName = "number";
var Vf = class extends Df {
	constructor(e, t, n, r) {
		super(e, t, n, r);
	}
	interpolate_(e, t, n, r) {
		let i = this.resultBuffer, a = this.sampleValues, o = this.valueSize, s = (n - t) / (r - t), c = e * o;
		for (let e = c + o; c !== e; c += 4) ul.slerpFlat(i, 0, a, c - o, a, c, s);
		return i;
	}
}, Hf = class extends Ff {
	constructor(e, t, n, r) {
		super(e, t, n, r);
	}
	InterpolantFactoryMethodLinear(e) {
		return new Vf(this.times, this.values, this.getValueSize(), e);
	}
};
Hf.prototype.ValueTypeName = "quaternion", Hf.prototype.InterpolantFactoryMethodSmooth = void 0;
var Uf = class extends Ff {
	constructor(e, t, n) {
		super(e, t, n);
	}
};
Uf.prototype.ValueTypeName = "string", Uf.prototype.ValueBufferType = Array, Uf.prototype.DefaultInterpolation = uc, Uf.prototype.InterpolantFactoryMethodLinear = void 0, Uf.prototype.InterpolantFactoryMethodSmooth = void 0;
var Wf = class extends Ff {
	constructor(e, t, n, r) {
		super(e, t, n, r);
	}
};
Wf.prototype.ValueTypeName = "vector";
var Gf = class extends ou {
	static registerNode(e) {
		this.prototype._lightNode = e;
	}
	constructor(e, t = 1) {
		super(), this.isLight = !0, this.type = "Light", this.color = new mu(e), this.intensity = t;
	}
	copy(e, t) {
		return super.copy(e, t), this.color.copy(e.color), this.intensity = e.intensity, this;
	}
	toJSON(e) {
		let t = super.toJSON(e);
		return t.object.color = this.color.getHex(), t.object.intensity = this.intensity, t;
	}
}, Kf = class extends Gf {
	constructor(e, t, n) {
		super(e, n), this.isHemisphereLight = !0, this.type = "HemisphereLight", this.position.copy(ou.DEFAULT_UP), this.updateMatrix(), this.groundColor = new mu(t);
	}
	copy(e, t) {
		return super.copy(e, t), this.groundColor.copy(e.groundColor), this;
	}
	toJSON(e) {
		let t = super.toJSON(e);
		return t.object.groundColor = this.groundColor.getHex(), t;
	}
}, qf = /*@__PURE__*/ new Nl(), Jf = /*@__PURE__*/ new Z(), Yf = /*@__PURE__*/ new Z(), Xf = class {
	constructor(e) {
		this.camera = e, this.intensity = 1, this.bias = 0, this.biasNode = null, this.normalBias = 0, this.radius = 1, this.blurSamples = 8, this.mapSize = new X(512, 512), this.mapType = as, this.map = null, this.mapPass = null, this.matrix = new Nl(), this.autoUpdate = !0, this.needsUpdate = !1, this._frustum = new Vd(), this._frameExtents = new X(1, 1), this._viewportCount = 1, this._viewports = [new Ol(0, 0, 1, 1)];
	}
	getViewportCount() {
		return this._viewportCount;
	}
	getCamera() {
		return this.camera;
	}
	getFrustum() {
		return this._frustum;
	}
	updateMatrices(e) {
		let t = this.camera;
		Jf.setFromMatrixPosition(e.matrixWorld), t.position.copy(Jf), Yf.setFromMatrixPosition(e.target.matrixWorld), t.lookAt(Yf), t.updateMatrixWorld(), this._updateMatrix(t, this.matrix, this._frustum);
	}
	_updateMatrix(e, t, n, r) {
		qf.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse), n.setFromProjectionMatrix(qf, e.coordinateSystem, e.reversedDepth);
		let i = this._frameExtents, a = r ? r.z / i.x : 1, o = r ? r.w / i.y : 1, s = r ? r.x / i.x : 0, c = r ? r.y / i.y : 0;
		e.coordinateSystem === 2001 || e.reversedDepth ? t.set(.5 * a, 0, 0, .5 * a + s, 0, .5 * o, 0, .5 * o + c, 0, 0, 1, 0, 0, 0, 0, 1) : t.set(.5 * a, 0, 0, .5 * a + s, 0, .5 * o, 0, .5 * o + c, 0, 0, .5, .5, 0, 0, 0, 1), t.multiply(qf);
	}
	getViewport(e) {
		return this._viewports[e];
	}
	getFrameExtents() {
		return this._frameExtents;
	}
	dispose() {
		this.map && this.map.dispose(), this.mapPass && this.mapPass.dispose();
	}
	copy(e) {
		return this.camera = e.camera.clone(), this.intensity = e.intensity, this.bias = e.bias, this.radius = e.radius, this.autoUpdate = e.autoUpdate, this.needsUpdate = e.needsUpdate, this.normalBias = e.normalBias, this.blurSamples = e.blurSamples, this.mapSize.copy(e.mapSize), this.mapType = e.mapType, this.biasNode = e.biasNode, this;
	}
	clone() {
		return new this.constructor().copy(this);
	}
	toJSON() {
		let e = {};
		return e.intensity = this.intensity, e.bias = this.bias, e.normalBias = this.normalBias, e.radius = this.radius, e.blurSamples = this.blurSamples, e.mapSize = this.mapSize.toArray(), e.mapType = this.mapType, e.camera = this.camera.toJSON(!1).object, delete e.camera.matrix, e;
	}
}, Zf = /*@__PURE__*/ new Z(), Qf = /*@__PURE__*/ new ul(), $f = /*@__PURE__*/ new Z(), ep = class extends ou {
	constructor() {
		super(), this.isCamera = !0, this.type = "Camera", this.matrixWorldInverse = new Nl(), this.projectionMatrix = new Nl(), this.projectionMatrixInverse = new Nl(), this.coordinateSystem = wc, this._reversedDepth = !1;
	}
	get reversedDepth() {
		return this._reversedDepth;
	}
	copy(e, t) {
		return super.copy(e, t), this.matrixWorldInverse.copy(e.matrixWorldInverse), this.projectionMatrix.copy(e.projectionMatrix), this.projectionMatrixInverse.copy(e.projectionMatrixInverse), this.coordinateSystem = e.coordinateSystem, this;
	}
	getWorldDirection(e) {
		return super.getWorldDirection(e).negate();
	}
	updateMatrixWorld(e) {
		super.updateMatrixWorld(e), this.matrixWorld.decompose(Zf, Qf, $f), $f.x === 1 && $f.y === 1 && $f.z === 1 ? this.matrixWorldInverse.copy(this.matrixWorld).invert() : this.matrixWorldInverse.compose(Zf, Qf, $f.set(1, 1, 1)).invert();
	}
	updateWorldMatrix(e, t, n = !1) {
		super.updateWorldMatrix(e, t, n), this.matrixWorld.decompose(Zf, Qf, $f), $f.x === 1 && $f.y === 1 && $f.z === 1 ? this.matrixWorldInverse.copy(this.matrixWorld).invert() : this.matrixWorldInverse.compose(Zf, Qf, $f.set(1, 1, 1)).invert();
	}
	clone() {
		return new this.constructor().copy(this);
	}
}, tp = /*@__PURE__*/ new Z(), np = /*@__PURE__*/ new X(), rp = /*@__PURE__*/ new X(), ip = class extends ep {
	constructor(e = 50, t = 1, n = .1, r = 2e3) {
		super(), this.isPerspectiveCamera = !0, this.type = "PerspectiveCamera", this.fov = e, this.zoom = 1, this.near = n, this.far = r, this.focus = 10, this.aspect = t, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix();
	}
	copy(e, t) {
		return super.copy(e, t), this.fov = e.fov, this.zoom = e.zoom, this.near = e.near, this.far = e.far, this.focus = e.focus, this.aspect = e.aspect, this.view = e.view === null ? null : Object.assign({}, e.view), this.filmGauge = e.filmGauge, this.filmOffset = e.filmOffset, this;
	}
	setFocalLength(e) {
		let t = .5 * this.getFilmHeight() / e;
		this.fov = zc * 2 * Math.atan(t), this.updateProjectionMatrix();
	}
	getFocalLength() {
		let e = Math.tan(Rc * .5 * this.fov);
		return .5 * this.getFilmHeight() / e;
	}
	getEffectiveFOV() {
		return zc * 2 * Math.atan(Math.tan(Rc * .5 * this.fov) / this.zoom);
	}
	getFilmWidth() {
		return this.filmGauge * Math.min(this.aspect, 1);
	}
	getFilmHeight() {
		return this.filmGauge / Math.max(this.aspect, 1);
	}
	getViewBounds(e, t, n) {
		tp.set(-1, -1, .5).applyMatrix4(this.projectionMatrixInverse), t.set(tp.x, tp.y).multiplyScalar(-e / tp.z), tp.set(1, 1, .5).applyMatrix4(this.projectionMatrixInverse), n.set(tp.x, tp.y).multiplyScalar(-e / tp.z);
	}
	getViewSize(e, t) {
		return this.getViewBounds(e, np, rp), t.subVectors(rp, np);
	}
	setViewOffset(e, t, n, r, i, a) {
		this.aspect = e / t, this.view === null && (this.view = {
			enabled: !0,
			fullWidth: 1,
			fullHeight: 1,
			offsetX: 0,
			offsetY: 0,
			width: 1,
			height: 1
		}), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = r, this.view.width = i, this.view.height = a, this.updateProjectionMatrix();
	}
	clearViewOffset() {
		this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
	}
	updateProjectionMatrix() {
		let e = this.near, t = e * Math.tan(Rc * .5 * this.fov) / this.zoom, n = 2 * t, r = this.aspect * n, i = -.5 * r, a = this.view;
		if (this.view !== null && this.view.enabled) {
			let e = a.fullWidth, o = a.fullHeight;
			i += a.offsetX * r / e, t -= a.offsetY * n / o, r *= a.width / e, n *= a.height / o;
		}
		let o = this.filmOffset;
		o !== 0 && (i += e * o / this.getFilmWidth()), this.projectionMatrix.makePerspective(i, i + r, t, t - n, e, this.far, this.coordinateSystem, this.reversedDepth), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
	}
	toJSON(e) {
		let t = super.toJSON(e);
		return t.object.fov = this.fov, t.object.zoom = this.zoom, t.object.near = this.near, t.object.far = this.far, t.object.focus = this.focus, t.object.aspect = this.aspect, this.view !== null && (t.object.view = Object.assign({}, this.view)), t.object.filmGauge = this.filmGauge, t.object.filmOffset = this.filmOffset, t;
	}
}, ap = class extends ep {
	constructor(e = -1, t = 1, n = 1, r = -1, i = .1, a = 2e3) {
		super(), this.isOrthographicCamera = !0, this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = e, this.right = t, this.top = n, this.bottom = r, this.near = i, this.far = a, this.updateProjectionMatrix();
	}
	copy(e, t) {
		return super.copy(e, t), this.left = e.left, this.right = e.right, this.top = e.top, this.bottom = e.bottom, this.near = e.near, this.far = e.far, this.zoom = e.zoom, this.view = e.view === null ? null : Object.assign({}, e.view), this;
	}
	setViewOffset(e, t, n, r, i, a) {
		this.view === null && (this.view = {
			enabled: !0,
			fullWidth: 1,
			fullHeight: 1,
			offsetX: 0,
			offsetY: 0,
			width: 1,
			height: 1
		}), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = r, this.view.width = i, this.view.height = a, this.updateProjectionMatrix();
	}
	clearViewOffset() {
		this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
	}
	updateProjectionMatrix() {
		let e = (this.right - this.left) / (2 * this.zoom), t = (this.top - this.bottom) / (2 * this.zoom), n = (this.right + this.left) / 2, r = (this.top + this.bottom) / 2, i = n - e, a = n + e, o = r + t, s = r - t;
		if (this.view !== null && this.view.enabled) {
			let e = (this.right - this.left) / this.view.fullWidth / this.zoom, t = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
			i += e * this.view.offsetX, a = i + e * this.view.width, o -= t * this.view.offsetY, s = o - t * this.view.height;
		}
		this.projectionMatrix.makeOrthographic(i, a, o, s, this.near, this.far, this.coordinateSystem, this.reversedDepth), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
	}
	toJSON(e) {
		let t = super.toJSON(e);
		return t.object.zoom = this.zoom, t.object.left = this.left, t.object.right = this.right, t.object.top = this.top, t.object.bottom = this.bottom, t.object.near = this.near, t.object.far = this.far, this.view !== null && (t.object.view = Object.assign({}, this.view)), t;
	}
}, op = class extends Xf {
	constructor() {
		super(new ap(-5, 5, 5, -5, .5, 500)), this.isDirectionalLightShadow = !0;
	}
}, sp = class extends Gf {
	constructor(e, t) {
		super(e, t), this.isDirectionalLight = !0, this.type = "DirectionalLight", this.position.copy(ou.DEFAULT_UP), this.updateMatrix(), this.target = new ou(), this.shadow = new op();
	}
	dispose() {
		super.dispose(), this.shadow.dispose();
	}
	copy(e) {
		return super.copy(e), this.target = e.target.clone(), this.shadow = e.shadow.clone(), this;
	}
	toJSON(e) {
		let t = super.toJSON(e);
		return t.object.shadow = this.shadow.toJSON(), t.object.target = this.target.uuid, t;
	}
}, cp = -90, lp = 1, up = class extends ou {
	constructor(e, t, n) {
		super(), this.type = "CubeCamera", this.renderTarget = n, this.coordinateSystem = null, this.activeMipmapLevel = 0;
		let r = new ip(cp, lp, e, t);
		r.layers = this.layers, this.add(r);
		let i = new ip(cp, lp, e, t);
		i.layers = this.layers, this.add(i);
		let a = new ip(cp, lp, e, t);
		a.layers = this.layers, this.add(a);
		let o = new ip(cp, lp, e, t);
		o.layers = this.layers, this.add(o);
		let s = new ip(cp, lp, e, t);
		s.layers = this.layers, this.add(s);
		let c = new ip(cp, lp, e, t);
		c.layers = this.layers, this.add(c);
	}
	updateCoordinateSystem() {
		let e = this.coordinateSystem, t = this.children.concat(), [n, r, i, a, o, s] = t;
		for (let e of t) this.remove(e);
		if (e === 2e3) n.up.set(0, 1, 0), n.lookAt(1, 0, 0), r.up.set(0, 1, 0), r.lookAt(-1, 0, 0), i.up.set(0, 0, -1), i.lookAt(0, 1, 0), a.up.set(0, 0, 1), a.lookAt(0, -1, 0), o.up.set(0, 1, 0), o.lookAt(0, 0, 1), s.up.set(0, 1, 0), s.lookAt(0, 0, -1);
		else if (e === 2001) n.up.set(0, -1, 0), n.lookAt(-1, 0, 0), r.up.set(0, -1, 0), r.lookAt(1, 0, 0), i.up.set(0, 0, 1), i.lookAt(0, 1, 0), a.up.set(0, 0, -1), a.lookAt(0, -1, 0), o.up.set(0, -1, 0), o.lookAt(0, 0, 1), s.up.set(0, -1, 0), s.lookAt(0, 0, -1);
		else throw Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " + e);
		for (let e of t) this.add(e), e.updateMatrixWorld();
	}
	update(e, t) {
		this.parent === null && this.updateMatrixWorld();
		let { renderTarget: n, activeMipmapLevel: r } = this;
		this.coordinateSystem !== e.coordinateSystem && (this.coordinateSystem = e.coordinateSystem, this.updateCoordinateSystem());
		let [i, a, o, s, c, l] = this.children, u = e.getRenderTarget(), d = e.getActiveCubeFace(), f = e.getActiveMipmapLevel(), p = e.xr.enabled;
		e.xr.enabled = !1;
		let m = n.texture.mipmapsAutoUpdate;
		n.texture.mipmapsAutoUpdate = !1;
		let h = !1;
		h = e.isWebGLRenderer === !0 ? e.state.buffers.depth.getReversed() : e.reversedDepthBuffer, e.setRenderTarget(n, 0, r), h && e.autoClear === !1 && e.clearDepth(), e.render(t, i), e.setRenderTarget(n, 1, r), h && e.autoClear === !1 && e.clearDepth(), e.render(t, a), e.setRenderTarget(n, 2, r), h && e.autoClear === !1 && e.clearDepth(), e.render(t, o), e.setRenderTarget(n, 3, r), h && e.autoClear === !1 && e.clearDepth(), e.render(t, s), e.setRenderTarget(n, 4, r), h && e.autoClear === !1 && e.clearDepth(), e.render(t, c), n.texture.mipmapsAutoUpdate = m, e.setRenderTarget(n, 5, r), h && e.autoClear === !1 && e.clearDepth(), e.render(t, l), e.setRenderTarget(u, d, f), e.xr.enabled = p, n.texture.needsPMREMUpdate = !0;
	}
}, dp = class extends ip {
	constructor(e = []) {
		super(), this.isArrayCamera = !0, this.isMultiViewCamera = !1, this.cameras = e, this.perCameraFrustumCulled = !1;
	}
}, fp = "\\[\\]\\.:\\/", pp = /* @__PURE__ */ RegExp("[\\[\\]\\.:\\/]", "g"), mp = "[^\\[\\]\\.:\\/]", hp = "[^" + fp.replace("\\.", "") + "]", gp = /*@__PURE__*/ "((?:WC+[\\/:])*)".replace("WC", mp), _p = /*@__PURE__*/ "(WCOD+)?".replace("WCOD", hp), vp = /*@__PURE__*/ "(?:\\.(WC+)(?:\\[(.+)\\])?)?".replace("WC", mp), yp = /*@__PURE__*/ "\\.(WC+)(?:\\[(.+)\\])?".replace("WC", mp), bp = RegExp("^" + gp + _p + vp + yp + "$"), xp = [
	"material",
	"materials",
	"bones",
	"map"
], Sp = class {
	constructor(e, t, n) {
		let r = n || Cp.parseTrackName(t);
		this._targetGroup = e, this._bindings = e.subscribe_(t, r);
	}
	getValue(e, t) {
		this.bind();
		let n = this._targetGroup.nCachedObjects_, r = this._bindings[n];
		r !== void 0 && r.getValue(e, t);
	}
	setValue(e, t) {
		let n = this._bindings;
		for (let r = this._targetGroup.nCachedObjects_, i = n.length; r !== i; ++r) n[r].setValue(e, t);
	}
	bind() {
		let e = this._bindings;
		for (let t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t) e[t].bind();
	}
	unbind() {
		let e = this._bindings;
		for (let t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t) e[t].unbind();
	}
}, Cp = class e {
	constructor(t, n, r) {
		this.path = n, this.parsedPath = r || e.parseTrackName(n), this.node = e.findNode(t, this.parsedPath.nodeName), this.rootNode = t, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
	}
	static create(t, n, r) {
		return t && t.isAnimationObjectGroup ? new e.Composite(t, n, r) : new e(t, n, r);
	}
	static sanitizeNodeName(e) {
		return e.replace(/\s/g, "_").replace(pp, "");
	}
	static parseTrackName(e) {
		let t = bp.exec(e);
		if (t === null) throw Error("THREE.PropertyBinding: Cannot parse trackName: " + e);
		let n = {
			nodeName: t[2],
			objectName: t[3],
			objectIndex: t[4],
			propertyName: t[5],
			propertyIndex: t[6]
		}, r = n.nodeName && n.nodeName.lastIndexOf(".");
		if (r !== void 0 && r !== -1) {
			let e = n.nodeName.substring(r + 1);
			xp.indexOf(e) !== -1 && (n.nodeName = n.nodeName.substring(0, r), n.objectName = e);
		}
		if (n.propertyName === null || n.propertyName.length === 0) throw Error("THREE.PropertyBinding: can not parse propertyName from trackName: " + e);
		return n;
	}
	static findNode(e, t) {
		if (t === void 0 || t === "" || t === "." || t === -1 || t === e.name || t === e.uuid) return e;
		if (e.skeleton) {
			let n = e.skeleton.getBoneByName(t);
			if (n !== void 0) return n;
		}
		if (e.children) {
			let n = function(e) {
				for (let r = 0; r < e.length; r++) {
					let i = e[r];
					if (i.name === t || i.uuid === t) return i;
					let a = n(i.children);
					if (a) return a;
				}
				return null;
			}, r = n(e.children);
			if (r) return r;
		}
		return null;
	}
	_getValue_unavailable() {}
	_setValue_unavailable() {}
	_getValue_direct(e, t) {
		e[t] = this.targetObject[this.propertyName];
	}
	_getValue_array(e, t) {
		let n = this.resolvedProperty;
		for (let r = 0, i = n.length; r !== i; ++r) e[t++] = n[r];
	}
	_getValue_arrayElement(e, t) {
		e[t] = this.resolvedProperty[this.propertyIndex];
	}
	_getValue_toArray(e, t) {
		this.resolvedProperty.toArray(e, t);
	}
	_setValue_direct(e, t) {
		this.targetObject[this.propertyName] = e[t];
	}
	_setValue_direct_setNeedsUpdate(e, t) {
		this.targetObject[this.propertyName] = e[t], this.targetObject.needsUpdate = !0;
	}
	_setValue_direct_setMatrixWorldNeedsUpdate(e, t) {
		this.targetObject[this.propertyName] = e[t], this.targetObject.matrixWorldNeedsUpdate = !0;
	}
	_setValue_array(e, t) {
		let n = this.resolvedProperty;
		for (let r = 0, i = n.length; r !== i; ++r) n[r] = e[t++];
	}
	_setValue_array_setNeedsUpdate(e, t) {
		let n = this.resolvedProperty;
		for (let r = 0, i = n.length; r !== i; ++r) n[r] = e[t++];
		this.targetObject.needsUpdate = !0;
	}
	_setValue_array_setMatrixWorldNeedsUpdate(e, t) {
		let n = this.resolvedProperty;
		for (let r = 0, i = n.length; r !== i; ++r) n[r] = e[t++];
		this.targetObject.matrixWorldNeedsUpdate = !0;
	}
	_setValue_arrayElement(e, t) {
		this.resolvedProperty[this.propertyIndex] = e[t];
	}
	_setValue_arrayElement_setNeedsUpdate(e, t) {
		this.resolvedProperty[this.propertyIndex] = e[t], this.targetObject.needsUpdate = !0;
	}
	_setValue_arrayElement_setMatrixWorldNeedsUpdate(e, t) {
		this.resolvedProperty[this.propertyIndex] = e[t], this.targetObject.matrixWorldNeedsUpdate = !0;
	}
	_setValue_fromArray(e, t) {
		this.resolvedProperty.fromArray(e, t);
	}
	_setValue_fromArray_setNeedsUpdate(e, t) {
		this.resolvedProperty.fromArray(e, t), this.targetObject.needsUpdate = !0;
	}
	_setValue_fromArray_setMatrixWorldNeedsUpdate(e, t) {
		this.resolvedProperty.fromArray(e, t), this.targetObject.matrixWorldNeedsUpdate = !0;
	}
	_getValue_unbound(e, t) {
		this.bind(), this.getValue(e, t);
	}
	_setValue_unbound(e, t) {
		this.bind(), this.setValue(e, t);
	}
	bind() {
		let t = this.node, n = this.parsedPath, r = n.objectName, i = n.propertyName, a = n.propertyIndex;
		if (t || (t = e.findNode(this.rootNode, n.nodeName), this.node = t), this.getValue = this._getValue_unavailable, this.setValue = this._setValue_unavailable, !t) {
			J("PropertyBinding: No target node found for track: " + this.path + ".");
			return;
		}
		if (r) {
			let e = n.objectIndex;
			switch (r) {
				case "materials":
					if (!t.material) {
						Y("PropertyBinding: Can not bind to material as node does not have a material.", this);
						return;
					}
					if (!t.material.materials) {
						Y("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.", this);
						return;
					}
					t = t.material.materials;
					break;
				case "bones":
					if (!t.skeleton) {
						Y("PropertyBinding: Can not bind to bones as node does not have a skeleton.", this);
						return;
					}
					t = t.skeleton.bones;
					for (let n = 0; n < t.length; n++) if (t[n].name === e) {
						e = n;
						break;
					}
					break;
				case "map":
					if ("map" in t) {
						t = t.map;
						break;
					}
					if (!t.material) {
						Y("PropertyBinding: Can not bind to material as node does not have a material.", this);
						return;
					}
					if (!t.material.map) {
						Y("PropertyBinding: Can not bind to material.map as node.material does not have a map.", this);
						return;
					}
					t = t.material.map;
					break;
				default:
					if (t[r] === void 0) {
						Y("PropertyBinding: Can not bind to objectName of node undefined.", this);
						return;
					}
					t = t[r];
			}
			if (e !== void 0) {
				if (t[e] === void 0) {
					Y("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.", this, t);
					return;
				}
				t = t[e];
			}
		}
		let o = t[i];
		if (o === void 0) {
			let e = n.nodeName;
			Y("PropertyBinding: Trying to update property for track: " + e + "." + i + " but it wasn't found.", t);
			return;
		}
		let s = this.Versioning.None;
		this.targetObject = t, t.isMaterial === !0 ? s = this.Versioning.NeedsUpdate : t.isObject3D === !0 && (s = this.Versioning.MatrixWorldNeedsUpdate);
		let c = this.BindingType.Direct;
		if (a !== void 0) {
			if (i === "morphTargetInfluences") {
				if (!t.geometry) {
					Y("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.", this);
					return;
				}
				if (!t.geometry.morphAttributes) {
					Y("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.", this);
					return;
				}
				t.morphTargetDictionary[a] !== void 0 && (a = t.morphTargetDictionary[a]);
			}
			c = this.BindingType.ArrayElement, this.resolvedProperty = o, this.propertyIndex = a;
		} else o.fromArray !== void 0 && o.toArray !== void 0 ? (c = this.BindingType.HasFromToArray, this.resolvedProperty = o) : Array.isArray(o) ? (c = this.BindingType.EntireArray, this.resolvedProperty = o) : this.propertyName = i;
		this.getValue = this.GetterByBindingType[c], this.setValue = this.SetterByBindingTypeAndVersioning[c][s];
	}
	unbind() {
		this.node = null, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
	}
};
Cp.Composite = Sp, Cp.prototype.BindingType = {
	Direct: 0,
	EntireArray: 1,
	ArrayElement: 2,
	HasFromToArray: 3
}, Cp.prototype.Versioning = {
	None: 0,
	NeedsUpdate: 1,
	MatrixWorldNeedsUpdate: 2
}, Cp.prototype.GetterByBindingType = [
	Cp.prototype._getValue_direct,
	Cp.prototype._getValue_array,
	Cp.prototype._getValue_arrayElement,
	Cp.prototype._getValue_toArray
], Cp.prototype.SetterByBindingTypeAndVersioning = [
	[
		Cp.prototype._setValue_direct,
		Cp.prototype._setValue_direct_setNeedsUpdate,
		Cp.prototype._setValue_direct_setMatrixWorldNeedsUpdate
	],
	[
		Cp.prototype._setValue_array,
		Cp.prototype._setValue_array_setNeedsUpdate,
		Cp.prototype._setValue_array_setMatrixWorldNeedsUpdate
	],
	[
		Cp.prototype._setValue_arrayElement,
		Cp.prototype._setValue_arrayElement_setNeedsUpdate,
		Cp.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate
	],
	[
		Cp.prototype._setValue_fromArray,
		Cp.prototype._setValue_fromArray_setNeedsUpdate,
		Cp.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate
	]
];
var wp = class {
	constructor(e = 1, t = 0, n = 0) {
		this.radius = e, this.phi = t, this.theta = n;
	}
	set(e, t, n) {
		return this.radius = e, this.phi = t, this.theta = n, this;
	}
	copy(e) {
		return this.radius = e.radius, this.phi = e.phi, this.theta = e.theta, this;
	}
	makeSafe() {
		let e = 1e-6;
		return this.phi = Vc(this.phi, e, Math.PI - e), this;
	}
	setFromVector3(e) {
		return this.setFromCartesianCoords(e.x, e.y, e.z);
	}
	setFromCartesianCoords(e, t, n) {
		return this.radius = Math.sqrt(e * e + t * t + n * n), this.radius === 0 ? (this.theta = 0, this.phi = 0) : (this.theta = Math.atan2(e, n), this.phi = Math.acos(Vc(t / this.radius, -1, 1))), this;
	}
	clone() {
		return new this.constructor().copy(this);
	}
};
(class {
	static {
		this.prototype.isMatrix2 = !0;
	}
	constructor(e, t, n, r) {
		this.elements = [
			1,
			0,
			0,
			1
		], e !== void 0 && this.set(e, t, n, r);
	}
	identity() {
		return this.set(1, 0, 0, 1), this;
	}
	fromArray(e, t = 0) {
		for (let n = 0; n < 4; n++) this.elements[n] = e[n + t];
		return this;
	}
	set(e, t, n, r) {
		let i = this.elements;
		return i[0] = e, i[2] = t, i[1] = n, i[3] = r, this;
	}
});
var Tp = class extends nf {
	constructor(e = 10, t = 10, n = 4473924, r = 8947848) {
		n = new mu(n), r = new mu(r);
		let i = t / 2, a = e / t, o = e / 2, s = [], c = [];
		for (let e = 0, l = 0, u = -o; e <= t; e++, u += a) {
			s.push(-o, 0, u, o, 0, u), s.push(u, 0, -o, u, 0, o);
			let t = e === i ? n : r;
			t.toArray(c, l), l += 3, t.toArray(c, l), l += 3, t.toArray(c, l), l += 3, t.toArray(c, l), l += 3;
		}
		let l = new ud();
		l.setAttribute("position", new Qu(s, 3)), l.setAttribute("color", new Qu(c, 3));
		let u = new Wd({
			vertexColors: !0,
			toneMapped: !1
		});
		super(l, u), this.type = "GridHelper";
	}
	dispose() {
		super.dispose(), this.geometry.dispose(), this.material.dispose();
	}
}, Ep = class extends Fc {
	constructor(e, t = null) {
		super(), this.object = e, this.domElement = t, this.enabled = !0, this.state = -1, this.keys = {}, this.mouseButtons = {
			LEFT: null,
			MIDDLE: null,
			RIGHT: null
		}, this.touches = {
			ONE: null,
			TWO: null
		};
	}
	connect(e) {
		this.domElement !== null && this.disconnect(), this.domElement = e;
	}
	disconnect() {}
	dispose() {}
	update() {}
};
function Dp(e, t, n, r) {
	let i = Op(r);
	switch (n) {
		case vs: return e * t;
		case Cs: return e * t / i.components * i.byteLength;
		case ws: return e * t / i.components * i.byteLength;
		case Ts: return e * t * 2 / i.components * i.byteLength;
		case Es: return e * t * 2 / i.components * i.byteLength;
		case ys: return e * t * 3 / i.components * i.byteLength;
		case bs: return e * t * 4 / i.components * i.byteLength;
		case Ds: return e * t * 4 / i.components * i.byteLength;
		case Os:
		case ks: return Math.floor((e + 3) / 4) * Math.floor((t + 3) / 4) * 8;
		case As:
		case js: return Math.floor((e + 3) / 4) * Math.floor((t + 3) / 4) * 16;
		case Ns:
		case Fs: return Math.max(e, 16) * Math.max(t, 8) / 4;
		case Ms:
		case Ps: return Math.max(e, 8) * Math.max(t, 8) / 2;
		case Is:
		case Ls:
		case zs:
		case Bs: return Math.floor((e + 3) / 4) * Math.floor((t + 3) / 4) * 8;
		case Rs:
		case Vs:
		case Hs: return Math.floor((e + 3) / 4) * Math.floor((t + 3) / 4) * 16;
		case Us: return Math.floor((e + 3) / 4) * Math.floor((t + 3) / 4) * 16;
		case Ws: return Math.floor((e + 4) / 5) * Math.floor((t + 3) / 4) * 16;
		case Gs: return Math.floor((e + 4) / 5) * Math.floor((t + 4) / 5) * 16;
		case Ks: return Math.floor((e + 5) / 6) * Math.floor((t + 4) / 5) * 16;
		case qs: return Math.floor((e + 5) / 6) * Math.floor((t + 5) / 6) * 16;
		case Js: return Math.floor((e + 7) / 8) * Math.floor((t + 4) / 5) * 16;
		case Ys: return Math.floor((e + 7) / 8) * Math.floor((t + 5) / 6) * 16;
		case Xs: return Math.floor((e + 7) / 8) * Math.floor((t + 7) / 8) * 16;
		case Zs: return Math.floor((e + 9) / 10) * Math.floor((t + 4) / 5) * 16;
		case Qs: return Math.floor((e + 9) / 10) * Math.floor((t + 5) / 6) * 16;
		case $s: return Math.floor((e + 9) / 10) * Math.floor((t + 7) / 8) * 16;
		case ec: return Math.floor((e + 9) / 10) * Math.floor((t + 9) / 10) * 16;
		case tc: return Math.floor((e + 11) / 12) * Math.floor((t + 9) / 10) * 16;
		case nc: return Math.floor((e + 11) / 12) * Math.floor((t + 11) / 12) * 16;
		case rc:
		case ic:
		case ac: return Math.ceil(e / 4) * Math.ceil(t / 4) * 16;
		case oc:
		case sc: return Math.ceil(e / 4) * Math.ceil(t / 4) * 8;
		case cc:
		case lc: return Math.ceil(e / 4) * Math.ceil(t / 4) * 16;
	}
	throw Error(`Unable to determine texture byte length for ${n} format.`);
}
function Op(e) {
	switch (e) {
		case as:
		case os: return {
			byteLength: 1,
			components: 1
		};
		case cs:
		case ss:
		case fs: return {
			byteLength: 2,
			components: 1
		};
		case ps:
		case ms: return {
			byteLength: 2,
			components: 4
		};
		case us:
		case ls:
		case ds: return {
			byteLength: 4,
			components: 1
		};
		case gs:
		case _s: return {
			byteLength: 4,
			components: 3
		};
	}
	throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`);
}
typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: { revision: "187" } })), typeof window < "u" && (window.__THREE__ ? J("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = "187");
// node_modules/three/build/three.module.js
function kp() {
	let e = null, t = !1, n = null, r = null;
	function i(t, a) {
		r = e.requestAnimationFrame(i), n(t, a);
	}
	return {
		start: function() {
			t !== !0 && n !== null && e !== null && (r = e.requestAnimationFrame(i), t = !0);
		},
		stop: function() {
			e !== null && e.cancelAnimationFrame(r), t = !1;
		},
		setAnimationLoop: function(e) {
			n = e;
		},
		setContext: function(t) {
			e = t;
		}
	};
}
function Ap(e) {
	let t = /* @__PURE__ */ new WeakMap();
	function n(t, n) {
		let r = t.array, i = t.usage, a = r.byteLength, o = e.createBuffer();
		e.bindBuffer(n, o), e.bufferData(n, r, i), t.onUploadCallback();
		let s;
		if (r instanceof Float32Array) s = e.FLOAT;
		else if (typeof Float16Array < "u" && r instanceof Float16Array) s = e.HALF_FLOAT;
		else if (r instanceof Uint16Array) s = t.isFloat16BufferAttribute ? e.HALF_FLOAT : e.UNSIGNED_SHORT;
		else if (r instanceof Int16Array) s = e.SHORT;
		else if (r instanceof Uint32Array) s = e.UNSIGNED_INT;
		else if (r instanceof Int32Array) s = e.INT;
		else if (r instanceof Int8Array) s = e.BYTE;
		else if (r instanceof Uint8Array) s = e.UNSIGNED_BYTE;
		else if (r instanceof Uint8ClampedArray) s = e.UNSIGNED_BYTE;
		else throw Error("THREE.WebGLAttributes: Unsupported buffer data format: " + r);
		return {
			buffer: o,
			type: s,
			bytesPerElement: r.BYTES_PER_ELEMENT,
			version: t.version,
			size: a
		};
	}
	function r(t, n, r) {
		let i = n.array, a = n.updateRanges;
		if (e.bindBuffer(r, t), a.length === 0) e.bufferSubData(r, 0, i);
		else {
			a.sort((e, t) => e.start - t.start);
			let t = 0;
			for (let e = 1; e < a.length; e++) {
				let n = a[t], r = a[e];
				r.start <= n.start + n.count + 1 ? n.count = Math.max(n.count, r.start + r.count - n.start) : (++t, a[t] = r);
			}
			a.length = t + 1;
			for (let t = 0, n = a.length; t < n; t++) {
				let n = a[t];
				e.bufferSubData(r, n.start * i.BYTES_PER_ELEMENT, i, n.start, n.count);
			}
			n.clearUpdateRanges();
		}
		n.onUploadCallback();
	}
	function i(e) {
		return e.isInterleavedBufferAttribute && (e = e.data), t.get(e);
	}
	function a(n) {
		n.isInterleavedBufferAttribute && (n = n.data);
		let r = t.get(n);
		r && (e.deleteBuffer(r.buffer), t.delete(n));
	}
	function o(e, i) {
		if (e.isInterleavedBufferAttribute && (e = e.data), e.isGLBufferAttribute) {
			let n = t.get(e);
			(!n || n.version < e.version) && t.set(e, {
				buffer: e.buffer,
				type: e.type,
				bytesPerElement: e.elementSize,
				version: e.version
			});
			return;
		}
		let a = t.get(e);
		if (a === void 0) t.set(e, n(e, i));
		else if (a.version < e.version) {
			if (a.size !== e.array.byteLength) throw Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");
			r(a.buffer, e, i), a.version = e.version;
		}
	}
	return {
		get: i,
		remove: a,
		update: o
	};
}
var jp = {
	alphahash_fragment: "#ifdef USE_ALPHAHASH\n	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;\n#endif",
	alphahash_pars_fragment: "#ifdef USE_ALPHAHASH\n	const float ALPHA_HASH_SCALE = 0.05;\n	float hash2D( vec2 value ) {\n		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );\n	}\n	float hash3D( vec3 value ) {\n		return hash2D( vec2( hash2D( value.xy ), value.z ) );\n	}\n	float getAlphaHashThreshold( vec3 position ) {\n		float maxDeriv = max(\n			length( dFdx( position.xyz ) ),\n			length( dFdy( position.xyz ) )\n		);\n		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );\n		vec2 pixScales = vec2(\n			exp2( floor( log2( pixScale ) ) ),\n			exp2( ceil( log2( pixScale ) ) )\n		);\n		vec2 alpha = vec2(\n			hash3D( floor( pixScales.x * position.xyz ) ),\n			hash3D( floor( pixScales.y * position.xyz ) )\n		);\n		float lerpFactor = fract( log2( pixScale ) );\n		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;\n		float a = min( lerpFactor, 1.0 - lerpFactor );\n		vec3 cases = vec3(\n			x * x / ( 2.0 * a * ( 1.0 - a ) ),\n			( x - 0.5 * a ) / ( 1.0 - a ),\n			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )\n		);\n		float threshold = ( x < ( 1.0 - a ) )\n			? ( ( x < a ) ? cases.x : cases.y )\n			: cases.z;\n		return clamp( threshold , 1.0e-6, 1.0 );\n	}\n#endif",
	alphamap_fragment: "#ifdef USE_ALPHAMAP\n	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;\n#endif",
	alphamap_pars_fragment: "#ifdef USE_ALPHAMAP\n	uniform sampler2D alphaMap;\n#endif",
	alphatest_fragment: "#ifdef USE_ALPHATEST\n	#ifdef ALPHA_TO_COVERAGE\n	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );\n	if ( diffuseColor.a == 0.0 ) discard;\n	#else\n	if ( diffuseColor.a < alphaTest ) discard;\n	#endif\n#endif",
	alphatest_pars_fragment: "#ifdef USE_ALPHATEST\n	uniform float alphaTest;\n#endif",
	aomap_fragment: "#ifdef USE_AOMAP\n	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;\n	reflectedLight.indirectDiffuse *= ambientOcclusion;\n	#if defined( USE_CLEARCOAT ) \n		clearcoatSpecularIndirect *= ambientOcclusion;\n	#endif\n	#if defined( USE_SHEEN ) \n		sheenSpecularIndirect *= ambientOcclusion;\n	#endif\n	#if defined( USE_ENVMAP ) && defined( STANDARD )\n		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );\n		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );\n	#endif\n#endif",
	aomap_pars_fragment: "#ifdef USE_AOMAP\n	uniform sampler2D aoMap;\n	uniform float aoMapIntensity;\n#endif",
	batching_pars_vertex: "#ifdef USE_BATCHING\n	#if ! defined( GL_ANGLE_multi_draw )\n	#define gl_DrawID _gl_DrawID\n	uniform int _gl_DrawID;\n	#endif\n	uniform highp sampler2D batchingTexture;\n	uniform highp usampler2D batchingIdTexture;\n	mat4 getBatchingMatrix( const in float i ) {\n		int size = textureSize( batchingTexture, 0 ).x;\n		int j = int( i ) * 4;\n		int x = j % size;\n		int y = j / size;\n		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );\n		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );\n		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );\n		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );\n		return mat4( v1, v2, v3, v4 );\n	}\n	float getIndirectIndex( const in int i ) {\n		int size = textureSize( batchingIdTexture, 0 ).x;\n		int x = i % size;\n		int y = i / size;\n		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );\n	}\n#endif\n#ifdef USE_BATCHING_COLOR\n	uniform sampler2D batchingColorTexture;\n	vec4 getBatchingColor( const in float i ) {\n		int size = textureSize( batchingColorTexture, 0 ).x;\n		int j = int( i );\n		int x = j % size;\n		int y = j / size;\n		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );\n	}\n#endif",
	batching_vertex: "#ifdef USE_BATCHING\n	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );\n#endif",
	begin_vertex: "vec3 transformed = vec3( position );\n#ifdef USE_ALPHAHASH\n	vPosition = vec3( position );\n#endif",
	beginnormal_vertex: "vec3 objectNormal = vec3( normal );\n#ifdef USE_TANGENT\n	vec3 objectTangent = vec3( tangent.xyz );\n#endif",
	bsdfs: "float G_BlinnPhong_Implicit( ) {\n	return 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {\n	vec3 halfDir = normalize( lightDir + viewDir );\n	float dotNH = saturate( dot( normal, halfDir ) );\n	float dotVH = saturate( dot( viewDir, halfDir ) );\n	vec3 F = F_Schlick( specularColor, 1.0, dotVH );\n	float G = G_BlinnPhong_Implicit( );\n	float D = D_BlinnPhong( shininess, dotNH );\n	return F * ( G * D );\n} // validated",
	iridescence_fragment: "#ifdef USE_IRIDESCENCE\n	const mat3 XYZ_TO_REC709 = mat3(\n		 3.2404542, -0.9692660,  0.0556434,\n		-1.5371385,  1.8760108, -0.2040259,\n		-0.4985314,  0.0415560,  1.0572252\n	);\n	vec3 Fresnel0ToIor( vec3 fresnel0 ) {\n		vec3 sqrtF0 = sqrt( fresnel0 );\n		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );\n	}\n	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {\n		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );\n	}\n	float IorToFresnel0( float transmittedIor, float incidentIor ) {\n		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));\n	}\n	vec3 evalSensitivity( float OPD, vec3 shift ) {\n		float phase = 2.0 * PI * OPD * 1.0e-9;\n		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );\n		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );\n		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );\n		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );\n		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );\n		xyz /= 1.0685e-7;\n		vec3 rgb = XYZ_TO_REC709 * xyz;\n		return rgb;\n	}\n	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {\n		vec3 I;\n		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );\n		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );\n		float cosTheta2Sq = 1.0 - sinTheta2Sq;\n		if ( cosTheta2Sq < 0.0 ) {\n			return vec3( 1.0 );\n		}\n		float cosTheta2 = sqrt( cosTheta2Sq );\n		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );\n		float R12 = F_Schlick( R0, 1.0, cosTheta1 );\n		float T121 = 1.0 - R12;\n		float phi12 = 0.0;\n		if ( iridescenceIOR < outsideIOR ) phi12 = PI;\n		float phi21 = PI - phi12;\n		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );\n		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );\n		vec3 phi23 = vec3( 0.0 );\n		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;\n		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;\n		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;\n		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;\n		vec3 phi = vec3( phi21 ) + phi23;\n		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );\n		vec3 r123 = sqrt( R123 );\n		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );\n		vec3 C0 = R12 + Rs;\n		I = C0;\n		vec3 Cm = Rs - T121;\n		for ( int m = 1; m <= 2; ++ m ) {\n			Cm *= r123;\n			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );\n			I += Cm * Sm;\n		}\n		return max( I, vec3( 0.0 ) );\n	}\n#endif",
	bumpmap_pars_fragment: "#ifdef USE_BUMPMAP\n	uniform sampler2D bumpMap;\n	uniform float bumpScale;\n	vec2 dHdxy_fwd() {\n		vec2 dSTdx = dFdx( vBumpMapUv );\n		vec2 dSTdy = dFdy( vBumpMapUv );\n		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;\n		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;\n		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;\n		return vec2( dBx, dBy );\n	}\n	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {\n		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );\n		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );\n		vec3 vN = surf_norm;\n		vec3 R1 = cross( vSigmaY, vN );\n		vec3 R2 = cross( vN, vSigmaX );\n		float fDet = dot( vSigmaX, R1 ) * faceDirection;\n		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n		return normalize( abs( fDet ) * surf_norm - vGrad );\n	}\n#endif",
	clipping_planes_fragment: "#if NUM_CLIPPING_PLANES > 0\n	vec4 plane;\n	#ifdef ALPHA_TO_COVERAGE\n		float distanceToPlane, distanceGradient;\n		float clipOpacity = 1.0;\n		#pragma unroll_loop_start\n		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n			plane = clippingPlanes[ i ];\n			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;\n			distanceGradient = fwidth( distanceToPlane ) / 2.0;\n			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );\n			if ( clipOpacity == 0.0 ) discard;\n		}\n		#pragma unroll_loop_end\n		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n			float unionClipOpacity = 1.0;\n			#pragma unroll_loop_start\n			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n				plane = clippingPlanes[ i ];\n				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;\n				distanceGradient = fwidth( distanceToPlane ) / 2.0;\n				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );\n			}\n			#pragma unroll_loop_end\n			clipOpacity *= 1.0 - unionClipOpacity;\n		#endif\n		diffuseColor.a *= clipOpacity;\n		if ( diffuseColor.a == 0.0 ) discard;\n	#else\n		#pragma unroll_loop_start\n		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n			plane = clippingPlanes[ i ];\n			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;\n		}\n		#pragma unroll_loop_end\n		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n			bool clipped = true;\n			#pragma unroll_loop_start\n			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n				plane = clippingPlanes[ i ];\n				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;\n			}\n			#pragma unroll_loop_end\n			if ( clipped ) discard;\n		#endif\n	#endif\n#endif",
	clipping_planes_pars_fragment: "#if NUM_CLIPPING_PLANES > 0\n	varying vec3 vClipPosition;\n	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n#endif",
	clipping_planes_pars_vertex: "#if NUM_CLIPPING_PLANES > 0\n	varying vec3 vClipPosition;\n#endif",
	clipping_planes_vertex: "#if NUM_CLIPPING_PLANES > 0\n	vClipPosition = - mvPosition.xyz;\n#endif",
	color_fragment: "#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )\n	diffuseColor *= vColor;\n#endif",
	color_pars_fragment: "#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )\n	varying vec4 vColor;\n#endif",
	color_pars_vertex: "#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )\n	varying vec4 vColor;\n#endif",
	color_vertex: "#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )\n	vColor = vec4( 1.0 );\n#endif\n#ifdef USE_COLOR_ALPHA\n	vColor *= color;\n#elif defined( USE_COLOR )\n	vColor.rgb *= color;\n#endif\n#ifdef USE_INSTANCING_COLOR\n	vColor.rgb *= instanceColor.rgb;\n#endif\n#ifdef USE_BATCHING_COLOR\n	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );\n#endif",
	common: "#define PI 3.141592653589793\n#define PI2 6.283185307179586\n#define PI_HALF 1.5707963267948966\n#define RECIPROCAL_PI 0.3183098861837907\n#define RECIPROCAL_PI2 0.15915494309189535\n#define EPSILON 1e-6\n#ifndef saturate\n#define saturate( a ) clamp( a, 0.0, 1.0 )\n#endif\n#define whiteComplement( a ) ( 1.0 - saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nvec3 pow2( const in vec3 x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }\nfloat average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }\nhighp float rand( const in vec2 uv ) {\n	const highp float a = 12.9898, b = 78.233, c = 43758.5453;\n	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n	return fract( sin( sn ) * c );\n}\n#ifdef HIGH_PRECISION\n	float precisionSafeLength( vec3 v ) { return length( v ); }\n#else\n	float precisionSafeLength( vec3 v ) {\n		float maxComponent = max3( abs( v ) );\n		return length( v / maxComponent ) * maxComponent;\n	}\n#endif\nstruct IncidentLight {\n	vec3 color;\n	vec3 direction;\n	bool visible;\n};\nstruct ReflectedLight {\n	vec3 directDiffuse;\n	vec3 directSpecular;\n	vec3 indirectDiffuse;\n	vec3 indirectSpecular;\n};\n#ifdef USE_ALPHAHASH\n	varying vec3 vPosition;\n#endif\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\n#define inverseTransformDirection transformDirectionByInverseViewMatrix\nvec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {\n	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );\n}\nvec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {\n	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );\n}\nbool isPerspectiveMatrix( mat4 m ) {\n	return m[ 2 ][ 3 ] == - 1.0;\n}\nvec2 equirectUv( in vec3 dir ) {\n	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;\n	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n	return vec2( u, v );\n}\nvec3 BRDF_Lambert( const in vec3 diffuseColor ) {\n	return RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {\n	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );\n	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );\n}\nfloat F_Schlick( const in float f0, const in float f90, const in float dotVH ) {\n	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );\n	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );\n} // validated",
	defaultnormal_vertex: "vec3 transformedNormal = objectNormal;\n#ifdef USE_TANGENT\n	vec3 transformedTangent = objectTangent;\n#endif\n#ifdef USE_BATCHING\n	mat3 bm = mat3( batchingMatrix );\n	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );\n	transformedNormal = bm * transformedNormal;\n	#ifdef USE_TANGENT\n		transformedTangent = bm * transformedTangent;\n	#endif\n#endif\n#ifdef USE_INSTANCING\n	mat3 im = mat3( instanceMatrix );\n	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );\n	transformedNormal = im * transformedNormal;\n	#ifdef USE_TANGENT\n		transformedTangent = im * transformedTangent;\n	#endif\n#endif\ntransformedNormal = normalMatrix * transformedNormal;\n#ifdef FLIP_SIDED\n	transformedNormal = - transformedNormal;\n#endif\n#ifdef USE_TANGENT\n	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;\n#endif",
	displacementmap_pars_vertex: "#ifdef USE_DISPLACEMENTMAP\n	uniform sampler2D displacementMap;\n	uniform float displacementScale;\n	uniform float displacementBias;\n#endif",
	displacementmap_vertex: "#ifdef USE_DISPLACEMENTMAP\n	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );\n#endif",
	emissivemap_fragment: "#ifdef USE_EMISSIVEMAP\n	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );\n	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE\n		emissiveColor = sRGBTransferEOTF( emissiveColor );\n	#endif\n	totalEmissiveRadiance *= emissiveColor.rgb;\n#endif",
	emissivemap_pars_fragment: "#ifdef USE_EMISSIVEMAP\n	uniform sampler2D emissiveMap;\n#endif",
	colorspace_fragment: "gl_FragColor = linearToOutputTexel( gl_FragColor );",
	colorspace_pars_fragment: "vec4 LinearTransferOETF( in vec4 value ) {\n	return value;\n}\nvec4 sRGBTransferEOTF( in vec4 value ) {\n	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );\n}\nvec4 sRGBTransferOETF( in vec4 value ) {\n	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );\n}",
	envmap_fragment: "#ifdef USE_ENVMAP\n	#ifdef ENV_WORLDPOS\n		vec3 cameraToFrag;\n		if ( isOrthographic ) {\n			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n		} else {\n			cameraToFrag = normalize( vWorldPosition - cameraPosition );\n		}\n		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );\n		#ifdef ENVMAP_MODE_REFLECTION\n			vec3 reflectVec = reflect( cameraToFrag, worldNormal );\n		#else\n			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );\n		#endif\n	#else\n		vec3 reflectVec = vReflect;\n	#endif\n	#ifdef ENVMAP_TYPE_CUBE\n		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );\n		#ifdef ENVMAP_BLENDING_MULTIPLY\n			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n		#elif defined( ENVMAP_BLENDING_MIX )\n			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n		#elif defined( ENVMAP_BLENDING_ADD )\n			outgoingLight += envColor.xyz * specularStrength * reflectivity;\n		#endif\n	#endif\n#endif",
	envmap_common_pars_fragment: "#ifdef USE_ENVMAP\n	uniform float envMapIntensity;\n	uniform mat3 envMapRotation;\n	uniform samplerCube envMap;\n	#ifdef ENVMAP_TYPE_PMREM\n		float roughnessToMip( const in float roughness ) {\n			float r = clamp( roughness, 0.0, 1.0 );\n			return ENVMAP_MAX_LOD * r * ( 2.0 - r );\n		}\n	#endif\n#endif",
	envmap_pars_fragment: "#ifdef USE_ENVMAP\n	uniform float reflectivity;\n	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )\n		#define ENV_WORLDPOS\n	#endif\n	#ifdef ENV_WORLDPOS\n		varying vec3 vWorldPosition;\n		uniform float refractionRatio;\n	#else\n		varying vec3 vReflect;\n	#endif\n#endif",
	envmap_pars_vertex: "#ifdef USE_ENVMAP\n	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )\n		#define ENV_WORLDPOS\n	#endif\n	#ifdef ENV_WORLDPOS\n		\n		varying vec3 vWorldPosition;\n	#else\n		varying vec3 vReflect;\n		uniform float refractionRatio;\n	#endif\n#endif",
	envmap_physical_pars_fragment: "#ifdef USE_ENVMAP\n	vec3 getIBLIrradiance( const in vec3 normal ) {\n		#ifdef ENVMAP_TYPE_PMREM\n			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );\n			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );\n			return PI * envMapColor.rgb * envMapIntensity;\n		#else\n			return vec3( 0.0 );\n		#endif\n	}\n	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {\n		#ifdef ENVMAP_TYPE_PMREM\n			vec3 reflectVec = reflect( - viewDir, normal );\n			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );\n			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );\n			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );\n			return envMapColor.rgb * envMapIntensity;\n		#else\n			return vec3( 0.0 );\n		#endif\n	}\n	#ifdef USE_RETROREFLECTION\n		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {\n			#ifdef ENVMAP_TYPE_PMREM\n				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );\n				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );\n				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );\n				return envMapColor.rgb * envMapIntensity;\n			#else\n				return vec3( 0.0 );\n			#endif\n		}\n	#endif\n	#ifdef USE_ANISOTROPY\n		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {\n			#ifdef ENVMAP_TYPE_PMREM\n				vec3 bentNormal = cross( bitangent, viewDir );\n				bentNormal = normalize( cross( bentNormal, bitangent ) );\n				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );\n				return getIBLRadiance( viewDir, bentNormal, roughness );\n			#else\n				return vec3( 0.0 );\n			#endif\n		}\n		#ifdef USE_RETROREFLECTION\n			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {\n				#ifdef ENVMAP_TYPE_PMREM\n					vec3 bentNormal = cross( bitangent, viewDir );\n					bentNormal = normalize( cross( bentNormal, bitangent ) );\n					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );\n					return getIBLRetroRadiance( viewDir, bentNormal, roughness );\n				#else\n					return vec3( 0.0 );\n				#endif\n			}\n		#endif\n	#endif\n#endif",
	envmap_vertex: "#ifdef USE_ENVMAP\n	#ifdef ENV_WORLDPOS\n		vWorldPosition = worldPosition.xyz;\n	#else\n		vec3 cameraToVertex;\n		if ( isOrthographic ) {\n			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n		} else {\n			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n		}\n		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );\n		#ifdef ENVMAP_MODE_REFLECTION\n			vReflect = reflect( cameraToVertex, worldNormal );\n		#else\n			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n		#endif\n	#endif\n#endif",
	fog_vertex: "#ifdef USE_FOG\n	vFogDepth = - mvPosition.z;\n#endif",
	fog_pars_vertex: "#ifdef USE_FOG\n	varying float vFogDepth;\n#endif",
	fog_fragment: "#ifdef USE_FOG\n	#ifdef FOG_EXP2\n		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );\n	#else\n		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );\n	#endif\n	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n#endif",
	fog_pars_fragment: "#ifdef USE_FOG\n	uniform vec3 fogColor;\n	varying float vFogDepth;\n	#ifdef FOG_EXP2\n		uniform float fogDensity;\n	#else\n		uniform float fogNear;\n		uniform float fogFar;\n	#endif\n#endif",
	gradientmap_pars_fragment: "#ifdef USE_GRADIENTMAP\n	uniform sampler2D gradientMap;\n#endif\nvec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {\n	float dotNL = dot( normal, lightDirection );\n	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );\n	#ifdef USE_GRADIENTMAP\n		return vec3( texture2D( gradientMap, coord ).r );\n	#else\n		vec2 fw = fwidth( coord ) * 0.5;\n		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );\n	#endif\n}",
	lightmap_pars_fragment: "#ifdef USE_LIGHTMAP\n	uniform sampler2D lightMap;\n	uniform float lightMapIntensity;\n#endif",
	lights_lambert_fragment: "LambertMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularStrength = specularStrength;",
	lights_lambert_pars_fragment: "varying vec3 vViewPosition;\nstruct LambertMaterial {\n	vec3 diffuseColor;\n	float specularStrength;\n};\nvoid RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {\n	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );\n	vec3 irradiance = dotNL * directLight.color;\n	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {\n	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct				RE_Direct_Lambert\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert",
	lights_pars_begin: "uniform bool receiveShadow;\nuniform vec3 ambientLightColor;\n#if defined( USE_LIGHT_PROBES )\n	uniform vec3 lightProbe[ 9 ];\n#endif\nvec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {\n	float x = normal.x, y = normal.y, z = normal.z;\n	vec3 result = shCoefficients[ 0 ] * 0.886227;\n	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;\n	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;\n	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;\n	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;\n	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;\n	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );\n	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;\n	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );\n	return result;\n}\nvec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {\n	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );\n	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );\n	return irradiance;\n}\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n	vec3 irradiance = ambientLightColor;\n	return irradiance;\n}\nfloat getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n	if ( cutoffDistance > 0.0 ) {\n		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n	}\n	return distanceFalloff;\n}\nfloat getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {\n	return smoothstep( coneCosine, penumbraCosine, angleCosine );\n}\n#if NUM_SUN_LIGHTS > 0\n	struct SunLight {\n		vec3 direction;\n		vec3 color;\n	};\n	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];\n	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {\n		light.color = sunLight.color;\n		light.direction = sunLight.direction;\n		light.visible = true;\n	}\n#endif\n#if NUM_DIR_LIGHTS > 0\n	struct DirectionalLight {\n		vec3 direction;\n		vec3 color;\n	};\n	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {\n		light.color = directionalLight.color;\n		light.direction = directionalLight.direction;\n		light.visible = true;\n	}\n#endif\n#if NUM_POINT_LIGHTS > 0\n	struct PointLight {\n		vec3 position;\n		vec3 color;\n		float distance;\n		float decay;\n	};\n	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {\n		vec3 lVector = pointLight.position - geometryPosition;\n		light.direction = normalize( lVector );\n		float lightDistance = length( lVector );\n		light.color = pointLight.color;\n		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );\n		light.visible = ( light.color != vec3( 0.0 ) );\n	}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n	struct SpotLight {\n		vec3 position;\n		vec3 direction;\n		vec3 color;\n		float distance;\n		float decay;\n		float coneCos;\n		float penumbraCos;\n	};\n	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {\n		vec3 lVector = spotLight.position - geometryPosition;\n		light.direction = normalize( lVector );\n		float angleCos = dot( light.direction, spotLight.direction );\n		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n		if ( spotAttenuation > 0.0 ) {\n			float lightDistance = length( lVector );\n			light.color = spotLight.color * spotAttenuation;\n			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );\n			light.visible = ( light.color != vec3( 0.0 ) );\n		} else {\n			light.color = vec3( 0.0 );\n			light.visible = false;\n		}\n	}\n#endif\n#if NUM_RECT_AREA_LIGHTS > 0\n	struct RectAreaLight {\n		vec3 color;\n		vec3 position;\n		vec3 halfWidth;\n		vec3 halfHeight;\n	};\n	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;\n	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];\n#endif\n#if NUM_HEMI_LIGHTS > 0\n	struct HemisphereLight {\n		vec3 direction;\n		vec3 skyColor;\n		vec3 groundColor;\n	};\n	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {\n		float dotNL = dot( normal, hemiLight.direction );\n		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n		return irradiance;\n	}\n#endif\n#include <lightprobes_pars_fragment>",
	lights_toon_fragment: "ToonMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;",
	lights_toon_pars_fragment: "varying vec3 vViewPosition;\nstruct ToonMaterial {\n	vec3 diffuseColor;\n};\nvoid RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;\n	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct				RE_Direct_Toon\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon",
	lights_phong_fragment: "BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;",
	lights_phong_pars_fragment: "varying vec3 vViewPosition;\nstruct BlinnPhongMaterial {\n	vec3 diffuseColor;\n	vec3 specularColor;\n	float specularShininess;\n	float specularStrength;\n};\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );\n	vec3 irradiance = dotNL * directLight.color;\n	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct				RE_Direct_BlinnPhong\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong",
	lights_physical_fragment: "PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nmaterial.metalness = metalnessFactor;\nvec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );\nfloat geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );\nmaterial.roughness = max( roughnessFactor, 0.045 );\nmaterial.roughness += geometryRoughness;\nmaterial.roughness = min( material.roughness, 1.0 );\n#ifdef USE_DIFFUSE_ROUGHNESS\n	float diffuseRoughnessFactor = diffuseRoughness;\n	#ifdef USE_DIFFUSE_ROUGHNESSMAP\n		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;\n	#endif\n	material.diffuseRoughness = saturate( diffuseRoughnessFactor );\n#endif\n#ifdef IOR\n	material.ior = ior;\n	#ifdef USE_SPECULAR\n		float specularIntensityFactor = specularIntensity;\n		vec3 specularColorFactor = specularColor;\n		#ifdef USE_SPECULAR_COLORMAP\n			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;\n		#endif\n		#ifdef USE_SPECULAR_INTENSITYMAP\n			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;\n		#endif\n		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );\n	#else\n		float specularIntensityFactor = 1.0;\n		vec3 specularColorFactor = vec3( 1.0 );\n		material.specularF90 = 1.0;\n	#endif\n	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;\n	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );\n#else\n	material.specularColor = vec3( 0.04 );\n	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );\n	material.specularF90 = 1.0;\n#endif\n#ifdef USE_CLEARCOAT\n	material.clearcoat = clearcoat;\n	material.clearcoatRoughness = clearcoatRoughness;\n	material.clearcoatF0 = vec3( 0.04 );\n	material.clearcoatF90 = 1.0;\n	#ifdef USE_CLEARCOATMAP\n		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;\n	#endif\n	#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;\n	#endif\n	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );\n	material.clearcoatRoughness += geometryRoughness;\n	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );\n#endif\n#ifdef USE_DISPERSION\n	material.dispersion = dispersion;\n#endif\n#ifdef USE_RETROREFLECTION\n	material.retroreflectivity = retroreflectivity;\n#endif\n#ifdef USE_IRIDESCENCE\n	material.iridescence = iridescence;\n	material.iridescenceIOR = iridescenceIOR;\n	#ifdef USE_IRIDESCENCEMAP\n		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;\n	#endif\n	#ifdef USE_IRIDESCENCE_THICKNESSMAP\n		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;\n	#else\n		material.iridescenceThickness = iridescenceThicknessMaximum;\n	#endif\n#endif\n#ifdef USE_SHEEN\n	material.sheenColor = sheenColor;\n	#ifdef USE_SHEEN_COLORMAP\n		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;\n	#endif\n	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );\n	#ifdef USE_SHEEN_ROUGHNESSMAP\n		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;\n	#endif\n#endif\n#ifdef USE_ANISOTROPY\n	#ifdef USE_ANISOTROPYMAP\n		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );\n		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;\n		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;\n	#else\n		vec2 anisotropyV = anisotropyVector;\n	#endif\n	material.anisotropy = length( anisotropyV );\n	if( material.anisotropy == 0.0 ) {\n		anisotropyV = vec2( 1.0, 0.0 );\n	} else {\n		anisotropyV /= material.anisotropy;\n		material.anisotropy = saturate( material.anisotropy );\n	}\n	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );\n	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;\n	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;\n#endif",
	lights_physical_pars_fragment: "uniform sampler2D dfgLUT;\nstruct PhysicalMaterial {\n	vec3 diffuseColor;\n	vec3 diffuseContribution;\n	vec3 specularColor;\n	vec3 specularColorBlended;\n	float roughness;\n	float metalness;\n	float specularF90;\n	float dispersion;\n	vec2 dfg;\n	vec3 multiScatteringCompensation;\n	#ifdef USE_DIFFUSE_ROUGHNESS\n		float diffuseRoughness;\n	#endif\n	#ifdef USE_RETROREFLECTION\n		float retroreflectivity;\n	#endif\n	#ifdef USE_CLEARCOAT\n		float clearcoat;\n		float clearcoatRoughness;\n		vec3 clearcoatF0;\n		float clearcoatF90;\n	#endif\n	#ifdef USE_IRIDESCENCE\n		float iridescence;\n		float iridescenceIOR;\n		float iridescenceThickness;\n		vec3 iridescenceFresnel;\n		vec3 iridescenceF0Dielectric;\n		vec3 iridescenceF0Metallic;\n	#endif\n	#ifdef USE_SHEEN\n		vec3 sheenColor;\n		float sheenRoughness;\n	#endif\n	#ifdef IOR\n		float ior;\n	#endif\n	#ifdef USE_TRANSMISSION\n		float transmission;\n		float transmissionAlpha;\n		float thickness;\n		float attenuationDistance;\n		vec3 attenuationColor;\n	#endif\n	#ifdef USE_ANISOTROPY\n		float anisotropy;\n		float alphaT;\n		vec3 anisotropyT;\n		vec3 anisotropyB;\n	#endif\n};\nvec3 clearcoatSpecularDirect = vec3( 0.0 );\nvec3 clearcoatSpecularIndirect = vec3( 0.0 );\nvec3 sheenSpecularDirect = vec3( 0.0 );\nvec3 sheenSpecularIndirect = vec3(0.0 );\nvec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {\n    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );\n    float x2 = x * x;\n    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );\n    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );\n}\n#ifdef USE_DIFFUSE_ROUGHNESS\n	const float EON_EPSILON = 1e-7;\n	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {\n		float muComp = 1.0 - mu;\n		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );\n		return A * ( 1.0 + roughness * gOverPi );\n	}\n	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {\n		vec3 rho = saturate( diffuseColor );\n		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );\n		float dotNL = saturate( dot( normal, lightDir ) );\n		float dotNV = saturate( dot( normal, viewDir ) );\n		float s = dot( lightDir, viewDir ) - dotNL * dotNV;\n		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;\n		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );\n		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );\n		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );\n		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );\n		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );\n		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );\n		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI\n			* max( EON_EPSILON, 1.0 - albedoV )\n			* max( EON_EPSILON, 1.0 - albedoL )\n			/ max( EON_EPSILON, 1.0 - averageAlbedo );\n		return singleScatter + multiScatter;\n	}\n	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {\n		vec3 rho = saturate( diffuseColor );\n		if ( roughness <= EON_EPSILON ) return rho;\n		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );\n		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );\n		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );\n		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );\n		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );\n	}\n#endif\nfloat V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n	float a2 = pow2( alpha );\n	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n	return 0.5 / max( gv + gl, EPSILON );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n	float a2 = pow2( alpha );\n	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n	return RECIPROCAL_PI * a2 / pow2( denom );\n}\n#ifdef USE_ANISOTROPY\n	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {\n		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );\n		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );\n		return 0.5 / max( gv + gl, EPSILON );\n	}\n	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {\n		float a2 = alphaT * alphaB;\n		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );\n		highp float v2 = dot( v, v );\n		float w2 = a2 / v2;\n		return RECIPROCAL_PI * a2 * pow2 ( w2 );\n	}\n#endif\n#ifdef USE_CLEARCOAT\n	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {\n		vec3 f0 = material.clearcoatF0;\n		float f90 = material.clearcoatF90;\n		float roughness = max( material.clearcoatRoughness, 0.045 );\n		float alpha = pow2( roughness );\n		vec3 halfDir = normalize( lightDir + viewDir );\n		float dotNL = saturate( dot( normal, lightDir ) );\n		float dotNV = saturate( dot( normal, viewDir ) );\n		float dotNH = saturate( dot( normal, halfDir ) );\n		float dotVH = saturate( dot( viewDir, halfDir ) );\n		vec3 F = F_Schlick( f0, f90, dotVH );\n		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n		float D = D_GGX( alpha, dotNH );\n		return F * ( V * D );\n	}\n#endif\nvec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {\n	vec3 f0 = material.specularColorBlended;\n	float f90 = material.specularF90;\n	float roughness = max( material.roughness, 0.045 );\n	float alpha = pow2( roughness );\n	vec3 halfDir = normalize( lightDir + viewDir );\n	float dotNL = saturate( dot( normal, lightDir ) );\n	float dotNV = saturate( dot( normal, viewDir ) );\n	float dotNH = saturate( dot( normal, halfDir ) );\n	float dotVH = saturate( dot( viewDir, halfDir ) );\n	vec3 F = F_Schlick( f0, f90, dotVH );\n	#ifdef USE_IRIDESCENCE\n		F = mix( F, material.iridescenceFresnel, material.iridescence );\n	#endif\n	#ifdef USE_ANISOTROPY\n		float dotTL = dot( material.anisotropyT, lightDir );\n		float dotTV = dot( material.anisotropyT, viewDir );\n		float dotTH = dot( material.anisotropyT, halfDir );\n		float dotBL = dot( material.anisotropyB, lightDir );\n		float dotBV = dot( material.anisotropyB, viewDir );\n		float dotBH = dot( material.anisotropyB, halfDir );\n		float alphaT = max( material.alphaT, alpha );\n		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );\n		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );\n	#else\n		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n		float D = D_GGX( alpha, dotNH );\n	#endif\n	return F * ( V * D );\n}\nvec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {\n	const float LUT_SIZE = 64.0;\n	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;\n	const float LUT_BIAS = 0.5 / LUT_SIZE;\n	float dotNV = saturate( dot( N, V ) );\n	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );\n	uv = uv * LUT_SCALE + LUT_BIAS;\n	return uv;\n}\nfloat LTC_ClippedSphereFormFactor( const in vec3 f ) {\n	float l = length( f );\n	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );\n}\nvec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {\n	float x = dot( v1, v2 );\n	float y = abs( x );\n	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;\n	float b = 3.4175940 + ( 4.1616724 + y ) * y;\n	float v = a / b;\n	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;\n	return cross( v1, v2 ) * theta_sintheta;\n}\nvec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {\n	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];\n	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];\n	vec3 lightNormal = cross( v1, v2 );\n	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );\n	vec3 T1, T2;\n	T1 = normalize( V - N * dot( V, N ) );\n	T2 = - cross( N, T1 );\n	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );\n	vec3 coords[ 4 ];\n	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );\n	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );\n	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );\n	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );\n	coords[ 0 ] = normalize( coords[ 0 ] );\n	coords[ 1 ] = normalize( coords[ 1 ] );\n	coords[ 2 ] = normalize( coords[ 2 ] );\n	coords[ 3 ] = normalize( coords[ 3 ] );\n	vec3 vectorFormFactor = vec3( 0.0 );\n	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );\n	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );\n	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );\n	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );\n	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );\n	return vec3( result );\n}\n#if defined( USE_SHEEN )\nfloat D_Charlie( float roughness, float dotNH ) {\n	float alpha = pow2( roughness );\n	float invAlpha = 1.0 / alpha;\n	float cos2h = dotNH * dotNH;\n	float sin2h = max( 1.0 - cos2h, 0.0078125 );\n	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );\n}\nfloat V_Neubelt( float dotNV, float dotNL ) {\n	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );\n}\nvec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {\n	vec3 halfDir = normalize( lightDir + viewDir );\n	float dotNL = saturate( dot( normal, lightDir ) );\n	float dotNV = saturate( dot( normal, viewDir ) );\n	float dotNH = saturate( dot( normal, halfDir ) );\n	float D = D_Charlie( sheenRoughness, dotNH );\n	float V = V_Neubelt( dotNV, dotNL );\n	return sheenColor * ( D * V );\n}\n#endif\nfloat IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {\n	float dotNV = saturate( dot( normal, viewDir ) );\n	float r2 = roughness * roughness;\n	float rInv = 1.0 / ( roughness + 0.1 );\n	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;\n	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;\n	float DG = exp( a * dotNV + b );\n	return saturate( DG );\n}\nvec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {\n	float dotNV = saturate( dot( normal, viewDir ) );\n	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;\n	return specularColor * fab.x + specularF90 * fab.y;\n}\n#ifdef USE_IRIDESCENCE\nvoid computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {\n#else\nvoid computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {\n#endif\n	#ifdef USE_IRIDESCENCE\n		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );\n	#else\n		vec3 Fr = specularColor;\n	#endif\n	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;\n	float Ess = fab.x + fab.y;\n	float Ems = 1.0 - Ess;\n	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );\n	singleScatter += FssEss;\n	multiScatter += Fms * Ems;\n}\n#if NUM_RECT_AREA_LIGHTS > 0\n	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n		vec3 normal = geometryNormal;\n		vec3 viewDir = geometryViewDir;\n		vec3 position = geometryPosition;\n		vec3 lightPos = rectAreaLight.position;\n		vec3 halfWidth = rectAreaLight.halfWidth;\n		vec3 halfHeight = rectAreaLight.halfHeight;\n		vec3 lightColor = rectAreaLight.color;\n		float roughness = material.roughness;\n		vec3 rectCoords[ 4 ];\n		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;\n		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;\n		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;\n		vec2 uv = LTC_Uv( normal, viewDir, roughness );\n		vec4 t1 = texture2D( ltc_1, uv );\n		vec4 t2 = texture2D( ltc_2, uv );\n		mat3 mInv = mat3(\n			vec3( t1.x, 0, t1.y ),\n			vec3(    0, 1,    0 ),\n			vec3( t1.z, 0, t1.w )\n		);\n		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );\n		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );\n		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );\n		#ifdef USE_CLEARCOAT\n			vec3 Ncc = geometryClearcoatNormal;\n			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );\n			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );\n			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );\n			mat3 mInvClearcoat = mat3(\n				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),\n				vec3(             0, 1,             0 ),\n				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )\n			);\n			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;\n			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );\n		#endif\n	}\n#endif\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );\n	vec3 irradiance = dotNL * directLight.color;\n	#ifdef USE_CLEARCOAT\n		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );\n		vec3 ccIrradiance = dotNLcc * directLight.color;\n		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );\n	#endif\n	#ifdef USE_SHEEN\n \n 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );\n \n 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );\n 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );\n \n 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );\n \n 		irradiance *= sheenEnergyComp;\n \n 	#endif\n	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );\n	#ifdef USE_RETROREFLECTION\n		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );\n		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );\n		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );\n	#endif\n	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;\n	vec3 halfDir = normalize( directLight.direction + geometryViewDir );\n	float dotVH = saturate( dot( geometryViewDir, halfDir ) );\n	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );\n	#ifdef USE_RETROREFLECTION\n		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );\n		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );\n		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );\n		F = mix( F, retroF, saturate( material.retroreflectivity ) );\n	#endif\n	#ifdef USE_DIFFUSE_ROUGHNESS\n		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );\n	#else\n		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );\n	#endif\n	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );\n}\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n	vec3 singleScattering = vec3( 0.0 );\n	vec3 multiScattering = vec3( 0.0 );\n	#ifdef USE_IRIDESCENCE\n		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );\n	#else\n		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );\n	#endif\n	#ifdef USE_DIFFUSE_ROUGHNESS\n		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );\n		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );\n		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );\n	#else\n		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );\n	#endif\n	#ifdef USE_SHEEN\n		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );\n		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;\n		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;\n		diffuse *= sheenEnergyComp;\n	#endif\n	reflectedLight.indirectDiffuse += diffuse;\n}\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {\n	#ifdef USE_CLEARCOAT\n		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );\n	#endif\n	#ifdef USE_SHEEN\n		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;\n 	#endif\n	vec3 singleScatteringDielectric = vec3( 0.0 );\n	vec3 multiScatteringDielectric = vec3( 0.0 );\n	vec3 singleScatteringMetallic = vec3( 0.0 );\n	vec3 multiScatteringMetallic = vec3( 0.0 );\n	#ifdef USE_IRIDESCENCE\n		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );\n		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );\n	#else\n		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );\n		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );\n	#endif\n	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );\n	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );\n	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;\n	#ifdef USE_DIFFUSE_ROUGHNESS\n		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );\n		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );\n	#else\n		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );\n	#endif\n	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;\n	vec3 indirectSpecular = radiance * singleScattering;\n	indirectSpecular += multiScattering * cosineWeightedIrradiance;\n	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;\n	#ifdef USE_SHEEN\n		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );\n		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;\n		indirectSpecular *= sheenEnergyComp;\n		indirectDiffuse *= sheenEnergyComp;\n	#endif\n	reflectedLight.indirectSpecular += indirectSpecular;\n	reflectedLight.indirectDiffuse += indirectDiffuse;\n}\n#define RE_Direct				RE_Direct_Physical\n#define RE_Direct_RectArea		RE_Direct_RectArea_Physical\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular		RE_IndirectSpecular_Physical\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n}",
	lights_fragment_begin: "\nvec3 geometryPosition = - vViewPosition;\nvec3 geometryNormal = normal;\nvec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );\nvec3 geometryClearcoatNormal = vec3( 0.0 );\n#ifdef USE_CLEARCOAT\n	geometryClearcoatNormal = clearcoatNormal;\n#endif\n#ifdef USE_IRIDESCENCE\n	float dotNVi = saturate( dot( normal, geometryViewDir ) );\n	if ( material.iridescenceThickness == 0.0 ) {\n		material.iridescence = 0.0;\n	} else {\n		material.iridescence = saturate( material.iridescence );\n	}\n	if ( material.iridescence > 0.0 ) {\n		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );\n		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );\n		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );\n		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );\n		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );\n	}\n#endif\n#ifdef STANDARD\n	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );\n	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;\n	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )\n		float EssMs = material.dfg.x + material.dfg.y;\n		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );\n	#endif\n#endif\nIncidentLight directLight;\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n	PointLight pointLight;\n	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0\n	PointLightShadow pointLightShadow;\n	#endif\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n		pointLight = pointLights[ i ];\n		getPointLightInfo( pointLight, geometryPosition, directLight );\n		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )\n		pointLightShadow = pointLightShadows[ i ];\n		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;\n		#endif\n		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n	}\n	#pragma unroll_loop_end\n#endif\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n	SpotLight spotLight;\n	vec4 spotColor;\n	vec3 spotLightCoord;\n	bool inSpotLightMap;\n	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0\n	SpotLightShadow spotLightShadow;\n	#endif\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n		spotLight = spotLights[ i ];\n		getSpotLightInfo( spotLight, geometryPosition, directLight );\n		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )\n		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX\n		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS\n		#else\n		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )\n		#endif\n		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )\n			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;\n			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );\n			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );\n			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;\n		#endif\n		#undef SPOT_LIGHT_MAP_INDEX\n		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n		spotLightShadow = spotLightShadows[ i ];\n		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;\n		#endif\n		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n	}\n	#pragma unroll_loop_end\n#endif\n#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )\n	SunLight sunLight;\n	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0\n	SunLightShadow sunLightShadow;\n	#endif\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {\n		sunLight = sunLights[ i ];\n		getSunLightInfo( sunLight, directLight );\n		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )\n		sunLightShadow = sunLightShadows[ i ];\n		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;\n		#endif\n		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n	}\n	#pragma unroll_loop_end\n#endif\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n	DirectionalLight directionalLight;\n	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0\n	DirectionalLightShadow directionalLightShadow;\n	#endif\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n		directionalLight = directionalLights[ i ];\n		getDirectionalLightInfo( directionalLight, directLight );\n		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )\n		directionalLightShadow = directionalLightShadows[ i ];\n		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n		#endif\n		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n	}\n	#pragma unroll_loop_end\n#endif\n#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\n	RectAreaLight rectAreaLight;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n		rectAreaLight = rectAreaLights[ i ];\n		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n	}\n	#pragma unroll_loop_end\n#endif\n#if defined( RE_IndirectDiffuse )\n	vec3 iblIrradiance = vec3( 0.0 );\n	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n	#if defined( USE_LIGHT_PROBES )\n		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );\n	#endif\n	#if ( NUM_HEMI_LIGHTS > 0 )\n		#pragma unroll_loop_start\n		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );\n		}\n		#pragma unroll_loop_end\n	#endif\n	#if NUM_LIGHT_PROBE_GRIDS > 0\n		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;\n		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );\n		int probeGrid = - 1;\n		#pragma unroll_loop_start\n		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {\n			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;\n		}\n		#pragma unroll_loop_end\n		#pragma unroll_loop_start\n		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {\n			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );\n		}\n		#pragma unroll_loop_end\n	#endif\n#endif\n#if defined( RE_IndirectSpecular )\n	vec3 radiance = vec3( 0.0 );\n	vec3 clearcoatRadiance = vec3( 0.0 );\n#endif",
	lights_fragment_maps: "#if defined( RE_IndirectDiffuse )\n	#ifdef USE_LIGHTMAP\n		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );\n		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;\n		irradiance += lightMapIrradiance;\n	#endif\n	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )\n		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )\n			iblIrradiance += getIBLIrradiance( geometryNormal );\n		#endif\n	#endif\n#endif\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n	#ifdef USE_ANISOTROPY\n		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );\n	#else\n		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );\n	#endif\n	#ifdef USE_RETROREFLECTION\n		#ifdef USE_ANISOTROPY\n			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );\n		#else\n			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );\n		#endif\n		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );\n	#endif\n	radiance += iblRadiance;\n	#ifdef USE_CLEARCOAT\n		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );\n	#endif\n#endif",
	lights_fragment_end: "#if defined( RE_IndirectDiffuse )\n	#if defined( LAMBERT ) || defined( PHONG )\n		irradiance += iblIrradiance;\n	#endif\n	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n#endif\n#if defined( RE_IndirectSpecular )\n	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n#endif",
	lightprobes_pars_fragment: "#if NUM_LIGHT_PROBE_GRIDS > 0\nuniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];\nuniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];\nuniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];\nuniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];\nbool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {\n	vec3 spacing = ( probesMax - probesMin ) / probesResolution;\n	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;\n	vec3 margin = spacing * 0.01;\n	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );\n}\nvec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {\n	vec3 res = probesResolution;\n	vec3 gridRange = probesMax - probesMin;\n	vec3 probeSpacing = gridRange / res;\n	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;\n	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );\n	float nz          = res.z;\n	float paddedSlices = nz + 2.0;\n	float atlasDepth  = 7.0 * paddedSlices;\n	float uvZBase     = uvw.z * nz + 1.0;\n	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );\n	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );\n	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );\n	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );\n	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );\n	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );\n	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );\n	vec3 c0 = s0.xyz;\n	vec3 c1 = vec3( s0.w, s1.xy );\n	vec3 c2 = vec3( s1.zw, s2.x );\n	vec3 c3 = s2.yzw;\n	vec3 c4 = s3.xyz;\n	vec3 c5 = vec3( s3.w, s4.xy );\n	vec3 c6 = vec3( s4.zw, s5.x );\n	vec3 c7 = s5.yzw;\n	vec3 c8 = s6.xyz;\n	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;\n	vec3 result = c0 * 0.886227;\n	result += c1 * 2.0 * 0.511664 * y;\n	result += c2 * 2.0 * 0.511664 * z;\n	result += c3 * 2.0 * 0.511664 * x;\n	result += c4 * 2.0 * 0.429043 * x * y;\n	result += c5 * 2.0 * 0.429043 * y * z;\n	result += c6 * ( 0.743125 * z * z - 0.247708 );\n	result += c7 * 2.0 * 0.429043 * x * z;\n	result += c8 * 0.429043 * ( x * x - y * y );\n	return max( result, vec3( 0.0 ) );\n}\n#endif",
	logdepthbuf_fragment: "#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )\n	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;\n#endif",
	logdepthbuf_pars_fragment: "#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )\n	uniform float logDepthBufFC;\n	varying float vFragDepth;\n	varying float vIsPerspective;\n#endif",
	logdepthbuf_pars_vertex: "#ifdef USE_LOGARITHMIC_DEPTH_BUFFER\n	varying float vFragDepth;\n	varying float vIsPerspective;\n#endif",
	logdepthbuf_vertex: "#ifdef USE_LOGARITHMIC_DEPTH_BUFFER\n	vFragDepth = 1.0 + gl_Position.w;\n	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );\n#endif",
	map_fragment: "#ifdef USE_MAP\n	vec4 sampledDiffuseColor = texture2D( map, vMapUv );\n	#ifdef DECODE_VIDEO_TEXTURE\n		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );\n	#endif\n	diffuseColor *= sampledDiffuseColor;\n#endif",
	map_pars_fragment: "#ifdef USE_MAP\n	uniform sampler2D map;\n#endif",
	map_particle_fragment: "#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n	#if defined( USE_POINTS_UV )\n		vec2 uv = vUv;\n	#else\n		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;\n	#endif\n#endif\n#ifdef USE_MAP\n	diffuseColor *= texture2D( map, uv );\n#endif\n#ifdef USE_ALPHAMAP\n	diffuseColor.a *= texture2D( alphaMap, uv ).g;\n#endif",
	map_particle_pars_fragment: "#if defined( USE_POINTS_UV )\n	varying vec2 vUv;\n#else\n	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n		uniform mat3 uvTransform;\n	#endif\n#endif\n#ifdef USE_MAP\n	uniform sampler2D map;\n#endif\n#ifdef USE_ALPHAMAP\n	uniform sampler2D alphaMap;\n#endif",
	metalnessmap_fragment: "float metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\n	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );\n	metalnessFactor *= texelMetalness.b;\n#endif",
	metalnessmap_pars_fragment: "#ifdef USE_METALNESSMAP\n	uniform sampler2D metalnessMap;\n#endif",
	morphinstance_vertex: "#ifdef USE_INSTANCING_MORPH\n	float morphTargetInfluences[ MORPHTARGETS_COUNT ];\n	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;\n	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;\n	}\n#endif",
	morphcolor_vertex: "#if defined( USE_MORPHCOLORS )\n	#if defined( USE_COLOR_ALPHA )\n		vColor *= morphTargetBaseInfluence;\n	#elif defined( USE_COLOR )\n		vColor.rgb *= morphTargetBaseInfluence;\n	#endif\n	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n		#if defined( USE_COLOR_ALPHA )\n			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];\n		#elif defined( USE_COLOR )\n			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];\n		#endif\n	}\n#endif",
	morphnormal_vertex: "#ifdef USE_MORPHNORMALS\n	objectNormal *= morphTargetBaseInfluence;\n	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];\n	}\n#endif",
	morphtarget_pars_vertex: "#ifdef USE_MORPHTARGETS\n	#ifndef USE_INSTANCING_MORPH\n		uniform float morphTargetBaseInfluence;\n		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];\n	#endif\n	uniform sampler2DArray morphTargetsTexture;\n	uniform ivec2 morphTargetsTextureSize;\n	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {\n		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;\n		int y = texelIndex / morphTargetsTextureSize.x;\n		int x = texelIndex - y * morphTargetsTextureSize.x;\n		ivec3 morphUV = ivec3( x, y, morphTargetIndex );\n		return texelFetch( morphTargetsTexture, morphUV, 0 );\n	}\n#endif",
	morphtarget_vertex: "#ifdef USE_MORPHTARGETS\n	transformed *= morphTargetBaseInfluence;\n	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];\n	}\n#endif",
	normal_fragment_begin: "float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;\n#ifdef FLAT_SHADED\n	vec3 fdx = dFdx( vViewPosition );\n	vec3 fdy = dFdy( vViewPosition );\n	vec3 normal = normalize( cross( fdx, fdy ) );\n#else\n	vec3 normal = normalize( vNormal );\n	#ifdef DOUBLE_SIDED\n		normal *= faceDirection;\n	#endif\n#endif\n#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )\n	#ifdef USE_TANGENT\n		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );\n	#else\n		mat3 tbn = getTangentFrame( - vViewPosition, normal,\n		#if defined( USE_NORMALMAP )\n			vNormalMapUv\n		#elif defined( USE_CLEARCOAT_NORMALMAP )\n			vClearcoatNormalMapUv\n		#else\n			vUv\n		#endif\n		);\n	#endif\n	#ifdef DOUBLE_SIDED\n		tbn[0] *= faceDirection;\n		tbn[1] *= faceDirection;\n	#endif\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n	#ifdef USE_TANGENT\n		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );\n	#else\n		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );\n	#endif\n	#ifdef DOUBLE_SIDED\n		tbn2[0] *= faceDirection;\n		tbn2[1] *= faceDirection;\n	#endif\n#endif\nvec3 nonPerturbedNormal = normal;",
	normal_fragment_maps: "#ifdef USE_NORMALMAP_OBJECTSPACE\n	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;\n	#ifdef FLIP_SIDED\n		normal = - normal;\n	#endif\n	#ifdef DOUBLE_SIDED\n		normal = normal * faceDirection;\n	#endif\n	normal = normalize( normalMatrix * normal );\n#elif defined( USE_NORMALMAP_TANGENTSPACE )\n	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;\n	#if defined( USE_PACKED_NORMALMAP )\n		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );\n	#endif\n	mapN.xy *= normalScale;\n	normal = normalize( tbn * mapN );\n#elif defined( USE_BUMPMAP )\n	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );\n#endif",
	normal_pars_fragment: "#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n	#ifdef USE_TANGENT\n		varying vec3 vTangent;\n		varying vec3 vBitangent;\n	#endif\n#endif",
	normal_pars_vertex: "#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n	#ifdef USE_TANGENT\n		varying vec3 vTangent;\n		varying vec3 vBitangent;\n	#endif\n#endif",
	normal_vertex: "#ifndef FLAT_SHADED\n	vNormal = normalize( transformedNormal );\n	#ifdef USE_TANGENT\n		vTangent = normalize( transformedTangent );\n		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n		#ifdef FLIP_SIDED\n			vBitangent = - vBitangent;\n		#endif\n	#endif\n#endif",
	normalmap_pars_fragment: "#ifdef USE_NORMALMAP\n	uniform sampler2D normalMap;\n	uniform vec2 normalScale;\n#endif\n#ifdef USE_NORMALMAP_OBJECTSPACE\n	uniform mat3 normalMatrix;\n#endif\n#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )\n	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {\n		vec3 q0 = dFdx( eye_pos.xyz );\n		vec3 q1 = dFdy( eye_pos.xyz );\n		vec2 st0 = dFdx( uv.st );\n		vec2 st1 = dFdy( uv.st );\n		vec3 N = surf_norm;\n		vec3 q1perp = cross( q1, N );\n		vec3 q0perp = cross( N, q0 );\n		vec3 T = q1perp * st0.x + q0perp * st1.x;\n		vec3 B = q1perp * st0.y + q0perp * st1.y;\n		float det = max( dot( T, T ), dot( B, B ) );\n		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );\n		return mat3( T * scale, B * scale, N );\n	}\n#endif",
	clearcoat_normal_fragment_begin: "#ifdef USE_CLEARCOAT\n	vec3 clearcoatNormal = nonPerturbedNormal;\n#endif",
	clearcoat_normal_fragment_maps: "#ifdef USE_CLEARCOAT_NORMALMAP\n	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;\n	clearcoatMapN.xy *= clearcoatNormalScale;\n	clearcoatNormal = normalize( tbn2 * clearcoatMapN );\n#endif",
	clearcoat_pars_fragment: "#ifdef USE_CLEARCOATMAP\n	uniform sampler2D clearcoatMap;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n	uniform sampler2D clearcoatNormalMap;\n	uniform vec2 clearcoatNormalScale;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n	uniform sampler2D clearcoatRoughnessMap;\n#endif",
	iridescence_pars_fragment: "#ifdef USE_IRIDESCENCEMAP\n	uniform sampler2D iridescenceMap;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n	uniform sampler2D iridescenceThicknessMap;\n#endif",
	opaque_fragment: "#ifdef OPAQUE\ndiffuseColor.a = 1.0;\n#endif\n#ifdef USE_TRANSMISSION\ndiffuseColor.a *= material.transmissionAlpha;\n#endif\ngl_FragColor = vec4( outgoingLight, diffuseColor.a );",
	packing: "vec3 packNormalToRGB( const in vec3 normal ) {\n	return normalize( normal ) * 0.5 + 0.5;\n}\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n	return 2.0 * rgb.xyz - 1.0;\n}\nconst float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;\nconst float Inv255 = 1. / 255.;\nconst vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );\nconst vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );\nconst vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );\nconst vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );\nvec4 packDepthToRGBA( const in float v ) {\n	if( v <= 0.0 )\n		return vec4( 0., 0., 0., 0. );\n	if( v >= 1.0 )\n		return vec4( 1., 1., 1., 1. );\n	float vuf;\n	float af = modf( v * PackFactors.a, vuf );\n	float bf = modf( vuf * ShiftRight8, vuf );\n	float gf = modf( vuf * ShiftRight8, vuf );\n	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );\n}\nvec3 packDepthToRGB( const in float v ) {\n	if( v <= 0.0 )\n		return vec3( 0., 0., 0. );\n	if( v >= 1.0 )\n		return vec3( 1., 1., 1. );\n	float vuf;\n	float bf = modf( v * PackFactors.b, vuf );\n	float gf = modf( vuf * ShiftRight8, vuf );\n	return vec3( vuf * Inv255, gf * PackUpscale, bf );\n}\nvec2 packDepthToRG( const in float v ) {\n	if( v <= 0.0 )\n		return vec2( 0., 0. );\n	if( v >= 1.0 )\n		return vec2( 1., 1. );\n	float vuf;\n	float gf = modf( v * 256., vuf );\n	return vec2( vuf * Inv255, gf );\n}\nfloat unpackRGBAToDepth( const in vec4 v ) {\n	return dot( v, UnpackFactors4 );\n}\nfloat unpackRGBToDepth( const in vec3 v ) {\n	return dot( v, UnpackFactors3 );\n}\nfloat unpackRGToDepth( const in vec2 v ) {\n	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;\n}\nvec4 pack2HalfToRGBA( const in vec2 v ) {\n	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );\n	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );\n}\nvec2 unpackRGBATo2Half( const in vec4 v ) {\n	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );\n}\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n	return ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {\n	#ifdef USE_REVERSED_DEPTH_BUFFER\n	\n		return depth * ( far - near ) - far;\n	#else\n		return depth * ( near - far ) - near;\n	#endif\n}\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {\n	\n	#ifdef USE_REVERSED_DEPTH_BUFFER\n		return ( near * far ) / ( ( near - far ) * depth - near );\n	#else\n		return ( near * far ) / ( ( far - near ) * depth - far );\n	#endif\n}",
	premultiplied_alpha_fragment: "#ifdef PREMULTIPLIED_ALPHA\n	gl_FragColor.rgb *= gl_FragColor.a;\n#endif",
	project_vertex: "vec4 mvPosition = vec4( transformed, 1.0 );\n#ifdef USE_BATCHING\n	mvPosition = batchingMatrix * mvPosition;\n#endif\n#ifdef USE_INSTANCING\n	mvPosition = instanceMatrix * mvPosition;\n#endif\nmvPosition = modelViewMatrix * mvPosition;\ngl_Position = projectionMatrix * mvPosition;",
	dithering_fragment: "#ifdef DITHERING\n	gl_FragColor.rgb = dithering( gl_FragColor.rgb );\n#endif",
	dithering_pars_fragment: "#ifdef DITHERING\n	vec3 dithering( vec3 color ) {\n		float grid_position = rand( gl_FragCoord.xy );\n		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );\n		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );\n		return color + dither_shift_RGB;\n	}\n#endif",
	roughnessmap_fragment: "float roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\n	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );\n	roughnessFactor *= texelRoughness.g;\n#endif",
	roughnessmap_pars_fragment: "#ifdef USE_ROUGHNESSMAP\n	uniform sampler2D roughnessMap;\n#endif",
	shadowmap_pars_fragment: "#if NUM_SPOT_LIGHT_COORDS > 0\n	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];\n#endif\n#if NUM_SPOT_LIGHT_MAPS > 0\n	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];\n#endif\n#ifdef USE_SHADOWMAP\n	#if NUM_SUN_LIGHT_SHADOWS > 0\n		#define SUN_LIGHT_CASCADES 2\n		#if defined( SHADOWMAP_TYPE_PCF )\n			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];\n		#else\n			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];\n		#endif\n		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];\n		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];\n		varying vec4 vSunShadowWorldPosition;\n		varying vec3 vSunShadowWorldNormal;\n		struct SunLightShadow {\n			float shadowIntensity;\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n		};\n		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];\n	#endif\n	#if NUM_DIR_LIGHT_SHADOWS > 0\n		#if defined( SHADOWMAP_TYPE_PCF )\n			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];\n		#else\n			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];\n		#endif\n		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n		struct DirectionalLightShadow {\n			float shadowIntensity;\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n		};\n		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n	#endif\n	#if NUM_SPOT_LIGHT_SHADOWS > 0\n		#if defined( SHADOWMAP_TYPE_PCF )\n			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];\n		#else\n			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];\n		#endif\n		struct SpotLightShadow {\n			float shadowIntensity;\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n		};\n		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0\n		#if defined( SHADOWMAP_TYPE_PCF )\n			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];\n		#elif defined( SHADOWMAP_TYPE_BASIC )\n			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];\n		#endif\n		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n		struct PointLightShadow {\n			float shadowIntensity;\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n			float shadowCameraNear;\n			float shadowCameraFar;\n		};\n		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n	#endif\n	#if defined( SHADOWMAP_TYPE_PCF )\n		float interleavedGradientNoise( vec2 position ) {\n			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );\n		}\n		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {\n			const float goldenAngle = 2.399963229728653;\n			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );\n			float theta = float( sampleIndex ) * goldenAngle + phi;\n			return vec2( cos( theta ), sin( theta ) ) * r;\n		}\n	#endif\n	#if defined( SHADOWMAP_TYPE_PCF )\n		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n			float shadow = 1.0;\n			shadowCoord.xyz /= shadowCoord.w;\n			#ifdef USE_REVERSED_DEPTH_BUFFER\n				shadowCoord.z -= shadowBias;\n			#else\n				shadowCoord.z += shadowBias;\n			#endif\n			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;\n			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;\n			if ( frustumTest ) {\n				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n				vec2 radius = shadowRadius * texelSize;\n				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;\n				shadow = (\n					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +\n					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +\n					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +\n					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +\n					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )\n				) * 0.2;\n			}\n			return mix( 1.0, shadow, shadowIntensity );\n		}\n	#elif defined( SHADOWMAP_TYPE_VSM )\n		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n			float shadow = 1.0;\n			shadowCoord.xyz /= shadowCoord.w;\n			#ifdef USE_REVERSED_DEPTH_BUFFER\n				shadowCoord.z -= shadowBias;\n			#else\n				shadowCoord.z += shadowBias;\n			#endif\n			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;\n			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;\n			if ( frustumTest ) {\n				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;\n				float mean = distribution.x;\n				float variance = distribution.y * distribution.y;\n				#ifdef USE_REVERSED_DEPTH_BUFFER\n					float hard_shadow = step( mean, shadowCoord.z );\n				#else\n					float hard_shadow = step( shadowCoord.z, mean );\n				#endif\n				\n				if ( hard_shadow == 1.0 ) {\n					shadow = 1.0;\n				} else {\n					variance = max( variance, 0.0000001 );\n					float d = shadowCoord.z - mean;\n					float p_max = variance / ( variance + d * d );\n					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );\n					shadow = max( hard_shadow, p_max );\n				}\n			}\n			return mix( 1.0, shadow, shadowIntensity );\n		}\n	#else\n		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n			float shadow = 1.0;\n			shadowCoord.xyz /= shadowCoord.w;\n			#ifdef USE_REVERSED_DEPTH_BUFFER\n				shadowCoord.z -= shadowBias;\n			#else\n				shadowCoord.z += shadowBias;\n			#endif\n			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;\n			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;\n			if ( frustumTest ) {\n				float depth = texture2D( shadowMap, shadowCoord.xy ).r;\n				#ifdef USE_REVERSED_DEPTH_BUFFER\n					shadow = step( depth, shadowCoord.z );\n				#else\n					shadow = step( shadowCoord.z, depth );\n				#endif\n			}\n			return mix( 1.0, shadow, shadowIntensity );\n		}\n	#endif\n	#if NUM_SUN_LIGHT_SHADOWS > 0\n		float getSunShadow(\n			#if defined( SHADOWMAP_TYPE_PCF )\n				sampler2DShadow shadowMap,\n			#else\n				sampler2D shadowMap,\n			#endif\n			SunLightShadow sunLightShadow,\n			int shadowIndex\n		) {\n			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );\n			float viewDepth = vSunShadowWorldPosition.w;\n			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;\n			float shadow = 1.0;\n			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {\n				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];\n				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {\n					float cascadeShadow = getShadow(\n						shadowMap,\n						sunLightShadow.shadowMapSize,\n						sunLightShadow.shadowIntensity,\n						sunLightShadow.shadowBias,\n						sunLightShadow.shadowRadius,\n						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition\n					);\n					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );\n				}\n			}\n			return shadow;\n		}\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0\n	#if defined( SHADOWMAP_TYPE_PCF )\n	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {\n		float shadow = 1.0;\n		vec3 lightToPosition = shadowCoord.xyz;\n		vec3 bd3D = normalize( lightToPosition );\n		vec3 absVec = abs( lightToPosition );\n		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );\n		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {\n			float lightDistance = length( lightToPosition );\n			float depthRange = shadowCameraFar - shadowCameraNear;\n			#ifdef USE_REVERSED_DEPTH_BUFFER\n				float depthA = - shadowCameraNear / depthRange - shadowBias;\n				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );\n			#else\n				float depthA = shadowCameraFar / depthRange + shadowBias;\n				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );\n			#endif\n			float texelSize = shadowRadius / shadowMapSize.x;\n			vec3 absDir = abs( bd3D );\n			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );\n			tangent = normalize( cross( bd3D, tangent ) );\n			vec3 bitangent = cross( bd3D, tangent );\n			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;\n			shadow = 0.0;\n			for ( int i = 0; i < 5; i ++ ) {\n				vec2 offset = vogelDiskSample( i, 5, phi );\n				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;\n				vec3 absDirection = abs( direction );\n				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );\n				shadow += texture( shadowMap, vec4( direction, dp ) );\n			}\n			shadow *= 0.2;\n		}\n		return mix( 1.0, shadow, shadowIntensity );\n	}\n	#elif defined( SHADOWMAP_TYPE_BASIC )\n	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {\n		float shadow = 1.0;\n		vec3 lightToPosition = shadowCoord.xyz;\n		vec3 absVec = abs( lightToPosition );\n		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );\n		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {\n			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );\n			dp += shadowBias;\n			vec3 bd3D = normalize( lightToPosition );\n			float depth = textureCube( shadowMap, bd3D ).r;\n			#ifdef USE_REVERSED_DEPTH_BUFFER\n				depth = 1.0 - depth;\n			#endif\n			shadow = step( dp, depth );\n		}\n		return mix( 1.0, shadow, shadowIntensity );\n	}\n	#endif\n	#endif\n#endif",
	shadowmap_pars_vertex: "#if NUM_SPOT_LIGHT_COORDS > 0\n	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];\n	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];\n#endif\n#ifdef USE_SHADOWMAP\n	#if NUM_SUN_LIGHT_SHADOWS > 0\n		varying vec4 vSunShadowWorldPosition;\n		varying vec3 vSunShadowWorldNormal;\n	#endif\n	#if NUM_DIR_LIGHT_SHADOWS > 0\n		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];\n		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n		struct DirectionalLightShadow {\n			float shadowIntensity;\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n		};\n		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n	#endif\n	#if NUM_SPOT_LIGHT_SHADOWS > 0\n		struct SpotLightShadow {\n			float shadowIntensity;\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n		};\n		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0\n		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];\n		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n		struct PointLightShadow {\n			float shadowIntensity;\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n			float shadowCameraNear;\n			float shadowCameraFar;\n		};\n		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n	#endif\n#endif",
	shadowmap_vertex: "#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )\n	#ifdef HAS_NORMAL\n		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );\n	#else\n		vec3 shadowWorldNormal = vec3( 0.0 );\n	#endif\n	vec4 shadowWorldPosition;\n#endif\n#if defined( USE_SHADOWMAP )\n	#if NUM_SUN_LIGHT_SHADOWS > 0\n		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );\n		vSunShadowWorldNormal = shadowWorldNormal;\n	#endif\n	#if NUM_DIR_LIGHT_SHADOWS > 0\n		#pragma unroll_loop_start\n		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );\n			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;\n		}\n		#pragma unroll_loop_end\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0\n		#pragma unroll_loop_start\n		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );\n			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;\n		}\n		#pragma unroll_loop_end\n	#endif\n#endif\n#if NUM_SPOT_LIGHT_COORDS > 0\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {\n		shadowWorldPosition = worldPosition;\n		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;\n		#endif\n		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;\n	}\n	#pragma unroll_loop_end\n#endif",
	shadowmask_pars_fragment: "float getShadowMask() {\n	float shadow = 1.0;\n	#ifdef USE_SHADOWMAP\n	#if NUM_SUN_LIGHT_SHADOWS > 0\n	SunLightShadow sunLight;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {\n		sunLight = sunLightShadows[ i ];\n		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;\n	}\n	#pragma unroll_loop_end\n	#endif\n	#if NUM_DIR_LIGHT_SHADOWS > 0\n	DirectionalLightShadow directionalLight;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n		directionalLight = directionalLightShadows[ i ];\n		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n	}\n	#pragma unroll_loop_end\n	#endif\n	#if NUM_SPOT_LIGHT_SHADOWS > 0\n	SpotLightShadow spotLight;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n		spotLight = spotLightShadows[ i ];\n		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;\n	}\n	#pragma unroll_loop_end\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )\n	PointLightShadow pointLight;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n		pointLight = pointLightShadows[ i ];\n		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n	}\n	#pragma unroll_loop_end\n	#endif\n	#endif\n	return shadow;\n}",
	skinbase_vertex: "#ifdef USE_SKINNING\n	mat4 boneMatX = getBoneMatrix( skinIndex.x );\n	mat4 boneMatY = getBoneMatrix( skinIndex.y );\n	mat4 boneMatZ = getBoneMatrix( skinIndex.z );\n	mat4 boneMatW = getBoneMatrix( skinIndex.w );\n#endif",
	skinning_pars_vertex: "#ifdef USE_SKINNING\n	uniform mat4 bindMatrix;\n	uniform mat4 bindMatrixInverse;\n	uniform highp sampler2D boneTexture;\n	mat4 getBoneMatrix( const in float i ) {\n		int size = textureSize( boneTexture, 0 ).x;\n		int j = int( i ) * 4;\n		int x = j % size;\n		int y = j / size;\n		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );\n		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );\n		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );\n		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );\n		return mat4( v1, v2, v3, v4 );\n	}\n#endif",
	skinning_vertex: "#ifdef USE_SKINNING\n	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n	vec4 skinned = vec4( 0.0 );\n	skinned += boneMatX * skinVertex * skinWeight.x;\n	skinned += boneMatY * skinVertex * skinWeight.y;\n	skinned += boneMatZ * skinVertex * skinWeight.z;\n	skinned += boneMatW * skinVertex * skinWeight.w;\n	transformed = ( bindMatrixInverse * skinned ).xyz;\n#endif",
	skinnormal_vertex: "#ifdef USE_SKINNING\n	mat4 skinMatrix = mat4( 0.0 );\n	skinMatrix += skinWeight.x * boneMatX;\n	skinMatrix += skinWeight.y * boneMatY;\n	skinMatrix += skinWeight.z * boneMatZ;\n	skinMatrix += skinWeight.w * boneMatW;\n	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;\n	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n	#ifdef USE_TANGENT\n		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n	#endif\n#endif",
	specularmap_fragment: "float specularStrength;\n#ifdef USE_SPECULARMAP\n	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );\n	specularStrength = texelSpecular.r;\n#else\n	specularStrength = 1.0;\n#endif",
	specularmap_pars_fragment: "#ifdef USE_SPECULARMAP\n	uniform sampler2D specularMap;\n#endif",
	tonemapping_fragment: "#if defined( TONE_MAPPING )\n	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n#endif",
	tonemapping_pars_fragment: "#ifndef saturate\n#define saturate( a ) clamp( a, 0.0, 1.0 )\n#endif\nuniform float toneMappingExposure;\nvec3 LinearToneMapping( vec3 color ) {\n	return saturate( toneMappingExposure * color );\n}\nvec3 ReinhardToneMapping( vec3 color ) {\n	color *= toneMappingExposure;\n	return saturate( color / ( vec3( 1.0 ) + color ) );\n}\nvec3 CineonToneMapping( vec3 color ) {\n	color *= toneMappingExposure;\n	color = max( vec3( 0.0 ), color - 0.004 );\n	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n}\nvec3 RRTAndODTFit( vec3 v ) {\n	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;\n	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;\n	return a / b;\n}\nvec3 ACESFilmicToneMapping( vec3 color ) {\n	const mat3 ACESInputMat = mat3(\n		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),\n		vec3( 0.04823, 0.01566, 0.83777 )\n	);\n	const mat3 ACESOutputMat = mat3(\n		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),\n		vec3( -0.07367, -0.00605,  1.07602 )\n	);\n	color *= toneMappingExposure / 0.6;\n	color = ACESInputMat * color;\n	color = RRTAndODTFit( color );\n	color = ACESOutputMat * color;\n	return saturate( color );\n}\nconst mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(\n	vec3( 1.6605, - 0.1246, - 0.0182 ),\n	vec3( - 0.5876, 1.1329, - 0.1006 ),\n	vec3( - 0.0728, - 0.0083, 1.1187 )\n);\nconst mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(\n	vec3( 0.6274, 0.0691, 0.0164 ),\n	vec3( 0.3293, 0.9195, 0.0880 ),\n	vec3( 0.0433, 0.0113, 0.8956 )\n);\nvec3 agxDefaultContrastApprox( vec3 x ) {\n	vec3 x2 = x * x;\n	vec3 x4 = x2 * x2;\n	return + 15.5 * x4 * x2\n		- 40.14 * x4 * x\n		+ 31.96 * x4\n		- 6.868 * x2 * x\n		+ 0.4298 * x2\n		+ 0.1191 * x\n		- 0.00232;\n}\nvec3 AgXToneMapping( vec3 color ) {\n	const mat3 AgXInsetMatrix = mat3(\n		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),\n		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),\n		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )\n	);\n	const mat3 AgXOutsetMatrix = mat3(\n		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),\n		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),\n		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )\n	);\n	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;\n	color *= toneMappingExposure;\n	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;\n	color = AgXInsetMatrix * color;\n	color = max( color, 1e-10 );	color = log2( color );\n	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );\n	color = clamp( color, 0.0, 1.0 );\n	color = agxDefaultContrastApprox( color );\n	color = AgXOutsetMatrix * color;\n	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );\n	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;\n	color = clamp( color, 0.0, 1.0 );\n	return color;\n}\nvec3 NeutralToneMapping( vec3 color ) {\n	const float StartCompression = 0.8 - 0.04;\n	const float Desaturation = 0.15;\n	color *= toneMappingExposure;\n	float x = min( color.r, min( color.g, color.b ) );\n	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;\n	color -= offset;\n	float peak = max( color.r, max( color.g, color.b ) );\n	if ( peak < StartCompression ) return color;\n	float d = 1. - StartCompression;\n	float newPeak = 1. - d * d / ( peak + d - StartCompression );\n	color *= newPeak / peak;\n	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );\n	return mix( color, vec3( newPeak ), g );\n}\nvec3 CustomToneMapping( vec3 color ) { return color; }",
	transmission_fragment: "#ifdef USE_TRANSMISSION\n	material.transmission = transmission;\n	material.transmissionAlpha = 1.0;\n	material.thickness = thickness;\n	material.attenuationDistance = attenuationDistance;\n	material.attenuationColor = attenuationColor;\n	#ifdef USE_TRANSMISSIONMAP\n		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;\n	#endif\n	#ifdef USE_THICKNESSMAP\n		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;\n	#endif\n	vec3 pos = vWorldPosition;\n	vec3 v = normalize( cameraPosition - pos );\n	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );\n	vec4 transmitted = getIBLVolumeRefraction(\n		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,\n		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,\n		material.attenuationColor, material.attenuationDistance );\n	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );\n	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );\n#endif",
	transmission_pars_fragment: "#ifdef USE_TRANSMISSION\n	uniform float transmission;\n	uniform float thickness;\n	uniform float attenuationDistance;\n	uniform vec3 attenuationColor;\n	#ifdef USE_TRANSMISSIONMAP\n		uniform sampler2D transmissionMap;\n	#endif\n	#ifdef USE_THICKNESSMAP\n		uniform sampler2D thicknessMap;\n	#endif\n	uniform vec2 transmissionSamplerSize;\n	uniform sampler2D transmissionSamplerMap;\n	uniform mat4 modelMatrix;\n	uniform mat4 projectionMatrix;\n	varying vec3 vWorldPosition;\n	float w0( float a ) {\n		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );\n	}\n	float w1( float a ) {\n		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );\n	}\n	float w2( float a ){\n		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );\n	}\n	float w3( float a ) {\n		return ( 1.0 / 6.0 ) * ( a * a * a );\n	}\n	float g0( float a ) {\n		return w0( a ) + w1( a );\n	}\n	float g1( float a ) {\n		return w2( a ) + w3( a );\n	}\n	float h0( float a ) {\n		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );\n	}\n	float h1( float a ) {\n		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );\n	}\n	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {\n		uv = uv * texelSize.zw + 0.5;\n		vec2 iuv = floor( uv );\n		vec2 fuv = fract( uv );\n		float g0x = g0( fuv.x );\n		float g1x = g1( fuv.x );\n		float h0x = h0( fuv.x );\n		float h1x = h1( fuv.x );\n		float h0y = h0( fuv.y );\n		float h1y = h1( fuv.y );\n		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;\n		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;\n		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;\n		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;\n		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +\n			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );\n	}\n	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {\n		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );\n		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );\n		vec2 fLodSizeInv = 1.0 / fLodSize;\n		vec2 cLodSizeInv = 1.0 / cLodSize;\n		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );\n		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );\n		return mix( fSample, cSample, fract( lod ) );\n	}\n	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {\n		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );\n		vec3 modelScale;\n		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );\n		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );\n		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );\n		return normalize( refractionVector ) * thickness * modelScale;\n	}\n	float applyIorToRoughness( const in float roughness, const in float ior ) {\n		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );\n	}\n	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {\n		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );\n		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );\n	}\n	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {\n		if ( isinf( attenuationDistance ) ) {\n			return vec3( 1.0 );\n		} else {\n			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;\n			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;\n		}\n	}\n	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,\n		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,\n		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,\n		const in vec3 attenuationColor, const in float attenuationDistance ) {\n		vec4 transmittedLight;\n		vec3 transmittance;\n		#ifdef USE_DISPERSION\n			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;\n			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );\n			for ( int i = 0; i < 3; i ++ ) {\n				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );\n				vec3 refractedRayExit = position + transmissionRay;\n				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );\n				vec2 refractionCoords = ndcPos.xy / ndcPos.w;\n				refractionCoords += 1.0;\n				refractionCoords /= 2.0;\n				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );\n				transmittedLight[ i ] = transmissionSample[ i ];\n				transmittedLight.a += transmissionSample.a;\n				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];\n			}\n			transmittedLight.a /= 3.0;\n		#else\n			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );\n			vec3 refractedRayExit = position + transmissionRay;\n			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );\n			vec2 refractionCoords = ndcPos.xy / ndcPos.w;\n			refractionCoords += 1.0;\n			refractionCoords /= 2.0;\n			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );\n			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );\n		#endif\n		vec3 attenuatedColor = transmittance * transmittedLight.rgb;\n		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );\n		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;\n		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );\n	}\n#endif",
	uv_pars_fragment: "#if defined( USE_UV ) || defined( USE_ANISOTROPY )\n	varying vec2 vUv;\n#endif\n#ifdef USE_MAP\n	varying vec2 vMapUv;\n#endif\n#ifdef USE_ALPHAMAP\n	varying vec2 vAlphaMapUv;\n#endif\n#ifdef USE_LIGHTMAP\n	varying vec2 vLightMapUv;\n#endif\n#ifdef USE_AOMAP\n	varying vec2 vAoMapUv;\n#endif\n#ifdef USE_BUMPMAP\n	varying vec2 vBumpMapUv;\n#endif\n#ifdef USE_NORMALMAP\n	varying vec2 vNormalMapUv;\n#endif\n#ifdef USE_EMISSIVEMAP\n	varying vec2 vEmissiveMapUv;\n#endif\n#ifdef USE_METALNESSMAP\n	varying vec2 vMetalnessMapUv;\n#endif\n#ifdef USE_ROUGHNESSMAP\n	varying vec2 vRoughnessMapUv;\n#endif\n#ifdef USE_DIFFUSE_ROUGHNESSMAP\n	varying vec2 vDiffuseRoughnessMapUv;\n#endif\n#ifdef USE_ANISOTROPYMAP\n	varying vec2 vAnisotropyMapUv;\n#endif\n#ifdef USE_CLEARCOATMAP\n	varying vec2 vClearcoatMapUv;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n	varying vec2 vClearcoatNormalMapUv;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n	varying vec2 vClearcoatRoughnessMapUv;\n#endif\n#ifdef USE_IRIDESCENCEMAP\n	varying vec2 vIridescenceMapUv;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n	varying vec2 vIridescenceThicknessMapUv;\n#endif\n#ifdef USE_SHEEN_COLORMAP\n	varying vec2 vSheenColorMapUv;\n#endif\n#ifdef USE_SHEEN_ROUGHNESSMAP\n	varying vec2 vSheenRoughnessMapUv;\n#endif\n#ifdef USE_SPECULARMAP\n	varying vec2 vSpecularMapUv;\n#endif\n#ifdef USE_SPECULAR_COLORMAP\n	varying vec2 vSpecularColorMapUv;\n#endif\n#ifdef USE_SPECULAR_INTENSITYMAP\n	varying vec2 vSpecularIntensityMapUv;\n#endif\n#ifdef USE_TRANSMISSIONMAP\n	uniform mat3 transmissionMapTransform;\n	varying vec2 vTransmissionMapUv;\n#endif\n#ifdef USE_THICKNESSMAP\n	uniform mat3 thicknessMapTransform;\n	varying vec2 vThicknessMapUv;\n#endif",
	uv_pars_vertex: "#if defined( USE_UV ) || defined( USE_ANISOTROPY )\n	varying vec2 vUv;\n#endif\n#ifdef USE_MAP\n	uniform mat3 mapTransform;\n	varying vec2 vMapUv;\n#endif\n#ifdef USE_ALPHAMAP\n	uniform mat3 alphaMapTransform;\n	varying vec2 vAlphaMapUv;\n#endif\n#ifdef USE_LIGHTMAP\n	uniform mat3 lightMapTransform;\n	varying vec2 vLightMapUv;\n#endif\n#ifdef USE_AOMAP\n	uniform mat3 aoMapTransform;\n	varying vec2 vAoMapUv;\n#endif\n#ifdef USE_BUMPMAP\n	uniform mat3 bumpMapTransform;\n	varying vec2 vBumpMapUv;\n#endif\n#ifdef USE_NORMALMAP\n	uniform mat3 normalMapTransform;\n	varying vec2 vNormalMapUv;\n#endif\n#ifdef USE_DISPLACEMENTMAP\n	uniform mat3 displacementMapTransform;\n	varying vec2 vDisplacementMapUv;\n#endif\n#ifdef USE_EMISSIVEMAP\n	uniform mat3 emissiveMapTransform;\n	varying vec2 vEmissiveMapUv;\n#endif\n#ifdef USE_METALNESSMAP\n	uniform mat3 metalnessMapTransform;\n	varying vec2 vMetalnessMapUv;\n#endif\n#ifdef USE_ROUGHNESSMAP\n	uniform mat3 roughnessMapTransform;\n	varying vec2 vRoughnessMapUv;\n#endif\n#ifdef USE_DIFFUSE_ROUGHNESSMAP\n	uniform mat3 diffuseRoughnessMapTransform;\n	varying vec2 vDiffuseRoughnessMapUv;\n#endif\n#ifdef USE_ANISOTROPYMAP\n	uniform mat3 anisotropyMapTransform;\n	varying vec2 vAnisotropyMapUv;\n#endif\n#ifdef USE_CLEARCOATMAP\n	uniform mat3 clearcoatMapTransform;\n	varying vec2 vClearcoatMapUv;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n	uniform mat3 clearcoatNormalMapTransform;\n	varying vec2 vClearcoatNormalMapUv;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n	uniform mat3 clearcoatRoughnessMapTransform;\n	varying vec2 vClearcoatRoughnessMapUv;\n#endif\n#ifdef USE_SHEEN_COLORMAP\n	uniform mat3 sheenColorMapTransform;\n	varying vec2 vSheenColorMapUv;\n#endif\n#ifdef USE_SHEEN_ROUGHNESSMAP\n	uniform mat3 sheenRoughnessMapTransform;\n	varying vec2 vSheenRoughnessMapUv;\n#endif\n#ifdef USE_IRIDESCENCEMAP\n	uniform mat3 iridescenceMapTransform;\n	varying vec2 vIridescenceMapUv;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n	uniform mat3 iridescenceThicknessMapTransform;\n	varying vec2 vIridescenceThicknessMapUv;\n#endif\n#ifdef USE_SPECULARMAP\n	uniform mat3 specularMapTransform;\n	varying vec2 vSpecularMapUv;\n#endif\n#ifdef USE_SPECULAR_COLORMAP\n	uniform mat3 specularColorMapTransform;\n	varying vec2 vSpecularColorMapUv;\n#endif\n#ifdef USE_SPECULAR_INTENSITYMAP\n	uniform mat3 specularIntensityMapTransform;\n	varying vec2 vSpecularIntensityMapUv;\n#endif\n#ifdef USE_TRANSMISSIONMAP\n	uniform mat3 transmissionMapTransform;\n	varying vec2 vTransmissionMapUv;\n#endif\n#ifdef USE_THICKNESSMAP\n	uniform mat3 thicknessMapTransform;\n	varying vec2 vThicknessMapUv;\n#endif",
	uv_vertex: "#if defined( USE_UV ) || defined( USE_ANISOTROPY )\n	vUv = vec3( uv, 1 ).xy;\n#endif\n#ifdef USE_MAP\n	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_ALPHAMAP\n	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_LIGHTMAP\n	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_AOMAP\n	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_BUMPMAP\n	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_NORMALMAP\n	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_DISPLACEMENTMAP\n	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_EMISSIVEMAP\n	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_METALNESSMAP\n	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_ROUGHNESSMAP\n	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_DIFFUSE_ROUGHNESSMAP\n	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_ANISOTROPYMAP\n	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_CLEARCOATMAP\n	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_IRIDESCENCEMAP\n	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SHEEN_COLORMAP\n	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SHEEN_ROUGHNESSMAP\n	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SPECULARMAP\n	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SPECULAR_COLORMAP\n	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SPECULAR_INTENSITYMAP\n	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_TRANSMISSIONMAP\n	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_THICKNESSMAP\n	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;\n#endif",
	worldpos_vertex: "#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0\n	vec4 worldPosition = vec4( transformed, 1.0 );\n	#ifdef USE_BATCHING\n		worldPosition = batchingMatrix * worldPosition;\n	#endif\n	#ifdef USE_INSTANCING\n		worldPosition = instanceMatrix * worldPosition;\n	#endif\n	worldPosition = modelMatrix * worldPosition;\n#endif",
	background_vert: "varying vec2 vUv;\nuniform mat3 uvTransform;\nvoid main() {\n	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n	gl_Position = vec4( position.xy, 1.0, 1.0 );\n}",
	background_frag: "uniform sampler2D t2D;\nuniform float backgroundIntensity;\nvarying vec2 vUv;\nvoid main() {\n	vec4 texColor = texture2D( t2D, vUv );\n	#ifdef DECODE_VIDEO_TEXTURE\n		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );\n	#endif\n	texColor.rgb *= backgroundIntensity;\n	gl_FragColor = texColor;\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n}",
	backgroundCube_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n	vWorldDirection = transformDirection( position, modelMatrix );\n	#include <begin_vertex>\n	#include <project_vertex>\n	gl_Position.z = gl_Position.w;\n}",
	backgroundCube_frag: "uniform float backgroundBlurriness;\nuniform float backgroundIntensity;\nuniform mat3 backgroundRotation;\nvarying vec3 vWorldDirection;\n#include <envmap_common_pars_fragment>\nvoid main() {\n	#ifdef ENVMAP_TYPE_PMREM\n		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );\n	#else\n		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );\n	#endif\n	texColor.rgb *= backgroundIntensity;\n	gl_FragColor = texColor;\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n}",
	cube_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n	vWorldDirection = transformDirection( position, modelMatrix );\n	#include <begin_vertex>\n	#include <project_vertex>\n	gl_Position.z = gl_Position.w;\n}",
	cube_frag: "uniform samplerCube tCube;\nuniform float tFlip;\nuniform float opacity;\nvarying vec3 vWorldDirection;\nvoid main() {\n	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );\n	gl_FragColor = texColor;\n	gl_FragColor.a *= opacity;\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n}",
	depth_vert: "#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n	#include <uv_vertex>\n	#include <batching_vertex>\n	#include <skinbase_vertex>\n	#include <morphinstance_vertex>\n	#ifdef USE_DISPLACEMENTMAP\n		#include <beginnormal_vertex>\n		#include <morphnormal_vertex>\n		#include <skinnormal_vertex>\n	#endif\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vHighPrecisionZW = gl_Position.zw;\n}",
	depth_frag: "#if DEPTH_PACKING == 3200\n	uniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n	vec4 diffuseColor = vec4( 1.0 );\n	#include <clipping_planes_fragment>\n	#if DEPTH_PACKING == 3200\n		diffuseColor.a = opacity;\n	#endif\n	#include <map_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <logdepthbuf_fragment>\n	#ifdef USE_REVERSED_DEPTH_BUFFER\n		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];\n	#else\n		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;\n	#endif\n	#if DEPTH_PACKING == 3200\n		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );\n	#elif DEPTH_PACKING == 3201\n		gl_FragColor = packDepthToRGBA( fragCoordZ );\n	#elif DEPTH_PACKING == 3202\n		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );\n	#elif DEPTH_PACKING == 3203\n		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );\n	#endif\n}",
	distance_vert: "#define DISTANCE\nvarying vec3 vWorldPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <batching_vertex>\n	#include <skinbase_vertex>\n	#include <morphinstance_vertex>\n	#ifdef USE_DISPLACEMENTMAP\n		#include <beginnormal_vertex>\n		#include <morphnormal_vertex>\n		#include <skinnormal_vertex>\n	#endif\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <worldpos_vertex>\n	#include <clipping_planes_vertex>\n	vWorldPosition = worldPosition.xyz;\n}",
	distance_frag: "#define DISTANCE\nuniform vec3 referencePosition;\nuniform float nearDistance;\nuniform float farDistance;\nvarying vec3 vWorldPosition;\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( 1.0 );\n	#include <clipping_planes_fragment>\n	#include <map_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	float dist = length( vWorldPosition - referencePosition );\n	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );\n	dist = saturate( dist );\n	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );\n}",
	equirect_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n	vWorldDirection = transformDirection( position, modelMatrix );\n	#include <begin_vertex>\n	#include <project_vertex>\n}",
	equirect_frag: "uniform sampler2D tEquirect;\nvarying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n	vec3 direction = normalize( vWorldDirection );\n	vec2 sampleUV = equirectUv( direction );\n	gl_FragColor = texture2D( tEquirect, sampleUV );\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n}",
	linedashed_vert: "uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;\n#include <common>\n#include <uv_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	vLineDistance = scale * lineDistance;\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphinstance_vertex>\n	#include <morphcolor_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <fog_vertex>\n}",
	linedashed_frag: "uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	if ( mod( vLineDistance, totalSize ) > dashSize ) {\n		discard;\n	}\n	vec3 outgoingLight = vec3( 0.0 );\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	outgoingLight = diffuseColor.rgb;\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n}",
	meshbasic_vert: "#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphinstance_vertex>\n	#include <morphcolor_vertex>\n	#include <batching_vertex>\n	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )\n		#include <beginnormal_vertex>\n		#include <morphnormal_vertex>\n		#include <skinbase_vertex>\n		#include <skinnormal_vertex>\n		#include <defaultnormal_vertex>\n	#endif\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <worldpos_vertex>\n	#include <envmap_vertex>\n	#include <fog_vertex>\n}",
	meshbasic_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n#endif\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <specularmap_fragment>\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	#ifdef USE_LIGHTMAP\n		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );\n		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;\n	#else\n		reflectedLight.indirectDiffuse += vec3( 1.0 );\n	#endif\n	#include <aomap_fragment>\n	reflectedLight.indirectDiffuse *= diffuseColor.rgb;\n	vec3 outgoingLight = reflectedLight.indirectDiffuse;\n	#include <envmap_fragment>\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}",
	meshlambert_vert: "#define LAMBERT\nvarying vec3 vViewPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphinstance_vertex>\n	#include <morphcolor_vertex>\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <envmap_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}",
	meshlambert_frag: "#define LAMBERT\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_lambert_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <specularmap_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	#include <emissivemap_fragment>\n	#include <lights_lambert_fragment>\n	#include <lights_fragment_begin>\n	#include <lights_fragment_maps>\n	#include <lights_fragment_end>\n	#include <aomap_fragment>\n	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n	#include <envmap_fragment>\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}",
	meshmatcap_vert: "#define MATCAP\nvarying vec3 vViewPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <color_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphinstance_vertex>\n	#include <morphcolor_vertex>\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <fog_vertex>\n	vViewPosition = - mvPosition.xyz;\n}",
	meshmatcap_frag: "#define MATCAP\nuniform vec3 diffuse;\nuniform float opacity;\nuniform sampler2D matcap;\nvarying vec3 vViewPosition;\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <fog_pars_fragment>\n#include <normal_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	vec3 viewDir = normalize( vViewPosition );\n	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );\n	vec3 y = cross( viewDir, x );\n	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;\n	#ifdef USE_MATCAP\n		vec4 matcapColor = texture2D( matcap, uv );\n	#else\n		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );\n	#endif\n	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}",
	meshnormal_vert: "#define NORMAL\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )\n	varying vec3 vViewPosition;\n#endif\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphinstance_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )\n	vViewPosition = - mvPosition.xyz;\n#endif\n}",
	meshnormal_frag: "#define NORMAL\nuniform float opacity;\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )\n	varying vec3 vViewPosition;\n#endif\n#include <uv_pars_fragment>\n#include <normal_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );\n	#include <clipping_planes_fragment>\n	#include <logdepthbuf_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );\n	#ifdef OPAQUE\n		gl_FragColor.a = 1.0;\n	#endif\n}",
	meshphong_vert: "#define PHONG\nvarying vec3 vViewPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphcolor_vertex>\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphinstance_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <envmap_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}",
	meshphong_frag: "#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <specularmap_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	#include <emissivemap_fragment>\n	#include <lights_phong_fragment>\n	#include <lights_fragment_begin>\n	#include <lights_fragment_maps>\n	#include <lights_fragment_end>\n	#include <aomap_fragment>\n	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n	#include <envmap_fragment>\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}",
	meshphysical_vert: "#define STANDARD\nvarying vec3 vViewPosition;\n#ifdef USE_TRANSMISSION\n	varying vec3 vWorldPosition;\n#endif\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphinstance_vertex>\n	#include <morphcolor_vertex>\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n#ifdef USE_TRANSMISSION\n	vWorldPosition = worldPosition.xyz;\n#endif\n}",
	meshphysical_frag: "#define STANDARD\n#ifdef PHYSICAL\n	#define IOR\n	#define USE_SPECULAR\n#endif\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifdef IOR\n	uniform float ior;\n#endif\n#ifdef USE_SPECULAR\n	uniform float specularIntensity;\n	uniform vec3 specularColor;\n	#ifdef USE_SPECULAR_COLORMAP\n		uniform sampler2D specularColorMap;\n	#endif\n	#ifdef USE_SPECULAR_INTENSITYMAP\n		uniform sampler2D specularIntensityMap;\n	#endif\n#endif\n#ifdef USE_CLEARCOAT\n	uniform float clearcoat;\n	uniform float clearcoatRoughness;\n#endif\n#ifdef USE_DIFFUSE_ROUGHNESS\n	uniform float diffuseRoughness;\n	#ifdef USE_DIFFUSE_ROUGHNESSMAP\n		uniform sampler2D diffuseRoughnessMap;\n	#endif\n#endif\n#ifdef USE_DISPERSION\n	uniform float dispersion;\n#endif\n#ifdef USE_RETROREFLECTION\n	uniform float retroreflectivity;\n#endif\n#ifdef USE_IRIDESCENCE\n	uniform float iridescence;\n	uniform float iridescenceIOR;\n	uniform float iridescenceThicknessMinimum;\n	uniform float iridescenceThicknessMaximum;\n#endif\n#ifdef USE_SHEEN\n	uniform vec3 sheenColor;\n	uniform float sheenRoughness;\n	#ifdef USE_SHEEN_COLORMAP\n		uniform sampler2D sheenColorMap;\n	#endif\n	#ifdef USE_SHEEN_ROUGHNESSMAP\n		uniform sampler2D sheenRoughnessMap;\n	#endif\n#endif\n#ifdef USE_ANISOTROPY\n	uniform vec2 anisotropyVector;\n	#ifdef USE_ANISOTROPYMAP\n		uniform sampler2D anisotropyMap;\n	#endif\n#endif\nvarying vec3 vViewPosition;\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <iridescence_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_physical_pars_fragment>\n#include <transmission_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <clearcoat_pars_fragment>\n#include <iridescence_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <roughnessmap_fragment>\n	#include <metalnessmap_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	#include <clearcoat_normal_fragment_begin>\n	#include <clearcoat_normal_fragment_maps>\n	#include <emissivemap_fragment>\n	#include <lights_physical_fragment>\n	#include <lights_fragment_begin>\n	#include <lights_fragment_maps>\n	#include <lights_fragment_end>\n	#include <aomap_fragment>\n	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;\n	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;\n	#include <transmission_fragment>\n	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;\n	#ifdef USE_SHEEN\n \n		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;\n \n 	#endif\n	#ifdef USE_CLEARCOAT\n		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );\n		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );\n		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;\n	#endif\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}",
	meshtoon_vert: "#define TOON\nvarying vec3 vViewPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphinstance_vertex>\n	#include <morphcolor_vertex>\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}",
	meshtoon_frag: "#define TOON\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_toon_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	#include <emissivemap_fragment>\n	#include <lights_toon_fragment>\n	#include <lights_fragment_begin>\n	#include <lights_fragment_maps>\n	#include <lights_fragment_end>\n	#include <aomap_fragment>\n	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}",
	points_vert: "uniform float size;\nuniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n#ifdef USE_POINTS_UV\n	varying vec2 vUv;\n	uniform mat3 uvTransform;\n#endif\nvoid main() {\n	#ifdef USE_POINTS_UV\n		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n	#endif\n	#include <color_vertex>\n	#include <morphinstance_vertex>\n	#include <morphcolor_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <project_vertex>\n	gl_PointSize = size;\n	#ifdef USE_SIZEATTENUATION\n		bool isPerspective = isPerspectiveMatrix( projectionMatrix );\n		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );\n	#endif\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <worldpos_vertex>\n	#include <fog_vertex>\n}",
	points_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	vec3 outgoingLight = vec3( 0.0 );\n	#include <logdepthbuf_fragment>\n	#include <map_particle_fragment>\n	#include <color_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	outgoingLight = diffuseColor.rgb;\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n}",
	shadow_vert: "#include <common>\n#include <batching_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <shadowmap_pars_vertex>\nvoid main() {\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphinstance_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <worldpos_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}",
	shadow_frag: "uniform vec3 color;\nuniform float opacity;\n#include <common>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <logdepthbuf_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\nvoid main() {\n	#include <logdepthbuf_fragment>\n	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n}",
	sprite_vert: "uniform float rotation;\nuniform vec2 center;\n#include <common>\n#include <uv_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	vec4 mvPosition = modelViewMatrix[ 3 ];\n	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );\n	#ifndef USE_SIZEATTENUATION\n		bool isPerspective = isPerspectiveMatrix( projectionMatrix );\n		if ( isPerspective ) scale *= - mvPosition.z;\n	#endif\n	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;\n	vec2 rotatedPosition;\n	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\n	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\n	mvPosition.xy += rotatedPosition;\n	gl_Position = projectionMatrix * mvPosition;\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <fog_vertex>\n}",
	sprite_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	vec3 outgoingLight = vec3( 0.0 );\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	outgoingLight = diffuseColor.rgb;\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n}"
}, $ = {
	common: {
		diffuse: { value: /*@__PURE__*/ new mu(16777215) },
		opacity: { value: 1 },
		map: { value: null },
		mapTransform: { value: /*@__PURE__*/ new Q() },
		alphaMap: { value: null },
		alphaMapTransform: { value: /*@__PURE__*/ new Q() },
		alphaTest: { value: 0 }
	},
	specularmap: {
		specularMap: { value: null },
		specularMapTransform: { value: /*@__PURE__*/ new Q() }
	},
	envmap: {
		envMap: { value: null },
		envMapRotation: { value: /*@__PURE__*/ new Q() },
		reflectivity: { value: 1 },
		ior: { value: 1.5 },
		refractionRatio: { value: .98 },
		dfgLUT: { value: null }
	},
	aomap: {
		aoMap: { value: null },
		aoMapIntensity: { value: 1 },
		aoMapTransform: { value: /*@__PURE__*/ new Q() }
	},
	lightmap: {
		lightMap: { value: null },
		lightMapIntensity: { value: 1 },
		lightMapTransform: { value: /*@__PURE__*/ new Q() }
	},
	bumpmap: {
		bumpMap: { value: null },
		bumpMapTransform: { value: /*@__PURE__*/ new Q() },
		bumpScale: { value: 1 }
	},
	normalmap: {
		normalMap: { value: null },
		normalMapTransform: { value: /*@__PURE__*/ new Q() },
		normalScale: { value: /*@__PURE__*/ new X(1, 1) }
	},
	displacementmap: {
		displacementMap: { value: null },
		displacementMapTransform: { value: /*@__PURE__*/ new Q() },
		displacementScale: { value: 1 },
		displacementBias: { value: 0 }
	},
	emissivemap: {
		emissiveMap: { value: null },
		emissiveMapTransform: { value: /*@__PURE__*/ new Q() }
	},
	metalnessmap: {
		metalnessMap: { value: null },
		metalnessMapTransform: { value: /*@__PURE__*/ new Q() }
	},
	roughnessmap: {
		roughnessMap: { value: null },
		roughnessMapTransform: { value: /*@__PURE__*/ new Q() }
	},
	gradientmap: { gradientMap: { value: null } },
	fog: {
		fogDensity: { value: 25e-5 },
		fogNear: { value: 1 },
		fogFar: { value: 2e3 },
		fogColor: { value: /*@__PURE__*/ new mu(16777215) }
	},
	lights: {
		ambientLightColor: { value: [] },
		lightProbe: { value: [] },
		sunLights: {
			value: [],
			properties: {
				direction: {},
				color: {}
			}
		},
		sunLightShadows: {
			value: [],
			properties: {
				shadowIntensity: 1,
				shadowBias: {},
				shadowNormalBias: {},
				shadowRadius: {},
				shadowMapSize: {}
			}
		},
		sunShadowMatrix: { value: [] },
		sunShadowCascade: { value: [] },
		directionalLights: {
			value: [],
			properties: {
				direction: {},
				color: {}
			}
		},
		directionalLightShadows: {
			value: [],
			properties: {
				shadowIntensity: 1,
				shadowBias: {},
				shadowNormalBias: {},
				shadowRadius: {},
				shadowMapSize: {}
			}
		},
		directionalShadowMatrix: { value: [] },
		spotLights: {
			value: [],
			properties: {
				color: {},
				position: {},
				direction: {},
				distance: {},
				coneCos: {},
				penumbraCos: {},
				decay: {}
			}
		},
		spotLightShadows: {
			value: [],
			properties: {
				shadowIntensity: 1,
				shadowBias: {},
				shadowNormalBias: {},
				shadowRadius: {},
				shadowMapSize: {}
			}
		},
		spotLightMap: { value: [] },
		spotLightMatrix: { value: [] },
		pointLights: {
			value: [],
			properties: {
				color: {},
				position: {},
				decay: {},
				distance: {}
			}
		},
		pointLightShadows: {
			value: [],
			properties: {
				shadowIntensity: 1,
				shadowBias: {},
				shadowNormalBias: {},
				shadowRadius: {},
				shadowMapSize: {},
				shadowCameraNear: {},
				shadowCameraFar: {}
			}
		},
		pointShadowMatrix: { value: [] },
		hemisphereLights: {
			value: [],
			properties: {
				direction: {},
				skyColor: {},
				groundColor: {}
			}
		},
		rectAreaLights: {
			value: [],
			properties: {
				color: {},
				position: {},
				width: {},
				height: {}
			}
		},
		ltc_1: { value: null },
		ltc_2: { value: null },
		probesSH: { value: [] },
		probesMin: { value: [] },
		probesMax: { value: [] },
		probesResolution: { value: [] }
	},
	points: {
		diffuse: { value: /*@__PURE__*/ new mu(16777215) },
		opacity: { value: 1 },
		size: { value: 1 },
		scale: { value: 1 },
		map: { value: null },
		alphaMap: { value: null },
		alphaMapTransform: { value: /*@__PURE__*/ new Q() },
		alphaTest: { value: 0 },
		uvTransform: { value: /*@__PURE__*/ new Q() }
	},
	sprite: {
		diffuse: { value: /*@__PURE__*/ new mu(16777215) },
		opacity: { value: 1 },
		center: { value: /*@__PURE__*/ new X(.5, .5) },
		rotation: { value: 0 },
		map: { value: null },
		mapTransform: { value: /*@__PURE__*/ new Q() },
		alphaMap: { value: null },
		alphaMapTransform: { value: /*@__PURE__*/ new Q() },
		alphaTest: { value: 0 }
	}
}, Mp = {
	basic: {
		uniforms: /*@__PURE__*/ pf([
			$.common,
			$.specularmap,
			$.envmap,
			$.aomap,
			$.lightmap,
			$.fog
		]),
		vertexShader: jp.meshbasic_vert,
		fragmentShader: jp.meshbasic_frag
	},
	lambert: {
		uniforms: /*@__PURE__*/ pf([
			$.common,
			$.specularmap,
			$.envmap,
			$.aomap,
			$.lightmap,
			$.emissivemap,
			$.bumpmap,
			$.normalmap,
			$.displacementmap,
			$.fog,
			$.lights,
			{
				emissive: { value: /*@__PURE__*/ new mu(0) },
				envMapIntensity: { value: 1 }
			}
		]),
		vertexShader: jp.meshlambert_vert,
		fragmentShader: jp.meshlambert_frag
	},
	phong: {
		uniforms: /*@__PURE__*/ pf([
			$.common,
			$.specularmap,
			$.envmap,
			$.aomap,
			$.lightmap,
			$.emissivemap,
			$.bumpmap,
			$.normalmap,
			$.displacementmap,
			$.fog,
			$.lights,
			{
				emissive: { value: /*@__PURE__*/ new mu(0) },
				specular: { value: /*@__PURE__*/ new mu(1118481) },
				shininess: { value: 30 },
				envMapIntensity: { value: 1 }
			}
		]),
		vertexShader: jp.meshphong_vert,
		fragmentShader: jp.meshphong_frag
	},
	standard: {
		uniforms: /*@__PURE__*/ pf([
			$.common,
			$.envmap,
			$.aomap,
			$.lightmap,
			$.emissivemap,
			$.bumpmap,
			$.normalmap,
			$.displacementmap,
			$.roughnessmap,
			$.metalnessmap,
			$.fog,
			$.lights,
			{
				emissive: { value: /*@__PURE__*/ new mu(0) },
				roughness: { value: 1 },
				metalness: { value: 0 },
				envMapIntensity: { value: 1 }
			}
		]),
		vertexShader: jp.meshphysical_vert,
		fragmentShader: jp.meshphysical_frag
	},
	toon: {
		uniforms: /*@__PURE__*/ pf([
			$.common,
			$.aomap,
			$.lightmap,
			$.emissivemap,
			$.bumpmap,
			$.normalmap,
			$.displacementmap,
			$.gradientmap,
			$.fog,
			$.lights,
			{ emissive: { value: /*@__PURE__*/ new mu(0) } }
		]),
		vertexShader: jp.meshtoon_vert,
		fragmentShader: jp.meshtoon_frag
	},
	matcap: {
		uniforms: /*@__PURE__*/ pf([
			$.common,
			$.bumpmap,
			$.normalmap,
			$.displacementmap,
			$.fog,
			{ matcap: { value: null } }
		]),
		vertexShader: jp.meshmatcap_vert,
		fragmentShader: jp.meshmatcap_frag
	},
	points: {
		uniforms: /*@__PURE__*/ pf([$.points, $.fog]),
		vertexShader: jp.points_vert,
		fragmentShader: jp.points_frag
	},
	dashed: {
		uniforms: /*@__PURE__*/ pf([
			$.common,
			$.fog,
			{
				scale: { value: 1 },
				dashSize: { value: 1 },
				totalSize: { value: 2 }
			}
		]),
		vertexShader: jp.linedashed_vert,
		fragmentShader: jp.linedashed_frag
	},
	depth: {
		uniforms: /*@__PURE__*/ pf([$.common, $.displacementmap]),
		vertexShader: jp.depth_vert,
		fragmentShader: jp.depth_frag
	},
	normal: {
		uniforms: /*@__PURE__*/ pf([
			$.common,
			$.bumpmap,
			$.normalmap,
			$.displacementmap,
			{ opacity: { value: 1 } }
		]),
		vertexShader: jp.meshnormal_vert,
		fragmentShader: jp.meshnormal_frag
	},
	sprite: {
		uniforms: /*@__PURE__*/ pf([$.sprite, $.fog]),
		vertexShader: jp.sprite_vert,
		fragmentShader: jp.sprite_frag
	},
	background: {
		uniforms: {
			uvTransform: { value: /*@__PURE__*/ new Q() },
			t2D: { value: null },
			backgroundIntensity: { value: 1 }
		},
		vertexShader: jp.background_vert,
		fragmentShader: jp.background_frag
	},
	backgroundCube: {
		uniforms: {
			envMap: { value: null },
			backgroundBlurriness: { value: 0 },
			backgroundIntensity: { value: 1 },
			backgroundRotation: { value: /*@__PURE__*/ new Q() }
		},
		vertexShader: jp.backgroundCube_vert,
		fragmentShader: jp.backgroundCube_frag
	},
	cube: {
		uniforms: {
			tCube: { value: null },
			tFlip: { value: -1 },
			opacity: { value: 1 }
		},
		vertexShader: jp.cube_vert,
		fragmentShader: jp.cube_frag
	},
	equirect: {
		uniforms: { tEquirect: { value: null } },
		vertexShader: jp.equirect_vert,
		fragmentShader: jp.equirect_frag
	},
	distance: {
		uniforms: /*@__PURE__*/ pf([
			$.common,
			$.displacementmap,
			{
				referencePosition: { value: /*@__PURE__*/ new Z() },
				nearDistance: { value: 1 },
				farDistance: { value: 1e3 }
			}
		]),
		vertexShader: jp.distance_vert,
		fragmentShader: jp.distance_frag
	},
	shadow: {
		uniforms: /*@__PURE__*/ pf([
			$.lights,
			$.fog,
			{
				color: { value: /*@__PURE__*/ new mu(0) },
				opacity: { value: 1 }
			}
		]),
		vertexShader: jp.shadow_vert,
		fragmentShader: jp.shadow_frag
	}
};
Mp.physical = {
	uniforms: /*@__PURE__*/ pf([Mp.standard.uniforms, {
		clearcoat: { value: 0 },
		clearcoatMap: { value: null },
		clearcoatMapTransform: { value: /*@__PURE__*/ new Q() },
		clearcoatNormalMap: { value: null },
		clearcoatNormalMapTransform: { value: /*@__PURE__*/ new Q() },
		clearcoatNormalScale: { value: /*@__PURE__*/ new X(1, 1) },
		clearcoatRoughness: { value: 0 },
		clearcoatRoughnessMap: { value: null },
		clearcoatRoughnessMapTransform: { value: /*@__PURE__*/ new Q() },
		diffuseRoughness: { value: 0 },
		diffuseRoughnessMap: { value: null },
		diffuseRoughnessMapTransform: { value: /*@__PURE__*/ new Q() },
		dispersion: { value: 0 },
		retroreflectivity: { value: 0 },
		iridescence: { value: 0 },
		iridescenceMap: { value: null },
		iridescenceMapTransform: { value: /*@__PURE__*/ new Q() },
		iridescenceIOR: { value: 1.3 },
		iridescenceThicknessMinimum: { value: 100 },
		iridescenceThicknessMaximum: { value: 400 },
		iridescenceThicknessMap: { value: null },
		iridescenceThicknessMapTransform: { value: /*@__PURE__*/ new Q() },
		sheen: { value: 0 },
		sheenColor: { value: /*@__PURE__*/ new mu(0) },
		sheenColorMap: { value: null },
		sheenColorMapTransform: { value: /*@__PURE__*/ new Q() },
		sheenRoughness: { value: 1 },
		sheenRoughnessMap: { value: null },
		sheenRoughnessMapTransform: { value: /*@__PURE__*/ new Q() },
		transmission: { value: 0 },
		transmissionMap: { value: null },
		transmissionMapTransform: { value: /*@__PURE__*/ new Q() },
		transmissionSamplerSize: { value: /*@__PURE__*/ new X() },
		transmissionSamplerMap: { value: null },
		thickness: { value: 0 },
		thicknessMap: { value: null },
		thicknessMapTransform: { value: /*@__PURE__*/ new Q() },
		attenuationDistance: { value: 0 },
		attenuationColor: { value: /*@__PURE__*/ new mu(0) },
		specularColor: { value: /*@__PURE__*/ new mu(1, 1, 1) },
		specularColorMap: { value: null },
		specularColorMapTransform: { value: /*@__PURE__*/ new Q() },
		specularIntensity: { value: 1 },
		specularIntensityMap: { value: null },
		specularIntensityMapTransform: { value: /*@__PURE__*/ new Q() },
		anisotropyVector: { value: /*@__PURE__*/ new X() },
		anisotropyMap: { value: null },
		anisotropyMapTransform: { value: /*@__PURE__*/ new Q() }
	}]),
	vertexShader: jp.meshphysical_vert,
	fragmentShader: jp.meshphysical_frag
};
var Np = {
	r: 0,
	b: 0,
	g: 0
}, Pp = /*@__PURE__*/ new Nl(), Fp = /*@__PURE__*/ new Q();
Fp.set(-1, 0, 0, 0, 1, 0, 0, 0, 1);
function Ip(e, t, n, r, i, a) {
	let o = new mu(0), s = i === !0 ? 0 : 1, c, l, u = null, d = 0, f = null;
	function p(e) {
		let n = e.isScene === !0 ? e.background : null;
		if (n && n.isTexture) {
			let r = e.backgroundBlurriness > 0;
			n = t.get(n, r);
		}
		return n;
	}
	function m(t) {
		let r = !1, i = p(t);
		i === null ? g(o, s) : i && i.isColor && (g(i, 1), r = !0);
		let c = e.xr.getEnvironmentBlendMode();
		c === "additive" ? n.buffers.color.setClear(0, 0, 0, 1, a) : c === "alpha-blend" && n.buffers.color.setClear(0, 0, 0, 0, a), (e.autoClear || r) && (n.buffers.depth.setTest(!0), n.buffers.depth.setMask(!0), n.buffers.color.setMask(!0), e.clear(e.autoClearColor, e.autoClearDepth, e.autoClearStencil));
	}
	function h(t, n) {
		let i = p(n);
		i && i.isCubeTexture ? (l === void 0 && (l = new Pd(new cf(1, 1, 1), new bf({
			name: "BackgroundCubeMaterial",
			uniforms: ff(Mp.backgroundCube.uniforms),
			vertexShader: Mp.backgroundCube.vertexShader,
			fragmentShader: Mp.backgroundCube.fragmentShader,
			side: 1,
			depthTest: !1,
			depthWrite: !1,
			fog: !1,
			allowOverride: !1
		})), l.geometry.deleteAttribute("normal"), l.geometry.deleteAttribute("uv"), l.onBeforeRender = function(e, t, n) {
			this.matrixWorld.copyPosition(n.matrixWorld);
		}, Object.defineProperty(l.material, "envMap", { get: function() {
			return this.uniforms.envMap.value;
		} }), r.update(l)), l.material.uniforms.envMap.value = i, l.material.uniforms.backgroundBlurriness.value = n.backgroundBlurriness, l.material.uniforms.backgroundIntensity.value = n.backgroundIntensity, l.material.uniforms.backgroundRotation.value.setFromMatrix4(Pp.makeRotationFromEuler(n.backgroundRotation)).transpose(), i.isRenderTargetTexture === !1 && l.material.uniforms.backgroundRotation.value.premultiply(Fp), l.material.toneMapped = _l.getTransfer(i.colorSpace) !== xc, (u !== i || d !== i.version || f !== e.toneMapping) && (l.material.needsUpdate = !0, u = i, d = i.version, f = e.toneMapping), l.layers.enableAll(), t.unshift(l, l.geometry, l.material, 0, 0, null)) : i && i.isTexture && (c === void 0 && (c = new Pd(new uf(2, 2), new bf({
			name: "BackgroundMaterial",
			uniforms: ff(Mp.background.uniforms),
			vertexShader: Mp.background.vertexShader,
			fragmentShader: Mp.background.fragmentShader,
			side: 0,
			depthTest: !1,
			depthWrite: !1,
			fog: !1,
			allowOverride: !1
		})), c.geometry.deleteAttribute("normal"), Object.defineProperty(c.material, "map", { get: function() {
			return this.uniforms.t2D.value;
		} }), r.update(c)), c.material.uniforms.t2D.value = i, c.material.uniforms.backgroundIntensity.value = n.backgroundIntensity, c.material.toneMapped = _l.getTransfer(i.colorSpace) !== xc, i.matrixAutoUpdate === !0 && i.updateMatrix(), c.material.uniforms.uvTransform.value.copy(i.matrix), (u !== i || d !== i.version || f !== e.toneMapping) && (c.material.needsUpdate = !0, u = i, d = i.version, f = e.toneMapping), c.layers.enableAll(), t.unshift(c, c.geometry, c.material, 0, 0, null));
	}
	function g(t, r) {
		t.getRGB(Np, gf(e)), n.buffers.color.setClear(Np.r, Np.g, Np.b, r, a);
	}
	function _() {
		l !== void 0 && (l.geometry.dispose(), l.material.dispose(), l = void 0), c !== void 0 && (c.geometry.dispose(), c.material.dispose(), c = void 0);
	}
	return {
		getClearColor: function() {
			return o;
		},
		setClearColor: function(e, t = 1) {
			o.set(e), s = t, g(o, s);
		},
		getClearAlpha: function() {
			return s;
		},
		setClearAlpha: function(e) {
			s = e, g(o, s);
		},
		render: m,
		addToRenderList: h,
		dispose: _
	};
}
function Lp(e, t) {
	let n = e.getParameter(e.MAX_VERTEX_ATTRIBS), r = {}, i = f(null), a = i, o = !1;
	function s(n, r, i, s, c) {
		let u = !1, f = d(n, s, i, r);
		a !== f && (a = f, l(a.object)), u = p(n, s, i, c), u && m(n, s, i, c), c !== null && t.update(c, e.ELEMENT_ARRAY_BUFFER), (u || o) && (o = !1, b(n, r, i, s), c !== null && e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, t.get(c).buffer));
	}
	function c() {
		return e.createVertexArray();
	}
	function l(t) {
		return e.bindVertexArray(t);
	}
	function u(t) {
		return e.deleteVertexArray(t);
	}
	function d(e, t, n, i) {
		let a = i.wireframe === !0, o = r[t.id];
		o === void 0 && (o = {}, r[t.id] = o);
		let s = e.isInstancedMesh === !0 ? e.id : 0, l = o[s];
		l === void 0 && (l = {}, o[s] = l);
		let u = l[n.id];
		u === void 0 && (u = {}, l[n.id] = u);
		let d = u[a];
		return d === void 0 && (d = f(c()), u[a] = d), d;
	}
	function f(e) {
		let t = [], r = [], i = [];
		for (let e = 0; e < n; e++) t[e] = 0, r[e] = 0, i[e] = 0;
		return {
			geometry: null,
			program: null,
			wireframe: !1,
			newAttributes: t,
			enabledAttributes: r,
			attributeDivisors: i,
			object: e,
			attributes: {},
			index: null
		};
	}
	function p(e, t, n, r) {
		let i = a.attributes, o = t.attributes, s = 0, c = n.getAttributes();
		for (let t in c) if (c[t].location >= 0) {
			let n = i[t], r = o[t];
			if (r === void 0 && (t === "instanceMatrix" && e.instanceMatrix && (r = e.instanceMatrix), t === "instanceColor" && e.instanceColor && (r = e.instanceColor)), n === void 0 || n.attribute !== r || r && n.data !== r.data) return !0;
			s++;
		}
		return a.attributesNum !== s || a.index !== r;
	}
	function m(e, t, n, r) {
		let i = {}, o = t.attributes, s = 0, c = n.getAttributes();
		for (let t in c) if (c[t].location >= 0) {
			let n = o[t];
			n === void 0 && (t === "instanceMatrix" && e.instanceMatrix && (n = e.instanceMatrix), t === "instanceColor" && e.instanceColor && (n = e.instanceColor));
			let r = {};
			r.attribute = n, n && n.data && (r.data = n.data), i[t] = r, s++;
		}
		a.attributes = i, a.attributesNum = s, a.index = r;
	}
	function h() {
		let e = a.newAttributes;
		for (let t = 0, n = e.length; t < n; t++) e[t] = 0;
	}
	function g(e) {
		_(e, 0);
	}
	function _(t, n) {
		let r = a.newAttributes, i = a.enabledAttributes, o = a.attributeDivisors;
		r[t] = 1, i[t] === 0 && (e.enableVertexAttribArray(t), i[t] = 1), o[t] !== n && (e.vertexAttribDivisor(t, n), o[t] = n);
	}
	function v() {
		let t = a.newAttributes, n = a.enabledAttributes;
		for (let r = 0, i = n.length; r < i; r++) n[r] !== t[r] && (e.disableVertexAttribArray(r), n[r] = 0);
	}
	function y(t, n, r, i, a, o, s) {
		s === !0 ? e.vertexAttribIPointer(t, n, r, a, o) : e.vertexAttribPointer(t, n, r, i, a, o);
	}
	function b(n, r, i, a) {
		h();
		let o = a.attributes, s = i.getAttributes(), c = r.defaultAttributeValues;
		for (let r in s) {
			let i = s[r];
			if (i.location >= 0) {
				let s = o[r];
				if (s === void 0 && (r === "instanceMatrix" && n.instanceMatrix && (s = n.instanceMatrix), r === "instanceColor" && n.instanceColor && (s = n.instanceColor)), s !== void 0) {
					let r = s.normalized, o = s.itemSize, c = t.get(s);
					if (c === void 0) continue;
					let l = c.buffer, u = c.type, d = c.bytesPerElement, f = u === e.INT || u === e.UNSIGNED_INT || s.gpuType === 1013;
					if (s.isInterleavedBufferAttribute) {
						let t = s.data, c = t.isInterleavedBuffer === !0 ? t.stride : t.itemSize, p = s.offset;
						if (t.isInstancedInterleavedBuffer || t.isInstancedBufferAttribute) {
							for (let e = 0; e < i.locationSize; e++) _(i.location + e, t.meshPerAttribute);
							n.isInstancedMesh !== !0 && a._maxInstanceCount === void 0 && (a._maxInstanceCount = t.meshPerAttribute * t.count);
						} else for (let e = 0; e < i.locationSize; e++) g(i.location + e);
						e.bindBuffer(e.ARRAY_BUFFER, l);
						for (let e = 0; e < i.locationSize; e++) y(i.location + e, o / i.locationSize, u, r, c * d, (p + o / i.locationSize * e) * d, f);
					} else {
						if (s.isInstancedBufferAttribute) {
							for (let e = 0; e < i.locationSize; e++) _(i.location + e, s.meshPerAttribute);
							n.isInstancedMesh !== !0 && a._maxInstanceCount === void 0 && (a._maxInstanceCount = s.meshPerAttribute * s.count);
						} else for (let e = 0; e < i.locationSize; e++) g(i.location + e);
						e.bindBuffer(e.ARRAY_BUFFER, l);
						for (let e = 0; e < i.locationSize; e++) y(i.location + e, o / i.locationSize, u, r, o * d, o / i.locationSize * e * d, f);
					}
				} else if (c !== void 0) {
					let t = c[r];
					if (t !== void 0) switch (t.length) {
						case 2:
							e.vertexAttrib2fv(i.location, t);
							break;
						case 3:
							e.vertexAttrib3fv(i.location, t);
							break;
						case 4:
							e.vertexAttrib4fv(i.location, t);
							break;
						default: e.vertexAttrib1fv(i.location, t);
					}
				}
			}
		}
		v();
	}
	function x() {
		T();
		for (let e in r) {
			let t = r[e];
			for (let e in t) {
				let n = t[e];
				for (let e in n) {
					let t = n[e];
					for (let e in t) u(t[e].object), delete t[e];
					delete n[e];
				}
			}
			delete r[e];
		}
	}
	function S(e) {
		if (r[e.id] === void 0) return;
		let t = r[e.id];
		for (let e in t) {
			let n = t[e];
			for (let e in n) {
				let t = n[e];
				for (let e in t) u(t[e].object), delete t[e];
				delete n[e];
			}
		}
		delete r[e.id];
	}
	function C(e) {
		for (let t in r) {
			let n = r[t];
			for (let t in n) {
				let r = n[t];
				if (r[e.id] === void 0) continue;
				let i = r[e.id];
				for (let e in i) u(i[e].object), delete i[e];
				delete r[e.id];
			}
		}
	}
	function w(e) {
		for (let t in r) {
			let n = r[t], i = e.isInstancedMesh === !0 ? e.id : 0, a = n[i];
			if (a !== void 0) {
				for (let e in a) {
					let t = a[e];
					for (let e in t) u(t[e].object), delete t[e];
					delete a[e];
				}
				delete n[i], Object.keys(n).length === 0 && delete r[t];
			}
		}
	}
	function T() {
		E(), o = !0, a !== i && (a = i, l(a.object));
	}
	function E() {
		i.geometry = null, i.program = null, i.wireframe = !1;
	}
	return {
		setup: s,
		reset: T,
		resetDefaultState: E,
		dispose: x,
		releaseStatesOfGeometry: S,
		releaseStatesOfObject: w,
		releaseStatesOfProgram: C,
		initAttributes: h,
		enableAttribute: g,
		disableUnusedAttributes: v
	};
}
function Rp(e, t, n) {
	let r;
	function i(e) {
		r = e;
	}
	function a(t, i) {
		e.drawArrays(r, t, i), n.update(i, r, 1);
	}
	function o(t, i, a) {
		a !== 0 && (e.drawArraysInstanced(r, t, i, a), n.update(i, r, a));
	}
	function s(e, i, a) {
		if (a === 0) return;
		t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r, e, 0, i, 0, a);
		let o = 0;
		for (let e = 0; e < a; e++) o += i[e];
		n.update(o, r, 1);
	}
	this.setMode = i, this.render = a, this.renderInstances = o, this.renderMultiDraw = s;
}
function zp(e, t, n, r) {
	let i;
	function a() {
		if (i !== void 0) return i;
		if (t.has("EXT_texture_filter_anisotropic") === !0) {
			let n = t.get("EXT_texture_filter_anisotropic");
			i = e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
		} else i = 0;
		return i;
	}
	function o(t) {
		return t === 1023 || r.convert(t) === e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT);
	}
	function s(n) {
		let i = n === 1016 && (t.has("EXT_color_buffer_half_float") || t.has("EXT_color_buffer_float"));
		return !(n !== 1009 && n !== 1015 && !i && r.convert(n) !== e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE));
	}
	function c(t) {
		if (t === "highp") {
			if (e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.HIGH_FLOAT).precision > 0 && e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_FLOAT).precision > 0) return "highp";
			t = "mediump";
		}
		return t === "mediump" && e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.MEDIUM_FLOAT).precision > 0 && e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp";
	}
	let l = n.precision === void 0 ? "highp" : n.precision, u = c(l);
	u !== l && (J("WebGLRenderer:", l, "not supported, using", u, "instead."), l = u);
	let d = n.reversedDepthBuffer === !0 && t.has("EXT_clip_control"), f = n.logarithmicDepthBuffer === !0 && d === !1;
	n.reversedDepthBuffer === !0 && d === !1 && J("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."), n.logarithmicDepthBuffer === !0 && d === !0 && J("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");
	let p = e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS), m = e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS), h = e.getParameter(e.MAX_TEXTURE_SIZE), g = e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE), _ = e.getParameter(e.MAX_VERTEX_ATTRIBS), v = e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS), y = e.getParameter(e.MAX_VARYING_VECTORS), b = e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS), x = e.getParameter(e.MAX_SAMPLES), S = e.getParameter(e.SAMPLES);
	return {
		isWebGL2: !0,
		getMaxAnisotropy: a,
		getMaxPrecision: c,
		textureFormatReadable: o,
		textureTypeReadable: s,
		precision: l,
		logarithmicDepthBuffer: f,
		reversedDepthBuffer: d,
		maxTextures: p,
		maxVertexTextures: m,
		maxTextureSize: h,
		maxCubemapSize: g,
		maxAttributes: _,
		maxVertexUniforms: v,
		maxVaryings: y,
		maxFragmentUniforms: b,
		maxSamples: x,
		samples: S
	};
}
function Bp(e) {
	let t = this, n = null, r = 0, i = !1, a = !1, o = new md(), s = new Q(), c = {
		value: null,
		needsUpdate: !1
	};
	this.uniform = c, this.numPlanes = 0, this.numIntersection = 0, this.init = function(e, t) {
		let n = e.length !== 0 || t || r !== 0 || i;
		return i = t, r = e.length, n;
	}, this.beginShadows = function() {
		a = !0, u(null);
	}, this.endShadows = function() {
		a = !1;
	}, this.setGlobalState = function(e, t) {
		n = u(e, t, 0);
	}, this.setState = function(t, o, s) {
		let d = t.clippingPlanes, f = t.clipIntersection, p = t.clipShadows, m = e.get(t);
		if (!i || d === null || d.length === 0 || a && !p) a ? u(null) : l();
		else {
			let e = a ? 0 : r, t = e * 4, i = m.clippingState || null;
			c.value = i, i = u(d, o, t, s);
			for (let e = 0; e !== t; ++e) i[e] = n[e];
			m.clippingState = i, this.numIntersection = f ? this.numPlanes : 0, this.numPlanes += e;
		}
	};
	function l() {
		c.value !== n && (c.value = n, c.needsUpdate = r > 0), t.numPlanes = r, t.numIntersection = 0;
	}
	function u(e, n, r, i) {
		let a = e === null ? 0 : e.length, l = null;
		if (a !== 0) {
			if (l = c.value, i !== !0 || l === null) {
				let t = r + a * 4, i = n.matrixWorldInverse;
				s.getNormalMatrix(i), (l === null || l.length < t) && (l = new Float32Array(t));
				for (let t = 0, n = r; t !== a; ++t, n += 4) o.copy(e[t]).applyMatrix4(i, s), o.normal.toArray(l, n), l[n + 3] = o.constant;
			}
			c.value = l, c.needsUpdate = !0;
		}
		return t.numPlanes = a, t.numIntersection = 0, l;
	}
}
var Vp = class extends Al {
	constructor(e = 1, t = {}) {
		super(e, e, t), this.isWebGLCubeRenderTarget = !0;
		let n = {
			width: e,
			height: e,
			depth: 1
		}, r = [
			n,
			n,
			n,
			n,
			n,
			n
		];
		this.texture = new rf(r), this._setTextureOptions(t), this.texture.isRenderTargetTexture = !0;
	}
	fromEquirectangularTexture(e, t) {
		this.texture.type = t.type, this.texture.colorSpace = t.colorSpace, this.texture.generateMipmaps = t.generateMipmaps, this.texture.minFilter = t.minFilter, this.texture.magFilter = t.magFilter;
		let n = {
			uniforms: { tEquirect: { value: null } },
			vertexShader: "\n\n				varying vec3 vWorldDirection;\n\n				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\n					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n\n				}\n\n				void main() {\n\n					vWorldDirection = transformDirection( position, modelMatrix );\n\n					#include <begin_vertex>\n					#include <project_vertex>\n\n				}\n			",
			fragmentShader: "\n\n				uniform sampler2D tEquirect;\n\n				varying vec3 vWorldDirection;\n\n				#include <common>\n\n				void main() {\n\n					vec3 direction = normalize( vWorldDirection );\n\n					vec2 sampleUV = equirectUv( direction );\n\n					gl_FragColor = texture2D( tEquirect, sampleUV );\n\n				}\n			"
		}, r = new cf(5, 5, 5), i = new bf({
			name: "CubemapFromEquirect",
			uniforms: ff(n.uniforms),
			vertexShader: n.vertexShader,
			fragmentShader: n.fragmentShader,
			side: 1,
			blending: 0
		});
		i.uniforms.tEquirect.value = t;
		let a = new Pd(r, i), o = t.minFilter;
		return t.minFilter === 1008 && (t.minFilter = ns), new up(1, 10, this).update(e, a), t.minFilter = o, a.geometry.dispose(), a.material.dispose(), this;
	}
	clear(e, t = !0, n = !0, r = !0) {
		let i = e.getRenderTarget();
		for (let i = 0; i < 6; i++) e.setRenderTarget(this, i), e.clear(t, n, r);
		e.setRenderTarget(i);
	}
}, Hp = 256, Up = 3, Wp = 20, Gp = 256, Kp = 16, qp = 3, Jp = /*@__PURE__*/ new Z(), Yp = /*@__PURE__*/ new mu(), Xp = class e {
	constructor(e) {
		this._renderer = e, this._cubeSize = 0, this._sourceTarget = null, this._cubeCamera = new up(1, 10, null), this._boxMesh = new Pd(new cf(5, 5, 5), null), this._cubemapMaterial = null, this._equirectMaterial = null, this._blurMaterial = null, this._ggxMaterial = null, this._integrationMaterial = null;
	}
	fromScene(e, t = 0, n = .1, r = 100, i = {}) {
		let { size: a = 256, position: o = Jp } = i, s = this._renderer;
		this._setSize(a);
		let c = this._allocateTarget(), l = this._getSourceTarget(!0);
		t > 0 && (l.texture.mipmapsAutoUpdate = !1);
		let u = s.autoClear, d = s.autoClearColor, f = s.autoClearDepth, p = s.autoClearStencil, m = e.background;
		s.autoClear = !0, s.autoClearColor = !0, s.autoClearDepth = !0, s.autoClearStencil = !0, m === null && (e.background = s.getClearColor(Yp));
		let h = new up(n, r, l);
		return h.position.copy(o), h.update(s, e), s.autoClear = u, s.autoClearColor = d, s.autoClearDepth = f, s.autoClearStencil = p, e.background = m, t > 0 && (l.texture.mipmapsAutoUpdate = !0, this._blur(c, t)), this._applyPMREM(c), c;
	}
	fromEquirectangular(e, t = null) {
		return this._fromTexture(e, t);
	}
	fromCubemap(e, t = null) {
		return this._fromTexture(e, t);
	}
	compileCubemapShader() {
		this._cubemapMaterial === null && (this._cubemapMaterial = rm(), this._compileMaterial(this._cubemapMaterial));
	}
	compileEquirectangularShader() {
		this._equirectMaterial === null && (this._equirectMaterial = nm(), this._compileMaterial(this._equirectMaterial));
	}
	dispose() {
		this._sourceTarget !== null && this._sourceTarget.dispose(), this._cubemapMaterial !== null && this._cubemapMaterial.dispose(), this._equirectMaterial !== null && this._equirectMaterial.dispose(), this._blurMaterial !== null && this._blurMaterial.dispose(), this._ggxMaterial !== null && this._ggxMaterial.dispose(), this._integrationMaterial !== null && this._integrationMaterial.dispose(), this._boxMesh.geometry.dispose();
	}
	static lodToRoughness(e, t) {
		return t > 0 ? 1 - Math.sqrt(1 - e / t) : 0;
	}
	_setSize(e) {
		this._cubeSize = Math.max(Hp, il(e));
	}
	_fromTexture(e, t) {
		e.mapping === 301 || e.mapping === 302 ? this._setSize(e.image.length === 0 ? Hp : e.image[0].width || e.image[0].image.width) : this._setSize(e.image.width / 4);
		let n = t || this._allocateTarget();
		return this._textureToCubemap(e), this._applyPMREM(n), n;
	}
	_allocateTarget() {
		let e = this._cubeSize, t = Zp(e, !1, !1), n = Math.log2(e) - Up;
		for (let r = 0; r <= n; r++) t.texture.mipmaps.push({
			width: e >> r,
			height: e >> r
		});
		return t.texture.name = "PMREM", t.texture.isPMREMTexture = !0, t;
	}
	_getSourceTarget(e = !1) {
		let t = this._cubeSize, n = this._sourceTarget;
		return (n === null || n.width !== t || e && n.depthBuffer === !1) && (n !== null && n.dispose(), this._sourceTarget = Zp(t, !0, e)), this._sourceTarget;
	}
	_compileMaterial(e) {
		this._boxMesh.material = e, this._renderer.compile(this._boxMesh, this._cubeCamera.children[0]);
	}
	_renderCube(e, t, n) {
		let r = this._boxMesh, i = this._cubeCamera;
		r.material = n, i.renderTarget = e, i.activeMipmapLevel = t;
		let a = e.width >> t;
		e.viewport.set(0, 0, a, a), i.update(this._renderer, r), e.viewport.set(0, 0, e.width, e.height);
	}
	_textureToCubemap(e) {
		let t;
		e.mapping === 301 || e.mapping === 302 ? (this._cubemapMaterial === null && (this._cubemapMaterial = rm()), t = this._cubemapMaterial, t.uniforms.flipEnvMap.value = e.isRenderTargetTexture === !1 ? -1 : 1) : (this._equirectMaterial === null && (this._equirectMaterial = nm()), t = this._equirectMaterial), t.uniforms.envMap.value = e, this._renderCube(this._getSourceTarget(), 0, t);
	}
	_applyPMREM(t) {
		this._ggxMaterial === null && (this._ggxMaterial = $p(), this._integrationMaterial = em());
		let n = this._cubeSize, r = t.texture.mipmaps.length - 1, i = this._ggxMaterial.uniforms;
		i.envMap.value = this._sourceTarget.texture;
		let a = this._integrationMaterial.uniforms;
		a.envMap.value = this._sourceTarget.texture, a.sourceLod.value = Math.log2(n / Kp);
		for (let o = 0; o <= r; o++) {
			let s = e.lodToRoughness(o, r);
			if (o > r - qp) a.roughness.value = s, this._renderCube(t, o, this._integrationMaterial);
			else {
				let e = s > 0 ? Math.log2(n) + .5 * Math.log2(6 / (Gp * s ** 4)) + .5 : 0;
				i.roughness.value = s, i.lodBias.value = e, this._renderCube(t, o, this._ggxMaterial);
			}
		}
	}
	_blur(e, t) {
		this._blurMaterial === null && (this._blurMaterial = tm());
		let n = this._blurMaterial, r = n.uniforms, i = this._sourceTarget;
		r.sigma.value = Math.min(t, Math.PI) / Math.SQRT2, r.envMap.value = i.texture, this._renderCube(e, 0, n), r.envMap.value = e.texture, this._renderCube(i, 0, n);
	}
};
function Zp(e, t, n) {
	return new Vp(e, {
		minFilter: is,
		generateMipmaps: t,
		type: fs,
		colorSpace: yc,
		depthBuffer: n
	});
}
function Qp(e, t, n) {
	return new bf({
		name: e,
		uniforms: t,
		vertexShader: jp.cube_vert,
		fragmentShader: n,
		side: 1,
		blending: 0,
		depthTest: !1,
		depthWrite: !1
	});
}
function $p() {
	return Qp("PMREMGGXConvolution", {
		envMap: { value: null },
		roughness: { value: 0 },
		lodBias: { value: 0 }
	}, `

		#define GGX_SAMPLES ${Gp}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`);
}
function em() {
	return Qp("PMREMGGXIntegration", {
		envMap: { value: null },
		roughness: { value: 0 },
		sourceLod: { value: 0 },
		sourceSize: { value: Kp }
	}, "\n\n		varying vec3 vWorldDirection;\n\n		uniform samplerCube envMap;\n		uniform float roughness;\n		uniform float sourceLod;\n		uniform int sourceSize;\n\n		void main() {\n\n			vec3 N = normalize( vWorldDirection );\n\n			float alpha = roughness * roughness;\n			float alpha2 = alpha * alpha;\n\n			float texelSize = 2.0 / float( sourceSize );\n\n			vec3 prefilteredColor = vec3( 0.0 );\n			float totalWeight = 0.0;\n\n			// Pair opposite texels: only the one in N's hemisphere contributes.\n			for ( int face = 0; face < 3; face ++ ) {\n\n				for ( int y = 0; y < sourceSize; y ++ ) {\n\n					for ( int x = 0; x < sourceSize; x ++ ) {\n\n						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;\n						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );\n\n						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );\n						float NdotL = dot( N, texelDirection );\n						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;\n						NdotL = abs( NdotL ) * invDistance;\n\n						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors\n						// in the GGX distribution and texel solid angle cancel when normalized.\n						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;\n						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );\n\n						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;\n						totalWeight += weight;\n\n					}\n\n				}\n\n			}\n\n			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );\n\n		}\n	");
}
function tm() {
	return Qp("PMREMSphericalGaussianBlur", {
		envMap: { value: null },
		sigma: { value: 0 }
	}, `

		#define SAMPLES ${Wp}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`);
}
function nm() {
	return Qp("PMREMEquirectangularToCubemap", { envMap: { value: null } }, "\n\n		varying vec3 vWorldDirection;\n\n		uniform sampler2D envMap;\n\n		#include <common>\n\n		void main() {\n\n			// Average four subpixel samples to preserve small, bright features.\n			vec3 direction = normalize( vWorldDirection );\n			vec3 dx = dFdx( direction ) * 0.25;\n			vec3 dy = dFdy( direction ) * 0.25;\n\n			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;\n			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;\n			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;\n			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;\n			gl_FragColor = vec4( color * 0.25, 1.0 );\n\n		}\n	");
}
function rm() {
	return Qp("PMREMCubemapToCubemap", {
		envMap: { value: null },
		flipEnvMap: { value: -1 }
	}, "\n\n		varying vec3 vWorldDirection;\n\n		uniform samplerCube envMap;\n		uniform float flipEnvMap;\n\n		void main() {\n\n			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );\n\n		}\n	");
}
function im(e) {
	let t = /* @__PURE__ */ new WeakMap(), n = /* @__PURE__ */ new WeakMap(), r = null;
	function i(e, t = !1) {
		return e == null ? null : t ? o(e) : a(e);
	}
	function a(n) {
		if (n && n.isTexture) {
			let r = n.mapping;
			if (r === 303 || r === 304) {
				if (t.has(n)) {
					let e = t.get(n).texture;
					return s(e, n.mapping);
				}
				{
					let r = n.image;
					if (r && r.height > 0) {
						let i = new Vp(r.height);
						return i.fromEquirectangularTexture(e, n), t.set(n, i), n.addEventListener("dispose", l), s(i.texture, n.mapping);
					}
					return null;
				}
			}
		}
		return n;
	}
	function o(t) {
		if (t && t.isTexture && t.isPMREMTexture !== !0) {
			let i = t.mapping, a = i === 303 || i === 304, o = i === 301 || i === 302;
			if (a || o) {
				let i = n.get(t), s = i === void 0 ? 0 : i.texture.pmremVersion;
				if (t.isRenderTargetTexture && t.pmremVersion !== s) return r === null && (r = new Xp(e)), i = a ? r.fromEquirectangular(t, i) : r.fromCubemap(t, i), i.texture.pmremVersion = t.pmremVersion, n.set(t, i), i.texture;
				if (i !== void 0) return i.texture;
				{
					let s = t.image;
					return a && s && s.height > 0 || o && s && c(s) ? (r === null && (r = new Xp(e)), i = a ? r.fromEquirectangular(t) : r.fromCubemap(t), i.texture.pmremVersion = t.pmremVersion, n.set(t, i), t.addEventListener("dispose", u), i.texture) : null;
				}
			}
		}
		return t;
	}
	function s(e, t) {
		return t === 303 ? e.mapping = 301 : t === 304 && (e.mapping = 302), e;
	}
	function c(e) {
		let t = 0;
		for (let n = 0; n < 6; n++) e[n] !== void 0 && t++;
		return t === 6;
	}
	function l(e) {
		let n = e.target;
		n.removeEventListener("dispose", l);
		let r = t.get(n);
		r !== void 0 && (t.delete(n), r.dispose());
	}
	function u(e) {
		let t = e.target;
		t.removeEventListener("dispose", u);
		let r = n.get(t);
		r !== void 0 && (n.delete(t), r.dispose());
	}
	function d() {
		t = /* @__PURE__ */ new WeakMap(), n = /* @__PURE__ */ new WeakMap(), r !== null && (r.dispose(), r = null);
	}
	return {
		get: i,
		dispose: d
	};
}
function am(e) {
	let t = {};
	function n(n) {
		if (t[n] !== void 0) return t[n];
		let r = e.getExtension(n);
		return t[n] = r, r;
	}
	return {
		has: function(e) {
			return n(e) !== null;
		},
		init: function() {
			n("EXT_color_buffer_float"), n("WEBGL_clip_cull_distance"), n("OES_texture_float_linear"), n("EXT_color_buffer_half_float"), n("WEBGL_multisampled_render_to_texture"), n("WEBGL_render_shared_exponent");
		},
		get: function(e) {
			let t = n(e);
			return t === null && Mc("WebGLRenderer: " + e + " extension not supported."), t;
		}
	};
}
function om(e, t, n, r) {
	let i = {}, a = /* @__PURE__ */ new WeakMap(), o = new FinalizationRegistry((e) => delete i[e]);
	function s(e) {
		c(e.target);
	}
	function c(e) {
		e.index !== null && t.remove(e.index);
		for (let n in e.attributes) t.remove(e.attributes[n]);
		e.removeEventListener("dispose", s), delete i[e.id], o.unregister(e);
		let c = a.get(e);
		c && (t.remove(c), a.delete(e)), r.releaseStatesOfGeometry(e), e.isInstancedBufferGeometry === !0 && delete e._maxInstanceCount, n.memory.geometries--;
	}
	function l(e, t) {
		return i[t.id] === void 0 && (t.addEventListener("dispose", s), i[t.id] = new WeakRef(t), o.register(t, t.id, t), n.memory.geometries++), t;
	}
	function u(n) {
		let r = n.attributes;
		for (let n in r) t.update(r[n], e.ARRAY_BUFFER);
	}
	function d(e) {
		let n = e.index, r = e.attributes.position, i = 0;
		if (r === void 0) return;
		let o = n === null ? r.array.length / 3 - 1 : n.array.length, s = new (r.count >= 65535 ? Zu : Xu)(Math.ceil(o / 3) * 6, 1), c = s.array;
		if (n !== null) {
			let e = n.array;
			i = n.version;
			for (let t = 0, n = 0; t < o; t += 3) {
				let r = e[t + 0], i = e[t + 1], a = e[t + 2];
				c[n++] = r, c[n++] = i, c[n++] = i, c[n++] = a, c[n++] = a, c[n++] = r;
			}
		} else {
			i = r.version;
			for (let e = 0, t = 0; e < o; e += 3) {
				let n = e + 0, r = e + 1, i = e + 2;
				c[t++] = n, c[t++] = r, c[t++] = r, c[t++] = i, c[t++] = i, c[t++] = n;
			}
		}
		s.version = i;
		let l = a.get(e);
		l && t.remove(l), a.set(e, s);
	}
	function f(e) {
		let t = a.get(e);
		if (t) {
			let n = e.index;
			n !== null && t.version < n.version && d(e);
		} else d(e);
		return a.get(e);
	}
	function p() {
		for (let e in i) {
			let t = i[e].deref();
			t !== void 0 && c(t);
		}
	}
	return {
		get: l,
		update: u,
		getWireframeAttribute: f,
		dispose: p
	};
}
function sm(e, t, n) {
	let r;
	function i(e) {
		r = e;
	}
	let a, o;
	function s(e) {
		a = e.type, o = e.bytesPerElement;
	}
	function c(t, i) {
		e.drawElements(r, i, a, t * o), n.update(i, r, 1);
	}
	function l(t, i, s) {
		s !== 0 && (e.drawElementsInstanced(r, i, a, t * o, s), n.update(i, r, s));
	}
	function u(e, i, o) {
		if (o === 0) return;
		t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r, i, 0, a, e, 0, o);
		let s = 0;
		for (let e = 0; e < o; e++) s += i[e];
		n.update(s, r, 1);
	}
	this.setMode = i, this.setIndex = s, this.render = c, this.renderInstances = l, this.renderMultiDraw = u;
}
function cm(e) {
	let t = {
		geometries: 0,
		textures: 0
	}, n = {
		frame: 0,
		calls: 0,
		triangles: 0,
		points: 0,
		lines: 0
	};
	function r(t, r, i) {
		switch (n.calls++, r) {
			case e.TRIANGLES:
				n.triangles += t / 3 * i;
				break;
			case e.LINES:
				n.lines += t / 2 * i;
				break;
			case e.LINE_STRIP:
				n.lines += i * (t - 1);
				break;
			case e.LINE_LOOP:
				n.lines += i * t;
				break;
			case e.POINTS:
				n.points += i * t;
				break;
			default: Y("WebGLInfo: Unknown draw mode:", r);
		}
	}
	function i() {
		n.calls = 0, n.triangles = 0, n.points = 0, n.lines = 0;
	}
	return {
		memory: t,
		render: n,
		programs: null,
		autoReset: !0,
		reset: i,
		update: r
	};
}
function lm(e, t, n) {
	let r = /* @__PURE__ */ new WeakMap(), i = new Ol();
	function a(a, o, s) {
		let c = a.morphTargetInfluences, l = o.morphAttributes.position || o.morphAttributes.normal || o.morphAttributes.color, u = l === void 0 ? 0 : l.length, d = r.get(o);
		if (d === void 0 || d.count !== u) {
			d !== void 0 && d.texture.dispose();
			let e = o.morphAttributes.position !== void 0, n = o.morphAttributes.normal !== void 0, a = o.morphAttributes.color !== void 0, s = o.morphAttributes.position || [], c = o.morphAttributes.normal || [], l = o.morphAttributes.color || [], f = 0;
			e === !0 && (f = 1), n === !0 && (f = 2), a === !0 && (f = 3);
			let p = o.attributes.position.count * f, m = 1;
			p > t.maxTextureSize && (m = Math.ceil(p / t.maxTextureSize), p = t.maxTextureSize);
			let h = new Float32Array(p * m * 4 * u), g = new jl(h, p, m, u);
			g.type = ds, g.needsUpdate = !0;
			let _ = f * 4;
			for (let t = 0; t < u; t++) {
				let r = s[t], o = c[t], u = l[t], d = p * m * 4 * t;
				for (let t = 0; t < r.count; t++) {
					let s = t * _;
					e === !0 && (i.fromBufferAttribute(r, t), h[d + s + 0] = i.x, h[d + s + 1] = i.y, h[d + s + 2] = i.z, h[d + s + 3] = 0), n === !0 && (i.fromBufferAttribute(o, t), h[d + s + 4] = i.x, h[d + s + 5] = i.y, h[d + s + 6] = i.z, h[d + s + 7] = 0), a === !0 && (i.fromBufferAttribute(u, t), h[d + s + 8] = i.x, h[d + s + 9] = i.y, h[d + s + 10] = i.z, h[d + s + 11] = u.itemSize === 4 ? i.w : 1);
				}
			}
			d = {
				count: u,
				texture: g,
				size: new X(p, m)
			}, r.set(o, d);
			function v() {
				g.dispose(), r.delete(o), o.removeEventListener("dispose", v);
			}
			o.addEventListener("dispose", v);
		}
		if (a.isInstancedMesh === !0 && a.morphTexture !== null) s.getUniforms().setValue(e, "morphTexture", a.morphTexture, n);
		else {
			let t = 0;
			for (let e = 0; e < c.length; e++) t += c[e];
			let n = o.morphTargetsRelative ? 1 : 1 - t;
			s.getUniforms().setValue(e, "morphTargetBaseInfluence", n), s.getUniforms().setValue(e, "morphTargetInfluences", c);
		}
		s.getUniforms().setValue(e, "morphTargetsTexture", d.texture, n), s.getUniforms().setValue(e, "morphTargetsTextureSize", d.size);
	}
	return { update: a };
}
function um(e, t, n, r, i) {
	let a = /* @__PURE__ */ new WeakMap();
	function o(r) {
		let o = i.render.frame, s = r.geometry, l = t.get(r, s);
		if (a.get(l) !== o && (t.update(l), a.set(l, o)), r.isInstancedMesh && (r.hasEventListener("dispose", c) === !1 && r.addEventListener("dispose", c), a.get(r) !== o && (n.update(r.instanceMatrix, e.ARRAY_BUFFER), r.instanceColor !== null && n.update(r.instanceColor, e.ARRAY_BUFFER), a.set(r, o))), r.isSkinnedMesh) {
			let e = r.skeleton;
			a.get(e) !== o && (e.update(), a.set(e, o));
		}
		return l;
	}
	function s() {
		a = /* @__PURE__ */ new WeakMap();
	}
	function c(e) {
		let t = e.target;
		t.removeEventListener("dispose", c), r.releaseStatesOfObject(t), n.remove(t.instanceMatrix), t.instanceColor !== null && n.remove(t.instanceColor);
	}
	return {
		update: o,
		dispose: s
	};
}
var dm = {
	1: "LINEAR_TONE_MAPPING",
	2: "REINHARD_TONE_MAPPING",
	3: "CINEON_TONE_MAPPING",
	4: "ACES_FILMIC_TONE_MAPPING",
	6: "AGX_TONE_MAPPING",
	7: "NEUTRAL_TONE_MAPPING",
	5: "CUSTOM_TONE_MAPPING"
};
function fm(e, t, n, r, i, a) {
	let o = new Al(t, n, {
		type: e,
		depthBuffer: i,
		stencilBuffer: a,
		samples: r ? 4 : 0,
		storeMultisampledDepthBuffer: !1,
		storeMultisampledStencilBuffer: !1,
		resolveDepthBuffer: !1,
		resolveStencilBuffer: !1
	}), s = null, c = null, l = null, u = new ud();
	u.setAttribute("position", new Qu([
		-1,
		3,
		0,
		-1,
		-1,
		0,
		3,
		-1,
		0
	], 3)), u.setAttribute("uv", new Qu([
		0,
		2,
		0,
		0,
		2,
		0
	], 2));
	let d = new xf({
		uniforms: { tDiffuse: { value: null } },
		vertexShader: "\n			precision highp float;\n\n			uniform mat4 modelViewMatrix;\n			uniform mat4 projectionMatrix;\n\n			attribute vec3 position;\n			attribute vec2 uv;\n\n			varying vec2 vUv;\n\n			void main() {\n				vUv = uv;\n				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n			}",
		fragmentShader: "\n			precision highp float;\n\n			uniform sampler2D tDiffuse;\n\n			varying vec2 vUv;\n\n			#include <tonemapping_pars_fragment>\n			#include <colorspace_pars_fragment>\n\n			void main() {\n				gl_FragColor = texture2D( tDiffuse, vUv );\n\n				#ifdef LINEAR_TONE_MAPPING\n					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );\n				#elif defined( REINHARD_TONE_MAPPING )\n					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );\n				#elif defined( CINEON_TONE_MAPPING )\n					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );\n				#elif defined( ACES_FILMIC_TONE_MAPPING )\n					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );\n				#elif defined( AGX_TONE_MAPPING )\n					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );\n				#elif defined( NEUTRAL_TONE_MAPPING )\n					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );\n				#elif defined( CUSTOM_TONE_MAPPING )\n					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );\n				#endif\n\n				#ifdef SRGB_TRANSFER\n					gl_FragColor = sRGBTransferOETF( gl_FragColor );\n				#endif\n			}",
		depthTest: !1,
		depthWrite: !1
	}), f = new Pd(u, d), p = new ap(-1, 1, 1, -1, 0, 1), m = null, h = null, g = !1, _, v = null, y = [], b = !1;
	this.setSize = function(e, t) {
		o.setSize(e, t), s !== null && s.setSize(e, t), c !== null && c.setSize(e, t);
		for (let n = 0; n < y.length; n++) {
			let r = y[n];
			r.setSize && r.setSize(e, t);
		}
	}, this.setEffects = function(e) {
		y = e, b = y.length > 0 && y[0].isRenderPass === !0;
		let t = o.width, n = o.height;
		y.length > 0 && s === null && (s = new Al(t, n, {
			type: fs,
			depthBuffer: !1,
			stencilBuffer: !1
		}), c = new Al(t, n, {
			type: fs,
			depthBuffer: !1,
			stencilBuffer: !1
		}));
		let r = i === !0 && y.some((e) => e.needsDepthTexture === !0);
		r !== (o.depthTexture !== null) && (r === !0 && l === null && (l = new af(t, n), a === !0 && (l.format = Ss, l.type = hs)), o.dispose(), o.depthTexture = r ? l : null, o.resolveDepthBuffer = r, o.storeMultisampledDepthBuffer = r);
		for (let e = 0; e < y.length; e++) {
			let i = y[e];
			i.setSize && i.setSize(t, n), r && i.needsDepthTexture === !0 && i.setDepthTexture && i.setDepthTexture(l);
		}
	}, this.begin = function(e, t) {
		if (g || e.toneMapping === 0 && y.length === 0) return !1;
		if (v = t, t !== null) {
			let e = t.width, n = t.height;
			(o.width !== e || o.height !== n) && this.setSize(e, n);
		}
		return b === !1 && e.setRenderTarget(o), _ = e.toneMapping, e.toneMapping = 0, !0;
	}, this.hasRenderPass = function() {
		return b;
	}, this.end = function(e, t) {
		e.toneMapping = _, g = !0;
		let n = o, r = s;
		for (let i = 0; i < y.length; i++) {
			let a = y[i];
			a.enabled !== !1 && (a.render(e, r, n, t), a.needsSwap !== !1 && (n = r, r = r === s ? c : s));
		}
		if (m !== e.outputColorSpace || h !== e.toneMapping) {
			m = e.outputColorSpace, h = e.toneMapping, d.defines = {}, _l.getTransfer(m) === "srgb" && (d.defines.SRGB_TRANSFER = "");
			let t = dm[h];
			t && (d.defines[t] = ""), d.needsUpdate = !0;
		}
		d.uniforms.tDiffuse.value = n.texture, e.setRenderTarget(v), e.render(f, p), v = null, g = !1;
	}, this.isCompositing = function() {
		return g;
	}, this.dispose = function() {
		o.dispose(), s !== null && s.dispose(), c !== null && c.dispose(), u.dispose(), d.dispose();
	};
}
var pm = /*@__PURE__*/ new Dl(), mm = /*@__PURE__*/ new af(1, 1), hm = /*@__PURE__*/ new of(1), gm = /*@__PURE__*/ new jl(), _m = /*@__PURE__*/ new Ml(), vm = /*@__PURE__*/ new rf(), ym = [], bm = [], xm = /* @__PURE__ */ new Float32Array(16), Sm = /* @__PURE__ */ new Float32Array(9), Cm = /* @__PURE__ */ new Float32Array(4);
function wm(e, t, n) {
	let r = e[0];
	if (r <= 0 || r > 0) return e;
	let i = t * n, a = ym[i];
	if (a === void 0 && (a = new Float32Array(i), ym[i] = a), t !== 0) {
		r.toArray(a, 0);
		for (let r = 1, i = 0; r !== t; ++r) i += n, e[r].toArray(a, i);
	}
	return a;
}
function Tm(e, t) {
	if (e.length !== t.length) return !1;
	for (let n = 0, r = e.length; n < r; n++) if (e[n] !== t[n]) return !1;
	return !0;
}
function Em(e, t) {
	for (let n = 0, r = t.length; n < r; n++) e[n] = t[n];
}
function Dm(e, t) {
	let n = bm[t];
	n === void 0 && (n = new Int32Array(t), bm[t] = n);
	for (let r = 0; r !== t; ++r) n[r] = e.allocateTextureUnit();
	return n;
}
function Om(e, t) {
	let n = this.cache;
	n[0] !== t && (e.uniform1f(this.addr, t), n[0] = t);
}
function km(e, t) {
	let n = this.cache;
	if (t.x !== void 0) (n[0] !== t.x || n[1] !== t.y) && (e.uniform2f(this.addr, t.x, t.y), n[0] = t.x, n[1] = t.y);
	else {
		if (Tm(n, t)) return;
		e.uniform2fv(this.addr, t), Em(n, t);
	}
}
function Am(e, t) {
	let n = this.cache;
	if (t.x !== void 0) (n[0] !== t.x || n[1] !== t.y || n[2] !== t.z) && (e.uniform3f(this.addr, t.x, t.y, t.z), n[0] = t.x, n[1] = t.y, n[2] = t.z);
	else if (t.r !== void 0) (n[0] !== t.r || n[1] !== t.g || n[2] !== t.b) && (e.uniform3f(this.addr, t.r, t.g, t.b), n[0] = t.r, n[1] = t.g, n[2] = t.b);
	else {
		if (Tm(n, t)) return;
		e.uniform3fv(this.addr, t), Em(n, t);
	}
}
function jm(e, t) {
	let n = this.cache;
	if (t.x !== void 0) (n[0] !== t.x || n[1] !== t.y || n[2] !== t.z || n[3] !== t.w) && (e.uniform4f(this.addr, t.x, t.y, t.z, t.w), n[0] = t.x, n[1] = t.y, n[2] = t.z, n[3] = t.w);
	else {
		if (Tm(n, t)) return;
		e.uniform4fv(this.addr, t), Em(n, t);
	}
}
function Mm(e, t) {
	let n = this.cache, r = t.elements;
	if (r === void 0) {
		if (Tm(n, t)) return;
		e.uniformMatrix2fv(this.addr, !1, t), Em(n, t);
	} else {
		if (Tm(n, r)) return;
		Cm.set(r), e.uniformMatrix2fv(this.addr, !1, Cm), Em(n, r);
	}
}
function Nm(e, t) {
	let n = this.cache, r = t.elements;
	if (r === void 0) {
		if (Tm(n, t)) return;
		e.uniformMatrix3fv(this.addr, !1, t), Em(n, t);
	} else {
		if (Tm(n, r)) return;
		Sm.set(r), e.uniformMatrix3fv(this.addr, !1, Sm), Em(n, r);
	}
}
function Pm(e, t) {
	let n = this.cache, r = t.elements;
	if (r === void 0) {
		if (Tm(n, t)) return;
		e.uniformMatrix4fv(this.addr, !1, t), Em(n, t);
	} else {
		if (Tm(n, r)) return;
		xm.set(r), e.uniformMatrix4fv(this.addr, !1, xm), Em(n, r);
	}
}
function Fm(e, t) {
	let n = this.cache;
	n[0] !== t && (e.uniform1i(this.addr, t), n[0] = t);
}
function Im(e, t) {
	let n = this.cache;
	if (t.x !== void 0) (n[0] !== t.x || n[1] !== t.y) && (e.uniform2i(this.addr, t.x, t.y), n[0] = t.x, n[1] = t.y);
	else {
		if (Tm(n, t)) return;
		e.uniform2iv(this.addr, t), Em(n, t);
	}
}
function Lm(e, t) {
	let n = this.cache;
	if (t.x !== void 0) (n[0] !== t.x || n[1] !== t.y || n[2] !== t.z) && (e.uniform3i(this.addr, t.x, t.y, t.z), n[0] = t.x, n[1] = t.y, n[2] = t.z);
	else {
		if (Tm(n, t)) return;
		e.uniform3iv(this.addr, t), Em(n, t);
	}
}
function Rm(e, t) {
	let n = this.cache;
	if (t.x !== void 0) (n[0] !== t.x || n[1] !== t.y || n[2] !== t.z || n[3] !== t.w) && (e.uniform4i(this.addr, t.x, t.y, t.z, t.w), n[0] = t.x, n[1] = t.y, n[2] = t.z, n[3] = t.w);
	else {
		if (Tm(n, t)) return;
		e.uniform4iv(this.addr, t), Em(n, t);
	}
}
function zm(e, t) {
	let n = this.cache;
	n[0] !== t && (e.uniform1ui(this.addr, t), n[0] = t);
}
function Bm(e, t) {
	let n = this.cache;
	if (t.x !== void 0) (n[0] !== t.x || n[1] !== t.y) && (e.uniform2ui(this.addr, t.x, t.y), n[0] = t.x, n[1] = t.y);
	else {
		if (Tm(n, t)) return;
		e.uniform2uiv(this.addr, t), Em(n, t);
	}
}
function Vm(e, t) {
	let n = this.cache;
	if (t.x !== void 0) (n[0] !== t.x || n[1] !== t.y || n[2] !== t.z) && (e.uniform3ui(this.addr, t.x, t.y, t.z), n[0] = t.x, n[1] = t.y, n[2] = t.z);
	else {
		if (Tm(n, t)) return;
		e.uniform3uiv(this.addr, t), Em(n, t);
	}
}
function Hm(e, t) {
	let n = this.cache;
	if (t.x !== void 0) (n[0] !== t.x || n[1] !== t.y || n[2] !== t.z || n[3] !== t.w) && (e.uniform4ui(this.addr, t.x, t.y, t.z, t.w), n[0] = t.x, n[1] = t.y, n[2] = t.z, n[3] = t.w);
	else {
		if (Tm(n, t)) return;
		e.uniform4uiv(this.addr, t), Em(n, t);
	}
}
function Um(e) {
	return e.version === 0 && (e.compareFunction = 519, e.needsUpdate = !0), e;
}
function Wm(e, t, n) {
	let r = this.cache, i = n.allocateTextureUnit();
	r[0] !== i && (e.uniform1i(this.addr, i), r[0] = i);
	let a;
	a = this.type === e.SAMPLER_2D_SHADOW ? Um(mm) : pm, n.setTexture2D(t || a, i);
}
function Gm(e, t, n) {
	let r = this.cache, i = n.allocateTextureUnit();
	r[0] !== i && (e.uniform1i(this.addr, i), r[0] = i), n.setTexture3D(t || _m, i);
}
function Km(e, t, n) {
	let r = this.cache, i = n.allocateTextureUnit();
	r[0] !== i && (e.uniform1i(this.addr, i), r[0] = i);
	let a;
	a = this.type === e.SAMPLER_CUBE_SHADOW ? Um(hm) : vm, n.setTextureCube(t || a, i);
}
function qm(e, t, n) {
	let r = this.cache, i = n.allocateTextureUnit();
	r[0] !== i && (e.uniform1i(this.addr, i), r[0] = i), n.setTexture2DArray(t || gm, i);
}
function Jm(e) {
	switch (e) {
		case 5126: return Om;
		case 35664: return km;
		case 35665: return Am;
		case 35666: return jm;
		case 35674: return Mm;
		case 35675: return Nm;
		case 35676: return Pm;
		case 5124:
		case 35670: return Fm;
		case 35667:
		case 35671: return Im;
		case 35668:
		case 35672: return Lm;
		case 35669:
		case 35673: return Rm;
		case 5125: return zm;
		case 36294: return Bm;
		case 36295: return Vm;
		case 36296: return Hm;
		case 35678:
		case 36198:
		case 36298:
		case 36306:
		case 35682: return Wm;
		case 35679:
		case 36299:
		case 36307: return Gm;
		case 35680:
		case 36300:
		case 36308:
		case 36293: return Km;
		case 36289:
		case 36303:
		case 36311:
		case 36292: return qm;
	}
}
function Ym(e, t) {
	e.uniform1fv(this.addr, t);
}
function Xm(e, t) {
	let n = wm(t, this.size, 2);
	e.uniform2fv(this.addr, n);
}
function Zm(e, t) {
	let n = wm(t, this.size, 3);
	e.uniform3fv(this.addr, n);
}
function Qm(e, t) {
	let n = wm(t, this.size, 4);
	e.uniform4fv(this.addr, n);
}
function $m(e, t) {
	let n = wm(t, this.size, 4);
	e.uniformMatrix2fv(this.addr, !1, n);
}
function eh(e, t) {
	let n = wm(t, this.size, 9);
	e.uniformMatrix3fv(this.addr, !1, n);
}
function th(e, t) {
	let n = wm(t, this.size, 16);
	e.uniformMatrix4fv(this.addr, !1, n);
}
function nh(e, t) {
	e.uniform1iv(this.addr, t);
}
function rh(e, t) {
	e.uniform2iv(this.addr, t);
}
function ih(e, t) {
	e.uniform3iv(this.addr, t);
}
function ah(e, t) {
	e.uniform4iv(this.addr, t);
}
function oh(e, t) {
	e.uniform1uiv(this.addr, t);
}
function sh(e, t) {
	e.uniform2uiv(this.addr, t);
}
function ch(e, t) {
	e.uniform3uiv(this.addr, t);
}
function lh(e, t) {
	e.uniform4uiv(this.addr, t);
}
function uh(e, t, n) {
	let r = this.cache, i = t.length, a = Dm(n, i);
	Tm(r, a) || (e.uniform1iv(this.addr, a), Em(r, a));
	let o;
	o = this.type === e.SAMPLER_2D_SHADOW ? Um(mm) : pm;
	for (let e = 0; e !== i; ++e) n.setTexture2D(t[e] || o, a[e]);
}
function dh(e, t, n) {
	let r = this.cache, i = t.length, a = Dm(n, i);
	Tm(r, a) || (e.uniform1iv(this.addr, a), Em(r, a));
	for (let e = 0; e !== i; ++e) n.setTexture3D(t[e] || _m, a[e]);
}
function fh(e, t, n) {
	let r = this.cache, i = t.length, a = Dm(n, i);
	Tm(r, a) || (e.uniform1iv(this.addr, a), Em(r, a));
	let o;
	o = this.type === e.SAMPLER_CUBE_SHADOW ? Um(hm) : vm;
	for (let e = 0; e !== i; ++e) n.setTextureCube(t[e] || o, a[e]);
}
function ph(e, t, n) {
	let r = this.cache, i = t.length, a = Dm(n, i);
	Tm(r, a) || (e.uniform1iv(this.addr, a), Em(r, a));
	for (let e = 0; e !== i; ++e) n.setTexture2DArray(t[e] || gm, a[e]);
}
function mh(e) {
	switch (e) {
		case 5126: return Ym;
		case 35664: return Xm;
		case 35665: return Zm;
		case 35666: return Qm;
		case 35674: return $m;
		case 35675: return eh;
		case 35676: return th;
		case 5124:
		case 35670: return nh;
		case 35667:
		case 35671: return rh;
		case 35668:
		case 35672: return ih;
		case 35669:
		case 35673: return ah;
		case 5125: return oh;
		case 36294: return sh;
		case 36295: return ch;
		case 36296: return lh;
		case 35678:
		case 36198:
		case 36298:
		case 36306:
		case 35682: return uh;
		case 35679:
		case 36299:
		case 36307: return dh;
		case 35680:
		case 36300:
		case 36308:
		case 36293: return fh;
		case 36289:
		case 36303:
		case 36311:
		case 36292: return ph;
	}
}
var hh = class {
	constructor(e, t, n) {
		this.id = e, this.addr = n, this.cache = [], this.type = t.type, this.setValue = Jm(t.type);
	}
}, gh = class {
	constructor(e, t, n) {
		this.id = e, this.addr = n, this.cache = [], this.type = t.type, this.size = t.size, this.setValue = mh(t.type);
	}
}, _h = class {
	constructor(e) {
		this.id = e, this.seq = [], this.map = {};
	}
	setValue(e, t, n) {
		let r = this.seq;
		for (let i = 0, a = r.length; i !== a; ++i) {
			let a = r[i];
			a.setValue(e, t[a.id], n);
		}
	}
}, vh = /(\w+)(\])?(\[|\.)?/g;
function yh(e, t) {
	e.seq.push(t), e.map[t.id] = t;
}
function bh(e, t, n) {
	let r = e.name, i = r.length;
	for (vh.lastIndex = 0;;) {
		let a = vh.exec(r), o = vh.lastIndex, s = a[1], c = a[2] === "]", l = a[3];
		if (c && (s |= 0), l === void 0 || l === "[" && o + 2 === i) {
			yh(n, l === void 0 ? new hh(s, e, t) : new gh(s, e, t));
			break;
		}
		{
			let e = n.map[s];
			e === void 0 && (e = new _h(s), yh(n, e)), n = e;
		}
	}
}
var xh = class {
	constructor(e, t) {
		this.seq = [], this.map = {};
		let n = e.getProgramParameter(t, e.ACTIVE_UNIFORMS);
		for (let r = 0; r < n; ++r) {
			let n = e.getActiveUniform(t, r);
			bh(n, e.getUniformLocation(t, n.name), this);
		}
		let r = [], i = [];
		for (let t of this.seq) t.type === e.SAMPLER_2D_SHADOW || t.type === e.SAMPLER_CUBE_SHADOW || t.type === e.SAMPLER_2D_ARRAY_SHADOW ? r.push(t) : i.push(t);
		r.length > 0 && (this.seq = r.concat(i));
	}
	setValue(e, t, n, r) {
		let i = this.map[t];
		i !== void 0 && i.setValue(e, n, r);
	}
	setOptional(e, t, n) {
		let r = t[n];
		r !== void 0 && this.setValue(e, n, r);
	}
	static upload(e, t, n, r) {
		for (let i = 0, a = t.length; i !== a; ++i) {
			let a = t[i], o = n[a.id];
			o.needsUpdate !== !1 && a.setValue(e, o.value, r);
		}
	}
	static seqWithValue(e, t) {
		let n = [];
		for (let r = 0, i = e.length; r !== i; ++r) {
			let i = e[r];
			i.id in t && n.push(i);
		}
		return n;
	}
};
function Sh(e, t, n) {
	let r = e.createShader(t);
	return e.shaderSource(r, n), e.compileShader(r), r;
}
var Ch = 37297, wh = 0;
function Th(e, t) {
	let n = e.split("\n"), r = [], i = Math.max(t - 6, 0), a = Math.min(t + 6, n.length);
	for (let e = i; e < a; e++) {
		let i = e + 1;
		r.push(`${i === t ? ">" : " "} ${i}: ${n[e]}`);
	}
	return r.join("\n");
}
var Eh = /*@__PURE__*/ new Q();
function Dh(e) {
	_l._getMatrix(Eh, _l.workingColorSpace, e);
	let t = `mat3( ${Eh.elements.map((e) => e.toFixed(4))} )`;
	switch (_l.getTransfer(e)) {
		case bc: return [t, "LinearTransferOETF"];
		case xc: return [t, "sRGBTransferOETF"];
		default: return J("WebGLProgram: Unsupported color space: ", e), [t, "LinearTransferOETF"];
	}
}
function Oh(e, t, n) {
	let r = e.getShaderParameter(t, e.COMPILE_STATUS), i = (e.getShaderInfoLog(t) || "").trim();
	if (r && i === "") return "";
	let a = /ERROR: 0:(\d+)/.exec(i);
	if (a) {
		let r = parseInt(a[1]);
		return n.toUpperCase() + "\n\n" + i + "\n\n" + Th(e.getShaderSource(t), r);
	}
	return i;
}
function kh(e, t) {
	let n = Dh(t);
	return [
		`vec4 ${e}( vec4 value ) {`,
		`	return ${n[1]}( vec4( ${n[0]} * value.rgb, value.a ) );`,
		"}"
	].join("\n");
}
var Ah = {
	1: "Linear",
	2: "Reinhard",
	3: "Cineon",
	4: "ACESFilmic",
	6: "AgX",
	7: "Neutral",
	5: "Custom"
};
function jh(e, t) {
	let n = Ah[t];
	return n === void 0 ? (J("WebGLProgram: Unsupported toneMapping:", t), "vec3 " + e + "( vec3 color ) { return LinearToneMapping( color ); }") : "vec3 " + e + "( vec3 color ) { return " + n + "ToneMapping( color ); }";
}
var Mh = /*@__PURE__*/ new Z();
function Nh() {
	return _l.getLuminanceCoefficients(Mh), [
		"float luminance( const in vec3 rgb ) {",
		`	const vec3 weights = vec3( ${Mh.x.toFixed(4)}, ${Mh.y.toFixed(4)}, ${Mh.z.toFixed(4)} );`,
		"	return dot( weights, rgb );",
		"}"
	].join("\n");
}
function Ph(e) {
	return [e.extensionClipCullDistance ? "#extension GL_ANGLE_clip_cull_distance : require" : "", e.extensionMultiDraw ? "#extension GL_ANGLE_multi_draw : require" : ""].filter(Lh).join("\n");
}
function Fh(e) {
	let t = [];
	for (let n in e) {
		let r = e[n];
		r !== !1 && t.push("#define " + n + " " + r);
	}
	return t.join("\n");
}
function Ih(e, t) {
	let n = {}, r = e.getProgramParameter(t, e.ACTIVE_ATTRIBUTES);
	for (let i = 0; i < r; i++) {
		let r = e.getActiveAttrib(t, i), a = r.name, o = 1;
		r.type === e.FLOAT_MAT2 && (o = 2), r.type === e.FLOAT_MAT3 && (o = 3), r.type === e.FLOAT_MAT4 && (o = 4), n[a] = {
			type: r.type,
			location: e.getAttribLocation(t, a),
			locationSize: o
		};
	}
	return n;
}
function Lh(e) {
	return e !== "";
}
function Rh(e, t) {
	let n = t.numSpotLightShadows + t.numSpotLightMaps - t.numSpotLightShadowsWithMaps;
	return e.replace(/NUM_SUN_LIGHTS/g, t.numSunLights).replace(/NUM_DIR_LIGHTS/g, t.numDirLights).replace(/NUM_SPOT_LIGHTS/g, t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, n).replace(/NUM_RECT_AREA_LIGHTS/g, t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, t.numPointLights).replace(/NUM_HEMI_LIGHTS/g, t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g, t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g, t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g, t.numLightProbeGrids);
}
function zh(e, t) {
	return e.replace(/NUM_CLIPPING_PLANES/g, t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, t.numClippingPlanes - t.numClipIntersection);
}
var Bh = /^[ \t]*#include +<([\w\d./]+)>/gm;
function Vh(e) {
	return e.replace(Bh, Hh);
}
function Hh(e, t) {
	let n = jp[t];
	if (n === void 0) throw Error("THREE.WebGLProgram: Can not resolve #include <" + t + ">");
	return Vh(n);
}
var Uh = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function Wh(e) {
	return e.replace(Uh, Gh);
}
function Gh(e, t, n, r) {
	let i = "";
	for (let e = parseInt(t); e < parseInt(n); e++) i += r.replace(/\[\s*i\s*\]/g, "[ " + e + " ]").replace(/UNROLLED_LOOP_INDEX/g, e);
	return i;
}
function Kh(e) {
	let t = `precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;
	return e.precision === "highp" ? t += "\n#define HIGH_PRECISION" : e.precision === "mediump" ? t += "\n#define MEDIUM_PRECISION" : e.precision === "lowp" && (t += "\n#define LOW_PRECISION"), t;
}
var qh = {
	1: "SHADOWMAP_TYPE_PCF",
	3: "SHADOWMAP_TYPE_VSM"
};
function Jh(e) {
	return qh[e.shadowMapType] || "SHADOWMAP_TYPE_BASIC";
}
var Yh = { 302: "ENVMAP_MODE_REFRACTION" };
function Xh(e) {
	return e.envMap === !1 ? "ENVMAP_MODE_REFLECTION" : Yh[e.envMapMode] || "ENVMAP_MODE_REFLECTION";
}
var Zh = {
	0: "ENVMAP_BLENDING_MULTIPLY",
	1: "ENVMAP_BLENDING_MIX",
	2: "ENVMAP_BLENDING_ADD"
};
function Qh(e) {
	return e.envMap === !1 ? "ENVMAP_BLENDING_NONE" : Zh[e.combine] || "ENVMAP_BLENDING_NONE";
}
function $h(e, t, n, r) {
	let i = e.getContext(), a = n.defines, o = n.vertexShader, s = n.fragmentShader, c = Jh(n), l = n.envMapPMREM === !0 ? "ENVMAP_TYPE_PMREM" : "ENVMAP_TYPE_CUBE", u = Xh(n), d = Qh(n), f = Ph(n), p = Fh(a), m = i.createProgram(), h, g, _ = n.glslVersion ? "#version " + n.glslVersion + "\n" : "";
	n.isRawShaderMaterial ? (h = [
		"#define SHADER_TYPE " + n.shaderType,
		"#define SHADER_NAME " + n.shaderName,
		p
	].filter(Lh).join("\n"), h.length > 0 && (h += "\n"), g = [
		"#define SHADER_TYPE " + n.shaderType,
		"#define SHADER_NAME " + n.shaderName,
		p
	].filter(Lh).join("\n"), g.length > 0 && (g += "\n")) : (h = [
		Kh(n),
		"#define SHADER_TYPE " + n.shaderType,
		"#define SHADER_NAME " + n.shaderName,
		p,
		n.extensionClipCullDistance ? "#define USE_CLIP_DISTANCE" : "",
		n.batching ? "#define USE_BATCHING" : "",
		n.batchingColor ? "#define USE_BATCHING_COLOR" : "",
		n.instancing ? "#define USE_INSTANCING" : "",
		n.instancingColor ? "#define USE_INSTANCING_COLOR" : "",
		n.instancingMorph ? "#define USE_INSTANCING_MORPH" : "",
		n.useFog && n.fog ? "#define USE_FOG" : "",
		n.useFog && n.fogExp2 ? "#define FOG_EXP2" : "",
		n.map ? "#define USE_MAP" : "",
		n.envMap ? "#define USE_ENVMAP" : "",
		n.envMap ? "#define " + u : "",
		n.lightMap ? "#define USE_LIGHTMAP" : "",
		n.aoMap ? "#define USE_AOMAP" : "",
		n.bumpMap ? "#define USE_BUMPMAP" : "",
		n.normalMap ? "#define USE_NORMALMAP" : "",
		n.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
		n.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
		n.displacementMap ? "#define USE_DISPLACEMENTMAP" : "",
		n.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
		n.anisotropy ? "#define USE_ANISOTROPY" : "",
		n.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
		n.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
		n.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
		n.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
		n.diffuseRoughnessMap ? "#define USE_DIFFUSE_ROUGHNESSMAP" : "",
		n.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
		n.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
		n.specularMap ? "#define USE_SPECULARMAP" : "",
		n.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
		n.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
		n.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
		n.metalnessMap ? "#define USE_METALNESSMAP" : "",
		n.alphaMap ? "#define USE_ALPHAMAP" : "",
		n.alphaHash ? "#define USE_ALPHAHASH" : "",
		n.transmission ? "#define USE_TRANSMISSION" : "",
		n.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
		n.thicknessMap ? "#define USE_THICKNESSMAP" : "",
		n.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
		n.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
		n.mapUv ? "#define MAP_UV " + n.mapUv : "",
		n.alphaMapUv ? "#define ALPHAMAP_UV " + n.alphaMapUv : "",
		n.lightMapUv ? "#define LIGHTMAP_UV " + n.lightMapUv : "",
		n.aoMapUv ? "#define AOMAP_UV " + n.aoMapUv : "",
		n.emissiveMapUv ? "#define EMISSIVEMAP_UV " + n.emissiveMapUv : "",
		n.bumpMapUv ? "#define BUMPMAP_UV " + n.bumpMapUv : "",
		n.normalMapUv ? "#define NORMALMAP_UV " + n.normalMapUv : "",
		n.displacementMapUv ? "#define DISPLACEMENTMAP_UV " + n.displacementMapUv : "",
		n.metalnessMapUv ? "#define METALNESSMAP_UV " + n.metalnessMapUv : "",
		n.roughnessMapUv ? "#define ROUGHNESSMAP_UV " + n.roughnessMapUv : "",
		n.anisotropyMapUv ? "#define ANISOTROPYMAP_UV " + n.anisotropyMapUv : "",
		n.clearcoatMapUv ? "#define CLEARCOATMAP_UV " + n.clearcoatMapUv : "",
		n.clearcoatNormalMapUv ? "#define CLEARCOAT_NORMALMAP_UV " + n.clearcoatNormalMapUv : "",
		n.clearcoatRoughnessMapUv ? "#define CLEARCOAT_ROUGHNESSMAP_UV " + n.clearcoatRoughnessMapUv : "",
		n.diffuseRoughnessMapUv ? "#define DIFFUSE_ROUGHNESSMAP_UV " + n.diffuseRoughnessMapUv : "",
		n.iridescenceMapUv ? "#define IRIDESCENCEMAP_UV " + n.iridescenceMapUv : "",
		n.iridescenceThicknessMapUv ? "#define IRIDESCENCE_THICKNESSMAP_UV " + n.iridescenceThicknessMapUv : "",
		n.sheenColorMapUv ? "#define SHEEN_COLORMAP_UV " + n.sheenColorMapUv : "",
		n.sheenRoughnessMapUv ? "#define SHEEN_ROUGHNESSMAP_UV " + n.sheenRoughnessMapUv : "",
		n.specularMapUv ? "#define SPECULARMAP_UV " + n.specularMapUv : "",
		n.specularColorMapUv ? "#define SPECULAR_COLORMAP_UV " + n.specularColorMapUv : "",
		n.specularIntensityMapUv ? "#define SPECULAR_INTENSITYMAP_UV " + n.specularIntensityMapUv : "",
		n.transmissionMapUv ? "#define TRANSMISSIONMAP_UV " + n.transmissionMapUv : "",
		n.thicknessMapUv ? "#define THICKNESSMAP_UV " + n.thicknessMapUv : "",
		n.vertexTangents && n.flatShading === !1 ? "#define USE_TANGENT" : "",
		n.vertexNormals ? "#define HAS_NORMAL" : "",
		n.vertexColors ? "#define USE_COLOR" : "",
		n.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
		n.vertexUv1s ? "#define USE_UV1" : "",
		n.vertexUv2s ? "#define USE_UV2" : "",
		n.vertexUv3s ? "#define USE_UV3" : "",
		n.pointsUvs ? "#define USE_POINTS_UV" : "",
		n.flatShading ? "#define FLAT_SHADED" : "",
		n.skinning ? "#define USE_SKINNING" : "",
		n.morphTargets ? "#define USE_MORPHTARGETS" : "",
		n.morphNormals && n.flatShading === !1 ? "#define USE_MORPHNORMALS" : "",
		n.morphColors ? "#define USE_MORPHCOLORS" : "",
		n.morphTargetsCount > 0 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + n.morphTextureStride : "",
		n.morphTargetsCount > 0 ? "#define MORPHTARGETS_COUNT " + n.morphTargetsCount : "",
		n.doubleSided ? "#define DOUBLE_SIDED" : "",
		n.flipSided ? "#define FLIP_SIDED" : "",
		n.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
		n.shadowMapEnabled ? "#define " + c : "",
		n.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "",
		n.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
		n.logarithmicDepthBuffer ? "#define USE_LOGARITHMIC_DEPTH_BUFFER" : "",
		n.reversedDepthBuffer ? "#define USE_REVERSED_DEPTH_BUFFER" : "",
		"uniform mat4 modelMatrix;",
		"uniform mat4 modelViewMatrix;",
		"uniform mat4 projectionMatrix;",
		"uniform mat4 viewMatrix;",
		"uniform mat3 normalMatrix;",
		"uniform vec3 cameraPosition;",
		"uniform bool isOrthographic;",
		"#ifdef USE_INSTANCING",
		"	attribute mat4 instanceMatrix;",
		"#endif",
		"#ifdef USE_INSTANCING_COLOR",
		"	attribute vec3 instanceColor;",
		"#endif",
		"#ifdef USE_INSTANCING_MORPH",
		"	uniform sampler2D morphTexture;",
		"#endif",
		"attribute vec3 position;",
		"attribute vec3 normal;",
		"attribute vec2 uv;",
		"#ifdef USE_UV1",
		"	attribute vec2 uv1;",
		"#endif",
		"#ifdef USE_UV2",
		"	attribute vec2 uv2;",
		"#endif",
		"#ifdef USE_UV3",
		"	attribute vec2 uv3;",
		"#endif",
		"#ifdef USE_TANGENT",
		"	attribute vec4 tangent;",
		"#endif",
		"#if defined( USE_COLOR_ALPHA )",
		"	attribute vec4 color;",
		"#elif defined( USE_COLOR )",
		"	attribute vec3 color;",
		"#endif",
		"#ifdef USE_SKINNING",
		"	attribute vec4 skinIndex;",
		"	attribute vec4 skinWeight;",
		"#endif",
		"\n"
	].filter(Lh).join("\n"), g = [
		Kh(n),
		"#define SHADER_TYPE " + n.shaderType,
		"#define SHADER_NAME " + n.shaderName,
		p,
		n.useFog && n.fog ? "#define USE_FOG" : "",
		n.useFog && n.fogExp2 ? "#define FOG_EXP2" : "",
		n.alphaToCoverage ? "#define ALPHA_TO_COVERAGE" : "",
		n.map ? "#define USE_MAP" : "",
		n.matcap ? "#define USE_MATCAP" : "",
		n.envMap ? "#define USE_ENVMAP" : "",
		n.envMap ? "#define " + l : "",
		n.envMap ? "#define " + u : "",
		n.envMap ? "#define " + d : "",
		n.envMapPMREM ? "#define ENVMAP_MAX_LOD " + n.envMapMaxLod + ".0" : "",
		n.envMapPMREM ? "#define ENVMAP_SIZE " + n.envMapSize + ".0" : "",
		n.lightMap ? "#define USE_LIGHTMAP" : "",
		n.aoMap ? "#define USE_AOMAP" : "",
		n.bumpMap ? "#define USE_BUMPMAP" : "",
		n.normalMap ? "#define USE_NORMALMAP" : "",
		n.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
		n.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
		n.packedNormalMap ? "#define USE_PACKED_NORMALMAP" : "",
		n.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
		n.anisotropy ? "#define USE_ANISOTROPY" : "",
		n.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
		n.clearcoat ? "#define USE_CLEARCOAT" : "",
		n.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
		n.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
		n.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
		n.diffuseRoughness ? "#define USE_DIFFUSE_ROUGHNESS" : "",
		n.diffuseRoughnessMap ? "#define USE_DIFFUSE_ROUGHNESSMAP" : "",
		n.dispersion ? "#define USE_DISPERSION" : "",
		n.retroreflection ? "#define USE_RETROREFLECTION" : "",
		n.iridescence ? "#define USE_IRIDESCENCE" : "",
		n.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
		n.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
		n.specularMap ? "#define USE_SPECULARMAP" : "",
		n.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
		n.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
		n.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
		n.metalnessMap ? "#define USE_METALNESSMAP" : "",
		n.alphaMap ? "#define USE_ALPHAMAP" : "",
		n.alphaTest ? "#define USE_ALPHATEST" : "",
		n.alphaHash ? "#define USE_ALPHAHASH" : "",
		n.sheen ? "#define USE_SHEEN" : "",
		n.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
		n.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
		n.transmission ? "#define USE_TRANSMISSION" : "",
		n.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
		n.thicknessMap ? "#define USE_THICKNESSMAP" : "",
		n.vertexTangents && n.flatShading === !1 ? "#define USE_TANGENT" : "",
		n.vertexColors || n.instancingColor ? "#define USE_COLOR" : "",
		n.vertexAlphas || n.batchingColor ? "#define USE_COLOR_ALPHA" : "",
		n.vertexUv1s ? "#define USE_UV1" : "",
		n.vertexUv2s ? "#define USE_UV2" : "",
		n.vertexUv3s ? "#define USE_UV3" : "",
		n.pointsUvs ? "#define USE_POINTS_UV" : "",
		n.gradientMap ? "#define USE_GRADIENTMAP" : "",
		n.flatShading ? "#define FLAT_SHADED" : "",
		n.doubleSided ? "#define DOUBLE_SIDED" : "",
		n.flipSided ? "#define FLIP_SIDED" : "",
		n.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
		n.shadowMapEnabled ? "#define " + c : "",
		n.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "",
		n.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
		n.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "",
		n.decodeVideoTextureEmissive ? "#define DECODE_VIDEO_TEXTURE_EMISSIVE" : "",
		n.logarithmicDepthBuffer ? "#define USE_LOGARITHMIC_DEPTH_BUFFER" : "",
		n.reversedDepthBuffer ? "#define USE_REVERSED_DEPTH_BUFFER" : "",
		"uniform mat4 viewMatrix;",
		"uniform vec3 cameraPosition;",
		"uniform bool isOrthographic;",
		n.toneMapping === 0 ? "" : "#define TONE_MAPPING",
		n.toneMapping === 0 ? "" : jp.tonemapping_pars_fragment,
		n.toneMapping === 0 ? "" : jh("toneMapping", n.toneMapping),
		n.dithering ? "#define DITHERING" : "",
		n.opaque ? "#define OPAQUE" : "",
		jp.colorspace_pars_fragment,
		kh("linearToOutputTexel", n.outputColorSpace),
		Nh(),
		n.useDepthPacking ? "#define DEPTH_PACKING " + n.depthPacking : "",
		"\n"
	].filter(Lh).join("\n")), o = Vh(o), o = Rh(o, n), o = zh(o, n), s = Vh(s), s = Rh(s, n), s = zh(s, n), o = Wh(o), s = Wh(s), n.isRawShaderMaterial !== !0 && (_ = "#version 300 es\n", h = [
		f,
		"#define attribute in",
		"#define varying out",
		"#define texture2D texture"
	].join("\n") + "\n" + h, g = [
		"#define varying in",
		n.glslVersion === "300 es" ? "" : "layout(location = 0) out highp vec4 pc_fragColor;",
		n.glslVersion === "300 es" ? "" : "#define gl_FragColor pc_fragColor",
		"#define gl_FragDepthEXT gl_FragDepth",
		"#define texture2D texture",
		"#define textureCube texture",
		"#define texture2DProj textureProj",
		"#define texture2DLodEXT textureLod",
		"#define texture2DProjLodEXT textureProjLod",
		"#define textureCubeLodEXT textureLod",
		"#define texture2DGradEXT textureGrad",
		"#define texture2DProjGradEXT textureProjGrad",
		"#define textureCubeGradEXT textureGrad"
	].join("\n") + "\n" + g);
	let v = _ + h + o, y = _ + g + s, b = Sh(i, i.VERTEX_SHADER, v), x = Sh(i, i.FRAGMENT_SHADER, y);
	i.attachShader(m, b), i.attachShader(m, x), n.index0AttributeName === void 0 ? n.hasPositionAttribute === !0 && i.bindAttribLocation(m, 0, "position") : i.bindAttribLocation(m, 0, n.index0AttributeName), i.linkProgram(m);
	function S(t) {
		if (e.debug.checkShaderErrors) {
			let n = i.getProgramInfoLog(m) || "", r = i.getShaderInfoLog(b) || "", a = i.getShaderInfoLog(x) || "", o = n.trim(), s = r.trim(), c = a.trim(), l = !0, u = !0;
			if (i.getProgramParameter(m, i.LINK_STATUS) === !1) {
				if (l = !1, typeof e.debug.onShaderError == "function") e.debug.onShaderError(i, m, b, x);
				else {
					let e = Oh(i, b, "vertex"), n = Oh(i, x, "fragment");
					Y("WebGLProgram: Shader Error " + i.getError() + " - VALIDATE_STATUS " + i.getProgramParameter(m, i.VALIDATE_STATUS) + "\n\nMaterial Name: " + t.name + "\nMaterial Type: " + t.type + "\n\nProgram Info Log: " + o + "\n" + e + "\n" + n);
				}
			} else o === "" ? (s === "" || c === "") && (u = !1) : J("WebGLProgram: Program Info Log:", o);
			u && (t.diagnostics = {
				runnable: l,
				programLog: o,
				vertexShader: {
					log: s,
					prefix: h
				},
				fragmentShader: {
					log: c,
					prefix: g
				}
			});
		}
		i.deleteShader(b), i.deleteShader(x), C = new xh(i, m), w = Ih(i, m);
	}
	let C;
	this.getUniforms = function() {
		return C === void 0 && S(this), C;
	};
	let w;
	this.getAttributes = function() {
		return w === void 0 && S(this), w;
	};
	let T = n.rendererExtensionParallelShaderCompile === !1;
	return this.isReady = function() {
		return T === !1 && (T = i.getProgramParameter(m, Ch)), T;
	}, this.destroy = function() {
		r.releaseStatesOfProgram(this), i.deleteProgram(m), this.program = void 0;
	}, this.type = n.shaderType, this.name = n.shaderName, this.id = wh++, this.cacheKey = t, this.usedTimes = 1, this.program = m, this.vertexShader = b, this.fragmentShader = x, this;
}
var eg = 0, tg = class {
	constructor() {
		this.shaderCache = /* @__PURE__ */ new Map(), this.materialCache = /* @__PURE__ */ new Map();
	}
	update(e, t, n) {
		let r = this._getShaderCacheForMaterial(e);
		return r.has(t) === !1 && (r.add(t), t.usedTimes++), r.has(n) === !1 && (r.add(n), n.usedTimes++), this;
	}
	remove(e) {
		let t = this.materialCache.get(e);
		for (let e of t) e.usedTimes--, e.usedTimes === 0 && this.shaderCache.delete(e.code);
		return this.materialCache.delete(e), this;
	}
	getVertexShaderStage(e) {
		return this._getShaderStage(e.vertexShader);
	}
	getFragmentShaderStage(e) {
		return this._getShaderStage(e.fragmentShader);
	}
	dispose() {
		this.shaderCache.clear(), this.materialCache.clear();
	}
	_getShaderCacheForMaterial(e) {
		let t = this.materialCache, n = t.get(e);
		return n === void 0 && (n = /* @__PURE__ */ new Set(), t.set(e, n)), n;
	}
	_getShaderStage(e) {
		let t = this.shaderCache, n = t.get(e);
		return n === void 0 && (n = new ng(e), t.set(e, n)), n;
	}
}, ng = class {
	constructor(e) {
		this.id = eg++, this.code = e, this.usedTimes = 0;
	}
};
function rg(e) {
	return e === 1030 || e === 37490 || e === 36285;
}
function ig(e, t, n, r, i, a) {
	let o = new Wl(), s = new tg(), c = /* @__PURE__ */ new Set(), l = [], u = /* @__PURE__ */ new Map(), d = r.logarithmicDepthBuffer, f = {
		MeshDepthMaterial: "depth",
		MeshDistanceMaterial: "distance",
		MeshNormalMaterial: "normal",
		MeshBasicMaterial: "basic",
		MeshLambertMaterial: "lambert",
		MeshPhongMaterial: "phong",
		MeshToonMaterial: "toon",
		MeshStandardMaterial: "physical",
		MeshPhysicalMaterial: "physical",
		MeshMatcapMaterial: "matcap",
		LineBasicMaterial: "basic",
		LineDashedMaterial: "dashed",
		PointsMaterial: "points",
		ShadowMaterial: "shadow",
		SpriteMaterial: "sprite"
	};
	function p(e) {
		return c.add(e), e === 0 ? "uv" : `uv${e}`;
	}
	function m(i, o, l, u, m, h) {
		let g = u.fog, _ = m.geometry, v = i.isMeshStandardMaterial || i.isMeshLambertMaterial || i.isMeshPhongMaterial ? u.environment : null, y = i.isMeshStandardMaterial || i.isMeshLambertMaterial && !i.envMap || i.isMeshPhongMaterial && !i.envMap, b = t.get(i.envMap || v, y), x = f[i.type], S = r.precision;
		i.precision !== null && (S = r.getMaxPrecision(i.precision), S !== i.precision && J("WebGLProgram.getParameters:", i.precision, "not supported, using", S, "instead."));
		let C = _.morphAttributes.position || _.morphAttributes.normal || _.morphAttributes.color, w = C === void 0 ? 0 : C.length, T = 0;
		_.morphAttributes.position !== void 0 && (T = 1), _.morphAttributes.normal !== void 0 && (T = 2), _.morphAttributes.color !== void 0 && (T = 3);
		let E, D, O, k;
		if (x) {
			let e = Mp[x];
			E = e.vertexShader, D = e.fragmentShader;
		} else {
			E = i.vertexShader, D = i.fragmentShader;
			let e = s.getVertexShaderStage(i), t = s.getFragmentShaderStage(i);
			s.update(i, e, t), O = e.id, k = t.id;
		}
		let A = e.getRenderTarget(), j = e.state.buffers.depth.getReversed(), M = m.isInstancedMesh === !0, N = m.isBatchedMesh === !0, P = !!i.map, ee = !!i.matcap, F = !!b, te = F && b.isPMREMTexture === !0, I = !!i.aoMap, L = !!i.lightMap, R = !!i.bumpMap && i.wireframe === !1, z = !!i.normalMap, B = !!i.displacementMap, V = !!i.emissiveMap, ne = !!i.metalnessMap, re = !!i.roughnessMap, ie = i.anisotropy > 0, ae = i.clearcoat > 0, oe = i.diffuseRoughness > 0, se = i.dispersion > 0, ce = i.retroreflectivity > 0, le = i.iridescence > 0, ue = i.sheen > 0, de = i.transmission > 0, fe = ie && !!i.anisotropyMap, pe = ae && !!i.clearcoatMap, me = ae && !!i.clearcoatNormalMap, he = ae && !!i.clearcoatRoughnessMap, ge = oe && !!i.diffuseRoughnessMap, H = le && !!i.iridescenceMap, U = le && !!i.iridescenceThicknessMap, W = ue && !!i.sheenColorMap, _e = ue && !!i.sheenRoughnessMap, G = !!i.specularMap, ve = !!i.specularColorMap, K = !!i.specularIntensityMap, q = de && !!i.transmissionMap, ye = de && !!i.thicknessMap, be = !!i.gradientMap, xe = !!i.alphaMap, Se = i.alphaTest > 0, Ce = !!i.alphaHash, we = !!i.extensions, Te = 0;
		i.toneMapped && (A === null || A.isXRRenderTarget === !0) && (Te = e.toneMapping);
		let Ee = te ? b.isCompressedCubeTexture ? b.image[0].mipmaps : b.mipmaps : null, De = {
			shaderID: x,
			shaderType: i.type,
			shaderName: i.name,
			vertexShader: E,
			fragmentShader: D,
			defines: i.defines,
			customVertexShaderID: O,
			customFragmentShaderID: k,
			isRawShaderMaterial: i.isRawShaderMaterial === !0,
			glslVersion: i.glslVersion,
			precision: S,
			batching: N,
			batchingColor: N && m._colorsTexture !== null,
			instancing: M,
			instancingColor: M && m.instanceColor !== null,
			instancingMorph: M && m.morphTexture !== null,
			outputColorSpace: A === null ? e.outputColorSpace : A.isXRRenderTarget === !0 ? A.texture.colorSpace : _l.workingColorSpace,
			alphaToCoverage: !!i.alphaToCoverage,
			map: P,
			matcap: ee,
			envMap: F,
			envMapMode: F && b.mapping,
			envMapPMREM: te,
			envMapMaxLod: te ? Ee.length - 1 : null,
			envMapSize: te ? Ee[0].width : null,
			aoMap: I,
			lightMap: L,
			bumpMap: R,
			normalMap: z,
			displacementMap: B,
			emissiveMap: V,
			normalMapObjectSpace: z && i.normalMapType === 1,
			normalMapTangentSpace: z && i.normalMapType === 0,
			packedNormalMap: z && i.normalMapType === 0 && rg(i.normalMap.format),
			metalnessMap: ne,
			roughnessMap: re,
			anisotropy: ie,
			anisotropyMap: fe,
			clearcoat: ae,
			clearcoatMap: pe,
			clearcoatNormalMap: me,
			clearcoatRoughnessMap: he,
			diffuseRoughness: oe,
			diffuseRoughnessMap: ge,
			dispersion: se,
			retroreflection: ce,
			iridescence: le,
			iridescenceMap: H,
			iridescenceThicknessMap: U,
			sheen: ue,
			sheenColorMap: W,
			sheenRoughnessMap: _e,
			specularMap: G,
			specularColorMap: ve,
			specularIntensityMap: K,
			transmission: de,
			transmissionMap: q,
			thicknessMap: ye,
			gradientMap: be,
			opaque: i.transparent === !1 && i.blending === 1 && i.alphaToCoverage === !1,
			alphaMap: xe,
			alphaTest: Se,
			alphaHash: Ce,
			combine: i.combine,
			mapUv: P && p(i.map.channel),
			aoMapUv: I && p(i.aoMap.channel),
			lightMapUv: L && p(i.lightMap.channel),
			bumpMapUv: R && p(i.bumpMap.channel),
			normalMapUv: z && p(i.normalMap.channel),
			displacementMapUv: B && p(i.displacementMap.channel),
			emissiveMapUv: V && p(i.emissiveMap.channel),
			metalnessMapUv: ne && p(i.metalnessMap.channel),
			roughnessMapUv: re && p(i.roughnessMap.channel),
			anisotropyMapUv: fe && p(i.anisotropyMap.channel),
			clearcoatMapUv: pe && p(i.clearcoatMap.channel),
			clearcoatNormalMapUv: me && p(i.clearcoatNormalMap.channel),
			clearcoatRoughnessMapUv: he && p(i.clearcoatRoughnessMap.channel),
			diffuseRoughnessMapUv: ge && p(i.diffuseRoughnessMap.channel),
			iridescenceMapUv: H && p(i.iridescenceMap.channel),
			iridescenceThicknessMapUv: U && p(i.iridescenceThicknessMap.channel),
			sheenColorMapUv: W && p(i.sheenColorMap.channel),
			sheenRoughnessMapUv: _e && p(i.sheenRoughnessMap.channel),
			specularMapUv: G && p(i.specularMap.channel),
			specularColorMapUv: ve && p(i.specularColorMap.channel),
			specularIntensityMapUv: K && p(i.specularIntensityMap.channel),
			transmissionMapUv: q && p(i.transmissionMap.channel),
			thicknessMapUv: ye && p(i.thicknessMap.channel),
			alphaMapUv: xe && p(i.alphaMap.channel),
			vertexTangents: !!_.attributes.tangent && (z || ie),
			vertexNormals: !!_.attributes.normal,
			vertexColors: i.vertexColors,
			vertexAlphas: i.vertexColors === !0 && !!_.attributes.color && _.attributes.color.itemSize === 4,
			pointsUvs: m.isPoints === !0 && !!_.attributes.uv && (P || xe),
			fog: !!g,
			useFog: i.fog === !0,
			fogExp2: !!g && g.isFogExp2,
			flatShading: i.wireframe === !1 && (i.flatShading === !0 || _.attributes.normal === void 0 && z === !1 && (i.isMeshLambertMaterial || i.isMeshPhongMaterial || i.isMeshStandardMaterial || i.isMeshPhysicalMaterial)),
			sizeAttenuation: i.sizeAttenuation === !0,
			logarithmicDepthBuffer: d,
			reversedDepthBuffer: j,
			skinning: m.isSkinnedMesh === !0,
			hasPositionAttribute: _.attributes.position !== void 0,
			morphTargets: _.morphAttributes.position !== void 0,
			morphNormals: _.morphAttributes.normal !== void 0,
			morphColors: _.morphAttributes.color !== void 0,
			morphTargetsCount: w,
			morphTextureStride: T,
			numSunLights: o.sun.length,
			numDirLights: o.directional.length,
			numPointLights: o.point.length,
			numSpotLights: o.spot.length,
			numSpotLightMaps: o.spotLightMap.length,
			numRectAreaLights: o.rectArea.length,
			numHemiLights: o.hemi.length,
			numSunLightShadows: o.sunShadowMap.length,
			numDirLightShadows: o.directionalShadowMap.length,
			numPointLightShadows: o.pointShadowMap.length,
			numSpotLightShadows: o.spotShadowMap.length,
			numSpotLightShadowsWithMaps: o.numSpotLightShadowsWithMaps,
			numLightProbes: o.numLightProbes,
			numLightProbeGrids: h.filter((e) => e.texture !== null).length,
			numClippingPlanes: a.numPlanes,
			numClipIntersection: a.numIntersection,
			dithering: i.dithering,
			shadowMapEnabled: e.shadowMap.enabled && l.length > 0,
			shadowMapType: e.shadowMap.type,
			toneMapping: Te,
			decodeVideoTexture: P && i.map.isVideoTexture === !0 && _l.getTransfer(i.map.colorSpace) === "srgb",
			decodeVideoTextureEmissive: V && i.emissiveMap.isVideoTexture === !0 && _l.getTransfer(i.emissiveMap.colorSpace) === "srgb",
			premultipliedAlpha: i.premultipliedAlpha,
			doubleSided: i.side === 2,
			flipSided: i.side === 1,
			useDepthPacking: i.depthPacking >= 0,
			depthPacking: i.depthPacking || 0,
			index0AttributeName: i.index0AttributeName,
			extensionClipCullDistance: we && i.extensions.clipCullDistance === !0 && n.has("WEBGL_clip_cull_distance"),
			extensionMultiDraw: (we && i.extensions.multiDraw === !0 || N) && n.has("WEBGL_multi_draw"),
			rendererExtensionParallelShaderCompile: n.has("KHR_parallel_shader_compile"),
			customProgramCacheKey: i.customProgramCacheKey()
		};
		return De.vertexUv1s = c.has(1), De.vertexUv2s = c.has(2), De.vertexUv3s = c.has(3), c.clear(), De;
	}
	function h(t) {
		let n = [];
		if (t.shaderID ? n.push(t.shaderID) : (n.push(t.customVertexShaderID), n.push(t.customFragmentShaderID)), t.defines !== void 0) for (let e in t.defines) n.push(e), n.push(t.defines[e]);
		return t.isRawShaderMaterial === !1 && (g(n, t), _(n, t), n.push(e.outputColorSpace)), n.push(t.customProgramCacheKey), n.join();
	}
	function g(e, t) {
		e.push(t.precision), e.push(t.outputColorSpace), e.push(t.envMapMode), e.push(t.envMapPMREM), e.push(t.envMapMaxLod), e.push(t.envMapSize), e.push(t.mapUv), e.push(t.alphaMapUv), e.push(t.lightMapUv), e.push(t.aoMapUv), e.push(t.bumpMapUv), e.push(t.normalMapUv), e.push(t.displacementMapUv), e.push(t.emissiveMapUv), e.push(t.metalnessMapUv), e.push(t.roughnessMapUv), e.push(t.anisotropyMapUv), e.push(t.clearcoatMapUv), e.push(t.clearcoatNormalMapUv), e.push(t.clearcoatRoughnessMapUv), e.push(t.diffuseRoughnessMapUv), e.push(t.iridescenceMapUv), e.push(t.iridescenceThicknessMapUv), e.push(t.sheenColorMapUv), e.push(t.sheenRoughnessMapUv), e.push(t.specularMapUv), e.push(t.specularColorMapUv), e.push(t.specularIntensityMapUv), e.push(t.transmissionMapUv), e.push(t.thicknessMapUv), e.push(t.combine), e.push(t.fogExp2), e.push(t.sizeAttenuation), e.push(t.morphTargetsCount), e.push(t.numSunLights), e.push(t.numDirLights), e.push(t.numPointLights), e.push(t.numSpotLights), e.push(t.numSpotLightMaps), e.push(t.numHemiLights), e.push(t.numRectAreaLights), e.push(t.numSunLightShadows), e.push(t.numDirLightShadows), e.push(t.numPointLightShadows), e.push(t.numSpotLightShadows), e.push(t.numSpotLightShadowsWithMaps), e.push(t.numLightProbes), e.push(t.numLightProbeGrids), e.push(t.shadowMapType), e.push(t.toneMapping), e.push(t.numClippingPlanes), e.push(t.numClipIntersection), e.push(t.depthPacking);
	}
	function _(e, t) {
		o.disableAll(), t.instancing && o.enable(0), t.instancingColor && o.enable(1), t.instancingMorph && o.enable(2), t.matcap && o.enable(3), t.envMap && o.enable(4), t.normalMapObjectSpace && o.enable(5), t.normalMapTangentSpace && o.enable(6), t.clearcoat && o.enable(7), t.iridescence && o.enable(8), t.alphaTest && o.enable(9), t.vertexColors && o.enable(10), t.vertexAlphas && o.enable(11), t.vertexUv1s && o.enable(12), t.vertexUv2s && o.enable(13), t.vertexUv3s && o.enable(14), t.vertexTangents && o.enable(15), t.anisotropy && o.enable(16), t.alphaHash && o.enable(17), t.batching && o.enable(18), t.dispersion && o.enable(19), t.retroreflection && o.enable(24), t.diffuseRoughness && o.enable(25), t.batchingColor && o.enable(20), t.gradientMap && o.enable(21), t.packedNormalMap && o.enable(22), t.vertexNormals && o.enable(23), e.push(o.mask), o.disableAll(), t.fog && o.enable(0), t.useFog && o.enable(1), t.flatShading && o.enable(2), t.logarithmicDepthBuffer && o.enable(3), t.reversedDepthBuffer && o.enable(4), t.skinning && o.enable(5), t.morphTargets && o.enable(6), t.morphNormals && o.enable(7), t.morphColors && o.enable(8), t.premultipliedAlpha && o.enable(9), t.shadowMapEnabled && o.enable(10), t.doubleSided && o.enable(11), t.flipSided && o.enable(12), t.useDepthPacking && o.enable(13), t.dithering && o.enable(14), t.transmission && o.enable(15), t.sheen && o.enable(16), t.opaque && o.enable(17), t.pointsUvs && o.enable(18), t.decodeVideoTexture && o.enable(19), t.decodeVideoTextureEmissive && o.enable(20), t.alphaToCoverage && o.enable(21), t.numLightProbeGrids > 0 && o.enable(22), t.hasPositionAttribute && o.enable(23), e.push(o.mask);
	}
	function v(e) {
		let t = f[e.type], n;
		if (t) {
			let e = Mp[t];
			n = _f.clone(e.uniforms);
		} else n = e.uniforms;
		return n;
	}
	function y(t, n) {
		let r = u.get(n);
		return r === void 0 ? (r = new $h(e, n, t, i), l.push(r), u.set(n, r)) : ++r.usedTimes, r;
	}
	function b(e) {
		if (--e.usedTimes === 0) {
			let t = l.indexOf(e);
			l[t] = l[l.length - 1], l.pop(), u.delete(e.cacheKey), e.destroy();
		}
	}
	function x(e) {
		s.remove(e);
	}
	function S() {
		s.dispose();
	}
	return {
		getParameters: m,
		getProgramCacheKey: h,
		getUniforms: v,
		acquireProgram: y,
		releaseProgram: b,
		releaseShaderCache: x,
		programs: l,
		dispose: S
	};
}
function ag() {
	let e = /* @__PURE__ */ new WeakMap();
	function t(t) {
		return e.has(t);
	}
	function n(t) {
		let n = e.get(t);
		return n === void 0 && (n = {}, e.set(t, n)), n;
	}
	function r(t) {
		e.delete(t);
	}
	function i(t, n, r) {
		e.get(t)[n] = r;
	}
	function a() {
		e = /* @__PURE__ */ new WeakMap();
	}
	return {
		has: t,
		get: n,
		remove: r,
		update: i,
		dispose: a
	};
}
function og(e, t) {
	return e.groupOrder === t.groupOrder ? e.renderOrder === t.renderOrder ? e.material.id === t.material.id ? e.materialVariant === t.materialVariant ? e.z === t.z ? e.id - t.id : e.z - t.z : e.materialVariant - t.materialVariant : e.material.id - t.material.id : e.renderOrder - t.renderOrder : e.groupOrder - t.groupOrder;
}
function sg(e, t) {
	return e.groupOrder === t.groupOrder ? e.renderOrder === t.renderOrder ? e.z === t.z ? e.id - t.id : t.z - e.z : e.renderOrder - t.renderOrder : e.groupOrder - t.groupOrder;
}
function cg() {
	let e = [], t = 0, n = [], r = [], i = [];
	function a() {
		t = 0, n.length = 0, r.length = 0, i.length = 0;
	}
	function o(e) {
		let t = 0;
		return e.isInstancedMesh && (t += 2), e.isSkinnedMesh && (t += 1), t;
	}
	function s(n, r, i, a, s, c) {
		let l = e[t];
		return l === void 0 ? (l = {
			id: n.id,
			object: n,
			geometry: r,
			material: i,
			materialVariant: o(n),
			groupOrder: a,
			renderOrder: n.renderOrder,
			z: s,
			group: c
		}, e[t] = l) : (l.id = n.id, l.object = n, l.geometry = r, l.material = i, l.materialVariant = o(n), l.groupOrder = a, l.renderOrder = n.renderOrder, l.z = s, l.group = c), t++, l;
	}
	function c(e, t, a, o, c, l, u) {
		u.reversedDepth === !0 && (c = -c);
		let d = s(e, t, a, o, c, l);
		a.transmission > 0 ? r.push(d) : a.transparent === !0 ? i.push(d) : n.push(d);
	}
	function l(e, t, a, o, c, l) {
		let u = s(e, t, a, o, c, l);
		a.transmission > 0 ? r.unshift(u) : a.transparent === !0 ? i.unshift(u) : n.unshift(u);
	}
	function u(e, t) {
		n.length > 1 && n.sort(e || og), r.length > 1 && r.sort(t || sg), i.length > 1 && i.sort(t || sg);
	}
	function d() {
		for (let n = t, r = e.length; n < r; n++) {
			let t = e[n];
			if (t.id === null) break;
			t.id = null, t.object = null, t.geometry = null, t.material = null, t.group = null;
		}
	}
	return {
		opaque: n,
		transmissive: r,
		transparent: i,
		init: a,
		push: c,
		unshift: l,
		finish: d,
		sort: u
	};
}
function lg() {
	let e = /* @__PURE__ */ new WeakMap();
	function t(t, n) {
		let r = e.get(t), i;
		return r === void 0 ? (i = new cg(), e.set(t, [i])) : n >= r.length ? (i = new cg(), r.push(i)) : i = r[n], i;
	}
	function n() {
		e = /* @__PURE__ */ new WeakMap();
	}
	return {
		get: t,
		dispose: n
	};
}
function ug() {
	let e = {};
	return { get: function(t) {
		if (e[t.id] !== void 0) return e[t.id];
		let n;
		switch (t.type) {
			case "SunLight":
			case "DirectionalLight":
				n = {
					direction: new Z(),
					color: new mu()
				};
				break;
			case "SpotLight":
				n = {
					position: new Z(),
					direction: new Z(),
					color: new mu(),
					distance: 0,
					coneCos: 0,
					penumbraCos: 0,
					decay: 0
				};
				break;
			case "PointLight":
				n = {
					position: new Z(),
					color: new mu(),
					distance: 0,
					decay: 0
				};
				break;
			case "HemisphereLight":
				n = {
					direction: new Z(),
					skyColor: new mu(),
					groundColor: new mu()
				};
				break;
			case "RectAreaLight": n = {
				color: new mu(),
				position: new Z(),
				halfWidth: new Z(),
				halfHeight: new Z()
			};
		}
		return e[t.id] = n, n;
	} };
}
function dg() {
	let e = {};
	return { get: function(t) {
		if (e[t.id] !== void 0) return e[t.id];
		let n;
		switch (t.type) {
			case "SunLight":
			case "DirectionalLight":
				n = {
					shadowIntensity: 1,
					shadowBias: 0,
					shadowNormalBias: 0,
					shadowRadius: 1,
					shadowMapSize: new X()
				};
				break;
			case "SpotLight":
				n = {
					shadowIntensity: 1,
					shadowBias: 0,
					shadowNormalBias: 0,
					shadowRadius: 1,
					shadowMapSize: new X()
				};
				break;
			case "PointLight": n = {
				shadowIntensity: 1,
				shadowBias: 0,
				shadowNormalBias: 0,
				shadowRadius: 1,
				shadowMapSize: new X(),
				shadowCameraNear: 1,
				shadowCameraFar: 1e3
			};
		}
		return e[t.id] = n, n;
	} };
}
var fg = 0;
function pg(e, t) {
	return (t.castShadow ? 2 : 0) - (e.castShadow ? 2 : 0) + +!!t.map - !!e.map;
}
function mg(e) {
	let t = new ug(), n = dg(), r = {
		version: 0,
		hash: {
			sunLength: -1,
			directionalLength: -1,
			pointLength: -1,
			spotLength: -1,
			rectAreaLength: -1,
			hemiLength: -1,
			numSunShadows: -1,
			numDirectionalShadows: -1,
			numPointShadows: -1,
			numSpotShadows: -1,
			numSpotMaps: -1,
			numLightProbes: -1
		},
		ambient: [
			0,
			0,
			0
		],
		probe: [],
		sun: [],
		sunShadow: [],
		sunShadowMap: [],
		sunShadowMatrix: [],
		sunShadowCascade: [],
		directional: [],
		directionalShadow: [],
		directionalShadowMap: [],
		directionalShadowMatrix: [],
		spot: [],
		spotLightMap: [],
		spotShadow: [],
		spotShadowMap: [],
		spotLightMatrix: [],
		rectArea: [],
		rectAreaLTC1: null,
		rectAreaLTC2: null,
		point: [],
		pointShadow: [],
		pointShadowMap: [],
		pointShadowMatrix: [],
		hemi: [],
		numSpotLightShadowsWithMaps: 0,
		numLightProbes: 0
	};
	for (let e = 0; e < 9; e++) r.probe.push(new Z());
	let i = new Z(), a = new Nl(), o = new Nl();
	function s(i) {
		let a = 0, o = 0, s = 0;
		for (let e = 0; e < 9; e++) r.probe[e].set(0, 0, 0);
		let c = 0, l = 0, u = 0, d = 0, f = 0, p = 0, m = 0, h = 0, g = 0, _ = 0, v = 0, y = 0, b = 0, x = 0;
		i.sort(pg);
		for (let e = 0, S = i.length; e < S; e++) {
			let S = i[e], C = S.color, w = S.intensity, T = S.distance, E = null;
			if (S.shadow && S.shadow.map && (E = S.shadow.map.texture.format === 1030 ? S.shadow.map.texture : S.shadow.map.depthTexture || S.shadow.map.texture), S.isAmbientLight) a += C.r * w, o += C.g * w, s += C.b * w;
			else if (S.isLightProbe) {
				for (let e = 0; e < 9; e++) r.probe[e].addScaledVector(S.sh.coefficients[e], w);
				x++;
			} else if (S.isSunLight) {
				let e = t.get(S);
				if (e.color.copy(S.color).multiplyScalar(S.intensity), S.castShadow) {
					let e = S.shadow, t = n.get(S);
					t.shadowIntensity = e.intensity, t.shadowBias = e.bias, t.shadowNormalBias = e.normalBias, t.shadowRadius = e.radius, t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()), r.sunShadow[l] = t, r.sunShadowMap[l] = E;
					let i = e.getViewportCount();
					for (let t = 0; t < i; t++) r.sunShadowMatrix[u + t] = e.getMatrix(t), r.sunShadowCascade[u + t] = e._cascadeData[t];
					u += i, l++;
				}
				r.sun[c] = e, c++;
			} else if (S.isDirectionalLight) {
				let e = t.get(S);
				if (e.color.copy(S.color).multiplyScalar(S.intensity), S.castShadow) {
					let e = S.shadow, t = n.get(S);
					t.shadowIntensity = e.intensity, t.shadowBias = e.bias, t.shadowNormalBias = e.normalBias, t.shadowRadius = e.radius, t.shadowMapSize = e.mapSize, r.directionalShadow[d] = t, r.directionalShadowMap[d] = E, r.directionalShadowMatrix[d] = S.shadow.matrix, g++;
				}
				r.directional[d] = e, d++;
			} else if (S.isSpotLight) {
				let e = t.get(S);
				e.position.setFromMatrixPosition(S.matrixWorld), e.color.copy(C).multiplyScalar(w), e.distance = T, e.coneCos = Math.cos(S.angle), e.penumbraCos = Math.cos(S.angle * (1 - S.penumbra)), e.decay = S.decay, r.spot[p] = e;
				let i = S.shadow;
				if (S.map && (r.spotLightMap[y] = S.map, y++, i.updateMatrices(S), S.castShadow && b++), r.spotLightMatrix[p] = i.matrix, S.castShadow) {
					let e = n.get(S);
					e.shadowIntensity = i.intensity, e.shadowBias = i.bias, e.shadowNormalBias = i.normalBias, e.shadowRadius = i.radius, e.shadowMapSize = i.mapSize, r.spotShadow[p] = e, r.spotShadowMap[p] = E, v++;
				}
				p++;
			} else if (S.isRectAreaLight) {
				let e = t.get(S);
				e.color.copy(C).multiplyScalar(w), e.halfWidth.set(S.width * .5, 0, 0), e.halfHeight.set(0, S.height * .5, 0), r.rectArea[m] = e, m++;
			} else if (S.isPointLight) {
				let e = t.get(S);
				if (e.color.copy(S.color).multiplyScalar(S.intensity), e.distance = S.distance, e.decay = S.decay, S.castShadow) {
					let e = S.shadow, t = n.get(S);
					t.shadowIntensity = e.intensity, t.shadowBias = e.bias, t.shadowNormalBias = e.normalBias, t.shadowRadius = e.radius, t.shadowMapSize = e.mapSize, t.shadowCameraNear = e.camera.near, t.shadowCameraFar = e.camera.far, r.pointShadow[f] = t, r.pointShadowMap[f] = E, r.pointShadowMatrix[f] = S.shadow.matrix, _++;
				}
				r.point[f] = e, f++;
			} else if (S.isHemisphereLight) {
				let e = t.get(S);
				e.skyColor.copy(S.color).multiplyScalar(w), e.groundColor.copy(S.groundColor).multiplyScalar(w), r.hemi[h] = e, h++;
			}
		}
		m > 0 && (e.has("OES_texture_float_linear") === !0 ? (r.rectAreaLTC1 = $.LTC_FLOAT_1, r.rectAreaLTC2 = $.LTC_FLOAT_2) : (r.rectAreaLTC1 = $.LTC_HALF_1, r.rectAreaLTC2 = $.LTC_HALF_2)), r.ambient[0] = a, r.ambient[1] = o, r.ambient[2] = s;
		let S = r.hash;
		(S.sunLength !== c || S.directionalLength !== d || S.pointLength !== f || S.spotLength !== p || S.rectAreaLength !== m || S.hemiLength !== h || S.numSunShadows !== l || S.numDirectionalShadows !== g || S.numPointShadows !== _ || S.numSpotShadows !== v || S.numSpotMaps !== y || S.numLightProbes !== x) && (r.sun.length = c, r.directional.length = d, r.spot.length = p, r.rectArea.length = m, r.point.length = f, r.hemi.length = h, r.sunShadow.length = l, r.sunShadowMap.length = l, r.sunShadowMatrix.length = u, r.sunShadowCascade.length = u, r.directionalShadow.length = g, r.directionalShadowMap.length = g, r.directionalShadowMatrix.length = g, r.pointShadow.length = _, r.pointShadowMap.length = _, r.pointShadowMatrix.length = _, r.spotShadow.length = v, r.spotShadowMap.length = v, r.spotLightMatrix.length = v + y - b, r.spotLightMap.length = y, r.numSpotLightShadowsWithMaps = b, r.numLightProbes = x, S.sunLength = c, S.directionalLength = d, S.pointLength = f, S.spotLength = p, S.rectAreaLength = m, S.hemiLength = h, S.numSunShadows = l, S.numDirectionalShadows = g, S.numPointShadows = _, S.numSpotShadows = v, S.numSpotMaps = y, S.numLightProbes = x, r.version = fg++);
	}
	function c(e, t) {
		let n = 0, s = 0, c = 0, l = 0, u = 0, d = 0, f = t.matrixWorldInverse;
		for (let t = 0, p = e.length; t < p; t++) {
			let p = e[t];
			if (p.isSunLight) {
				let e = r.sun[n];
				e.direction.setFromMatrixPosition(p.matrixWorld), e.direction.transformDirection(f), n++;
			} else if (p.isDirectionalLight) {
				let e = r.directional[s];
				e.direction.setFromMatrixPosition(p.matrixWorld), i.setFromMatrixPosition(p.target.matrixWorld), e.direction.sub(i), e.direction.transformDirection(f), s++;
			} else if (p.isSpotLight) {
				let e = r.spot[l];
				e.position.setFromMatrixPosition(p.matrixWorld), e.position.applyMatrix4(f), e.direction.setFromMatrixPosition(p.matrixWorld), i.setFromMatrixPosition(p.target.matrixWorld), e.direction.sub(i), e.direction.transformDirection(f), l++;
			} else if (p.isRectAreaLight) {
				let e = r.rectArea[u];
				e.position.setFromMatrixPosition(p.matrixWorld), e.position.applyMatrix4(f), o.identity(), a.copy(p.matrixWorld), a.premultiply(f), o.extractRotation(a), e.halfWidth.set(p.width * .5, 0, 0), e.halfHeight.set(0, p.height * .5, 0), e.halfWidth.applyMatrix4(o), e.halfHeight.applyMatrix4(o), u++;
			} else if (p.isPointLight) {
				let e = r.point[c];
				e.position.setFromMatrixPosition(p.matrixWorld), e.position.applyMatrix4(f), c++;
			} else if (p.isHemisphereLight) {
				let e = r.hemi[d];
				e.direction.setFromMatrixPosition(p.matrixWorld), e.direction.transformDirection(f), d++;
			}
		}
	}
	return {
		setup: s,
		setupView: c,
		state: r
	};
}
function hg(e) {
	let t = new mg(e), n = [], r = [], i = [];
	function a(e) {
		u.camera = e, n.length = 0, r.length = 0, i.length = 0;
	}
	function o(e) {
		e.isLightProbeGrid ? i.push(e) : n.push(e);
	}
	function s(e) {
		r.push(e);
	}
	function c() {
		t.setup(n), i.sort((e, t) => e.priority - t.priority || e.id - t.id);
	}
	function l(e) {
		t.setupView(n, e);
	}
	let u = {
		lightsArray: n,
		shadowsArray: r,
		lightProbeGridArray: i,
		camera: null,
		lights: t,
		transmissionRenderTarget: {},
		textureUnits: 0
	};
	return {
		init: a,
		state: u,
		setupLights: c,
		setupLightsView: l,
		pushLight: o,
		pushShadow: s
	};
}
function gg(e) {
	let t = /* @__PURE__ */ new WeakMap();
	function n(n, r = 0) {
		let i = t.get(n), a;
		return i === void 0 ? (a = new hg(e), t.set(n, [a])) : r >= i.length ? (a = new hg(e), i.push(a)) : a = i[r], a;
	}
	function r() {
		t = /* @__PURE__ */ new WeakMap();
	}
	return {
		get: n,
		dispose: r
	};
}
var _g = "void main() {\n	gl_Position = vec4( position, 1.0 );\n}", vg = "uniform sampler2D shadow_pass;\nuniform vec2 resolution;\nuniform float radius;\nvoid main() {\n	const float samples = float( VSM_SAMPLES );\n	float mean = 0.0;\n	float squared_mean = 0.0;\n	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );\n	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;\n	for ( float i = 0.0; i < samples; i ++ ) {\n		float uvOffset = uvStart + i * uvStride;\n		#ifdef HORIZONTAL_PASS\n			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;\n			mean += distribution.x;\n			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;\n		#else\n			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;\n			mean += depth;\n			squared_mean += depth * depth;\n		#endif\n	}\n	mean = mean / samples;\n	squared_mean = squared_mean / samples;\n	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );\n	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );\n}", yg = [
	/*@__PURE__*/ new Z(1, 0, 0),
	/*@__PURE__*/ new Z(-1, 0, 0),
	/*@__PURE__*/ new Z(0, 1, 0),
	/*@__PURE__*/ new Z(0, -1, 0),
	/*@__PURE__*/ new Z(0, 0, 1),
	/*@__PURE__*/ new Z(0, 0, -1)
], bg = [
	/*@__PURE__*/ new Z(0, -1, 0),
	/*@__PURE__*/ new Z(0, -1, 0),
	/*@__PURE__*/ new Z(0, 0, 1),
	/*@__PURE__*/ new Z(0, 0, -1),
	/*@__PURE__*/ new Z(0, -1, 0),
	/*@__PURE__*/ new Z(0, -1, 0)
], xg = /*@__PURE__*/ new Nl(), Sg = /*@__PURE__*/ new Z(), Cg = /*@__PURE__*/ new Z();
function wg(e, t, n) {
	let r = new Vd(), i = new X(), a = new X(), o = new Ol(), s = new Cf(), c = new wf(), l = {}, u = n.maxTextureSize, d = {
		0: 1,
		1: 0,
		2: 2
	}, f = new bf({
		defines: { VSM_SAMPLES: 8 },
		uniforms: {
			shadow_pass: { value: null },
			resolution: { value: new X() },
			radius: { value: 4 }
		},
		vertexShader: _g,
		fragmentShader: vg
	}), p = f.clone();
	p.defines.HORIZONTAL_PASS = 1;
	let m = new ud();
	m.setAttribute("position", new Yu(new Float32Array([
		-1,
		-1,
		.5,
		3,
		-1,
		.5,
		-1,
		3,
		.5
	]), 3));
	let h = new Pd(m, f), g = this;
	this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = 1;
	let _ = this.type;
	this.render = function(t, n, s) {
		if (g.enabled === !1 || g.autoUpdate === !1 && g.needsUpdate === !1 || t.length === 0) return;
		this.type === 2 && (J("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."), this.type = 1);
		let c = e.getRenderTarget(), l = e.getActiveCubeFace(), d = e.getActiveMipmapLevel(), f = e.state;
		f.setBlending(0), f.buffers.depth.getReversed() === !0 ? f.buffers.color.setClear(0, 0, 0, 0) : f.buffers.color.setClear(1, 1, 1, 1), f.buffers.depth.setTest(!0), f.setScissorTest(!1);
		let p = _ !== this.type;
		p && n.traverse(function(e) {
			e.material && (Array.isArray(e.material) ? e.material.forEach((e) => e.needsUpdate = !0) : e.material.needsUpdate = !0);
		});
		for (let c = 0, l = t.length; c < l; c++) {
			let l = t[c], d = l.shadow;
			if (d === void 0) {
				J("WebGLShadowMap:", l, "has no shadow.");
				continue;
			}
			if (d.autoUpdate === !1 && d.needsUpdate === !1) continue;
			i.copy(d.mapSize);
			let m = d.getFrameExtents();
			i.multiply(m), a.copy(d.mapSize), (i.x > u || i.y > u) && (i.x > u && (a.x = Math.floor(u / m.x), i.x = a.x * m.x, d.mapSize.x = a.x), i.y > u && (a.y = Math.floor(u / m.y), i.y = a.y * m.y, d.mapSize.y = a.y));
			let h = e.state.buffers.depth.getReversed();
			if (d.camera._reversedDepth = h, d.map === null || p === !0) {
				if (d.map !== null && (d.map.depthTexture !== null && (d.map.depthTexture.dispose(), d.map.depthTexture = null), d.map.dispose()), this.type === 3) {
					if (l.isPointLight) {
						J("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");
						continue;
					}
					d.map = new Al(i.x, i.y, {
						format: Ts,
						type: fs,
						minFilter: ns,
						magFilter: ns,
						generateMipmaps: !1
					}), d.map.texture.name = l.name + ".shadowMap", d.map.depthTexture = new af(i.x, i.y, ds), d.map.depthTexture.name = l.name + ".shadowMapDepth", d.map.depthTexture.format = xs, d.map.depthTexture.compareFunction = null, d.map.depthTexture.minFilter = $o, d.map.depthTexture.magFilter = $o;
				} else l.isPointLight ? (d.map = new Vp(i.x), d.map.depthTexture = new of(i.x, us)) : (d.map = new Al(i.x, i.y), d.map.depthTexture = new af(i.x, i.y, us)), d.map.depthTexture.name = l.name + ".shadowMap", d.map.depthTexture.format = xs, this.type === 1 ? (d.map.depthTexture.compareFunction = h ? 518 : 515, d.map.depthTexture.minFilter = ns, d.map.depthTexture.magFilter = ns) : (d.map.depthTexture.compareFunction = null, d.map.depthTexture.minFilter = $o, d.map.depthTexture.magFilter = $o);
				d.camera.updateProjectionMatrix();
			}
			d.map.isWebGLCubeRenderTarget !== !0 && (d.map.width !== i.x || d.map.height !== i.y) && d.map.setSize(i.x, i.y);
			let g = d.map.isWebGLCubeRenderTarget ? 6 : d.getViewportCount();
			l.isPointLight !== !0 && d.updateMatrices(l, s);
			let _ = d.camera.layers.mask & 4294967294 ? d.camera.layers : s.layers;
			for (let t = 0; t < g; t++) {
				let i = d.getCamera(t);
				if (l.isPointLight) {
					let e = d.camera, n = d.matrix, r = l.distance || e.far;
					r !== e.far && (e.far = r, e.updateProjectionMatrix()), Sg.setFromMatrixPosition(l.matrixWorld), e.position.copy(Sg), Cg.copy(e.position), Cg.add(yg[t]), e.up.copy(bg[t]), e.lookAt(Cg), e.updateMatrixWorld(), n.makeTranslation(-Sg.x, -Sg.y, -Sg.z), xg.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse), d._frustum.setFromProjectionMatrix(xg, e.coordinateSystem, e.reversedDepth);
				}
				if (d.map.isWebGLCubeRenderTarget) e.setRenderTarget(d.map, t), e.clear();
				else {
					t === 0 && (e.setRenderTarget(d.map), e.clear());
					let n = d.getViewport(t);
					o.set(a.x * n.x, a.y * n.y, a.x * n.z, a.y * n.w), f.viewport(o);
				}
				r = d.getFrustum(t), b(n, s, i, l, _, this.type);
			}
			d.isPointLightShadow !== !0 && this.type === 3 && v(d, s), d.needsUpdate = !1;
		}
		_ = this.type, g.needsUpdate = !1, e.setRenderTarget(c, l, d);
	};
	function v(n, r) {
		let a = t.update(h);
		f.defines.VSM_SAMPLES !== n.blurSamples && (f.defines.VSM_SAMPLES = n.blurSamples, p.defines.VSM_SAMPLES = n.blurSamples, f.needsUpdate = !0, p.needsUpdate = !0), n.mapPass === null ? n.mapPass = new Al(i.x, i.y, {
			format: Ts,
			type: fs
		}) : (n.mapPass.width !== n.map.width || n.mapPass.height !== n.map.height) && n.mapPass.setSize(n.map.width, n.map.height), f.uniforms.shadow_pass.value = n.map.depthTexture, f.uniforms.resolution.value.set(n.map.width, n.map.height), f.uniforms.radius.value = n.radius, e.setRenderTarget(n.mapPass), e.clear(), e.renderBufferDirect(r, null, a, f, h, null), p.uniforms.shadow_pass.value = n.mapPass.texture, p.uniforms.resolution.value.set(n.map.width, n.map.height), p.uniforms.radius.value = n.radius, e.setRenderTarget(n.map), e.clear(), e.renderBufferDirect(r, null, a, p, h, null);
	}
	function y(t, n, r, i) {
		let a = null, o = r.isPointLight === !0 ? t.customDistanceMaterial : t.customDepthMaterial;
		if (o !== void 0) a = o;
		else if (a = r.isPointLight === !0 ? c : s, e.localClippingEnabled && n.clipShadows === !0 && Array.isArray(n.clippingPlanes) && n.clippingPlanes.length !== 0 || n.displacementMap && n.displacementScale !== 0 || n.alphaMap && n.alphaTest > 0 || n.map && n.alphaTest > 0 || n.alphaToCoverage === !0) {
			let e = a.uuid, t = n.uuid, r = l[e];
			r === void 0 && (r = {}, l[e] = r);
			let i = r[t];
			i === void 0 && (i = a.clone(), r[t] = i, n.addEventListener("dispose", x)), a = i;
		}
		if (a.visible = n.visible, a.wireframe = n.wireframe, i === 3 ? a.side = n.shadowSide === null ? n.side : n.shadowSide : a.side = n.shadowSide === null ? d[n.side] : n.shadowSide, a.alphaMap = n.alphaMap, a.alphaTest = n.alphaToCoverage === !0 ? .5 : n.alphaTest, a.map = n.map, a.clipShadows = n.clipShadows, a.clippingPlanes = n.clippingPlanes, a.clipIntersection = n.clipIntersection, a.displacementMap = n.displacementMap, a.displacementScale = n.displacementScale, a.displacementBias = n.displacementBias, a.wireframeLinewidth = n.wireframeLinewidth, a.linewidth = n.linewidth, r.isPointLight === !0 && a.isMeshDistanceMaterial === !0) {
			let t = e.properties.get(a);
			t.light = r;
		}
		return a;
	}
	function b(n, i, a, o, s, c) {
		if (n.visible === !1) return;
		if (n.layers.test(s) && (n.isMesh || n.isLine || n.isPoints) && (n.castShadow || n.receiveShadow && c === 3) && (!n.frustumCulled || n.intersectsFrustum(r))) {
			n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse, n.matrixWorld);
			let r = t.update(n), s = n.material;
			if (Array.isArray(s)) {
				let t = r.groups;
				for (let l = 0, u = t.length; l < u; l++) {
					let u = t[l], d = s[u.materialIndex];
					if (d && d.visible) {
						let t = y(n, d, o, c);
						n.onBeforeShadow(e, n, i, a, r, t, u), e.renderBufferDirect(a, null, r, t, n, u), n.onAfterShadow(e, n, i, a, r, t, u);
					}
				}
			} else if (s.visible) {
				let t = y(n, s, o, c);
				n.onBeforeShadow(e, n, i, a, r, t, null), e.renderBufferDirect(a, null, r, t, n, null), n.onAfterShadow(e, n, i, a, r, t, null);
			}
		}
		let l = n.children;
		for (let e = 0, t = l.length; e < t; e++) b(l[e], i, a, o, s, c);
	}
	function x(e) {
		e.target.removeEventListener("dispose", x);
		for (let t in l) {
			let n = l[t], r = e.target.uuid;
			r in n && (n[r].dispose(), delete n[r]);
		}
	}
}
function Tg(e, t) {
	function n() {
		let t = !1, n = new Ol(), r = null, i = new Ol(0, 0, 0, 0);
		return {
			setMask: function(n) {
				r !== n && !t && (e.colorMask(n, n, n, n), r = n);
			},
			setLocked: function(e) {
				t = e;
			},
			setClear: function(t, r, a, o, s) {
				s === !0 && (t *= o, r *= o, a *= o), n.set(t, r, a, o), i.equals(n) === !1 && (e.clearColor(t, r, a, o), i.copy(n));
			},
			reset: function() {
				t = !1, r = null, i.set(-1, 0, 0, 0);
			}
		};
	}
	function r() {
		let n = !1, r = !1, i = null, a = null, o = null;
		return {
			setReversed: function(e) {
				if (r !== e) {
					let n = t.get("EXT_clip_control");
					e ? n.clipControlEXT(n.LOWER_LEFT_EXT, n.ZERO_TO_ONE_EXT) : n.clipControlEXT(n.LOWER_LEFT_EXT, n.NEGATIVE_ONE_TO_ONE_EXT), r = e;
					let i = o;
					o = null, this.setClear(i);
				}
			},
			getReversed: function() {
				return r;
			},
			setTest: function(t) {
				t ? ne(e.DEPTH_TEST) : re(e.DEPTH_TEST);
			},
			setMask: function(t) {
				i !== t && !n && (e.depthMask(t), i = t);
			},
			setFunc: function(t) {
				if (r && (t = Pc[t]), a !== t) {
					switch (t) {
						case 0:
							e.depthFunc(e.NEVER);
							break;
						case 1:
							e.depthFunc(e.ALWAYS);
							break;
						case 2:
							e.depthFunc(e.LESS);
							break;
						case 3:
							e.depthFunc(e.LEQUAL);
							break;
						case 4:
							e.depthFunc(e.EQUAL);
							break;
						case 5:
							e.depthFunc(e.GEQUAL);
							break;
						case 6:
							e.depthFunc(e.GREATER);
							break;
						case 7:
							e.depthFunc(e.NOTEQUAL);
							break;
						default: e.depthFunc(e.LEQUAL);
					}
					a = t;
				}
			},
			setLocked: function(e) {
				n = e;
			},
			setClear: function(t) {
				o !== t && (o = t, r && (t = 1 - t), e.clearDepth(t));
			},
			reset: function() {
				n = !1, i = null, a = null, o = null, r = !1;
			}
		};
	}
	function i() {
		let t = !1, n = null, r = null, i = null, a = null, o = null, s = null, c = null, l = null;
		return {
			setTest: function(n) {
				t || (n ? ne(e.STENCIL_TEST) : re(e.STENCIL_TEST));
			},
			setMask: function(r) {
				n !== r && !t && (e.stencilMask(r), n = r);
			},
			setFunc: function(t, n, o) {
				(r !== t || i !== n || a !== o) && (e.stencilFunc(t, n, o), r = t, i = n, a = o);
			},
			setOp: function(t, n, r) {
				(o !== t || s !== n || c !== r) && (e.stencilOp(t, n, r), o = t, s = n, c = r);
			},
			setLocked: function(e) {
				t = e;
			},
			setClear: function(t) {
				l !== t && (e.clearStencil(t), l = t);
			},
			reset: function() {
				t = !1, n = null, r = null, i = null, a = null, o = null, s = null, c = null, l = null;
			}
		};
	}
	let a = new n(), o = new r(), s = new i(), c = {}, l = /* @__PURE__ */ new WeakMap(), u = {}, d = {}, f = {}, p = /* @__PURE__ */ new WeakMap(), m = [], h = null, g = !1, _ = null, v = null, y = null, b = null, x = null, S = null, C = null, w = new mu(0, 0, 0), T = 0, E = !1, D = null, O = null, k = null, A = null, j = null, M = e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS), N = !1, P = 0, ee = e.getParameter(e.VERSION);
	ee.indexOf("WebGL") === -1 ? ee.indexOf("OpenGL ES") !== -1 && (P = parseFloat(/^OpenGL ES (\d)/.exec(ee)[1]), N = P >= 2) : (P = parseFloat(/^WebGL (\d)/.exec(ee)[1]), N = P >= 1);
	let F = null, te = {}, I = e.getParameter(e.SCISSOR_BOX), L = e.getParameter(e.VIEWPORT), R = new Ol().fromArray(I), z = new Ol().fromArray(L);
	function B(t, n, r, i) {
		let a = /* @__PURE__ */ new Uint8Array(4), o = e.createTexture();
		e.bindTexture(t, o), e.texParameteri(t, e.TEXTURE_MIN_FILTER, e.NEAREST), e.texParameteri(t, e.TEXTURE_MAG_FILTER, e.NEAREST);
		for (let o = 0; o < r; o++) t === e.TEXTURE_3D || t === e.TEXTURE_2D_ARRAY ? e.texImage3D(n, 0, e.RGBA, 1, 1, i, 0, e.RGBA, e.UNSIGNED_BYTE, a) : e.texImage2D(n + o, 0, e.RGBA, 1, 1, 0, e.RGBA, e.UNSIGNED_BYTE, a);
		return o;
	}
	let V = {};
	V[e.TEXTURE_2D] = B(e.TEXTURE_2D, e.TEXTURE_2D, 1), V[e.TEXTURE_CUBE_MAP] = B(e.TEXTURE_CUBE_MAP, e.TEXTURE_CUBE_MAP_POSITIVE_X, 6), V[e.TEXTURE_2D_ARRAY] = B(e.TEXTURE_2D_ARRAY, e.TEXTURE_2D_ARRAY, 1, 1), V[e.TEXTURE_3D] = B(e.TEXTURE_3D, e.TEXTURE_3D, 1, 1), a.setClear(0, 0, 0, 1), o.setClear(1), s.setClear(0), ne(e.DEPTH_TEST), o.setFunc(3), de(!1), fe(1), ne(e.CULL_FACE), le(0);
	function ne(t) {
		u[t] !== !0 && (e.enable(t), u[t] = !0);
	}
	function re(t) {
		u[t] !== !1 && (e.disable(t), u[t] = !1);
	}
	function ie(t, n) {
		return f[t] !== n && (e.bindFramebuffer(t, n), f[t] = n, t === e.DRAW_FRAMEBUFFER && (f[e.FRAMEBUFFER] = n), t === e.FRAMEBUFFER && (f[e.DRAW_FRAMEBUFFER] = n), !0);
	}
	function ae(t, n) {
		let r = m, i = !1;
		if (t) {
			r = p.get(n), r === void 0 && (r = [], p.set(n, r));
			let a = t.textures;
			if (r.length !== a.length || r[0] !== e.COLOR_ATTACHMENT0) {
				for (let t = 0, n = a.length; t < n; t++) r[t] = e.COLOR_ATTACHMENT0 + t;
				r.length = a.length, i = !0;
			}
		} else r[0] !== e.BACK && (r[0] = e.BACK, i = !0);
		i && e.drawBuffers(r);
	}
	function oe(t) {
		return h !== t && (e.useProgram(t), h = t, !0);
	}
	let se = {
		100: e.FUNC_ADD,
		101: e.FUNC_SUBTRACT,
		102: e.FUNC_REVERSE_SUBTRACT
	};
	se[103] = e.MIN, se[104] = e.MAX;
	let ce = {
		200: e.ZERO,
		201: e.ONE,
		202: e.SRC_COLOR,
		204: e.SRC_ALPHA,
		210: e.SRC_ALPHA_SATURATE,
		208: e.DST_COLOR,
		206: e.DST_ALPHA,
		203: e.ONE_MINUS_SRC_COLOR,
		205: e.ONE_MINUS_SRC_ALPHA,
		209: e.ONE_MINUS_DST_COLOR,
		207: e.ONE_MINUS_DST_ALPHA,
		211: e.CONSTANT_COLOR,
		212: e.ONE_MINUS_CONSTANT_COLOR,
		213: e.CONSTANT_ALPHA,
		214: e.ONE_MINUS_CONSTANT_ALPHA
	};
	function le(t, n, r, i, a, o, s, c, l, u) {
		if (t === 0) g === !0 && (re(e.BLEND), g = !1);
		else if (g === !1 && (ne(e.BLEND), g = !0), t !== 5) {
			if (t !== _ || u !== E) {
				if ((v !== 100 || x !== 100) && (e.blendEquation(e.FUNC_ADD), v = 100, x = 100), u) switch (t) {
					case 1:
						e.blendFuncSeparate(e.ONE, e.ONE_MINUS_SRC_ALPHA, e.ONE, e.ONE_MINUS_SRC_ALPHA);
						break;
					case 2:
						e.blendFunc(e.ONE, e.ONE);
						break;
					case 3:
						e.blendFuncSeparate(e.ZERO, e.ONE_MINUS_SRC_COLOR, e.ZERO, e.ONE);
						break;
					case 4:
						e.blendFuncSeparate(e.DST_COLOR, e.ONE_MINUS_SRC_ALPHA, e.ZERO, e.ONE);
						break;
					default: Y("WebGLState: Invalid blending: ", t);
				}
				else switch (t) {
					case 1:
						e.blendFuncSeparate(e.SRC_ALPHA, e.ONE_MINUS_SRC_ALPHA, e.ONE, e.ONE_MINUS_SRC_ALPHA);
						break;
					case 2:
						e.blendFuncSeparate(e.SRC_ALPHA, e.ONE, e.ONE, e.ONE);
						break;
					case 3:
						Y("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");
						break;
					case 4:
						Y("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");
						break;
					default: Y("WebGLState: Invalid blending: ", t);
				}
				y = null, b = null, S = null, C = null, w.set(0, 0, 0), T = 0, _ = t, E = u;
			}
		} else a ||= n, o ||= r, s ||= i, (n !== v || a !== x) && (e.blendEquationSeparate(se[n], se[a]), v = n, x = a), (r !== y || i !== b || o !== S || s !== C) && (e.blendFuncSeparate(ce[r], ce[i], ce[o], ce[s]), y = r, b = i, S = o, C = s), (c.equals(w) === !1 || l !== T) && (e.blendColor(c.r, c.g, c.b, l), w.copy(c), T = l), _ = t, E = !1;
	}
	function ue(t, n) {
		t.side === 2 ? re(e.CULL_FACE) : ne(e.CULL_FACE);
		let r = t.side === 1;
		n && (r = !r), de(r), t.blending === 1 && t.transparent === !1 ? le(0) : le(t.blending, t.blendEquation, t.blendSrc, t.blendDst, t.blendEquationAlpha, t.blendSrcAlpha, t.blendDstAlpha, t.blendColor, t.blendAlpha, t.premultipliedAlpha), o.setFunc(t.depthFunc), o.setTest(t.depthTest), o.setMask(t.depthWrite), a.setMask(t.colorWrite);
		let i = t.stencilWrite;
		s.setTest(i), i && (s.setMask(t.stencilWriteMask), s.setFunc(t.stencilFunc, t.stencilRef, t.stencilFuncMask), s.setOp(t.stencilFail, t.stencilZFail, t.stencilZPass)), me(t.polygonOffset, t.polygonOffsetFactor, t.polygonOffsetUnits), t.alphaToCoverage === !0 ? ne(e.SAMPLE_ALPHA_TO_COVERAGE) : re(e.SAMPLE_ALPHA_TO_COVERAGE);
	}
	function de(t) {
		D !== t && (t ? e.frontFace(e.CW) : e.frontFace(e.CCW), D = t);
	}
	function fe(t) {
		t === 0 ? re(e.CULL_FACE) : (ne(e.CULL_FACE), t !== O && (t === 1 ? e.cullFace(e.BACK) : t === 2 ? e.cullFace(e.FRONT) : e.cullFace(e.FRONT_AND_BACK))), O = t;
	}
	function pe(t) {
		t !== k && (N && e.lineWidth(t), k = t);
	}
	function me(t, n, r) {
		t ? (ne(e.POLYGON_OFFSET_FILL), (A !== n || j !== r) && (A = n, j = r, o.getReversed() && (n = -n, r = -r), e.polygonOffset(n, r))) : re(e.POLYGON_OFFSET_FILL);
	}
	function he(t) {
		t ? ne(e.SCISSOR_TEST) : re(e.SCISSOR_TEST);
	}
	function ge(t) {
		t === void 0 && (t = e.TEXTURE0 + M - 1), F !== t && (e.activeTexture(t), F = t);
	}
	function H(t, n, r) {
		r === void 0 && (r = F === null ? e.TEXTURE0 + M - 1 : F);
		let i = te[r];
		i === void 0 && (i = {
			type: void 0,
			texture: void 0
		}, te[r] = i), (i.type !== t || i.texture !== n) && (F !== r && (e.activeTexture(r), F = r), e.bindTexture(t, n || V[t]), i.type = t, i.texture = n);
	}
	function U() {
		let t = te[F];
		t !== void 0 && t.type !== void 0 && (e.bindTexture(t.type, null), t.type = void 0, t.texture = void 0);
	}
	function W() {
		try {
			e.compressedTexImage2D(...arguments);
		} catch (e) {
			Y("WebGLState:", e);
		}
	}
	function _e() {
		try {
			e.compressedTexImage3D(...arguments);
		} catch (e) {
			Y("WebGLState:", e);
		}
	}
	function G() {
		try {
			e.texSubImage2D(...arguments);
		} catch (e) {
			Y("WebGLState:", e);
		}
	}
	function ve() {
		try {
			e.texSubImage3D(...arguments);
		} catch (e) {
			Y("WebGLState:", e);
		}
	}
	function K() {
		try {
			e.compressedTexSubImage2D(...arguments);
		} catch (e) {
			Y("WebGLState:", e);
		}
	}
	function q() {
		try {
			e.compressedTexSubImage3D(...arguments);
		} catch (e) {
			Y("WebGLState:", e);
		}
	}
	function ye() {
		try {
			e.texStorage2D(...arguments);
		} catch (e) {
			Y("WebGLState:", e);
		}
	}
	function be() {
		try {
			e.texStorage3D(...arguments);
		} catch (e) {
			Y("WebGLState:", e);
		}
	}
	function xe() {
		try {
			e.texImage2D(...arguments);
		} catch (e) {
			Y("WebGLState:", e);
		}
	}
	function Se() {
		try {
			e.texImage3D(...arguments);
		} catch (e) {
			Y("WebGLState:", e);
		}
	}
	function Ce(t) {
		return d[t] === void 0 ? e.getParameter(t) : d[t];
	}
	function we(t, n) {
		d[t] !== n && (e.pixelStorei(t, n), d[t] = n);
	}
	function Te(t) {
		R.equals(t) === !1 && (e.scissor(t.x, t.y, t.z, t.w), R.copy(t));
	}
	function Ee(t) {
		z.equals(t) === !1 && (e.viewport(t.x, t.y, t.z, t.w), z.copy(t));
	}
	function De(t, n) {
		let r = l.get(n);
		r === void 0 && (r = /* @__PURE__ */ new WeakMap(), l.set(n, r));
		let i = r.get(t);
		i === void 0 && (i = e.getUniformBlockIndex(n, t.name), e.uniformBlockBinding(n, i, i), r.set(t, i));
	}
	function Oe(t, n, r) {
		let i = l.get(n).get(t);
		c[i] !== r && (e.bindBufferBase(e.UNIFORM_BUFFER, i, r), c[i] = r);
	}
	function ke() {
		e.disable(e.BLEND), e.disable(e.CULL_FACE), e.disable(e.DEPTH_TEST), e.disable(e.POLYGON_OFFSET_FILL), e.disable(e.SCISSOR_TEST), e.disable(e.STENCIL_TEST), e.disable(e.SAMPLE_ALPHA_TO_COVERAGE), e.blendEquation(e.FUNC_ADD), e.blendFunc(e.ONE, e.ZERO), e.blendFuncSeparate(e.ONE, e.ZERO, e.ONE, e.ZERO), e.blendColor(0, 0, 0, 0), e.colorMask(!0, !0, !0, !0), e.clearColor(0, 0, 0, 0), e.depthMask(!0), e.depthFunc(e.LESS), o.setReversed(!1), e.clearDepth(1), e.stencilMask(4294967295), e.stencilFunc(e.ALWAYS, 0, 4294967295), e.stencilOp(e.KEEP, e.KEEP, e.KEEP), e.clearStencil(0), e.cullFace(e.BACK), e.frontFace(e.CCW), e.polygonOffset(0, 0), e.activeTexture(e.TEXTURE0), e.bindFramebuffer(e.FRAMEBUFFER, null), e.bindFramebuffer(e.DRAW_FRAMEBUFFER, null), e.bindFramebuffer(e.READ_FRAMEBUFFER, null), e.useProgram(null), e.lineWidth(1), e.scissor(0, 0, e.canvas.width, e.canvas.height), e.viewport(0, 0, e.canvas.width, e.canvas.height), e.pixelStorei(e.PACK_ALIGNMENT, 4), e.pixelStorei(e.UNPACK_ALIGNMENT, 4), e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL, !1), e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !1), e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL, e.BROWSER_DEFAULT_WEBGL), e.pixelStorei(e.PACK_ROW_LENGTH, 0), e.pixelStorei(e.PACK_SKIP_PIXELS, 0), e.pixelStorei(e.PACK_SKIP_ROWS, 0), e.pixelStorei(e.UNPACK_ROW_LENGTH, 0), e.pixelStorei(e.UNPACK_IMAGE_HEIGHT, 0), e.pixelStorei(e.UNPACK_SKIP_PIXELS, 0), e.pixelStorei(e.UNPACK_SKIP_ROWS, 0), e.pixelStorei(e.UNPACK_SKIP_IMAGES, 0), u = {}, d = {}, F = null, te = {}, f = {}, c = {}, p = /* @__PURE__ */ new WeakMap(), m = [], h = null, g = !1, _ = null, v = null, y = null, b = null, x = null, S = null, C = null, w = new mu(0, 0, 0), T = 0, E = !1, D = null, O = null, k = null, A = null, j = null, R.set(0, 0, e.canvas.width, e.canvas.height), z.set(0, 0, e.canvas.width, e.canvas.height), a.reset(), o.reset(), s.reset();
	}
	return {
		buffers: {
			color: a,
			depth: o,
			stencil: s
		},
		enable: ne,
		disable: re,
		bindFramebuffer: ie,
		drawBuffers: ae,
		useProgram: oe,
		setBlending: le,
		setMaterial: ue,
		setFlipSided: de,
		setCullFace: fe,
		setLineWidth: pe,
		setPolygonOffset: me,
		setScissorTest: he,
		activeTexture: ge,
		bindTexture: H,
		unbindTexture: U,
		compressedTexImage2D: W,
		compressedTexImage3D: _e,
		texImage2D: xe,
		texImage3D: Se,
		pixelStorei: we,
		getParameter: Ce,
		updateUBOMapping: De,
		uniformBlockBinding: Oe,
		texStorage2D: ye,
		texStorage3D: be,
		texSubImage2D: G,
		texSubImage3D: ve,
		compressedTexSubImage2D: K,
		compressedTexSubImage3D: q,
		scissor: Te,
		viewport: Ee,
		reset: ke
	};
}
function Eg(e, t, n, r, i, a, o) {
	let s = t.has("WEBGL_multisampled_render_to_texture") ? t.get("WEBGL_multisampled_render_to_texture") : null, c = typeof navigator > "u" ? !1 : /OculusBrowser/g.test(navigator.userAgent), l = new X(), u = /* @__PURE__ */ new WeakMap(), d = /* @__PURE__ */ new Set(), f, p = /* @__PURE__ */ new WeakMap(), m = /* @__PURE__ */ new Set(), h = new FinalizationRegistry((e) => m.delete(e)), g = !1;
	try {
		g = typeof OffscreenCanvas < "u" && new OffscreenCanvas(1, 1).getContext("2d") !== null;
	} catch {}
	function _(e, t) {
		return g ? new OffscreenCanvas(e, t) : Dc("canvas");
	}
	function v(e, t, n) {
		let r = 1, i = ye(e);
		if ((i.width > n || i.height > n) && (r = n / Math.max(i.width, i.height)), r < 1) {
			if (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && e instanceof ImageBitmap || typeof VideoFrame < "u" && e instanceof VideoFrame) {
				let n = Math.floor(r * i.width), a = Math.floor(r * i.height);
				f === void 0 && (f = _(n, a));
				let o = t ? _(n, a) : f;
				return o.width = n, o.height = a, o.getContext("2d").drawImage(e, 0, 0, n, a), J("WebGLRenderer: Texture has been resized from (" + i.width + "x" + i.height + ") to (" + n + "x" + a + ")."), o;
			}
			return "data" in e && J("WebGLRenderer: Image in DataTexture is too big (" + i.width + "x" + i.height + ")."), e;
		}
		return e;
	}
	function y(e) {
		return e.generateMipmaps;
	}
	function b(t) {
		e.generateMipmap(t);
	}
	function x(t) {
		return t.isWebGLCubeRenderTarget ? e.TEXTURE_CUBE_MAP : t.isWebGL3DRenderTarget ? e.TEXTURE_3D : t.isWebGLArrayRenderTarget || t.isCompressedArrayTexture ? e.TEXTURE_2D_ARRAY : e.TEXTURE_2D;
	}
	function S(n, r, i, a, o, s = !1) {
		if (n !== null) {
			if (e[n] !== void 0) return e[n];
			J("WebGLRenderer: Attempt to use non-existing WebGL internal format '" + n + "'");
		}
		let c;
		a && (c = t.get("EXT_texture_norm16"), c || J("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));
		let l = r;
		if (r === e.RED && (i === e.FLOAT && (l = e.R32F), i === e.HALF_FLOAT && (l = e.R16F), i === e.UNSIGNED_BYTE && (l = e.R8), i === e.UNSIGNED_SHORT && c && (l = c.R16_EXT), i === e.SHORT && c && (l = c.R16_SNORM_EXT)), r === e.RED_INTEGER && (i === e.UNSIGNED_BYTE && (l = e.R8UI), i === e.UNSIGNED_SHORT && (l = e.R16UI), i === e.UNSIGNED_INT && (l = e.R32UI), i === e.BYTE && (l = e.R8I), i === e.SHORT && (l = e.R16I), i === e.INT && (l = e.R32I)), r === e.RG && (i === e.FLOAT && (l = e.RG32F), i === e.HALF_FLOAT && (l = e.RG16F), i === e.UNSIGNED_BYTE && (l = e.RG8), i === e.UNSIGNED_SHORT && c && (l = c.RG16_EXT), i === e.SHORT && c && (l = c.RG16_SNORM_EXT)), r === e.RG_INTEGER && (i === e.UNSIGNED_BYTE && (l = e.RG8UI), i === e.UNSIGNED_SHORT && (l = e.RG16UI), i === e.UNSIGNED_INT && (l = e.RG32UI), i === e.BYTE && (l = e.RG8I), i === e.SHORT && (l = e.RG16I), i === e.INT && (l = e.RG32I)), r === e.RGB_INTEGER && (i === e.UNSIGNED_BYTE && (l = e.RGB8UI), i === e.UNSIGNED_SHORT && (l = e.RGB16UI), i === e.UNSIGNED_INT && (l = e.RGB32UI), i === e.BYTE && (l = e.RGB8I), i === e.SHORT && (l = e.RGB16I), i === e.INT && (l = e.RGB32I)), r === e.RGBA_INTEGER && (i === e.UNSIGNED_BYTE && (l = e.RGBA8UI), i === e.UNSIGNED_SHORT && (l = e.RGBA16UI), i === e.UNSIGNED_INT && (l = e.RGBA32UI), i === e.BYTE && (l = e.RGBA8I), i === e.SHORT && (l = e.RGBA16I), i === e.INT && (l = e.RGBA32I)), r === e.RGB && (i === e.UNSIGNED_SHORT && c && (l = c.RGB16_EXT), i === e.SHORT && c && (l = c.RGB16_SNORM_EXT), i === e.UNSIGNED_INT_5_9_9_9_REV && (l = e.RGB9_E5), i === e.UNSIGNED_INT_10F_11F_11F_REV && (l = e.R11F_G11F_B10F)), r === e.RGBA) {
			let t = s ? bc : _l.getTransfer(o);
			i === e.FLOAT && (l = e.RGBA32F), i === e.HALF_FLOAT && (l = e.RGBA16F), i === e.UNSIGNED_BYTE && (l = t === "srgb" ? e.SRGB8_ALPHA8 : e.RGBA8), i === e.UNSIGNED_SHORT && c && (l = c.RGBA16_EXT), i === e.SHORT && c && (l = c.RGBA16_SNORM_EXT), i === e.UNSIGNED_SHORT_4_4_4_4 && (l = e.RGBA4), i === e.UNSIGNED_SHORT_5_5_5_1 && (l = e.RGB5_A1);
		}
		return (l === e.R16F || l === e.R32F || l === e.RG16F || l === e.RG32F || l === e.RGBA16F || l === e.RGBA32F) && t.get("EXT_color_buffer_float"), l;
	}
	function C(t, n) {
		let r;
		return t ? n === null || n === 1014 || n === 1020 ? r = e.DEPTH24_STENCIL8 : n === 1015 ? r = e.DEPTH32F_STENCIL8 : n === 1012 && (r = e.DEPTH24_STENCIL8, J("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")) : n === null || n === 1014 || n === 1020 ? r = e.DEPTH_COMPONENT24 : n === 1015 ? r = e.DEPTH_COMPONENT32F : n === 1012 && (r = e.DEPTH_COMPONENT16), r;
	}
	function w(e, t) {
		return y(e) === !0 || e.isFramebufferTexture && e.minFilter !== 1003 && e.minFilter !== 1006 ? Math.log2(Math.max(t.width, t.height)) + 1 : e.mipmaps.length > 0 ? e.mipmaps.length : e.isCompressedTexture && Array.isArray(e.image) ? t.mipmaps.length : 1;
	}
	function T(e) {
		let t = new WeakRef(e);
		r.get(e).__ref = t, m.add(t), h.register(e, t, t);
	}
	function E(e) {
		let t = r.get(e).__ref;
		t !== void 0 && (m.delete(t), h.unregister(t));
	}
	function D(e) {
		k(e.target);
	}
	function O(e) {
		A(e.target);
	}
	function k(e) {
		e.removeEventListener("dispose", D), E(e), M(e), e.isVideoTexture && u.delete(e), e.isHTMLTexture && d.delete(e);
	}
	function A(e) {
		e.removeEventListener("dispose", O), E(e), P(e);
	}
	function j() {
		for (let e of m) {
			let t = e.deref();
			t !== void 0 && (t.isRenderTarget === !0 ? A(t) : k(t));
		}
		m.clear(), d.clear();
	}
	function M(e) {
		let t = r.get(e);
		if (t.__webglInit === void 0) return;
		let n = e.source, i = p.get(n);
		if (i) {
			let r = i[t.__cacheKey];
			r.usedTimes--, r.usedTimes === 0 && N(e), Object.keys(i).length === 0 && p.delete(n);
		}
		r.remove(e);
	}
	function N(t) {
		let n = r.get(t);
		e.deleteTexture(n.__webglTexture);
		let i = t.source, a = p.get(i);
		delete a[n.__cacheKey], o.memory.textures--;
	}
	function P(t) {
		let n = r.get(t);
		n.__depthDisposeCallback && n.__depthDisposeCallback();
		let i = t.depthTexture;
		if (i && i.renderTarget === t && k(i), t.isWebGLCubeRenderTarget) for (let t = 0; t < 6; t++) {
			if (Array.isArray(n.__webglFramebuffer[t])) for (let r = 0; r < n.__webglFramebuffer[t].length; r++) e.deleteFramebuffer(n.__webglFramebuffer[t][r]);
			else e.deleteFramebuffer(n.__webglFramebuffer[t]);
			n.__webglDepthbuffer && e.deleteRenderbuffer(n.__webglDepthbuffer[t]);
		}
		else {
			if (Array.isArray(n.__webglFramebuffer)) for (let t = 0; t < n.__webglFramebuffer.length; t++) e.deleteFramebuffer(n.__webglFramebuffer[t]);
			else e.deleteFramebuffer(n.__webglFramebuffer);
			if (n.__webglDepthbuffer && e.deleteRenderbuffer(n.__webglDepthbuffer), n.__webglMultisampledFramebuffer && e.deleteFramebuffer(n.__webglMultisampledFramebuffer), n.__webglColorRenderbuffer) for (let t = 0; t < n.__webglColorRenderbuffer.length; t++) n.__webglColorRenderbuffer[t] && e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);
			n.__webglDepthRenderbuffer && e.deleteRenderbuffer(n.__webglDepthRenderbuffer);
		}
		let a = t.textures;
		for (let t = 0, n = a.length; t < n; t++) {
			let n = r.get(a[t]);
			n.__webglTexture && (e.deleteTexture(n.__webglTexture), o.memory.textures--), r.remove(a[t]);
		}
		r.remove(t);
	}
	let ee = 0;
	function F() {
		ee = 0;
	}
	function te() {
		return ee;
	}
	function I(e) {
		ee = e;
	}
	function L() {
		let e = ee;
		return e >= i.maxTextures && J("WebGLTextures: Trying to use " + (e + 1) + " texture units while this GPU supports only " + i.maxTextures), ee += 1, e;
	}
	function R(e) {
		let t = [];
		return t.push(e.wrapS), t.push(e.wrapT), t.push(e.wrapR || 0), t.push(e.magFilter), t.push(e.minFilter), t.push(e.anisotropy), t.push(e.internalFormat), t.push(e.format), t.push(e.type), t.push(e.generateMipmaps), t.push(e.mipmapsAutoUpdate), t.push(e.premultiplyAlpha), t.push(e.flipY), t.push(e.unpackAlignment), t.push(e.colorSpace), t.join();
	}
	function z(t, i) {
		let a = r.get(t);
		if (t.isVideoTexture && K(t), t.isRenderTargetTexture === !1 && t.isExternalTexture !== !0 && t.version > 0 && a.__version !== t.version) {
			let e = t.image;
			if (e === null) J("WebGLRenderer: Texture marked for update but no image data found.");
			else if (e.complete === !1) J("WebGLRenderer: Texture marked for update but image is incomplete");
			else {
				ue(a, t, i);
				return;
			}
		} else t.isExternalTexture && (a.__webglTexture = t.sourceTexture ? t.sourceTexture : null);
		n.bindTexture(e.TEXTURE_2D, a.__webglTexture, e.TEXTURE0 + i);
	}
	function B(t, i) {
		let a = r.get(t);
		t.isRenderTargetTexture === !1 && t.version > 0 && a.__version !== t.version ? ue(a, t, i) : (t.isExternalTexture && (a.__webglTexture = t.sourceTexture ? t.sourceTexture : null), n.bindTexture(e.TEXTURE_2D_ARRAY, a.__webglTexture, e.TEXTURE0 + i));
	}
	function V(t, i) {
		let a = r.get(t);
		t.isRenderTargetTexture === !1 && t.version > 0 && a.__version !== t.version ? ue(a, t, i) : n.bindTexture(e.TEXTURE_3D, a.__webglTexture, e.TEXTURE0 + i);
	}
	function ne(t, i) {
		let a = r.get(t);
		t.version > 0 && a.__version !== t.version ? de(a, t, i) : n.bindTexture(e.TEXTURE_CUBE_MAP, a.__webglTexture, e.TEXTURE0 + i);
	}
	let re = {
		[Xo]: e.REPEAT,
		[Zo]: e.CLAMP_TO_EDGE,
		[Qo]: e.MIRRORED_REPEAT
	}, ie = {
		[$o]: e.NEAREST,
		[es]: e.NEAREST_MIPMAP_NEAREST,
		[ts]: e.NEAREST_MIPMAP_LINEAR,
		[ns]: e.LINEAR,
		[rs]: e.LINEAR_MIPMAP_NEAREST,
		[is]: e.LINEAR_MIPMAP_LINEAR
	}, ae = {
		512: e.NEVER,
		519: e.ALWAYS,
		513: e.LESS,
		515: e.LEQUAL,
		514: e.EQUAL,
		518: e.GEQUAL,
		516: e.GREATER,
		517: e.NOTEQUAL
	};
	function oe(n, a) {
		if (a.type === 1015 && t.has("OES_texture_float_linear") === !1 && (a.magFilter === 1006 || a.magFilter === 1007 || a.magFilter === 1005 || a.magFilter === 1008 || a.minFilter === 1006 || a.minFilter === 1007 || a.minFilter === 1005 || a.minFilter === 1008) && J("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."), e.texParameteri(n, e.TEXTURE_WRAP_S, re[a.wrapS]), e.texParameteri(n, e.TEXTURE_WRAP_T, re[a.wrapT]), (n === e.TEXTURE_3D || n === e.TEXTURE_2D_ARRAY) && e.texParameteri(n, e.TEXTURE_WRAP_R, re[a.wrapR]), e.texParameteri(n, e.TEXTURE_MAG_FILTER, ie[a.magFilter]), e.texParameteri(n, e.TEXTURE_MIN_FILTER, ie[a.minFilter]), a.compareFunction && (e.texParameteri(n, e.TEXTURE_COMPARE_MODE, e.COMPARE_REF_TO_TEXTURE), e.texParameteri(n, e.TEXTURE_COMPARE_FUNC, ae[a.compareFunction])), t.has("EXT_texture_filter_anisotropic") === !0) {
			if (a.magFilter === 1003 || a.minFilter !== 1005 && a.minFilter !== 1008 || a.type === 1015 && t.has("OES_texture_float_linear") === !1) return;
			if (a.anisotropy > 1 || r.get(a).__currentAnisotropy) {
				let o = t.get("EXT_texture_filter_anisotropic");
				e.texParameterf(n, o.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(a.anisotropy, i.getMaxAnisotropy())), r.get(a).__currentAnisotropy = a.anisotropy;
			}
		}
	}
	function se(t, n) {
		let r = !1;
		t.__webglInit === void 0 && (t.__webglInit = !0, n.addEventListener("dispose", D), T(n));
		let i = n.source, a = p.get(i);
		a === void 0 && (a = {}, p.set(i, a));
		let s = R(n);
		if (s !== t.__cacheKey) {
			a[s] === void 0 && (a[s] = {
				texture: e.createTexture(),
				usedTimes: 0
			}, o.memory.textures++, r = !0), a[s].usedTimes++;
			let i = a[t.__cacheKey];
			i !== void 0 && (a[t.__cacheKey].usedTimes--, i.usedTimes === 0 && N(n)), t.__cacheKey = s, t.__webglTexture = a[s].texture;
		}
		return r;
	}
	function ce(e, t, n) {
		return Math.floor(Math.floor(e / n) / t);
	}
	function le(t, r, i, a) {
		let o = t.updateRanges;
		if (o.length === 0) n.texSubImage2D(e.TEXTURE_2D, 0, 0, 0, r.width, r.height, i, a, r.data);
		else {
			o.sort((e, t) => e.start - t.start);
			let s = 0;
			for (let e = 1; e < o.length; e++) {
				let t = o[s], n = o[e], i = t.start + t.count, a = ce(n.start, r.width, 4), c = ce(t.start, r.width, 4);
				n.start <= i + 1 && a === c && ce(n.start + n.count - 1, r.width, 4) === a ? t.count = Math.max(t.count, n.start + n.count - t.start) : (++s, o[s] = n);
			}
			o.length = s + 1;
			let c = n.getParameter(e.UNPACK_ROW_LENGTH), l = n.getParameter(e.UNPACK_SKIP_PIXELS), u = n.getParameter(e.UNPACK_SKIP_ROWS);
			n.pixelStorei(e.UNPACK_ROW_LENGTH, r.width);
			for (let t = 0, s = o.length; t < s; t++) {
				let s = o[t], c = Math.floor(s.start / 4), l = Math.ceil(s.count / 4), u = c % r.width, d = Math.floor(c / r.width), f = l;
				n.pixelStorei(e.UNPACK_SKIP_PIXELS, u), n.pixelStorei(e.UNPACK_SKIP_ROWS, d), n.texSubImage2D(e.TEXTURE_2D, 0, u, d, f, 1, i, a, r.data);
			}
			t.clearUpdateRanges(), n.pixelStorei(e.UNPACK_ROW_LENGTH, c), n.pixelStorei(e.UNPACK_SKIP_PIXELS, l), n.pixelStorei(e.UNPACK_SKIP_ROWS, u);
		}
	}
	function ue(t, o, s) {
		let c = e.TEXTURE_2D;
		(o.isDataArrayTexture || o.isCompressedArrayTexture) && (c = e.TEXTURE_2D_ARRAY), o.isData3DTexture && (c = e.TEXTURE_3D);
		let l = se(t, o), u = o.source;
		n.bindTexture(c, t.__webglTexture, e.TEXTURE0 + s);
		let f = r.get(u);
		if (u.version !== f.__version || l === !0) {
			if (n.activeTexture(e.TEXTURE0 + s), !(typeof ImageBitmap < "u" && o.image instanceof ImageBitmap)) {
				let t = _l.getPrimaries(_l.workingColorSpace), r = o.colorSpace === "" ? null : _l.getPrimaries(o.colorSpace), i = o.colorSpace === "" || t === r ? e.NONE : e.BROWSER_DEFAULT_WEBGL;
				n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL, o.flipY), n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, o.premultiplyAlpha), n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL, i);
			}
			n.pixelStorei(e.UNPACK_ALIGNMENT, o.unpackAlignment);
			let t = v(o.image, !1, i.maxTextureSize);
			t = q(o, t);
			let r = a.convert(o.format, o.colorSpace), p = a.convert(o.type), m = S(o.internalFormat, r, p, o.normalized, o.colorSpace, o.isVideoTexture);
			oe(c, o);
			let h, g = o.mipmaps, _ = o.isVideoTexture !== !0, x = f.__version === void 0 || l === !0, T = u.dataReady, E = w(o, t);
			if (o.isDepthTexture) m = C(o.format === Ss, o.type), x && (_ ? n.texStorage2D(e.TEXTURE_2D, 1, m, t.width, t.height) : n.texImage2D(e.TEXTURE_2D, 0, m, t.width, t.height, 0, r, p, null));
			else if (o.isDataTexture) {
				if (g.length > 0) {
					_ && x && n.texStorage2D(e.TEXTURE_2D, E, m, g[0].width, g[0].height);
					for (let t = 0, i = g.length; t < i; t++) h = g[t], _ ? T && n.texSubImage2D(e.TEXTURE_2D, t, 0, 0, h.width, h.height, r, p, h.data) : n.texImage2D(e.TEXTURE_2D, t, m, h.width, h.height, 0, r, p, h.data);
					o.generateMipmaps = !1;
				} else _ ? (x && n.texStorage2D(e.TEXTURE_2D, E, m, t.width, t.height), T && le(o, t, r, p)) : n.texImage2D(e.TEXTURE_2D, 0, m, t.width, t.height, 0, r, p, t.data);
			} else if (o.isCompressedTexture) {
				if (o.isCompressedArrayTexture) {
					_ && x && n.texStorage3D(e.TEXTURE_2D_ARRAY, E, m, g[0].width, g[0].height, t.depth);
					for (let i = 0, a = g.length; i < a; i++) if (h = g[i], o.format !== 1023) {
						if (r !== null) {
							if (_) {
								if (T) {
									if (o.layerUpdates.size > 0) {
										let t = Dp(h.width, h.height, o.format, o.type);
										for (let a of o.layerUpdates) {
											let o = h.data.subarray(a * t / h.data.BYTES_PER_ELEMENT, (a + 1) * t / h.data.BYTES_PER_ELEMENT);
											n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY, i, 0, 0, a, h.width, h.height, 1, r, o);
										}
									} else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY, i, 0, 0, 0, h.width, h.height, t.depth, r, h.data);
								}
							} else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY, i, m, h.width, h.height, t.depth, 0, h.data, 0, 0);
						} else J("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");
					} else _ ? T && n.texSubImage3D(e.TEXTURE_2D_ARRAY, i, 0, 0, 0, h.width, h.height, t.depth, r, p, h.data) : n.texImage3D(e.TEXTURE_2D_ARRAY, i, m, h.width, h.height, t.depth, 0, r, p, h.data);
					o.layerUpdates.size > 0 && o.clearLayerUpdates();
				} else {
					_ && x && n.texStorage2D(e.TEXTURE_2D, E, m, g[0].width, g[0].height);
					for (let t = 0, i = g.length; t < i; t++) h = g[t], o.format === 1023 ? _ ? T && n.texSubImage2D(e.TEXTURE_2D, t, 0, 0, h.width, h.height, r, p, h.data) : n.texImage2D(e.TEXTURE_2D, t, m, h.width, h.height, 0, r, p, h.data) : r === null ? J("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : _ ? T && n.compressedTexSubImage2D(e.TEXTURE_2D, t, 0, 0, h.width, h.height, r, h.data) : n.compressedTexImage2D(e.TEXTURE_2D, t, m, h.width, h.height, 0, h.data);
				}
			} else if (o.isDataArrayTexture) {
				if (_) {
					if (x && n.texStorage3D(e.TEXTURE_2D_ARRAY, E, m, t.width, t.height, t.depth), T) {
						if (o.layerUpdates.size > 0) {
							let i = Dp(t.width, t.height, o.format, o.type);
							for (let a of o.layerUpdates) {
								let o = t.data.subarray(a * i / t.data.BYTES_PER_ELEMENT, (a + 1) * i / t.data.BYTES_PER_ELEMENT);
								n.texSubImage3D(e.TEXTURE_2D_ARRAY, 0, 0, 0, a, t.width, t.height, 1, r, p, o);
							}
							o.clearLayerUpdates();
						} else n.texSubImage3D(e.TEXTURE_2D_ARRAY, 0, 0, 0, 0, t.width, t.height, t.depth, r, p, t.data);
					}
				} else n.texImage3D(e.TEXTURE_2D_ARRAY, 0, m, t.width, t.height, t.depth, 0, r, p, t.data);
			} else if (o.isData3DTexture) _ ? (x && n.texStorage3D(e.TEXTURE_3D, E, m, t.width, t.height, t.depth), T && n.texSubImage3D(e.TEXTURE_3D, 0, 0, 0, 0, t.width, t.height, t.depth, r, p, t.data)) : n.texImage3D(e.TEXTURE_3D, 0, m, t.width, t.height, t.depth, 0, r, p, t.data);
			else if (o.isFramebufferTexture) {
				if (x) {
					if (_) n.texStorage2D(e.TEXTURE_2D, E, m, t.width, t.height);
					else {
						let i = t.width, a = t.height;
						for (let t = 0; t < E; t++) n.texImage2D(e.TEXTURE_2D, t, m, i, a, 0, r, p, null), i >>= 1, a >>= 1;
					}
				}
			} else if (o.isHTMLTexture) {
				if ("texElementImage2D" in e) {
					let n = e.canvas;
					if (n.hasAttribute("layoutsubtree") || n.setAttribute("layoutsubtree", "true"), t.parentNode !== n) {
						n.appendChild(t), d.add(o), n.onpaint = (e) => {
							let t = e.changedElements;
							for (let e of d) t.includes(e.image) && (e.needsUpdate = !0);
						}, n.requestPaint();
						return;
					}
					if (e.texElementImage2D.length === 3) e.texElementImage2D(e.TEXTURE_2D, e.RGBA8, t);
					else {
						let n = e.RGBA, r = e.RGBA, i = e.UNSIGNED_BYTE;
						e.texElementImage2D(e.TEXTURE_2D, 0, n, r, i, t);
					}
					e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.LINEAR), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE);
				}
			} else if (g.length > 0) {
				if (_ && x) {
					let t = ye(g[0]);
					n.texStorage2D(e.TEXTURE_2D, E, m, t.width, t.height);
				}
				for (let t = 0, i = g.length; t < i; t++) h = g[t], _ ? T && n.texSubImage2D(e.TEXTURE_2D, t, 0, 0, r, p, h) : n.texImage2D(e.TEXTURE_2D, t, m, r, p, h);
				o.generateMipmaps = !1;
			} else if (_) {
				if (x) {
					let r = ye(t);
					n.texStorage2D(e.TEXTURE_2D, E, m, r.width, r.height);
				}
				T && n.texSubImage2D(e.TEXTURE_2D, 0, 0, 0, r, p, t);
			} else n.texImage2D(e.TEXTURE_2D, 0, m, r, p, t);
			y(o) && o.mipmapsAutoUpdate === !0 && b(c), f.__version = u.version, o.onUpdate && o.onUpdate(o);
		}
		t.__version = o.version;
	}
	function de(t, o, s) {
		if (o.image.length !== 6) return;
		let c = se(t, o), l = o.source;
		n.bindTexture(e.TEXTURE_CUBE_MAP, t.__webglTexture, e.TEXTURE0 + s);
		let u = r.get(l);
		if (l.version !== u.__version || c === !0) {
			n.activeTexture(e.TEXTURE0 + s);
			let t = _l.getPrimaries(_l.workingColorSpace), r = o.colorSpace === "" ? null : _l.getPrimaries(o.colorSpace), d = o.colorSpace === "" || t === r ? e.NONE : e.BROWSER_DEFAULT_WEBGL;
			n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL, o.flipY), n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, o.premultiplyAlpha), n.pixelStorei(e.UNPACK_ALIGNMENT, o.unpackAlignment), n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL, d);
			let f = o.isCompressedTexture || o.image[0].isCompressedTexture, p = o.image[0] && o.image[0].isDataTexture, m = [];
			for (let e = 0; e < 6; e++) !f && !p ? m[e] = v(o.image[e], !0, i.maxCubemapSize) : m[e] = p ? o.image[e].image : o.image[e], m[e] = q(o, m[e]);
			let h = m[0], g = a.convert(o.format, o.colorSpace), _ = a.convert(o.type), x = S(o.internalFormat, g, _, o.normalized, o.colorSpace), T = o.isVideoTexture !== !0, E = u.__version === void 0 || c === !0, D = l.dataReady, O = w(o, h);
			oe(e.TEXTURE_CUBE_MAP, o);
			let k;
			if (o.isDepthTexture) {
				if (x = C(o.format === Ss, o.type), E) {
					if (T) n.texStorage2D(e.TEXTURE_CUBE_MAP, 1, x, h.width, h.height);
					else for (let t = 0; t < 6; t++) n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, 0, x, h.width, h.height, 0, g, _, null);
				}
			} else if (f) {
				T && E && n.texStorage2D(e.TEXTURE_CUBE_MAP, O, x, h.width, h.height);
				for (let t = 0; t < 6; t++) {
					k = m[t].mipmaps;
					for (let r = 0; r < k.length; r++) {
						let i = k[r];
						o.format === 1023 ? T ? D && n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, r, 0, 0, i.width, i.height, g, _, i.data) : n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, r, x, i.width, i.height, 0, g, _, i.data) : g === null ? J("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : T ? D && n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, r, 0, 0, i.width, i.height, g, i.data) : n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, r, x, i.width, i.height, 0, i.data);
					}
				}
			} else {
				if (k = o.mipmaps, T && E) {
					k.length > 0 && O++;
					let t = ye(m[0]);
					n.texStorage2D(e.TEXTURE_CUBE_MAP, O, x, t.width, t.height);
				}
				for (let t = 0; t < 6; t++) if (p) {
					T ? D && n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, 0, 0, 0, m[t].width, m[t].height, g, _, m[t].data) : n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, 0, x, m[t].width, m[t].height, 0, g, _, m[t].data);
					for (let r = 0; r < k.length; r++) {
						let i = k[r].image[t].image;
						T ? D && n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, r + 1, 0, 0, i.width, i.height, g, _, i.data) : n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, r + 1, x, i.width, i.height, 0, g, _, i.data);
					}
				} else {
					T ? D && n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, 0, 0, 0, g, _, m[t]) : n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, 0, x, g, _, m[t]);
					for (let r = 0; r < k.length; r++) {
						let i = k[r];
						T ? D && n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, r + 1, 0, 0, g, _, i.image[t]) : n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, r + 1, x, g, _, i.image[t]);
					}
				}
			}
			y(o) && o.mipmapsAutoUpdate === !0 && b(e.TEXTURE_CUBE_MAP), u.__version = l.version, o.onUpdate && o.onUpdate(o);
		}
		t.__version = o.version;
	}
	function fe(t, i, o, c, l, u) {
		let d = a.convert(o.format, o.colorSpace), f = a.convert(o.type), p = S(o.internalFormat, d, f, o.normalized, o.colorSpace), m = r.get(i), h = r.get(o);
		if (h.__renderTarget = i, !m.__hasExternalTextures) {
			let t = Math.max(1, i.width >> u), r = Math.max(1, i.height >> u);
			l === e.TEXTURE_3D || l === e.TEXTURE_2D_ARRAY ? n.texImage3D(l, u, p, t, r, i.depth, 0, d, f, null) : n.texImage2D(l, u, p, t, r, 0, d, f, null);
		}
		n.bindFramebuffer(e.FRAMEBUFFER, t), ve(i) ? s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER, c, l, h.__webglTexture, 0, G(i)) : (l === e.TEXTURE_2D || l >= e.TEXTURE_CUBE_MAP_POSITIVE_X && l <= e.TEXTURE_CUBE_MAP_NEGATIVE_Z) && e.framebufferTexture2D(e.FRAMEBUFFER, c, l, h.__webglTexture, u), n.bindFramebuffer(e.FRAMEBUFFER, null);
	}
	function pe(t, n, r) {
		if (e.bindRenderbuffer(e.RENDERBUFFER, t), n.depthBuffer) {
			let i = n.depthTexture, a = i && i.isDepthTexture ? i.type : null, o = C(n.stencilBuffer, a), c = n.stencilBuffer ? e.DEPTH_STENCIL_ATTACHMENT : e.DEPTH_ATTACHMENT;
			ve(n) ? s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER, G(n), o, n.width, n.height) : r ? e.renderbufferStorageMultisample(e.RENDERBUFFER, G(n), o, n.width, n.height) : e.renderbufferStorage(e.RENDERBUFFER, o, n.width, n.height), e.framebufferRenderbuffer(e.FRAMEBUFFER, c, e.RENDERBUFFER, t);
		} else {
			let t = n.textures;
			for (let i = 0; i < t.length; i++) {
				let o = t[i], c = a.convert(o.format, o.colorSpace), l = a.convert(o.type), u = S(o.internalFormat, c, l, o.normalized, o.colorSpace);
				ve(n) ? s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER, G(n), u, n.width, n.height) : r ? e.renderbufferStorageMultisample(e.RENDERBUFFER, G(n), u, n.width, n.height) : e.renderbufferStorage(e.RENDERBUFFER, u, n.width, n.height);
			}
		}
		e.bindRenderbuffer(e.RENDERBUFFER, null);
	}
	function me(t, i, a) {
		let o = i.isWebGLCubeRenderTarget === !0;
		if (n.bindFramebuffer(e.FRAMEBUFFER, t), !(i.depthTexture && i.depthTexture.isDepthTexture)) throw Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");
		let c = r.get(i.depthTexture);
		c.__renderTarget = i;
		let l = o ? i.depthTexture.image[0] : i.depthTexture.image;
		c.__webglTexture && l.width === i.width && l.height === i.height || (l.width = i.width, l.height = i.height, i.depthTexture.needsUpdate = !0), o ? ne(i.depthTexture, 0) : z(i.depthTexture, 0);
		let u = c.__webglTexture, d = G(i), f = o ? e.TEXTURE_CUBE_MAP_POSITIVE_X + a : e.TEXTURE_2D, p = i.depthTexture.format === 1027 ? e.DEPTH_STENCIL_ATTACHMENT : e.DEPTH_ATTACHMENT;
		if (i.depthTexture.format === 1026) ve(i) ? s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER, p, f, u, 0, d) : e.framebufferTexture2D(e.FRAMEBUFFER, p, f, u, 0);
		else if (i.depthTexture.format === 1027) ve(i) ? s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER, p, f, u, 0, d) : e.framebufferTexture2D(e.FRAMEBUFFER, p, f, u, 0);
		else throw Error("THREE.WebGLTextures: Unknown depthTexture format.");
	}
	function he(t) {
		let i = r.get(t), a = t.isWebGLCubeRenderTarget === !0;
		if (i.__boundDepthTexture !== t.depthTexture) {
			let e = t.depthTexture;
			if (i.__depthDisposeCallback && i.__depthDisposeCallback(), e) {
				let t = () => {
					delete i.__boundDepthTexture, delete i.__depthDisposeCallback, e.removeEventListener("dispose", t);
				};
				e.addEventListener("dispose", t), i.__depthDisposeCallback = t;
			}
			i.__boundDepthTexture = e;
		}
		if (t.depthTexture && !i.__autoAllocateDepthBuffer) {
			if (a) for (let e = 0; e < 6; e++) me(i.__webglFramebuffer[e], t, e);
			else t.texture.mipmaps.length > 0 ? me(i.__webglFramebuffer[0], t, 0) : me(i.__webglFramebuffer, t, 0);
		} else if (a) {
			i.__webglDepthbuffer = [];
			for (let r = 0; r < 6; r++) if (n.bindFramebuffer(e.FRAMEBUFFER, i.__webglFramebuffer[r]), i.__webglDepthbuffer[r] === void 0) i.__webglDepthbuffer[r] = e.createRenderbuffer(), pe(i.__webglDepthbuffer[r], t, !1);
			else {
				let n = t.stencilBuffer ? e.DEPTH_STENCIL_ATTACHMENT : e.DEPTH_ATTACHMENT, a = i.__webglDepthbuffer[r];
				e.bindRenderbuffer(e.RENDERBUFFER, a), e.framebufferRenderbuffer(e.FRAMEBUFFER, n, e.RENDERBUFFER, a);
			}
		} else if (t.texture.mipmaps.length > 0 ? n.bindFramebuffer(e.FRAMEBUFFER, i.__webglFramebuffer[0]) : n.bindFramebuffer(e.FRAMEBUFFER, i.__webglFramebuffer), i.__webglDepthbuffer === void 0) i.__webglDepthbuffer = e.createRenderbuffer(), pe(i.__webglDepthbuffer, t, !1);
		else {
			let n = t.stencilBuffer ? e.DEPTH_STENCIL_ATTACHMENT : e.DEPTH_ATTACHMENT, r = i.__webglDepthbuffer;
			e.bindRenderbuffer(e.RENDERBUFFER, r), e.framebufferRenderbuffer(e.FRAMEBUFFER, n, e.RENDERBUFFER, r);
		}
		n.bindFramebuffer(e.FRAMEBUFFER, null);
	}
	function ge(t, n, i) {
		let a = r.get(t);
		n !== void 0 && fe(a.__webglFramebuffer, t, t.texture, e.COLOR_ATTACHMENT0, e.TEXTURE_2D, 0), i !== void 0 && he(t);
	}
	function H(t) {
		let i = t.texture, s = r.get(t), c = r.get(i);
		t.addEventListener("dispose", O), T(t);
		let l = t.textures, u = t.isWebGLCubeRenderTarget === !0, d = l.length > 1;
		if (d || (c.__webglTexture === void 0 && (c.__webglTexture = e.createTexture()), c.__version = i.version, o.memory.textures++), u) {
			s.__webglFramebuffer = [];
			for (let t = 0; t < 6; t++) if (i.mipmaps.length > 0) {
				s.__webglFramebuffer[t] = [];
				for (let n = 0; n < i.mipmaps.length; n++) s.__webglFramebuffer[t][n] = e.createFramebuffer();
			} else s.__webglFramebuffer[t] = e.createFramebuffer();
		} else {
			if (i.mipmaps.length > 0) {
				s.__webglFramebuffer = [];
				for (let t = 0; t < i.mipmaps.length; t++) s.__webglFramebuffer[t] = e.createFramebuffer();
			} else s.__webglFramebuffer = e.createFramebuffer();
			if (d) for (let t = 0, n = l.length; t < n; t++) {
				let n = r.get(l[t]);
				n.__webglTexture === void 0 && (n.__webglTexture = e.createTexture(), o.memory.textures++);
			}
			if (t.samples > 0 && ve(t) === !1) {
				s.__webglMultisampledFramebuffer = e.createFramebuffer(), s.__webglColorRenderbuffer = [], n.bindFramebuffer(e.FRAMEBUFFER, s.__webglMultisampledFramebuffer);
				for (let n = 0; n < l.length; n++) {
					let r = l[n];
					s.__webglColorRenderbuffer[n] = e.createRenderbuffer(), e.bindRenderbuffer(e.RENDERBUFFER, s.__webglColorRenderbuffer[n]);
					let i = a.convert(r.format, r.colorSpace), o = a.convert(r.type), c = S(r.internalFormat, i, o, r.normalized, r.colorSpace, t.isXRRenderTarget === !0), u = G(t);
					e.renderbufferStorageMultisample(e.RENDERBUFFER, u, c, t.width, t.height), e.framebufferRenderbuffer(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0 + n, e.RENDERBUFFER, s.__webglColorRenderbuffer[n]);
				}
				e.bindRenderbuffer(e.RENDERBUFFER, null), t.depthBuffer && (s.__webglDepthRenderbuffer = e.createRenderbuffer(), pe(s.__webglDepthRenderbuffer, t, !0)), n.bindFramebuffer(e.FRAMEBUFFER, null);
			}
		}
		if (u) {
			n.bindTexture(e.TEXTURE_CUBE_MAP, c.__webglTexture), oe(e.TEXTURE_CUBE_MAP, i);
			for (let n = 0; n < 6; n++) if (i.mipmaps.length > 0) for (let r = 0; r < i.mipmaps.length; r++) fe(s.__webglFramebuffer[n][r], t, i, e.COLOR_ATTACHMENT0, e.TEXTURE_CUBE_MAP_POSITIVE_X + n, r);
			else fe(s.__webglFramebuffer[n], t, i, e.COLOR_ATTACHMENT0, e.TEXTURE_CUBE_MAP_POSITIVE_X + n, 0);
			y(i) ? b(e.TEXTURE_CUBE_MAP) : i.mipmaps.length > 0 && e.texParameteri(e.TEXTURE_CUBE_MAP, e.TEXTURE_MAX_LEVEL, i.mipmaps.length - 1), n.unbindTexture();
		} else if (d) {
			for (let i = 0, a = l.length; i < a; i++) {
				let a = l[i], o = r.get(a), c = e.TEXTURE_2D;
				(t.isWebGL3DRenderTarget || t.isWebGLArrayRenderTarget) && (c = t.isWebGL3DRenderTarget ? e.TEXTURE_3D : e.TEXTURE_2D_ARRAY), n.bindTexture(c, o.__webglTexture), oe(c, a), fe(s.__webglFramebuffer, t, a, e.COLOR_ATTACHMENT0 + i, c, 0), y(a) && b(c);
			}
			n.unbindTexture();
		} else {
			let r = e.TEXTURE_2D;
			if ((t.isWebGL3DRenderTarget || t.isWebGLArrayRenderTarget) && (r = t.isWebGL3DRenderTarget ? e.TEXTURE_3D : e.TEXTURE_2D_ARRAY), n.bindTexture(r, c.__webglTexture), oe(r, i), i.mipmaps.length > 0) for (let n = 0; n < i.mipmaps.length; n++) fe(s.__webglFramebuffer[n], t, i, e.COLOR_ATTACHMENT0, r, n);
			else fe(s.__webglFramebuffer, t, i, e.COLOR_ATTACHMENT0, r, 0);
			y(i) ? b(r) : i.mipmaps.length > 0 && e.texParameteri(r, e.TEXTURE_MAX_LEVEL, i.mipmaps.length - 1), n.unbindTexture();
		}
		t.depthBuffer && he(t);
	}
	function U(e) {
		let t = e.textures;
		for (let i = 0, a = t.length; i < a; i++) {
			let a = t[i];
			if (y(a) && a.mipmapsAutoUpdate === !0) {
				let t = x(e), i = r.get(a).__webglTexture;
				n.bindTexture(t, i), b(t), n.unbindTexture();
			}
		}
	}
	let W = [];
	function _e(t) {
		if (t.samples > 0) {
			if (ve(t) === !1) {
				let i = t.textures, a = t.width, o = t.height, s = e.COLOR_BUFFER_BIT, l = t.stencilBuffer ? e.DEPTH_STENCIL_ATTACHMENT : e.DEPTH_ATTACHMENT, u = r.get(t), d = i.length > 1;
				if (d) for (let t = 0; t < i.length; t++) n.bindFramebuffer(e.FRAMEBUFFER, u.__webglMultisampledFramebuffer), e.framebufferRenderbuffer(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0 + t, e.RENDERBUFFER, null), n.bindFramebuffer(e.FRAMEBUFFER, u.__webglFramebuffer), e.framebufferTexture2D(e.DRAW_FRAMEBUFFER, e.COLOR_ATTACHMENT0 + t, e.TEXTURE_2D, null, 0);
				n.bindFramebuffer(e.READ_FRAMEBUFFER, u.__webglMultisampledFramebuffer), t.texture.mipmaps.length > 0 ? n.bindFramebuffer(e.DRAW_FRAMEBUFFER, u.__webglFramebuffer[0]) : n.bindFramebuffer(e.DRAW_FRAMEBUFFER, u.__webglFramebuffer);
				for (let n = 0; n < i.length; n++) {
					if (t.resolveDepthBuffer && (t.depthBuffer && (s |= e.DEPTH_BUFFER_BIT), t.stencilBuffer && t.resolveStencilBuffer && (s |= e.STENCIL_BUFFER_BIT)), d) {
						e.framebufferRenderbuffer(e.READ_FRAMEBUFFER, e.COLOR_ATTACHMENT0, e.RENDERBUFFER, u.__webglColorRenderbuffer[n]);
						let t = r.get(i[n]).__webglTexture;
						e.framebufferTexture2D(e.DRAW_FRAMEBUFFER, e.COLOR_ATTACHMENT0, e.TEXTURE_2D, t, 0);
					}
					e.blitFramebuffer(0, 0, a, o, 0, 0, a, o, s, e.NEAREST), c === !0 && (W.length = 0, W.push(e.COLOR_ATTACHMENT0 + n), t.depthBuffer && t.storeMultisampledDepthBuffer === !1 && W.push(l), e.invalidateFramebuffer(e.READ_FRAMEBUFFER, W));
				}
				if (n.bindFramebuffer(e.READ_FRAMEBUFFER, null), n.bindFramebuffer(e.DRAW_FRAMEBUFFER, null), d) for (let t = 0; t < i.length; t++) {
					n.bindFramebuffer(e.FRAMEBUFFER, u.__webglMultisampledFramebuffer), e.framebufferRenderbuffer(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0 + t, e.RENDERBUFFER, u.__webglColorRenderbuffer[t]);
					let a = r.get(i[t]).__webglTexture;
					n.bindFramebuffer(e.FRAMEBUFFER, u.__webglFramebuffer), e.framebufferTexture2D(e.DRAW_FRAMEBUFFER, e.COLOR_ATTACHMENT0 + t, e.TEXTURE_2D, a, 0);
				}
				n.bindFramebuffer(e.DRAW_FRAMEBUFFER, u.__webglMultisampledFramebuffer);
			} else if (t.depthBuffer && t.storeMultisampledDepthBuffer === !1 && c) {
				let n = t.stencilBuffer ? e.DEPTH_STENCIL_ATTACHMENT : e.DEPTH_ATTACHMENT;
				e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER, [n]);
			}
		}
	}
	function G(e) {
		return Math.min(i.maxSamples, e.samples);
	}
	function ve(e) {
		let n = r.get(e);
		return e.samples > 0 && t.has("WEBGL_multisampled_render_to_texture") === !0 && n.__useRenderToTexture !== !1;
	}
	function K(e) {
		let t = o.render.frame;
		u.get(e) !== t && (u.set(e, t), e.update());
	}
	function q(e, t) {
		let n = e.colorSpace, r = e.format, i = e.type;
		return e.isCompressedTexture === !0 || e.isVideoTexture === !0 || n !== "srgb-linear" && n !== "" && (_l.getTransfer(n) === "srgb" ? (r !== 1023 || i !== 1009) && J("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : Y("WebGLTextures: Unsupported texture color space:", n)), t;
	}
	function ye(e) {
		return typeof HTMLImageElement < "u" && e instanceof HTMLImageElement ? (l.width = e.naturalWidth || e.width, l.height = e.naturalHeight || e.height) : typeof VideoFrame < "u" && e instanceof VideoFrame ? (l.width = e.displayWidth, l.height = e.displayHeight) : (l.width = e.width, l.height = e.height), l;
	}
	this.allocateTextureUnit = L, this.resetTextureUnits = F, this.getTextureUnits = te, this.setTextureUnits = I, this.setTexture2D = z, this.setTexture2DArray = B, this.setTexture3D = V, this.setTextureCube = ne, this.rebindTextures = ge, this.setupRenderTarget = H, this.updateRenderTargetMipmap = U, this.updateMultisampleRenderTarget = _e, this.setupDepthRenderbuffer = he, this.setupFrameBufferTexture = fe, this.useMultisampledRTT = ve, this.dispose = j;
}
function Dg(e, t) {
	function n(n, r = "") {
		let i, a = _l.getTransfer(r);
		if (n === 1009) return e.UNSIGNED_BYTE;
		if (n === 1017) return e.UNSIGNED_SHORT_4_4_4_4;
		if (n === 1018) return e.UNSIGNED_SHORT_5_5_5_1;
		if (n === 35902) return e.UNSIGNED_INT_5_9_9_9_REV;
		if (n === 35899) return e.UNSIGNED_INT_10F_11F_11F_REV;
		if (n === 1010) return e.BYTE;
		if (n === 1011) return e.SHORT;
		if (n === 1012) return e.UNSIGNED_SHORT;
		if (n === 1013) return e.INT;
		if (n === 1014) return e.UNSIGNED_INT;
		if (n === 1015) return e.FLOAT;
		if (n === 1016) return e.HALF_FLOAT;
		if (n === 1021) return e.ALPHA;
		if (n === 1022) return e.RGB;
		if (n === 1023) return e.RGBA;
		if (n === 1026) return e.DEPTH_COMPONENT;
		if (n === 1027) return e.DEPTH_STENCIL;
		if (n === 1028) return e.RED;
		if (n === 1029) return e.RED_INTEGER;
		if (n === 1030) return e.RG;
		if (n === 1031) return e.RG_INTEGER;
		if (n === 1033) return e.RGBA_INTEGER;
		if (n === 33776 || n === 33777 || n === 33778 || n === 33779) {
			if (a === "srgb") {
				if (i = t.get("WEBGL_compressed_texture_s3tc_srgb"), i !== null) {
					if (n === 33776) return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;
					if (n === 33777) return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
					if (n === 33778) return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
					if (n === 33779) return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
				} else return null;
			} else if (i = t.get("WEBGL_compressed_texture_s3tc"), i !== null) {
				if (n === 33776) return i.COMPRESSED_RGB_S3TC_DXT1_EXT;
				if (n === 33777) return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;
				if (n === 33778) return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;
				if (n === 33779) return i.COMPRESSED_RGBA_S3TC_DXT5_EXT;
			} else return null;
		}
		if (n === 35840 || n === 35841 || n === 35842 || n === 35843) {
			if (i = t.get("WEBGL_compressed_texture_pvrtc"), i !== null) {
				if (n === 35840) return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
				if (n === 35841) return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
				if (n === 35842) return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
				if (n === 35843) return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
			} else return null;
		}
		if (n === 36196 || n === 37492 || n === 37496 || n === 37488 || n === 37489 || n === 37490 || n === 37491) {
			if (i = t.get("WEBGL_compressed_texture_etc"), i !== null) {
				if (n === 36196 || n === 37492) return a === "srgb" ? i.COMPRESSED_SRGB8_ETC2 : i.COMPRESSED_RGB8_ETC2;
				if (n === 37496) return a === "srgb" ? i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : i.COMPRESSED_RGBA8_ETC2_EAC;
				if (n === 37488) return i.COMPRESSED_R11_EAC;
				if (n === 37489) return i.COMPRESSED_SIGNED_R11_EAC;
				if (n === 37490) return i.COMPRESSED_RG11_EAC;
				if (n === 37491) return i.COMPRESSED_SIGNED_RG11_EAC;
			} else return null;
		}
		if (n === 37808 || n === 37809 || n === 37810 || n === 37811 || n === 37812 || n === 37813 || n === 37814 || n === 37815 || n === 37816 || n === 37817 || n === 37818 || n === 37819 || n === 37820 || n === 37821) {
			if (i = t.get("WEBGL_compressed_texture_astc"), i !== null) {
				if (n === 37808) return a === "srgb" ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : i.COMPRESSED_RGBA_ASTC_4x4_KHR;
				if (n === 37809) return a === "srgb" ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : i.COMPRESSED_RGBA_ASTC_5x4_KHR;
				if (n === 37810) return a === "srgb" ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : i.COMPRESSED_RGBA_ASTC_5x5_KHR;
				if (n === 37811) return a === "srgb" ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : i.COMPRESSED_RGBA_ASTC_6x5_KHR;
				if (n === 37812) return a === "srgb" ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : i.COMPRESSED_RGBA_ASTC_6x6_KHR;
				if (n === 37813) return a === "srgb" ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : i.COMPRESSED_RGBA_ASTC_8x5_KHR;
				if (n === 37814) return a === "srgb" ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : i.COMPRESSED_RGBA_ASTC_8x6_KHR;
				if (n === 37815) return a === "srgb" ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : i.COMPRESSED_RGBA_ASTC_8x8_KHR;
				if (n === 37816) return a === "srgb" ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : i.COMPRESSED_RGBA_ASTC_10x5_KHR;
				if (n === 37817) return a === "srgb" ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : i.COMPRESSED_RGBA_ASTC_10x6_KHR;
				if (n === 37818) return a === "srgb" ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : i.COMPRESSED_RGBA_ASTC_10x8_KHR;
				if (n === 37819) return a === "srgb" ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : i.COMPRESSED_RGBA_ASTC_10x10_KHR;
				if (n === 37820) return a === "srgb" ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : i.COMPRESSED_RGBA_ASTC_12x10_KHR;
				if (n === 37821) return a === "srgb" ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : i.COMPRESSED_RGBA_ASTC_12x12_KHR;
			} else return null;
		}
		if (n === 36492 || n === 36494 || n === 36495) {
			if (i = t.get("EXT_texture_compression_bptc"), i !== null) {
				if (n === 36492) return a === "srgb" ? i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : i.COMPRESSED_RGBA_BPTC_UNORM_EXT;
				if (n === 36494) return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
				if (n === 36495) return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT;
			} else return null;
		}
		if (n === 36283 || n === 36284 || n === 36285 || n === 36286) {
			if (i = t.get("EXT_texture_compression_rgtc"), i !== null) {
				if (n === 36283) return i.COMPRESSED_RED_RGTC1_EXT;
				if (n === 36284) return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;
				if (n === 36285) return i.COMPRESSED_RED_GREEN_RGTC2_EXT;
				if (n === 36286) return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
			} else return null;
		}
		return n === 1020 ? e.UNSIGNED_INT_24_8 : e[n] === void 0 ? null : e[n];
	}
	return { convert: n };
}
var Og = "\nvoid main() {\n\n	gl_Position = vec4( position, 1.0 );\n\n}", kg = "\nuniform sampler2DArray depthColor;\nuniform float depthWidth;\nuniform float depthHeight;\n\nvoid main() {\n\n	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );\n\n	if ( coord.x >= 1.0 ) {\n\n		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;\n\n	} else {\n\n		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;\n\n	}\n\n}", Ag = class {
	constructor() {
		this.texture = null, this.mesh = null, this.depthNear = 0, this.depthFar = 0;
	}
	init(e, t) {
		if (this.texture === null) {
			let n = new sf(e.texture);
			(e.depthNear !== t.depthNear || e.depthFar !== t.depthFar) && (this.depthNear = e.depthNear, this.depthFar = e.depthFar), this.texture = n;
		}
	}
	getMesh(e) {
		if (this.texture !== null && this.mesh === null) {
			let t = e.cameras[0].viewport, n = new bf({
				vertexShader: Og,
				fragmentShader: kg,
				uniforms: {
					depthColor: { value: this.texture },
					depthWidth: { value: t.z },
					depthHeight: { value: t.w }
				}
			});
			this.mesh = new Pd(new uf(20, 20), n);
		}
		return this.mesh;
	}
	reset() {
		this.texture = null, this.mesh = null;
	}
	getDepthTexture() {
		return this.texture;
	}
}, jg = class extends Fc {
	constructor(e, t) {
		super();
		let n = this, r = null, i = 1, a = null, o = "local-floor", s = 1, c = null, l = null, u = null, d = null, f = null, p = null, m = typeof XRWebGLBinding < "u", h = new Ag(), g = {}, _ = t.getContextAttributes(), v = null, y = null, b = [], x = [], S = new X(), C = null, w = null, T = new ip();
		T.viewport = new Ol();
		let E = new ip();
		E.viewport = new Ol();
		let D = [T, E], O = new dp(), k = null, A = null;
		this.cameraAutoUpdate = !0, this.enabled = !1, this.isPresenting = !1, this.getController = function(e) {
			let t = b[e];
			return t === void 0 && (t = new lu(), b[e] = t), t.getTargetRaySpace();
		}, this.getControllerGrip = function(e) {
			let t = b[e];
			return t === void 0 && (t = new lu(), b[e] = t), t.getGripSpace();
		}, this.getHand = function(e) {
			let t = b[e];
			return t === void 0 && (t = new lu(), b[e] = t), t.getHandSpace();
		};
		function j(e) {
			let t = x.indexOf(e.inputSource);
			if (t === -1) return;
			let n = b[t];
			n !== void 0 && (n.update(e.inputSource, e.frame, c || a), n.dispatchEvent({
				type: e.type,
				data: e.inputSource
			}));
		}
		function M() {
			r.removeEventListener("select", j), r.removeEventListener("selectstart", j), r.removeEventListener("selectend", j), r.removeEventListener("squeeze", j), r.removeEventListener("squeezestart", j), r.removeEventListener("squeezeend", j), r.removeEventListener("end", M), r.removeEventListener("inputsourceschange", N);
			for (let e = 0; e < b.length; e++) {
				let t = x[e];
				t !== null && (x[e] = null, b[e].disconnect(t));
			}
			k = null, A = null, h.reset();
			for (let e in g) delete g[e];
			if (e.setRenderTarget(v), f = null, d = null, u = null, r = null, y = null, I.stop(), n.isPresenting = !1, e.setPixelRatio(C), e.setSize(S.width, S.height, !1), w !== null) {
				let e = w.camera;
				e.fov = w.fov, e.zoom = w.zoom, e.updateProjectionMatrix(), w = null;
			}
			n.dispatchEvent({ type: "sessionend" });
		}
		this.setFramebufferScaleFactor = function(e) {
			i = e, n.isPresenting === !0 && J("WebXRManager: Cannot change framebuffer scale while presenting.");
		}, this.setReferenceSpaceType = function(e) {
			o = e, n.isPresenting === !0 && J("WebXRManager: Cannot change reference space type while presenting.");
		}, this.getReferenceSpace = function() {
			return c || a;
		}, this.setReferenceSpace = function(e) {
			c = e;
		}, this.getBaseLayer = function() {
			return d === null ? f : d;
		}, this.getBinding = function() {
			return u === null && m && (u = new XRWebGLBinding(r, t)), u;
		}, this.getFrame = function() {
			return p;
		}, this.getSession = function() {
			return r;
		}, this.setSession = async function(l) {
			if (r = l, r !== null) {
				if (v = e.getRenderTarget(), r.addEventListener("select", j), r.addEventListener("selectstart", j), r.addEventListener("selectend", j), r.addEventListener("squeeze", j), r.addEventListener("squeezestart", j), r.addEventListener("squeezeend", j), r.addEventListener("end", M), r.addEventListener("inputsourceschange", N), _.xrCompatible !== !0 && await t.makeXRCompatible(), C = e.getPixelRatio(), e.getSize(S), m && "createProjectionLayer" in XRWebGLBinding.prototype) {
					let n = null, a = null, o = null;
					_.depth && (o = _.stencil ? t.DEPTH24_STENCIL8 : t.DEPTH_COMPONENT24, n = _.stencil ? Ss : xs, a = _.stencil ? hs : us);
					let s = {
						colorFormat: t.RGBA8,
						depthFormat: o,
						scaleFactor: i
					};
					u = this.getBinding(), d = u.createProjectionLayer(s), r.updateRenderState({ layers: [d] }), e.setPixelRatio(1), e.setSize(d.textureWidth, d.textureHeight, !1), y = new Al(d.textureWidth, d.textureHeight, {
						format: bs,
						type: as,
						depthTexture: new af(d.textureWidth, d.textureHeight, a, void 0, void 0, void 0, void 0, void 0, void 0, n),
						stencilBuffer: _.stencil,
						colorSpace: e.outputColorSpace,
						samples: _.antialias ? 4 : 0,
						resolveDepthBuffer: d.ignoreDepthValues === !1,
						resolveStencilBuffer: d.ignoreDepthValues === !1,
						storeMultisampledDepthBuffer: d.ignoreDepthValues === !1,
						storeMultisampledStencilBuffer: d.ignoreDepthValues === !1
					});
				} else {
					let n = {
						antialias: _.antialias,
						alpha: !0,
						depth: _.depth,
						stencil: _.stencil,
						framebufferScaleFactor: i
					};
					f = new XRWebGLLayer(r, t, n), r.updateRenderState({ baseLayer: f }), e.setPixelRatio(1), e.setSize(f.framebufferWidth, f.framebufferHeight, !1), y = new Al(f.framebufferWidth, f.framebufferHeight, {
						format: bs,
						type: as,
						colorSpace: e.outputColorSpace,
						stencilBuffer: _.stencil,
						resolveDepthBuffer: f.ignoreDepthValues === !1,
						resolveStencilBuffer: f.ignoreDepthValues === !1,
						storeMultisampledDepthBuffer: f.ignoreDepthValues === !1,
						storeMultisampledStencilBuffer: f.ignoreDepthValues === !1
					});
				}
				y.isXRRenderTarget = !0, this.setFoveation(s), c = null, a = await r.requestReferenceSpace(o), I.setContext(r), I.start(), n.isPresenting = !0, n.dispatchEvent({ type: "sessionstart" });
			}
		}, this.getEnvironmentBlendMode = function() {
			if (r !== null) return r.environmentBlendMode;
		}, this.getDepthTexture = function() {
			return h.getDepthTexture();
		};
		function N(e) {
			for (let t = 0; t < e.removed.length; t++) {
				let n = e.removed[t], r = x.indexOf(n);
				r >= 0 && (x[r] = null, b[r].disconnect(n));
			}
			for (let t = 0; t < e.added.length; t++) {
				let n = e.added[t], r = x.indexOf(n);
				if (r === -1) {
					for (let e = 0; e < b.length; e++) if (e >= x.length) {
						x.push(n), r = e;
						break;
					} else if (x[e] === null) {
						x[e] = n, r = e;
						break;
					}
					if (r === -1) break;
				}
				let i = b[r];
				i && i.connect(n);
			}
		}
		function P(e, t) {
			t === null ? e.matrixWorld.copy(e.matrix) : e.matrixWorld.multiplyMatrices(t.matrixWorld, e.matrix), e.matrixWorldInverse.copy(e.matrixWorld).invert();
		}
		this.updateCamera = function(e) {
			if (r === null) return;
			let t = e.near, n = e.far;
			h.texture !== null && (h.depthNear > 0 && (t = h.depthNear), h.depthFar > 0 && (n = h.depthFar)), O.near = E.near = T.near = t, O.far = E.far = T.far = n, (k !== O.near || A !== O.far) && (r.updateRenderState({
				depthNear: O.near,
				depthFar: O.far
			}), k = O.near, A = O.far), O.layers.mask = e.layers.mask | 6, T.layers.mask = O.layers.mask & -5, E.layers.mask = O.layers.mask & -3;
			let i = e.parent, a = O.cameras;
			P(O, i);
			for (let e = 0; e < a.length; e++) P(a[e], i);
			O.projectionMatrix.copy(T.projectionMatrix), O.projectionMatrixInverse.copy(T.projectionMatrixInverse), w === null && e.isPerspectiveCamera && (w = {
				camera: e,
				fov: e.fov,
				zoom: e.zoom
			}), ee(e, O, i);
		};
		function ee(e, t, n) {
			n === null ? e.matrix.copy(t.matrixWorld) : (e.matrix.copy(n.matrixWorld), e.matrix.invert(), e.matrix.multiply(t.matrixWorld)), e.matrix.decompose(e.position, e.quaternion, e.scale), e.updateMatrixWorld(!0), e.projectionMatrix.copy(t.projectionMatrix), e.projectionMatrixInverse.copy(t.projectionMatrixInverse), e.isPerspectiveCamera && (e.fov = zc * 2 * Math.atan(1 / e.projectionMatrix.elements[5]), e.zoom = 1);
		}
		this.getCamera = function() {
			return O;
		}, this.getFoveation = function() {
			if (d !== null || f !== null) return s;
		}, this.setFoveation = function(e) {
			s = e, d !== null && (d.fixedFoveation = e), f !== null && f.fixedFoveation !== void 0 && (f.fixedFoveation = e);
		}, this.hasDepthSensing = function() {
			return h.texture !== null;
		}, this.getDepthSensingMesh = function() {
			return h.getMesh(O);
		}, this.getCameraTexture = function(e) {
			return g[e];
		};
		let F = null;
		function te(t, i) {
			if (l = i.getViewerPose(c || a), p = i, l !== null) {
				let t = l.views;
				f !== null && (e.setRenderTargetFramebuffer(y, f.framebuffer), e.setRenderTarget(y));
				let i = !1;
				t.length !== O.cameras.length && (O.cameras.length = 0, i = !0);
				for (let n = 0; n < t.length; n++) {
					let r = t[n], a = null;
					if (f !== null) a = f.getViewport(r);
					else {
						let t = u.getViewSubImage(d, r);
						a = t.viewport, n === 0 && (e.setRenderTargetTextures(y, t.colorTexture, t.depthStencilTexture), e.setRenderTarget(y));
					}
					let o = D[n];
					o === void 0 && (o = new ip(), o.layers.enable(n), o.viewport = new Ol(), D[n] = o), o.matrix.fromArray(r.transform.matrix), o.matrix.decompose(o.position, o.quaternion, o.scale), o.projectionMatrix.fromArray(r.projectionMatrix), o.projectionMatrixInverse.copy(o.projectionMatrix).invert(), o.viewport.set(a.x, a.y, a.width, a.height), n === 0 && (O.matrix.copy(o.matrix), O.matrix.decompose(O.position, O.quaternion, O.scale)), i === !0 && O.cameras.push(o);
				}
				let a = r.enabledFeatures;
				if (a && a.includes("depth-sensing") && r.depthUsage == "gpu-optimized" && m) {
					u = n.getBinding();
					let e = u.getDepthInformation(t[0]);
					e && e.isValid && e.texture && h.init(e, r.renderState);
				}
				if (a && a.includes("camera-access") && m) {
					e.state.unbindTexture(), u = n.getBinding();
					for (let e = 0; e < t.length; e++) {
						let n = t[e].camera;
						if (n) {
							let e = g[n];
							e || (e = new sf(), g[n] = e);
							let t = u.getCameraImage(n);
							e.sourceTexture = t;
						}
					}
				}
			}
			for (let e = 0; e < b.length; e++) {
				let t = x[e], n = b[e];
				t !== null && n !== void 0 && n.update(t, i, c || a);
			}
			F && F(t, i), i.detectedPlanes && n.dispatchEvent({
				type: "planesdetected",
				data: i
			}), p = null;
		}
		let I = new kp();
		I.setAnimationLoop(te), this.setAnimationLoop = function(e) {
			F = e;
		}, this.dispose = function() {};
	}
}, Mg = /*@__PURE__*/ new Nl(), Ng = /*@__PURE__*/ new Q();
Ng.set(-1, 0, 0, 0, 1, 0, 0, 0, 1);
function Pg(e, t) {
	function n(e, t) {
		e.matrixAutoUpdate === !0 && e.updateMatrix(), t.value.copy(e.matrix);
	}
	function r(t, n) {
		n.color.getRGB(t.fogColor.value, gf(e)), n.isFog ? (t.fogNear.value = n.near, t.fogFar.value = n.far) : n.isFogExp2 && (t.fogDensity.value = n.density);
	}
	function i(e, t, n, r, i) {
		t.isNodeMaterial ? t.uniformsNeedUpdate = !1 : t.isMeshBasicMaterial ? a(e, t) : t.isMeshLambertMaterial ? (a(e, t), t.envMap && (e.envMapIntensity.value = t.envMapIntensity)) : t.isMeshToonMaterial ? (a(e, t), d(e, t)) : t.isMeshPhongMaterial ? (a(e, t), u(e, t), t.envMap && (e.envMapIntensity.value = t.envMapIntensity)) : t.isMeshStandardMaterial ? (a(e, t), f(e, t), t.isMeshPhysicalMaterial && p(e, t, i)) : t.isMeshMatcapMaterial ? (a(e, t), m(e, t)) : t.isMeshDepthMaterial ? a(e, t) : t.isMeshDistanceMaterial ? (a(e, t), h(e, t)) : t.isMeshNormalMaterial ? a(e, t) : t.isLineBasicMaterial ? (o(e, t), t.isLineDashedMaterial && s(e, t)) : t.isPointsMaterial ? c(e, t, n, r) : t.isSpriteMaterial ? l(e, t) : t.isShadowMaterial ? (e.color.value.copy(t.color), e.opacity.value = t.opacity) : t.isShaderMaterial && (t.uniformsNeedUpdate = !1);
	}
	function a(e, r) {
		e.opacity.value = r.opacity, r.color && e.diffuse.value.copy(r.color), r.emissive && e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity), r.map && (e.map.value = r.map, n(r.map, e.mapTransform)), r.alphaMap && (e.alphaMap.value = r.alphaMap, n(r.alphaMap, e.alphaMapTransform)), r.bumpMap && (e.bumpMap.value = r.bumpMap, n(r.bumpMap, e.bumpMapTransform), e.bumpScale.value = r.bumpScale, r.side === 1 && (e.bumpScale.value *= -1)), r.normalMap && (e.normalMap.value = r.normalMap, n(r.normalMap, e.normalMapTransform), e.normalScale.value.copy(r.normalScale), r.side === 1 && e.normalScale.value.negate()), r.displacementMap && (e.displacementMap.value = r.displacementMap, n(r.displacementMap, e.displacementMapTransform), e.displacementScale.value = r.displacementScale, e.displacementBias.value = r.displacementBias), r.emissiveMap && (e.emissiveMap.value = r.emissiveMap, n(r.emissiveMap, e.emissiveMapTransform)), r.specularMap && (e.specularMap.value = r.specularMap, n(r.specularMap, e.specularMapTransform)), r.alphaTest > 0 && (e.alphaTest.value = r.alphaTest);
		let i = t.get(r), a = i.envMap, o = i.envMapRotation;
		a && (e.envMap.value = a, e.envMapRotation.value.setFromMatrix4(Mg.makeRotationFromEuler(o)).transpose(), a.isCubeTexture && a.isRenderTargetTexture === !1 && e.envMapRotation.value.premultiply(Ng), e.reflectivity.value = r.reflectivity, e.ior.value = r.ior, e.refractionRatio.value = r.refractionRatio), r.lightMap && (e.lightMap.value = r.lightMap, e.lightMapIntensity.value = r.lightMapIntensity, n(r.lightMap, e.lightMapTransform)), r.aoMap && (e.aoMap.value = r.aoMap, e.aoMapIntensity.value = r.aoMapIntensity, n(r.aoMap, e.aoMapTransform));
	}
	function o(e, t) {
		e.diffuse.value.copy(t.color), e.opacity.value = t.opacity, t.map && (e.map.value = t.map, n(t.map, e.mapTransform));
	}
	function s(e, t) {
		e.dashSize.value = t.dashSize, e.totalSize.value = t.dashSize + t.gapSize, e.scale.value = t.scale;
	}
	function c(e, t, r, i) {
		e.diffuse.value.copy(t.color), e.opacity.value = t.opacity, e.size.value = t.size * r, e.scale.value = i * .5, t.map && (e.map.value = t.map, n(t.map, e.uvTransform)), t.alphaMap && (e.alphaMap.value = t.alphaMap, n(t.alphaMap, e.alphaMapTransform)), t.alphaTest > 0 && (e.alphaTest.value = t.alphaTest);
	}
	function l(e, t) {
		e.diffuse.value.copy(t.color), e.opacity.value = t.opacity, e.rotation.value = t.rotation, t.map && (e.map.value = t.map, n(t.map, e.mapTransform)), t.alphaMap && (e.alphaMap.value = t.alphaMap, n(t.alphaMap, e.alphaMapTransform)), t.alphaTest > 0 && (e.alphaTest.value = t.alphaTest);
	}
	function u(e, t) {
		e.specular.value.copy(t.specular), e.shininess.value = Math.max(t.shininess, 1e-4);
	}
	function d(e, t) {
		t.gradientMap && (e.gradientMap.value = t.gradientMap);
	}
	function f(e, t) {
		e.metalness.value = t.metalness, t.metalnessMap && (e.metalnessMap.value = t.metalnessMap, n(t.metalnessMap, e.metalnessMapTransform)), e.roughness.value = t.roughness, t.roughnessMap && (e.roughnessMap.value = t.roughnessMap, n(t.roughnessMap, e.roughnessMapTransform)), t.envMap && (e.envMapIntensity.value = t.envMapIntensity);
	}
	function p(e, t, r) {
		e.ior.value = t.ior, t.diffuseRoughness > 0 && (e.diffuseRoughness.value = t.diffuseRoughness, t.diffuseRoughnessMap && (e.diffuseRoughnessMap.value = t.diffuseRoughnessMap, n(t.diffuseRoughnessMap, e.diffuseRoughnessMapTransform))), t.sheen > 0 && (e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen), e.sheenRoughness.value = t.sheenRoughness, t.sheenColorMap && (e.sheenColorMap.value = t.sheenColorMap, n(t.sheenColorMap, e.sheenColorMapTransform)), t.sheenRoughnessMap && (e.sheenRoughnessMap.value = t.sheenRoughnessMap, n(t.sheenRoughnessMap, e.sheenRoughnessMapTransform))), t.clearcoat > 0 && (e.clearcoat.value = t.clearcoat, e.clearcoatRoughness.value = t.clearcoatRoughness, t.clearcoatMap && (e.clearcoatMap.value = t.clearcoatMap, n(t.clearcoatMap, e.clearcoatMapTransform)), t.clearcoatRoughnessMap && (e.clearcoatRoughnessMap.value = t.clearcoatRoughnessMap, n(t.clearcoatRoughnessMap, e.clearcoatRoughnessMapTransform)), t.clearcoatNormalMap && (e.clearcoatNormalMap.value = t.clearcoatNormalMap, n(t.clearcoatNormalMap, e.clearcoatNormalMapTransform), e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale), t.side === 1 && e.clearcoatNormalScale.value.negate())), t.dispersion > 0 && (e.dispersion.value = t.dispersion), t.retroreflectivity > 0 && (e.retroreflectivity.value = t.retroreflectivity), t.iridescence > 0 && (e.iridescence.value = t.iridescence, e.iridescenceIOR.value = t.iridescenceIOR, e.iridescenceThicknessMinimum.value = t.iridescenceThicknessMinimum, e.iridescenceThicknessMaximum.value = t.iridescenceThicknessMaximum, t.iridescenceMap && (e.iridescenceMap.value = t.iridescenceMap, n(t.iridescenceMap, e.iridescenceMapTransform)), t.iridescenceThicknessMap && (e.iridescenceThicknessMap.value = t.iridescenceThicknessMap, n(t.iridescenceThicknessMap, e.iridescenceThicknessMapTransform))), t.transmission > 0 && (e.transmission.value = t.transmission, e.transmissionSamplerMap.value = r.texture, e.transmissionSamplerSize.value.set(r.width, r.height), t.transmissionMap && (e.transmissionMap.value = t.transmissionMap, n(t.transmissionMap, e.transmissionMapTransform)), e.thickness.value = t.thickness, t.thicknessMap && (e.thicknessMap.value = t.thicknessMap, n(t.thicknessMap, e.thicknessMapTransform)), e.attenuationDistance.value = t.attenuationDistance, e.attenuationColor.value.copy(t.attenuationColor)), t.anisotropy > 0 && (e.anisotropyVector.value.set(t.anisotropy * Math.cos(t.anisotropyRotation), t.anisotropy * Math.sin(t.anisotropyRotation)), t.anisotropyMap && (e.anisotropyMap.value = t.anisotropyMap, n(t.anisotropyMap, e.anisotropyMapTransform))), e.specularIntensity.value = t.specularIntensity, e.specularColor.value.copy(t.specularColor), t.specularColorMap && (e.specularColorMap.value = t.specularColorMap, n(t.specularColorMap, e.specularColorMapTransform)), t.specularIntensityMap && (e.specularIntensityMap.value = t.specularIntensityMap, n(t.specularIntensityMap, e.specularIntensityMapTransform));
	}
	function m(e, t) {
		t.matcap && (e.matcap.value = t.matcap);
	}
	function h(e, n) {
		let r = t.get(n).light;
		e.referencePosition.value.setFromMatrixPosition(r.matrixWorld), e.nearDistance.value = r.shadow.camera.near, e.farDistance.value = r.shadow.camera.far;
	}
	return {
		refreshFogUniforms: r,
		refreshMaterialUniforms: i
	};
}
function Fg(e, t, n, r) {
	let i = {}, a = {};
	function o(e, t) {
		let n = t.program;
		r.uniformBlockBinding(e, n, i[e.id]);
	}
	function s(e, n) {
		let o = i[e.id];
		o === void 0 && (m(e), o = c(e), i[e.id] = o, e.addEventListener("dispose", g));
		let s = n.program;
		r.updateUBOMapping(e, s);
		let u = t.render.frame;
		a[e.id] !== u && (l(e), a[e.id] = u);
	}
	function c(t) {
		let n = e.createBuffer(), r = t.__size, i = t.usage;
		return e.bindBuffer(e.UNIFORM_BUFFER, n), e.bufferData(e.UNIFORM_BUFFER, r, i), e.bindBuffer(e.UNIFORM_BUFFER, null), n;
	}
	function l(t) {
		let n = i[t.id], r = t.uniforms, a = t.__cache;
		e.bindBuffer(e.UNIFORM_BUFFER, n);
		for (let e = 0, t = r.length; e < t; e++) {
			let t = r[e];
			if (Array.isArray(t)) for (let n = 0, r = t.length; n < r; n++) u(t[n], e, n, a);
			else u(t, e, 0, a);
		}
		e.bindBuffer(e.UNIFORM_BUFFER, null);
	}
	function u(t, n, r, i) {
		if (f(t, n, r, i) === !0) {
			let n = t.__offset, r = t.value;
			if (Array.isArray(r)) {
				let e = 0;
				for (let n = 0; n < r.length; n++) {
					let i = r[n], a = h(i, !0);
					d(i, t.__data, e), e += a.storage / Float32Array.BYTES_PER_ELEMENT;
				}
			} else d(r, t.__data, 0);
			e.bufferSubData(e.UNIFORM_BUFFER, n, t.__data);
		}
	}
	function d(e, t, n) {
		typeof e == "number" || typeof e == "boolean" ? t[n] = e : e.isMatrix3 ? (t[n] = e.elements[0], t[n + 1] = e.elements[1], t[n + 2] = e.elements[2], t[n + 3] = 0, t[n + 4] = e.elements[3], t[n + 5] = e.elements[4], t[n + 6] = e.elements[5], t[n + 7] = 0, t[n + 8] = e.elements[6], t[n + 9] = e.elements[7], t[n + 10] = e.elements[8], t[n + 11] = 0) : ArrayBuffer.isView(e) ? t.set(e.subarray(0, t.length - n), n) : e.toArray(t, n);
	}
	function f(e, t, n, r) {
		let i = e.value, a = t + "_" + n;
		if (Array.isArray(i)) {
			r[a] === void 0 && (r[a] = []);
			let e = r[a], t = !1;
			for (let n = 0; n < i.length; n++) p(i[n], e, n) === !0 && (t = !0);
			return t;
		}
		return p(i, r, a);
	}
	function p(e, t, n) {
		if (t[n] === void 0) return t[n] = typeof e == "number" || typeof e == "boolean" ? e : ArrayBuffer.isView(e) ? e.slice() : e.clone(), !0;
		{
			let r = t[n];
			if (typeof e == "number" || typeof e == "boolean") {
				if (r !== e) return t[n] = e, !0;
			} else if (ArrayBuffer.isView(e)) return !0;
			else if (r.equals(e) === !1) return r.copy(e), !0;
		}
		return !1;
	}
	function m(e) {
		let t = e.uniforms, n = 0;
		for (let e = 0, r = t.length; e < r; e++) {
			let r = Array.isArray(t[e]) ? t[e] : [t[e]];
			for (let i = 0, a = r.length; i < a; i++) {
				let a = r[i], o = Array.isArray(a.value) ? a.value : [a.value], s = Array.isArray(t[e]) || Array.isArray(a.value), c = n;
				for (let e = 0, t = o.length; e < t; e++) {
					let t = o[e], r = h(t, s), i = n % 16, a = i % r.boundary, l = i + a;
					n += a, l !== 0 && 16 - l < r.storage && (n += 16 - l), e === 0 && (c = n), n += r.storage;
				}
				a.__data = new (a.type === "int" ? Int32Array : a.type === "uint" ? Uint32Array : Float32Array)((n - c) / Float32Array.BYTES_PER_ELEMENT), a.__offset = c;
			}
		}
		let r = n % 16;
		return r > 0 && (n += 16 - r), e.__size = n, e.__cache = {}, this;
	}
	function h(e, t) {
		let n = {
			boundary: 0,
			storage: 0
		};
		return typeof e == "number" || typeof e == "boolean" ? (n.boundary = 4, n.storage = 4) : e.isVector2 ? (n.boundary = 8, n.storage = 8) : e.isVector3 || e.isColor ? (n.boundary = 16, n.storage = 12) : e.isVector4 ? (n.boundary = 16, n.storage = 16) : e.isMatrix3 ? (n.boundary = 16, n.storage = 48) : e.isMatrix4 ? (n.boundary = 16, n.storage = 64) : e.isTexture ? J("WebGLRenderer: Texture samplers can not be part of an uniforms group.") : ArrayBuffer.isView(e) ? (n.boundary = 16, n.storage = e.byteLength) : J("WebGLRenderer: Unsupported uniform value type.", e), t === !0 && (n.boundary = 16, n.storage = Math.ceil(n.storage / 16) * 16), n;
	}
	function g(t) {
		let n = t.target;
		n.removeEventListener("dispose", g), e.deleteBuffer(i[n.id]), delete i[n.id], delete a[n.id];
	}
	function _() {
		for (let t in i) e.deleteBuffer(i[t]);
		i = {}, a = {};
	}
	return {
		bind: o,
		update: s,
		dispose: _
	};
}
var Ig = new Uint16Array([
	12469,
	15057,
	12620,
	14925,
	13266,
	14620,
	13807,
	14376,
	14323,
	13990,
	14545,
	13625,
	14713,
	13328,
	14840,
	12882,
	14931,
	12528,
	14996,
	12233,
	15039,
	11829,
	15066,
	11525,
	15080,
	11295,
	15085,
	10976,
	15082,
	10705,
	15073,
	10495,
	13880,
	14564,
	13898,
	14542,
	13977,
	14430,
	14158,
	14124,
	14393,
	13732,
	14556,
	13410,
	14702,
	12996,
	14814,
	12596,
	14891,
	12291,
	14937,
	11834,
	14957,
	11489,
	14958,
	11194,
	14943,
	10803,
	14921,
	10506,
	14893,
	10278,
	14858,
	9960,
	14484,
	14039,
	14487,
	14025,
	14499,
	13941,
	14524,
	13740,
	14574,
	13468,
	14654,
	13106,
	14743,
	12678,
	14818,
	12344,
	14867,
	11893,
	14889,
	11509,
	14893,
	11180,
	14881,
	10751,
	14852,
	10428,
	14812,
	10128,
	14765,
	9754,
	14712,
	9466,
	14764,
	13480,
	14764,
	13475,
	14766,
	13440,
	14766,
	13347,
	14769,
	13070,
	14786,
	12713,
	14816,
	12387,
	14844,
	11957,
	14860,
	11549,
	14868,
	11215,
	14855,
	10751,
	14825,
	10403,
	14782,
	10044,
	14729,
	9651,
	14666,
	9352,
	14599,
	9029,
	14967,
	12835,
	14966,
	12831,
	14963,
	12804,
	14954,
	12723,
	14936,
	12564,
	14917,
	12347,
	14900,
	11958,
	14886,
	11569,
	14878,
	11247,
	14859,
	10765,
	14828,
	10401,
	14784,
	10011,
	14727,
	9600,
	14660,
	9289,
	14586,
	8893,
	14508,
	8533,
	15111,
	12234,
	15110,
	12234,
	15104,
	12216,
	15092,
	12156,
	15067,
	12010,
	15028,
	11776,
	14981,
	11500,
	14942,
	11205,
	14902,
	10752,
	14861,
	10393,
	14812,
	9991,
	14752,
	9570,
	14682,
	9252,
	14603,
	8808,
	14519,
	8445,
	14431,
	8145,
	15209,
	11449,
	15208,
	11451,
	15202,
	11451,
	15190,
	11438,
	15163,
	11384,
	15117,
	11274,
	15055,
	10979,
	14994,
	10648,
	14932,
	10343,
	14871,
	9936,
	14803,
	9532,
	14729,
	9218,
	14645,
	8742,
	14556,
	8381,
	14461,
	8020,
	14365,
	7603,
	15273,
	10603,
	15272,
	10607,
	15267,
	10619,
	15256,
	10631,
	15231,
	10614,
	15182,
	10535,
	15118,
	10389,
	15042,
	10167,
	14963,
	9787,
	14883,
	9447,
	14800,
	9115,
	14710,
	8665,
	14615,
	8318,
	14514,
	7911,
	14411,
	7507,
	14279,
	7198,
	15314,
	9675,
	15313,
	9683,
	15309,
	9712,
	15298,
	9759,
	15277,
	9797,
	15229,
	9773,
	15166,
	9668,
	15084,
	9487,
	14995,
	9274,
	14898,
	8910,
	14800,
	8539,
	14697,
	8234,
	14590,
	7790,
	14479,
	7409,
	14367,
	7067,
	14178,
	6621,
	15337,
	8619,
	15337,
	8631,
	15333,
	8677,
	15325,
	8769,
	15305,
	8871,
	15264,
	8940,
	15202,
	8909,
	15119,
	8775,
	15022,
	8565,
	14916,
	8328,
	14804,
	8009,
	14688,
	7614,
	14569,
	7287,
	14448,
	6888,
	14321,
	6483,
	14088,
	6171,
	15350,
	7402,
	15350,
	7419,
	15347,
	7480,
	15340,
	7613,
	15322,
	7804,
	15287,
	7973,
	15229,
	8057,
	15148,
	8012,
	15046,
	7846,
	14933,
	7611,
	14810,
	7357,
	14682,
	7069,
	14552,
	6656,
	14421,
	6316,
	14251,
	5948,
	14007,
	5528,
	15356,
	5942,
	15356,
	5977,
	15353,
	6119,
	15348,
	6294,
	15332,
	6551,
	15302,
	6824,
	15249,
	7044,
	15171,
	7122,
	15070,
	7050,
	14949,
	6861,
	14818,
	6611,
	14679,
	6349,
	14538,
	6067,
	14398,
	5651,
	14189,
	5311,
	13935,
	4958,
	15359,
	4123,
	15359,
	4153,
	15356,
	4296,
	15353,
	4646,
	15338,
	5160,
	15311,
	5508,
	15263,
	5829,
	15188,
	6042,
	15088,
	6094,
	14966,
	6001,
	14826,
	5796,
	14678,
	5543,
	14527,
	5287,
	14377,
	4985,
	14133,
	4586,
	13869,
	4257,
	15360,
	1563,
	15360,
	1642,
	15358,
	2076,
	15354,
	2636,
	15341,
	3350,
	15317,
	4019,
	15273,
	4429,
	15203,
	4732,
	15105,
	4911,
	14981,
	4932,
	14836,
	4818,
	14679,
	4621,
	14517,
	4386,
	14359,
	4156,
	14083,
	3795,
	13808,
	3437,
	15360,
	122,
	15360,
	137,
	15358,
	285,
	15355,
	636,
	15344,
	1274,
	15322,
	2177,
	15281,
	2765,
	15215,
	3223,
	15120,
	3451,
	14995,
	3569,
	14846,
	3567,
	14681,
	3466,
	14511,
	3305,
	14344,
	3121,
	14037,
	2800,
	13753,
	2467,
	15360,
	0,
	15360,
	1,
	15359,
	21,
	15355,
	89,
	15346,
	253,
	15325,
	479,
	15287,
	796,
	15225,
	1148,
	15133,
	1492,
	15008,
	1749,
	14856,
	1882,
	14685,
	1886,
	14506,
	1783,
	14324,
	1608,
	13996,
	1398,
	13702,
	1183
]), Lg = null;
function Rg() {
	return Lg === null && (Lg = new Ld(Ig, 16, 16, Ts, fs), Lg.name = "DFG_LUT", Lg.minFilter = ns, Lg.magFilter = ns, Lg.wrapS = Zo, Lg.wrapT = Zo, Lg.generateMipmaps = !1, Lg.needsUpdate = !0), Lg;
}
var zg = class {
	constructor(e = {}) {
		let { canvas: t = Oc(), context: n = null, depth: r = !0, stencil: i = !1, alpha: a = !1, antialias: o = !1, premultipliedAlpha: s = !0, preserveDrawingBuffer: c = !1, powerPreference: l = "default", failIfMajorPerformanceCaveat: u = !1, reversedDepthBuffer: d = !1, outputBufferType: f = as } = e;
		this.isWebGLRenderer = !0;
		let p;
		if (n !== null) {
			if (typeof WebGLRenderingContext < "u" && n instanceof WebGLRenderingContext) throw Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");
			p = n.getContextAttributes().alpha;
		} else p = a;
		let m = f, h = /* @__PURE__ */ new Set([
			Ds,
			Es,
			ws
		]), g = /* @__PURE__ */ new Set([
			as,
			us,
			cs,
			hs,
			ps,
			ms
		]), _ = /* @__PURE__ */ new Uint32Array(4), v = /* @__PURE__ */ new Int32Array(4), y = {
			textures: [],
			min: [],
			max: [],
			resolution: []
		}, b = null, x = null, S = [], C = [], w = null;
		this.domElement = t, this.debug = {
			checkShaderErrors: !0,
			diagnostics: { keywords: !1 },
			onShaderError: null
		}, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this.toneMapping = 0, this.toneMappingExposure = 1, this.transmissionResolutionScale = 1;
		let T = this, E = !1, D = null, O = null, k = null, A = null;
		this._outputColorSpace = vc;
		let j = 0, M = 0, N = null, P = -1, ee = null, F = new Ol(), te = new Ol(), I = null, L = new mu(0), R = 0, z = t.width, B = t.height, V = 1, ne = null, re = null, ie = new Ol(0, 0, z, B), ae = new Ol(0, 0, z, B), oe = !1, se = new Vd(), ce = new Ud(), le = !1, ue = !1, de = new Nl(), fe = new Z(), pe = new Ol(), me = {
			background: null,
			fog: null,
			environment: null,
			overrideMaterial: null,
			isScene: !0
		}, he = !1;
		function ge() {
			return N === null ? V : 1;
		}
		let H = n;
		function U(e, n) {
			return t.getContext(e, n);
		}
		let W, _e, G, ve, K, q, ye, be, xe, Se, Ce, we, Te, Ee, De, Oe, ke, Ae, je, Me, Ne, Pe, Fe;
		try {
			let e = {
				alpha: !0,
				depth: r,
				stencil: i,
				antialias: o,
				premultipliedAlpha: s,
				preserveDrawingBuffer: c,
				powerPreference: l,
				failIfMajorPerformanceCaveat: u
			};
			if ("setAttribute" in t && t.setAttribute("data-engine", "three.js r187"), t.addEventListener("webglcontextlost", Re, !1), t.addEventListener("webglcontextrestored", ze, !1), t.addEventListener("webglcontextcreationerror", Be, !1), H === null) {
				let t = "webgl2";
				if (H = U(t, e), H === null) throw U(t) ? Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.") : Error("THREE.WebGLRenderer: Error creating WebGL context.");
			}
			Ie();
		} catch (e) {
			throw t.removeEventListener("webglcontextlost", Re, !1), t.removeEventListener("webglcontextrestored", ze, !1), t.removeEventListener("webglcontextcreationerror", Be, !1), Y("WebGLRenderer: " + e.message), e;
		}
		function Ie() {
			W = new am(H), W.init(), Ne = new Dg(H, W), _e = new zp(H, W, e, Ne), G = new Tg(H, W), _e.reversedDepthBuffer && d && G.buffers.depth.setReversed(!0), O = H.createFramebuffer(), k = H.createFramebuffer(), A = H.createFramebuffer(), ve = new cm(H), K = new ag(), q = new Eg(H, W, G, K, _e, Ne, ve), ye = new im(T), be = new Ap(H), Pe = new Lp(H, be), xe = new om(H, be, ve, Pe), Se = new um(H, xe, be, Pe, ve), Ae = new lm(H, _e, q), De = new Bp(K), Ce = new ig(T, ye, W, _e, Pe, De), we = new Pg(T, K), Te = new lg(), Ee = new gg(W), ke = new Ip(T, ye, G, Se, p, s), Oe = new wg(T, Se, _e), Fe = new Fg(H, ve, _e, G), je = new Rp(H, W, ve), Me = new sm(H, W, ve), ve.programs = Ce.programs, T.capabilities = _e, T.extensions = W, T.properties = K, T.renderLists = Te, T.shadowMap = Oe, T.state = G, T.info = ve;
		}
		m !== 1009 && (w = new fm(m, t.width, t.height, o, r, i));
		let Le = new jg(T, H);
		this.xr = Le, this.getContext = function() {
			return H;
		}, this.getContextAttributes = function() {
			return H.getContextAttributes();
		}, this.forceContextLoss = function() {
			let e = W.get("WEBGL_lose_context");
			e && e.loseContext();
		}, this.forceContextRestore = function() {
			let e = W.get("WEBGL_lose_context");
			e && e.restoreContext();
		}, this.getPixelRatio = function() {
			return V;
		}, this.setPixelRatio = function(e) {
			e !== void 0 && (V = e, this.setSize(z, B, !1));
		}, this.getSize = function(e) {
			return e.set(z, B);
		}, this.setSize = function(e, n, r = !0) {
			Le.isPresenting ? J("WebGLRenderer: Can't change size while VR device is presenting.") : (z = e, B = n, t.width = Math.floor(e * V), t.height = Math.floor(n * V), r === !0 && (t.style.width = e + "px", t.style.height = n + "px"), w !== null && w.setSize(t.width, t.height), this.setViewport(0, 0, e, n));
		}, this.getDrawingBufferSize = function(e) {
			return e.set(z * V, B * V).floor();
		}, this.setDrawingBufferSize = function(e, n, r) {
			z = e, B = n, V = r, t.width = Math.floor(e * r), t.height = Math.floor(n * r), this.setViewport(0, 0, e, n);
		}, this.setEffects = function(e) {
			if (m === 1009) Y("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");
			else {
				if (e) {
					for (let t = 0; t < e.length; t++) if (e[t].isOutputPass === !0) {
						J("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");
						break;
					}
				}
				w.setEffects(e || []);
			}
		}, this.getCurrentViewport = function(e) {
			return e.copy(F);
		}, this.getViewport = function(e) {
			return e.copy(ie);
		}, this.setViewport = function(e, t, n, r) {
			e.isVector4 ? ie.set(e.x, e.y, e.z, e.w) : ie.set(e, t, n, r), G.viewport(F.copy(ie).multiplyScalar(ge()).round());
		}, this.getScissor = function(e) {
			return e.copy(ae);
		}, this.setScissor = function(e, t, n, r) {
			e.isVector4 ? ae.set(e.x, e.y, e.z, e.w) : ae.set(e, t, n, r), G.scissor(te.copy(ae).multiplyScalar(ge()).round());
		}, this.getScissorTest = function() {
			return oe;
		}, this.setScissorTest = function(e) {
			G.setScissorTest(oe = e);
		}, this.setOpaqueSort = function(e) {
			ne = e;
		}, this.setTransparentSort = function(e) {
			re = e;
		}, this.getClearColor = function(e) {
			return e.copy(ke.getClearColor());
		}, this.setClearColor = function() {
			ke.setClearColor(...arguments);
		}, this.getClearAlpha = function() {
			return ke.getClearAlpha();
		}, this.setClearAlpha = function() {
			ke.setClearAlpha(...arguments);
		}, this.clear = function(e = !0, t = !0, n = !0) {
			let r = 0;
			if (e) {
				let e = !1;
				if (N !== null) {
					let t = N.texture.format;
					e = h.has(t);
				}
				if (e) {
					let e = N.texture.type, t = g.has(e), n = ke.getClearColor(), r = ke.getClearAlpha(), i = n.r, a = n.g, o = n.b;
					t ? (_[0] = i, _[1] = a, _[2] = o, _[3] = r, H.clearBufferuiv(H.COLOR, 0, _)) : (v[0] = i, v[1] = a, v[2] = o, v[3] = r, H.clearBufferiv(H.COLOR, 0, v));
				} else r |= H.COLOR_BUFFER_BIT;
			}
			t && (r |= H.DEPTH_BUFFER_BIT, this.state.buffers.depth.setMask(!0)), n && (r |= H.STENCIL_BUFFER_BIT, this.state.buffers.stencil.setMask(4294967295)), r !== 0 && H.clear(r);
		}, this.clearColor = function() {
			this.clear(!0, !1, !1);
		}, this.clearDepth = function() {
			this.clear(!1, !0, !1);
		}, this.clearStencil = function() {
			this.clear(!1, !1, !0);
		}, this.setNodesHandler = function(e) {
			e.setRenderer(this), D = e;
		}, this.dispose = function() {
			t.removeEventListener("webglcontextlost", Re, !1), t.removeEventListener("webglcontextrestored", ze, !1), t.removeEventListener("webglcontextcreationerror", Be, !1), ke.dispose(), Te.dispose(), Ee.dispose(), q.dispose(), K.dispose(), ye.dispose(), Se.dispose(), xe.dispose(), Pe.dispose(), Fe.dispose(), Ce.dispose(), Le.dispose(), Le.removeEventListener("sessionstart", qe), Le.removeEventListener("sessionend", Je), Ye.stop();
		};
		function Re(e) {
			e.preventDefault(), Ac("WebGLRenderer: Context Lost."), E = !0;
		}
		function ze() {
			Ac("WebGLRenderer: Context Restored."), E = !1;
			let e = ve.autoReset, t = Oe.enabled, n = Oe.autoUpdate, r = Oe.needsUpdate, i = Oe.type;
			Ie(), ve.autoReset = e, Oe.enabled = t, Oe.autoUpdate = n, Oe.needsUpdate = r, Oe.type = i;
		}
		function Be(e) {
			Y("WebGLRenderer: A WebGL context could not be created. Reason: ", e.statusMessage);
		}
		function Ve(e) {
			let t = e.target;
			t.removeEventListener("dispose", Ve), He(t);
		}
		function He(e) {
			Ue(e), K.remove(e);
		}
		function Ue(e) {
			let t = K.get(e).programs;
			t !== void 0 && (t.forEach(function(e) {
				Ce.releaseProgram(e);
			}), e.isShaderMaterial && Ce.releaseShaderCache(e));
		}
		this.renderBufferDirect = function(e, t, n, r, i, a) {
			t === null && (t = me);
			let o = i.isMesh && i.matrixWorld.determinantAffine() < 0, s = ot(e, t, n, r, i);
			G.setMaterial(r, o);
			let c = n.index, l = 1;
			if (r.wireframe === !0) {
				if (c = xe.getWireframeAttribute(n), c === void 0) return;
				l = 2;
			}
			let u = n.drawRange, d = n.attributes.position, f = u.start * l, p = (u.start + u.count) * l;
			a !== null && (f = Math.max(f, a.start * l), p = Math.min(p, (a.start + a.count) * l)), c === null ? d != null && (f = Math.max(f, 0), p = Math.min(p, d.count)) : (f = Math.max(f, 0), p = Math.min(p, c.count));
			let m = p - f;
			if (m < 0 || m === Infinity) return;
			Pe.setup(i, r, s, n, c);
			let h, g = je;
			if (c !== null && (h = be.get(c), g = Me, g.setIndex(h)), i.isMesh) r.wireframe === !0 ? (G.setLineWidth(r.wireframeLinewidth * ge()), g.setMode(H.LINES)) : g.setMode(H.TRIANGLES);
			else if (i.isLine) {
				let e = r.linewidth;
				e === void 0 && (e = 1), G.setLineWidth(e * ge()), i.isLineSegments ? g.setMode(H.LINES) : i.isLineLoop ? g.setMode(H.LINE_LOOP) : g.setMode(H.LINE_STRIP);
			} else i.isPoints ? g.setMode(H.POINTS) : i.isSprite && g.setMode(H.TRIANGLES);
			if (i.isBatchedMesh) {
				if (W.get("WEBGL_multi_draw")) g.renderMultiDraw(i._multiDrawStarts, i._multiDrawCounts, i._multiDrawCount);
				else {
					let e = i._multiDrawStarts, t = i._multiDrawCounts, n = i._multiDrawCount, a = c ? be.get(c).bytesPerElement : 1, o = K.get(r).currentProgram.getUniforms();
					for (let r = 0; r < n; r++) o.setValue(H, "_gl_DrawID", r), g.render(e[r] / a, t[r]);
				}
			} else if (i.isInstancedMesh) g.renderInstances(f, m, i.count);
			else if (n.isInstancedBufferGeometry) {
				let e = n._maxInstanceCount === void 0 ? Infinity : n._maxInstanceCount, t = Math.min(n.instanceCount, e);
				g.renderInstances(f, m, t);
			} else g.render(f, m);
		};
		function We(e, t, n, r) {
			D !== null && e.isNodeMaterial && D.setObject(r, e), le === !0 && De.setState(e, n, !1), e.transparent === !0 && e.side === 2 && e.forceSinglePass === !1 ? (e.side = 1, e.needsUpdate = !0, nt(e, t, r), e.side = 0, e.needsUpdate = !0, nt(e, t, r), e.side = 2) : nt(e, t, r);
		}
		this.compile = function(e, t, n = null) {
			n === null && (n = e), D !== null && D.renderStart(e, t, n), x = Ee.get(n), x.init(t), C.push(x), n.traverseVisible(function(e) {
				e.isLight && e.layers.test(t.layers) && (x.pushLight(e), e.castShadow && x.pushShadow(e));
			}), e !== n && e.traverseVisible(function(e) {
				e.isLight && e.layers.test(t.layers) && (x.pushLight(e), e.castShadow && x.pushShadow(e));
			}), x.setupLights(), D !== null && D.updateLights(x.state.lightsArray), ue = this.localClippingEnabled, le = De.init(this.clippingPlanes, ue), le === !0 && De.setGlobalState(this.clippingPlanes, t), D !== null && Oe.render(x.state.shadowsArray, n, t);
			let r = /* @__PURE__ */ new Set();
			return e.traverse(function(e) {
				if (!(e.isMesh || e.isPoints || e.isLine || e.isSprite)) return;
				let i = e.material;
				if (i) {
					if (Array.isArray(i)) for (let a = 0; a < i.length; a++) {
						let o = i[a];
						We(o, n, t, e), r.add(o);
					}
					else We(i, n, t, e), r.add(i);
				}
			}), x = C.pop(), D !== null && D.renderEnd(), r;
		}, this.compileAsync = function(e, t, n = null) {
			let r = this.compile(e, t, n);
			return new Promise((t) => {
				function n() {
					r.forEach(function(e) {
						let t = K.get(e).currentProgram;
						(t === void 0 || t.isReady()) && r.delete(e);
					}), r.size === 0 ? t(e) : setTimeout(n, 10);
				}
				W.get("KHR_parallel_shader_compile") === null ? setTimeout(n, 10) : n();
			});
		};
		let Ge = null;
		function Ke(e) {
			Ge && Ge(e);
		}
		function qe() {
			Ye.stop();
		}
		function Je() {
			Ye.start();
		}
		let Ye = new kp();
		Ye.setAnimationLoop(Ke), typeof self < "u" && Ye.setContext(self), this.setAnimationLoop = function(e) {
			Ge = e, Le.setAnimationLoop(e), e === null ? Ye.stop() : Ye.start();
		}, Le.addEventListener("sessionstart", qe), Le.addEventListener("sessionend", Je), this.render = function(e, t) {
			if (t !== void 0 && t.isCamera !== !0) {
				Y("WebGLRenderer.render: camera is not an instance of THREE.Camera.");
				return;
			}
			if (E === !0) return;
			D !== null && D.renderStart(e, t);
			let n = Le.enabled === !0 && Le.isPresenting === !0, r = w !== null && (N === null || n) && w.begin(T, N);
			if (e.matrixWorldAutoUpdate === !0 && e.updateMatrixWorld(), t.parent === null && t.matrixWorldAutoUpdate === !0 && t.updateMatrixWorld(), Le.enabled === !0 && Le.isPresenting === !0 && (w === null || w.isCompositing() === !1) && (Le.cameraAutoUpdate === !0 && Le.updateCamera(t), t = Le.getCamera()), e.isScene === !0 && e.onBeforeRender(T, e, t, N), x = Ee.get(e, C.length), x.init(t), x.state.textureUnits = q.getTextureUnits(), C.push(x), de.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse), t.isArrayCamera ? ce.setFromArrayCamera(t) : se.setFromProjectionMatrix(de, wc, t.reversedDepth), ue = this.localClippingEnabled, le = De.init(this.clippingPlanes, ue), b = Te.get(e, S.length), b.init(), S.push(b), this.info.render.frame++, Le.enabled === !0 && Le.isPresenting === !0) {
				let e = T.xr.getDepthSensingMesh();
				e !== null && Xe(e, t, -Infinity, T.sortObjects);
			}
			Xe(e, t, 0, T.sortObjects), b.finish(), D !== null && D.updateLights(x.state.lightsArray), T.sortObjects === !0 && b.sort(ne, re), he = Le.enabled === !1 || Le.isPresenting === !1 || Le.hasDepthSensing() === !1, he && ke.addToRenderList(b, e), this.info.autoReset === !0 && this.info.reset(), le === !0 && De.beginShadows();
			let i = x.state.shadowsArray;
			if (Oe.render(i, e, t), le === !0 && De.endShadows(), (r && w.hasRenderPass()) === !1) {
				let n = b.opaque, r = b.transmissive;
				if (x.setupLights(), t.isArrayCamera) {
					let i = t.cameras;
					if (r.length > 0) for (let t = 0, a = i.length; t < a; t++) {
						let a = i[t];
						Qe(n, r, e, a);
					}
					he && ke.render(e);
					for (let t = 0, n = i.length; t < n; t++) {
						let n = i[t];
						Ze(b, e, n, n.viewport);
					}
				} else r.length > 0 && Qe(n, r, e, t), he && ke.render(e), Ze(b, e, t);
			}
			N !== null && M === 0 && (q.updateMultisampleRenderTarget(N), q.updateRenderTargetMipmap(N)), r && w.end(T), e.isScene === !0 && e.onAfterRender(T, e, t), Pe.resetDefaultState(), P = -1, ee = null, C.pop(), C.length > 0 ? (x = C[C.length - 1], q.setTextureUnits(x.state.textureUnits), le === !0 && De.setGlobalState(T.clippingPlanes, x.state.camera)) : x = null, S.pop(), b = S.length > 0 ? S[S.length - 1] : null, D !== null && D.renderEnd();
		};
		function Xe(e, t, n, r) {
			if (e.visible === !1) return;
			if (e.layers.test(t.layers)) {
				if (e.isGroup) n = e.renderOrder;
				else if (e.isLOD) e.autoUpdate === !0 && e.update(t);
				else if (e.isLight) x.pushLight(e), e.castShadow && x.pushShadow(e);
				else if (e.isSprite) {
					let i = t.isArrayCamera ? ce : se;
					if (!e.frustumCulled || e.intersectsFrustum(i)) {
						r && pe.setFromMatrixPosition(e.matrixWorld).applyMatrix4(de);
						let i = Se.update(e), a = e.material;
						a.visible && b.push(e, i, a, n, pe.z, null, t);
					}
				} else if (e.isMesh || e.isLine || e.isPoints) {
					let i = t.isArrayCamera ? ce : se;
					if (!e.frustumCulled || e.intersectsFrustum(i)) {
						let i = Se.update(e), a = e.material;
						if (r && (e.boundingSphere === void 0 ? (i.boundingSphere === null && i.computeBoundingSphere(), pe.copy(i.boundingSphere.center)) : (e.boundingSphere === null && e.computeBoundingSphere(), pe.copy(e.boundingSphere.center)), pe.applyMatrix4(e.matrixWorld).applyMatrix4(de)), Array.isArray(a)) {
							let r = i.groups;
							for (let o = 0, s = r.length; o < s; o++) {
								let s = r[o], c = a[s.materialIndex];
								c && c.visible && b.push(e, i, c, n, pe.z, s, t);
							}
						} else a.visible && b.push(e, i, a, n, pe.z, null, t);
					}
				}
			}
			let i = e.children;
			for (let e = 0, a = i.length; e < a; e++) Xe(i[e], t, n, r);
		}
		function Ze(e, t, n, r) {
			let { opaque: i, transmissive: a, transparent: o } = e;
			x.setupLightsView(n), le === !0 && De.setGlobalState(T.clippingPlanes, n), r && G.viewport(F.copy(r)), i.length > 0 && $e(i, t, n), a.length > 0 && $e(a, t, n), o.length > 0 && $e(o, t, n), G.buffers.depth.setTest(!0), G.buffers.depth.setMask(!0), G.buffers.color.setMask(!0), G.setPolygonOffset(!1);
		}
		function Qe(e, t, n, r) {
			if ((n.isScene === !0 ? n.overrideMaterial : null) !== null) return;
			if (x.state.transmissionRenderTarget[r.id] === void 0) {
				let e = W.has("EXT_color_buffer_half_float") || W.has("EXT_color_buffer_float");
				x.state.transmissionRenderTarget[r.id] = new Al(1, 1, {
					generateMipmaps: !0,
					type: e ? fs : as,
					minFilter: is,
					samples: Math.max(4, _e.samples),
					stencilBuffer: i,
					resolveDepthBuffer: !1,
					resolveStencilBuffer: !1,
					storeMultisampledDepthBuffer: !1,
					storeMultisampledStencilBuffer: !1,
					colorSpace: _l.workingColorSpace
				});
			}
			let a = x.state.transmissionRenderTarget[r.id], o = r.viewport || F;
			a.setSize(o.z * T.transmissionResolutionScale, o.w * T.transmissionResolutionScale);
			let s = T.getRenderTarget(), c = T.getActiveCubeFace(), l = T.getActiveMipmapLevel();
			T.setRenderTarget(a), T.getClearColor(L), R = T.getClearAlpha(), R < 1 && T.setClearColor(16777215, .5), T.clear(), he && ke.render(n);
			let u = T.toneMapping;
			T.toneMapping = 0;
			let d = r.viewport;
			if (r.viewport !== void 0 && (r.viewport = void 0), x.setupLightsView(r), le === !0 && De.setGlobalState(T.clippingPlanes, r), $e(e, n, r), q.updateMultisampleRenderTarget(a), q.updateRenderTargetMipmap(a), W.has("WEBGL_multisampled_render_to_texture") === !1) {
				let e = !1;
				for (let i = 0, a = t.length; i < a; i++) {
					let { object: a, geometry: o, material: s, group: c } = t[i];
					if (s.side === 2 && a.layers.test(r.layers)) {
						let t = s.side;
						s.side = 1, s.needsUpdate = !0, et(a, n, r, o, s, c), s.side = t, s.needsUpdate = !0, e = !0;
					}
				}
				e === !0 && (q.updateMultisampleRenderTarget(a), q.updateRenderTargetMipmap(a));
			}
			T.setRenderTarget(s, c, l), T.setClearColor(L, R), d !== void 0 && (r.viewport = d), T.toneMapping = u;
		}
		function $e(e, t, n) {
			let r = t.isScene === !0 ? t.overrideMaterial : null;
			for (let i = 0, a = e.length; i < a; i++) {
				let a = e[i], { object: o, geometry: s, group: c } = a, l = a.material;
				l.allowOverride === !0 && r !== null && (l = r), o.layers.test(n.layers) && et(o, t, n, s, l, c);
			}
		}
		function et(e, t, n, r, i, a) {
			D !== null && i.isNodeMaterial && D.setObject(e, i), e.onBeforeRender(T, t, n, r, i, a), e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse, e.matrixWorld), e.normalMatrix.getNormalMatrix(e.modelViewMatrix), i.onBeforeRender(T, t, n, r, e, a), i.transparent === !0 && i.side === 2 && i.forceSinglePass === !1 ? (i.side = 1, i.needsUpdate = !0, T.renderBufferDirect(n, t, r, i, e, a), i.side = 0, i.needsUpdate = !0, T.renderBufferDirect(n, t, r, i, e, a), i.side = 2) : T.renderBufferDirect(n, t, r, i, e, a), e.onAfterRender(T, t, n, r, i, a);
		}
		function tt(e) {
			let t = 0;
			for (let n of e) n.texture !== null && t++;
			return t;
		}
		function nt(e, t, n) {
			t.isScene !== !0 && (t = me);
			let r = K.get(e), i = x.state.lights, a = x.state.shadowsArray, o = i.state.version, s = Ce.getParameters(e, i.state, a, t, n, x.state.lightProbeGridArray), c = Ce.getProgramCacheKey(s), l = r.programs;
			r.environment = e.isMeshStandardMaterial || e.isMeshLambertMaterial || e.isMeshPhongMaterial ? t.environment : null, r.fog = t.fog;
			let u = e.isMeshStandardMaterial || e.isMeshLambertMaterial && !e.envMap || e.isMeshPhongMaterial && !e.envMap;
			r.envMap = ye.get(e.envMap || r.environment, u), r.envMapRotation = r.environment !== null && e.envMap === null ? t.environmentRotation : e.envMapRotation, l === void 0 && (e.addEventListener("dispose", Ve), l = /* @__PURE__ */ new Map(), r.programs = l, r.programVariants = /* @__PURE__ */ new Map());
			let d = l.get(c);
			if (d !== void 0) {
				if (r.currentProgram === d && r.lightsStateVersion === o) return at(e, s), d;
			} else s.uniforms = Ce.getUniforms(e), D !== null && e.isNodeMaterial && D.build(e, n, s), e.onBeforeCompile(s, T), d = Ce.acquireProgram(s, c), l.set(c, d), r.uniforms = s.uniforms;
			let f = r.uniforms;
			return (!e.isShaderMaterial && !e.isRawShaderMaterial || e.clipping === !0) && (f.clippingPlanes = De.uniform), at(e, s), r.needsLights = ct(e), r.lightsStateVersion = o, r.needsLights && (f.ambientLightColor.value = i.state.ambient, f.lightProbe.value = i.state.probe, f.sunLights.value = i.state.sun, f.sunLightShadows.value = i.state.sunShadow, f.directionalLights.value = i.state.directional, f.directionalLightShadows.value = i.state.directionalShadow, f.spotLights.value = i.state.spot, f.spotLightShadows.value = i.state.spotShadow, f.rectAreaLights.value = i.state.rectArea, f.ltc_1.value = i.state.rectAreaLTC1, f.ltc_2.value = i.state.rectAreaLTC2, f.pointLights.value = i.state.point, f.pointLightShadows.value = i.state.pointShadow, f.hemisphereLights.value = i.state.hemi, f.sunShadowMatrix.value = i.state.sunShadowMatrix, f.sunShadowCascade.value = i.state.sunShadowCascade, f.directionalShadowMatrix.value = i.state.directionalShadowMatrix, f.spotLightMatrix.value = i.state.spotLightMatrix, f.spotLightMap.value = i.state.spotLightMap, f.pointShadowMatrix.value = i.state.pointShadowMatrix), r.numLightProbeGrids = tt(x.state.lightProbeGridArray), r.currentProgram = d, r.uniformsList = null, d;
		}
		function rt(e, t, n, r, i) {
			let a = K.get(e), o = a.currentProgram.id + "," + r + "," + i, s = a.programVariants.get(o);
			return s === void 0 ? (s = nt(e, t, n), a.programVariants.set(o, s)) : (a.currentProgram = s, a.uniformsList = null, a.outputColorSpace = r, a.toneMapping = i), s;
		}
		function it(e) {
			if (e.uniformsList === null) {
				let t = e.currentProgram.getUniforms();
				e.uniformsList = xh.seqWithValue(t.seq, e.uniforms);
			}
			return e.uniformsList;
		}
		function at(e, t) {
			let n = K.get(e);
			n.outputColorSpace = t.outputColorSpace, n.batching = t.batching, n.batchingColor = t.batchingColor, n.instancing = t.instancing, n.instancingColor = t.instancingColor, n.instancingMorph = t.instancingMorph, n.skinning = t.skinning, n.morphTargets = t.morphTargets, n.morphNormals = t.morphNormals, n.morphColors = t.morphColors, n.morphTargetsCount = t.morphTargetsCount, n.numClippingPlanes = t.numClippingPlanes, n.numIntersection = t.numClipIntersection, n.vertexAlphas = t.vertexAlphas, n.vertexTangents = t.vertexTangents, n.toneMapping = t.toneMapping;
		}
		function ot(e, t, n, r, i) {
			t.isScene !== !0 && (t = me), q.resetTextureUnits();
			let a = t.fog, o = r.isMeshStandardMaterial || r.isMeshLambertMaterial || r.isMeshPhongMaterial ? t.environment : null, s = N === null ? T.outputColorSpace : N.isXRRenderTarget === !0 ? N.texture.colorSpace : _l.workingColorSpace, c = r.isMeshStandardMaterial || r.isMeshLambertMaterial && !r.envMap || r.isMeshPhongMaterial && !r.envMap, l = ye.get(r.envMap || o, c), u = r.vertexColors === !0 && !!n.attributes.color && n.attributes.color.itemSize === 4, d = !!n.attributes.tangent && (!!r.normalMap || r.anisotropy > 0), f = !!n.morphAttributes.position, p = !!n.morphAttributes.normal, m = !!n.morphAttributes.color, h = 0;
			r.toneMapped && (N === null || N.isXRRenderTarget === !0) && (h = T.toneMapping);
			let g = n.morphAttributes.position || n.morphAttributes.normal || n.morphAttributes.color, _ = g === void 0 ? 0 : g.length, v = K.get(r), b = x.state.lights;
			if (le === !0 && (ue === !0 || e !== ee)) {
				let t = e === ee && r.id === P;
				De.setState(r, e, t);
			}
			let S = !1, C = !1;
			r.version === v.__version ? v.needsLights && v.lightsStateVersion !== b.state.version || i.isBatchedMesh && v.batching === !1 || !i.isBatchedMesh && v.batching === !0 || i.isBatchedMesh && v.batchingColor === !0 && i._colorsTexture === null || i.isBatchedMesh && v.batchingColor === !1 && i._colorsTexture !== null || i.isInstancedMesh && v.instancing === !1 || !i.isInstancedMesh && v.instancing === !0 || i.isSkinnedMesh && v.skinning === !1 || !i.isSkinnedMesh && v.skinning === !0 || i.isInstancedMesh && v.instancingColor === !0 && i.instanceColor === null || i.isInstancedMesh && v.instancingColor === !1 && i.instanceColor !== null || i.isInstancedMesh && v.instancingMorph === !0 && i.morphTexture === null || i.isInstancedMesh && v.instancingMorph === !1 && i.morphTexture !== null ? S = !0 : v.envMap === l ? r.fog === !0 && v.fog !== a || v.numClippingPlanes !== void 0 && (v.numClippingPlanes !== De.numPlanes || v.numIntersection !== De.numIntersection) ? S = !0 : v.vertexAlphas === u && v.vertexTangents === d && v.morphTargets === f && v.morphNormals === p && v.morphColors === m && v.morphTargetsCount === _ && v.numLightProbeGrids === tt(x.state.lightProbeGridArray) ? (v.outputColorSpace !== s || v.toneMapping !== h) && (C = !0) : S = !0 : S = !0 : (S = !0, v.__version = r.version);
			let w = v.currentProgram;
			(S === !0 || C === !0) && (w = C === !0 ? rt(r, t, i, s, h) : nt(r, t, i), D && r.isNodeMaterial && D.onUpdateProgram(r, w, v));
			let E = !1, O = !1, k = !1, A = w.getUniforms(), j = v.uniforms;
			if (G.useProgram(w.program) && (E = !0, O = !0, k = !0), r.id !== P && (P = r.id, O = !0), E || ee !== e) {
				G.buffers.depth.getReversed() && e.reversedDepth !== !0 && (e._reversedDepth = !0, e.updateProjectionMatrix()), A.setValue(H, "projectionMatrix", e.projectionMatrix), A.setValue(H, "viewMatrix", e.matrixWorldInverse);
				let t = A.map.cameraPosition;
				t !== void 0 && t.setValue(H, fe.setFromMatrixPosition(e.matrixWorld)), _e.logarithmicDepthBuffer && A.setValue(H, "logDepthBufFC", 2 / (Math.log(e.far + 1) / Math.LN2)), (r.isMeshPhongMaterial || r.isMeshToonMaterial || r.isMeshLambertMaterial || r.isMeshBasicMaterial || r.isMeshStandardMaterial || r.isShaderMaterial) && A.setValue(H, "isOrthographic", e.isOrthographicCamera === !0), ee !== e && (ee = e, O = !0, k = !0);
			}
			if (v.needsLights && (b.state.sunShadowMap.length > 0 && A.setValue(H, "sunShadowMap", b.state.sunShadowMap, q), b.state.directionalShadowMap.length > 0 && A.setValue(H, "directionalShadowMap", b.state.directionalShadowMap, q), b.state.spotShadowMap.length > 0 && A.setValue(H, "spotShadowMap", b.state.spotShadowMap, q), b.state.pointShadowMap.length > 0 && A.setValue(H, "pointShadowMap", b.state.pointShadowMap, q)), i.isSkinnedMesh) {
				A.setOptional(H, i, "bindMatrix"), A.setOptional(H, i, "bindMatrixInverse");
				let e = i.skeleton;
				e && (e.boneTexture === null && e.computeBoneTexture(), A.setValue(H, "boneTexture", e.boneTexture, q));
			}
			i.isBatchedMesh && (A.setOptional(H, i, "batchingTexture"), A.setValue(H, "batchingTexture", i._matricesTexture, q), A.setOptional(H, i, "batchingIdTexture"), A.setValue(H, "batchingIdTexture", i._indirectTexture, q), A.setOptional(H, i, "batchingColorTexture"), i._colorsTexture !== null && A.setValue(H, "batchingColorTexture", i._colorsTexture, q));
			let M = n.morphAttributes;
			if ((M.position !== void 0 || M.normal !== void 0 || M.color !== void 0) && Ae.update(i, n, w), (O || v.receiveShadow !== i.receiveShadow) && (v.receiveShadow = i.receiveShadow, A.setValue(H, "receiveShadow", i.receiveShadow)), (r.isMeshStandardMaterial || r.isMeshLambertMaterial || r.isMeshPhongMaterial) && r.envMap === null && t.environment !== null && (j.envMapIntensity.value = t.environmentIntensity), j.dfgLUT !== void 0 && (j.dfgLUT.value = Rg()), O) {
				if (A.setValue(H, "toneMappingExposure", T.toneMappingExposure), v.needsLights && st(j, k), a && r.fog === !0 && we.refreshFogUniforms(j, a), we.refreshMaterialUniforms(j, r, V, B, x.state.transmissionRenderTarget[e.id]), v.needsLights && v.numLightProbeGrids > 0) {
					let e = y, t = 0;
					for (let n of x.state.lightProbeGridArray) n.texture !== null && (e.textures[t] = n.texture, e.min[t] = n.boundingBox.min, e.max[t] = n.boundingBox.max, e.resolution[t] = n.resolution, t++);
					for (let n in e) e[n].length = t;
					j.probesSH.value = e.textures, j.probesMin.value = e.min, j.probesMax.value = e.max, j.probesResolution.value = e.resolution;
				}
				xh.upload(H, it(v), j, q);
			}
			if (r.isShaderMaterial && r.uniformsNeedUpdate === !0 && (xh.upload(H, it(v), j, q), r.uniformsNeedUpdate = !1), r.isSpriteMaterial && A.setValue(H, "center", i.center), A.setValue(H, "modelViewMatrix", i.modelViewMatrix), A.setValue(H, "normalMatrix", i.normalMatrix), A.setValue(H, "modelMatrix", i.matrixWorld), r.uniformsGroups !== void 0) {
				let e = r.uniformsGroups;
				for (let t = 0, n = e.length; t < n; t++) {
					let n = e[t];
					Fe.update(n, w), Fe.bind(n, w);
				}
			}
			return w;
		}
		function st(e, t) {
			e.ambientLightColor.needsUpdate = t, e.lightProbe.needsUpdate = t, e.sunLights.needsUpdate = t, e.sunLightShadows.needsUpdate = t, e.directionalLights.needsUpdate = t, e.directionalLightShadows.needsUpdate = t, e.pointLights.needsUpdate = t, e.pointLightShadows.needsUpdate = t, e.spotLights.needsUpdate = t, e.spotLightShadows.needsUpdate = t, e.rectAreaLights.needsUpdate = t, e.hemisphereLights.needsUpdate = t;
		}
		function ct(e) {
			return e.isMeshLambertMaterial || e.isMeshToonMaterial || e.isMeshPhongMaterial || e.isMeshStandardMaterial || e.isShadowMaterial || e.isShaderMaterial && e.lights === !0;
		}
		this.getActiveCubeFace = function() {
			return j;
		}, this.getActiveMipmapLevel = function() {
			return M;
		}, this.getRenderTarget = function() {
			return N;
		}, this.setRenderTargetTextures = function(e, t, n) {
			let r = K.get(e);
			r.__autoAllocateDepthBuffer = e.resolveDepthBuffer === !1, r.__autoAllocateDepthBuffer === !1 && (r.__useRenderToTexture = !1), K.get(e.texture).__webglTexture = t, K.get(e.depthTexture).__webglTexture = r.__autoAllocateDepthBuffer ? void 0 : n, r.__hasExternalTextures = !0;
		}, this.setRenderTargetFramebuffer = function(e, t) {
			let n = K.get(e);
			n.__webglFramebuffer = t, n.__useDefaultFramebuffer = t === void 0;
		}, this.setRenderTarget = function(e, t = 0, n = 0) {
			N = e, j = t, M = n;
			let r = null, i = !1, a = !1;
			if (e) {
				let o = K.get(e);
				if (o.__useDefaultFramebuffer !== void 0) {
					G.bindFramebuffer(H.FRAMEBUFFER, o.__webglFramebuffer), F.copy(e.viewport), te.copy(e.scissor), I = e.scissorTest, G.viewport(F), G.scissor(te), G.setScissorTest(I), P = -1;
					return;
				}
				if (o.__webglFramebuffer === void 0) q.setupRenderTarget(e);
				else if (o.__hasExternalTextures) q.rebindTextures(e, K.get(e.texture).__webglTexture, K.get(e.depthTexture).__webglTexture);
				else if (e.depthBuffer) {
					let t = e.depthTexture;
					if (o.__boundDepthTexture !== t) {
						if (t !== null && K.has(t) && (e.width !== t.image.width || e.height !== t.image.height)) throw Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");
						q.setupDepthRenderbuffer(e);
					}
				}
				let s = e.texture;
				(s.isData3DTexture || s.isDataArrayTexture || s.isCompressedArrayTexture) && (a = !0);
				let c = K.get(e).__webglFramebuffer;
				e.isWebGLCubeRenderTarget ? (r = Array.isArray(c[t]) ? c[t][n] : c[t], i = !0) : r = e.samples > 0 && q.useMultisampledRTT(e) === !1 ? K.get(e).__webglMultisampledFramebuffer : Array.isArray(c) ? c[n] : c, F.copy(e.viewport), te.copy(e.scissor), I = e.scissorTest;
			} else F.copy(ie).multiplyScalar(V).floor(), te.copy(ae).multiplyScalar(V).floor(), I = oe;
			if (n !== 0 && (r = O), G.bindFramebuffer(H.FRAMEBUFFER, r) && G.drawBuffers(e, r), G.viewport(F), G.scissor(te), G.setScissorTest(I), i) {
				let r = K.get(e.texture);
				H.framebufferTexture2D(H.FRAMEBUFFER, H.COLOR_ATTACHMENT0, H.TEXTURE_CUBE_MAP_POSITIVE_X + t, r.__webglTexture, n);
			} else if (a) {
				let r = t;
				for (let t = 0; t < e.textures.length; t++) {
					let i = K.get(e.textures[t]);
					H.framebufferTextureLayer(H.FRAMEBUFFER, H.COLOR_ATTACHMENT0 + t, i.__webglTexture, n, r);
				}
			} else if (e !== null && n !== 0) {
				let t = K.get(e.texture);
				H.framebufferTexture2D(H.FRAMEBUFFER, H.COLOR_ATTACHMENT0, H.TEXTURE_2D, t.__webglTexture, n);
			}
			P = -1;
		};
		function lt(e) {
			let t = K.get(e);
			return (t.__readFormat !== e.format || t.__readType !== e.type) && (t.__readFormat = e.format, t.__readType = e.type, t.__formatReadable = _e.textureFormatReadable(e.format), t.__typeReadable = _e.textureTypeReadable(e.type)), t;
		}
		this.readRenderTargetPixels = function(e, t, n, r, i, a, o, s = 0) {
			if (!(e && e.isWebGLRenderTarget)) {
				Y("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
				return;
			}
			let c = K.get(e).__webglFramebuffer;
			if (e.isWebGLCubeRenderTarget && o !== void 0 && (c = c[o], Array.isArray(c) && (c = c[0])), c) {
				G.bindFramebuffer(H.FRAMEBUFFER, c);
				try {
					let o = e.textures[s], c = o.format, l = o.type;
					e.textures.length > 1 && H.readBuffer(H.COLOR_ATTACHMENT0 + s);
					let u = lt(o);
					if (u.__formatReadable === !1) {
						Y("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
						return;
					}
					if (u.__typeReadable === !1) {
						Y("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
						return;
					}
					t >= 0 && t <= e.width - r && n >= 0 && n <= e.height - i && H.readPixels(t, n, r, i, Ne.convert(c), Ne.convert(l), a);
				} finally {
					let e = N === null ? null : K.get(N).__webglFramebuffer;
					G.bindFramebuffer(H.FRAMEBUFFER, e);
				}
			}
		}, this.readRenderTargetPixelsAsync = async function(e, t, n, r, i, a, o, s = 0) {
			if (!(e && e.isWebGLRenderTarget)) throw Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
			let c = K.get(e).__webglFramebuffer;
			if (e.isWebGLCubeRenderTarget && o !== void 0 && (c = c[o], Array.isArray(c) && (c = c[0])), c) {
				if (t >= 0 && t <= e.width - r && n >= 0 && n <= e.height - i) {
					G.bindFramebuffer(H.FRAMEBUFFER, c);
					let o = e.textures[s], l = o.format, u = o.type;
					e.textures.length > 1 && H.readBuffer(H.COLOR_ATTACHMENT0 + s);
					let d = lt(o);
					if (d.__formatReadable === !1) throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");
					if (d.__typeReadable === !1) throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");
					let f = H.createBuffer();
					H.bindBuffer(H.PIXEL_PACK_BUFFER, f), H.bufferData(H.PIXEL_PACK_BUFFER, a.byteLength, H.STREAM_READ), H.readPixels(t, n, r, i, Ne.convert(l), Ne.convert(u), 0), H.bindBuffer(H.PIXEL_PACK_BUFFER, null);
					let p = N === null ? null : K.get(N).__webglFramebuffer;
					G.bindFramebuffer(H.FRAMEBUFFER, p);
					let m = H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE, 0);
					return H.flush(), await Nc(H, m, 4), H.bindBuffer(H.PIXEL_PACK_BUFFER, f), H.getBufferSubData(H.PIXEL_PACK_BUFFER, 0, a), H.bindBuffer(H.PIXEL_PACK_BUFFER, null), H.deleteBuffer(f), H.deleteSync(m), a;
				}
				throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.");
			}
		}, this.copyFramebufferToTexture = function(e, t = null, n = 0) {
			let r = 2 ** -n, i = Math.floor(e.image.width * r), a = Math.floor(e.image.height * r), o = t === null ? 0 : t.x, s = t === null ? 0 : t.y;
			q.setTexture2D(e, 0), H.copyTexSubImage2D(H.TEXTURE_2D, n, 0, 0, o, s, i, a), G.unbindTexture();
		}, this.copyTextureToTexture = function(e, t, n = null, r = null, i = 0, a = 0) {
			let o, s, c, l, u, d, f, p, m, h = e.isCompressedTexture ? e.mipmaps[a] : e.image;
			if (n !== null) o = n.max.x - n.min.x, s = n.max.y - n.min.y, c = n.isBox3 ? n.max.z - n.min.z : 1, l = n.min.x, u = n.min.y, d = n.isBox3 ? n.min.z : 0;
			else {
				let t = 2 ** -i;
				o = Math.floor(h.width * t), s = Math.floor(h.height * t), c = e.isDataArrayTexture ? h.depth : e.isData3DTexture ? Math.floor(h.depth * t) : 1, l = 0, u = 0, d = 0;
			}
			r === null ? (f = 0, p = 0, m = 0) : (f = r.x, p = r.y, m = r.z);
			let g = Ne.convert(t.format), _ = Ne.convert(t.type), v;
			t.isData3DTexture ? (q.setTexture3D(t, 0), v = H.TEXTURE_3D) : t.isDataArrayTexture || t.isCompressedArrayTexture ? (q.setTexture2DArray(t, 0), v = H.TEXTURE_2D_ARRAY) : (q.setTexture2D(t, 0), v = H.TEXTURE_2D), G.activeTexture(H.TEXTURE0), G.pixelStorei(H.UNPACK_FLIP_Y_WEBGL, t.flipY), G.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL, t.premultiplyAlpha), G.pixelStorei(H.UNPACK_ALIGNMENT, t.unpackAlignment);
			let y = G.getParameter(H.UNPACK_ROW_LENGTH), b = G.getParameter(H.UNPACK_IMAGE_HEIGHT), x = G.getParameter(H.UNPACK_SKIP_PIXELS), S = G.getParameter(H.UNPACK_SKIP_ROWS), C = G.getParameter(H.UNPACK_SKIP_IMAGES);
			G.pixelStorei(H.UNPACK_ROW_LENGTH, h.width), G.pixelStorei(H.UNPACK_IMAGE_HEIGHT, h.height), G.pixelStorei(H.UNPACK_SKIP_PIXELS, l), G.pixelStorei(H.UNPACK_SKIP_ROWS, u), G.pixelStorei(H.UNPACK_SKIP_IMAGES, d);
			let w = e.isDataArrayTexture || e.isData3DTexture, T = t.isDataArrayTexture || t.isData3DTexture;
			if (e.isDepthTexture) {
				let n = K.get(e), r = K.get(t), h = K.get(n.__renderTarget), g = K.get(r.__renderTarget);
				G.bindFramebuffer(H.READ_FRAMEBUFFER, h.__webglFramebuffer), G.bindFramebuffer(H.DRAW_FRAMEBUFFER, g.__webglFramebuffer);
				for (let n = 0; n < c; n++) w && (H.framebufferTextureLayer(H.READ_FRAMEBUFFER, H.COLOR_ATTACHMENT0, K.get(e).__webglTexture, i, d + n), H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER, H.COLOR_ATTACHMENT0, K.get(t).__webglTexture, a, m + n)), H.blitFramebuffer(l, u, l + o, u + s, f, p, f + o, p + s, H.DEPTH_BUFFER_BIT, H.NEAREST);
				G.bindFramebuffer(H.READ_FRAMEBUFFER, null), G.bindFramebuffer(H.DRAW_FRAMEBUFFER, null);
			} else if (i !== 0 || e.isRenderTargetTexture || K.has(e)) {
				let n = K.get(e), r = K.get(t);
				G.bindFramebuffer(H.READ_FRAMEBUFFER, k), G.bindFramebuffer(H.DRAW_FRAMEBUFFER, A);
				for (let e = 0; e < c; e++) w ? H.framebufferTextureLayer(H.READ_FRAMEBUFFER, H.COLOR_ATTACHMENT0, n.__webglTexture, i, d + e) : H.framebufferTexture2D(H.READ_FRAMEBUFFER, H.COLOR_ATTACHMENT0, H.TEXTURE_2D, n.__webglTexture, i), T ? H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER, H.COLOR_ATTACHMENT0, r.__webglTexture, a, m + e) : H.framebufferTexture2D(H.DRAW_FRAMEBUFFER, H.COLOR_ATTACHMENT0, H.TEXTURE_2D, r.__webglTexture, a), i === 0 ? T ? H.copyTexSubImage3D(v, a, f, p, m + e, l, u, o, s) : H.copyTexSubImage2D(v, a, f, p, l, u, o, s) : H.blitFramebuffer(l, u, l + o, u + s, f, p, f + o, p + s, H.COLOR_BUFFER_BIT, H.NEAREST);
				G.bindFramebuffer(H.READ_FRAMEBUFFER, null), G.bindFramebuffer(H.DRAW_FRAMEBUFFER, null);
			} else T ? e.isDataTexture || e.isData3DTexture ? H.texSubImage3D(v, a, f, p, m, o, s, c, g, _, h.data) : t.isCompressedArrayTexture ? H.compressedTexSubImage3D(v, a, f, p, m, o, s, c, g, h.data) : H.texSubImage3D(v, a, f, p, m, o, s, c, g, _, h) : e.isDataTexture ? H.texSubImage2D(H.TEXTURE_2D, a, f, p, o, s, g, _, h.data) : e.isCompressedTexture ? H.compressedTexSubImage2D(H.TEXTURE_2D, a, f, p, h.width, h.height, g, h.data) : H.texSubImage2D(H.TEXTURE_2D, a, f, p, o, s, g, _, h);
			G.pixelStorei(H.UNPACK_ROW_LENGTH, y), G.pixelStorei(H.UNPACK_IMAGE_HEIGHT, b), G.pixelStorei(H.UNPACK_SKIP_PIXELS, x), G.pixelStorei(H.UNPACK_SKIP_ROWS, S), G.pixelStorei(H.UNPACK_SKIP_IMAGES, C), a === 0 && t.generateMipmaps === !0 && t.mipmapsAutoUpdate === !0 && H.generateMipmap(v), G.unbindTexture();
		}, this.initRenderTarget = function(e) {
			K.get(e).__webglFramebuffer === void 0 && q.setupRenderTarget(e);
		}, this.initTexture = function(e) {
			e.isCubeTexture ? q.setTextureCube(e, 0) : e.isData3DTexture ? q.setTexture3D(e, 0) : e.isDataArrayTexture || e.isCompressedArrayTexture ? q.setTexture2DArray(e, 0) : q.setTexture2D(e, 0), G.unbindTexture();
		}, this.resetState = function() {
			j = 0, M = 0, N = null, G.reset(), Pe.reset();
		}, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
	}
	get coordinateSystem() {
		return wc;
	}
	get outputColorSpace() {
		return this._outputColorSpace;
	}
	set outputColorSpace(e) {
		this._outputColorSpace = e;
		let t = this.getContext();
		t.drawingBufferColorSpace = _l._getDrawingBufferColorSpace(e), t.unpackColorSpace = _l._getUnpackColorSpace();
	}
}, Bg = { type: "change" }, Vg = { type: "start" }, Hg = { type: "end" }, Ug = new xd(), Wg = new md(), Gg = Math.cos(70 * ll.DEG2RAD), Kg = new Z(), qg = 2 * Math.PI, Jg = {
	NONE: -1,
	ROTATE: 0,
	DOLLY: 1,
	PAN: 2,
	TOUCH_ROTATE: 3,
	TOUCH_PAN: 4,
	TOUCH_DOLLY_PAN: 5,
	TOUCH_DOLLY_ROTATE: 6
}, Yg = 1e-6, Xg = class extends Ep {
	constructor(e, t = null) {
		super(e, t), this.state = Jg.NONE, this.target = new Z(), this.cursor = new Z(), this.minDistance = 0, this.maxDistance = Infinity, this.minZoom = 0, this.maxZoom = Infinity, this.minTargetRadius = 0, this.maxTargetRadius = Infinity, this.minPolarAngle = 0, this.maxPolarAngle = Math.PI, this.minAzimuthAngle = -Infinity, this.maxAzimuthAngle = Infinity, this.enableDamping = !1, this.dampingFactor = .05, this.enableZoom = !0, this.zoomSpeed = 1, this.enableRotate = !0, this.rotateSpeed = 1, this.keyRotateSpeed = 1, this.enablePan = !0, this.panSpeed = 1, this.screenSpacePanning = !0, this.keyPanSpeed = 7, this.zoomToCursor = !1, this.autoRotate = !1, this.autoRotateSpeed = 2, this.keys = {
			LEFT: "ArrowLeft",
			UP: "ArrowUp",
			RIGHT: "ArrowRight",
			BOTTOM: "ArrowDown"
		}, this.mouseButtons = {
			LEFT: Jo.ROTATE,
			MIDDLE: Jo.DOLLY,
			RIGHT: Jo.PAN
		}, this.touches = {
			ONE: Yo.ROTATE,
			TWO: Yo.DOLLY_PAN
		}, this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.zoom0 = this.object.zoom, this._cursorStyle = "auto", this._domElementKeyEvents = null, this._lastPosition = new Z(), this._lastQuaternion = new ul(), this._lastTargetPosition = new Z(), this._quat = new ul().setFromUnitVectors(e.up, new Z(0, 1, 0)), this._quatInverse = this._quat.clone().invert(), this._spherical = new wp(), this._sphericalDelta = new wp(), this._scale = 1, this._panOffset = new Z(), this._rotateStart = new X(), this._rotateEnd = new X(), this._rotateDelta = new X(), this._panStart = new X(), this._panEnd = new X(), this._panDelta = new X(), this._dollyStart = new X(), this._dollyEnd = new X(), this._dollyDelta = new X(), this._dollyDirection = new Z(), this._mouse = new X(), this._performCursorZoom = !1, this._pointers = [], this._pointerPositions = {}, this._controlActive = !1, this._onPointerMove = Qg.bind(this), this._onPointerDown = Zg.bind(this), this._onPointerUp = $g.bind(this), this._onContextMenu = o_.bind(this), this._onMouseWheel = n_.bind(this), this._onKeyDown = r_.bind(this), this._onTouchStart = i_.bind(this), this._onTouchMove = a_.bind(this), this._onMouseDown = e_.bind(this), this._onMouseMove = t_.bind(this), this._interceptControlDown = s_.bind(this), this._interceptControlUp = c_.bind(this), this.domElement !== null && this.connect(this.domElement), this.update();
	}
	set cursorStyle(e) {
		this._cursorStyle = e, e === "grab" ? this.domElement.style.cursor = "grab" : this.domElement.style.cursor = "auto";
	}
	get cursorStyle() {
		return this._cursorStyle;
	}
	connect(e) {
		super.connect(e), this.domElement.addEventListener("pointerdown", this._onPointerDown), this.domElement.addEventListener("pointercancel", this._onPointerUp), this.domElement.addEventListener("contextmenu", this._onContextMenu), this.domElement.addEventListener("wheel", this._onMouseWheel, { passive: !1 }), this.domElement.ownerDocument.addEventListener("keydown", this._interceptControlDown, {
			passive: !0,
			capture: !0
		}), this.domElement.style.touchAction = "none";
	}
	disconnect() {
		this.state = Jg.NONE, this.domElement.removeEventListener("pointerdown", this._onPointerDown), this.domElement.ownerDocument.removeEventListener("pointermove", this._onPointerMove), this.domElement.ownerDocument.removeEventListener("pointerup", this._onPointerUp), this.domElement.removeEventListener("pointercancel", this._onPointerUp), this.domElement.removeEventListener("wheel", this._onMouseWheel), this.domElement.removeEventListener("contextmenu", this._onContextMenu), this.stopListenToKeyEvents(), this.domElement.ownerDocument.removeEventListener("keydown", this._interceptControlDown, { capture: !0 }), this.domElement.ownerDocument.removeEventListener("keyup", this._interceptControlUp, { capture: !0 }), this._controlActive = !1, this._pointers.length = 0, this._pointerPositions = {}, this.domElement.style.touchAction = "", this.domElement.style.cursor = "auto";
	}
	dispose() {
		this.disconnect();
	}
	getPolarAngle() {
		return this._spherical.phi;
	}
	getAzimuthalAngle() {
		return this._spherical.theta;
	}
	getDistance() {
		return this.object.position.distanceTo(this.target);
	}
	listenToKeyEvents(e) {
		e.addEventListener("keydown", this._onKeyDown), this._domElementKeyEvents = e;
	}
	stopListenToKeyEvents() {
		this._domElementKeyEvents !== null && (this._domElementKeyEvents.removeEventListener("keydown", this._onKeyDown), this._domElementKeyEvents = null);
	}
	saveState() {
		this.target0.copy(this.target), this.position0.copy(this.object.position), this.zoom0 = this.object.zoom;
	}
	reset() {
		this.target.copy(this.target0), this.object.position.copy(this.position0), this.object.zoom = this.zoom0, this.object.updateProjectionMatrix(), this.dispatchEvent(Bg), this.update(), this.state = Jg.NONE;
	}
	pan(e, t) {
		this._pan(e, t), this.update();
	}
	dollyIn(e) {
		this._dollyIn(e), this.update();
	}
	dollyOut(e) {
		this._dollyOut(e), this.update();
	}
	rotateLeft(e) {
		this._rotateLeft(e), this.update();
	}
	rotateUp(e) {
		this._rotateUp(e), this.update();
	}
	update(e = null) {
		let t = this.object.position;
		Kg.copy(t).sub(this.target), Kg.applyQuaternion(this._quat), this._spherical.setFromVector3(Kg), this.autoRotate && this.state === Jg.NONE && this._rotateLeft(this._getAutoRotationAngle(e)), this.enableDamping ? (this._spherical.theta += this._sphericalDelta.theta * this.dampingFactor, this._spherical.phi += this._sphericalDelta.phi * this.dampingFactor) : (this._spherical.theta += this._sphericalDelta.theta, this._spherical.phi += this._sphericalDelta.phi);
		let n = this.minAzimuthAngle, r = this.maxAzimuthAngle;
		isFinite(n) && isFinite(r) && (n < -Math.PI ? n += qg : n > Math.PI && (n -= qg), r < -Math.PI ? r += qg : r > Math.PI && (r -= qg), n <= r ? this._spherical.theta = Math.max(n, Math.min(r, this._spherical.theta)) : this._spherical.theta = this._spherical.theta > (n + r) / 2 ? Math.max(n, this._spherical.theta) : Math.min(r, this._spherical.theta)), this._spherical.phi = Math.max(this.minPolarAngle, Math.min(this.maxPolarAngle, this._spherical.phi)), this._spherical.makeSafe(), this.enableDamping === !0 ? this.target.addScaledVector(this._panOffset, this.dampingFactor) : this.target.add(this._panOffset), this.target.sub(this.cursor), this.target.clampLength(this.minTargetRadius, this.maxTargetRadius), this.target.add(this.cursor);
		let i = !1;
		if (this.zoomToCursor && this._performCursorZoom || this.object.isOrthographicCamera) this._spherical.radius = this._clampDistance(this._spherical.radius);
		else {
			let e = this._spherical.radius;
			this._spherical.radius = this._clampDistance(this._spherical.radius * this._scale), i = e != this._spherical.radius;
		}
		if (Kg.setFromSpherical(this._spherical), Kg.applyQuaternion(this._quatInverse), t.copy(this.target).add(Kg), this.object.lookAt(this.target), this.enableDamping === !0 ? (this._sphericalDelta.theta *= 1 - this.dampingFactor, this._sphericalDelta.phi *= 1 - this.dampingFactor, this._panOffset.multiplyScalar(1 - this.dampingFactor)) : (this._sphericalDelta.set(0, 0, 0), this._panOffset.set(0, 0, 0)), this.zoomToCursor && this._performCursorZoom) {
			let e = null;
			if (this.object.isPerspectiveCamera) {
				let t = Kg.length();
				e = this._clampDistance(t * this._scale);
				let n = t - e;
				this.object.position.addScaledVector(this._dollyDirection, n), this.object.updateMatrixWorld(), i = !!n;
			} else if (this.object.isOrthographicCamera) {
				let t = new Z(this._mouse.x, this._mouse.y, 0);
				t.unproject(this.object);
				let n = this.object.zoom;
				this.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom / this._scale)), this.object.updateProjectionMatrix(), i = n !== this.object.zoom;
				let r = new Z(this._mouse.x, this._mouse.y, 0);
				r.unproject(this.object), this.object.position.sub(r).add(t), this.object.updateMatrixWorld(), e = Kg.length();
			} else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."), this.zoomToCursor = !1;
			e !== null && (this.screenSpacePanning ? this.target.set(0, 0, -1).transformDirection(this.object.matrix).multiplyScalar(e).add(this.object.position) : (Ug.origin.copy(this.object.position), Ug.direction.set(0, 0, -1).transformDirection(this.object.matrix), Math.abs(this.object.up.dot(Ug.direction)) < Gg ? this.object.lookAt(this.target) : (Wg.setFromNormalAndCoplanarPoint(this.object.up, this.target), Ug.intersectPlane(Wg, this.target))));
		} else if (this.object.isOrthographicCamera) {
			let e = this.object.zoom;
			this.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom / this._scale)), e !== this.object.zoom && (this.object.updateProjectionMatrix(), i = !0);
		}
		return this._scale = 1, this._performCursorZoom = !1, i || this._lastPosition.distanceToSquared(this.object.position) > Yg || 8 * (1 - this._lastQuaternion.dot(this.object.quaternion)) > Yg || this._lastTargetPosition.distanceToSquared(this.target) > Yg ? (this.dispatchEvent(Bg), this._lastPosition.copy(this.object.position), this._lastQuaternion.copy(this.object.quaternion), this._lastTargetPosition.copy(this.target), !0) : !1;
	}
	_getAutoRotationAngle(e) {
		return e === null ? qg / 60 / 60 * this.autoRotateSpeed : qg / 60 * this.autoRotateSpeed * e;
	}
	_getZoomScale(e) {
		let t = Math.abs(e * .01);
		return .95 ** (this.zoomSpeed * t);
	}
	_rotateLeft(e) {
		this._sphericalDelta.theta -= e;
	}
	_rotateUp(e) {
		this._sphericalDelta.phi -= e;
	}
	_panLeft(e, t) {
		Kg.setFromMatrixColumn(t, 0), Kg.multiplyScalar(-e), this._panOffset.add(Kg);
	}
	_panUp(e, t) {
		this.screenSpacePanning === !0 ? Kg.setFromMatrixColumn(t, 1) : (Kg.setFromMatrixColumn(t, 0), Kg.crossVectors(this.object.up, Kg)), Kg.multiplyScalar(e), this._panOffset.add(Kg);
	}
	_pan(e, t) {
		let n = this.domElement;
		if (this.object.isPerspectiveCamera) {
			let r = this.object.position;
			Kg.copy(r).sub(this.target);
			let i = Kg.length();
			i *= Math.tan(this.object.fov / 2 * Math.PI / 180), this._panLeft(2 * e * i / n.clientHeight, this.object.matrix), this._panUp(2 * t * i / n.clientHeight, this.object.matrix);
		} else this.object.isOrthographicCamera ? (this._panLeft(e * (this.object.right - this.object.left) / this.object.zoom / n.clientWidth, this.object.matrix), this._panUp(t * (this.object.top - this.object.bottom) / this.object.zoom / n.clientHeight, this.object.matrix)) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."), this.enablePan = !1);
	}
	_dollyOut(e) {
		this.object.isPerspectiveCamera || this.object.isOrthographicCamera ? this._scale /= e : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), this.enableZoom = !1);
	}
	_dollyIn(e) {
		this.object.isPerspectiveCamera || this.object.isOrthographicCamera ? this._scale *= e : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), this.enableZoom = !1);
	}
	_updateZoomParameters(e, t) {
		if (!this.zoomToCursor) return;
		this._performCursorZoom = !0;
		let n = this.domElement.getBoundingClientRect(), r = e - n.left, i = t - n.top, a = n.width, o = n.height;
		this._mouse.x = r / a * 2 - 1, this._mouse.y = -(i / o) * 2 + 1, this._dollyDirection.set(this._mouse.x, this._mouse.y, 1).unproject(this.object).sub(this.object.position).normalize();
	}
	_clampDistance(e) {
		return Math.max(this.minDistance, Math.min(this.maxDistance, e));
	}
	_handleMouseDownRotate(e) {
		this._rotateStart.set(e.clientX, e.clientY);
	}
	_handleMouseDownDolly(e) {
		this._updateZoomParameters(e.clientX, e.clientY), this._dollyStart.set(e.clientX, e.clientY);
	}
	_handleMouseDownPan(e) {
		this._panStart.set(e.clientX, e.clientY);
	}
	_handleMouseMoveRotate(e) {
		this._rotateEnd.set(e.clientX, e.clientY), this._rotateDelta.subVectors(this._rotateEnd, this._rotateStart).multiplyScalar(this.rotateSpeed);
		let t = this.domElement;
		this._rotateLeft(qg * this._rotateDelta.x / t.clientHeight), this._rotateUp(qg * this._rotateDelta.y / t.clientHeight), this._rotateStart.copy(this._rotateEnd), this.update();
	}
	_handleMouseMoveDolly(e) {
		this._dollyEnd.set(e.clientX, e.clientY), this._dollyDelta.subVectors(this._dollyEnd, this._dollyStart), this._dollyDelta.y > 0 ? this._dollyOut(this._getZoomScale(this._dollyDelta.y)) : this._dollyDelta.y < 0 && this._dollyIn(this._getZoomScale(this._dollyDelta.y)), this._dollyStart.copy(this._dollyEnd), this.zoomToCursor && (this._performCursorZoom = !0, this._dollyDirection.set(this._mouse.x, this._mouse.y, 1).unproject(this.object).sub(this.object.position).normalize()), this.update();
	}
	_handleMouseMovePan(e) {
		this._panEnd.set(e.clientX, e.clientY), this._panDelta.subVectors(this._panEnd, this._panStart).multiplyScalar(this.panSpeed), this._pan(this._panDelta.x, this._panDelta.y), this._panStart.copy(this._panEnd), this.update();
	}
	_handleMouseWheel(e) {
		this._updateZoomParameters(e.clientX, e.clientY), e.deltaY < 0 ? this._dollyIn(this._getZoomScale(e.deltaY)) : e.deltaY > 0 && this._dollyOut(this._getZoomScale(e.deltaY)), this.update();
	}
	_handleKeyDown(e) {
		let t = !1;
		switch (e.code) {
			case this.keys.UP:
				e.ctrlKey || e.metaKey || e.shiftKey ? this.enableRotate && this._rotateUp(qg * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(0, this.keyPanSpeed), t = !0;
				break;
			case this.keys.BOTTOM:
				e.ctrlKey || e.metaKey || e.shiftKey ? this.enableRotate && this._rotateUp(-qg * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(0, -this.keyPanSpeed), t = !0;
				break;
			case this.keys.LEFT:
				e.ctrlKey || e.metaKey || e.shiftKey ? this.enableRotate && this._rotateLeft(qg * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(this.keyPanSpeed, 0), t = !0;
				break;
			case this.keys.RIGHT: e.ctrlKey || e.metaKey || e.shiftKey ? this.enableRotate && this._rotateLeft(-qg * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(-this.keyPanSpeed, 0), t = !0;
		}
		t && (e.preventDefault(), this.update());
	}
	_handleTouchStartRotate(e) {
		if (this._pointers.length === 1) this._rotateStart.set(e.pageX, e.pageY);
		else {
			let t = this._getSecondPointerPosition(e), n = .5 * (e.pageX + t.x), r = .5 * (e.pageY + t.y);
			this._rotateStart.set(n, r);
		}
	}
	_handleTouchStartPan(e) {
		if (this._pointers.length === 1) this._panStart.set(e.pageX, e.pageY);
		else {
			let t = this._getSecondPointerPosition(e), n = .5 * (e.pageX + t.x), r = .5 * (e.pageY + t.y);
			this._panStart.set(n, r);
		}
	}
	_handleTouchStartDolly(e) {
		let t = this._getSecondPointerPosition(e), n = e.pageX - t.x, r = e.pageY - t.y, i = Math.sqrt(n * n + r * r);
		this._dollyStart.set(0, i);
	}
	_handleTouchStartDollyPan(e) {
		this.enableZoom && this._handleTouchStartDolly(e), this.enablePan && this._handleTouchStartPan(e);
	}
	_handleTouchStartDollyRotate(e) {
		this.enableZoom && this._handleTouchStartDolly(e), this.enableRotate && this._handleTouchStartRotate(e);
	}
	_handleTouchMoveRotate(e) {
		if (this._pointers.length == 1) this._rotateEnd.set(e.pageX, e.pageY);
		else {
			let t = this._getSecondPointerPosition(e), n = .5 * (e.pageX + t.x), r = .5 * (e.pageY + t.y);
			this._rotateEnd.set(n, r);
		}
		this._rotateDelta.subVectors(this._rotateEnd, this._rotateStart).multiplyScalar(this.rotateSpeed);
		let t = this.domElement;
		this._rotateLeft(qg * this._rotateDelta.x / t.clientHeight), this._rotateUp(qg * this._rotateDelta.y / t.clientHeight), this._rotateStart.copy(this._rotateEnd);
	}
	_handleTouchMovePan(e) {
		if (this._pointers.length === 1) this._panEnd.set(e.pageX, e.pageY);
		else {
			let t = this._getSecondPointerPosition(e), n = .5 * (e.pageX + t.x), r = .5 * (e.pageY + t.y);
			this._panEnd.set(n, r);
		}
		this._panDelta.subVectors(this._panEnd, this._panStart).multiplyScalar(this.panSpeed), this._pan(this._panDelta.x, this._panDelta.y), this._panStart.copy(this._panEnd);
	}
	_handleTouchMoveDolly(e) {
		let t = this._getSecondPointerPosition(e), n = e.pageX - t.x, r = e.pageY - t.y, i = Math.sqrt(n * n + r * r);
		this._dollyEnd.set(0, i), this._dollyDelta.set(0, (this._dollyEnd.y / this._dollyStart.y) ** +this.zoomSpeed), this._dollyOut(this._dollyDelta.y), this._dollyStart.copy(this._dollyEnd);
		let a = (e.pageX + t.x) * .5, o = (e.pageY + t.y) * .5;
		this._updateZoomParameters(a, o);
	}
	_handleTouchMoveDollyPan(e) {
		this.enableZoom && this._handleTouchMoveDolly(e), this.enablePan && this._handleTouchMovePan(e);
	}
	_handleTouchMoveDollyRotate(e) {
		this.enableZoom && this._handleTouchMoveDolly(e), this.enableRotate && this._handleTouchMoveRotate(e);
	}
	_addPointer(e) {
		this._pointers.push(e.pointerId);
	}
	_removePointer(e) {
		delete this._pointerPositions[e.pointerId];
		for (let t = 0; t < this._pointers.length; t++) if (this._pointers[t] == e.pointerId) {
			this._pointers.splice(t, 1);
			return;
		}
	}
	_isTrackingPointer(e) {
		for (let t = 0; t < this._pointers.length; t++) if (this._pointers[t] == e.pointerId) return !0;
		return !1;
	}
	_trackPointer(e) {
		let t = this._pointerPositions[e.pointerId];
		t === void 0 && (t = new X(), this._pointerPositions[e.pointerId] = t), t.set(e.pageX, e.pageY);
	}
	_getSecondPointerPosition(e) {
		let t = e.pointerId === this._pointers[0] ? this._pointers[1] : this._pointers[0];
		return this._pointerPositions[t];
	}
	_customWheelEvent(e) {
		let t = e.deltaMode, n = {
			clientX: e.clientX,
			clientY: e.clientY,
			deltaY: e.deltaY
		};
		switch (t) {
			case 1:
				n.deltaY *= 16;
				break;
			case 2: n.deltaY *= 100;
		}
		return e.ctrlKey && !this._controlActive && (n.deltaY *= 10), n;
	}
};
function Zg(e) {
	this.enabled !== !1 && (this._pointers.length === 0 && (this.domElement.setPointerCapture(e.pointerId), this.domElement.ownerDocument.addEventListener("pointermove", this._onPointerMove), this.domElement.ownerDocument.addEventListener("pointerup", this._onPointerUp)), this._isTrackingPointer(e) || (this._addPointer(e), e.pointerType === "touch" ? this._onTouchStart(e) : this._onMouseDown(e), this._cursorStyle === "grab" && (this.domElement.style.cursor = "grabbing")));
}
function Qg(e) {
	this.enabled !== !1 && (e.pointerType === "touch" ? this._onTouchMove(e) : this._onMouseMove(e));
}
function $g(e) {
	switch (this._removePointer(e), this._pointers.length) {
		case 0:
			this.domElement.releasePointerCapture(e.pointerId), this.domElement.ownerDocument.removeEventListener("pointermove", this._onPointerMove), this.domElement.ownerDocument.removeEventListener("pointerup", this._onPointerUp), this.dispatchEvent(Hg), this.state = Jg.NONE, this._cursorStyle === "grab" && (this.domElement.style.cursor = "grab");
			break;
		case 1:
			let t = this._pointers[0], n = this._pointerPositions[t];
			this._onTouchStart({
				pointerId: t,
				pageX: n.x,
				pageY: n.y
			});
	}
}
function e_(e) {
	let t;
	switch (e.button) {
		case 0:
			t = this.mouseButtons.LEFT;
			break;
		case 1:
			t = this.mouseButtons.MIDDLE;
			break;
		case 2:
			t = this.mouseButtons.RIGHT;
			break;
		default: t = -1;
	}
	switch (t) {
		case Jo.DOLLY:
			if (this.enableZoom === !1) return;
			this._handleMouseDownDolly(e), this.state = Jg.DOLLY;
			break;
		case Jo.ROTATE:
			if (e.ctrlKey || e.metaKey || e.shiftKey) {
				if (this.enablePan === !1) return;
				this._handleMouseDownPan(e), this.state = Jg.PAN;
			} else {
				if (this.enableRotate === !1) return;
				this._handleMouseDownRotate(e), this.state = Jg.ROTATE;
			}
			break;
		case Jo.PAN:
			if (e.ctrlKey || e.metaKey || e.shiftKey) {
				if (this.enableRotate === !1) return;
				this._handleMouseDownRotate(e), this.state = Jg.ROTATE;
			} else {
				if (this.enablePan === !1) return;
				this._handleMouseDownPan(e), this.state = Jg.PAN;
			}
			break;
		default: this.state = Jg.NONE;
	}
	this.state !== Jg.NONE && this.dispatchEvent(Vg);
}
function t_(e) {
	switch (this.state) {
		case Jg.ROTATE:
			if (this.enableRotate === !1) return;
			this._handleMouseMoveRotate(e);
			break;
		case Jg.DOLLY:
			if (this.enableZoom === !1) return;
			this._handleMouseMoveDolly(e);
			break;
		case Jg.PAN:
			if (this.enablePan === !1) return;
			this._handleMouseMovePan(e);
	}
}
function n_(e) {
	this.enabled !== !1 && this.enableZoom !== !1 && this.state === Jg.NONE && (e.preventDefault(), this.dispatchEvent(Vg), this._handleMouseWheel(this._customWheelEvent(e)), this.dispatchEvent(Hg));
}
function r_(e) {
	this.enabled !== !1 && this._handleKeyDown(e);
}
function i_(e) {
	switch (this._trackPointer(e), this._pointers.length) {
		case 1:
			switch (this.touches.ONE) {
				case Yo.ROTATE:
					if (this.enableRotate === !1) {
						this.state = Jg.NONE;
						break;
					}
					this._handleTouchStartRotate(e), this.state = Jg.TOUCH_ROTATE;
					break;
				case Yo.PAN:
					if (this.enablePan === !1) {
						this.state = Jg.NONE;
						break;
					}
					this._handleTouchStartPan(e), this.state = Jg.TOUCH_PAN;
					break;
				default: this.state = Jg.NONE;
			}
			break;
		case 2:
			switch (this.touches.TWO) {
				case Yo.DOLLY_PAN:
					if (this.enableZoom === !1 && this.enablePan === !1) return;
					this._handleTouchStartDollyPan(e), this.state = Jg.TOUCH_DOLLY_PAN;
					break;
				case Yo.DOLLY_ROTATE:
					if (this.enableZoom === !1 && this.enableRotate === !1) return;
					this._handleTouchStartDollyRotate(e), this.state = Jg.TOUCH_DOLLY_ROTATE;
					break;
				default: this.state = Jg.NONE;
			}
			break;
		default: this.state = Jg.NONE;
	}
	this.state !== Jg.NONE && this.dispatchEvent(Vg);
}
function a_(e) {
	switch (this._trackPointer(e), this.state) {
		case Jg.TOUCH_ROTATE:
			if (this.enableRotate === !1) return;
			this._handleTouchMoveRotate(e), this.update();
			break;
		case Jg.TOUCH_PAN:
			if (this.enablePan === !1) return;
			this._handleTouchMovePan(e), this.update();
			break;
		case Jg.TOUCH_DOLLY_PAN:
			if (this.enableZoom === !1 && this.enablePan === !1) return;
			this._handleTouchMoveDollyPan(e), this.update();
			break;
		case Jg.TOUCH_DOLLY_ROTATE:
			if (this.enableZoom === !1 && this.enableRotate === !1) return;
			this._handleTouchMoveDollyRotate(e), this.update();
			break;
		default: this.state = Jg.NONE;
	}
}
function o_(e) {
	this.enabled !== !1 && e.preventDefault();
}
function s_(e) {
	e.key === "Control" && (this._controlActive = !0, this.domElement.ownerDocument.addEventListener("keyup", this._interceptControlUp, {
		passive: !0,
		capture: !0
	}));
}
function c_(e) {
	e.key === "Control" && (this._controlActive = !1, this.domElement.ownerDocument.removeEventListener("keyup", this._interceptControlUp, {
		passive: !0,
		capture: !0
	}));
}
// src/view/frames.ts
var l_ = [
	[
		0,
		1,
		0
	],
	[
		0,
		0,
		-1
	],
	[
		-1,
		0,
		0
	]
];
function u_(e) {
	return [
		e[1],
		-e[2],
		-e[0]
	];
}
function d_(e, t) {
	let [n, r, i, a] = e, [o, s, c, l] = t;
	return [
		a * o + n * l + r * c - i * s,
		a * s - n * c + r * l + i * o,
		a * c + n * s - r * o + i * l,
		a * l - n * o - r * s - i * c
	];
}
function f_(e) {
	return [
		-e[0],
		-e[1],
		-e[2],
		e[3]
	];
}
function p_(e) {
	let t = e[0][0], n = e[0][1], r = e[0][2], i = e[1][0], a = e[1][1], o = e[1][2], s = e[2][0], c = e[2][1], l = e[2][2], u = t + a + l, d, f, p, m;
	if (u > 0) {
		let e = Math.sqrt(u + 1) * 2;
		m = .25 * e, d = (c - o) / e, f = (r - s) / e, p = (i - n) / e;
	} else if (t > a && t > l) {
		let e = Math.sqrt(1 + t - a - l) * 2;
		m = (c - o) / e, d = .25 * e, f = (n + i) / e, p = (r + s) / e;
	} else if (a > l) {
		let e = Math.sqrt(1 + a - t - l) * 2;
		m = (r - s) / e, d = (n + i) / e, f = .25 * e, p = (o + c) / e;
	} else {
		let e = Math.sqrt(1 + l - t - a) * 2;
		m = (i - n) / e, d = (r + s) / e, f = (o + c) / e, p = .25 * e;
	}
	return [
		d,
		f,
		p,
		m
	];
}
var m_ = p_(l_);
function h_(e) {
	let t = m_;
	return d_(d_(t, e), f_(t));
}
function g_(e, t, n) {
	let r = Math.cos(e / 2), i = Math.sin(e / 2), a = Math.cos(t / 2), o = Math.sin(t / 2), s = Math.cos(n / 2), c = Math.sin(n / 2);
	return [
		i * a * s - r * o * c,
		r * o * s + i * a * c,
		r * a * c - i * o * s,
		r * a * s + i * o * c
	];
}
// src/view/scene.ts
var __ = class extends Error {
	constructor(e = "WebGL2 is not available") {
		super(e), this.name = "WebGLUnavailableError";
	}
}, v_ = .241, y_ = .02, b_ = {
	x: .2,
	y: .2,
	z: .06
}, x_ = .1, S_ = 6, C_ = .5, w_ = 40, T_ = 300, E_ = v_ / Math.SQRT2, D_ = [
	[
		-E_,
		-E_,
		0
	],
	[
		-E_,
		+E_,
		0
	],
	[
		+E_,
		+E_,
		0
	],
	[
		+E_,
		-E_,
		0
	]
], O_ = [
	!1,
	!1,
	!0,
	!0
], k_ = [
	1,
	-1,
	1,
	-1
];
function A_(e) {
	try {
		return e.ownerDocument.createElement("canvas").getContext("webgl2") !== null;
	} catch {
		return !1;
	}
}
function j_(e, t = {}) {
	if (!A_(e)) throw new __();
	let n;
	try {
		n = new zg({
			canvas: e,
			antialias: !0,
			alpha: !1,
			powerPreference: "default"
		});
	} catch (e) {
		throw new __(e instanceof Error ? e.message : void 0);
	}
	if (!n.capabilities.isWebGL2) throw n.dispose(), new __();
	let r = t.maxPixelRatio ?? 2;
	n.setPixelRatio(Math.min(globalThis.devicePixelRatio || 1, r));
	let i = t.palette ?? Ba, a = t.reducedMotion ?? !1, o = Math.max(2, t.trailPoints ?? T_), s = new gu(), c = new ip(40, 1, .05, 100);
	c.position.set(1.9, .4, 2.4);
	let l = new Xg(c, e);
	l.enableDamping = !0, l.dampingFactor = .1, l.enablePan = !1, l.minDistance = 1.2, l.maxDistance = 12, l.maxPolarAngle = Math.PI * .92, l.target.set(0, -.5, 0), l.update();
	let u = new Kf(16777215, 8947848, 1);
	s.add(u);
	let d = new sp(16777215, 1);
	d.position.set(2, 4, 3), s.add(d);
	let f = {
		body: new Sf(),
		arm: new Sf(),
		armFront: new Sf(),
		rotor: new Sf({
			transparent: !0,
			opacity: .55
		}),
		rotorBlade: new Sf(),
		rod: new Sf(),
		mass: new Sf()
	}, p = new Wd({
		vertexColors: !0,
		transparent: !0,
		depthWrite: !1
	}), m = [], h = Math.round(S_ / C_), g = new Tp(S_, h, 16777215, 16777215);
	g.position.y = -1.5, s.add(g);
	let _ = () => {
		let e = g.geometry.getAttribute("color"), t = new mu(i.gridMajor), n = new mu(i.gridMinor), r = h / 2;
		for (let i = 0; i < 2; i++) for (let a = 0; a < 13; a++) {
			let o = a === r ? t : n, s = (i * 13 + a) * 2;
			e.setXYZ(s, o.r, o.g, o.b), e.setXYZ(s + 1, o.r, o.g, o.b);
		}
		e.needsUpdate = !0;
	};
	m.push(g.material);
	let v = new su();
	s.add(v);
	let y = new cf(b_.y, b_.z, b_.x);
	v.add(new Pd(y, f.body));
	let b = v_, x = new lf(.008, .008, b, 8);
	x.translate(0, b / 2, 0);
	let S = new lf(x_, x_, .004, 28), C = new cf(2 * x_ * .95, .006, .014), w = new lf(.02, .02, .03, 12), T = [], E = new Z(0, 1, 0);
	for (let e = 0; e < 4; e++) {
		let t = D_[e], n = u_(t), r = O_[e], i = new Pd(x, r ? f.armFront : f.arm);
		i.quaternion.setFromUnitVectors(E, new Z(n[0], n[1], n[2]).normalize()), v.add(i);
		let a = new Pd(w, r ? f.armFront : f.arm);
		a.position.set(n[0], n[1] + 0, n[2]), v.add(a);
		let o = new su();
		o.position.set(n[0], n[1] + .025, n[2]), o.add(new Pd(S, f.rotor));
		let s = new Pd(C, f.rotorBlade);
		s.position.y = .006, o.add(s), v.add(o), T.push(o);
	}
	let D = [
		0,
		.7,
		1.4,
		2.1
	], O = new lf(.005, .005, 1, 8), k = new Pd(O, f.rod);
	s.add(k);
	let A = new df(y_, 20, 14), j = new Pd(A, f.mass);
	s.add(j);
	let M = new Float32Array(o * 3), N = new Float32Array(o * 4), P = new ud();
	P.setAttribute("position", new Yu(M, 3)), P.setAttribute("color", new Yu(N, 4));
	let ee = new Qd(P, p);
	ee.frustumCulled = !1, ee.visible = !a, s.add(ee);
	let F = 0, te = -Infinity, I = () => {
		let e = new mu(i.trail);
		for (let t = 0; t < o; t++) {
			let n = (t / (o - 1)) ** 1;
			N[t * 4] = e.r, N[t * 4 + 1] = e.g, N[t * 4 + 2] = e.b, N[t * 4 + 3] = n;
		}
		P.getAttribute("color").needsUpdate = !0;
	}, L = (e) => {
		i = e, s.background = new mu(e.background), f.body.color.set(e.body), f.arm.color.set(e.arm), f.armFront.color.set(e.armFront), f.rotor.color.set(e.rotor), f.rotorBlade.color.set(e.rotor), f.rod.color.set(e.rod), f.mass.color.set(e.mass), u.color.set(e.hemiSky), u.groundColor.set(e.hemiGround), u.intensity = e.hemiIntensity, d.intensity = e.dirIntensity, _(), I();
	};
	L(i);
	let R = new ul(), z = new Z(), B = new Z(), V = new Z(), ne = 0, re = !1, ie = () => {
		re || (l.update(), n.render(s, c));
	};
	return {
		update: (e) => {
			if (re) return;
			let t = globalThis.performance ? globalThis.performance.now() : 0, n = ne === 0 ? 0 : Math.min(.1, (t - ne) / 1e3);
			ne = t;
			let r = u_(e.quadPos);
			v.position.set(r[0], r[1], r[2]);
			let i = h_(g_(e.roll, e.pitch, e.yaw));
			v.quaternion.set(i[0], i[1], i[2], i[3]), V.copy(l.target), z.set(r[0], r[1] - .5, r[2]), z.sub(V), l.target.add(z), c.position.add(z);
			let s = u_(e.massRel), u = z.set(r[0] + s[0], r[1] + s[1], r[2] + s[2]);
			j.position.copy(u), B.set(s[0], s[1], s[2]);
			let d = B.length();
			if (d > 1e-9 && (B.multiplyScalar(1 / d), k.scale.set(1, d, 1), k.position.set(r[0] + s[0] / 2, r[1] + s[1] / 2, r[2] + s[2] / 2), R.setFromUnitVectors(E, B), k.quaternion.copy(R)), !a) for (let t = 0; t < 4; t++) D[t] = (D[t] ?? 0) + k_[t] * ((e.motorOmega[t] ?? 0) / w_) * n, T[t].rotation.y = D[t];
			if (!a && (e.t < te && (F = 0), F === 0 || e.t - te >= .0099)) {
				if (F === 0) {
					for (let e = 0; e < o; e++) M.set([
						u.x,
						u.y,
						u.z
					], e * 3);
					F = 1;
				} else M.copyWithin(0, 3), M.set([
					u.x,
					u.y,
					u.z
				], (o - 1) * 3);
				P.getAttribute("position").needsUpdate = !0;
			}
			te = e.t, ie();
		},
		resize(e, t) {
			let r = Math.max(1, Math.floor(e)), i = Math.max(1, Math.floor(t));
			n.setSize(r, i, !1), c.aspect = r / i, c.updateProjectionMatrix(), ie();
		},
		dispose() {
			if (!re) {
				re = !0, l.dispose();
				for (let e of [
					y,
					x,
					S,
					C,
					w,
					O,
					A,
					P,
					g.geometry
				]) e.dispose();
				for (let e of [
					...Object.values(f),
					p,
					...m
				]) e.dispose();
				n.dispose();
			}
		},
		setReducedMotion(e) {
			if (a = e, ee.visible = !e, e) {
				F = 0;
				for (let e of T) e.rotation.y = 0;
			}
			ie();
		},
		setTheme(e) {
			L(e), ie();
		},
		debugInfo() {
			return {
				clearColor: `#${s.background.getHexString()}`,
				trailVisible: ee.visible
			};
		}
	};
}
// src/element/styles.css?inline
var M_ = ":host{color:var(--sc-fg);background:var(--sc-bg);contain:layout style;border-radius:8px;margin:1rem 0;scroll-margin-top:70px;display:block;position:relative}:host([hidden]){display:none}:host(:fullscreen),:host([fullscreen-overlay]){border-radius:0;height:100%;margin:0;overflow:auto}:host([fullscreen-overlay]){height:100dvh}.frame{color:var(--sc-fg);background:var(--sc-bg);border-radius:inherit;min-height:100%;font:14px/1.4 system-ui,sans-serif;position:relative;container:slosh/inline-size}.frame *{box-sizing:border-box}.grid{grid-template-columns:minmax(0,1fr);grid-template-areas:\"scene\"\"ctl\"\"charts\";gap:12px;padding:0;display:grid}:host(:fullscreen) .grid,:host([fullscreen-overlay]) .grid{padding:52px 8px 8px}.view{grid-area:scene;min-width:0;position:relative}.scene:focus-visible{outline:3px solid var(--sc-focus);outline-offset:-3px}.view>.sc-regime{z-index:3;pointer-events:none;position:absolute;top:0;left:0;right:0}.view>.sc-regime button{pointer-events:auto;background:color-mix(in srgb, var(--sc-surface) 85%, transparent)}.view>.sc-regime button[aria-pressed=true]{background:var(--sc-accent)}.sc-dock{z-index:3;border-radius:0 0 6px 6px;flex-direction:column;display:flex;position:absolute;bottom:0;left:0;right:0;overflow:hidden}.frame[data-layout=compact] .view{flex-direction:column;display:flex}.frame[data-layout=compact] .view>.sc-regime{pointer-events:auto;order:-1;grid-template-columns:repeat(3,minmax(0,1fr));gap:4px;padding:4px 0;display:grid;position:static}.frame[data-layout=compact] .view>.sc-regime button{background:var(--sc-surface);padding:4px 6px;font-size:13px}.frame[data-layout=compact] .view>.sc-regime button[aria-pressed=true]{background:var(--sc-accent)}.frame[data-layout=compact] .sc-regime .sc-fig{display:block}.frame[data-layout=compact] .sc-regime .sc-dot{display:none}.frame[data-layout=compact] .sc-dock{position:static}.scene{aspect-ratio:16/9;background:var(--sc-surface);border-radius:6px;position:relative;overflow:hidden}.scene canvas{touch-action:pan-y;width:100%;height:100%;display:block;position:absolute;inset:0}.scene canvas[hidden]{display:none}.fallback{text-align:center;color:var(--sc-muted);justify-content:center;align-items:center;padding:8px;display:flex;position:absolute;inset:0}.fallback[hidden]{display:none}::slotted([slot=fallback]){object-fit:contain;max-width:100%;max-height:100%}.ctl{flex-direction:column;grid-area:ctl;gap:10px;min-width:0;display:flex}.charts{grid-area:charts;min-width:0}.sc-fold{border:1px solid var(--sc-border);border-radius:6px;min-width:0;margin:0;padding:2px 8px}.sc-fold>summary{cursor:pointer;padding:6px 0;font-weight:600}.sc-fold>summary:focus-visible{outline:3px solid var(--sc-focus);outline-offset:2px}.frame:not([data-layout=compact]) .sc-fold{border:0;padding:0}.frame:not([data-layout=compact]) .sc-fold>summary{display:none}@container slosh (width>=640px){.frame[data-mode=auto] .charts .slosh-charts{grid-template-columns:repeat(2,minmax(0,1fr))}}.frame[data-mode=full] .charts .slosh-charts{grid-template-columns:repeat(2,minmax(0,1fr))}@container slosh (width>=1100px){.frame:not([data-mode=compact]) .grid{grid-template:\"scene charts\"\"ctl charts\"1fr/minmax(0,1fr) minmax(0,1fr);align-items:start}}.exit{z-index:10;min-height:36px;font:inherit;cursor:pointer;color:var(--sc-fg);background:var(--sc-surface);border:2px solid var(--sc-accent);border-radius:6px;padding:4px 12px;position:absolute;top:8px;right:8px}.exit[hidden]{display:none}.exit:focus-visible,.sc-exp>summary:focus-visible{outline:3px solid var(--sc-focus);outline-offset:2px}.sc-summary{color:var(--sc-fg);font:14px/1.4 system-ui,sans-serif}@media (prefers-reduced-motion:reduce){.frame *{scroll-behavior:auto;transition:none;animation:none}}.frame[data-fs=false]{border:1px solid var(--sc-border);padding-bottom:8px}.frame[data-fs=false] .ctl,.frame[data-fs=false] .charts,.frame[data-fs=false] .sc-more{padding-inline:8px}.frame[data-fs=false] .sc-fold{display:none}.sc-more{color:var(--sc-muted);grid-column:1/-1;margin:0;font-size:12px}.frame[data-fs=true] .sc-more{display:none}.frame[data-fs=false] .charts .slosh-charts{gap:6px 10px}@container slosh (width>=640px){.frame[data-fs=false][data-mode=auto] .charts .slosh-charts,.frame[data-fs=false][data-mode=full] .charts .slosh-charts{grid-template-columns:repeat(3,minmax(0,1fr))}}", N_ = [...d, "free"], P_ = 640, F_ = 1100, I_ = ["pitch", "roll"], L_ = 96, R_ = 150, z_ = [
	{
		id: "mass",
		title: "Mass position"
	},
	{
		id: "attitude",
		title: "Quad roll and pitch"
	},
	{
		id: "motors",
		title: "Motor commands"
	}
], B_ = `
<style>${M_}\n${Io}\n${uo}\n${Te}\n${Se}\n${Ko}\n${Uo}</style>
<div class="frame" data-mode="auto" data-layout="column" data-fs="false" part="frame">
  <button class="exit" type="button" hidden aria-label="Exit full screen">Exit full screen ✕</button>
  <div class="grid">
    <div class="view sc-view">
      <div class="scene" tabindex="0" role="group" aria-label="3D view. Space or K plays and pauses. Drag to orbit.">
        <canvas role="img" aria-label="3D view of the quadrotor with a hanging mass"></canvas>
        <div class="fallback" hidden><slot name="fallback">3D view unavailable (WebGL2 is required). Controls and charts still work.</slot></div>
      </div>
      <div class="sc-dock"></div>
    </div>
    <div class="ctl"></div>
    <div class="charts"></div>
    <p class="sc-more">Full screen shows all six charts, larger.</p>
  </div>
</div>`;
function V_(e) {
	return N_.includes(e ?? "") ? e : "story";
}
function H_(e) {
	return e === "full" || e === "compact" ? e : "auto";
}
function U_(e) {
	return e !== null && Number(e) === .5 ? .5 : 1;
}
function W_(e) {
	let t = e === null ? NaN : Number(e);
	return Number.isInteger(t) && t >= 0 && t <= 4294967295 ? t : 1;
}
var G_ = class extends HTMLElement {
	static observedAttributes = [
		"preset",
		"autoplay",
		"speed",
		"layout",
		"theme",
		"fullscreen-button",
		"seed"
	];
	rt = null;
	presetNow = "story";
	constructor() {
		super(), this.attachShadow({ mode: "open" });
	}
	get preset() {
		return V_(this.getAttribute("preset"));
	}
	set preset(e) {
		this.setAttribute("preset", e);
	}
	get theme() {
		let e = this.getAttribute("theme");
		return e === "light" || e === "dark" ? e : "auto";
	}
	set theme(e) {
		this.setAttribute("theme", e);
	}
	get layout() {
		return H_(this.getAttribute("layout"));
	}
	set layout(e) {
		this.setAttribute("layout", e);
	}
	get speed() {
		return U_(this.getAttribute("speed"));
	}
	set speed(e) {
		this.setAttribute("speed", String(e));
	}
	get seed() {
		return W_(this.getAttribute("seed"));
	}
	set seed(e) {
		this.setAttribute("seed", String(e));
	}
	get autoplay() {
		return this.hasAttribute("autoplay");
	}
	set autoplay(e) {
		this.toggleAttribute("autoplay", e);
	}
	get fullscreenButton() {
		return this.getAttribute("fullscreen-button") !== "false";
	}
	set fullscreenButton(e) {
		this.setAttribute("fullscreen-button", String(e));
	}
	connectedCallback() {
		this.rt === null && (this.rt = this.build());
	}
	disconnectedCallback() {
		let e = this.rt;
		e !== null && (this.rt = null, this.teardown(e));
	}
	attributeChangedCallback(e, t, n) {
		let r = this.rt;
		if (r !== null && t !== n) switch (e) {
			case "preset":
				this.loadPreset(V_(n));
				break;
			case "speed":
				r.runner.setSpeed(U_(n)), r.player.setSpeed(U_(n));
				break;
			case "layout":
				this.applyLayout(r);
				break;
			case "fullscreen-button":
				r.player.setFullscreenVisible(n !== "false");
				break;
			case "seed":
				this.replaceSim(r), this.loadPreset(this.presetNow);
				break;
			case "theme": this.applyPalette(r.palette);
		}
	}
	play() {
		let e = this.rt;
		e !== null && (e.userPaused = !1, e.player.setPaused(!1), this.applyRunState(e));
	}
	pause() {
		let e = this.rt;
		e !== null && (e.userPaused = !0, e.player.setPaused(!0), this.applyRunState(e));
	}
	reset() {
		let e = this.rt;
		e !== null && (e.runner.send({ type: "reset" }), this.resetBanner(e), this.renderOnce(e));
	}
	loadPreset(e) {
		let t = this.rt;
		if (t !== null) {
			if (!N_.includes(e)) throw Error(`unknown preset ${String(e)}`);
			this.presetNow = e, e === "free" ? (this.replaceSim(t), t.runner.send({ type: "reset" })) : e === "story" ? t.runner.send(Oo({ kind: "restart" })) : t.runner.send({
				type: "loadPreset",
				id: e
			}), this.resetBanner(t), this.renderOnce(t);
		}
	}
	setRegime(e) {
		let t = this.rt;
		t !== null && this.storyAction(t, {
			kind: "regime",
			regime: e
		});
	}
	playStory() {
		let e = this.rt;
		e !== null && (this.presetNow = "story", this.storyAction(e, { kind: "play" }));
	}
	enterFullscreen() {
		let e = this.rt;
		return e === null ? Promise.resolve() : e.fs.enter();
	}
	exitFullscreen() {
		let e = this.rt;
		return e === null ? Promise.resolve() : e.fs.exit();
	}
	debugState() {
		let e = this.rt, t = e?.scene?.debugInfo();
		return {
			simTime: e?.ring.latest()?.t ?? 0,
			theme: e?.theme.current() ?? "light",
			sceneClearColor: t?.clearColor ?? null,
			fullscreen: e?.fs.isActive() ?? !1,
			fullscreenMode: e?.fs.mode() ?? null,
			layout: e?.layout ?? "column",
			trailVisible: t?.trailVisible ?? !1,
			preset: this.presetNow,
			paused: e === null || e.userPaused || e.offscreen,
			markers: e?.ring.markers() ?? [],
			bands: e?.ring.bands() ?? [],
			regime: e?.lastRegime ?? null,
			caption: e?.narrator.caption ?? ""
		};
	}
	build() {
		let e = this.shadowRoot;
		e.innerHTML = B_;
		let t = (t) => e.querySelector(t), n = t(".frame"), r = t("canvas"), i = t(".scene"), o = t(".view"), s = t(".fallback"), c = t(".sc-dock"), l = t(".ctl"), u = t(".charts"), d = t(".exit"), f = [], p = this.ownerDocument.defaultView, m = p?.matchMedia ? p.matchMedia("(prefers-reduced-motion: reduce)") : null, h = m?.matches ?? !1;
		this.presetNow = this.preset;
		let g = new H(), _ = { cur: new le(a.params, this.seed) }, v = new K({
			stepControl: () => _.cur.stepControl(),
			enqueue: (e) => _.cur.enqueue(e),
			commandLog: () => _.cur.commandLog()
		}, g);
		v.setSpeed(this.speed);
		let y = Number(new URLSearchParams(p?.location?.search ?? "").get("testSpeed"));
		y > 0 && y <= 8 && v.setTimeScale(y);
		let b = new Za(this, {
			container: n,
			onChange: (e) => this.applyPalette(e)
		}), x = b.palette(), S = null;
		try {
			S = j_(r, {
				palette: x.scene,
				reducedMotion: h
			});
		} catch (e) {
			if (!(e instanceof __)) throw e;
			r.hidden = !0, s.hidden = !1;
		}
		let C = {
			frame: n,
			simRef: _,
			runner: v,
			ring: g,
			scene: S,
			charts: null,
			controls: null,
			player: null,
			banner: null,
			bannerFollow: !1,
			bannerRegime: null,
			summary: null,
			narrator: new jo(),
			lastRegime: null,
			markersSeen: -1,
			lastT: 0,
			markerKeys: /* @__PURE__ */ new Set(),
			about: null,
			theme: b,
			fs: null,
			folds: [],
			exitBtn: d,
			cleanups: f,
			palette: x,
			userPaused: !0,
			offscreen: !1,
			reduced: h,
			layout: "column",
			focusBack: null,
			disposed: !1
		};
		if (this.rt = C, C.controls = Vo(l, {
			host: { send: (e) => v.send(e) },
			regimeContainer: o,
			onStoryAction: (e) => this.afterStoryAction(C, e),
			thetaEnvelope: () => ko(g)
		}), C.player = qo({
			host: {
				pause: () => this.pause(),
				resume: () => this.play(),
				setSpeed: (e) => v.setSpeed(e)
			},
			view: o,
			dock: c,
			surface: i,
			showFullscreen: this.fullscreenButton,
			onFullscreenToggle: () => {
				C.focusBack = e.activeElement ?? null, C.fs.toggle();
			}
		}), C.player.setSpeed(this.speed), C.banner = we(c), C.summary = vo(l), C.charts = lo(u, g, {
			palette: x,
			threshold: a.params.aac.threshold ?? 1
		}), C.about = je(C.controls.aboutSlot, a.provenance, a.params), this.foldCharts(C, u), this.applyChartHeight(C), C.fs = new Wo(this, { onChange: (e) => this.onFullscreen(C, e) }), d.addEventListener("click", () => void C.fs.exit()), v.on("detect", (e, t) => {
			C.banner.showTrip(e, t), this.emit("slosh-detect", {
				axis: I_[e],
				t
			});
		}), v.on("preset-done", (e) => this.emit("slosh-preset-done", { id: e })), v.on("frame", (e) => {
			S?.update(e), C.charts.redraw(), C.summary.maybeUpdate(g), C.controls.sync(e), this.followStory(C, e);
		}), typeof ResizeObserver < "u") {
			let e = new ResizeObserver(() => {
				this.applyLayout(C), S !== null && i.clientWidth > 0 && S.resize(i.clientWidth, i.clientHeight);
			});
			e.observe(n), e.observe(i), f.push(() => e.disconnect());
		}
		if (this.applyLayout(C), S !== null) {
			S.resize(Math.max(1, i.clientWidth || 640), Math.max(1, i.clientHeight || 360));
			let e = () => {
				if (C.userPaused || C.offscreen) {
					let e = g.latest();
					e !== null && S?.update(e);
				}
			};
			for (let t of ["pointermove", "wheel"]) r.addEventListener(t, e, { passive: !0 }), f.push(() => r.removeEventListener(t, e));
		}
		if (this.applyPalette(x), m) {
			let e = () => {
				C.reduced = m.matches, C.scene?.setReducedMotion(C.reduced);
			};
			m.addEventListener("change", e), f.push(() => m.removeEventListener("change", e));
		}
		if (typeof IntersectionObserver < "u") {
			let e = new IntersectionObserver((e) => {
				let t = e[e.length - 1];
				t !== void 0 && (C.offscreen = !t.isIntersecting, this.applyRunState(C));
			});
			e.observe(this), f.push(() => e.disconnect());
		}
		return this.presetNow === "story" ? v.send(Oo({ kind: this.autoplay && !h ? "play" : "restart" })) : v.send(this.presetNow === "free" ? { type: "reset" } : {
			type: "loadPreset",
			id: this.presetNow
		}), this.renderOnce(C), v.start(), this.autoplay && !h && (C.userPaused = !1), C.player.setPaused(C.userPaused), this.applyRunState(C), C;
	}
	foldCharts(e, t) {
		let n = this.ownerDocument;
		for (let r of z_) {
			let i = t.querySelector(`figure[data-chart="${r.id}"]`);
			if (i === null) continue;
			let a = n.createElement("details");
			a.className = "sc-fold", a.open = e.layout !== "compact";
			let o = n.createElement("summary");
			o.textContent = r.title, i.replaceWith(a), a.append(o, i);
			let s = () => e.charts.resize();
			a.addEventListener("toggle", s), e.cleanups.push(() => a.removeEventListener("toggle", s)), e.folds.push(a);
		}
	}
	resolveLayout(e) {
		let t = this.layout;
		return t === "compact" ? "compact" : e >= F_ ? "wide" : t === "full" ? "column" : e < P_ ? "compact" : "column";
	}
	applyLayout(e) {
		let t = e.frame.clientWidth, n = t === 0 && this.layout !== "compact" ? "column" : this.resolveLayout(t);
		if (e.frame.dataset.mode = this.layout, n !== e.layout || e.frame.dataset.layout !== n) {
			e.layout = n, e.frame.dataset.layout = n;
			for (let t of e.folds) t.open = n !== "compact";
			e.charts.resize();
		}
	}
	applyChartHeight(e) {
		e.charts.setHeight(e.frame.dataset.fs === "true" ? R_ : L_);
	}
	applyPalette(e) {
		let t = this.rt, n = t?.frame ?? this.shadowRoot?.querySelector(".frame");
		if (n == null) return;
		t && (t.palette = e), Ro(n, e.css);
		let r = n.style, i = this.theme === "auto", a = (e, t, n) => i ? `var(${e}, var(${t}, ${n}))` : `var(${e}, ${n})`;
		r.setProperty("--sc-bg", a("--slosh-bg", "--global-bg-color", e.css.bg)), r.setProperty("--sc-fg", a("--slosh-fg", "--global-text-color", e.css.fg)), r.setProperty("--sc-accent", a("--slosh-accent", "--global-theme-color", e.css.accent)), t?.scene?.setTheme(e.scene), t?.charts?.setTheme(e);
	}
	applyRunState(e) {
		e.userPaused || e.offscreen ? e.runner.pause() : e.runner.resume();
	}
	replaceSim(e) {
		e.simRef.cur = new le(a.params, this.seed);
	}
	renderOnce(e) {
		let t = e.simRef.cur.stepControl();
		e.runner.ingest(t), e.scene?.update(t), e.charts.redraw(!0), e.summary.update(e.ring), e.controls.sync(t), this.followStory(e, t, !0);
	}
	storyAction(e, t) {
		e.runner.send(Oo(t, t.kind === "regime" ? ko(e.ring) : void 0)), this.afterStoryAction(e, t);
	}
	afterStoryAction(e, t) {
		this.updateBanner(e, t), t.kind !== "regime" && (this.presetNow = "story"), t.kind !== "restart" && e.userPaused ? this.play() : (e.userPaused || e.offscreen) && this.renderOnce(e);
	}
	resetBanner(e) {
		e.banner.reset(), e.bannerFollow = !1, e.bannerRegime = null;
	}
	updateBanner(e, t) {
		if (t.kind === "restart") {
			this.resetBanner(e);
			return;
		}
		e.banner.reset();
		let n = t.kind === "play" ? "replay" : t.regime;
		e.bannerFollow = t.kind === "play", e.bannerRegime = "nominal", e.narrator.reset(), e.banner.showPhase(n), e.banner.setCaption("");
	}
	followStory(e, t, n = !1) {
		let r = e.narrator.update(e.ring, n);
		r !== null && (e.banner.setCaption(r), e.summary.setCaption(r)), t.t < e.lastT && (e.markersSeen = -1, e.markerKeys.clear(), e.banner.clearTrips()), e.lastT = t.t;
		let i = he(t);
		if (i !== e.lastRegime) {
			let t = e.lastRegime === null;
			e.lastRegime = i, !t && e.bannerFollow && i !== e.bannerRegime && (e.bannerRegime = i, e.narrator.reset(), e.banner.showPhase(i)), this.emit("slosh-regime", { regime: i });
		}
		let a = e.ring.markers();
		for (let t of a) {
			let n = t.t;
			n > e.markersSeen - 1e-9 && !(n === e.markersSeen && e.markerKeys.has(`${t.kind}|${t.label}`)) && (this.emit("slosh-marker", {
				t: t.t,
				kind: t.kind,
				label: t.label
			}), n > e.markersSeen && e.markerKeys.clear(), e.markersSeen = n, e.markerKeys.add(`${t.kind}|${t.label}`));
		}
	}
	onFullscreen(e, t) {
		if (e.exitBtn.hidden = !t.active, e.frame.dataset.fs = String(t.active), e.player.setFullscreenActive(t.active), t.active) e.exitBtn.focus();
		else {
			let t = e.focusBack;
			e.focusBack = null, (t !== null && t.isConnected ? t : e.player.bar.querySelector("button[aria-label$=\"Full screen\" i], button[aria-label$=\"full screen\" i]"))?.focus();
		}
		this.applyChartHeight(e), this.applyLayout(e), e.charts.resize(), this.emit("slosh-fullscreen", {
			active: t.active,
			mode: t.mode
		});
	}
	emit(e, t) {
		this.dispatchEvent(new CustomEvent(e, {
			detail: t,
			bubbles: !0,
			composed: !0
		}));
	}
	teardown(e) {
		e.disposed = !0, e.runner.stop();
		for (let t of e.cleanups) t();
		e.cleanups.length = 0, e.fs.dispose(), e.theme.dispose(), e.charts.dispose(), e.scene?.dispose(), e.summary.dispose(), e.banner.dispose(), e.about.dispose(), e.controls.dispose(), e.player.dispose(), this.shadowRoot.innerHTML = "";
	}
};
function K_(e = "slosh-sim") {
	typeof customElements < "u" && !customElements.get(e) && customElements.define(e, G_);
}
K_();
export { G_ as SloshSim, K_ as defineSloshSim };
