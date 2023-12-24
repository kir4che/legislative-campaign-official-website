function rf(e, t) {
	for (var n = 0; n < t.length; n++) {
		const r = t[n]
		if (typeof r != 'string' && !Array.isArray(r)) {
			for (const l in r)
				if (l !== 'default' && !(l in e)) {
					const o = Object.getOwnPropertyDescriptor(r, l)
					o && Object.defineProperty(e, l, o.get ? o : { enumerable: !0, get: () => r[l] })
				}
		}
	}
	return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }))
}
;(function () {
	const t = document.createElement('link').relList
	if (t && t.supports && t.supports('modulepreload')) return
	for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l)
	new MutationObserver((l) => {
		for (const o of l)
			if (o.type === 'childList')
				for (const i of o.addedNodes) i.tagName === 'LINK' && i.rel === 'modulepreload' && r(i)
	}).observe(document, { childList: !0, subtree: !0 })
	function n(l) {
		const o = {}
		return (
			l.integrity && (o.integrity = l.integrity),
			l.referrerPolicy && (o.referrerPolicy = l.referrerPolicy),
			l.crossOrigin === 'use-credentials'
				? (o.credentials = 'include')
				: l.crossOrigin === 'anonymous'
				? (o.credentials = 'omit')
				: (o.credentials = 'same-origin'),
			o
		)
	}
	function r(l) {
		if (l.ep) return
		l.ep = !0
		const o = n(l)
		fetch(l.href, o)
	}
})()
function ma(e) {
	return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default') ? e.default : e
}
var ha = { exports: {} },
	Ml = {},
	va = { exports: {} },
	O = {}
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var gr = Symbol.for('react.element'),
	lf = Symbol.for('react.portal'),
	of = Symbol.for('react.fragment'),
	sf = Symbol.for('react.strict_mode'),
	uf = Symbol.for('react.profiler'),
	af = Symbol.for('react.provider'),
	cf = Symbol.for('react.context'),
	df = Symbol.for('react.forward_ref'),
	ff = Symbol.for('react.suspense'),
	pf = Symbol.for('react.memo'),
	mf = Symbol.for('react.lazy'),
	As = Symbol.iterator
function hf(e) {
	return e === null || typeof e != 'object'
		? null
		: ((e = (As && e[As]) || e['@@iterator']), typeof e == 'function' ? e : null)
}
var ga = {
		isMounted: function () {
			return !1
		},
		enqueueForceUpdate: function () {},
		enqueueReplaceState: function () {},
		enqueueSetState: function () {},
	},
	ya = Object.assign,
	xa = {}
function Sn(e, t, n) {
	;(this.props = e), (this.context = t), (this.refs = xa), (this.updater = n || ga)
}
Sn.prototype.isReactComponent = {}
Sn.prototype.setState = function (e, t) {
	if (typeof e != 'object' && typeof e != 'function' && e != null)
		throw Error(
			'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
		)
	this.updater.enqueueSetState(this, e, t, 'setState')
}
Sn.prototype.forceUpdate = function (e) {
	this.updater.enqueueForceUpdate(this, e, 'forceUpdate')
}
function wa() {}
wa.prototype = Sn.prototype
function Ii(e, t, n) {
	;(this.props = e), (this.context = t), (this.refs = xa), (this.updater = n || ga)
}
var Ai = (Ii.prototype = new wa())
Ai.constructor = Ii
ya(Ai, Sn.prototype)
Ai.isPureReactComponent = !0
var zs = Array.isArray,
	Sa = Object.prototype.hasOwnProperty,
	zi = { current: null },
	Ea = { key: !0, ref: !0, __self: !0, __source: !0 }
function Ca(e, t, n) {
	var r,
		l = {},
		o = null,
		i = null
	if (t != null)
		for (r in (t.ref !== void 0 && (i = t.ref), t.key !== void 0 && (o = '' + t.key), t))
			Sa.call(t, r) && !Ea.hasOwnProperty(r) && (l[r] = t[r])
	var s = arguments.length - 2
	if (s === 1) l.children = n
	else if (1 < s) {
		for (var a = Array(s), d = 0; d < s; d++) a[d] = arguments[d + 2]
		l.children = a
	}
	if (e && e.defaultProps) for (r in ((s = e.defaultProps), s)) l[r] === void 0 && (l[r] = s[r])
	return { $$typeof: gr, type: e, key: o, ref: i, props: l, _owner: zi.current }
}
function vf(e, t) {
	return { $$typeof: gr, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner }
}
function Ui(e) {
	return typeof e == 'object' && e !== null && e.$$typeof === gr
}
function gf(e) {
	var t = { '=': '=0', ':': '=2' }
	return (
		'$' +
		e.replace(/[=:]/g, function (n) {
			return t[n]
		})
	)
}
var Us = /\/+/g
function no(e, t) {
	return typeof e == 'object' && e !== null && e.key != null ? gf('' + e.key) : t.toString(36)
}
function Xr(e, t, n, r, l) {
	var o = typeof e
	;(o === 'undefined' || o === 'boolean') && (e = null)
	var i = !1
	if (e === null) i = !0
	else
		switch (o) {
			case 'string':
			case 'number':
				i = !0
				break
			case 'object':
				switch (e.$$typeof) {
					case gr:
					case lf:
						i = !0
				}
		}
	if (i)
		return (
			(i = e),
			(l = l(i)),
			(e = r === '' ? '.' + no(i, 0) : r),
			zs(l)
				? ((n = ''),
				  e != null && (n = e.replace(Us, '$&/') + '/'),
				  Xr(l, t, n, '', function (d) {
						return d
				  }))
				: l != null &&
				  (Ui(l) &&
						(l = vf(l, n + (!l.key || (i && i.key === l.key) ? '' : ('' + l.key).replace(Us, '$&/') + '/') + e)),
				  t.push(l)),
			1
		)
	if (((i = 0), (r = r === '' ? '.' : r + ':'), zs(e)))
		for (var s = 0; s < e.length; s++) {
			o = e[s]
			var a = r + no(o, s)
			i += Xr(o, t, n, a, l)
		}
	else if (((a = hf(e)), typeof a == 'function'))
		for (e = a.call(e), s = 0; !(o = e.next()).done; ) (o = o.value), (a = r + no(o, s++)), (i += Xr(o, t, n, a, l))
	else if (o === 'object')
		throw (
			((t = String(e)),
			Error(
				'Objects are not valid as a React child (found: ' +
					(t === '[object Object]' ? 'object with keys {' + Object.keys(e).join(', ') + '}' : t) +
					'). If you meant to render a collection of children, use an array instead.'
			))
		)
	return i
}
function kr(e, t, n) {
	if (e == null) return e
	var r = [],
		l = 0
	return (
		Xr(e, r, '', '', function (o) {
			return t.call(n, o, l++)
		}),
		r
	)
}
function yf(e) {
	if (e._status === -1) {
		var t = e._result
		;(t = t()),
			t.then(
				function (n) {
					;(e._status === 0 || e._status === -1) && ((e._status = 1), (e._result = n))
				},
				function (n) {
					;(e._status === 0 || e._status === -1) && ((e._status = 2), (e._result = n))
				}
			),
			e._status === -1 && ((e._status = 0), (e._result = t))
	}
	if (e._status === 1) return e._result.default
	throw e._result
}
var fe = { current: null },
	Gr = { transition: null },
	xf = { ReactCurrentDispatcher: fe, ReactCurrentBatchConfig: Gr, ReactCurrentOwner: zi }
O.Children = {
	map: kr,
	forEach: function (e, t, n) {
		kr(
			e,
			function () {
				t.apply(this, arguments)
			},
			n
		)
	},
	count: function (e) {
		var t = 0
		return (
			kr(e, function () {
				t++
			}),
			t
		)
	},
	toArray: function (e) {
		return (
			kr(e, function (t) {
				return t
			}) || []
		)
	},
	only: function (e) {
		if (!Ui(e)) throw Error('React.Children.only expected to receive a single React element child.')
		return e
	},
}
O.Component = Sn
O.Fragment = of
O.Profiler = uf
O.PureComponent = Ii
O.StrictMode = sf
O.Suspense = ff
O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = xf
O.cloneElement = function (e, t, n) {
	if (e == null) throw Error('React.cloneElement(...): The argument must be a React element, but you passed ' + e + '.')
	var r = ya({}, e.props),
		l = e.key,
		o = e.ref,
		i = e._owner
	if (t != null) {
		if (
			(t.ref !== void 0 && ((o = t.ref), (i = zi.current)),
			t.key !== void 0 && (l = '' + t.key),
			e.type && e.type.defaultProps)
		)
			var s = e.type.defaultProps
		for (a in t) Sa.call(t, a) && !Ea.hasOwnProperty(a) && (r[a] = t[a] === void 0 && s !== void 0 ? s[a] : t[a])
	}
	var a = arguments.length - 2
	if (a === 1) r.children = n
	else if (1 < a) {
		s = Array(a)
		for (var d = 0; d < a; d++) s[d] = arguments[d + 2]
		r.children = s
	}
	return { $$typeof: gr, type: e.type, key: l, ref: o, props: r, _owner: i }
}
O.createContext = function (e) {
	return (
		(e = {
			$$typeof: cf,
			_currentValue: e,
			_currentValue2: e,
			_threadCount: 0,
			Provider: null,
			Consumer: null,
			_defaultValue: null,
			_globalName: null,
		}),
		(e.Provider = { $$typeof: af, _context: e }),
		(e.Consumer = e)
	)
}
O.createElement = Ca
O.createFactory = function (e) {
	var t = Ca.bind(null, e)
	return (t.type = e), t
}
O.createRef = function () {
	return { current: null }
}
O.forwardRef = function (e) {
	return { $$typeof: df, render: e }
}
O.isValidElement = Ui
O.lazy = function (e) {
	return { $$typeof: mf, _payload: { _status: -1, _result: e }, _init: yf }
}
O.memo = function (e, t) {
	return { $$typeof: pf, type: e, compare: t === void 0 ? null : t }
}
O.startTransition = function (e) {
	var t = Gr.transition
	Gr.transition = {}
	try {
		e()
	} finally {
		Gr.transition = t
	}
}
O.unstable_act = function () {
	throw Error('act(...) is not supported in production builds of React.')
}
O.useCallback = function (e, t) {
	return fe.current.useCallback(e, t)
}
O.useContext = function (e) {
	return fe.current.useContext(e)
}
O.useDebugValue = function () {}
O.useDeferredValue = function (e) {
	return fe.current.useDeferredValue(e)
}
O.useEffect = function (e, t) {
	return fe.current.useEffect(e, t)
}
O.useId = function () {
	return fe.current.useId()
}
O.useImperativeHandle = function (e, t, n) {
	return fe.current.useImperativeHandle(e, t, n)
}
O.useInsertionEffect = function (e, t) {
	return fe.current.useInsertionEffect(e, t)
}
O.useLayoutEffect = function (e, t) {
	return fe.current.useLayoutEffect(e, t)
}
O.useMemo = function (e, t) {
	return fe.current.useMemo(e, t)
}
O.useReducer = function (e, t, n) {
	return fe.current.useReducer(e, t, n)
}
O.useRef = function (e) {
	return fe.current.useRef(e)
}
O.useState = function (e) {
	return fe.current.useState(e)
}
O.useSyncExternalStore = function (e, t, n) {
	return fe.current.useSyncExternalStore(e, t, n)
}
O.useTransition = function () {
	return fe.current.useTransition()
}
O.version = '18.2.0'
va.exports = O
var p = va.exports
const ka = ma(p),
	Na = rf({ __proto__: null, default: ka }, [p])
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var wf = p,
	Sf = Symbol.for('react.element'),
	Ef = Symbol.for('react.fragment'),
	Cf = Object.prototype.hasOwnProperty,
	kf = wf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
	Nf = { key: !0, ref: !0, __self: !0, __source: !0 }
function _a(e, t, n) {
	var r,
		l = {},
		o = null,
		i = null
	n !== void 0 && (o = '' + n), t.key !== void 0 && (o = '' + t.key), t.ref !== void 0 && (i = t.ref)
	for (r in t) Cf.call(t, r) && !Nf.hasOwnProperty(r) && (l[r] = t[r])
	if (e && e.defaultProps) for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r])
	return { $$typeof: Sf, type: e, key: o, ref: i, props: l, _owner: kf.current }
}
Ml.Fragment = Ef
Ml.jsx = _a
Ml.jsxs = _a
ha.exports = Ml
var u = ha.exports,
	Io = {},
	ja = { exports: {} },
	ke = {},
	$a = { exports: {} },
	Pa = {}
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ ;(function (e) {
	function t(P, D) {
		var L = P.length
		P.push(D)
		e: for (; 0 < L; ) {
			var X = (L - 1) >>> 1,
				ee = P[X]
			if (0 < l(ee, D)) (P[X] = D), (P[L] = ee), (L = X)
			else break e
		}
	}
	function n(P) {
		return P.length === 0 ? null : P[0]
	}
	function r(P) {
		if (P.length === 0) return null
		var D = P[0],
			L = P.pop()
		if (L !== D) {
			P[0] = L
			e: for (var X = 0, ee = P.length, Er = ee >>> 1; X < Er; ) {
				var _t = 2 * (X + 1) - 1,
					to = P[_t],
					jt = _t + 1,
					Cr = P[jt]
				if (0 > l(to, L))
					jt < ee && 0 > l(Cr, to) ? ((P[X] = Cr), (P[jt] = L), (X = jt)) : ((P[X] = to), (P[_t] = L), (X = _t))
				else if (jt < ee && 0 > l(Cr, L)) (P[X] = Cr), (P[jt] = L), (X = jt)
				else break e
			}
		}
		return D
	}
	function l(P, D) {
		var L = P.sortIndex - D.sortIndex
		return L !== 0 ? L : P.id - D.id
	}
	if (typeof performance == 'object' && typeof performance.now == 'function') {
		var o = performance
		e.unstable_now = function () {
			return o.now()
		}
	} else {
		var i = Date,
			s = i.now()
		e.unstable_now = function () {
			return i.now() - s
		}
	}
	var a = [],
		d = [],
		v = 1,
		h = null,
		g = 3,
		x = !1,
		S = !1,
		y = !1,
		C = typeof setTimeout == 'function' ? setTimeout : null,
		f = typeof clearTimeout == 'function' ? clearTimeout : null,
		c = typeof setImmediate < 'u' ? setImmediate : null
	typeof navigator < 'u' &&
		navigator.scheduling !== void 0 &&
		navigator.scheduling.isInputPending !== void 0 &&
		navigator.scheduling.isInputPending.bind(navigator.scheduling)
	function m(P) {
		for (var D = n(d); D !== null; ) {
			if (D.callback === null) r(d)
			else if (D.startTime <= P) r(d), (D.sortIndex = D.expirationTime), t(a, D)
			else break
			D = n(d)
		}
	}
	function w(P) {
		if (((y = !1), m(P), !S))
			if (n(a) !== null) (S = !0), kn(E)
			else {
				var D = n(d)
				D !== null && Nn(w, D.startTime - P)
			}
	}
	function E(P, D) {
		;(S = !1), y && ((y = !1), f(N), (N = -1)), (x = !0)
		var L = g
		try {
			for (m(D), h = n(a); h !== null && (!(h.expirationTime > D) || (P && !R())); ) {
				var X = h.callback
				if (typeof X == 'function') {
					;(h.callback = null), (g = h.priorityLevel)
					var ee = X(h.expirationTime <= D)
					;(D = e.unstable_now()), typeof ee == 'function' ? (h.callback = ee) : h === n(a) && r(a), m(D)
				} else r(a)
				h = n(a)
			}
			if (h !== null) var Er = !0
			else {
				var _t = n(d)
				_t !== null && Nn(w, _t.startTime - D), (Er = !1)
			}
			return Er
		} finally {
			;(h = null), (g = L), (x = !1)
		}
	}
	var j = !1,
		_ = null,
		N = -1,
		F = 5,
		$ = -1
	function R() {
		return !(e.unstable_now() - $ < F)
	}
	function M() {
		if (_ !== null) {
			var P = e.unstable_now()
			$ = P
			var D = !0
			try {
				D = _(!0, P)
			} finally {
				D ? A() : ((j = !1), (_ = null))
			}
		} else j = !1
	}
	var A
	if (typeof c == 'function')
		A = function () {
			c(M)
		}
	else if (typeof MessageChannel < 'u') {
		var Nt = new MessageChannel(),
			Is = Nt.port2
		;(Nt.port1.onmessage = M),
			(A = function () {
				Is.postMessage(null)
			})
	} else
		A = function () {
			C(M, 0)
		}
	function kn(P) {
		;(_ = P), j || ((j = !0), A())
	}
	function Nn(P, D) {
		N = C(function () {
			P(e.unstable_now())
		}, D)
	}
	;(e.unstable_IdlePriority = 5),
		(e.unstable_ImmediatePriority = 1),
		(e.unstable_LowPriority = 4),
		(e.unstable_NormalPriority = 3),
		(e.unstable_Profiling = null),
		(e.unstable_UserBlockingPriority = 2),
		(e.unstable_cancelCallback = function (P) {
			P.callback = null
		}),
		(e.unstable_continueExecution = function () {
			S || x || ((S = !0), kn(E))
		}),
		(e.unstable_forceFrameRate = function (P) {
			0 > P || 125 < P
				? console.error(
						'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
				  )
				: (F = 0 < P ? Math.floor(1e3 / P) : 5)
		}),
		(e.unstable_getCurrentPriorityLevel = function () {
			return g
		}),
		(e.unstable_getFirstCallbackNode = function () {
			return n(a)
		}),
		(e.unstable_next = function (P) {
			switch (g) {
				case 1:
				case 2:
				case 3:
					var D = 3
					break
				default:
					D = g
			}
			var L = g
			g = D
			try {
				return P()
			} finally {
				g = L
			}
		}),
		(e.unstable_pauseExecution = function () {}),
		(e.unstable_requestPaint = function () {}),
		(e.unstable_runWithPriority = function (P, D) {
			switch (P) {
				case 1:
				case 2:
				case 3:
				case 4:
				case 5:
					break
				default:
					P = 3
			}
			var L = g
			g = P
			try {
				return D()
			} finally {
				g = L
			}
		}),
		(e.unstable_scheduleCallback = function (P, D, L) {
			var X = e.unstable_now()
			switch (
				(typeof L == 'object' && L !== null
					? ((L = L.delay), (L = typeof L == 'number' && 0 < L ? X + L : X))
					: (L = X),
				P)
			) {
				case 1:
					var ee = -1
					break
				case 2:
					ee = 250
					break
				case 5:
					ee = 1073741823
					break
				case 4:
					ee = 1e4
					break
				default:
					ee = 5e3
			}
			return (
				(ee = L + ee),
				(P = { id: v++, callback: D, priorityLevel: P, startTime: L, expirationTime: ee, sortIndex: -1 }),
				L > X
					? ((P.sortIndex = L), t(d, P), n(a) === null && P === n(d) && (y ? (f(N), (N = -1)) : (y = !0), Nn(w, L - X)))
					: ((P.sortIndex = ee), t(a, P), S || x || ((S = !0), kn(E))),
				P
			)
		}),
		(e.unstable_shouldYield = R),
		(e.unstable_wrapCallback = function (P) {
			var D = g
			return function () {
				var L = g
				g = D
				try {
					return P.apply(this, arguments)
				} finally {
					g = L
				}
			}
		})
})(Pa)
$a.exports = Pa
var _f = $a.exports
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ta = p,
	Ce = _f
function k(e) {
	for (var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, n = 1; n < arguments.length; n++)
		t += '&args[]=' + encodeURIComponent(arguments[n])
	return (
		'Minified React error #' +
		e +
		'; visit ' +
		t +
		' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
	)
}
var Ra = new Set(),
	Kn = {}
function Bt(e, t) {
	mn(e, t), mn(e + 'Capture', t)
}
function mn(e, t) {
	for (Kn[e] = t, e = 0; e < t.length; e++) Ra.add(t[e])
}
var Je = !(typeof window > 'u' || typeof window.document > 'u' || typeof window.document.createElement > 'u'),
	Ao = Object.prototype.hasOwnProperty,
	jf =
		/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
	Vs = {},
	Bs = {}
function $f(e) {
	return Ao.call(Bs, e) ? !0 : Ao.call(Vs, e) ? !1 : jf.test(e) ? (Bs[e] = !0) : ((Vs[e] = !0), !1)
}
function Pf(e, t, n, r) {
	if (n !== null && n.type === 0) return !1
	switch (typeof t) {
		case 'function':
		case 'symbol':
			return !0
		case 'boolean':
			return r
				? !1
				: n !== null
				? !n.acceptsBooleans
				: ((e = e.toLowerCase().slice(0, 5)), e !== 'data-' && e !== 'aria-')
		default:
			return !1
	}
}
function Tf(e, t, n, r) {
	if (t === null || typeof t > 'u' || Pf(e, t, n, r)) return !0
	if (r) return !1
	if (n !== null)
		switch (n.type) {
			case 3:
				return !t
			case 4:
				return t === !1
			case 5:
				return isNaN(t)
			case 6:
				return isNaN(t) || 1 > t
		}
	return !1
}
function pe(e, t, n, r, l, o, i) {
	;(this.acceptsBooleans = t === 2 || t === 3 || t === 4),
		(this.attributeName = r),
		(this.attributeNamespace = l),
		(this.mustUseProperty = n),
		(this.propertyName = e),
		(this.type = t),
		(this.sanitizeURL = o),
		(this.removeEmptyString = i)
}
var oe = {}
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
	.split(' ')
	.forEach(function (e) {
		oe[e] = new pe(e, 0, !1, e, null, !1, !1)
	})
;[
	['acceptCharset', 'accept-charset'],
	['className', 'class'],
	['htmlFor', 'for'],
	['httpEquiv', 'http-equiv'],
].forEach(function (e) {
	var t = e[0]
	oe[t] = new pe(t, 1, !1, e[1], null, !1, !1)
})
;['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
	oe[e] = new pe(e, 2, !1, e.toLowerCase(), null, !1, !1)
})
;['autoReverse', 'externalResourcesRequired', 'focusable', 'preserveAlpha'].forEach(function (e) {
	oe[e] = new pe(e, 2, !1, e, null, !1, !1)
})
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
	.split(' ')
	.forEach(function (e) {
		oe[e] = new pe(e, 3, !1, e.toLowerCase(), null, !1, !1)
	})
;['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
	oe[e] = new pe(e, 3, !0, e, null, !1, !1)
})
;['capture', 'download'].forEach(function (e) {
	oe[e] = new pe(e, 4, !1, e, null, !1, !1)
})
;['cols', 'rows', 'size', 'span'].forEach(function (e) {
	oe[e] = new pe(e, 6, !1, e, null, !1, !1)
})
;['rowSpan', 'start'].forEach(function (e) {
	oe[e] = new pe(e, 5, !1, e.toLowerCase(), null, !1, !1)
})
var Vi = /[\-:]([a-z])/g
function Bi(e) {
	return e[1].toUpperCase()
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
	.split(' ')
	.forEach(function (e) {
		var t = e.replace(Vi, Bi)
		oe[t] = new pe(t, 1, !1, e, null, !1, !1)
	})
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'.split(' ').forEach(function (e) {
	var t = e.replace(Vi, Bi)
	oe[t] = new pe(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1)
})
;['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
	var t = e.replace(Vi, Bi)
	oe[t] = new pe(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1)
})
;['tabIndex', 'crossOrigin'].forEach(function (e) {
	oe[e] = new pe(e, 1, !1, e.toLowerCase(), null, !1, !1)
})
oe.xlinkHref = new pe('xlinkHref', 1, !1, 'xlink:href', 'http://www.w3.org/1999/xlink', !0, !1)
;['src', 'href', 'action', 'formAction'].forEach(function (e) {
	oe[e] = new pe(e, 1, !1, e.toLowerCase(), null, !0, !0)
})
function bi(e, t, n, r) {
	var l = oe.hasOwnProperty(t) ? oe[t] : null
	;(l !== null
		? l.type !== 0
		: r || !(2 < t.length) || (t[0] !== 'o' && t[0] !== 'O') || (t[1] !== 'n' && t[1] !== 'N')) &&
		(Tf(t, n, l, r) && (n = null),
		r || l === null
			? $f(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
			: l.mustUseProperty
			? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : '') : n)
			: ((t = l.attributeName),
			  (r = l.attributeNamespace),
			  n === null
					? e.removeAttribute(t)
					: ((l = l.type),
					  (n = l === 3 || (l === 4 && n === !0) ? '' : '' + n),
					  r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var nt = Ta.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
	Nr = Symbol.for('react.element'),
	Yt = Symbol.for('react.portal'),
	Xt = Symbol.for('react.fragment'),
	Wi = Symbol.for('react.strict_mode'),
	zo = Symbol.for('react.profiler'),
	Da = Symbol.for('react.provider'),
	La = Symbol.for('react.context'),
	Hi = Symbol.for('react.forward_ref'),
	Uo = Symbol.for('react.suspense'),
	Vo = Symbol.for('react.suspense_list'),
	Qi = Symbol.for('react.memo'),
	ot = Symbol.for('react.lazy'),
	Oa = Symbol.for('react.offscreen'),
	bs = Symbol.iterator
function _n(e) {
	return e === null || typeof e != 'object'
		? null
		: ((e = (bs && e[bs]) || e['@@iterator']), typeof e == 'function' ? e : null)
}
var K = Object.assign,
	ro
function On(e) {
	if (ro === void 0)
		try {
			throw Error()
		} catch (n) {
			var t = n.stack.trim().match(/\n( *(at )?)/)
			ro = (t && t[1]) || ''
		}
	return (
		`
` +
		ro +
		e
	)
}
var lo = !1
function oo(e, t) {
	if (!e || lo) return ''
	lo = !0
	var n = Error.prepareStackTrace
	Error.prepareStackTrace = void 0
	try {
		if (t)
			if (
				((t = function () {
					throw Error()
				}),
				Object.defineProperty(t.prototype, 'props', {
					set: function () {
						throw Error()
					},
				}),
				typeof Reflect == 'object' && Reflect.construct)
			) {
				try {
					Reflect.construct(t, [])
				} catch (d) {
					var r = d
				}
				Reflect.construct(e, [], t)
			} else {
				try {
					t.call()
				} catch (d) {
					r = d
				}
				e.call(t.prototype)
			}
		else {
			try {
				throw Error()
			} catch (d) {
				r = d
			}
			e()
		}
	} catch (d) {
		if (d && r && typeof d.stack == 'string') {
			for (
				var l = d.stack.split(`
`),
					o = r.stack.split(`
`),
					i = l.length - 1,
					s = o.length - 1;
				1 <= i && 0 <= s && l[i] !== o[s];

			)
				s--
			for (; 1 <= i && 0 <= s; i--, s--)
				if (l[i] !== o[s]) {
					if (i !== 1 || s !== 1)
						do
							if ((i--, s--, 0 > s || l[i] !== o[s])) {
								var a =
									`
` + l[i].replace(' at new ', ' at ')
								return e.displayName && a.includes('<anonymous>') && (a = a.replace('<anonymous>', e.displayName)), a
							}
						while (1 <= i && 0 <= s)
					break
				}
		}
	} finally {
		;(lo = !1), (Error.prepareStackTrace = n)
	}
	return (e = e ? e.displayName || e.name : '') ? On(e) : ''
}
function Rf(e) {
	switch (e.tag) {
		case 5:
			return On(e.type)
		case 16:
			return On('Lazy')
		case 13:
			return On('Suspense')
		case 19:
			return On('SuspenseList')
		case 0:
		case 2:
		case 15:
			return (e = oo(e.type, !1)), e
		case 11:
			return (e = oo(e.type.render, !1)), e
		case 1:
			return (e = oo(e.type, !0)), e
		default:
			return ''
	}
}
function Bo(e) {
	if (e == null) return null
	if (typeof e == 'function') return e.displayName || e.name || null
	if (typeof e == 'string') return e
	switch (e) {
		case Xt:
			return 'Fragment'
		case Yt:
			return 'Portal'
		case zo:
			return 'Profiler'
		case Wi:
			return 'StrictMode'
		case Uo:
			return 'Suspense'
		case Vo:
			return 'SuspenseList'
	}
	if (typeof e == 'object')
		switch (e.$$typeof) {
			case La:
				return (e.displayName || 'Context') + '.Consumer'
			case Da:
				return (e._context.displayName || 'Context') + '.Provider'
			case Hi:
				var t = e.render
				return (
					(e = e.displayName),
					e || ((e = t.displayName || t.name || ''), (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
					e
				)
			case Qi:
				return (t = e.displayName || null), t !== null ? t : Bo(e.type) || 'Memo'
			case ot:
				;(t = e._payload), (e = e._init)
				try {
					return Bo(e(t))
				} catch {}
		}
	return null
}
function Df(e) {
	var t = e.type
	switch (e.tag) {
		case 24:
			return 'Cache'
		case 9:
			return (t.displayName || 'Context') + '.Consumer'
		case 10:
			return (t._context.displayName || 'Context') + '.Provider'
		case 18:
			return 'DehydratedFragment'
		case 11:
			return (
				(e = t.render),
				(e = e.displayName || e.name || ''),
				t.displayName || (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')
			)
		case 7:
			return 'Fragment'
		case 5:
			return t
		case 4:
			return 'Portal'
		case 3:
			return 'Root'
		case 6:
			return 'Text'
		case 16:
			return Bo(t)
		case 8:
			return t === Wi ? 'StrictMode' : 'Mode'
		case 22:
			return 'Offscreen'
		case 12:
			return 'Profiler'
		case 21:
			return 'Scope'
		case 13:
			return 'Suspense'
		case 19:
			return 'SuspenseList'
		case 25:
			return 'TracingMarker'
		case 1:
		case 0:
		case 17:
		case 2:
		case 14:
		case 15:
			if (typeof t == 'function') return t.displayName || t.name || null
			if (typeof t == 'string') return t
	}
	return null
}
function xt(e) {
	switch (typeof e) {
		case 'boolean':
		case 'number':
		case 'string':
		case 'undefined':
			return e
		case 'object':
			return e
		default:
			return ''
	}
}
function Fa(e) {
	var t = e.type
	return (e = e.nodeName) && e.toLowerCase() === 'input' && (t === 'checkbox' || t === 'radio')
}
function Lf(e) {
	var t = Fa(e) ? 'checked' : 'value',
		n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
		r = '' + e[t]
	if (!e.hasOwnProperty(t) && typeof n < 'u' && typeof n.get == 'function' && typeof n.set == 'function') {
		var l = n.get,
			o = n.set
		return (
			Object.defineProperty(e, t, {
				configurable: !0,
				get: function () {
					return l.call(this)
				},
				set: function (i) {
					;(r = '' + i), o.call(this, i)
				},
			}),
			Object.defineProperty(e, t, { enumerable: n.enumerable }),
			{
				getValue: function () {
					return r
				},
				setValue: function (i) {
					r = '' + i
				},
				stopTracking: function () {
					;(e._valueTracker = null), delete e[t]
				},
			}
		)
	}
}
function _r(e) {
	e._valueTracker || (e._valueTracker = Lf(e))
}
function Ma(e) {
	if (!e) return !1
	var t = e._valueTracker
	if (!t) return !0
	var n = t.getValue(),
		r = ''
	return e && (r = Fa(e) ? (e.checked ? 'true' : 'false') : e.value), (e = r), e !== n ? (t.setValue(e), !0) : !1
}
function cl(e) {
	if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u')) return null
	try {
		return e.activeElement || e.body
	} catch {
		return e.body
	}
}
function bo(e, t) {
	var n = t.checked
	return K({}, t, {
		defaultChecked: void 0,
		defaultValue: void 0,
		value: void 0,
		checked: n ?? e._wrapperState.initialChecked,
	})
}
function Ws(e, t) {
	var n = t.defaultValue == null ? '' : t.defaultValue,
		r = t.checked != null ? t.checked : t.defaultChecked
	;(n = xt(t.value != null ? t.value : n)),
		(e._wrapperState = {
			initialChecked: r,
			initialValue: n,
			controlled: t.type === 'checkbox' || t.type === 'radio' ? t.checked != null : t.value != null,
		})
}
function Ia(e, t) {
	;(t = t.checked), t != null && bi(e, 'checked', t, !1)
}
function Wo(e, t) {
	Ia(e, t)
	var n = xt(t.value),
		r = t.type
	if (n != null)
		r === 'number'
			? ((n === 0 && e.value === '') || e.value != n) && (e.value = '' + n)
			: e.value !== '' + n && (e.value = '' + n)
	else if (r === 'submit' || r === 'reset') {
		e.removeAttribute('value')
		return
	}
	t.hasOwnProperty('value') ? Ho(e, t.type, n) : t.hasOwnProperty('defaultValue') && Ho(e, t.type, xt(t.defaultValue)),
		t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}
function Hs(e, t, n) {
	if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
		var r = t.type
		if (!((r !== 'submit' && r !== 'reset') || (t.value !== void 0 && t.value !== null))) return
		;(t = '' + e._wrapperState.initialValue), n || t === e.value || (e.value = t), (e.defaultValue = t)
	}
	;(n = e.name),
		n !== '' && (e.name = ''),
		(e.defaultChecked = !!e._wrapperState.initialChecked),
		n !== '' && (e.name = n)
}
function Ho(e, t, n) {
	;(t !== 'number' || cl(e.ownerDocument) !== e) &&
		(n == null
			? (e.defaultValue = '' + e._wrapperState.initialValue)
			: e.defaultValue !== '' + n && (e.defaultValue = '' + n))
}
var Fn = Array.isArray
function un(e, t, n, r) {
	if (((e = e.options), t)) {
		t = {}
		for (var l = 0; l < n.length; l++) t['$' + n[l]] = !0
		for (n = 0; n < e.length; n++)
			(l = t.hasOwnProperty('$' + e[n].value)),
				e[n].selected !== l && (e[n].selected = l),
				l && r && (e[n].defaultSelected = !0)
	} else {
		for (n = '' + xt(n), t = null, l = 0; l < e.length; l++) {
			if (e[l].value === n) {
				;(e[l].selected = !0), r && (e[l].defaultSelected = !0)
				return
			}
			t !== null || e[l].disabled || (t = e[l])
		}
		t !== null && (t.selected = !0)
	}
}
function Qo(e, t) {
	if (t.dangerouslySetInnerHTML != null) throw Error(k(91))
	return K({}, t, { value: void 0, defaultValue: void 0, children: '' + e._wrapperState.initialValue })
}
function Qs(e, t) {
	var n = t.value
	if (n == null) {
		if (((n = t.children), (t = t.defaultValue), n != null)) {
			if (t != null) throw Error(k(92))
			if (Fn(n)) {
				if (1 < n.length) throw Error(k(93))
				n = n[0]
			}
			t = n
		}
		t == null && (t = ''), (n = t)
	}
	e._wrapperState = { initialValue: xt(n) }
}
function Aa(e, t) {
	var n = xt(t.value),
		r = xt(t.defaultValue)
	n != null &&
		((n = '' + n),
		n !== e.value && (e.value = n),
		t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
		r != null && (e.defaultValue = '' + r)
}
function Ks(e) {
	var t = e.textContent
	t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t)
}
function za(e) {
	switch (e) {
		case 'svg':
			return 'http://www.w3.org/2000/svg'
		case 'math':
			return 'http://www.w3.org/1998/Math/MathML'
		default:
			return 'http://www.w3.org/1999/xhtml'
	}
}
function Ko(e, t) {
	return e == null || e === 'http://www.w3.org/1999/xhtml'
		? za(t)
		: e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
		? 'http://www.w3.org/1999/xhtml'
		: e
}
var jr,
	Ua = (function (e) {
		return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
			? function (t, n, r, l) {
					MSApp.execUnsafeLocalFunction(function () {
						return e(t, n, r, l)
					})
			  }
			: e
	})(function (e, t) {
		if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e) e.innerHTML = t
		else {
			for (
				jr = jr || document.createElement('div'),
					jr.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
					t = jr.firstChild;
				e.firstChild;

			)
				e.removeChild(e.firstChild)
			for (; t.firstChild; ) e.appendChild(t.firstChild)
		}
	})
function Yn(e, t) {
	if (t) {
		var n = e.firstChild
		if (n && n === e.lastChild && n.nodeType === 3) {
			n.nodeValue = t
			return
		}
	}
	e.textContent = t
}
var An = {
		animationIterationCount: !0,
		aspectRatio: !0,
		borderImageOutset: !0,
		borderImageSlice: !0,
		borderImageWidth: !0,
		boxFlex: !0,
		boxFlexGroup: !0,
		boxOrdinalGroup: !0,
		columnCount: !0,
		columns: !0,
		flex: !0,
		flexGrow: !0,
		flexPositive: !0,
		flexShrink: !0,
		flexNegative: !0,
		flexOrder: !0,
		gridArea: !0,
		gridRow: !0,
		gridRowEnd: !0,
		gridRowSpan: !0,
		gridRowStart: !0,
		gridColumn: !0,
		gridColumnEnd: !0,
		gridColumnSpan: !0,
		gridColumnStart: !0,
		fontWeight: !0,
		lineClamp: !0,
		lineHeight: !0,
		opacity: !0,
		order: !0,
		orphans: !0,
		tabSize: !0,
		widows: !0,
		zIndex: !0,
		zoom: !0,
		fillOpacity: !0,
		floodOpacity: !0,
		stopOpacity: !0,
		strokeDasharray: !0,
		strokeDashoffset: !0,
		strokeMiterlimit: !0,
		strokeOpacity: !0,
		strokeWidth: !0,
	},
	Of = ['Webkit', 'ms', 'Moz', 'O']
Object.keys(An).forEach(function (e) {
	Of.forEach(function (t) {
		;(t = t + e.charAt(0).toUpperCase() + e.substring(1)), (An[t] = An[e])
	})
})
function Va(e, t, n) {
	return t == null || typeof t == 'boolean' || t === ''
		? ''
		: n || typeof t != 'number' || t === 0 || (An.hasOwnProperty(e) && An[e])
		? ('' + t).trim()
		: t + 'px'
}
function Ba(e, t) {
	e = e.style
	for (var n in t)
		if (t.hasOwnProperty(n)) {
			var r = n.indexOf('--') === 0,
				l = Va(n, t[n], r)
			n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, l) : (e[n] = l)
		}
}
var Ff = K(
	{ menuitem: !0 },
	{
		area: !0,
		base: !0,
		br: !0,
		col: !0,
		embed: !0,
		hr: !0,
		img: !0,
		input: !0,
		keygen: !0,
		link: !0,
		meta: !0,
		param: !0,
		source: !0,
		track: !0,
		wbr: !0,
	}
)
function Yo(e, t) {
	if (t) {
		if (Ff[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(k(137, e))
		if (t.dangerouslySetInnerHTML != null) {
			if (t.children != null) throw Error(k(60))
			if (typeof t.dangerouslySetInnerHTML != 'object' || !('__html' in t.dangerouslySetInnerHTML)) throw Error(k(61))
		}
		if (t.style != null && typeof t.style != 'object') throw Error(k(62))
	}
}
function Xo(e, t) {
	if (e.indexOf('-') === -1) return typeof t.is == 'string'
	switch (e) {
		case 'annotation-xml':
		case 'color-profile':
		case 'font-face':
		case 'font-face-src':
		case 'font-face-uri':
		case 'font-face-format':
		case 'font-face-name':
		case 'missing-glyph':
			return !1
		default:
			return !0
	}
}
var Go = null
function Ki(e) {
	return (
		(e = e.target || e.srcElement || window),
		e.correspondingUseElement && (e = e.correspondingUseElement),
		e.nodeType === 3 ? e.parentNode : e
	)
}
var Zo = null,
	an = null,
	cn = null
function Ys(e) {
	if ((e = wr(e))) {
		if (typeof Zo != 'function') throw Error(k(280))
		var t = e.stateNode
		t && ((t = Vl(t)), Zo(e.stateNode, e.type, t))
	}
}
function ba(e) {
	an ? (cn ? cn.push(e) : (cn = [e])) : (an = e)
}
function Wa() {
	if (an) {
		var e = an,
			t = cn
		if (((cn = an = null), Ys(e), t)) for (e = 0; e < t.length; e++) Ys(t[e])
	}
}
function Ha(e, t) {
	return e(t)
}
function Qa() {}
var io = !1
function Ka(e, t, n) {
	if (io) return e(t, n)
	io = !0
	try {
		return Ha(e, t, n)
	} finally {
		;(io = !1), (an !== null || cn !== null) && (Qa(), Wa())
	}
}
function Xn(e, t) {
	var n = e.stateNode
	if (n === null) return null
	var r = Vl(n)
	if (r === null) return null
	n = r[t]
	e: switch (t) {
		case 'onClick':
		case 'onClickCapture':
		case 'onDoubleClick':
		case 'onDoubleClickCapture':
		case 'onMouseDown':
		case 'onMouseDownCapture':
		case 'onMouseMove':
		case 'onMouseMoveCapture':
		case 'onMouseUp':
		case 'onMouseUpCapture':
		case 'onMouseEnter':
			;(r = !r.disabled) ||
				((e = e.type), (r = !(e === 'button' || e === 'input' || e === 'select' || e === 'textarea'))),
				(e = !r)
			break e
		default:
			e = !1
	}
	if (e) return null
	if (n && typeof n != 'function') throw Error(k(231, t, typeof n))
	return n
}
var Jo = !1
if (Je)
	try {
		var jn = {}
		Object.defineProperty(jn, 'passive', {
			get: function () {
				Jo = !0
			},
		}),
			window.addEventListener('test', jn, jn),
			window.removeEventListener('test', jn, jn)
	} catch {
		Jo = !1
	}
function Mf(e, t, n, r, l, o, i, s, a) {
	var d = Array.prototype.slice.call(arguments, 3)
	try {
		t.apply(n, d)
	} catch (v) {
		this.onError(v)
	}
}
var zn = !1,
	dl = null,
	fl = !1,
	qo = null,
	If = {
		onError: function (e) {
			;(zn = !0), (dl = e)
		},
	}
function Af(e, t, n, r, l, o, i, s, a) {
	;(zn = !1), (dl = null), Mf.apply(If, arguments)
}
function zf(e, t, n, r, l, o, i, s, a) {
	if ((Af.apply(this, arguments), zn)) {
		if (zn) {
			var d = dl
			;(zn = !1), (dl = null)
		} else throw Error(k(198))
		fl || ((fl = !0), (qo = d))
	}
}
function bt(e) {
	var t = e,
		n = e
	if (e.alternate) for (; t.return; ) t = t.return
	else {
		e = t
		do (t = e), t.flags & 4098 && (n = t.return), (e = t.return)
		while (e)
	}
	return t.tag === 3 ? n : null
}
function Ya(e) {
	if (e.tag === 13) {
		var t = e.memoizedState
		if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null)) return t.dehydrated
	}
	return null
}
function Xs(e) {
	if (bt(e) !== e) throw Error(k(188))
}
function Uf(e) {
	var t = e.alternate
	if (!t) {
		if (((t = bt(e)), t === null)) throw Error(k(188))
		return t !== e ? null : e
	}
	for (var n = e, r = t; ; ) {
		var l = n.return
		if (l === null) break
		var o = l.alternate
		if (o === null) {
			if (((r = l.return), r !== null)) {
				n = r
				continue
			}
			break
		}
		if (l.child === o.child) {
			for (o = l.child; o; ) {
				if (o === n) return Xs(l), e
				if (o === r) return Xs(l), t
				o = o.sibling
			}
			throw Error(k(188))
		}
		if (n.return !== r.return) (n = l), (r = o)
		else {
			for (var i = !1, s = l.child; s; ) {
				if (s === n) {
					;(i = !0), (n = l), (r = o)
					break
				}
				if (s === r) {
					;(i = !0), (r = l), (n = o)
					break
				}
				s = s.sibling
			}
			if (!i) {
				for (s = o.child; s; ) {
					if (s === n) {
						;(i = !0), (n = o), (r = l)
						break
					}
					if (s === r) {
						;(i = !0), (r = o), (n = l)
						break
					}
					s = s.sibling
				}
				if (!i) throw Error(k(189))
			}
		}
		if (n.alternate !== r) throw Error(k(190))
	}
	if (n.tag !== 3) throw Error(k(188))
	return n.stateNode.current === n ? e : t
}
function Xa(e) {
	return (e = Uf(e)), e !== null ? Ga(e) : null
}
function Ga(e) {
	if (e.tag === 5 || e.tag === 6) return e
	for (e = e.child; e !== null; ) {
		var t = Ga(e)
		if (t !== null) return t
		e = e.sibling
	}
	return null
}
var Za = Ce.unstable_scheduleCallback,
	Gs = Ce.unstable_cancelCallback,
	Vf = Ce.unstable_shouldYield,
	Bf = Ce.unstable_requestPaint,
	G = Ce.unstable_now,
	bf = Ce.unstable_getCurrentPriorityLevel,
	Yi = Ce.unstable_ImmediatePriority,
	Ja = Ce.unstable_UserBlockingPriority,
	pl = Ce.unstable_NormalPriority,
	Wf = Ce.unstable_LowPriority,
	qa = Ce.unstable_IdlePriority,
	Il = null,
	We = null
function Hf(e) {
	if (We && typeof We.onCommitFiberRoot == 'function')
		try {
			We.onCommitFiberRoot(Il, e, void 0, (e.current.flags & 128) === 128)
		} catch {}
}
var Ie = Math.clz32 ? Math.clz32 : Yf,
	Qf = Math.log,
	Kf = Math.LN2
function Yf(e) {
	return (e >>>= 0), e === 0 ? 32 : (31 - ((Qf(e) / Kf) | 0)) | 0
}
var $r = 64,
	Pr = 4194304
function Mn(e) {
	switch (e & -e) {
		case 1:
			return 1
		case 2:
			return 2
		case 4:
			return 4
		case 8:
			return 8
		case 16:
			return 16
		case 32:
			return 32
		case 64:
		case 128:
		case 256:
		case 512:
		case 1024:
		case 2048:
		case 4096:
		case 8192:
		case 16384:
		case 32768:
		case 65536:
		case 131072:
		case 262144:
		case 524288:
		case 1048576:
		case 2097152:
			return e & 4194240
		case 4194304:
		case 8388608:
		case 16777216:
		case 33554432:
		case 67108864:
			return e & 130023424
		case 134217728:
			return 134217728
		case 268435456:
			return 268435456
		case 536870912:
			return 536870912
		case 1073741824:
			return 1073741824
		default:
			return e
	}
}
function ml(e, t) {
	var n = e.pendingLanes
	if (n === 0) return 0
	var r = 0,
		l = e.suspendedLanes,
		o = e.pingedLanes,
		i = n & 268435455
	if (i !== 0) {
		var s = i & ~l
		s !== 0 ? (r = Mn(s)) : ((o &= i), o !== 0 && (r = Mn(o)))
	} else (i = n & ~l), i !== 0 ? (r = Mn(i)) : o !== 0 && (r = Mn(o))
	if (r === 0) return 0
	if (t !== 0 && t !== r && !(t & l) && ((l = r & -r), (o = t & -t), l >= o || (l === 16 && (o & 4194240) !== 0)))
		return t
	if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
		for (e = e.entanglements, t &= r; 0 < t; ) (n = 31 - Ie(t)), (l = 1 << n), (r |= e[n]), (t &= ~l)
	return r
}
function Xf(e, t) {
	switch (e) {
		case 1:
		case 2:
		case 4:
			return t + 250
		case 8:
		case 16:
		case 32:
		case 64:
		case 128:
		case 256:
		case 512:
		case 1024:
		case 2048:
		case 4096:
		case 8192:
		case 16384:
		case 32768:
		case 65536:
		case 131072:
		case 262144:
		case 524288:
		case 1048576:
		case 2097152:
			return t + 5e3
		case 4194304:
		case 8388608:
		case 16777216:
		case 33554432:
		case 67108864:
			return -1
		case 134217728:
		case 268435456:
		case 536870912:
		case 1073741824:
			return -1
		default:
			return -1
	}
}
function Gf(e, t) {
	for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
		var i = 31 - Ie(o),
			s = 1 << i,
			a = l[i]
		a === -1 ? (!(s & n) || s & r) && (l[i] = Xf(s, t)) : a <= t && (e.expiredLanes |= s), (o &= ~s)
	}
}
function ei(e) {
	return (e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}
function ec() {
	var e = $r
	return ($r <<= 1), !($r & 4194240) && ($r = 64), e
}
function so(e) {
	for (var t = [], n = 0; 31 > n; n++) t.push(e)
	return t
}
function yr(e, t, n) {
	;(e.pendingLanes |= t),
		t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
		(e = e.eventTimes),
		(t = 31 - Ie(t)),
		(e[t] = n)
}
function Zf(e, t) {
	var n = e.pendingLanes & ~t
	;(e.pendingLanes = t),
		(e.suspendedLanes = 0),
		(e.pingedLanes = 0),
		(e.expiredLanes &= t),
		(e.mutableReadLanes &= t),
		(e.entangledLanes &= t),
		(t = e.entanglements)
	var r = e.eventTimes
	for (e = e.expirationTimes; 0 < n; ) {
		var l = 31 - Ie(n),
			o = 1 << l
		;(t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~o)
	}
}
function Xi(e, t) {
	var n = (e.entangledLanes |= t)
	for (e = e.entanglements; n; ) {
		var r = 31 - Ie(n),
			l = 1 << r
		;(l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l)
	}
}
var z = 0
function tc(e) {
	return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
}
var nc,
	Gi,
	rc,
	lc,
	oc,
	ti = !1,
	Tr = [],
	dt = null,
	ft = null,
	pt = null,
	Gn = new Map(),
	Zn = new Map(),
	st = [],
	Jf =
		'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
			' '
		)
function Zs(e, t) {
	switch (e) {
		case 'focusin':
		case 'focusout':
			dt = null
			break
		case 'dragenter':
		case 'dragleave':
			ft = null
			break
		case 'mouseover':
		case 'mouseout':
			pt = null
			break
		case 'pointerover':
		case 'pointerout':
			Gn.delete(t.pointerId)
			break
		case 'gotpointercapture':
		case 'lostpointercapture':
			Zn.delete(t.pointerId)
	}
}
function $n(e, t, n, r, l, o) {
	return e === null || e.nativeEvent !== o
		? ((e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: o, targetContainers: [l] }),
		  t !== null && ((t = wr(t)), t !== null && Gi(t)),
		  e)
		: ((e.eventSystemFlags |= r), (t = e.targetContainers), l !== null && t.indexOf(l) === -1 && t.push(l), e)
}
function qf(e, t, n, r, l) {
	switch (t) {
		case 'focusin':
			return (dt = $n(dt, e, t, n, r, l)), !0
		case 'dragenter':
			return (ft = $n(ft, e, t, n, r, l)), !0
		case 'mouseover':
			return (pt = $n(pt, e, t, n, r, l)), !0
		case 'pointerover':
			var o = l.pointerId
			return Gn.set(o, $n(Gn.get(o) || null, e, t, n, r, l)), !0
		case 'gotpointercapture':
			return (o = l.pointerId), Zn.set(o, $n(Zn.get(o) || null, e, t, n, r, l)), !0
	}
	return !1
}
function ic(e) {
	var t = Tt(e.target)
	if (t !== null) {
		var n = bt(t)
		if (n !== null) {
			if (((t = n.tag), t === 13)) {
				if (((t = Ya(n)), t !== null)) {
					;(e.blockedOn = t),
						oc(e.priority, function () {
							rc(n)
						})
					return
				}
			} else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
				e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null
				return
			}
		}
	}
	e.blockedOn = null
}
function Zr(e) {
	if (e.blockedOn !== null) return !1
	for (var t = e.targetContainers; 0 < t.length; ) {
		var n = ni(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent)
		if (n === null) {
			n = e.nativeEvent
			var r = new n.constructor(n.type, n)
			;(Go = r), n.target.dispatchEvent(r), (Go = null)
		} else return (t = wr(n)), t !== null && Gi(t), (e.blockedOn = n), !1
		t.shift()
	}
	return !0
}
function Js(e, t, n) {
	Zr(e) && n.delete(t)
}
function ep() {
	;(ti = !1),
		dt !== null && Zr(dt) && (dt = null),
		ft !== null && Zr(ft) && (ft = null),
		pt !== null && Zr(pt) && (pt = null),
		Gn.forEach(Js),
		Zn.forEach(Js)
}
function Pn(e, t) {
	e.blockedOn === t &&
		((e.blockedOn = null), ti || ((ti = !0), Ce.unstable_scheduleCallback(Ce.unstable_NormalPriority, ep)))
}
function Jn(e) {
	function t(l) {
		return Pn(l, e)
	}
	if (0 < Tr.length) {
		Pn(Tr[0], e)
		for (var n = 1; n < Tr.length; n++) {
			var r = Tr[n]
			r.blockedOn === e && (r.blockedOn = null)
		}
	}
	for (
		dt !== null && Pn(dt, e), ft !== null && Pn(ft, e), pt !== null && Pn(pt, e), Gn.forEach(t), Zn.forEach(t), n = 0;
		n < st.length;
		n++
	)
		(r = st[n]), r.blockedOn === e && (r.blockedOn = null)
	for (; 0 < st.length && ((n = st[0]), n.blockedOn === null); ) ic(n), n.blockedOn === null && st.shift()
}
var dn = nt.ReactCurrentBatchConfig,
	hl = !0
function tp(e, t, n, r) {
	var l = z,
		o = dn.transition
	dn.transition = null
	try {
		;(z = 1), Zi(e, t, n, r)
	} finally {
		;(z = l), (dn.transition = o)
	}
}
function np(e, t, n, r) {
	var l = z,
		o = dn.transition
	dn.transition = null
	try {
		;(z = 4), Zi(e, t, n, r)
	} finally {
		;(z = l), (dn.transition = o)
	}
}
function Zi(e, t, n, r) {
	if (hl) {
		var l = ni(e, t, n, r)
		if (l === null) yo(e, t, r, vl, n), Zs(e, r)
		else if (qf(l, e, t, n, r)) r.stopPropagation()
		else if ((Zs(e, r), t & 4 && -1 < Jf.indexOf(e))) {
			for (; l !== null; ) {
				var o = wr(l)
				if ((o !== null && nc(o), (o = ni(e, t, n, r)), o === null && yo(e, t, r, vl, n), o === l)) break
				l = o
			}
			l !== null && r.stopPropagation()
		} else yo(e, t, r, null, n)
	}
}
var vl = null
function ni(e, t, n, r) {
	if (((vl = null), (e = Ki(r)), (e = Tt(e)), e !== null))
		if (((t = bt(e)), t === null)) e = null
		else if (((n = t.tag), n === 13)) {
			if (((e = Ya(t)), e !== null)) return e
			e = null
		} else if (n === 3) {
			if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null
			e = null
		} else t !== e && (e = null)
	return (vl = e), null
}
function sc(e) {
	switch (e) {
		case 'cancel':
		case 'click':
		case 'close':
		case 'contextmenu':
		case 'copy':
		case 'cut':
		case 'auxclick':
		case 'dblclick':
		case 'dragend':
		case 'dragstart':
		case 'drop':
		case 'focusin':
		case 'focusout':
		case 'input':
		case 'invalid':
		case 'keydown':
		case 'keypress':
		case 'keyup':
		case 'mousedown':
		case 'mouseup':
		case 'paste':
		case 'pause':
		case 'play':
		case 'pointercancel':
		case 'pointerdown':
		case 'pointerup':
		case 'ratechange':
		case 'reset':
		case 'resize':
		case 'seeked':
		case 'submit':
		case 'touchcancel':
		case 'touchend':
		case 'touchstart':
		case 'volumechange':
		case 'change':
		case 'selectionchange':
		case 'textInput':
		case 'compositionstart':
		case 'compositionend':
		case 'compositionupdate':
		case 'beforeblur':
		case 'afterblur':
		case 'beforeinput':
		case 'blur':
		case 'fullscreenchange':
		case 'focus':
		case 'hashchange':
		case 'popstate':
		case 'select':
		case 'selectstart':
			return 1
		case 'drag':
		case 'dragenter':
		case 'dragexit':
		case 'dragleave':
		case 'dragover':
		case 'mousemove':
		case 'mouseout':
		case 'mouseover':
		case 'pointermove':
		case 'pointerout':
		case 'pointerover':
		case 'scroll':
		case 'toggle':
		case 'touchmove':
		case 'wheel':
		case 'mouseenter':
		case 'mouseleave':
		case 'pointerenter':
		case 'pointerleave':
			return 4
		case 'message':
			switch (bf()) {
				case Yi:
					return 1
				case Ja:
					return 4
				case pl:
				case Wf:
					return 16
				case qa:
					return 536870912
				default:
					return 16
			}
		default:
			return 16
	}
}
var at = null,
	Ji = null,
	Jr = null
function uc() {
	if (Jr) return Jr
	var e,
		t = Ji,
		n = t.length,
		r,
		l = 'value' in at ? at.value : at.textContent,
		o = l.length
	for (e = 0; e < n && t[e] === l[e]; e++);
	var i = n - e
	for (r = 1; r <= i && t[n - r] === l[o - r]; r++);
	return (Jr = l.slice(e, 1 < r ? 1 - r : void 0))
}
function qr(e) {
	var t = e.keyCode
	return (
		'charCode' in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t),
		e === 10 && (e = 13),
		32 <= e || e === 13 ? e : 0
	)
}
function Rr() {
	return !0
}
function qs() {
	return !1
}
function Ne(e) {
	function t(n, r, l, o, i) {
		;(this._reactName = n),
			(this._targetInst = l),
			(this.type = r),
			(this.nativeEvent = o),
			(this.target = i),
			(this.currentTarget = null)
		for (var s in e) e.hasOwnProperty(s) && ((n = e[s]), (this[s] = n ? n(o) : o[s]))
		return (
			(this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? Rr : qs),
			(this.isPropagationStopped = qs),
			this
		)
	}
	return (
		K(t.prototype, {
			preventDefault: function () {
				this.defaultPrevented = !0
				var n = this.nativeEvent
				n &&
					(n.preventDefault ? n.preventDefault() : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
					(this.isDefaultPrevented = Rr))
			},
			stopPropagation: function () {
				var n = this.nativeEvent
				n &&
					(n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
					(this.isPropagationStopped = Rr))
			},
			persist: function () {},
			isPersistent: Rr,
		}),
		t
	)
}
var En = {
		eventPhase: 0,
		bubbles: 0,
		cancelable: 0,
		timeStamp: function (e) {
			return e.timeStamp || Date.now()
		},
		defaultPrevented: 0,
		isTrusted: 0,
	},
	qi = Ne(En),
	xr = K({}, En, { view: 0, detail: 0 }),
	rp = Ne(xr),
	uo,
	ao,
	Tn,
	Al = K({}, xr, {
		screenX: 0,
		screenY: 0,
		clientX: 0,
		clientY: 0,
		pageX: 0,
		pageY: 0,
		ctrlKey: 0,
		shiftKey: 0,
		altKey: 0,
		metaKey: 0,
		getModifierState: es,
		button: 0,
		buttons: 0,
		relatedTarget: function (e) {
			return e.relatedTarget === void 0
				? e.fromElement === e.srcElement
					? e.toElement
					: e.fromElement
				: e.relatedTarget
		},
		movementX: function (e) {
			return 'movementX' in e
				? e.movementX
				: (e !== Tn &&
						(Tn && e.type === 'mousemove'
							? ((uo = e.screenX - Tn.screenX), (ao = e.screenY - Tn.screenY))
							: (ao = uo = 0),
						(Tn = e)),
				  uo)
		},
		movementY: function (e) {
			return 'movementY' in e ? e.movementY : ao
		},
	}),
	eu = Ne(Al),
	lp = K({}, Al, { dataTransfer: 0 }),
	op = Ne(lp),
	ip = K({}, xr, { relatedTarget: 0 }),
	co = Ne(ip),
	sp = K({}, En, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
	up = Ne(sp),
	ap = K({}, En, {
		clipboardData: function (e) {
			return 'clipboardData' in e ? e.clipboardData : window.clipboardData
		},
	}),
	cp = Ne(ap),
	dp = K({}, En, { data: 0 }),
	tu = Ne(dp),
	fp = {
		Esc: 'Escape',
		Spacebar: ' ',
		Left: 'ArrowLeft',
		Up: 'ArrowUp',
		Right: 'ArrowRight',
		Down: 'ArrowDown',
		Del: 'Delete',
		Win: 'OS',
		Menu: 'ContextMenu',
		Apps: 'ContextMenu',
		Scroll: 'ScrollLock',
		MozPrintableKey: 'Unidentified',
	},
	pp = {
		8: 'Backspace',
		9: 'Tab',
		12: 'Clear',
		13: 'Enter',
		16: 'Shift',
		17: 'Control',
		18: 'Alt',
		19: 'Pause',
		20: 'CapsLock',
		27: 'Escape',
		32: ' ',
		33: 'PageUp',
		34: 'PageDown',
		35: 'End',
		36: 'Home',
		37: 'ArrowLeft',
		38: 'ArrowUp',
		39: 'ArrowRight',
		40: 'ArrowDown',
		45: 'Insert',
		46: 'Delete',
		112: 'F1',
		113: 'F2',
		114: 'F3',
		115: 'F4',
		116: 'F5',
		117: 'F6',
		118: 'F7',
		119: 'F8',
		120: 'F9',
		121: 'F10',
		122: 'F11',
		123: 'F12',
		144: 'NumLock',
		145: 'ScrollLock',
		224: 'Meta',
	},
	mp = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' }
function hp(e) {
	var t = this.nativeEvent
	return t.getModifierState ? t.getModifierState(e) : (e = mp[e]) ? !!t[e] : !1
}
function es() {
	return hp
}
var vp = K({}, xr, {
		key: function (e) {
			if (e.key) {
				var t = fp[e.key] || e.key
				if (t !== 'Unidentified') return t
			}
			return e.type === 'keypress'
				? ((e = qr(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
				: e.type === 'keydown' || e.type === 'keyup'
				? pp[e.keyCode] || 'Unidentified'
				: ''
		},
		code: 0,
		location: 0,
		ctrlKey: 0,
		shiftKey: 0,
		altKey: 0,
		metaKey: 0,
		repeat: 0,
		locale: 0,
		getModifierState: es,
		charCode: function (e) {
			return e.type === 'keypress' ? qr(e) : 0
		},
		keyCode: function (e) {
			return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0
		},
		which: function (e) {
			return e.type === 'keypress' ? qr(e) : e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0
		},
	}),
	gp = Ne(vp),
	yp = K({}, Al, {
		pointerId: 0,
		width: 0,
		height: 0,
		pressure: 0,
		tangentialPressure: 0,
		tiltX: 0,
		tiltY: 0,
		twist: 0,
		pointerType: 0,
		isPrimary: 0,
	}),
	nu = Ne(yp),
	xp = K({}, xr, {
		touches: 0,
		targetTouches: 0,
		changedTouches: 0,
		altKey: 0,
		metaKey: 0,
		ctrlKey: 0,
		shiftKey: 0,
		getModifierState: es,
	}),
	wp = Ne(xp),
	Sp = K({}, En, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
	Ep = Ne(Sp),
	Cp = K({}, Al, {
		deltaX: function (e) {
			return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0
		},
		deltaY: function (e) {
			return 'deltaY' in e ? e.deltaY : 'wheelDeltaY' in e ? -e.wheelDeltaY : 'wheelDelta' in e ? -e.wheelDelta : 0
		},
		deltaZ: 0,
		deltaMode: 0,
	}),
	kp = Ne(Cp),
	Np = [9, 13, 27, 32],
	ts = Je && 'CompositionEvent' in window,
	Un = null
Je && 'documentMode' in document && (Un = document.documentMode)
var _p = Je && 'TextEvent' in window && !Un,
	ac = Je && (!ts || (Un && 8 < Un && 11 >= Un)),
	ru = String.fromCharCode(32),
	lu = !1
function cc(e, t) {
	switch (e) {
		case 'keyup':
			return Np.indexOf(t.keyCode) !== -1
		case 'keydown':
			return t.keyCode !== 229
		case 'keypress':
		case 'mousedown':
		case 'focusout':
			return !0
		default:
			return !1
	}
}
function dc(e) {
	return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null
}
var Gt = !1
function jp(e, t) {
	switch (e) {
		case 'compositionend':
			return dc(t)
		case 'keypress':
			return t.which !== 32 ? null : ((lu = !0), ru)
		case 'textInput':
			return (e = t.data), e === ru && lu ? null : e
		default:
			return null
	}
}
function $p(e, t) {
	if (Gt) return e === 'compositionend' || (!ts && cc(e, t)) ? ((e = uc()), (Jr = Ji = at = null), (Gt = !1), e) : null
	switch (e) {
		case 'paste':
			return null
		case 'keypress':
			if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
				if (t.char && 1 < t.char.length) return t.char
				if (t.which) return String.fromCharCode(t.which)
			}
			return null
		case 'compositionend':
			return ac && t.locale !== 'ko' ? null : t.data
		default:
			return null
	}
}
var Pp = {
	color: !0,
	date: !0,
	datetime: !0,
	'datetime-local': !0,
	email: !0,
	month: !0,
	number: !0,
	password: !0,
	range: !0,
	search: !0,
	tel: !0,
	text: !0,
	time: !0,
	url: !0,
	week: !0,
}
function ou(e) {
	var t = e && e.nodeName && e.nodeName.toLowerCase()
	return t === 'input' ? !!Pp[e.type] : t === 'textarea'
}
function fc(e, t, n, r) {
	ba(r),
		(t = gl(t, 'onChange')),
		0 < t.length && ((n = new qi('onChange', 'change', null, n, r)), e.push({ event: n, listeners: t }))
}
var Vn = null,
	qn = null
function Tp(e) {
	Cc(e, 0)
}
function zl(e) {
	var t = qt(e)
	if (Ma(t)) return e
}
function Rp(e, t) {
	if (e === 'change') return t
}
var pc = !1
if (Je) {
	var fo
	if (Je) {
		var po = 'oninput' in document
		if (!po) {
			var iu = document.createElement('div')
			iu.setAttribute('oninput', 'return;'), (po = typeof iu.oninput == 'function')
		}
		fo = po
	} else fo = !1
	pc = fo && (!document.documentMode || 9 < document.documentMode)
}
function su() {
	Vn && (Vn.detachEvent('onpropertychange', mc), (qn = Vn = null))
}
function mc(e) {
	if (e.propertyName === 'value' && zl(qn)) {
		var t = []
		fc(t, qn, e, Ki(e)), Ka(Tp, t)
	}
}
function Dp(e, t, n) {
	e === 'focusin' ? (su(), (Vn = t), (qn = n), Vn.attachEvent('onpropertychange', mc)) : e === 'focusout' && su()
}
function Lp(e) {
	if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return zl(qn)
}
function Op(e, t) {
	if (e === 'click') return zl(t)
}
function Fp(e, t) {
	if (e === 'input' || e === 'change') return zl(t)
}
function Mp(e, t) {
	return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t)
}
var ze = typeof Object.is == 'function' ? Object.is : Mp
function er(e, t) {
	if (ze(e, t)) return !0
	if (typeof e != 'object' || e === null || typeof t != 'object' || t === null) return !1
	var n = Object.keys(e),
		r = Object.keys(t)
	if (n.length !== r.length) return !1
	for (r = 0; r < n.length; r++) {
		var l = n[r]
		if (!Ao.call(t, l) || !ze(e[l], t[l])) return !1
	}
	return !0
}
function uu(e) {
	for (; e && e.firstChild; ) e = e.firstChild
	return e
}
function au(e, t) {
	var n = uu(e)
	e = 0
	for (var r; n; ) {
		if (n.nodeType === 3) {
			if (((r = e + n.textContent.length), e <= t && r >= t)) return { node: n, offset: t - e }
			e = r
		}
		e: {
			for (; n; ) {
				if (n.nextSibling) {
					n = n.nextSibling
					break e
				}
				n = n.parentNode
			}
			n = void 0
		}
		n = uu(n)
	}
}
function hc(e, t) {
	return e && t
		? e === t
			? !0
			: e && e.nodeType === 3
			? !1
			: t && t.nodeType === 3
			? hc(e, t.parentNode)
			: 'contains' in e
			? e.contains(t)
			: e.compareDocumentPosition
			? !!(e.compareDocumentPosition(t) & 16)
			: !1
		: !1
}
function vc() {
	for (var e = window, t = cl(); t instanceof e.HTMLIFrameElement; ) {
		try {
			var n = typeof t.contentWindow.location.href == 'string'
		} catch {
			n = !1
		}
		if (n) e = t.contentWindow
		else break
		t = cl(e.document)
	}
	return t
}
function ns(e) {
	var t = e && e.nodeName && e.nodeName.toLowerCase()
	return (
		t &&
		((t === 'input' &&
			(e.type === 'text' || e.type === 'search' || e.type === 'tel' || e.type === 'url' || e.type === 'password')) ||
			t === 'textarea' ||
			e.contentEditable === 'true')
	)
}
function Ip(e) {
	var t = vc(),
		n = e.focusedElem,
		r = e.selectionRange
	if (t !== n && n && n.ownerDocument && hc(n.ownerDocument.documentElement, n)) {
		if (r !== null && ns(n)) {
			if (((t = r.start), (e = r.end), e === void 0 && (e = t), 'selectionStart' in n))
				(n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length))
			else if (((e = ((t = n.ownerDocument || document) && t.defaultView) || window), e.getSelection)) {
				e = e.getSelection()
				var l = n.textContent.length,
					o = Math.min(r.start, l)
				;(r = r.end === void 0 ? o : Math.min(r.end, l)),
					!e.extend && o > r && ((l = r), (r = o), (o = l)),
					(l = au(n, o))
				var i = au(n, r)
				l &&
					i &&
					(e.rangeCount !== 1 ||
						e.anchorNode !== l.node ||
						e.anchorOffset !== l.offset ||
						e.focusNode !== i.node ||
						e.focusOffset !== i.offset) &&
					((t = t.createRange()),
					t.setStart(l.node, l.offset),
					e.removeAllRanges(),
					o > r ? (e.addRange(t), e.extend(i.node, i.offset)) : (t.setEnd(i.node, i.offset), e.addRange(t)))
			}
		}
		for (t = [], e = n; (e = e.parentNode); )
			e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop })
		for (typeof n.focus == 'function' && n.focus(), n = 0; n < t.length; n++)
			(e = t[n]), (e.element.scrollLeft = e.left), (e.element.scrollTop = e.top)
	}
}
var Ap = Je && 'documentMode' in document && 11 >= document.documentMode,
	Zt = null,
	ri = null,
	Bn = null,
	li = !1
function cu(e, t, n) {
	var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument
	li ||
		Zt == null ||
		Zt !== cl(r) ||
		((r = Zt),
		'selectionStart' in r && ns(r)
			? (r = { start: r.selectionStart, end: r.selectionEnd })
			: ((r = ((r.ownerDocument && r.ownerDocument.defaultView) || window).getSelection()),
			  (r = {
					anchorNode: r.anchorNode,
					anchorOffset: r.anchorOffset,
					focusNode: r.focusNode,
					focusOffset: r.focusOffset,
			  })),
		(Bn && er(Bn, r)) ||
			((Bn = r),
			(r = gl(ri, 'onSelect')),
			0 < r.length &&
				((t = new qi('onSelect', 'select', null, t, n)), e.push({ event: t, listeners: r }), (t.target = Zt))))
}
function Dr(e, t) {
	var n = {}
	return (n[e.toLowerCase()] = t.toLowerCase()), (n['Webkit' + e] = 'webkit' + t), (n['Moz' + e] = 'moz' + t), n
}
var Jt = {
		animationend: Dr('Animation', 'AnimationEnd'),
		animationiteration: Dr('Animation', 'AnimationIteration'),
		animationstart: Dr('Animation', 'AnimationStart'),
		transitionend: Dr('Transition', 'TransitionEnd'),
	},
	mo = {},
	gc = {}
Je &&
	((gc = document.createElement('div').style),
	'AnimationEvent' in window ||
		(delete Jt.animationend.animation, delete Jt.animationiteration.animation, delete Jt.animationstart.animation),
	'TransitionEvent' in window || delete Jt.transitionend.transition)
function Ul(e) {
	if (mo[e]) return mo[e]
	if (!Jt[e]) return e
	var t = Jt[e],
		n
	for (n in t) if (t.hasOwnProperty(n) && n in gc) return (mo[e] = t[n])
	return e
}
var yc = Ul('animationend'),
	xc = Ul('animationiteration'),
	wc = Ul('animationstart'),
	Sc = Ul('transitionend'),
	Ec = new Map(),
	du =
		'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
			' '
		)
function St(e, t) {
	Ec.set(e, t), Bt(t, [e])
}
for (var ho = 0; ho < du.length; ho++) {
	var vo = du[ho],
		zp = vo.toLowerCase(),
		Up = vo[0].toUpperCase() + vo.slice(1)
	St(zp, 'on' + Up)
}
St(yc, 'onAnimationEnd')
St(xc, 'onAnimationIteration')
St(wc, 'onAnimationStart')
St('dblclick', 'onDoubleClick')
St('focusin', 'onFocus')
St('focusout', 'onBlur')
St(Sc, 'onTransitionEnd')
mn('onMouseEnter', ['mouseout', 'mouseover'])
mn('onMouseLeave', ['mouseout', 'mouseover'])
mn('onPointerEnter', ['pointerout', 'pointerover'])
mn('onPointerLeave', ['pointerout', 'pointerover'])
Bt('onChange', 'change click focusin focusout input keydown keyup selectionchange'.split(' '))
Bt('onSelect', 'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(' '))
Bt('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste'])
Bt('onCompositionEnd', 'compositionend focusout keydown keypress keyup mousedown'.split(' '))
Bt('onCompositionStart', 'compositionstart focusout keydown keypress keyup mousedown'.split(' '))
Bt('onCompositionUpdate', 'compositionupdate focusout keydown keypress keyup mousedown'.split(' '))
var In =
		'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
			' '
		),
	Vp = new Set('cancel close invalid load scroll toggle'.split(' ').concat(In))
function fu(e, t, n) {
	var r = e.type || 'unknown-event'
	;(e.currentTarget = n), zf(r, t, void 0, e), (e.currentTarget = null)
}
function Cc(e, t) {
	t = (t & 4) !== 0
	for (var n = 0; n < e.length; n++) {
		var r = e[n],
			l = r.event
		r = r.listeners
		e: {
			var o = void 0
			if (t)
				for (var i = r.length - 1; 0 <= i; i--) {
					var s = r[i],
						a = s.instance,
						d = s.currentTarget
					if (((s = s.listener), a !== o && l.isPropagationStopped())) break e
					fu(l, s, d), (o = a)
				}
			else
				for (i = 0; i < r.length; i++) {
					if (
						((s = r[i]), (a = s.instance), (d = s.currentTarget), (s = s.listener), a !== o && l.isPropagationStopped())
					)
						break e
					fu(l, s, d), (o = a)
				}
		}
	}
	if (fl) throw ((e = qo), (fl = !1), (qo = null), e)
}
function V(e, t) {
	var n = t[ai]
	n === void 0 && (n = t[ai] = new Set())
	var r = e + '__bubble'
	n.has(r) || (kc(t, e, 2, !1), n.add(r))
}
function go(e, t, n) {
	var r = 0
	t && (r |= 4), kc(n, e, r, t)
}
var Lr = '_reactListening' + Math.random().toString(36).slice(2)
function tr(e) {
	if (!e[Lr]) {
		;(e[Lr] = !0),
			Ra.forEach(function (n) {
				n !== 'selectionchange' && (Vp.has(n) || go(n, !1, e), go(n, !0, e))
			})
		var t = e.nodeType === 9 ? e : e.ownerDocument
		t === null || t[Lr] || ((t[Lr] = !0), go('selectionchange', !1, t))
	}
}
function kc(e, t, n, r) {
	switch (sc(t)) {
		case 1:
			var l = tp
			break
		case 4:
			l = np
			break
		default:
			l = Zi
	}
	;(n = l.bind(null, t, n, e)),
		(l = void 0),
		!Jo || (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') || (l = !0),
		r
			? l !== void 0
				? e.addEventListener(t, n, { capture: !0, passive: l })
				: e.addEventListener(t, n, !0)
			: l !== void 0
			? e.addEventListener(t, n, { passive: l })
			: e.addEventListener(t, n, !1)
}
function yo(e, t, n, r, l) {
	var o = r
	if (!(t & 1) && !(t & 2) && r !== null)
		e: for (;;) {
			if (r === null) return
			var i = r.tag
			if (i === 3 || i === 4) {
				var s = r.stateNode.containerInfo
				if (s === l || (s.nodeType === 8 && s.parentNode === l)) break
				if (i === 4)
					for (i = r.return; i !== null; ) {
						var a = i.tag
						if (
							(a === 3 || a === 4) &&
							((a = i.stateNode.containerInfo), a === l || (a.nodeType === 8 && a.parentNode === l))
						)
							return
						i = i.return
					}
				for (; s !== null; ) {
					if (((i = Tt(s)), i === null)) return
					if (((a = i.tag), a === 5 || a === 6)) {
						r = o = i
						continue e
					}
					s = s.parentNode
				}
			}
			r = r.return
		}
	Ka(function () {
		var d = o,
			v = Ki(n),
			h = []
		e: {
			var g = Ec.get(e)
			if (g !== void 0) {
				var x = qi,
					S = e
				switch (e) {
					case 'keypress':
						if (qr(n) === 0) break e
					case 'keydown':
					case 'keyup':
						x = gp
						break
					case 'focusin':
						;(S = 'focus'), (x = co)
						break
					case 'focusout':
						;(S = 'blur'), (x = co)
						break
					case 'beforeblur':
					case 'afterblur':
						x = co
						break
					case 'click':
						if (n.button === 2) break e
					case 'auxclick':
					case 'dblclick':
					case 'mousedown':
					case 'mousemove':
					case 'mouseup':
					case 'mouseout':
					case 'mouseover':
					case 'contextmenu':
						x = eu
						break
					case 'drag':
					case 'dragend':
					case 'dragenter':
					case 'dragexit':
					case 'dragleave':
					case 'dragover':
					case 'dragstart':
					case 'drop':
						x = op
						break
					case 'touchcancel':
					case 'touchend':
					case 'touchmove':
					case 'touchstart':
						x = wp
						break
					case yc:
					case xc:
					case wc:
						x = up
						break
					case Sc:
						x = Ep
						break
					case 'scroll':
						x = rp
						break
					case 'wheel':
						x = kp
						break
					case 'copy':
					case 'cut':
					case 'paste':
						x = cp
						break
					case 'gotpointercapture':
					case 'lostpointercapture':
					case 'pointercancel':
					case 'pointerdown':
					case 'pointermove':
					case 'pointerout':
					case 'pointerover':
					case 'pointerup':
						x = nu
				}
				var y = (t & 4) !== 0,
					C = !y && e === 'scroll',
					f = y ? (g !== null ? g + 'Capture' : null) : g
				y = []
				for (var c = d, m; c !== null; ) {
					m = c
					var w = m.stateNode
					if (
						(m.tag === 5 && w !== null && ((m = w), f !== null && ((w = Xn(c, f)), w != null && y.push(nr(c, w, m)))),
						C)
					)
						break
					c = c.return
				}
				0 < y.length && ((g = new x(g, S, null, n, v)), h.push({ event: g, listeners: y }))
			}
		}
		if (!(t & 7)) {
			e: {
				if (
					((g = e === 'mouseover' || e === 'pointerover'),
					(x = e === 'mouseout' || e === 'pointerout'),
					g && n !== Go && (S = n.relatedTarget || n.fromElement) && (Tt(S) || S[qe]))
				)
					break e
				if (
					(x || g) &&
					((g = v.window === v ? v : (g = v.ownerDocument) ? g.defaultView || g.parentWindow : window),
					x
						? ((S = n.relatedTarget || n.toElement),
						  (x = d),
						  (S = S ? Tt(S) : null),
						  S !== null && ((C = bt(S)), S !== C || (S.tag !== 5 && S.tag !== 6)) && (S = null))
						: ((x = null), (S = d)),
					x !== S)
				) {
					if (
						((y = eu),
						(w = 'onMouseLeave'),
						(f = 'onMouseEnter'),
						(c = 'mouse'),
						(e === 'pointerout' || e === 'pointerover') &&
							((y = nu), (w = 'onPointerLeave'), (f = 'onPointerEnter'), (c = 'pointer')),
						(C = x == null ? g : qt(x)),
						(m = S == null ? g : qt(S)),
						(g = new y(w, c + 'leave', x, n, v)),
						(g.target = C),
						(g.relatedTarget = m),
						(w = null),
						Tt(v) === d && ((y = new y(f, c + 'enter', S, n, v)), (y.target = m), (y.relatedTarget = C), (w = y)),
						(C = w),
						x && S)
					)
						t: {
							for (y = x, f = S, c = 0, m = y; m; m = Wt(m)) c++
							for (m = 0, w = f; w; w = Wt(w)) m++
							for (; 0 < c - m; ) (y = Wt(y)), c--
							for (; 0 < m - c; ) (f = Wt(f)), m--
							for (; c--; ) {
								if (y === f || (f !== null && y === f.alternate)) break t
								;(y = Wt(y)), (f = Wt(f))
							}
							y = null
						}
					else y = null
					x !== null && pu(h, g, x, y, !1), S !== null && C !== null && pu(h, C, S, y, !0)
				}
			}
			e: {
				if (
					((g = d ? qt(d) : window),
					(x = g.nodeName && g.nodeName.toLowerCase()),
					x === 'select' || (x === 'input' && g.type === 'file'))
				)
					var E = Rp
				else if (ou(g))
					if (pc) E = Fp
					else {
						E = Lp
						var j = Dp
					}
				else
					(x = g.nodeName) && x.toLowerCase() === 'input' && (g.type === 'checkbox' || g.type === 'radio') && (E = Op)
				if (E && (E = E(e, d))) {
					fc(h, E, n, v)
					break e
				}
				j && j(e, g, d),
					e === 'focusout' && (j = g._wrapperState) && j.controlled && g.type === 'number' && Ho(g, 'number', g.value)
			}
			switch (((j = d ? qt(d) : window), e)) {
				case 'focusin':
					;(ou(j) || j.contentEditable === 'true') && ((Zt = j), (ri = d), (Bn = null))
					break
				case 'focusout':
					Bn = ri = Zt = null
					break
				case 'mousedown':
					li = !0
					break
				case 'contextmenu':
				case 'mouseup':
				case 'dragend':
					;(li = !1), cu(h, n, v)
					break
				case 'selectionchange':
					if (Ap) break
				case 'keydown':
				case 'keyup':
					cu(h, n, v)
			}
			var _
			if (ts)
				e: {
					switch (e) {
						case 'compositionstart':
							var N = 'onCompositionStart'
							break e
						case 'compositionend':
							N = 'onCompositionEnd'
							break e
						case 'compositionupdate':
							N = 'onCompositionUpdate'
							break e
					}
					N = void 0
				}
			else
				Gt ? cc(e, n) && (N = 'onCompositionEnd') : e === 'keydown' && n.keyCode === 229 && (N = 'onCompositionStart')
			N &&
				(ac &&
					n.locale !== 'ko' &&
					(Gt || N !== 'onCompositionStart'
						? N === 'onCompositionEnd' && Gt && (_ = uc())
						: ((at = v), (Ji = 'value' in at ? at.value : at.textContent), (Gt = !0))),
				(j = gl(d, N)),
				0 < j.length &&
					((N = new tu(N, e, null, n, v)),
					h.push({ event: N, listeners: j }),
					_ ? (N.data = _) : ((_ = dc(n)), _ !== null && (N.data = _)))),
				(_ = _p ? jp(e, n) : $p(e, n)) &&
					((d = gl(d, 'onBeforeInput')),
					0 < d.length &&
						((v = new tu('onBeforeInput', 'beforeinput', null, n, v)),
						h.push({ event: v, listeners: d }),
						(v.data = _)))
		}
		Cc(h, t)
	})
}
function nr(e, t, n) {
	return { instance: e, listener: t, currentTarget: n }
}
function gl(e, t) {
	for (var n = t + 'Capture', r = []; e !== null; ) {
		var l = e,
			o = l.stateNode
		l.tag === 5 &&
			o !== null &&
			((l = o), (o = Xn(e, n)), o != null && r.unshift(nr(e, o, l)), (o = Xn(e, t)), o != null && r.push(nr(e, o, l))),
			(e = e.return)
	}
	return r
}
function Wt(e) {
	if (e === null) return null
	do e = e.return
	while (e && e.tag !== 5)
	return e || null
}
function pu(e, t, n, r, l) {
	for (var o = t._reactName, i = []; n !== null && n !== r; ) {
		var s = n,
			a = s.alternate,
			d = s.stateNode
		if (a !== null && a === r) break
		s.tag === 5 &&
			d !== null &&
			((s = d),
			l
				? ((a = Xn(n, o)), a != null && i.unshift(nr(n, a, s)))
				: l || ((a = Xn(n, o)), a != null && i.push(nr(n, a, s)))),
			(n = n.return)
	}
	i.length !== 0 && e.push({ event: t, listeners: i })
}
var Bp = /\r\n?/g,
	bp = /\u0000|\uFFFD/g
function mu(e) {
	return (typeof e == 'string' ? e : '' + e)
		.replace(
			Bp,
			`
`
		)
		.replace(bp, '')
}
function Or(e, t, n) {
	if (((t = mu(t)), mu(e) !== t && n)) throw Error(k(425))
}
function yl() {}
var oi = null,
	ii = null
function si(e, t) {
	return (
		e === 'textarea' ||
		e === 'noscript' ||
		typeof t.children == 'string' ||
		typeof t.children == 'number' ||
		(typeof t.dangerouslySetInnerHTML == 'object' &&
			t.dangerouslySetInnerHTML !== null &&
			t.dangerouslySetInnerHTML.__html != null)
	)
}
var ui = typeof setTimeout == 'function' ? setTimeout : void 0,
	Wp = typeof clearTimeout == 'function' ? clearTimeout : void 0,
	hu = typeof Promise == 'function' ? Promise : void 0,
	Hp =
		typeof queueMicrotask == 'function'
			? queueMicrotask
			: typeof hu < 'u'
			? function (e) {
					return hu.resolve(null).then(e).catch(Qp)
			  }
			: ui
function Qp(e) {
	setTimeout(function () {
		throw e
	})
}
function xo(e, t) {
	var n = t,
		r = 0
	do {
		var l = n.nextSibling
		if ((e.removeChild(n), l && l.nodeType === 8))
			if (((n = l.data), n === '/$')) {
				if (r === 0) {
					e.removeChild(l), Jn(t)
					return
				}
				r--
			} else (n !== '$' && n !== '$?' && n !== '$!') || r++
		n = l
	} while (n)
	Jn(t)
}
function mt(e) {
	for (; e != null; e = e.nextSibling) {
		var t = e.nodeType
		if (t === 1 || t === 3) break
		if (t === 8) {
			if (((t = e.data), t === '$' || t === '$!' || t === '$?')) break
			if (t === '/$') return null
		}
	}
	return e
}
function vu(e) {
	e = e.previousSibling
	for (var t = 0; e; ) {
		if (e.nodeType === 8) {
			var n = e.data
			if (n === '$' || n === '$!' || n === '$?') {
				if (t === 0) return e
				t--
			} else n === '/$' && t++
		}
		e = e.previousSibling
	}
	return null
}
var Cn = Math.random().toString(36).slice(2),
	Be = '__reactFiber$' + Cn,
	rr = '__reactProps$' + Cn,
	qe = '__reactContainer$' + Cn,
	ai = '__reactEvents$' + Cn,
	Kp = '__reactListeners$' + Cn,
	Yp = '__reactHandles$' + Cn
function Tt(e) {
	var t = e[Be]
	if (t) return t
	for (var n = e.parentNode; n; ) {
		if ((t = n[qe] || n[Be])) {
			if (((n = t.alternate), t.child !== null || (n !== null && n.child !== null)))
				for (e = vu(e); e !== null; ) {
					if ((n = e[Be])) return n
					e = vu(e)
				}
			return t
		}
		;(e = n), (n = e.parentNode)
	}
	return null
}
function wr(e) {
	return (e = e[Be] || e[qe]), !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
}
function qt(e) {
	if (e.tag === 5 || e.tag === 6) return e.stateNode
	throw Error(k(33))
}
function Vl(e) {
	return e[rr] || null
}
var ci = [],
	en = -1
function Et(e) {
	return { current: e }
}
function B(e) {
	0 > en || ((e.current = ci[en]), (ci[en] = null), en--)
}
function U(e, t) {
	en++, (ci[en] = e.current), (e.current = t)
}
var wt = {},
	ae = Et(wt),
	ve = Et(!1),
	Mt = wt
function hn(e, t) {
	var n = e.type.contextTypes
	if (!n) return wt
	var r = e.stateNode
	if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext
	var l = {},
		o
	for (o in n) l[o] = t[o]
	return (
		r &&
			((e = e.stateNode),
			(e.__reactInternalMemoizedUnmaskedChildContext = t),
			(e.__reactInternalMemoizedMaskedChildContext = l)),
		l
	)
}
function ge(e) {
	return (e = e.childContextTypes), e != null
}
function xl() {
	B(ve), B(ae)
}
function gu(e, t, n) {
	if (ae.current !== wt) throw Error(k(168))
	U(ae, t), U(ve, n)
}
function Nc(e, t, n) {
	var r = e.stateNode
	if (((t = t.childContextTypes), typeof r.getChildContext != 'function')) return n
	r = r.getChildContext()
	for (var l in r) if (!(l in t)) throw Error(k(108, Df(e) || 'Unknown', l))
	return K({}, n, r)
}
function wl(e) {
	return (
		(e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || wt),
		(Mt = ae.current),
		U(ae, e),
		U(ve, ve.current),
		!0
	)
}
function yu(e, t, n) {
	var r = e.stateNode
	if (!r) throw Error(k(169))
	n ? ((e = Nc(e, t, Mt)), (r.__reactInternalMemoizedMergedChildContext = e), B(ve), B(ae), U(ae, e)) : B(ve), U(ve, n)
}
var Ye = null,
	Bl = !1,
	wo = !1
function _c(e) {
	Ye === null ? (Ye = [e]) : Ye.push(e)
}
function Xp(e) {
	;(Bl = !0), _c(e)
}
function Ct() {
	if (!wo && Ye !== null) {
		wo = !0
		var e = 0,
			t = z
		try {
			var n = Ye
			for (z = 1; e < n.length; e++) {
				var r = n[e]
				do r = r(!0)
				while (r !== null)
			}
			;(Ye = null), (Bl = !1)
		} catch (l) {
			throw (Ye !== null && (Ye = Ye.slice(e + 1)), Za(Yi, Ct), l)
		} finally {
			;(z = t), (wo = !1)
		}
	}
	return null
}
var tn = [],
	nn = 0,
	Sl = null,
	El = 0,
	_e = [],
	je = 0,
	It = null,
	Xe = 1,
	Ge = ''
function $t(e, t) {
	;(tn[nn++] = El), (tn[nn++] = Sl), (Sl = e), (El = t)
}
function jc(e, t, n) {
	;(_e[je++] = Xe), (_e[je++] = Ge), (_e[je++] = It), (It = e)
	var r = Xe
	e = Ge
	var l = 32 - Ie(r) - 1
	;(r &= ~(1 << l)), (n += 1)
	var o = 32 - Ie(t) + l
	if (30 < o) {
		var i = l - (l % 5)
		;(o = (r & ((1 << i) - 1)).toString(32)),
			(r >>= i),
			(l -= i),
			(Xe = (1 << (32 - Ie(t) + l)) | (n << l) | r),
			(Ge = o + e)
	} else (Xe = (1 << o) | (n << l) | r), (Ge = e)
}
function rs(e) {
	e.return !== null && ($t(e, 1), jc(e, 1, 0))
}
function ls(e) {
	for (; e === Sl; ) (Sl = tn[--nn]), (tn[nn] = null), (El = tn[--nn]), (tn[nn] = null)
	for (; e === It; )
		(It = _e[--je]), (_e[je] = null), (Ge = _e[--je]), (_e[je] = null), (Xe = _e[--je]), (_e[je] = null)
}
var Se = null,
	we = null,
	b = !1,
	Me = null
function $c(e, t) {
	var n = $e(5, null, null, 0)
	;(n.elementType = 'DELETED'),
		(n.stateNode = t),
		(n.return = e),
		(t = e.deletions),
		t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n)
}
function xu(e, t) {
	switch (e.tag) {
		case 5:
			var n = e.type
			return (
				(t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t),
				t !== null ? ((e.stateNode = t), (Se = e), (we = mt(t.firstChild)), !0) : !1
			)
		case 6:
			return (
				(t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
				t !== null ? ((e.stateNode = t), (Se = e), (we = null), !0) : !1
			)
		case 13:
			return (
				(t = t.nodeType !== 8 ? null : t),
				t !== null
					? ((n = It !== null ? { id: Xe, overflow: Ge } : null),
					  (e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }),
					  (n = $e(18, null, null, 0)),
					  (n.stateNode = t),
					  (n.return = e),
					  (e.child = n),
					  (Se = e),
					  (we = null),
					  !0)
					: !1
			)
		default:
			return !1
	}
}
function di(e) {
	return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function fi(e) {
	if (b) {
		var t = we
		if (t) {
			var n = t
			if (!xu(e, t)) {
				if (di(e)) throw Error(k(418))
				t = mt(n.nextSibling)
				var r = Se
				t && xu(e, t) ? $c(r, n) : ((e.flags = (e.flags & -4097) | 2), (b = !1), (Se = e))
			}
		} else {
			if (di(e)) throw Error(k(418))
			;(e.flags = (e.flags & -4097) | 2), (b = !1), (Se = e)
		}
	}
}
function wu(e) {
	for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return
	Se = e
}
function Fr(e) {
	if (e !== Se) return !1
	if (!b) return wu(e), (b = !0), !1
	var t
	if (
		((t = e.tag !== 3) &&
			!(t = e.tag !== 5) &&
			((t = e.type), (t = t !== 'head' && t !== 'body' && !si(e.type, e.memoizedProps))),
		t && (t = we))
	) {
		if (di(e)) throw (Pc(), Error(k(418)))
		for (; t; ) $c(e, t), (t = mt(t.nextSibling))
	}
	if ((wu(e), e.tag === 13)) {
		if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(k(317))
		e: {
			for (e = e.nextSibling, t = 0; e; ) {
				if (e.nodeType === 8) {
					var n = e.data
					if (n === '/$') {
						if (t === 0) {
							we = mt(e.nextSibling)
							break e
						}
						t--
					} else (n !== '$' && n !== '$!' && n !== '$?') || t++
				}
				e = e.nextSibling
			}
			we = null
		}
	} else we = Se ? mt(e.stateNode.nextSibling) : null
	return !0
}
function Pc() {
	for (var e = we; e; ) e = mt(e.nextSibling)
}
function vn() {
	;(we = Se = null), (b = !1)
}
function os(e) {
	Me === null ? (Me = [e]) : Me.push(e)
}
var Gp = nt.ReactCurrentBatchConfig
function Oe(e, t) {
	if (e && e.defaultProps) {
		;(t = K({}, t)), (e = e.defaultProps)
		for (var n in e) t[n] === void 0 && (t[n] = e[n])
		return t
	}
	return t
}
var Cl = Et(null),
	kl = null,
	rn = null,
	is = null
function ss() {
	is = rn = kl = null
}
function us(e) {
	var t = Cl.current
	B(Cl), (e._currentValue = t)
}
function pi(e, t, n) {
	for (; e !== null; ) {
		var r = e.alternate
		if (
			((e.childLanes & t) !== t
				? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
				: r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
			e === n)
		)
			break
		e = e.return
	}
}
function fn(e, t) {
	;(kl = e),
		(is = rn = null),
		(e = e.dependencies),
		e !== null && e.firstContext !== null && (e.lanes & t && (he = !0), (e.firstContext = null))
}
function Te(e) {
	var t = e._currentValue
	if (is !== e)
		if (((e = { context: e, memoizedValue: t, next: null }), rn === null)) {
			if (kl === null) throw Error(k(308))
			;(rn = e), (kl.dependencies = { lanes: 0, firstContext: e })
		} else rn = rn.next = e
	return t
}
var Rt = null
function as(e) {
	Rt === null ? (Rt = [e]) : Rt.push(e)
}
function Tc(e, t, n, r) {
	var l = t.interleaved
	return l === null ? ((n.next = n), as(t)) : ((n.next = l.next), (l.next = n)), (t.interleaved = n), et(e, r)
}
function et(e, t) {
	e.lanes |= t
	var n = e.alternate
	for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
		(e.childLanes |= t), (n = e.alternate), n !== null && (n.childLanes |= t), (n = e), (e = e.return)
	return n.tag === 3 ? n.stateNode : null
}
var it = !1
function cs(e) {
	e.updateQueue = {
		baseState: e.memoizedState,
		firstBaseUpdate: null,
		lastBaseUpdate: null,
		shared: { pending: null, interleaved: null, lanes: 0 },
		effects: null,
	}
}
function Rc(e, t) {
	;(e = e.updateQueue),
		t.updateQueue === e &&
			(t.updateQueue = {
				baseState: e.baseState,
				firstBaseUpdate: e.firstBaseUpdate,
				lastBaseUpdate: e.lastBaseUpdate,
				shared: e.shared,
				effects: e.effects,
			})
}
function Ze(e, t) {
	return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null }
}
function ht(e, t, n) {
	var r = e.updateQueue
	if (r === null) return null
	if (((r = r.shared), I & 2)) {
		var l = r.pending
		return l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)), (r.pending = t), et(e, n)
	}
	return (
		(l = r.interleaved),
		l === null ? ((t.next = t), as(r)) : ((t.next = l.next), (l.next = t)),
		(r.interleaved = t),
		et(e, n)
	)
}
function el(e, t, n) {
	if (((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))) {
		var r = t.lanes
		;(r &= e.pendingLanes), (n |= r), (t.lanes = n), Xi(e, n)
	}
}
function Su(e, t) {
	var n = e.updateQueue,
		r = e.alternate
	if (r !== null && ((r = r.updateQueue), n === r)) {
		var l = null,
			o = null
		if (((n = n.firstBaseUpdate), n !== null)) {
			do {
				var i = {
					eventTime: n.eventTime,
					lane: n.lane,
					tag: n.tag,
					payload: n.payload,
					callback: n.callback,
					next: null,
				}
				o === null ? (l = o = i) : (o = o.next = i), (n = n.next)
			} while (n !== null)
			o === null ? (l = o = t) : (o = o.next = t)
		} else l = o = t
		;(n = { baseState: r.baseState, firstBaseUpdate: l, lastBaseUpdate: o, shared: r.shared, effects: r.effects }),
			(e.updateQueue = n)
		return
	}
	;(e = n.lastBaseUpdate), e === null ? (n.firstBaseUpdate = t) : (e.next = t), (n.lastBaseUpdate = t)
}
function Nl(e, t, n, r) {
	var l = e.updateQueue
	it = !1
	var o = l.firstBaseUpdate,
		i = l.lastBaseUpdate,
		s = l.shared.pending
	if (s !== null) {
		l.shared.pending = null
		var a = s,
			d = a.next
		;(a.next = null), i === null ? (o = d) : (i.next = d), (i = a)
		var v = e.alternate
		v !== null &&
			((v = v.updateQueue),
			(s = v.lastBaseUpdate),
			s !== i && (s === null ? (v.firstBaseUpdate = d) : (s.next = d), (v.lastBaseUpdate = a)))
	}
	if (o !== null) {
		var h = l.baseState
		;(i = 0), (v = d = a = null), (s = o)
		do {
			var g = s.lane,
				x = s.eventTime
			if ((r & g) === g) {
				v !== null &&
					(v = v.next = { eventTime: x, lane: 0, tag: s.tag, payload: s.payload, callback: s.callback, next: null })
				e: {
					var S = e,
						y = s
					switch (((g = t), (x = n), y.tag)) {
						case 1:
							if (((S = y.payload), typeof S == 'function')) {
								h = S.call(x, h, g)
								break e
							}
							h = S
							break e
						case 3:
							S.flags = (S.flags & -65537) | 128
						case 0:
							if (((S = y.payload), (g = typeof S == 'function' ? S.call(x, h, g) : S), g == null)) break e
							h = K({}, h, g)
							break e
						case 2:
							it = !0
					}
				}
				s.callback !== null &&
					s.lane !== 0 &&
					((e.flags |= 64), (g = l.effects), g === null ? (l.effects = [s]) : g.push(s))
			} else
				(x = { eventTime: x, lane: g, tag: s.tag, payload: s.payload, callback: s.callback, next: null }),
					v === null ? ((d = v = x), (a = h)) : (v = v.next = x),
					(i |= g)
			if (((s = s.next), s === null)) {
				if (((s = l.shared.pending), s === null)) break
				;(g = s), (s = g.next), (g.next = null), (l.lastBaseUpdate = g), (l.shared.pending = null)
			}
		} while (1)
		if (
			(v === null && (a = h),
			(l.baseState = a),
			(l.firstBaseUpdate = d),
			(l.lastBaseUpdate = v),
			(t = l.shared.interleaved),
			t !== null)
		) {
			l = t
			do (i |= l.lane), (l = l.next)
			while (l !== t)
		} else o === null && (l.shared.lanes = 0)
		;(zt |= i), (e.lanes = i), (e.memoizedState = h)
	}
}
function Eu(e, t, n) {
	if (((e = t.effects), (t.effects = null), e !== null))
		for (t = 0; t < e.length; t++) {
			var r = e[t],
				l = r.callback
			if (l !== null) {
				if (((r.callback = null), (r = n), typeof l != 'function')) throw Error(k(191, l))
				l.call(r)
			}
		}
}
var Dc = new Ta.Component().refs
function mi(e, t, n, r) {
	;(t = e.memoizedState),
		(n = n(r, t)),
		(n = n == null ? t : K({}, t, n)),
		(e.memoizedState = n),
		e.lanes === 0 && (e.updateQueue.baseState = n)
}
var bl = {
	isMounted: function (e) {
		return (e = e._reactInternals) ? bt(e) === e : !1
	},
	enqueueSetState: function (e, t, n) {
		e = e._reactInternals
		var r = de(),
			l = gt(e),
			o = Ze(r, l)
		;(o.payload = t), n != null && (o.callback = n), (t = ht(e, o, l)), t !== null && (Ae(t, e, l, r), el(t, e, l))
	},
	enqueueReplaceState: function (e, t, n) {
		e = e._reactInternals
		var r = de(),
			l = gt(e),
			o = Ze(r, l)
		;(o.tag = 1),
			(o.payload = t),
			n != null && (o.callback = n),
			(t = ht(e, o, l)),
			t !== null && (Ae(t, e, l, r), el(t, e, l))
	},
	enqueueForceUpdate: function (e, t) {
		e = e._reactInternals
		var n = de(),
			r = gt(e),
			l = Ze(n, r)
		;(l.tag = 2), t != null && (l.callback = t), (t = ht(e, l, r)), t !== null && (Ae(t, e, r, n), el(t, e, r))
	},
}
function Cu(e, t, n, r, l, o, i) {
	return (
		(e = e.stateNode),
		typeof e.shouldComponentUpdate == 'function'
			? e.shouldComponentUpdate(r, o, i)
			: t.prototype && t.prototype.isPureReactComponent
			? !er(n, r) || !er(l, o)
			: !0
	)
}
function Lc(e, t, n) {
	var r = !1,
		l = wt,
		o = t.contextType
	return (
		typeof o == 'object' && o !== null
			? (o = Te(o))
			: ((l = ge(t) ? Mt : ae.current), (r = t.contextTypes), (o = (r = r != null) ? hn(e, l) : wt)),
		(t = new t(n, o)),
		(e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
		(t.updater = bl),
		(e.stateNode = t),
		(t._reactInternals = e),
		r &&
			((e = e.stateNode),
			(e.__reactInternalMemoizedUnmaskedChildContext = l),
			(e.__reactInternalMemoizedMaskedChildContext = o)),
		t
	)
}
function ku(e, t, n, r) {
	;(e = t.state),
		typeof t.componentWillReceiveProps == 'function' && t.componentWillReceiveProps(n, r),
		typeof t.UNSAFE_componentWillReceiveProps == 'function' && t.UNSAFE_componentWillReceiveProps(n, r),
		t.state !== e && bl.enqueueReplaceState(t, t.state, null)
}
function hi(e, t, n, r) {
	var l = e.stateNode
	;(l.props = n), (l.state = e.memoizedState), (l.refs = Dc), cs(e)
	var o = t.contextType
	typeof o == 'object' && o !== null ? (l.context = Te(o)) : ((o = ge(t) ? Mt : ae.current), (l.context = hn(e, o))),
		(l.state = e.memoizedState),
		(o = t.getDerivedStateFromProps),
		typeof o == 'function' && (mi(e, t, o, n), (l.state = e.memoizedState)),
		typeof t.getDerivedStateFromProps == 'function' ||
			typeof l.getSnapshotBeforeUpdate == 'function' ||
			(typeof l.UNSAFE_componentWillMount != 'function' && typeof l.componentWillMount != 'function') ||
			((t = l.state),
			typeof l.componentWillMount == 'function' && l.componentWillMount(),
			typeof l.UNSAFE_componentWillMount == 'function' && l.UNSAFE_componentWillMount(),
			t !== l.state && bl.enqueueReplaceState(l, l.state, null),
			Nl(e, n, l, r),
			(l.state = e.memoizedState)),
		typeof l.componentDidMount == 'function' && (e.flags |= 4194308)
}
function Rn(e, t, n) {
	if (((e = n.ref), e !== null && typeof e != 'function' && typeof e != 'object')) {
		if (n._owner) {
			if (((n = n._owner), n)) {
				if (n.tag !== 1) throw Error(k(309))
				var r = n.stateNode
			}
			if (!r) throw Error(k(147, e))
			var l = r,
				o = '' + e
			return t !== null && t.ref !== null && typeof t.ref == 'function' && t.ref._stringRef === o
				? t.ref
				: ((t = function (i) {
						var s = l.refs
						s === Dc && (s = l.refs = {}), i === null ? delete s[o] : (s[o] = i)
				  }),
				  (t._stringRef = o),
				  t)
		}
		if (typeof e != 'string') throw Error(k(284))
		if (!n._owner) throw Error(k(290, e))
	}
	return e
}
function Mr(e, t) {
	throw (
		((e = Object.prototype.toString.call(t)),
		Error(k(31, e === '[object Object]' ? 'object with keys {' + Object.keys(t).join(', ') + '}' : e)))
	)
}
function Nu(e) {
	var t = e._init
	return t(e._payload)
}
function Oc(e) {
	function t(f, c) {
		if (e) {
			var m = f.deletions
			m === null ? ((f.deletions = [c]), (f.flags |= 16)) : m.push(c)
		}
	}
	function n(f, c) {
		if (!e) return null
		for (; c !== null; ) t(f, c), (c = c.sibling)
		return null
	}
	function r(f, c) {
		for (f = new Map(); c !== null; ) c.key !== null ? f.set(c.key, c) : f.set(c.index, c), (c = c.sibling)
		return f
	}
	function l(f, c) {
		return (f = yt(f, c)), (f.index = 0), (f.sibling = null), f
	}
	function o(f, c, m) {
		return (
			(f.index = m),
			e
				? ((m = f.alternate), m !== null ? ((m = m.index), m < c ? ((f.flags |= 2), c) : m) : ((f.flags |= 2), c))
				: ((f.flags |= 1048576), c)
		)
	}
	function i(f) {
		return e && f.alternate === null && (f.flags |= 2), f
	}
	function s(f, c, m, w) {
		return c === null || c.tag !== 6 ? ((c = jo(m, f.mode, w)), (c.return = f), c) : ((c = l(c, m)), (c.return = f), c)
	}
	function a(f, c, m, w) {
		var E = m.type
		return E === Xt
			? v(f, c, m.props.children, w, m.key)
			: c !== null &&
			  (c.elementType === E || (typeof E == 'object' && E !== null && E.$$typeof === ot && Nu(E) === c.type))
			? ((w = l(c, m.props)), (w.ref = Rn(f, c, m)), (w.return = f), w)
			: ((w = il(m.type, m.key, m.props, null, f.mode, w)), (w.ref = Rn(f, c, m)), (w.return = f), w)
	}
	function d(f, c, m, w) {
		return c === null ||
			c.tag !== 4 ||
			c.stateNode.containerInfo !== m.containerInfo ||
			c.stateNode.implementation !== m.implementation
			? ((c = $o(m, f.mode, w)), (c.return = f), c)
			: ((c = l(c, m.children || [])), (c.return = f), c)
	}
	function v(f, c, m, w, E) {
		return c === null || c.tag !== 7
			? ((c = Ft(m, f.mode, w, E)), (c.return = f), c)
			: ((c = l(c, m)), (c.return = f), c)
	}
	function h(f, c, m) {
		if ((typeof c == 'string' && c !== '') || typeof c == 'number')
			return (c = jo('' + c, f.mode, m)), (c.return = f), c
		if (typeof c == 'object' && c !== null) {
			switch (c.$$typeof) {
				case Nr:
					return (m = il(c.type, c.key, c.props, null, f.mode, m)), (m.ref = Rn(f, null, c)), (m.return = f), m
				case Yt:
					return (c = $o(c, f.mode, m)), (c.return = f), c
				case ot:
					var w = c._init
					return h(f, w(c._payload), m)
			}
			if (Fn(c) || _n(c)) return (c = Ft(c, f.mode, m, null)), (c.return = f), c
			Mr(f, c)
		}
		return null
	}
	function g(f, c, m, w) {
		var E = c !== null ? c.key : null
		if ((typeof m == 'string' && m !== '') || typeof m == 'number') return E !== null ? null : s(f, c, '' + m, w)
		if (typeof m == 'object' && m !== null) {
			switch (m.$$typeof) {
				case Nr:
					return m.key === E ? a(f, c, m, w) : null
				case Yt:
					return m.key === E ? d(f, c, m, w) : null
				case ot:
					return (E = m._init), g(f, c, E(m._payload), w)
			}
			if (Fn(m) || _n(m)) return E !== null ? null : v(f, c, m, w, null)
			Mr(f, m)
		}
		return null
	}
	function x(f, c, m, w, E) {
		if ((typeof w == 'string' && w !== '') || typeof w == 'number') return (f = f.get(m) || null), s(c, f, '' + w, E)
		if (typeof w == 'object' && w !== null) {
			switch (w.$$typeof) {
				case Nr:
					return (f = f.get(w.key === null ? m : w.key) || null), a(c, f, w, E)
				case Yt:
					return (f = f.get(w.key === null ? m : w.key) || null), d(c, f, w, E)
				case ot:
					var j = w._init
					return x(f, c, m, j(w._payload), E)
			}
			if (Fn(w) || _n(w)) return (f = f.get(m) || null), v(c, f, w, E, null)
			Mr(c, w)
		}
		return null
	}
	function S(f, c, m, w) {
		for (var E = null, j = null, _ = c, N = (c = 0), F = null; _ !== null && N < m.length; N++) {
			_.index > N ? ((F = _), (_ = null)) : (F = _.sibling)
			var $ = g(f, _, m[N], w)
			if ($ === null) {
				_ === null && (_ = F)
				break
			}
			e && _ && $.alternate === null && t(f, _),
				(c = o($, c, N)),
				j === null ? (E = $) : (j.sibling = $),
				(j = $),
				(_ = F)
		}
		if (N === m.length) return n(f, _), b && $t(f, N), E
		if (_ === null) {
			for (; N < m.length; N++)
				(_ = h(f, m[N], w)), _ !== null && ((c = o(_, c, N)), j === null ? (E = _) : (j.sibling = _), (j = _))
			return b && $t(f, N), E
		}
		for (_ = r(f, _); N < m.length; N++)
			(F = x(_, f, N, m[N], w)),
				F !== null &&
					(e && F.alternate !== null && _.delete(F.key === null ? N : F.key),
					(c = o(F, c, N)),
					j === null ? (E = F) : (j.sibling = F),
					(j = F))
		return (
			e &&
				_.forEach(function (R) {
					return t(f, R)
				}),
			b && $t(f, N),
			E
		)
	}
	function y(f, c, m, w) {
		var E = _n(m)
		if (typeof E != 'function') throw Error(k(150))
		if (((m = E.call(m)), m == null)) throw Error(k(151))
		for (var j = (E = null), _ = c, N = (c = 0), F = null, $ = m.next(); _ !== null && !$.done; N++, $ = m.next()) {
			_.index > N ? ((F = _), (_ = null)) : (F = _.sibling)
			var R = g(f, _, $.value, w)
			if (R === null) {
				_ === null && (_ = F)
				break
			}
			e && _ && R.alternate === null && t(f, _),
				(c = o(R, c, N)),
				j === null ? (E = R) : (j.sibling = R),
				(j = R),
				(_ = F)
		}
		if ($.done) return n(f, _), b && $t(f, N), E
		if (_ === null) {
			for (; !$.done; N++, $ = m.next())
				($ = h(f, $.value, w)), $ !== null && ((c = o($, c, N)), j === null ? (E = $) : (j.sibling = $), (j = $))
			return b && $t(f, N), E
		}
		for (_ = r(f, _); !$.done; N++, $ = m.next())
			($ = x(_, f, N, $.value, w)),
				$ !== null &&
					(e && $.alternate !== null && _.delete($.key === null ? N : $.key),
					(c = o($, c, N)),
					j === null ? (E = $) : (j.sibling = $),
					(j = $))
		return (
			e &&
				_.forEach(function (M) {
					return t(f, M)
				}),
			b && $t(f, N),
			E
		)
	}
	function C(f, c, m, w) {
		if (
			(typeof m == 'object' && m !== null && m.type === Xt && m.key === null && (m = m.props.children),
			typeof m == 'object' && m !== null)
		) {
			switch (m.$$typeof) {
				case Nr:
					e: {
						for (var E = m.key, j = c; j !== null; ) {
							if (j.key === E) {
								if (((E = m.type), E === Xt)) {
									if (j.tag === 7) {
										n(f, j.sibling), (c = l(j, m.props.children)), (c.return = f), (f = c)
										break e
									}
								} else if (
									j.elementType === E ||
									(typeof E == 'object' && E !== null && E.$$typeof === ot && Nu(E) === j.type)
								) {
									n(f, j.sibling), (c = l(j, m.props)), (c.ref = Rn(f, j, m)), (c.return = f), (f = c)
									break e
								}
								n(f, j)
								break
							} else t(f, j)
							j = j.sibling
						}
						m.type === Xt
							? ((c = Ft(m.props.children, f.mode, w, m.key)), (c.return = f), (f = c))
							: ((w = il(m.type, m.key, m.props, null, f.mode, w)), (w.ref = Rn(f, c, m)), (w.return = f), (f = w))
					}
					return i(f)
				case Yt:
					e: {
						for (j = m.key; c !== null; ) {
							if (c.key === j)
								if (
									c.tag === 4 &&
									c.stateNode.containerInfo === m.containerInfo &&
									c.stateNode.implementation === m.implementation
								) {
									n(f, c.sibling), (c = l(c, m.children || [])), (c.return = f), (f = c)
									break e
								} else {
									n(f, c)
									break
								}
							else t(f, c)
							c = c.sibling
						}
						;(c = $o(m, f.mode, w)), (c.return = f), (f = c)
					}
					return i(f)
				case ot:
					return (j = m._init), C(f, c, j(m._payload), w)
			}
			if (Fn(m)) return S(f, c, m, w)
			if (_n(m)) return y(f, c, m, w)
			Mr(f, m)
		}
		return (typeof m == 'string' && m !== '') || typeof m == 'number'
			? ((m = '' + m),
			  c !== null && c.tag === 6
					? (n(f, c.sibling), (c = l(c, m)), (c.return = f), (f = c))
					: (n(f, c), (c = jo(m, f.mode, w)), (c.return = f), (f = c)),
			  i(f))
			: n(f, c)
	}
	return C
}
var gn = Oc(!0),
	Fc = Oc(!1),
	Sr = {},
	He = Et(Sr),
	lr = Et(Sr),
	or = Et(Sr)
function Dt(e) {
	if (e === Sr) throw Error(k(174))
	return e
}
function ds(e, t) {
	switch ((U(or, t), U(lr, e), U(He, Sr), (e = t.nodeType), e)) {
		case 9:
		case 11:
			t = (t = t.documentElement) ? t.namespaceURI : Ko(null, '')
			break
		default:
			;(e = e === 8 ? t.parentNode : t), (t = e.namespaceURI || null), (e = e.tagName), (t = Ko(t, e))
	}
	B(He), U(He, t)
}
function yn() {
	B(He), B(lr), B(or)
}
function Mc(e) {
	Dt(or.current)
	var t = Dt(He.current),
		n = Ko(t, e.type)
	t !== n && (U(lr, e), U(He, n))
}
function fs(e) {
	lr.current === e && (B(He), B(lr))
}
var H = Et(0)
function _l(e) {
	for (var t = e; t !== null; ) {
		if (t.tag === 13) {
			var n = t.memoizedState
			if (n !== null && ((n = n.dehydrated), n === null || n.data === '$?' || n.data === '$!')) return t
		} else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
			if (t.flags & 128) return t
		} else if (t.child !== null) {
			;(t.child.return = t), (t = t.child)
			continue
		}
		if (t === e) break
		for (; t.sibling === null; ) {
			if (t.return === null || t.return === e) return null
			t = t.return
		}
		;(t.sibling.return = t.return), (t = t.sibling)
	}
	return null
}
var So = []
function ps() {
	for (var e = 0; e < So.length; e++) So[e]._workInProgressVersionPrimary = null
	So.length = 0
}
var tl = nt.ReactCurrentDispatcher,
	Eo = nt.ReactCurrentBatchConfig,
	At = 0,
	Q = null,
	J = null,
	te = null,
	jl = !1,
	bn = !1,
	ir = 0,
	Zp = 0
function ie() {
	throw Error(k(321))
}
function ms(e, t) {
	if (t === null) return !1
	for (var n = 0; n < t.length && n < e.length; n++) if (!ze(e[n], t[n])) return !1
	return !0
}
function hs(e, t, n, r, l, o) {
	if (
		((At = o),
		(Q = t),
		(t.memoizedState = null),
		(t.updateQueue = null),
		(t.lanes = 0),
		(tl.current = e === null || e.memoizedState === null ? tm : nm),
		(e = n(r, l)),
		bn)
	) {
		o = 0
		do {
			if (((bn = !1), (ir = 0), 25 <= o)) throw Error(k(301))
			;(o += 1), (te = J = null), (t.updateQueue = null), (tl.current = rm), (e = n(r, l))
		} while (bn)
	}
	if (((tl.current = $l), (t = J !== null && J.next !== null), (At = 0), (te = J = Q = null), (jl = !1), t))
		throw Error(k(300))
	return e
}
function vs() {
	var e = ir !== 0
	return (ir = 0), e
}
function Ve() {
	var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null }
	return te === null ? (Q.memoizedState = te = e) : (te = te.next = e), te
}
function Re() {
	if (J === null) {
		var e = Q.alternate
		e = e !== null ? e.memoizedState : null
	} else e = J.next
	var t = te === null ? Q.memoizedState : te.next
	if (t !== null) (te = t), (J = e)
	else {
		if (e === null) throw Error(k(310))
		;(J = e),
			(e = {
				memoizedState: J.memoizedState,
				baseState: J.baseState,
				baseQueue: J.baseQueue,
				queue: J.queue,
				next: null,
			}),
			te === null ? (Q.memoizedState = te = e) : (te = te.next = e)
	}
	return te
}
function sr(e, t) {
	return typeof t == 'function' ? t(e) : t
}
function Co(e) {
	var t = Re(),
		n = t.queue
	if (n === null) throw Error(k(311))
	n.lastRenderedReducer = e
	var r = J,
		l = r.baseQueue,
		o = n.pending
	if (o !== null) {
		if (l !== null) {
			var i = l.next
			;(l.next = o.next), (o.next = i)
		}
		;(r.baseQueue = l = o), (n.pending = null)
	}
	if (l !== null) {
		;(o = l.next), (r = r.baseState)
		var s = (i = null),
			a = null,
			d = o
		do {
			var v = d.lane
			if ((At & v) === v)
				a !== null &&
					(a = a.next =
						{ lane: 0, action: d.action, hasEagerState: d.hasEagerState, eagerState: d.eagerState, next: null }),
					(r = d.hasEagerState ? d.eagerState : e(r, d.action))
			else {
				var h = { lane: v, action: d.action, hasEagerState: d.hasEagerState, eagerState: d.eagerState, next: null }
				a === null ? ((s = a = h), (i = r)) : (a = a.next = h), (Q.lanes |= v), (zt |= v)
			}
			d = d.next
		} while (d !== null && d !== o)
		a === null ? (i = r) : (a.next = s),
			ze(r, t.memoizedState) || (he = !0),
			(t.memoizedState = r),
			(t.baseState = i),
			(t.baseQueue = a),
			(n.lastRenderedState = r)
	}
	if (((e = n.interleaved), e !== null)) {
		l = e
		do (o = l.lane), (Q.lanes |= o), (zt |= o), (l = l.next)
		while (l !== e)
	} else l === null && (n.lanes = 0)
	return [t.memoizedState, n.dispatch]
}
function ko(e) {
	var t = Re(),
		n = t.queue
	if (n === null) throw Error(k(311))
	n.lastRenderedReducer = e
	var r = n.dispatch,
		l = n.pending,
		o = t.memoizedState
	if (l !== null) {
		n.pending = null
		var i = (l = l.next)
		do (o = e(o, i.action)), (i = i.next)
		while (i !== l)
		ze(o, t.memoizedState) || (he = !0),
			(t.memoizedState = o),
			t.baseQueue === null && (t.baseState = o),
			(n.lastRenderedState = o)
	}
	return [o, r]
}
function Ic() {}
function Ac(e, t) {
	var n = Q,
		r = Re(),
		l = t(),
		o = !ze(r.memoizedState, l)
	if (
		(o && ((r.memoizedState = l), (he = !0)),
		(r = r.queue),
		gs(Vc.bind(null, n, r, e), [e]),
		r.getSnapshot !== t || o || (te !== null && te.memoizedState.tag & 1))
	) {
		if (((n.flags |= 2048), ur(9, Uc.bind(null, n, r, l, t), void 0, null), ne === null)) throw Error(k(349))
		At & 30 || zc(n, t, l)
	}
	return l
}
function zc(e, t, n) {
	;(e.flags |= 16384),
		(e = { getSnapshot: t, value: n }),
		(t = Q.updateQueue),
		t === null
			? ((t = { lastEffect: null, stores: null }), (Q.updateQueue = t), (t.stores = [e]))
			: ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e))
}
function Uc(e, t, n, r) {
	;(t.value = n), (t.getSnapshot = r), Bc(t) && bc(e)
}
function Vc(e, t, n) {
	return n(function () {
		Bc(t) && bc(e)
	})
}
function Bc(e) {
	var t = e.getSnapshot
	e = e.value
	try {
		var n = t()
		return !ze(e, n)
	} catch {
		return !0
	}
}
function bc(e) {
	var t = et(e, 1)
	t !== null && Ae(t, e, 1, -1)
}
function _u(e) {
	var t = Ve()
	return (
		typeof e == 'function' && (e = e()),
		(t.memoizedState = t.baseState = e),
		(e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: sr, lastRenderedState: e }),
		(t.queue = e),
		(e = e.dispatch = em.bind(null, Q, e)),
		[t.memoizedState, e]
	)
}
function ur(e, t, n, r) {
	return (
		(e = { tag: e, create: t, destroy: n, deps: r, next: null }),
		(t = Q.updateQueue),
		t === null
			? ((t = { lastEffect: null, stores: null }), (Q.updateQueue = t), (t.lastEffect = e.next = e))
			: ((n = t.lastEffect),
			  n === null ? (t.lastEffect = e.next = e) : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
		e
	)
}
function Wc() {
	return Re().memoizedState
}
function nl(e, t, n, r) {
	var l = Ve()
	;(Q.flags |= e), (l.memoizedState = ur(1 | t, n, void 0, r === void 0 ? null : r))
}
function Wl(e, t, n, r) {
	var l = Re()
	r = r === void 0 ? null : r
	var o = void 0
	if (J !== null) {
		var i = J.memoizedState
		if (((o = i.destroy), r !== null && ms(r, i.deps))) {
			l.memoizedState = ur(t, n, o, r)
			return
		}
	}
	;(Q.flags |= e), (l.memoizedState = ur(1 | t, n, o, r))
}
function ju(e, t) {
	return nl(8390656, 8, e, t)
}
function gs(e, t) {
	return Wl(2048, 8, e, t)
}
function Hc(e, t) {
	return Wl(4, 2, e, t)
}
function Qc(e, t) {
	return Wl(4, 4, e, t)
}
function Kc(e, t) {
	if (typeof t == 'function')
		return (
			(e = e()),
			t(e),
			function () {
				t(null)
			}
		)
	if (t != null)
		return (
			(e = e()),
			(t.current = e),
			function () {
				t.current = null
			}
		)
}
function Yc(e, t, n) {
	return (n = n != null ? n.concat([e]) : null), Wl(4, 4, Kc.bind(null, t, e), n)
}
function ys() {}
function Xc(e, t) {
	var n = Re()
	t = t === void 0 ? null : t
	var r = n.memoizedState
	return r !== null && t !== null && ms(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e)
}
function Gc(e, t) {
	var n = Re()
	t = t === void 0 ? null : t
	var r = n.memoizedState
	return r !== null && t !== null && ms(t, r[1]) ? r[0] : ((e = e()), (n.memoizedState = [e, t]), e)
}
function Zc(e, t, n) {
	return At & 21
		? (ze(n, t) || ((n = ec()), (Q.lanes |= n), (zt |= n), (e.baseState = !0)), t)
		: (e.baseState && ((e.baseState = !1), (he = !0)), (e.memoizedState = n))
}
function Jp(e, t) {
	var n = z
	;(z = n !== 0 && 4 > n ? n : 4), e(!0)
	var r = Eo.transition
	Eo.transition = {}
	try {
		e(!1), t()
	} finally {
		;(z = n), (Eo.transition = r)
	}
}
function Jc() {
	return Re().memoizedState
}
function qp(e, t, n) {
	var r = gt(e)
	if (((n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }), qc(e))) ed(t, n)
	else if (((n = Tc(e, t, n, r)), n !== null)) {
		var l = de()
		Ae(n, e, r, l), td(n, t, r)
	}
}
function em(e, t, n) {
	var r = gt(e),
		l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }
	if (qc(e)) ed(t, l)
	else {
		var o = e.alternate
		if (e.lanes === 0 && (o === null || o.lanes === 0) && ((o = t.lastRenderedReducer), o !== null))
			try {
				var i = t.lastRenderedState,
					s = o(i, n)
				if (((l.hasEagerState = !0), (l.eagerState = s), ze(s, i))) {
					var a = t.interleaved
					a === null ? ((l.next = l), as(t)) : ((l.next = a.next), (a.next = l)), (t.interleaved = l)
					return
				}
			} catch {
			} finally {
			}
		;(n = Tc(e, t, l, r)), n !== null && ((l = de()), Ae(n, e, r, l), td(n, t, r))
	}
}
function qc(e) {
	var t = e.alternate
	return e === Q || (t !== null && t === Q)
}
function ed(e, t) {
	bn = jl = !0
	var n = e.pending
	n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t)
}
function td(e, t, n) {
	if (n & 4194240) {
		var r = t.lanes
		;(r &= e.pendingLanes), (n |= r), (t.lanes = n), Xi(e, n)
	}
}
var $l = {
		readContext: Te,
		useCallback: ie,
		useContext: ie,
		useEffect: ie,
		useImperativeHandle: ie,
		useInsertionEffect: ie,
		useLayoutEffect: ie,
		useMemo: ie,
		useReducer: ie,
		useRef: ie,
		useState: ie,
		useDebugValue: ie,
		useDeferredValue: ie,
		useTransition: ie,
		useMutableSource: ie,
		useSyncExternalStore: ie,
		useId: ie,
		unstable_isNewReconciler: !1,
	},
	tm = {
		readContext: Te,
		useCallback: function (e, t) {
			return (Ve().memoizedState = [e, t === void 0 ? null : t]), e
		},
		useContext: Te,
		useEffect: ju,
		useImperativeHandle: function (e, t, n) {
			return (n = n != null ? n.concat([e]) : null), nl(4194308, 4, Kc.bind(null, t, e), n)
		},
		useLayoutEffect: function (e, t) {
			return nl(4194308, 4, e, t)
		},
		useInsertionEffect: function (e, t) {
			return nl(4, 2, e, t)
		},
		useMemo: function (e, t) {
			var n = Ve()
			return (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
		},
		useReducer: function (e, t, n) {
			var r = Ve()
			return (
				(t = n !== void 0 ? n(t) : t),
				(r.memoizedState = r.baseState = t),
				(e = {
					pending: null,
					interleaved: null,
					lanes: 0,
					dispatch: null,
					lastRenderedReducer: e,
					lastRenderedState: t,
				}),
				(r.queue = e),
				(e = e.dispatch = qp.bind(null, Q, e)),
				[r.memoizedState, e]
			)
		},
		useRef: function (e) {
			var t = Ve()
			return (e = { current: e }), (t.memoizedState = e)
		},
		useState: _u,
		useDebugValue: ys,
		useDeferredValue: function (e) {
			return (Ve().memoizedState = e)
		},
		useTransition: function () {
			var e = _u(!1),
				t = e[0]
			return (e = Jp.bind(null, e[1])), (Ve().memoizedState = e), [t, e]
		},
		useMutableSource: function () {},
		useSyncExternalStore: function (e, t, n) {
			var r = Q,
				l = Ve()
			if (b) {
				if (n === void 0) throw Error(k(407))
				n = n()
			} else {
				if (((n = t()), ne === null)) throw Error(k(349))
				At & 30 || zc(r, t, n)
			}
			l.memoizedState = n
			var o = { value: n, getSnapshot: t }
			return (
				(l.queue = o),
				ju(Vc.bind(null, r, o, e), [e]),
				(r.flags |= 2048),
				ur(9, Uc.bind(null, r, o, n, t), void 0, null),
				n
			)
		},
		useId: function () {
			var e = Ve(),
				t = ne.identifierPrefix
			if (b) {
				var n = Ge,
					r = Xe
				;(n = (r & ~(1 << (32 - Ie(r) - 1))).toString(32) + n),
					(t = ':' + t + 'R' + n),
					(n = ir++),
					0 < n && (t += 'H' + n.toString(32)),
					(t += ':')
			} else (n = Zp++), (t = ':' + t + 'r' + n.toString(32) + ':')
			return (e.memoizedState = t)
		},
		unstable_isNewReconciler: !1,
	},
	nm = {
		readContext: Te,
		useCallback: Xc,
		useContext: Te,
		useEffect: gs,
		useImperativeHandle: Yc,
		useInsertionEffect: Hc,
		useLayoutEffect: Qc,
		useMemo: Gc,
		useReducer: Co,
		useRef: Wc,
		useState: function () {
			return Co(sr)
		},
		useDebugValue: ys,
		useDeferredValue: function (e) {
			var t = Re()
			return Zc(t, J.memoizedState, e)
		},
		useTransition: function () {
			var e = Co(sr)[0],
				t = Re().memoizedState
			return [e, t]
		},
		useMutableSource: Ic,
		useSyncExternalStore: Ac,
		useId: Jc,
		unstable_isNewReconciler: !1,
	},
	rm = {
		readContext: Te,
		useCallback: Xc,
		useContext: Te,
		useEffect: gs,
		useImperativeHandle: Yc,
		useInsertionEffect: Hc,
		useLayoutEffect: Qc,
		useMemo: Gc,
		useReducer: ko,
		useRef: Wc,
		useState: function () {
			return ko(sr)
		},
		useDebugValue: ys,
		useDeferredValue: function (e) {
			var t = Re()
			return J === null ? (t.memoizedState = e) : Zc(t, J.memoizedState, e)
		},
		useTransition: function () {
			var e = ko(sr)[0],
				t = Re().memoizedState
			return [e, t]
		},
		useMutableSource: Ic,
		useSyncExternalStore: Ac,
		useId: Jc,
		unstable_isNewReconciler: !1,
	}
function xn(e, t) {
	try {
		var n = '',
			r = t
		do (n += Rf(r)), (r = r.return)
		while (r)
		var l = n
	} catch (o) {
		l =
			`
Error generating stack: ` +
			o.message +
			`
` +
			o.stack
	}
	return { value: e, source: t, stack: l, digest: null }
}
function No(e, t, n) {
	return { value: e, source: null, stack: n ?? null, digest: t ?? null }
}
function vi(e, t) {
	try {
		console.error(t.value)
	} catch (n) {
		setTimeout(function () {
			throw n
		})
	}
}
var lm = typeof WeakMap == 'function' ? WeakMap : Map
function nd(e, t, n) {
	;(n = Ze(-1, n)), (n.tag = 3), (n.payload = { element: null })
	var r = t.value
	return (
		(n.callback = function () {
			Tl || ((Tl = !0), (_i = r)), vi(e, t)
		}),
		n
	)
}
function rd(e, t, n) {
	;(n = Ze(-1, n)), (n.tag = 3)
	var r = e.type.getDerivedStateFromError
	if (typeof r == 'function') {
		var l = t.value
		;(n.payload = function () {
			return r(l)
		}),
			(n.callback = function () {
				vi(e, t)
			})
	}
	var o = e.stateNode
	return (
		o !== null &&
			typeof o.componentDidCatch == 'function' &&
			(n.callback = function () {
				vi(e, t), typeof r != 'function' && (vt === null ? (vt = new Set([this])) : vt.add(this))
				var i = t.stack
				this.componentDidCatch(t.value, { componentStack: i !== null ? i : '' })
			}),
		n
	)
}
function $u(e, t, n) {
	var r = e.pingCache
	if (r === null) {
		r = e.pingCache = new lm()
		var l = new Set()
		r.set(t, l)
	} else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l))
	l.has(n) || (l.add(n), (e = ym.bind(null, e, t, n)), t.then(e, e))
}
function Pu(e) {
	do {
		var t
		if (((t = e.tag === 13) && ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)), t)) return e
		e = e.return
	} while (e !== null)
	return null
}
function Tu(e, t, n, r, l) {
	return e.mode & 1
		? ((e.flags |= 65536), (e.lanes = l), e)
		: (e === t
				? (e.flags |= 65536)
				: ((e.flags |= 128),
				  (n.flags |= 131072),
				  (n.flags &= -52805),
				  n.tag === 1 && (n.alternate === null ? (n.tag = 17) : ((t = Ze(-1, 1)), (t.tag = 2), ht(n, t, 1))),
				  (n.lanes |= 1)),
		  e)
}
var om = nt.ReactCurrentOwner,
	he = !1
function ce(e, t, n, r) {
	t.child = e === null ? Fc(t, null, n, r) : gn(t, e.child, n, r)
}
function Ru(e, t, n, r, l) {
	n = n.render
	var o = t.ref
	return (
		fn(t, l),
		(r = hs(e, t, n, r, o, l)),
		(n = vs()),
		e !== null && !he
			? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~l), tt(e, t, l))
			: (b && n && rs(t), (t.flags |= 1), ce(e, t, r, l), t.child)
	)
}
function Du(e, t, n, r, l) {
	if (e === null) {
		var o = n.type
		return typeof o == 'function' &&
			!_s(o) &&
			o.defaultProps === void 0 &&
			n.compare === null &&
			n.defaultProps === void 0
			? ((t.tag = 15), (t.type = o), ld(e, t, o, r, l))
			: ((e = il(n.type, null, r, t, t.mode, l)), (e.ref = t.ref), (e.return = t), (t.child = e))
	}
	if (((o = e.child), !(e.lanes & l))) {
		var i = o.memoizedProps
		if (((n = n.compare), (n = n !== null ? n : er), n(i, r) && e.ref === t.ref)) return tt(e, t, l)
	}
	return (t.flags |= 1), (e = yt(o, r)), (e.ref = t.ref), (e.return = t), (t.child = e)
}
function ld(e, t, n, r, l) {
	if (e !== null) {
		var o = e.memoizedProps
		if (er(o, r) && e.ref === t.ref)
			if (((he = !1), (t.pendingProps = r = o), (e.lanes & l) !== 0)) e.flags & 131072 && (he = !0)
			else return (t.lanes = e.lanes), tt(e, t, l)
	}
	return gi(e, t, n, r, l)
}
function od(e, t, n) {
	var r = t.pendingProps,
		l = r.children,
		o = e !== null ? e.memoizedState : null
	if (r.mode === 'hidden')
		if (!(t.mode & 1)) (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }), U(on, xe), (xe |= n)
		else {
			if (!(n & 1073741824))
				return (
					(e = o !== null ? o.baseLanes | n : n),
					(t.lanes = t.childLanes = 1073741824),
					(t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
					(t.updateQueue = null),
					U(on, xe),
					(xe |= e),
					null
				)
			;(t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
				(r = o !== null ? o.baseLanes : n),
				U(on, xe),
				(xe |= r)
		}
	else o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n), U(on, xe), (xe |= r)
	return ce(e, t, l, n), t.child
}
function id(e, t) {
	var n = t.ref
	;((e === null && n !== null) || (e !== null && e.ref !== n)) && ((t.flags |= 512), (t.flags |= 2097152))
}
function gi(e, t, n, r, l) {
	var o = ge(n) ? Mt : ae.current
	return (
		(o = hn(t, o)),
		fn(t, l),
		(n = hs(e, t, n, r, o, l)),
		(r = vs()),
		e !== null && !he
			? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~l), tt(e, t, l))
			: (b && r && rs(t), (t.flags |= 1), ce(e, t, n, l), t.child)
	)
}
function Lu(e, t, n, r, l) {
	if (ge(n)) {
		var o = !0
		wl(t)
	} else o = !1
	if ((fn(t, l), t.stateNode === null)) rl(e, t), Lc(t, n, r), hi(t, n, r, l), (r = !0)
	else if (e === null) {
		var i = t.stateNode,
			s = t.memoizedProps
		i.props = s
		var a = i.context,
			d = n.contextType
		typeof d == 'object' && d !== null ? (d = Te(d)) : ((d = ge(n) ? Mt : ae.current), (d = hn(t, d)))
		var v = n.getDerivedStateFromProps,
			h = typeof v == 'function' || typeof i.getSnapshotBeforeUpdate == 'function'
		h ||
			(typeof i.UNSAFE_componentWillReceiveProps != 'function' && typeof i.componentWillReceiveProps != 'function') ||
			((s !== r || a !== d) && ku(t, i, r, d)),
			(it = !1)
		var g = t.memoizedState
		;(i.state = g),
			Nl(t, r, i, l),
			(a = t.memoizedState),
			s !== r || g !== a || ve.current || it
				? (typeof v == 'function' && (mi(t, n, v, r), (a = t.memoizedState)),
				  (s = it || Cu(t, n, s, r, g, a, d))
						? (h ||
								(typeof i.UNSAFE_componentWillMount != 'function' && typeof i.componentWillMount != 'function') ||
								(typeof i.componentWillMount == 'function' && i.componentWillMount(),
								typeof i.UNSAFE_componentWillMount == 'function' && i.UNSAFE_componentWillMount()),
						  typeof i.componentDidMount == 'function' && (t.flags |= 4194308))
						: (typeof i.componentDidMount == 'function' && (t.flags |= 4194308),
						  (t.memoizedProps = r),
						  (t.memoizedState = a)),
				  (i.props = r),
				  (i.state = a),
				  (i.context = d),
				  (r = s))
				: (typeof i.componentDidMount == 'function' && (t.flags |= 4194308), (r = !1))
	} else {
		;(i = t.stateNode),
			Rc(e, t),
			(s = t.memoizedProps),
			(d = t.type === t.elementType ? s : Oe(t.type, s)),
			(i.props = d),
			(h = t.pendingProps),
			(g = i.context),
			(a = n.contextType),
			typeof a == 'object' && a !== null ? (a = Te(a)) : ((a = ge(n) ? Mt : ae.current), (a = hn(t, a)))
		var x = n.getDerivedStateFromProps
		;(v = typeof x == 'function' || typeof i.getSnapshotBeforeUpdate == 'function') ||
			(typeof i.UNSAFE_componentWillReceiveProps != 'function' && typeof i.componentWillReceiveProps != 'function') ||
			((s !== h || g !== a) && ku(t, i, r, a)),
			(it = !1),
			(g = t.memoizedState),
			(i.state = g),
			Nl(t, r, i, l)
		var S = t.memoizedState
		s !== h || g !== S || ve.current || it
			? (typeof x == 'function' && (mi(t, n, x, r), (S = t.memoizedState)),
			  (d = it || Cu(t, n, d, r, g, S, a) || !1)
					? (v ||
							(typeof i.UNSAFE_componentWillUpdate != 'function' && typeof i.componentWillUpdate != 'function') ||
							(typeof i.componentWillUpdate == 'function' && i.componentWillUpdate(r, S, a),
							typeof i.UNSAFE_componentWillUpdate == 'function' && i.UNSAFE_componentWillUpdate(r, S, a)),
					  typeof i.componentDidUpdate == 'function' && (t.flags |= 4),
					  typeof i.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
					: (typeof i.componentDidUpdate != 'function' ||
							(s === e.memoizedProps && g === e.memoizedState) ||
							(t.flags |= 4),
					  typeof i.getSnapshotBeforeUpdate != 'function' ||
							(s === e.memoizedProps && g === e.memoizedState) ||
							(t.flags |= 1024),
					  (t.memoizedProps = r),
					  (t.memoizedState = S)),
			  (i.props = r),
			  (i.state = S),
			  (i.context = a),
			  (r = d))
			: (typeof i.componentDidUpdate != 'function' ||
					(s === e.memoizedProps && g === e.memoizedState) ||
					(t.flags |= 4),
			  typeof i.getSnapshotBeforeUpdate != 'function' ||
					(s === e.memoizedProps && g === e.memoizedState) ||
					(t.flags |= 1024),
			  (r = !1))
	}
	return yi(e, t, n, r, o, l)
}
function yi(e, t, n, r, l, o) {
	id(e, t)
	var i = (t.flags & 128) !== 0
	if (!r && !i) return l && yu(t, n, !1), tt(e, t, o)
	;(r = t.stateNode), (om.current = t)
	var s = i && typeof n.getDerivedStateFromError != 'function' ? null : r.render()
	return (
		(t.flags |= 1),
		e !== null && i ? ((t.child = gn(t, e.child, null, o)), (t.child = gn(t, null, s, o))) : ce(e, t, s, o),
		(t.memoizedState = r.state),
		l && yu(t, n, !0),
		t.child
	)
}
function sd(e) {
	var t = e.stateNode
	t.pendingContext ? gu(e, t.pendingContext, t.pendingContext !== t.context) : t.context && gu(e, t.context, !1),
		ds(e, t.containerInfo)
}
function Ou(e, t, n, r, l) {
	return vn(), os(l), (t.flags |= 256), ce(e, t, n, r), t.child
}
var xi = { dehydrated: null, treeContext: null, retryLane: 0 }
function wi(e) {
	return { baseLanes: e, cachePool: null, transitions: null }
}
function ud(e, t, n) {
	var r = t.pendingProps,
		l = H.current,
		o = !1,
		i = (t.flags & 128) !== 0,
		s
	if (
		((s = i) || (s = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
		s ? ((o = !0), (t.flags &= -129)) : (e === null || e.memoizedState !== null) && (l |= 1),
		U(H, l & 1),
		e === null)
	)
		return (
			fi(t),
			(e = t.memoizedState),
			e !== null && ((e = e.dehydrated), e !== null)
				? (t.mode & 1 ? (e.data === '$!' ? (t.lanes = 8) : (t.lanes = 1073741824)) : (t.lanes = 1), null)
				: ((i = r.children),
				  (e = r.fallback),
				  o
						? ((r = t.mode),
						  (o = t.child),
						  (i = { mode: 'hidden', children: i }),
						  !(r & 1) && o !== null ? ((o.childLanes = 0), (o.pendingProps = i)) : (o = Kl(i, r, 0, null)),
						  (e = Ft(e, r, n, null)),
						  (o.return = t),
						  (e.return = t),
						  (o.sibling = e),
						  (t.child = o),
						  (t.child.memoizedState = wi(n)),
						  (t.memoizedState = xi),
						  e)
						: xs(t, i))
		)
	if (((l = e.memoizedState), l !== null && ((s = l.dehydrated), s !== null))) return im(e, t, i, r, s, l, n)
	if (o) {
		;(o = r.fallback), (i = t.mode), (l = e.child), (s = l.sibling)
		var a = { mode: 'hidden', children: r.children }
		return (
			!(i & 1) && t.child !== l
				? ((r = t.child), (r.childLanes = 0), (r.pendingProps = a), (t.deletions = null))
				: ((r = yt(l, a)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
			s !== null ? (o = yt(s, o)) : ((o = Ft(o, i, n, null)), (o.flags |= 2)),
			(o.return = t),
			(r.return = t),
			(r.sibling = o),
			(t.child = r),
			(r = o),
			(o = t.child),
			(i = e.child.memoizedState),
			(i = i === null ? wi(n) : { baseLanes: i.baseLanes | n, cachePool: null, transitions: i.transitions }),
			(o.memoizedState = i),
			(o.childLanes = e.childLanes & ~n),
			(t.memoizedState = xi),
			r
		)
	}
	return (
		(o = e.child),
		(e = o.sibling),
		(r = yt(o, { mode: 'visible', children: r.children })),
		!(t.mode & 1) && (r.lanes = n),
		(r.return = t),
		(r.sibling = null),
		e !== null && ((n = t.deletions), n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
		(t.child = r),
		(t.memoizedState = null),
		r
	)
}
function xs(e, t) {
	return (t = Kl({ mode: 'visible', children: t }, e.mode, 0, null)), (t.return = e), (e.child = t)
}
function Ir(e, t, n, r) {
	return (
		r !== null && os(r),
		gn(t, e.child, null, n),
		(e = xs(t, t.pendingProps.children)),
		(e.flags |= 2),
		(t.memoizedState = null),
		e
	)
}
function im(e, t, n, r, l, o, i) {
	if (n)
		return t.flags & 256
			? ((t.flags &= -257), (r = No(Error(k(422)))), Ir(e, t, i, r))
			: t.memoizedState !== null
			? ((t.child = e.child), (t.flags |= 128), null)
			: ((o = r.fallback),
			  (l = t.mode),
			  (r = Kl({ mode: 'visible', children: r.children }, l, 0, null)),
			  (o = Ft(o, l, i, null)),
			  (o.flags |= 2),
			  (r.return = t),
			  (o.return = t),
			  (r.sibling = o),
			  (t.child = r),
			  t.mode & 1 && gn(t, e.child, null, i),
			  (t.child.memoizedState = wi(i)),
			  (t.memoizedState = xi),
			  o)
	if (!(t.mode & 1)) return Ir(e, t, i, null)
	if (l.data === '$!') {
		if (((r = l.nextSibling && l.nextSibling.dataset), r)) var s = r.dgst
		return (r = s), (o = Error(k(419))), (r = No(o, r, void 0)), Ir(e, t, i, r)
	}
	if (((s = (i & e.childLanes) !== 0), he || s)) {
		if (((r = ne), r !== null)) {
			switch (i & -i) {
				case 4:
					l = 2
					break
				case 16:
					l = 8
					break
				case 64:
				case 128:
				case 256:
				case 512:
				case 1024:
				case 2048:
				case 4096:
				case 8192:
				case 16384:
				case 32768:
				case 65536:
				case 131072:
				case 262144:
				case 524288:
				case 1048576:
				case 2097152:
				case 4194304:
				case 8388608:
				case 16777216:
				case 33554432:
				case 67108864:
					l = 32
					break
				case 536870912:
					l = 268435456
					break
				default:
					l = 0
			}
			;(l = l & (r.suspendedLanes | i) ? 0 : l),
				l !== 0 && l !== o.retryLane && ((o.retryLane = l), et(e, l), Ae(r, e, l, -1))
		}
		return Ns(), (r = No(Error(k(421)))), Ir(e, t, i, r)
	}
	return l.data === '$?'
		? ((t.flags |= 128), (t.child = e.child), (t = xm.bind(null, e)), (l._reactRetry = t), null)
		: ((e = o.treeContext),
		  (we = mt(l.nextSibling)),
		  (Se = t),
		  (b = !0),
		  (Me = null),
		  e !== null && ((_e[je++] = Xe), (_e[je++] = Ge), (_e[je++] = It), (Xe = e.id), (Ge = e.overflow), (It = t)),
		  (t = xs(t, r.children)),
		  (t.flags |= 4096),
		  t)
}
function Fu(e, t, n) {
	e.lanes |= t
	var r = e.alternate
	r !== null && (r.lanes |= t), pi(e.return, t, n)
}
function _o(e, t, n, r, l) {
	var o = e.memoizedState
	o === null
		? (e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: l })
		: ((o.isBackwards = t),
		  (o.rendering = null),
		  (o.renderingStartTime = 0),
		  (o.last = r),
		  (o.tail = n),
		  (o.tailMode = l))
}
function ad(e, t, n) {
	var r = t.pendingProps,
		l = r.revealOrder,
		o = r.tail
	if ((ce(e, t, r.children, n), (r = H.current), r & 2)) (r = (r & 1) | 2), (t.flags |= 128)
	else {
		if (e !== null && e.flags & 128)
			e: for (e = t.child; e !== null; ) {
				if (e.tag === 13) e.memoizedState !== null && Fu(e, n, t)
				else if (e.tag === 19) Fu(e, n, t)
				else if (e.child !== null) {
					;(e.child.return = e), (e = e.child)
					continue
				}
				if (e === t) break e
				for (; e.sibling === null; ) {
					if (e.return === null || e.return === t) break e
					e = e.return
				}
				;(e.sibling.return = e.return), (e = e.sibling)
			}
		r &= 1
	}
	if ((U(H, r), !(t.mode & 1))) t.memoizedState = null
	else
		switch (l) {
			case 'forwards':
				for (n = t.child, l = null; n !== null; )
					(e = n.alternate), e !== null && _l(e) === null && (l = n), (n = n.sibling)
				;(n = l),
					n === null ? ((l = t.child), (t.child = null)) : ((l = n.sibling), (n.sibling = null)),
					_o(t, !1, l, n, o)
				break
			case 'backwards':
				for (n = null, l = t.child, t.child = null; l !== null; ) {
					if (((e = l.alternate), e !== null && _l(e) === null)) {
						t.child = l
						break
					}
					;(e = l.sibling), (l.sibling = n), (n = l), (l = e)
				}
				_o(t, !0, n, null, o)
				break
			case 'together':
				_o(t, !1, null, null, void 0)
				break
			default:
				t.memoizedState = null
		}
	return t.child
}
function rl(e, t) {
	!(t.mode & 1) && e !== null && ((e.alternate = null), (t.alternate = null), (t.flags |= 2))
}
function tt(e, t, n) {
	if ((e !== null && (t.dependencies = e.dependencies), (zt |= t.lanes), !(n & t.childLanes))) return null
	if (e !== null && t.child !== e.child) throw Error(k(153))
	if (t.child !== null) {
		for (e = t.child, n = yt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
			(e = e.sibling), (n = n.sibling = yt(e, e.pendingProps)), (n.return = t)
		n.sibling = null
	}
	return t.child
}
function sm(e, t, n) {
	switch (t.tag) {
		case 3:
			sd(t), vn()
			break
		case 5:
			Mc(t)
			break
		case 1:
			ge(t.type) && wl(t)
			break
		case 4:
			ds(t, t.stateNode.containerInfo)
			break
		case 10:
			var r = t.type._context,
				l = t.memoizedProps.value
			U(Cl, r._currentValue), (r._currentValue = l)
			break
		case 13:
			if (((r = t.memoizedState), r !== null))
				return r.dehydrated !== null
					? (U(H, H.current & 1), (t.flags |= 128), null)
					: n & t.child.childLanes
					? ud(e, t, n)
					: (U(H, H.current & 1), (e = tt(e, t, n)), e !== null ? e.sibling : null)
			U(H, H.current & 1)
			break
		case 19:
			if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
				if (r) return ad(e, t, n)
				t.flags |= 128
			}
			if (
				((l = t.memoizedState),
				l !== null && ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
				U(H, H.current),
				r)
			)
				break
			return null
		case 22:
		case 23:
			return (t.lanes = 0), od(e, t, n)
	}
	return tt(e, t, n)
}
var cd, Si, dd, fd
cd = function (e, t) {
	for (var n = t.child; n !== null; ) {
		if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode)
		else if (n.tag !== 4 && n.child !== null) {
			;(n.child.return = n), (n = n.child)
			continue
		}
		if (n === t) break
		for (; n.sibling === null; ) {
			if (n.return === null || n.return === t) return
			n = n.return
		}
		;(n.sibling.return = n.return), (n = n.sibling)
	}
}
Si = function () {}
dd = function (e, t, n, r) {
	var l = e.memoizedProps
	if (l !== r) {
		;(e = t.stateNode), Dt(He.current)
		var o = null
		switch (n) {
			case 'input':
				;(l = bo(e, l)), (r = bo(e, r)), (o = [])
				break
			case 'select':
				;(l = K({}, l, { value: void 0 })), (r = K({}, r, { value: void 0 })), (o = [])
				break
			case 'textarea':
				;(l = Qo(e, l)), (r = Qo(e, r)), (o = [])
				break
			default:
				typeof l.onClick != 'function' && typeof r.onClick == 'function' && (e.onclick = yl)
		}
		Yo(n, r)
		var i
		n = null
		for (d in l)
			if (!r.hasOwnProperty(d) && l.hasOwnProperty(d) && l[d] != null)
				if (d === 'style') {
					var s = l[d]
					for (i in s) s.hasOwnProperty(i) && (n || (n = {}), (n[i] = ''))
				} else
					d !== 'dangerouslySetInnerHTML' &&
						d !== 'children' &&
						d !== 'suppressContentEditableWarning' &&
						d !== 'suppressHydrationWarning' &&
						d !== 'autoFocus' &&
						(Kn.hasOwnProperty(d) ? o || (o = []) : (o = o || []).push(d, null))
		for (d in r) {
			var a = r[d]
			if (((s = l != null ? l[d] : void 0), r.hasOwnProperty(d) && a !== s && (a != null || s != null)))
				if (d === 'style')
					if (s) {
						for (i in s) !s.hasOwnProperty(i) || (a && a.hasOwnProperty(i)) || (n || (n = {}), (n[i] = ''))
						for (i in a) a.hasOwnProperty(i) && s[i] !== a[i] && (n || (n = {}), (n[i] = a[i]))
					} else n || (o || (o = []), o.push(d, n)), (n = a)
				else
					d === 'dangerouslySetInnerHTML'
						? ((a = a ? a.__html : void 0),
						  (s = s ? s.__html : void 0),
						  a != null && s !== a && (o = o || []).push(d, a))
						: d === 'children'
						? (typeof a != 'string' && typeof a != 'number') || (o = o || []).push(d, '' + a)
						: d !== 'suppressContentEditableWarning' &&
						  d !== 'suppressHydrationWarning' &&
						  (Kn.hasOwnProperty(d)
								? (a != null && d === 'onScroll' && V('scroll', e), o || s === a || (o = []))
								: (o = o || []).push(d, a))
		}
		n && (o = o || []).push('style', n)
		var d = o
		;(t.updateQueue = d) && (t.flags |= 4)
	}
}
fd = function (e, t, n, r) {
	n !== r && (t.flags |= 4)
}
function Dn(e, t) {
	if (!b)
		switch (e.tailMode) {
			case 'hidden':
				t = e.tail
				for (var n = null; t !== null; ) t.alternate !== null && (n = t), (t = t.sibling)
				n === null ? (e.tail = null) : (n.sibling = null)
				break
			case 'collapsed':
				n = e.tail
				for (var r = null; n !== null; ) n.alternate !== null && (r = n), (n = n.sibling)
				r === null ? (t || e.tail === null ? (e.tail = null) : (e.tail.sibling = null)) : (r.sibling = null)
		}
}
function se(e) {
	var t = e.alternate !== null && e.alternate.child === e.child,
		n = 0,
		r = 0
	if (t)
		for (var l = e.child; l !== null; )
			(n |= l.lanes | l.childLanes),
				(r |= l.subtreeFlags & 14680064),
				(r |= l.flags & 14680064),
				(l.return = e),
				(l = l.sibling)
	else
		for (l = e.child; l !== null; )
			(n |= l.lanes | l.childLanes), (r |= l.subtreeFlags), (r |= l.flags), (l.return = e), (l = l.sibling)
	return (e.subtreeFlags |= r), (e.childLanes = n), t
}
function um(e, t, n) {
	var r = t.pendingProps
	switch ((ls(t), t.tag)) {
		case 2:
		case 16:
		case 15:
		case 0:
		case 11:
		case 7:
		case 8:
		case 12:
		case 9:
		case 14:
			return se(t), null
		case 1:
			return ge(t.type) && xl(), se(t), null
		case 3:
			return (
				(r = t.stateNode),
				yn(),
				B(ve),
				B(ae),
				ps(),
				r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
				(e === null || e.child === null) &&
					(Fr(t)
						? (t.flags |= 4)
						: e === null ||
						  (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
						  ((t.flags |= 1024), Me !== null && (Pi(Me), (Me = null)))),
				Si(e, t),
				se(t),
				null
			)
		case 5:
			fs(t)
			var l = Dt(or.current)
			if (((n = t.type), e !== null && t.stateNode != null))
				dd(e, t, n, r, l), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152))
			else {
				if (!r) {
					if (t.stateNode === null) throw Error(k(166))
					return se(t), null
				}
				if (((e = Dt(He.current)), Fr(t))) {
					;(r = t.stateNode), (n = t.type)
					var o = t.memoizedProps
					switch (((r[Be] = t), (r[rr] = o), (e = (t.mode & 1) !== 0), n)) {
						case 'dialog':
							V('cancel', r), V('close', r)
							break
						case 'iframe':
						case 'object':
						case 'embed':
							V('load', r)
							break
						case 'video':
						case 'audio':
							for (l = 0; l < In.length; l++) V(In[l], r)
							break
						case 'source':
							V('error', r)
							break
						case 'img':
						case 'image':
						case 'link':
							V('error', r), V('load', r)
							break
						case 'details':
							V('toggle', r)
							break
						case 'input':
							Ws(r, o), V('invalid', r)
							break
						case 'select':
							;(r._wrapperState = { wasMultiple: !!o.multiple }), V('invalid', r)
							break
						case 'textarea':
							Qs(r, o), V('invalid', r)
					}
					Yo(n, o), (l = null)
					for (var i in o)
						if (o.hasOwnProperty(i)) {
							var s = o[i]
							i === 'children'
								? typeof s == 'string'
									? r.textContent !== s &&
									  (o.suppressHydrationWarning !== !0 && Or(r.textContent, s, e), (l = ['children', s]))
									: typeof s == 'number' &&
									  r.textContent !== '' + s &&
									  (o.suppressHydrationWarning !== !0 && Or(r.textContent, s, e), (l = ['children', '' + s]))
								: Kn.hasOwnProperty(i) && s != null && i === 'onScroll' && V('scroll', r)
						}
					switch (n) {
						case 'input':
							_r(r), Hs(r, o, !0)
							break
						case 'textarea':
							_r(r), Ks(r)
							break
						case 'select':
						case 'option':
							break
						default:
							typeof o.onClick == 'function' && (r.onclick = yl)
					}
					;(r = l), (t.updateQueue = r), r !== null && (t.flags |= 4)
				} else {
					;(i = l.nodeType === 9 ? l : l.ownerDocument),
						e === 'http://www.w3.org/1999/xhtml' && (e = za(n)),
						e === 'http://www.w3.org/1999/xhtml'
							? n === 'script'
								? ((e = i.createElement('div')), (e.innerHTML = '<script></script>'), (e = e.removeChild(e.firstChild)))
								: typeof r.is == 'string'
								? (e = i.createElement(n, { is: r.is }))
								: ((e = i.createElement(n)),
								  n === 'select' && ((i = e), r.multiple ? (i.multiple = !0) : r.size && (i.size = r.size)))
							: (e = i.createElementNS(e, n)),
						(e[Be] = t),
						(e[rr] = r),
						cd(e, t, !1, !1),
						(t.stateNode = e)
					e: {
						switch (((i = Xo(n, r)), n)) {
							case 'dialog':
								V('cancel', e), V('close', e), (l = r)
								break
							case 'iframe':
							case 'object':
							case 'embed':
								V('load', e), (l = r)
								break
							case 'video':
							case 'audio':
								for (l = 0; l < In.length; l++) V(In[l], e)
								l = r
								break
							case 'source':
								V('error', e), (l = r)
								break
							case 'img':
							case 'image':
							case 'link':
								V('error', e), V('load', e), (l = r)
								break
							case 'details':
								V('toggle', e), (l = r)
								break
							case 'input':
								Ws(e, r), (l = bo(e, r)), V('invalid', e)
								break
							case 'option':
								l = r
								break
							case 'select':
								;(e._wrapperState = { wasMultiple: !!r.multiple }), (l = K({}, r, { value: void 0 })), V('invalid', e)
								break
							case 'textarea':
								Qs(e, r), (l = Qo(e, r)), V('invalid', e)
								break
							default:
								l = r
						}
						Yo(n, l), (s = l)
						for (o in s)
							if (s.hasOwnProperty(o)) {
								var a = s[o]
								o === 'style'
									? Ba(e, a)
									: o === 'dangerouslySetInnerHTML'
									? ((a = a ? a.__html : void 0), a != null && Ua(e, a))
									: o === 'children'
									? typeof a == 'string'
										? (n !== 'textarea' || a !== '') && Yn(e, a)
										: typeof a == 'number' && Yn(e, '' + a)
									: o !== 'suppressContentEditableWarning' &&
									  o !== 'suppressHydrationWarning' &&
									  o !== 'autoFocus' &&
									  (Kn.hasOwnProperty(o)
											? a != null && o === 'onScroll' && V('scroll', e)
											: a != null && bi(e, o, a, i))
							}
						switch (n) {
							case 'input':
								_r(e), Hs(e, r, !1)
								break
							case 'textarea':
								_r(e), Ks(e)
								break
							case 'option':
								r.value != null && e.setAttribute('value', '' + xt(r.value))
								break
							case 'select':
								;(e.multiple = !!r.multiple),
									(o = r.value),
									o != null
										? un(e, !!r.multiple, o, !1)
										: r.defaultValue != null && un(e, !!r.multiple, r.defaultValue, !0)
								break
							default:
								typeof l.onClick == 'function' && (e.onclick = yl)
						}
						switch (n) {
							case 'button':
							case 'input':
							case 'select':
							case 'textarea':
								r = !!r.autoFocus
								break e
							case 'img':
								r = !0
								break e
							default:
								r = !1
						}
					}
					r && (t.flags |= 4)
				}
				t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152))
			}
			return se(t), null
		case 6:
			if (e && t.stateNode != null) fd(e, t, e.memoizedProps, r)
			else {
				if (typeof r != 'string' && t.stateNode === null) throw Error(k(166))
				if (((n = Dt(or.current)), Dt(He.current), Fr(t))) {
					if (
						((r = t.stateNode), (n = t.memoizedProps), (r[Be] = t), (o = r.nodeValue !== n) && ((e = Se), e !== null))
					)
						switch (e.tag) {
							case 3:
								Or(r.nodeValue, n, (e.mode & 1) !== 0)
								break
							case 5:
								e.memoizedProps.suppressHydrationWarning !== !0 && Or(r.nodeValue, n, (e.mode & 1) !== 0)
						}
					o && (t.flags |= 4)
				} else (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)), (r[Be] = t), (t.stateNode = r)
			}
			return se(t), null
		case 13:
			if (
				(B(H), (r = t.memoizedState), e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
			) {
				if (b && we !== null && t.mode & 1 && !(t.flags & 128)) Pc(), vn(), (t.flags |= 98560), (o = !1)
				else if (((o = Fr(t)), r !== null && r.dehydrated !== null)) {
					if (e === null) {
						if (!o) throw Error(k(318))
						if (((o = t.memoizedState), (o = o !== null ? o.dehydrated : null), !o)) throw Error(k(317))
						o[Be] = t
					} else vn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4)
					se(t), (o = !1)
				} else Me !== null && (Pi(Me), (Me = null)), (o = !0)
				if (!o) return t.flags & 65536 ? t : null
			}
			return t.flags & 128
				? ((t.lanes = n), t)
				: ((r = r !== null),
				  r !== (e !== null && e.memoizedState !== null) &&
						r &&
						((t.child.flags |= 8192), t.mode & 1 && (e === null || H.current & 1 ? q === 0 && (q = 3) : Ns())),
				  t.updateQueue !== null && (t.flags |= 4),
				  se(t),
				  null)
		case 4:
			return yn(), Si(e, t), e === null && tr(t.stateNode.containerInfo), se(t), null
		case 10:
			return us(t.type._context), se(t), null
		case 17:
			return ge(t.type) && xl(), se(t), null
		case 19:
			if ((B(H), (o = t.memoizedState), o === null)) return se(t), null
			if (((r = (t.flags & 128) !== 0), (i = o.rendering), i === null))
				if (r) Dn(o, !1)
				else {
					if (q !== 0 || (e !== null && e.flags & 128))
						for (e = t.child; e !== null; ) {
							if (((i = _l(e)), i !== null)) {
								for (
									t.flags |= 128,
										Dn(o, !1),
										r = i.updateQueue,
										r !== null && ((t.updateQueue = r), (t.flags |= 4)),
										t.subtreeFlags = 0,
										r = n,
										n = t.child;
									n !== null;

								)
									(o = n),
										(e = r),
										(o.flags &= 14680066),
										(i = o.alternate),
										i === null
											? ((o.childLanes = 0),
											  (o.lanes = e),
											  (o.child = null),
											  (o.subtreeFlags = 0),
											  (o.memoizedProps = null),
											  (o.memoizedState = null),
											  (o.updateQueue = null),
											  (o.dependencies = null),
											  (o.stateNode = null))
											: ((o.childLanes = i.childLanes),
											  (o.lanes = i.lanes),
											  (o.child = i.child),
											  (o.subtreeFlags = 0),
											  (o.deletions = null),
											  (o.memoizedProps = i.memoizedProps),
											  (o.memoizedState = i.memoizedState),
											  (o.updateQueue = i.updateQueue),
											  (o.type = i.type),
											  (e = i.dependencies),
											  (o.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext })),
										(n = n.sibling)
								return U(H, (H.current & 1) | 2), t.child
							}
							e = e.sibling
						}
					o.tail !== null && G() > wn && ((t.flags |= 128), (r = !0), Dn(o, !1), (t.lanes = 4194304))
				}
			else {
				if (!r)
					if (((e = _l(i)), e !== null)) {
						if (
							((t.flags |= 128),
							(r = !0),
							(n = e.updateQueue),
							n !== null && ((t.updateQueue = n), (t.flags |= 4)),
							Dn(o, !0),
							o.tail === null && o.tailMode === 'hidden' && !i.alternate && !b)
						)
							return se(t), null
					} else
						2 * G() - o.renderingStartTime > wn &&
							n !== 1073741824 &&
							((t.flags |= 128), (r = !0), Dn(o, !1), (t.lanes = 4194304))
				o.isBackwards
					? ((i.sibling = t.child), (t.child = i))
					: ((n = o.last), n !== null ? (n.sibling = i) : (t.child = i), (o.last = i))
			}
			return o.tail !== null
				? ((t = o.tail),
				  (o.rendering = t),
				  (o.tail = t.sibling),
				  (o.renderingStartTime = G()),
				  (t.sibling = null),
				  (n = H.current),
				  U(H, r ? (n & 1) | 2 : n & 1),
				  t)
				: (se(t), null)
		case 22:
		case 23:
			return (
				ks(),
				(r = t.memoizedState !== null),
				e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
				r && t.mode & 1 ? xe & 1073741824 && (se(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : se(t),
				null
			)
		case 24:
			return null
		case 25:
			return null
	}
	throw Error(k(156, t.tag))
}
function am(e, t) {
	switch ((ls(t), t.tag)) {
		case 1:
			return ge(t.type) && xl(), (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
		case 3:
			return (
				yn(), B(ve), B(ae), ps(), (e = t.flags), e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
			)
		case 5:
			return fs(t), null
		case 13:
			if ((B(H), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
				if (t.alternate === null) throw Error(k(340))
				vn()
			}
			return (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
		case 19:
			return B(H), null
		case 4:
			return yn(), null
		case 10:
			return us(t.type._context), null
		case 22:
		case 23:
			return ks(), null
		case 24:
			return null
		default:
			return null
	}
}
var Ar = !1,
	ue = !1,
	cm = typeof WeakSet == 'function' ? WeakSet : Set,
	T = null
function ln(e, t) {
	var n = e.ref
	if (n !== null)
		if (typeof n == 'function')
			try {
				n(null)
			} catch (r) {
				Y(e, t, r)
			}
		else n.current = null
}
function Ei(e, t, n) {
	try {
		n()
	} catch (r) {
		Y(e, t, r)
	}
}
var Mu = !1
function dm(e, t) {
	if (((oi = hl), (e = vc()), ns(e))) {
		if ('selectionStart' in e) var n = { start: e.selectionStart, end: e.selectionEnd }
		else
			e: {
				n = ((n = e.ownerDocument) && n.defaultView) || window
				var r = n.getSelection && n.getSelection()
				if (r && r.rangeCount !== 0) {
					n = r.anchorNode
					var l = r.anchorOffset,
						o = r.focusNode
					r = r.focusOffset
					try {
						n.nodeType, o.nodeType
					} catch {
						n = null
						break e
					}
					var i = 0,
						s = -1,
						a = -1,
						d = 0,
						v = 0,
						h = e,
						g = null
					t: for (;;) {
						for (
							var x;
							h !== n || (l !== 0 && h.nodeType !== 3) || (s = i + l),
								h !== o || (r !== 0 && h.nodeType !== 3) || (a = i + r),
								h.nodeType === 3 && (i += h.nodeValue.length),
								(x = h.firstChild) !== null;

						)
							(g = h), (h = x)
						for (;;) {
							if (h === e) break t
							if ((g === n && ++d === l && (s = i), g === o && ++v === r && (a = i), (x = h.nextSibling) !== null))
								break
							;(h = g), (g = h.parentNode)
						}
						h = x
					}
					n = s === -1 || a === -1 ? null : { start: s, end: a }
				} else n = null
			}
		n = n || { start: 0, end: 0 }
	} else n = null
	for (ii = { focusedElem: e, selectionRange: n }, hl = !1, T = t; T !== null; )
		if (((t = T), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null)) (e.return = t), (T = e)
		else
			for (; T !== null; ) {
				t = T
				try {
					var S = t.alternate
					if (t.flags & 1024)
						switch (t.tag) {
							case 0:
							case 11:
							case 15:
								break
							case 1:
								if (S !== null) {
									var y = S.memoizedProps,
										C = S.memoizedState,
										f = t.stateNode,
										c = f.getSnapshotBeforeUpdate(t.elementType === t.type ? y : Oe(t.type, y), C)
									f.__reactInternalSnapshotBeforeUpdate = c
								}
								break
							case 3:
								var m = t.stateNode.containerInfo
								m.nodeType === 1
									? (m.textContent = '')
									: m.nodeType === 9 && m.documentElement && m.removeChild(m.documentElement)
								break
							case 5:
							case 6:
							case 4:
							case 17:
								break
							default:
								throw Error(k(163))
						}
				} catch (w) {
					Y(t, t.return, w)
				}
				if (((e = t.sibling), e !== null)) {
					;(e.return = t.return), (T = e)
					break
				}
				T = t.return
			}
	return (S = Mu), (Mu = !1), S
}
function Wn(e, t, n) {
	var r = t.updateQueue
	if (((r = r !== null ? r.lastEffect : null), r !== null)) {
		var l = (r = r.next)
		do {
			if ((l.tag & e) === e) {
				var o = l.destroy
				;(l.destroy = void 0), o !== void 0 && Ei(t, n, o)
			}
			l = l.next
		} while (l !== r)
	}
}
function Hl(e, t) {
	if (((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)) {
		var n = (t = t.next)
		do {
			if ((n.tag & e) === e) {
				var r = n.create
				n.destroy = r()
			}
			n = n.next
		} while (n !== t)
	}
}
function Ci(e) {
	var t = e.ref
	if (t !== null) {
		var n = e.stateNode
		switch (e.tag) {
			case 5:
				e = n
				break
			default:
				e = n
		}
		typeof t == 'function' ? t(e) : (t.current = e)
	}
}
function pd(e) {
	var t = e.alternate
	t !== null && ((e.alternate = null), pd(t)),
		(e.child = null),
		(e.deletions = null),
		(e.sibling = null),
		e.tag === 5 &&
			((t = e.stateNode), t !== null && (delete t[Be], delete t[rr], delete t[ai], delete t[Kp], delete t[Yp])),
		(e.stateNode = null),
		(e.return = null),
		(e.dependencies = null),
		(e.memoizedProps = null),
		(e.memoizedState = null),
		(e.pendingProps = null),
		(e.stateNode = null),
		(e.updateQueue = null)
}
function md(e) {
	return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function Iu(e) {
	e: for (;;) {
		for (; e.sibling === null; ) {
			if (e.return === null || md(e.return)) return null
			e = e.return
		}
		for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
			if (e.flags & 2 || e.child === null || e.tag === 4) continue e
			;(e.child.return = e), (e = e.child)
		}
		if (!(e.flags & 2)) return e.stateNode
	}
}
function ki(e, t, n) {
	var r = e.tag
	if (r === 5 || r === 6)
		(e = e.stateNode),
			t
				? n.nodeType === 8
					? n.parentNode.insertBefore(e, t)
					: n.insertBefore(e, t)
				: (n.nodeType === 8 ? ((t = n.parentNode), t.insertBefore(e, n)) : ((t = n), t.appendChild(e)),
				  (n = n._reactRootContainer),
				  n != null || t.onclick !== null || (t.onclick = yl))
	else if (r !== 4 && ((e = e.child), e !== null))
		for (ki(e, t, n), e = e.sibling; e !== null; ) ki(e, t, n), (e = e.sibling)
}
function Ni(e, t, n) {
	var r = e.tag
	if (r === 5 || r === 6) (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e)
	else if (r !== 4 && ((e = e.child), e !== null))
		for (Ni(e, t, n), e = e.sibling; e !== null; ) Ni(e, t, n), (e = e.sibling)
}
var re = null,
	Fe = !1
function rt(e, t, n) {
	for (n = n.child; n !== null; ) hd(e, t, n), (n = n.sibling)
}
function hd(e, t, n) {
	if (We && typeof We.onCommitFiberUnmount == 'function')
		try {
			We.onCommitFiberUnmount(Il, n)
		} catch {}
	switch (n.tag) {
		case 5:
			ue || ln(n, t)
		case 6:
			var r = re,
				l = Fe
			;(re = null),
				rt(e, t, n),
				(re = r),
				(Fe = l),
				re !== null &&
					(Fe
						? ((e = re), (n = n.stateNode), e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
						: re.removeChild(n.stateNode))
			break
		case 18:
			re !== null &&
				(Fe
					? ((e = re), (n = n.stateNode), e.nodeType === 8 ? xo(e.parentNode, n) : e.nodeType === 1 && xo(e, n), Jn(e))
					: xo(re, n.stateNode))
			break
		case 4:
			;(r = re), (l = Fe), (re = n.stateNode.containerInfo), (Fe = !0), rt(e, t, n), (re = r), (Fe = l)
			break
		case 0:
		case 11:
		case 14:
		case 15:
			if (!ue && ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))) {
				l = r = r.next
				do {
					var o = l,
						i = o.destroy
					;(o = o.tag), i !== void 0 && (o & 2 || o & 4) && Ei(n, t, i), (l = l.next)
				} while (l !== r)
			}
			rt(e, t, n)
			break
		case 1:
			if (!ue && (ln(n, t), (r = n.stateNode), typeof r.componentWillUnmount == 'function'))
				try {
					;(r.props = n.memoizedProps), (r.state = n.memoizedState), r.componentWillUnmount()
				} catch (s) {
					Y(n, t, s)
				}
			rt(e, t, n)
			break
		case 21:
			rt(e, t, n)
			break
		case 22:
			n.mode & 1 ? ((ue = (r = ue) || n.memoizedState !== null), rt(e, t, n), (ue = r)) : rt(e, t, n)
			break
		default:
			rt(e, t, n)
	}
}
function Au(e) {
	var t = e.updateQueue
	if (t !== null) {
		e.updateQueue = null
		var n = e.stateNode
		n === null && (n = e.stateNode = new cm()),
			t.forEach(function (r) {
				var l = wm.bind(null, e, r)
				n.has(r) || (n.add(r), r.then(l, l))
			})
	}
}
function Le(e, t) {
	var n = t.deletions
	if (n !== null)
		for (var r = 0; r < n.length; r++) {
			var l = n[r]
			try {
				var o = e,
					i = t,
					s = i
				e: for (; s !== null; ) {
					switch (s.tag) {
						case 5:
							;(re = s.stateNode), (Fe = !1)
							break e
						case 3:
							;(re = s.stateNode.containerInfo), (Fe = !0)
							break e
						case 4:
							;(re = s.stateNode.containerInfo), (Fe = !0)
							break e
					}
					s = s.return
				}
				if (re === null) throw Error(k(160))
				hd(o, i, l), (re = null), (Fe = !1)
				var a = l.alternate
				a !== null && (a.return = null), (l.return = null)
			} catch (d) {
				Y(l, t, d)
			}
		}
	if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) vd(t, e), (t = t.sibling)
}
function vd(e, t) {
	var n = e.alternate,
		r = e.flags
	switch (e.tag) {
		case 0:
		case 11:
		case 14:
		case 15:
			if ((Le(t, e), Ue(e), r & 4)) {
				try {
					Wn(3, e, e.return), Hl(3, e)
				} catch (y) {
					Y(e, e.return, y)
				}
				try {
					Wn(5, e, e.return)
				} catch (y) {
					Y(e, e.return, y)
				}
			}
			break
		case 1:
			Le(t, e), Ue(e), r & 512 && n !== null && ln(n, n.return)
			break
		case 5:
			if ((Le(t, e), Ue(e), r & 512 && n !== null && ln(n, n.return), e.flags & 32)) {
				var l = e.stateNode
				try {
					Yn(l, '')
				} catch (y) {
					Y(e, e.return, y)
				}
			}
			if (r & 4 && ((l = e.stateNode), l != null)) {
				var o = e.memoizedProps,
					i = n !== null ? n.memoizedProps : o,
					s = e.type,
					a = e.updateQueue
				if (((e.updateQueue = null), a !== null))
					try {
						s === 'input' && o.type === 'radio' && o.name != null && Ia(l, o), Xo(s, i)
						var d = Xo(s, o)
						for (i = 0; i < a.length; i += 2) {
							var v = a[i],
								h = a[i + 1]
							v === 'style'
								? Ba(l, h)
								: v === 'dangerouslySetInnerHTML'
								? Ua(l, h)
								: v === 'children'
								? Yn(l, h)
								: bi(l, v, h, d)
						}
						switch (s) {
							case 'input':
								Wo(l, o)
								break
							case 'textarea':
								Aa(l, o)
								break
							case 'select':
								var g = l._wrapperState.wasMultiple
								l._wrapperState.wasMultiple = !!o.multiple
								var x = o.value
								x != null
									? un(l, !!o.multiple, x, !1)
									: g !== !!o.multiple &&
									  (o.defaultValue != null
											? un(l, !!o.multiple, o.defaultValue, !0)
											: un(l, !!o.multiple, o.multiple ? [] : '', !1))
						}
						l[rr] = o
					} catch (y) {
						Y(e, e.return, y)
					}
			}
			break
		case 6:
			if ((Le(t, e), Ue(e), r & 4)) {
				if (e.stateNode === null) throw Error(k(162))
				;(l = e.stateNode), (o = e.memoizedProps)
				try {
					l.nodeValue = o
				} catch (y) {
					Y(e, e.return, y)
				}
			}
			break
		case 3:
			if ((Le(t, e), Ue(e), r & 4 && n !== null && n.memoizedState.isDehydrated))
				try {
					Jn(t.containerInfo)
				} catch (y) {
					Y(e, e.return, y)
				}
			break
		case 4:
			Le(t, e), Ue(e)
			break
		case 13:
			Le(t, e),
				Ue(e),
				(l = e.child),
				l.flags & 8192 &&
					((o = l.memoizedState !== null),
					(l.stateNode.isHidden = o),
					!o || (l.alternate !== null && l.alternate.memoizedState !== null) || (Es = G())),
				r & 4 && Au(e)
			break
		case 22:
			if (
				((v = n !== null && n.memoizedState !== null),
				e.mode & 1 ? ((ue = (d = ue) || v), Le(t, e), (ue = d)) : Le(t, e),
				Ue(e),
				r & 8192)
			) {
				if (((d = e.memoizedState !== null), (e.stateNode.isHidden = d) && !v && e.mode & 1))
					for (T = e, v = e.child; v !== null; ) {
						for (h = T = v; T !== null; ) {
							switch (((g = T), (x = g.child), g.tag)) {
								case 0:
								case 11:
								case 14:
								case 15:
									Wn(4, g, g.return)
									break
								case 1:
									ln(g, g.return)
									var S = g.stateNode
									if (typeof S.componentWillUnmount == 'function') {
										;(r = g), (n = g.return)
										try {
											;(t = r), (S.props = t.memoizedProps), (S.state = t.memoizedState), S.componentWillUnmount()
										} catch (y) {
											Y(r, n, y)
										}
									}
									break
								case 5:
									ln(g, g.return)
									break
								case 22:
									if (g.memoizedState !== null) {
										Uu(h)
										continue
									}
							}
							x !== null ? ((x.return = g), (T = x)) : Uu(h)
						}
						v = v.sibling
					}
				e: for (v = null, h = e; ; ) {
					if (h.tag === 5) {
						if (v === null) {
							v = h
							try {
								;(l = h.stateNode),
									d
										? ((o = l.style),
										  typeof o.setProperty == 'function'
												? o.setProperty('display', 'none', 'important')
												: (o.display = 'none'))
										: ((s = h.stateNode),
										  (a = h.memoizedProps.style),
										  (i = a != null && a.hasOwnProperty('display') ? a.display : null),
										  (s.style.display = Va('display', i)))
							} catch (y) {
								Y(e, e.return, y)
							}
						}
					} else if (h.tag === 6) {
						if (v === null)
							try {
								h.stateNode.nodeValue = d ? '' : h.memoizedProps
							} catch (y) {
								Y(e, e.return, y)
							}
					} else if (((h.tag !== 22 && h.tag !== 23) || h.memoizedState === null || h === e) && h.child !== null) {
						;(h.child.return = h), (h = h.child)
						continue
					}
					if (h === e) break e
					for (; h.sibling === null; ) {
						if (h.return === null || h.return === e) break e
						v === h && (v = null), (h = h.return)
					}
					v === h && (v = null), (h.sibling.return = h.return), (h = h.sibling)
				}
			}
			break
		case 19:
			Le(t, e), Ue(e), r & 4 && Au(e)
			break
		case 21:
			break
		default:
			Le(t, e), Ue(e)
	}
}
function Ue(e) {
	var t = e.flags
	if (t & 2) {
		try {
			e: {
				for (var n = e.return; n !== null; ) {
					if (md(n)) {
						var r = n
						break e
					}
					n = n.return
				}
				throw Error(k(160))
			}
			switch (r.tag) {
				case 5:
					var l = r.stateNode
					r.flags & 32 && (Yn(l, ''), (r.flags &= -33))
					var o = Iu(e)
					Ni(e, o, l)
					break
				case 3:
				case 4:
					var i = r.stateNode.containerInfo,
						s = Iu(e)
					ki(e, s, i)
					break
				default:
					throw Error(k(161))
			}
		} catch (a) {
			Y(e, e.return, a)
		}
		e.flags &= -3
	}
	t & 4096 && (e.flags &= -4097)
}
function fm(e, t, n) {
	;(T = e), gd(e)
}
function gd(e, t, n) {
	for (var r = (e.mode & 1) !== 0; T !== null; ) {
		var l = T,
			o = l.child
		if (l.tag === 22 && r) {
			var i = l.memoizedState !== null || Ar
			if (!i) {
				var s = l.alternate,
					a = (s !== null && s.memoizedState !== null) || ue
				s = Ar
				var d = ue
				if (((Ar = i), (ue = a) && !d))
					for (T = l; T !== null; )
						(i = T),
							(a = i.child),
							i.tag === 22 && i.memoizedState !== null ? Vu(l) : a !== null ? ((a.return = i), (T = a)) : Vu(l)
				for (; o !== null; ) (T = o), gd(o), (o = o.sibling)
				;(T = l), (Ar = s), (ue = d)
			}
			zu(e)
		} else l.subtreeFlags & 8772 && o !== null ? ((o.return = l), (T = o)) : zu(e)
	}
}
function zu(e) {
	for (; T !== null; ) {
		var t = T
		if (t.flags & 8772) {
			var n = t.alternate
			try {
				if (t.flags & 8772)
					switch (t.tag) {
						case 0:
						case 11:
						case 15:
							ue || Hl(5, t)
							break
						case 1:
							var r = t.stateNode
							if (t.flags & 4 && !ue)
								if (n === null) r.componentDidMount()
								else {
									var l = t.elementType === t.type ? n.memoizedProps : Oe(t.type, n.memoizedProps)
									r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
								}
							var o = t.updateQueue
							o !== null && Eu(t, o, r)
							break
						case 3:
							var i = t.updateQueue
							if (i !== null) {
								if (((n = null), t.child !== null))
									switch (t.child.tag) {
										case 5:
											n = t.child.stateNode
											break
										case 1:
											n = t.child.stateNode
									}
								Eu(t, i, n)
							}
							break
						case 5:
							var s = t.stateNode
							if (n === null && t.flags & 4) {
								n = s
								var a = t.memoizedProps
								switch (t.type) {
									case 'button':
									case 'input':
									case 'select':
									case 'textarea':
										a.autoFocus && n.focus()
										break
									case 'img':
										a.src && (n.src = a.src)
								}
							}
							break
						case 6:
							break
						case 4:
							break
						case 12:
							break
						case 13:
							if (t.memoizedState === null) {
								var d = t.alternate
								if (d !== null) {
									var v = d.memoizedState
									if (v !== null) {
										var h = v.dehydrated
										h !== null && Jn(h)
									}
								}
							}
							break
						case 19:
						case 17:
						case 21:
						case 22:
						case 23:
						case 25:
							break
						default:
							throw Error(k(163))
					}
				ue || (t.flags & 512 && Ci(t))
			} catch (g) {
				Y(t, t.return, g)
			}
		}
		if (t === e) {
			T = null
			break
		}
		if (((n = t.sibling), n !== null)) {
			;(n.return = t.return), (T = n)
			break
		}
		T = t.return
	}
}
function Uu(e) {
	for (; T !== null; ) {
		var t = T
		if (t === e) {
			T = null
			break
		}
		var n = t.sibling
		if (n !== null) {
			;(n.return = t.return), (T = n)
			break
		}
		T = t.return
	}
}
function Vu(e) {
	for (; T !== null; ) {
		var t = T
		try {
			switch (t.tag) {
				case 0:
				case 11:
				case 15:
					var n = t.return
					try {
						Hl(4, t)
					} catch (a) {
						Y(t, n, a)
					}
					break
				case 1:
					var r = t.stateNode
					if (typeof r.componentDidMount == 'function') {
						var l = t.return
						try {
							r.componentDidMount()
						} catch (a) {
							Y(t, l, a)
						}
					}
					var o = t.return
					try {
						Ci(t)
					} catch (a) {
						Y(t, o, a)
					}
					break
				case 5:
					var i = t.return
					try {
						Ci(t)
					} catch (a) {
						Y(t, i, a)
					}
			}
		} catch (a) {
			Y(t, t.return, a)
		}
		if (t === e) {
			T = null
			break
		}
		var s = t.sibling
		if (s !== null) {
			;(s.return = t.return), (T = s)
			break
		}
		T = t.return
	}
}
var pm = Math.ceil,
	Pl = nt.ReactCurrentDispatcher,
	ws = nt.ReactCurrentOwner,
	Pe = nt.ReactCurrentBatchConfig,
	I = 0,
	ne = null,
	Z = null,
	le = 0,
	xe = 0,
	on = Et(0),
	q = 0,
	ar = null,
	zt = 0,
	Ql = 0,
	Ss = 0,
	Hn = null,
	me = null,
	Es = 0,
	wn = 1 / 0,
	Ke = null,
	Tl = !1,
	_i = null,
	vt = null,
	zr = !1,
	ct = null,
	Rl = 0,
	Qn = 0,
	ji = null,
	ll = -1,
	ol = 0
function de() {
	return I & 6 ? G() : ll !== -1 ? ll : (ll = G())
}
function gt(e) {
	return e.mode & 1
		? I & 2 && le !== 0
			? le & -le
			: Gp.transition !== null
			? (ol === 0 && (ol = ec()), ol)
			: ((e = z), e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : sc(e.type))), e)
		: 1
}
function Ae(e, t, n, r) {
	if (50 < Qn) throw ((Qn = 0), (ji = null), Error(k(185)))
	yr(e, n, r),
		(!(I & 2) || e !== ne) &&
			(e === ne && (!(I & 2) && (Ql |= n), q === 4 && ut(e, le)),
			ye(e, r),
			n === 1 && I === 0 && !(t.mode & 1) && ((wn = G() + 500), Bl && Ct()))
}
function ye(e, t) {
	var n = e.callbackNode
	Gf(e, t)
	var r = ml(e, e === ne ? le : 0)
	if (r === 0) n !== null && Gs(n), (e.callbackNode = null), (e.callbackPriority = 0)
	else if (((t = r & -r), e.callbackPriority !== t)) {
		if ((n != null && Gs(n), t === 1))
			e.tag === 0 ? Xp(Bu.bind(null, e)) : _c(Bu.bind(null, e)),
				Hp(function () {
					!(I & 6) && Ct()
				}),
				(n = null)
		else {
			switch (tc(r)) {
				case 1:
					n = Yi
					break
				case 4:
					n = Ja
					break
				case 16:
					n = pl
					break
				case 536870912:
					n = qa
					break
				default:
					n = pl
			}
			n = Nd(n, yd.bind(null, e))
		}
		;(e.callbackPriority = t), (e.callbackNode = n)
	}
}
function yd(e, t) {
	if (((ll = -1), (ol = 0), I & 6)) throw Error(k(327))
	var n = e.callbackNode
	if (pn() && e.callbackNode !== n) return null
	var r = ml(e, e === ne ? le : 0)
	if (r === 0) return null
	if (r & 30 || r & e.expiredLanes || t) t = Dl(e, r)
	else {
		t = r
		var l = I
		I |= 2
		var o = wd()
		;(ne !== e || le !== t) && ((Ke = null), (wn = G() + 500), Ot(e, t))
		do
			try {
				vm()
				break
			} catch (s) {
				xd(e, s)
			}
		while (1)
		ss(), (Pl.current = o), (I = l), Z !== null ? (t = 0) : ((ne = null), (le = 0), (t = q))
	}
	if (t !== 0) {
		if ((t === 2 && ((l = ei(e)), l !== 0 && ((r = l), (t = $i(e, l)))), t === 1))
			throw ((n = ar), Ot(e, 0), ut(e, r), ye(e, G()), n)
		if (t === 6) ut(e, r)
		else {
			if (
				((l = e.current.alternate),
				!(r & 30) &&
					!mm(l) &&
					((t = Dl(e, r)), t === 2 && ((o = ei(e)), o !== 0 && ((r = o), (t = $i(e, o)))), t === 1))
			)
				throw ((n = ar), Ot(e, 0), ut(e, r), ye(e, G()), n)
			switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
				case 0:
				case 1:
					throw Error(k(345))
				case 2:
					Pt(e, me, Ke)
					break
				case 3:
					if ((ut(e, r), (r & 130023424) === r && ((t = Es + 500 - G()), 10 < t))) {
						if (ml(e, 0) !== 0) break
						if (((l = e.suspendedLanes), (l & r) !== r)) {
							de(), (e.pingedLanes |= e.suspendedLanes & l)
							break
						}
						e.timeoutHandle = ui(Pt.bind(null, e, me, Ke), t)
						break
					}
					Pt(e, me, Ke)
					break
				case 4:
					if ((ut(e, r), (r & 4194240) === r)) break
					for (t = e.eventTimes, l = -1; 0 < r; ) {
						var i = 31 - Ie(r)
						;(o = 1 << i), (i = t[i]), i > l && (l = i), (r &= ~o)
					}
					if (
						((r = l),
						(r = G() - r),
						(r =
							(120 > r
								? 120
								: 480 > r
								? 480
								: 1080 > r
								? 1080
								: 1920 > r
								? 1920
								: 3e3 > r
								? 3e3
								: 4320 > r
								? 4320
								: 1960 * pm(r / 1960)) - r),
						10 < r)
					) {
						e.timeoutHandle = ui(Pt.bind(null, e, me, Ke), r)
						break
					}
					Pt(e, me, Ke)
					break
				case 5:
					Pt(e, me, Ke)
					break
				default:
					throw Error(k(329))
			}
		}
	}
	return ye(e, G()), e.callbackNode === n ? yd.bind(null, e) : null
}
function $i(e, t) {
	var n = Hn
	return (
		e.current.memoizedState.isDehydrated && (Ot(e, t).flags |= 256),
		(e = Dl(e, t)),
		e !== 2 && ((t = me), (me = n), t !== null && Pi(t)),
		e
	)
}
function Pi(e) {
	me === null ? (me = e) : me.push.apply(me, e)
}
function mm(e) {
	for (var t = e; ; ) {
		if (t.flags & 16384) {
			var n = t.updateQueue
			if (n !== null && ((n = n.stores), n !== null))
				for (var r = 0; r < n.length; r++) {
					var l = n[r],
						o = l.getSnapshot
					l = l.value
					try {
						if (!ze(o(), l)) return !1
					} catch {
						return !1
					}
				}
		}
		if (((n = t.child), t.subtreeFlags & 16384 && n !== null)) (n.return = t), (t = n)
		else {
			if (t === e) break
			for (; t.sibling === null; ) {
				if (t.return === null || t.return === e) return !0
				t = t.return
			}
			;(t.sibling.return = t.return), (t = t.sibling)
		}
	}
	return !0
}
function ut(e, t) {
	for (t &= ~Ss, t &= ~Ql, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
		var n = 31 - Ie(t),
			r = 1 << n
		;(e[n] = -1), (t &= ~r)
	}
}
function Bu(e) {
	if (I & 6) throw Error(k(327))
	pn()
	var t = ml(e, 0)
	if (!(t & 1)) return ye(e, G()), null
	var n = Dl(e, t)
	if (e.tag !== 0 && n === 2) {
		var r = ei(e)
		r !== 0 && ((t = r), (n = $i(e, r)))
	}
	if (n === 1) throw ((n = ar), Ot(e, 0), ut(e, t), ye(e, G()), n)
	if (n === 6) throw Error(k(345))
	return (e.finishedWork = e.current.alternate), (e.finishedLanes = t), Pt(e, me, Ke), ye(e, G()), null
}
function Cs(e, t) {
	var n = I
	I |= 1
	try {
		return e(t)
	} finally {
		;(I = n), I === 0 && ((wn = G() + 500), Bl && Ct())
	}
}
function Ut(e) {
	ct !== null && ct.tag === 0 && !(I & 6) && pn()
	var t = I
	I |= 1
	var n = Pe.transition,
		r = z
	try {
		if (((Pe.transition = null), (z = 1), e)) return e()
	} finally {
		;(z = r), (Pe.transition = n), (I = t), !(I & 6) && Ct()
	}
}
function ks() {
	;(xe = on.current), B(on)
}
function Ot(e, t) {
	;(e.finishedWork = null), (e.finishedLanes = 0)
	var n = e.timeoutHandle
	if ((n !== -1 && ((e.timeoutHandle = -1), Wp(n)), Z !== null))
		for (n = Z.return; n !== null; ) {
			var r = n
			switch ((ls(r), r.tag)) {
				case 1:
					;(r = r.type.childContextTypes), r != null && xl()
					break
				case 3:
					yn(), B(ve), B(ae), ps()
					break
				case 5:
					fs(r)
					break
				case 4:
					yn()
					break
				case 13:
					B(H)
					break
				case 19:
					B(H)
					break
				case 10:
					us(r.type._context)
					break
				case 22:
				case 23:
					ks()
			}
			n = n.return
		}
	if (
		((ne = e),
		(Z = e = yt(e.current, null)),
		(le = xe = t),
		(q = 0),
		(ar = null),
		(Ss = Ql = zt = 0),
		(me = Hn = null),
		Rt !== null)
	) {
		for (t = 0; t < Rt.length; t++)
			if (((n = Rt[t]), (r = n.interleaved), r !== null)) {
				n.interleaved = null
				var l = r.next,
					o = n.pending
				if (o !== null) {
					var i = o.next
					;(o.next = l), (r.next = i)
				}
				n.pending = r
			}
		Rt = null
	}
	return e
}
function xd(e, t) {
	do {
		var n = Z
		try {
			if ((ss(), (tl.current = $l), jl)) {
				for (var r = Q.memoizedState; r !== null; ) {
					var l = r.queue
					l !== null && (l.pending = null), (r = r.next)
				}
				jl = !1
			}
			if (((At = 0), (te = J = Q = null), (bn = !1), (ir = 0), (ws.current = null), n === null || n.return === null)) {
				;(q = 1), (ar = t), (Z = null)
				break
			}
			e: {
				var o = e,
					i = n.return,
					s = n,
					a = t
				if (((t = le), (s.flags |= 32768), a !== null && typeof a == 'object' && typeof a.then == 'function')) {
					var d = a,
						v = s,
						h = v.tag
					if (!(v.mode & 1) && (h === 0 || h === 11 || h === 15)) {
						var g = v.alternate
						g
							? ((v.updateQueue = g.updateQueue), (v.memoizedState = g.memoizedState), (v.lanes = g.lanes))
							: ((v.updateQueue = null), (v.memoizedState = null))
					}
					var x = Pu(i)
					if (x !== null) {
						;(x.flags &= -257), Tu(x, i, s, o, t), x.mode & 1 && $u(o, d, t), (t = x), (a = d)
						var S = t.updateQueue
						if (S === null) {
							var y = new Set()
							y.add(a), (t.updateQueue = y)
						} else S.add(a)
						break e
					} else {
						if (!(t & 1)) {
							$u(o, d, t), Ns()
							break e
						}
						a = Error(k(426))
					}
				} else if (b && s.mode & 1) {
					var C = Pu(i)
					if (C !== null) {
						!(C.flags & 65536) && (C.flags |= 256), Tu(C, i, s, o, t), os(xn(a, s))
						break e
					}
				}
				;(o = a = xn(a, s)), q !== 4 && (q = 2), Hn === null ? (Hn = [o]) : Hn.push(o), (o = i)
				do {
					switch (o.tag) {
						case 3:
							;(o.flags |= 65536), (t &= -t), (o.lanes |= t)
							var f = nd(o, a, t)
							Su(o, f)
							break e
						case 1:
							s = a
							var c = o.type,
								m = o.stateNode
							if (
								!(o.flags & 128) &&
								(typeof c.getDerivedStateFromError == 'function' ||
									(m !== null && typeof m.componentDidCatch == 'function' && (vt === null || !vt.has(m))))
							) {
								;(o.flags |= 65536), (t &= -t), (o.lanes |= t)
								var w = rd(o, s, t)
								Su(o, w)
								break e
							}
					}
					o = o.return
				} while (o !== null)
			}
			Ed(n)
		} catch (E) {
			;(t = E), Z === n && n !== null && (Z = n = n.return)
			continue
		}
		break
	} while (1)
}
function wd() {
	var e = Pl.current
	return (Pl.current = $l), e === null ? $l : e
}
function Ns() {
	;(q === 0 || q === 3 || q === 2) && (q = 4), ne === null || (!(zt & 268435455) && !(Ql & 268435455)) || ut(ne, le)
}
function Dl(e, t) {
	var n = I
	I |= 2
	var r = wd()
	;(ne !== e || le !== t) && ((Ke = null), Ot(e, t))
	do
		try {
			hm()
			break
		} catch (l) {
			xd(e, l)
		}
	while (1)
	if ((ss(), (I = n), (Pl.current = r), Z !== null)) throw Error(k(261))
	return (ne = null), (le = 0), q
}
function hm() {
	for (; Z !== null; ) Sd(Z)
}
function vm() {
	for (; Z !== null && !Vf(); ) Sd(Z)
}
function Sd(e) {
	var t = kd(e.alternate, e, xe)
	;(e.memoizedProps = e.pendingProps), t === null ? Ed(e) : (Z = t), (ws.current = null)
}
function Ed(e) {
	var t = e
	do {
		var n = t.alternate
		if (((e = t.return), t.flags & 32768)) {
			if (((n = am(n, t)), n !== null)) {
				;(n.flags &= 32767), (Z = n)
				return
			}
			if (e !== null) (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null)
			else {
				;(q = 6), (Z = null)
				return
			}
		} else if (((n = um(n, t, xe)), n !== null)) {
			Z = n
			return
		}
		if (((t = t.sibling), t !== null)) {
			Z = t
			return
		}
		Z = t = e
	} while (t !== null)
	q === 0 && (q = 5)
}
function Pt(e, t, n) {
	var r = z,
		l = Pe.transition
	try {
		;(Pe.transition = null), (z = 1), gm(e, t, n, r)
	} finally {
		;(Pe.transition = l), (z = r)
	}
	return null
}
function gm(e, t, n, r) {
	do pn()
	while (ct !== null)
	if (I & 6) throw Error(k(327))
	n = e.finishedWork
	var l = e.finishedLanes
	if (n === null) return null
	if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current)) throw Error(k(177))
	;(e.callbackNode = null), (e.callbackPriority = 0)
	var o = n.lanes | n.childLanes
	if (
		(Zf(e, o),
		e === ne && ((Z = ne = null), (le = 0)),
		(!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
			zr ||
			((zr = !0),
			Nd(pl, function () {
				return pn(), null
			})),
		(o = (n.flags & 15990) !== 0),
		n.subtreeFlags & 15990 || o)
	) {
		;(o = Pe.transition), (Pe.transition = null)
		var i = z
		z = 1
		var s = I
		;(I |= 4),
			(ws.current = null),
			dm(e, n),
			vd(n, e),
			Ip(ii),
			(hl = !!oi),
			(ii = oi = null),
			(e.current = n),
			fm(n),
			Bf(),
			(I = s),
			(z = i),
			(Pe.transition = o)
	} else e.current = n
	if (
		(zr && ((zr = !1), (ct = e), (Rl = l)),
		(o = e.pendingLanes),
		o === 0 && (vt = null),
		Hf(n.stateNode),
		ye(e, G()),
		t !== null)
	)
		for (r = e.onRecoverableError, n = 0; n < t.length; n++)
			(l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest })
	if (Tl) throw ((Tl = !1), (e = _i), (_i = null), e)
	return (
		Rl & 1 && e.tag !== 0 && pn(),
		(o = e.pendingLanes),
		o & 1 ? (e === ji ? Qn++ : ((Qn = 0), (ji = e))) : (Qn = 0),
		Ct(),
		null
	)
}
function pn() {
	if (ct !== null) {
		var e = tc(Rl),
			t = Pe.transition,
			n = z
		try {
			if (((Pe.transition = null), (z = 16 > e ? 16 : e), ct === null)) var r = !1
			else {
				if (((e = ct), (ct = null), (Rl = 0), I & 6)) throw Error(k(331))
				var l = I
				for (I |= 4, T = e.current; T !== null; ) {
					var o = T,
						i = o.child
					if (T.flags & 16) {
						var s = o.deletions
						if (s !== null) {
							for (var a = 0; a < s.length; a++) {
								var d = s[a]
								for (T = d; T !== null; ) {
									var v = T
									switch (v.tag) {
										case 0:
										case 11:
										case 15:
											Wn(8, v, o)
									}
									var h = v.child
									if (h !== null) (h.return = v), (T = h)
									else
										for (; T !== null; ) {
											v = T
											var g = v.sibling,
												x = v.return
											if ((pd(v), v === d)) {
												T = null
												break
											}
											if (g !== null) {
												;(g.return = x), (T = g)
												break
											}
											T = x
										}
								}
							}
							var S = o.alternate
							if (S !== null) {
								var y = S.child
								if (y !== null) {
									S.child = null
									do {
										var C = y.sibling
										;(y.sibling = null), (y = C)
									} while (y !== null)
								}
							}
							T = o
						}
					}
					if (o.subtreeFlags & 2064 && i !== null) (i.return = o), (T = i)
					else
						e: for (; T !== null; ) {
							if (((o = T), o.flags & 2048))
								switch (o.tag) {
									case 0:
									case 11:
									case 15:
										Wn(9, o, o.return)
								}
							var f = o.sibling
							if (f !== null) {
								;(f.return = o.return), (T = f)
								break e
							}
							T = o.return
						}
				}
				var c = e.current
				for (T = c; T !== null; ) {
					i = T
					var m = i.child
					if (i.subtreeFlags & 2064 && m !== null) (m.return = i), (T = m)
					else
						e: for (i = c; T !== null; ) {
							if (((s = T), s.flags & 2048))
								try {
									switch (s.tag) {
										case 0:
										case 11:
										case 15:
											Hl(9, s)
									}
								} catch (E) {
									Y(s, s.return, E)
								}
							if (s === i) {
								T = null
								break e
							}
							var w = s.sibling
							if (w !== null) {
								;(w.return = s.return), (T = w)
								break e
							}
							T = s.return
						}
				}
				if (((I = l), Ct(), We && typeof We.onPostCommitFiberRoot == 'function'))
					try {
						We.onPostCommitFiberRoot(Il, e)
					} catch {}
				r = !0
			}
			return r
		} finally {
			;(z = n), (Pe.transition = t)
		}
	}
	return !1
}
function bu(e, t, n) {
	;(t = xn(n, t)), (t = nd(e, t, 1)), (e = ht(e, t, 1)), (t = de()), e !== null && (yr(e, 1, t), ye(e, t))
}
function Y(e, t, n) {
	if (e.tag === 3) bu(e, e, n)
	else
		for (; t !== null; ) {
			if (t.tag === 3) {
				bu(t, e, n)
				break
			} else if (t.tag === 1) {
				var r = t.stateNode
				if (
					typeof t.type.getDerivedStateFromError == 'function' ||
					(typeof r.componentDidCatch == 'function' && (vt === null || !vt.has(r)))
				) {
					;(e = xn(n, e)), (e = rd(t, e, 1)), (t = ht(t, e, 1)), (e = de()), t !== null && (yr(t, 1, e), ye(t, e))
					break
				}
			}
			t = t.return
		}
}
function ym(e, t, n) {
	var r = e.pingCache
	r !== null && r.delete(t),
		(t = de()),
		(e.pingedLanes |= e.suspendedLanes & n),
		ne === e &&
			(le & n) === n &&
			(q === 4 || (q === 3 && (le & 130023424) === le && 500 > G() - Es) ? Ot(e, 0) : (Ss |= n)),
		ye(e, t)
}
function Cd(e, t) {
	t === 0 && (e.mode & 1 ? ((t = Pr), (Pr <<= 1), !(Pr & 130023424) && (Pr = 4194304)) : (t = 1))
	var n = de()
	;(e = et(e, t)), e !== null && (yr(e, t, n), ye(e, n))
}
function xm(e) {
	var t = e.memoizedState,
		n = 0
	t !== null && (n = t.retryLane), Cd(e, n)
}
function wm(e, t) {
	var n = 0
	switch (e.tag) {
		case 13:
			var r = e.stateNode,
				l = e.memoizedState
			l !== null && (n = l.retryLane)
			break
		case 19:
			r = e.stateNode
			break
		default:
			throw Error(k(314))
	}
	r !== null && r.delete(t), Cd(e, n)
}
var kd
kd = function (e, t, n) {
	if (e !== null)
		if (e.memoizedProps !== t.pendingProps || ve.current) he = !0
		else {
			if (!(e.lanes & n) && !(t.flags & 128)) return (he = !1), sm(e, t, n)
			he = !!(e.flags & 131072)
		}
	else (he = !1), b && t.flags & 1048576 && jc(t, El, t.index)
	switch (((t.lanes = 0), t.tag)) {
		case 2:
			var r = t.type
			rl(e, t), (e = t.pendingProps)
			var l = hn(t, ae.current)
			fn(t, n), (l = hs(null, t, r, e, l, n))
			var o = vs()
			return (
				(t.flags |= 1),
				typeof l == 'object' && l !== null && typeof l.render == 'function' && l.$$typeof === void 0
					? ((t.tag = 1),
					  (t.memoizedState = null),
					  (t.updateQueue = null),
					  ge(r) ? ((o = !0), wl(t)) : (o = !1),
					  (t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null),
					  cs(t),
					  (l.updater = bl),
					  (t.stateNode = l),
					  (l._reactInternals = t),
					  hi(t, r, e, n),
					  (t = yi(null, t, r, !0, o, n)))
					: ((t.tag = 0), b && o && rs(t), ce(null, t, l, n), (t = t.child)),
				t
			)
		case 16:
			r = t.elementType
			e: {
				switch (
					(rl(e, t),
					(e = t.pendingProps),
					(l = r._init),
					(r = l(r._payload)),
					(t.type = r),
					(l = t.tag = Em(r)),
					(e = Oe(r, e)),
					l)
				) {
					case 0:
						t = gi(null, t, r, e, n)
						break e
					case 1:
						t = Lu(null, t, r, e, n)
						break e
					case 11:
						t = Ru(null, t, r, e, n)
						break e
					case 14:
						t = Du(null, t, r, Oe(r.type, e), n)
						break e
				}
				throw Error(k(306, r, ''))
			}
			return t
		case 0:
			return (r = t.type), (l = t.pendingProps), (l = t.elementType === r ? l : Oe(r, l)), gi(e, t, r, l, n)
		case 1:
			return (r = t.type), (l = t.pendingProps), (l = t.elementType === r ? l : Oe(r, l)), Lu(e, t, r, l, n)
		case 3:
			e: {
				if ((sd(t), e === null)) throw Error(k(387))
				;(r = t.pendingProps), (o = t.memoizedState), (l = o.element), Rc(e, t), Nl(t, r, null, n)
				var i = t.memoizedState
				if (((r = i.element), o.isDehydrated))
					if (
						((o = {
							element: r,
							isDehydrated: !1,
							cache: i.cache,
							pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
							transitions: i.transitions,
						}),
						(t.updateQueue.baseState = o),
						(t.memoizedState = o),
						t.flags & 256)
					) {
						;(l = xn(Error(k(423)), t)), (t = Ou(e, t, r, n, l))
						break e
					} else if (r !== l) {
						;(l = xn(Error(k(424)), t)), (t = Ou(e, t, r, n, l))
						break e
					} else
						for (
							we = mt(t.stateNode.containerInfo.firstChild),
								Se = t,
								b = !0,
								Me = null,
								n = Fc(t, null, r, n),
								t.child = n;
							n;

						)
							(n.flags = (n.flags & -3) | 4096), (n = n.sibling)
				else {
					if ((vn(), r === l)) {
						t = tt(e, t, n)
						break e
					}
					ce(e, t, r, n)
				}
				t = t.child
			}
			return t
		case 5:
			return (
				Mc(t),
				e === null && fi(t),
				(r = t.type),
				(l = t.pendingProps),
				(o = e !== null ? e.memoizedProps : null),
				(i = l.children),
				si(r, l) ? (i = null) : o !== null && si(r, o) && (t.flags |= 32),
				id(e, t),
				ce(e, t, i, n),
				t.child
			)
		case 6:
			return e === null && fi(t), null
		case 13:
			return ud(e, t, n)
		case 4:
			return (
				ds(t, t.stateNode.containerInfo),
				(r = t.pendingProps),
				e === null ? (t.child = gn(t, null, r, n)) : ce(e, t, r, n),
				t.child
			)
		case 11:
			return (r = t.type), (l = t.pendingProps), (l = t.elementType === r ? l : Oe(r, l)), Ru(e, t, r, l, n)
		case 7:
			return ce(e, t, t.pendingProps, n), t.child
		case 8:
			return ce(e, t, t.pendingProps.children, n), t.child
		case 12:
			return ce(e, t, t.pendingProps.children, n), t.child
		case 10:
			e: {
				if (
					((r = t.type._context),
					(l = t.pendingProps),
					(o = t.memoizedProps),
					(i = l.value),
					U(Cl, r._currentValue),
					(r._currentValue = i),
					o !== null)
				)
					if (ze(o.value, i)) {
						if (o.children === l.children && !ve.current) {
							t = tt(e, t, n)
							break e
						}
					} else
						for (o = t.child, o !== null && (o.return = t); o !== null; ) {
							var s = o.dependencies
							if (s !== null) {
								i = o.child
								for (var a = s.firstContext; a !== null; ) {
									if (a.context === r) {
										if (o.tag === 1) {
											;(a = Ze(-1, n & -n)), (a.tag = 2)
											var d = o.updateQueue
											if (d !== null) {
												d = d.shared
												var v = d.pending
												v === null ? (a.next = a) : ((a.next = v.next), (v.next = a)), (d.pending = a)
											}
										}
										;(o.lanes |= n), (a = o.alternate), a !== null && (a.lanes |= n), pi(o.return, n, t), (s.lanes |= n)
										break
									}
									a = a.next
								}
							} else if (o.tag === 10) i = o.type === t.type ? null : o.child
							else if (o.tag === 18) {
								if (((i = o.return), i === null)) throw Error(k(341))
								;(i.lanes |= n), (s = i.alternate), s !== null && (s.lanes |= n), pi(i, n, t), (i = o.sibling)
							} else i = o.child
							if (i !== null) i.return = o
							else
								for (i = o; i !== null; ) {
									if (i === t) {
										i = null
										break
									}
									if (((o = i.sibling), o !== null)) {
										;(o.return = i.return), (i = o)
										break
									}
									i = i.return
								}
							o = i
						}
				ce(e, t, l.children, n), (t = t.child)
			}
			return t
		case 9:
			return (
				(l = t.type),
				(r = t.pendingProps.children),
				fn(t, n),
				(l = Te(l)),
				(r = r(l)),
				(t.flags |= 1),
				ce(e, t, r, n),
				t.child
			)
		case 14:
			return (r = t.type), (l = Oe(r, t.pendingProps)), (l = Oe(r.type, l)), Du(e, t, r, l, n)
		case 15:
			return ld(e, t, t.type, t.pendingProps, n)
		case 17:
			return (
				(r = t.type),
				(l = t.pendingProps),
				(l = t.elementType === r ? l : Oe(r, l)),
				rl(e, t),
				(t.tag = 1),
				ge(r) ? ((e = !0), wl(t)) : (e = !1),
				fn(t, n),
				Lc(t, r, l),
				hi(t, r, l, n),
				yi(null, t, r, !0, e, n)
			)
		case 19:
			return ad(e, t, n)
		case 22:
			return od(e, t, n)
	}
	throw Error(k(156, t.tag))
}
function Nd(e, t) {
	return Za(e, t)
}
function Sm(e, t, n, r) {
	;(this.tag = e),
		(this.key = n),
		(this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null),
		(this.index = 0),
		(this.ref = null),
		(this.pendingProps = t),
		(this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
		(this.mode = r),
		(this.subtreeFlags = this.flags = 0),
		(this.deletions = null),
		(this.childLanes = this.lanes = 0),
		(this.alternate = null)
}
function $e(e, t, n, r) {
	return new Sm(e, t, n, r)
}
function _s(e) {
	return (e = e.prototype), !(!e || !e.isReactComponent)
}
function Em(e) {
	if (typeof e == 'function') return _s(e) ? 1 : 0
	if (e != null) {
		if (((e = e.$$typeof), e === Hi)) return 11
		if (e === Qi) return 14
	}
	return 2
}
function yt(e, t) {
	var n = e.alternate
	return (
		n === null
			? ((n = $e(e.tag, t, e.key, e.mode)),
			  (n.elementType = e.elementType),
			  (n.type = e.type),
			  (n.stateNode = e.stateNode),
			  (n.alternate = e),
			  (e.alternate = n))
			: ((n.pendingProps = t), (n.type = e.type), (n.flags = 0), (n.subtreeFlags = 0), (n.deletions = null)),
		(n.flags = e.flags & 14680064),
		(n.childLanes = e.childLanes),
		(n.lanes = e.lanes),
		(n.child = e.child),
		(n.memoizedProps = e.memoizedProps),
		(n.memoizedState = e.memoizedState),
		(n.updateQueue = e.updateQueue),
		(t = e.dependencies),
		(n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
		(n.sibling = e.sibling),
		(n.index = e.index),
		(n.ref = e.ref),
		n
	)
}
function il(e, t, n, r, l, o) {
	var i = 2
	if (((r = e), typeof e == 'function')) _s(e) && (i = 1)
	else if (typeof e == 'string') i = 5
	else
		e: switch (e) {
			case Xt:
				return Ft(n.children, l, o, t)
			case Wi:
				;(i = 8), (l |= 8)
				break
			case zo:
				return (e = $e(12, n, t, l | 2)), (e.elementType = zo), (e.lanes = o), e
			case Uo:
				return (e = $e(13, n, t, l)), (e.elementType = Uo), (e.lanes = o), e
			case Vo:
				return (e = $e(19, n, t, l)), (e.elementType = Vo), (e.lanes = o), e
			case Oa:
				return Kl(n, l, o, t)
			default:
				if (typeof e == 'object' && e !== null)
					switch (e.$$typeof) {
						case Da:
							i = 10
							break e
						case La:
							i = 9
							break e
						case Hi:
							i = 11
							break e
						case Qi:
							i = 14
							break e
						case ot:
							;(i = 16), (r = null)
							break e
					}
				throw Error(k(130, e == null ? e : typeof e, ''))
		}
	return (t = $e(i, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = o), t
}
function Ft(e, t, n, r) {
	return (e = $e(7, e, r, t)), (e.lanes = n), e
}
function Kl(e, t, n, r) {
	return (e = $e(22, e, r, t)), (e.elementType = Oa), (e.lanes = n), (e.stateNode = { isHidden: !1 }), e
}
function jo(e, t, n) {
	return (e = $e(6, e, null, t)), (e.lanes = n), e
}
function $o(e, t, n) {
	return (
		(t = $e(4, e.children !== null ? e.children : [], e.key, t)),
		(t.lanes = n),
		(t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }),
		t
	)
}
function Cm(e, t, n, r, l) {
	;(this.tag = t),
		(this.containerInfo = e),
		(this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
		(this.timeoutHandle = -1),
		(this.callbackNode = this.pendingContext = this.context = null),
		(this.callbackPriority = 0),
		(this.eventTimes = so(0)),
		(this.expirationTimes = so(-1)),
		(this.entangledLanes =
			this.finishedLanes =
			this.mutableReadLanes =
			this.expiredLanes =
			this.pingedLanes =
			this.suspendedLanes =
			this.pendingLanes =
				0),
		(this.entanglements = so(0)),
		(this.identifierPrefix = r),
		(this.onRecoverableError = l),
		(this.mutableSourceEagerHydrationData = null)
}
function js(e, t, n, r, l, o, i, s, a) {
	return (
		(e = new Cm(e, t, n, s, a)),
		t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
		(o = $e(3, null, null, t)),
		(e.current = o),
		(o.stateNode = e),
		(o.memoizedState = {
			element: r,
			isDehydrated: n,
			cache: null,
			transitions: null,
			pendingSuspenseBoundaries: null,
		}),
		cs(o),
		e
	)
}
function km(e, t, n) {
	var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null
	return { $$typeof: Yt, key: r == null ? null : '' + r, children: e, containerInfo: t, implementation: n }
}
function _d(e) {
	if (!e) return wt
	e = e._reactInternals
	e: {
		if (bt(e) !== e || e.tag !== 1) throw Error(k(170))
		var t = e
		do {
			switch (t.tag) {
				case 3:
					t = t.stateNode.context
					break e
				case 1:
					if (ge(t.type)) {
						t = t.stateNode.__reactInternalMemoizedMergedChildContext
						break e
					}
			}
			t = t.return
		} while (t !== null)
		throw Error(k(171))
	}
	if (e.tag === 1) {
		var n = e.type
		if (ge(n)) return Nc(e, n, t)
	}
	return t
}
function jd(e, t, n, r, l, o, i, s, a) {
	return (
		(e = js(n, r, !0, e, l, o, i, s, a)),
		(e.context = _d(null)),
		(n = e.current),
		(r = de()),
		(l = gt(n)),
		(o = Ze(r, l)),
		(o.callback = t ?? null),
		ht(n, o, l),
		(e.current.lanes = l),
		yr(e, l, r),
		ye(e, r),
		e
	)
}
function Yl(e, t, n, r) {
	var l = t.current,
		o = de(),
		i = gt(l)
	return (
		(n = _d(n)),
		t.context === null ? (t.context = n) : (t.pendingContext = n),
		(t = Ze(o, i)),
		(t.payload = { element: e }),
		(r = r === void 0 ? null : r),
		r !== null && (t.callback = r),
		(e = ht(l, t, i)),
		e !== null && (Ae(e, l, i, o), el(e, l, i)),
		i
	)
}
function Ll(e) {
	if (((e = e.current), !e.child)) return null
	switch (e.child.tag) {
		case 5:
			return e.child.stateNode
		default:
			return e.child.stateNode
	}
}
function Wu(e, t) {
	if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
		var n = e.retryLane
		e.retryLane = n !== 0 && n < t ? n : t
	}
}
function $s(e, t) {
	Wu(e, t), (e = e.alternate) && Wu(e, t)
}
function Nm() {
	return null
}
var $d =
	typeof reportError == 'function'
		? reportError
		: function (e) {
				console.error(e)
		  }
function Ps(e) {
	this._internalRoot = e
}
Xl.prototype.render = Ps.prototype.render = function (e) {
	var t = this._internalRoot
	if (t === null) throw Error(k(409))
	Yl(e, t, null, null)
}
Xl.prototype.unmount = Ps.prototype.unmount = function () {
	var e = this._internalRoot
	if (e !== null) {
		this._internalRoot = null
		var t = e.containerInfo
		Ut(function () {
			Yl(null, e, null, null)
		}),
			(t[qe] = null)
	}
}
function Xl(e) {
	this._internalRoot = e
}
Xl.prototype.unstable_scheduleHydration = function (e) {
	if (e) {
		var t = lc()
		e = { blockedOn: null, target: e, priority: t }
		for (var n = 0; n < st.length && t !== 0 && t < st[n].priority; n++);
		st.splice(n, 0, e), n === 0 && ic(e)
	}
}
function Ts(e) {
	return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11))
}
function Gl(e) {
	return !(
		!e ||
		(e.nodeType !== 1 &&
			e.nodeType !== 9 &&
			e.nodeType !== 11 &&
			(e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
	)
}
function Hu() {}
function _m(e, t, n, r, l) {
	if (l) {
		if (typeof r == 'function') {
			var o = r
			r = function () {
				var d = Ll(i)
				o.call(d)
			}
		}
		var i = jd(t, r, e, 0, null, !1, !1, '', Hu)
		return (e._reactRootContainer = i), (e[qe] = i.current), tr(e.nodeType === 8 ? e.parentNode : e), Ut(), i
	}
	for (; (l = e.lastChild); ) e.removeChild(l)
	if (typeof r == 'function') {
		var s = r
		r = function () {
			var d = Ll(a)
			s.call(d)
		}
	}
	var a = js(e, 0, !1, null, null, !1, !1, '', Hu)
	return (
		(e._reactRootContainer = a),
		(e[qe] = a.current),
		tr(e.nodeType === 8 ? e.parentNode : e),
		Ut(function () {
			Yl(t, a, n, r)
		}),
		a
	)
}
function Zl(e, t, n, r, l) {
	var o = n._reactRootContainer
	if (o) {
		var i = o
		if (typeof l == 'function') {
			var s = l
			l = function () {
				var a = Ll(i)
				s.call(a)
			}
		}
		Yl(t, i, e, l)
	} else i = _m(n, t, e, l, r)
	return Ll(i)
}
nc = function (e) {
	switch (e.tag) {
		case 3:
			var t = e.stateNode
			if (t.current.memoizedState.isDehydrated) {
				var n = Mn(t.pendingLanes)
				n !== 0 && (Xi(t, n | 1), ye(t, G()), !(I & 6) && ((wn = G() + 500), Ct()))
			}
			break
		case 13:
			Ut(function () {
				var r = et(e, 1)
				if (r !== null) {
					var l = de()
					Ae(r, e, 1, l)
				}
			}),
				$s(e, 1)
	}
}
Gi = function (e) {
	if (e.tag === 13) {
		var t = et(e, 134217728)
		if (t !== null) {
			var n = de()
			Ae(t, e, 134217728, n)
		}
		$s(e, 134217728)
	}
}
rc = function (e) {
	if (e.tag === 13) {
		var t = gt(e),
			n = et(e, t)
		if (n !== null) {
			var r = de()
			Ae(n, e, t, r)
		}
		$s(e, t)
	}
}
lc = function () {
	return z
}
oc = function (e, t) {
	var n = z
	try {
		return (z = e), t()
	} finally {
		z = n
	}
}
Zo = function (e, t, n) {
	switch (t) {
		case 'input':
			if ((Wo(e, n), (t = n.name), n.type === 'radio' && t != null)) {
				for (n = e; n.parentNode; ) n = n.parentNode
				for (
					n = n.querySelectorAll('input[name=' + JSON.stringify('' + t) + '][type="radio"]'), t = 0;
					t < n.length;
					t++
				) {
					var r = n[t]
					if (r !== e && r.form === e.form) {
						var l = Vl(r)
						if (!l) throw Error(k(90))
						Ma(r), Wo(r, l)
					}
				}
			}
			break
		case 'textarea':
			Aa(e, n)
			break
		case 'select':
			;(t = n.value), t != null && un(e, !!n.multiple, t, !1)
	}
}
Ha = Cs
Qa = Ut
var jm = { usingClientEntryPoint: !1, Events: [wr, qt, Vl, ba, Wa, Cs] },
	Ln = { findFiberByHostInstance: Tt, bundleType: 0, version: '18.2.0', rendererPackageName: 'react-dom' },
	$m = {
		bundleType: Ln.bundleType,
		version: Ln.version,
		rendererPackageName: Ln.rendererPackageName,
		rendererConfig: Ln.rendererConfig,
		overrideHookState: null,
		overrideHookStateDeletePath: null,
		overrideHookStateRenamePath: null,
		overrideProps: null,
		overridePropsDeletePath: null,
		overridePropsRenamePath: null,
		setErrorHandler: null,
		setSuspenseHandler: null,
		scheduleUpdate: null,
		currentDispatcherRef: nt.ReactCurrentDispatcher,
		findHostInstanceByFiber: function (e) {
			return (e = Xa(e)), e === null ? null : e.stateNode
		},
		findFiberByHostInstance: Ln.findFiberByHostInstance || Nm,
		findHostInstancesForRefresh: null,
		scheduleRefresh: null,
		scheduleRoot: null,
		setRefreshHandler: null,
		getCurrentFiber: null,
		reconcilerVersion: '18.2.0-next-9e3b772b8-20220608',
	}
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
	var Ur = __REACT_DEVTOOLS_GLOBAL_HOOK__
	if (!Ur.isDisabled && Ur.supportsFiber)
		try {
			;(Il = Ur.inject($m)), (We = Ur)
		} catch {}
}
ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = jm
ke.createPortal = function (e, t) {
	var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null
	if (!Ts(t)) throw Error(k(200))
	return km(e, t, null, n)
}
ke.createRoot = function (e, t) {
	if (!Ts(e)) throw Error(k(299))
	var n = !1,
		r = '',
		l = $d
	return (
		t != null &&
			(t.unstable_strictMode === !0 && (n = !0),
			t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
			t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
		(t = js(e, 1, !1, null, null, n, !1, r, l)),
		(e[qe] = t.current),
		tr(e.nodeType === 8 ? e.parentNode : e),
		new Ps(t)
	)
}
ke.findDOMNode = function (e) {
	if (e == null) return null
	if (e.nodeType === 1) return e
	var t = e._reactInternals
	if (t === void 0)
		throw typeof e.render == 'function' ? Error(k(188)) : ((e = Object.keys(e).join(',')), Error(k(268, e)))
	return (e = Xa(t)), (e = e === null ? null : e.stateNode), e
}
ke.flushSync = function (e) {
	return Ut(e)
}
ke.hydrate = function (e, t, n) {
	if (!Gl(t)) throw Error(k(200))
	return Zl(null, e, t, !0, n)
}
ke.hydrateRoot = function (e, t, n) {
	if (!Ts(e)) throw Error(k(405))
	var r = (n != null && n.hydratedSources) || null,
		l = !1,
		o = '',
		i = $d
	if (
		(n != null &&
			(n.unstable_strictMode === !0 && (l = !0),
			n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
			n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
		(t = jd(t, null, e, 1, n ?? null, l, !1, o, i)),
		(e[qe] = t.current),
		tr(e),
		r)
	)
		for (e = 0; e < r.length; e++)
			(n = r[e]),
				(l = n._getVersion),
				(l = l(n._source)),
				t.mutableSourceEagerHydrationData == null
					? (t.mutableSourceEagerHydrationData = [n, l])
					: t.mutableSourceEagerHydrationData.push(n, l)
	return new Xl(t)
}
ke.render = function (e, t, n) {
	if (!Gl(t)) throw Error(k(200))
	return Zl(null, e, t, !1, n)
}
ke.unmountComponentAtNode = function (e) {
	if (!Gl(e)) throw Error(k(40))
	return e._reactRootContainer
		? (Ut(function () {
				Zl(null, null, e, !1, function () {
					;(e._reactRootContainer = null), (e[qe] = null)
				})
		  }),
		  !0)
		: !1
}
ke.unstable_batchedUpdates = Cs
ke.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
	if (!Gl(n)) throw Error(k(200))
	if (e == null || e._reactInternals === void 0) throw Error(k(38))
	return Zl(e, t, n, !1, r)
}
ke.version = '18.2.0-next-9e3b772b8-20220608'
function Pd() {
	if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'))
		try {
			__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Pd)
		} catch (e) {
			console.error(e)
		}
}
Pd(), (ja.exports = ke)
var Jl = ja.exports
const Pm = ma(Jl)
var Qu = Jl
;(Io.createRoot = Qu.createRoot), (Io.hydrateRoot = Qu.hydrateRoot)
/**
 * @remix-run/router v1.14.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Ol() {
	return (
		(Ol = Object.assign
			? Object.assign.bind()
			: function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t]
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
			  }),
		Ol.apply(this, arguments)
	)
}
var Lt
;(function (e) {
	;(e.Pop = 'POP'), (e.Push = 'PUSH'), (e.Replace = 'REPLACE')
})(Lt || (Lt = {}))
const Ku = 'popstate'
function Tm(e) {
	e === void 0 && (e = {})
	function t(r, l) {
		let { pathname: o, search: i, hash: s } = r.location
		return Ti(
			'',
			{ pathname: o, search: i, hash: s },
			(l.state && l.state.usr) || null,
			(l.state && l.state.key) || 'default'
		)
	}
	function n(r, l) {
		return typeof l == 'string' ? l : Rd(l)
	}
	return Dm(t, n, null, e)
}
function Td(e, t) {
	if (e === !1 || e === null || typeof e > 'u') throw new Error(t)
}
function Rm() {
	return Math.random().toString(36).substr(2, 8)
}
function Yu(e, t) {
	return { usr: e.state, key: e.key, idx: t }
}
function Ti(e, t, n, r) {
	return (
		n === void 0 && (n = null),
		Ol({ pathname: typeof e == 'string' ? e : e.pathname, search: '', hash: '' }, typeof t == 'string' ? Dd(t) : t, {
			state: n,
			key: (t && t.key) || r || Rm(),
		})
	)
}
function Rd(e) {
	let { pathname: t = '/', search: n = '', hash: r = '' } = e
	return (
		n && n !== '?' && (t += n.charAt(0) === '?' ? n : '?' + n),
		r && r !== '#' && (t += r.charAt(0) === '#' ? r : '#' + r),
		t
	)
}
function Dd(e) {
	let t = {}
	if (e) {
		let n = e.indexOf('#')
		n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)))
		let r = e.indexOf('?')
		r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))), e && (t.pathname = e)
	}
	return t
}
function Dm(e, t, n, r) {
	r === void 0 && (r = {})
	let { window: l = document.defaultView, v5Compat: o = !1 } = r,
		i = l.history,
		s = Lt.Pop,
		a = null,
		d = v()
	d == null && ((d = 0), i.replaceState(Ol({}, i.state, { idx: d }), ''))
	function v() {
		return (i.state || { idx: null }).idx
	}
	function h() {
		s = Lt.Pop
		let C = v(),
			f = C == null ? null : C - d
		;(d = C), a && a({ action: s, location: y.location, delta: f })
	}
	function g(C, f) {
		s = Lt.Push
		let c = Ti(y.location, C, f)
		n && n(c, C), (d = v() + 1)
		let m = Yu(c, d),
			w = y.createHref(c)
		try {
			i.pushState(m, '', w)
		} catch (E) {
			if (E instanceof DOMException && E.name === 'DataCloneError') throw E
			l.location.assign(w)
		}
		o && a && a({ action: s, location: y.location, delta: 1 })
	}
	function x(C, f) {
		s = Lt.Replace
		let c = Ti(y.location, C, f)
		n && n(c, C), (d = v())
		let m = Yu(c, d),
			w = y.createHref(c)
		i.replaceState(m, '', w), o && a && a({ action: s, location: y.location, delta: 0 })
	}
	function S(C) {
		let f = l.location.origin !== 'null' ? l.location.origin : l.location.href,
			c = typeof C == 'string' ? C : Rd(C)
		return Td(f, 'No window.location.(origin|href) available to create URL for href: ' + c), new URL(c, f)
	}
	let y = {
		get action() {
			return s
		},
		get location() {
			return e(l, i)
		},
		listen(C) {
			if (a) throw new Error('A history only accepts one active listener')
			return (
				l.addEventListener(Ku, h),
				(a = C),
				() => {
					l.removeEventListener(Ku, h), (a = null)
				}
			)
		},
		createHref(C) {
			return t(l, C)
		},
		createURL: S,
		encodeLocation(C) {
			let f = S(C)
			return { pathname: f.pathname, search: f.search, hash: f.hash }
		},
		push: g,
		replace: x,
		go(C) {
			return i.go(C)
		},
	}
	return y
}
var Xu
;(function (e) {
	;(e.data = 'data'), (e.deferred = 'deferred'), (e.redirect = 'redirect'), (e.error = 'error')
})(Xu || (Xu = {}))
function Lm(e, t) {
	if (t === '/') return e
	if (!e.toLowerCase().startsWith(t.toLowerCase())) return null
	let n = t.endsWith('/') ? t.length - 1 : t.length,
		r = e.charAt(n)
	return r && r !== '/' ? null : e.slice(n) || '/'
}
const Ld = ['post', 'put', 'patch', 'delete']
new Set(Ld)
const Om = ['get', ...Ld]
new Set(Om)
/**
 * React Router v6.21.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Ri() {
	return (
		(Ri = Object.assign
			? Object.assign.bind()
			: function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t]
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
			  }),
		Ri.apply(this, arguments)
	)
}
const Fm = p.createContext(null),
	Od = p.createContext(null)
function Mm() {
	return p.useContext(Od) != null
}
function Im(e) {
	let {
		basename: t = '/',
		children: n = null,
		location: r,
		navigationType: l = Lt.Pop,
		navigator: o,
		static: i = !1,
		future: s,
	} = e
	Mm() && Td(!1)
	let a = t.replace(/^\/*/, '/'),
		d = p.useMemo(
			() => ({ basename: a, navigator: o, static: i, future: Ri({ v7_relativeSplatPath: !1 }, s) }),
			[a, s, o, i]
		)
	typeof r == 'string' && (r = Dd(r))
	let { pathname: v = '/', search: h = '', hash: g = '', state: x = null, key: S = 'default' } = r,
		y = p.useMemo(() => {
			let C = Lm(v, a)
			return C == null ? null : { location: { pathname: C, search: h, hash: g, state: x, key: S }, navigationType: l }
		}, [a, v, h, g, x, S, l])
	return y == null
		? null
		: p.createElement(Fm.Provider, { value: d }, p.createElement(Od.Provider, { children: n, value: y }))
}
new Promise(() => {})
/**
 * React Router DOM v6.21.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ const Am = 'startTransition',
	Gu = Na[Am]
function zm(e) {
	let { basename: t, children: n, future: r, window: l } = e,
		o = p.useRef()
	o.current == null && (o.current = Tm({ window: l, v5Compat: !0 }))
	let i = o.current,
		[s, a] = p.useState({ action: i.action, location: i.location }),
		{ v7_startTransition: d } = r || {},
		v = p.useCallback(
			(h) => {
				d && Gu ? Gu(() => a(h)) : a(h)
			},
			[a, d]
		)
	return (
		p.useLayoutEffect(() => i.listen(v), [i, v]),
		p.createElement(Im, {
			basename: t,
			children: n,
			location: s.location,
			navigationType: s.action,
			navigator: i,
			future: r,
		})
	)
}
var Zu
;(function (e) {
	;(e.UseScrollRestoration = 'useScrollRestoration'),
		(e.UseSubmit = 'useSubmit'),
		(e.UseSubmitFetcher = 'useSubmitFetcher'),
		(e.UseFetcher = 'useFetcher'),
		(e.useViewTransitionState = 'useViewTransitionState')
})(Zu || (Zu = {}))
var Ju
;(function (e) {
	;(e.UseFetcher = 'useFetcher'), (e.UseFetchers = 'useFetchers'), (e.UseScrollRestoration = 'useScrollRestoration')
})(Ju || (Ju = {}))
const Um = () =>
		u.jsx('article', {
			id: 'advocate',
			className: 'py-16 px-[4vw] lg:py-26 lg:px-[8.5vw] bg-bg-color-2',
			children: u.jsxs('section', {
				className: 'flex flex-col bg-white lg:flex-row rounded-4xl',
				children: [
					u.jsxs('div', {
						className: 'px-6 py-10 lg:px-10 lg:py-12 lg:w-1/2',
						children: [
							u.jsx('p', {
								className:
									'w-40 py-2 mx-auto mb-2 text-base font-bold text-center text-white uppercase rounded-xl bg-text-color',
								children: 'ADVOCATE',
							}),
							u.jsx('h1', { className: 'text-5.5xl lg:text-6xl text-center gradient-text', children: '候選人主張' }),
							u.jsxs('h4', {
								className: 'lg:text-2.5xl my-8 lg:my-6 font-bold',
								children: [
									'我堅信 ! 藉由推動更完善的',
									u.jsx('span', { className: 'text-primary-color', children: '貓咪福利' }),
									'和相關政策，更是間接地投資於',
									u.jsx('span', { className: 'text-primary-color', children: '台灣的未來' }),
									'。',
								],
							}),
							u.jsx('p', {
								className: 'lg:text-lg',
								children:
									'畢竟，民眾的身心健康與工作熱情是推動經濟的核心動力。透過完善的貓咪福利政策，為台灣的 GDP 經濟帶來巨大效益。 因此，我期望能在立法院內推進這些政策，確保每一隻貓咪都能得到他們應有的照顧，同時也為台灣的經濟發展助一臂之力。讓我們一同護航台灣的幸福經濟，從照顧每一隻貓咪開始。',
							}),
						],
					}),
					u.jsx('img', {
						src: '../public/assets/images/advocate.png',
						alt: 'advocate',
						className: 'object-cover h-[514px] lg:h-auto lg:w-1/2 rounded-b-4xl lg:rounded-e-4xl',
					}),
				],
			}),
		}),
	Vm = () =>
		u.jsxs('div', {
			className: 'pt-6',
			children: [
				u.jsxs('h1', {
					className: 'text-5.5xl tracking-wider text-center lg:space-x-6 lg:text-8xl gradient-text',
					children: [
						u.jsx('span', { children: '台灣的明天' }),
						u.jsx('br', { className: 'lg:hidden' }),
						u.jsx('span', { children: '喵先鋪路' }),
					],
				}),
				u.jsxs('div', {
					className: 'flex flex-col items-center justify-center mt-4 mb-7 md:items-baseline md:flex-row md:space-x-4',
					children: [
						u.jsx('h3', {
							className:
								'w-48 lg:w-64 py-2 text-xl lg:text-2.5xl font-bold text-center text-white uppercase rounded-xl bg-text-color',
							children: '2024 立委參選人',
						}),
						u.jsxs('div', {
							className: 'flex items-center justify-center px-4 py-3 space-x-4 shadow rounded-2xl',
							children: [
								u.jsx('span', {
									className:
										'px-3 lg:px-3.5 py-1 lg:py-2.5 text-2xl lg:text-3xl font-black text-white rounded-full bg-gradient-to-r from-gradient-color-1 to-gradient-color-2',
									children: '3',
								}),
								u.jsx('span', {
									className: 'text-2.5xl font-bold lg:text-4xl text-primary-color',
									children: '喵立翰 Miao LiHan',
								}),
							],
						}),
					],
				}),
				u.jsx('img', {
					src: '../public/assets/images/banner.png',
					alt: 'advocate',
					className: 'w-[497.5px] md:w-[556px] lg:w-[552px] mx-auto',
				}),
				u.jsxs('div', {
					className: 'space-x-6 text-white bg-primary-color px-3.5 whitespace-nowrap',
					children: [
						u.jsx('span', { className: 'text-6xl leading-none font-MantouSans', children: '為喵星人，護台灣！' }),
						u.jsx('span', { className: 'text-6xl leading-none font-MantouSans', children: '從喵的眼中，看見台灣' }),
						u.jsx('span', { className: 'text-6xl leading-none font-MantouSans', children: '喵的未來，人的希望' }),
					],
				}),
			],
		})
function W() {
	return (
		(W = Object.assign
			? Object.assign.bind()
			: function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t]
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
			  }),
		W.apply(this, arguments)
	)
}
function Ee(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
	return function (l) {
		if ((e == null || e(l), n === !1 || !l.defaultPrevented)) return t == null ? void 0 : t(l)
	}
}
function Bm(e, t) {
	typeof e == 'function' ? e(t) : e != null && (e.current = t)
}
function Fd(...e) {
	return (t) => e.forEach((n) => Bm(n, t))
}
function kt(...e) {
	return p.useCallback(Fd(...e), e)
}
function Md(e, t = []) {
	let n = []
	function r(o, i) {
		const s = p.createContext(i),
			a = n.length
		n = [...n, i]
		function d(h) {
			const { scope: g, children: x, ...S } = h,
				y = (g == null ? void 0 : g[e][a]) || s,
				C = p.useMemo(() => S, Object.values(S))
			return p.createElement(y.Provider, { value: C }, x)
		}
		function v(h, g) {
			const x = (g == null ? void 0 : g[e][a]) || s,
				S = p.useContext(x)
			if (S) return S
			if (i !== void 0) return i
			throw new Error(`\`${h}\` must be used within \`${o}\``)
		}
		return (d.displayName = o + 'Provider'), [d, v]
	}
	const l = () => {
		const o = n.map((i) => p.createContext(i))
		return function (s) {
			const a = (s == null ? void 0 : s[e]) || o
			return p.useMemo(() => ({ [`__scope${e}`]: { ...s, [e]: a } }), [s, a])
		}
	}
	return (l.scopeName = e), [r, bm(l, ...t)]
}
function bm(...e) {
	const t = e[0]
	if (e.length === 1) return t
	const n = () => {
		const r = e.map((l) => ({ useScope: l(), scopeName: l.scopeName }))
		return function (o) {
			const i = r.reduce((s, { useScope: a, scopeName: d }) => {
				const h = a(o)[`__scope${d}`]
				return { ...s, ...h }
			}, {})
			return p.useMemo(() => ({ [`__scope${t.scopeName}`]: i }), [i])
		}
	}
	return (n.scopeName = t.scopeName), n
}
const Di = globalThis != null && globalThis.document ? p.useLayoutEffect : () => {},
	Wm = Na['useId'.toString()] || (() => {})
let Hm = 0
function sl(e) {
	const [t, n] = p.useState(Wm())
	return (
		Di(() => {
			e || n((r) => r ?? String(Hm++))
		}, [e]),
		e || (t ? `radix-${t}` : '')
	)
}
function Vt(e) {
	const t = p.useRef(e)
	return (
		p.useEffect(() => {
			t.current = e
		}),
		p.useMemo(
			() =>
				(...n) => {
					var r
					return (r = t.current) === null || r === void 0 ? void 0 : r.call(t, ...n)
				},
			[]
		)
	)
}
function Qm({ prop: e, defaultProp: t, onChange: n = () => {} }) {
	const [r, l] = Km({ defaultProp: t, onChange: n }),
		o = e !== void 0,
		i = o ? e : r,
		s = Vt(n),
		a = p.useCallback(
			(d) => {
				if (o) {
					const h = typeof d == 'function' ? d(e) : d
					h !== e && s(h)
				} else l(d)
			},
			[o, e, l, s]
		)
	return [i, a]
}
function Km({ defaultProp: e, onChange: t }) {
	const n = p.useState(e),
		[r] = n,
		l = p.useRef(r),
		o = Vt(t)
	return (
		p.useEffect(() => {
			l.current !== r && (o(r), (l.current = r))
		}, [r, l, o]),
		n
	)
}
const Rs = p.forwardRef((e, t) => {
	const { children: n, ...r } = e,
		l = p.Children.toArray(n),
		o = l.find(Xm)
	if (o) {
		const i = o.props.children,
			s = l.map((a) =>
				a === o ? (p.Children.count(i) > 1 ? p.Children.only(null) : p.isValidElement(i) ? i.props.children : null) : a
			)
		return p.createElement(Li, W({}, r, { ref: t }), p.isValidElement(i) ? p.cloneElement(i, void 0, s) : null)
	}
	return p.createElement(Li, W({}, r, { ref: t }), n)
})
Rs.displayName = 'Slot'
const Li = p.forwardRef((e, t) => {
	const { children: n, ...r } = e
	return p.isValidElement(n)
		? p.cloneElement(n, { ...Gm(r, n.props), ref: t ? Fd(t, n.ref) : n.ref })
		: p.Children.count(n) > 1
		? p.Children.only(null)
		: null
})
Li.displayName = 'SlotClone'
const Ym = ({ children: e }) => p.createElement(p.Fragment, null, e)
function Xm(e) {
	return p.isValidElement(e) && e.type === Ym
}
function Gm(e, t) {
	const n = { ...t }
	for (const r in t) {
		const l = e[r],
			o = t[r]
		;/^on[A-Z]/.test(r)
			? l && o
				? (n[r] = (...s) => {
						o(...s), l(...s)
				  })
				: l && (n[r] = l)
			: r === 'style'
			? (n[r] = { ...l, ...o })
			: r === 'className' && (n[r] = [l, o].filter(Boolean).join(' '))
	}
	return { ...e, ...n }
}
const Zm = [
		'a',
		'button',
		'div',
		'form',
		'h2',
		'h3',
		'img',
		'input',
		'label',
		'li',
		'nav',
		'ol',
		'p',
		'span',
		'svg',
		'ul',
	],
	De = Zm.reduce((e, t) => {
		const n = p.forwardRef((r, l) => {
			const { asChild: o, ...i } = r,
				s = o ? Rs : t
			return (
				p.useEffect(() => {
					window[Symbol.for('radix-ui')] = !0
				}, []),
				p.createElement(s, W({}, i, { ref: l }))
			)
		})
		return (n.displayName = `Primitive.${t}`), { ...e, [t]: n }
	}, {})
function Jm(e, t) {
	e && Jl.flushSync(() => e.dispatchEvent(t))
}
function qm(e, t = globalThis == null ? void 0 : globalThis.document) {
	const n = Vt(e)
	p.useEffect(() => {
		const r = (l) => {
			l.key === 'Escape' && n(l)
		}
		return t.addEventListener('keydown', r), () => t.removeEventListener('keydown', r)
	}, [n, t])
}
const Oi = 'dismissableLayer.update',
	eh = 'dismissableLayer.pointerDownOutside',
	th = 'dismissableLayer.focusOutside'
let qu
const nh = p.createContext({
		layers: new Set(),
		layersWithOutsidePointerEventsDisabled: new Set(),
		branches: new Set(),
	}),
	rh = p.forwardRef((e, t) => {
		var n
		const {
				disableOutsidePointerEvents: r = !1,
				onEscapeKeyDown: l,
				onPointerDownOutside: o,
				onFocusOutside: i,
				onInteractOutside: s,
				onDismiss: a,
				...d
			} = e,
			v = p.useContext(nh),
			[h, g] = p.useState(null),
			x =
				(n = h == null ? void 0 : h.ownerDocument) !== null && n !== void 0
					? n
					: globalThis == null
					? void 0
					: globalThis.document,
			[, S] = p.useState({}),
			y = kt(t, (N) => g(N)),
			C = Array.from(v.layers),
			[f] = [...v.layersWithOutsidePointerEventsDisabled].slice(-1),
			c = C.indexOf(f),
			m = h ? C.indexOf(h) : -1,
			w = v.layersWithOutsidePointerEventsDisabled.size > 0,
			E = m >= c,
			j = lh((N) => {
				const F = N.target,
					$ = [...v.branches].some((R) => R.contains(F))
				!E || $ || (o == null || o(N), s == null || s(N), N.defaultPrevented || a == null || a())
			}, x),
			_ = oh((N) => {
				const F = N.target
				;[...v.branches].some((R) => R.contains(F)) ||
					(i == null || i(N), s == null || s(N), N.defaultPrevented || a == null || a())
			}, x)
		return (
			qm((N) => {
				m === v.layers.size - 1 && (l == null || l(N), !N.defaultPrevented && a && (N.preventDefault(), a()))
			}, x),
			p.useEffect(() => {
				if (h)
					return (
						r &&
							(v.layersWithOutsidePointerEventsDisabled.size === 0 &&
								((qu = x.body.style.pointerEvents), (x.body.style.pointerEvents = 'none')),
							v.layersWithOutsidePointerEventsDisabled.add(h)),
						v.layers.add(h),
						ea(),
						() => {
							r && v.layersWithOutsidePointerEventsDisabled.size === 1 && (x.body.style.pointerEvents = qu)
						}
					)
			}, [h, x, r, v]),
			p.useEffect(
				() => () => {
					h && (v.layers.delete(h), v.layersWithOutsidePointerEventsDisabled.delete(h), ea())
				},
				[h, v]
			),
			p.useEffect(() => {
				const N = () => S({})
				return document.addEventListener(Oi, N), () => document.removeEventListener(Oi, N)
			}, []),
			p.createElement(
				De.div,
				W({}, d, {
					ref: y,
					style: { pointerEvents: w ? (E ? 'auto' : 'none') : void 0, ...e.style },
					onFocusCapture: Ee(e.onFocusCapture, _.onFocusCapture),
					onBlurCapture: Ee(e.onBlurCapture, _.onBlurCapture),
					onPointerDownCapture: Ee(e.onPointerDownCapture, j.onPointerDownCapture),
				})
			)
		)
	})
function lh(e, t = globalThis == null ? void 0 : globalThis.document) {
	const n = Vt(e),
		r = p.useRef(!1),
		l = p.useRef(() => {})
	return (
		p.useEffect(() => {
			const o = (s) => {
					if (s.target && !r.current) {
						let v = function () {
							Id(eh, n, d, { discrete: !0 })
						}
						var a = v
						const d = { originalEvent: s }
						s.pointerType === 'touch'
							? (t.removeEventListener('click', l.current),
							  (l.current = v),
							  t.addEventListener('click', l.current, { once: !0 }))
							: v()
					} else t.removeEventListener('click', l.current)
					r.current = !1
				},
				i = window.setTimeout(() => {
					t.addEventListener('pointerdown', o)
				}, 0)
			return () => {
				window.clearTimeout(i), t.removeEventListener('pointerdown', o), t.removeEventListener('click', l.current)
			}
		}, [t, n]),
		{ onPointerDownCapture: () => (r.current = !0) }
	)
}
function oh(e, t = globalThis == null ? void 0 : globalThis.document) {
	const n = Vt(e),
		r = p.useRef(!1)
	return (
		p.useEffect(() => {
			const l = (o) => {
				o.target && !r.current && Id(th, n, { originalEvent: o }, { discrete: !1 })
			}
			return t.addEventListener('focusin', l), () => t.removeEventListener('focusin', l)
		}, [t, n]),
		{ onFocusCapture: () => (r.current = !0), onBlurCapture: () => (r.current = !1) }
	)
}
function ea() {
	const e = new CustomEvent(Oi)
	document.dispatchEvent(e)
}
function Id(e, t, n, { discrete: r }) {
	const l = n.originalEvent.target,
		o = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n })
	t && l.addEventListener(e, t, { once: !0 }), r ? Jm(l, o) : l.dispatchEvent(o)
}
const Po = 'focusScope.autoFocusOnMount',
	To = 'focusScope.autoFocusOnUnmount',
	ta = { bubbles: !1, cancelable: !0 },
	ih = p.forwardRef((e, t) => {
		const { loop: n = !1, trapped: r = !1, onMountAutoFocus: l, onUnmountAutoFocus: o, ...i } = e,
			[s, a] = p.useState(null),
			d = Vt(l),
			v = Vt(o),
			h = p.useRef(null),
			g = kt(t, (y) => a(y)),
			x = p.useRef({
				paused: !1,
				pause() {
					this.paused = !0
				},
				resume() {
					this.paused = !1
				},
			}).current
		p.useEffect(() => {
			if (r) {
				let c = function (j) {
						if (x.paused || !s) return
						const _ = j.target
						s.contains(_) ? (h.current = _) : lt(h.current, { select: !0 })
					},
					m = function (j) {
						if (x.paused || !s) return
						const _ = j.relatedTarget
						_ !== null && (s.contains(_) || lt(h.current, { select: !0 }))
					},
					w = function (j) {
						if (document.activeElement === document.body) for (const N of j) N.removedNodes.length > 0 && lt(s)
					}
				var y = c,
					C = m,
					f = w
				document.addEventListener('focusin', c), document.addEventListener('focusout', m)
				const E = new MutationObserver(w)
				return (
					s && E.observe(s, { childList: !0, subtree: !0 }),
					() => {
						document.removeEventListener('focusin', c), document.removeEventListener('focusout', m), E.disconnect()
					}
				)
			}
		}, [r, s, x.paused]),
			p.useEffect(() => {
				if (s) {
					ra.add(x)
					const y = document.activeElement
					if (!s.contains(y)) {
						const f = new CustomEvent(Po, ta)
						s.addEventListener(Po, d),
							s.dispatchEvent(f),
							f.defaultPrevented || (sh(fh(Ad(s)), { select: !0 }), document.activeElement === y && lt(s))
					}
					return () => {
						s.removeEventListener(Po, d),
							setTimeout(() => {
								const f = new CustomEvent(To, ta)
								s.addEventListener(To, v),
									s.dispatchEvent(f),
									f.defaultPrevented || lt(y ?? document.body, { select: !0 }),
									s.removeEventListener(To, v),
									ra.remove(x)
							}, 0)
					}
				}
			}, [s, d, v, x])
		const S = p.useCallback(
			(y) => {
				if ((!n && !r) || x.paused) return
				const C = y.key === 'Tab' && !y.altKey && !y.ctrlKey && !y.metaKey,
					f = document.activeElement
				if (C && f) {
					const c = y.currentTarget,
						[m, w] = uh(c)
					m && w
						? !y.shiftKey && f === w
							? (y.preventDefault(), n && lt(m, { select: !0 }))
							: y.shiftKey && f === m && (y.preventDefault(), n && lt(w, { select: !0 }))
						: f === c && y.preventDefault()
				}
			},
			[n, r, x.paused]
		)
		return p.createElement(De.div, W({ tabIndex: -1 }, i, { ref: g, onKeyDown: S }))
	})
function sh(e, { select: t = !1 } = {}) {
	const n = document.activeElement
	for (const r of e) if ((lt(r, { select: t }), document.activeElement !== n)) return
}
function uh(e) {
	const t = Ad(e),
		n = na(t, e),
		r = na(t.reverse(), e)
	return [n, r]
}
function Ad(e) {
	const t = [],
		n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
			acceptNode: (r) => {
				const l = r.tagName === 'INPUT' && r.type === 'hidden'
				return r.disabled || r.hidden || l
					? NodeFilter.FILTER_SKIP
					: r.tabIndex >= 0
					? NodeFilter.FILTER_ACCEPT
					: NodeFilter.FILTER_SKIP
			},
		})
	for (; n.nextNode(); ) t.push(n.currentNode)
	return t
}
function na(e, t) {
	for (const n of e) if (!ah(n, { upTo: t })) return n
}
function ah(e, { upTo: t }) {
	if (getComputedStyle(e).visibility === 'hidden') return !0
	for (; e; ) {
		if (t !== void 0 && e === t) return !1
		if (getComputedStyle(e).display === 'none') return !0
		e = e.parentElement
	}
	return !1
}
function ch(e) {
	return e instanceof HTMLInputElement && 'select' in e
}
function lt(e, { select: t = !1 } = {}) {
	if (e && e.focus) {
		const n = document.activeElement
		e.focus({ preventScroll: !0 }), e !== n && ch(e) && t && e.select()
	}
}
const ra = dh()
function dh() {
	let e = []
	return {
		add(t) {
			const n = e[0]
			t !== n && (n == null || n.pause()), (e = la(e, t)), e.unshift(t)
		},
		remove(t) {
			var n
			;(e = la(e, t)), (n = e[0]) === null || n === void 0 || n.resume()
		},
	}
}
function la(e, t) {
	const n = [...e],
		r = n.indexOf(t)
	return r !== -1 && n.splice(r, 1), n
}
function fh(e) {
	return e.filter((t) => t.tagName !== 'A')
}
const ph = p.forwardRef((e, t) => {
	var n
	const {
		container: r = globalThis == null || (n = globalThis.document) === null || n === void 0 ? void 0 : n.body,
		...l
	} = e
	return r ? Pm.createPortal(p.createElement(De.div, W({}, l, { ref: t })), r) : null
})
function mh(e, t) {
	return p.useReducer((n, r) => {
		const l = t[n][r]
		return l ?? n
	}, e)
}
const ql = (e) => {
	const { present: t, children: n } = e,
		r = hh(t),
		l = typeof n == 'function' ? n({ present: r.isPresent }) : p.Children.only(n),
		o = kt(r.ref, l.ref)
	return typeof n == 'function' || r.isPresent ? p.cloneElement(l, { ref: o }) : null
}
ql.displayName = 'Presence'
function hh(e) {
	const [t, n] = p.useState(),
		r = p.useRef({}),
		l = p.useRef(e),
		o = p.useRef('none'),
		i = e ? 'mounted' : 'unmounted',
		[s, a] = mh(i, {
			mounted: { UNMOUNT: 'unmounted', ANIMATION_OUT: 'unmountSuspended' },
			unmountSuspended: { MOUNT: 'mounted', ANIMATION_END: 'unmounted' },
			unmounted: { MOUNT: 'mounted' },
		})
	return (
		p.useEffect(() => {
			const d = Vr(r.current)
			o.current = s === 'mounted' ? d : 'none'
		}, [s]),
		Di(() => {
			const d = r.current,
				v = l.current
			if (v !== e) {
				const g = o.current,
					x = Vr(d)
				e
					? a('MOUNT')
					: x === 'none' || (d == null ? void 0 : d.display) === 'none'
					? a('UNMOUNT')
					: a(v && g !== x ? 'ANIMATION_OUT' : 'UNMOUNT'),
					(l.current = e)
			}
		}, [e, a]),
		Di(() => {
			if (t) {
				const d = (h) => {
						const x = Vr(r.current).includes(h.animationName)
						h.target === t && x && Jl.flushSync(() => a('ANIMATION_END'))
					},
					v = (h) => {
						h.target === t && (o.current = Vr(r.current))
					}
				return (
					t.addEventListener('animationstart', v),
					t.addEventListener('animationcancel', d),
					t.addEventListener('animationend', d),
					() => {
						t.removeEventListener('animationstart', v),
							t.removeEventListener('animationcancel', d),
							t.removeEventListener('animationend', d)
					}
				)
			} else a('ANIMATION_END')
		}, [t, a]),
		{
			isPresent: ['mounted', 'unmountSuspended'].includes(s),
			ref: p.useCallback((d) => {
				d && (r.current = getComputedStyle(d)), n(d)
			}, []),
		}
	)
}
function Vr(e) {
	return (e == null ? void 0 : e.animationName) || 'none'
}
let Ro = 0
function vh() {
	p.useEffect(() => {
		var e, t
		const n = document.querySelectorAll('[data-radix-focus-guard]')
		return (
			document.body.insertAdjacentElement('afterbegin', (e = n[0]) !== null && e !== void 0 ? e : oa()),
			document.body.insertAdjacentElement('beforeend', (t = n[1]) !== null && t !== void 0 ? t : oa()),
			Ro++,
			() => {
				Ro === 1 && document.querySelectorAll('[data-radix-focus-guard]').forEach((r) => r.remove()), Ro--
			}
		)
	}, [])
}
function oa() {
	const e = document.createElement('span')
	return (
		e.setAttribute('data-radix-focus-guard', ''),
		(e.tabIndex = 0),
		(e.style.cssText = 'outline: none; opacity: 0; position: fixed; pointer-events: none'),
		e
	)
}
var be = function () {
	return (
		(be =
			Object.assign ||
			function (t) {
				for (var n, r = 1, l = arguments.length; r < l; r++) {
					n = arguments[r]
					for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
				}
				return t
			}),
		be.apply(this, arguments)
	)
}
function zd(e, t) {
	var n = {}
	for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r])
	if (e != null && typeof Object.getOwnPropertySymbols == 'function')
		for (var l = 0, r = Object.getOwnPropertySymbols(e); l < r.length; l++)
			t.indexOf(r[l]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[l]) && (n[r[l]] = e[r[l]])
	return n
}
function gh(e, t, n) {
	if (n || arguments.length === 2)
		for (var r = 0, l = t.length, o; r < l; r++)
			(o || !(r in t)) && (o || (o = Array.prototype.slice.call(t, 0, r)), (o[r] = t[r]))
	return e.concat(o || Array.prototype.slice.call(t))
}
var ul = 'right-scroll-bar-position',
	al = 'width-before-scroll-bar',
	yh = 'with-scroll-bars-hidden',
	xh = '--removed-body-scroll-bar-size'
function wh(e, t) {
	return typeof e == 'function' ? e(t) : e && (e.current = t), e
}
function Sh(e, t) {
	var n = p.useState(function () {
		return {
			value: e,
			callback: t,
			facade: {
				get current() {
					return n.value
				},
				set current(r) {
					var l = n.value
					l !== r && ((n.value = r), n.callback(r, l))
				},
			},
		}
	})[0]
	return (n.callback = t), n.facade
}
function Eh(e, t) {
	return Sh(t || null, function (n) {
		return e.forEach(function (r) {
			return wh(r, n)
		})
	})
}
function Ch(e) {
	return e
}
function kh(e, t) {
	t === void 0 && (t = Ch)
	var n = [],
		r = !1,
		l = {
			read: function () {
				if (r)
					throw new Error(
						'Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.'
					)
				return n.length ? n[n.length - 1] : e
			},
			useMedium: function (o) {
				var i = t(o, r)
				return (
					n.push(i),
					function () {
						n = n.filter(function (s) {
							return s !== i
						})
					}
				)
			},
			assignSyncMedium: function (o) {
				for (r = !0; n.length; ) {
					var i = n
					;(n = []), i.forEach(o)
				}
				n = {
					push: function (s) {
						return o(s)
					},
					filter: function () {
						return n
					},
				}
			},
			assignMedium: function (o) {
				r = !0
				var i = []
				if (n.length) {
					var s = n
					;(n = []), s.forEach(o), (i = n)
				}
				var a = function () {
						var v = i
						;(i = []), v.forEach(o)
					},
					d = function () {
						return Promise.resolve().then(a)
					}
				d(),
					(n = {
						push: function (v) {
							i.push(v), d()
						},
						filter: function (v) {
							return (i = i.filter(v)), n
						},
					})
			},
		}
	return l
}
function Nh(e) {
	e === void 0 && (e = {})
	var t = kh(null)
	return (t.options = be({ async: !0, ssr: !1 }, e)), t
}
var Ud = function (e) {
	var t = e.sideCar,
		n = zd(e, ['sideCar'])
	if (!t) throw new Error('Sidecar: please provide `sideCar` property to import the right car')
	var r = t.read()
	if (!r) throw new Error('Sidecar medium not found')
	return p.createElement(r, be({}, n))
}
Ud.isSideCarExport = !0
function _h(e, t) {
	return e.useMedium(t), Ud
}
var Vd = Nh(),
	Do = function () {},
	eo = p.forwardRef(function (e, t) {
		var n = p.useRef(null),
			r = p.useState({ onScrollCapture: Do, onWheelCapture: Do, onTouchMoveCapture: Do }),
			l = r[0],
			o = r[1],
			i = e.forwardProps,
			s = e.children,
			a = e.className,
			d = e.removeScrollBar,
			v = e.enabled,
			h = e.shards,
			g = e.sideCar,
			x = e.noIsolation,
			S = e.inert,
			y = e.allowPinchZoom,
			C = e.as,
			f = C === void 0 ? 'div' : C,
			c = zd(e, [
				'forwardProps',
				'children',
				'className',
				'removeScrollBar',
				'enabled',
				'shards',
				'sideCar',
				'noIsolation',
				'inert',
				'allowPinchZoom',
				'as',
			]),
			m = g,
			w = Eh([n, t]),
			E = be(be({}, c), l)
		return p.createElement(
			p.Fragment,
			null,
			v &&
				p.createElement(m, {
					sideCar: Vd,
					removeScrollBar: d,
					shards: h,
					noIsolation: x,
					inert: S,
					setCallbacks: o,
					allowPinchZoom: !!y,
					lockRef: n,
				}),
			i
				? p.cloneElement(p.Children.only(s), be(be({}, E), { ref: w }))
				: p.createElement(f, be({}, E, { className: a, ref: w }), s)
		)
	})
eo.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 }
eo.classNames = { fullWidth: al, zeroRight: ul }
var ia,
	jh = function () {
		if (ia) return ia
		if (typeof __webpack_nonce__ < 'u') return __webpack_nonce__
	}
function $h() {
	if (!document) return null
	var e = document.createElement('style')
	e.type = 'text/css'
	var t = jh()
	return t && e.setAttribute('nonce', t), e
}
function Ph(e, t) {
	e.styleSheet ? (e.styleSheet.cssText = t) : e.appendChild(document.createTextNode(t))
}
function Th(e) {
	var t = document.head || document.getElementsByTagName('head')[0]
	t.appendChild(e)
}
var Rh = function () {
		var e = 0,
			t = null
		return {
			add: function (n) {
				e == 0 && (t = $h()) && (Ph(t, n), Th(t)), e++
			},
			remove: function () {
				e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), (t = null))
			},
		}
	},
	Dh = function () {
		var e = Rh()
		return function (t, n) {
			p.useEffect(
				function () {
					return (
						e.add(t),
						function () {
							e.remove()
						}
					)
				},
				[t && n]
			)
		}
	},
	Bd = function () {
		var e = Dh(),
			t = function (n) {
				var r = n.styles,
					l = n.dynamic
				return e(r, l), null
			}
		return t
	},
	Lh = { left: 0, top: 0, right: 0, gap: 0 },
	Lo = function (e) {
		return parseInt(e || '', 10) || 0
	},
	Oh = function (e) {
		var t = window.getComputedStyle(document.body),
			n = t[e === 'padding' ? 'paddingLeft' : 'marginLeft'],
			r = t[e === 'padding' ? 'paddingTop' : 'marginTop'],
			l = t[e === 'padding' ? 'paddingRight' : 'marginRight']
		return [Lo(n), Lo(r), Lo(l)]
	},
	Fh = function (e) {
		if ((e === void 0 && (e = 'margin'), typeof window > 'u')) return Lh
		var t = Oh(e),
			n = document.documentElement.clientWidth,
			r = window.innerWidth
		return { left: t[0], top: t[1], right: t[2], gap: Math.max(0, r - n + t[2] - t[0]) }
	},
	Mh = Bd(),
	Ih = function (e, t, n, r) {
		var l = e.left,
			o = e.top,
			i = e.right,
			s = e.gap
		return (
			n === void 0 && (n = 'margin'),
			`
  .`
				.concat(
					yh,
					` {
   overflow: hidden `
				)
				.concat(
					r,
					`;
   padding-right: `
				)
				.concat(s, 'px ')
				.concat(
					r,
					`;
  }
  body {
    overflow: hidden `
				)
				.concat(
					r,
					`;
    overscroll-behavior: contain;
    `
				)
				.concat(
					[
						t && 'position: relative '.concat(r, ';'),
						n === 'margin' &&
							`
    padding-left: `
								.concat(
									l,
									`px;
    padding-top: `
								)
								.concat(
									o,
									`px;
    padding-right: `
								)
								.concat(
									i,
									`px;
    margin-left:0;
    margin-top:0;
    margin-right: `
								)
								.concat(s, 'px ')
								.concat(
									r,
									`;
    `
								),
						n === 'padding' && 'padding-right: '.concat(s, 'px ').concat(r, ';'),
					]
						.filter(Boolean)
						.join(''),
					`
  }
  
  .`
				)
				.concat(
					ul,
					` {
    right: `
				)
				.concat(s, 'px ')
				.concat(
					r,
					`;
  }
  
  .`
				)
				.concat(
					al,
					` {
    margin-right: `
				)
				.concat(s, 'px ')
				.concat(
					r,
					`;
  }
  
  .`
				)
				.concat(ul, ' .')
				.concat(
					ul,
					` {
    right: 0 `
				)
				.concat(
					r,
					`;
  }
  
  .`
				)
				.concat(al, ' .')
				.concat(
					al,
					` {
    margin-right: 0 `
				)
				.concat(
					r,
					`;
  }
  
  body {
    `
				)
				.concat(xh, ': ')
				.concat(
					s,
					`px;
  }
`
				)
		)
	},
	Ah = function (e) {
		var t = e.noRelative,
			n = e.noImportant,
			r = e.gapMode,
			l = r === void 0 ? 'margin' : r,
			o = p.useMemo(
				function () {
					return Fh(l)
				},
				[l]
			)
		return p.createElement(Mh, { styles: Ih(o, !t, l, n ? '' : '!important') })
	},
	Fi = !1
if (typeof window < 'u')
	try {
		var Br = Object.defineProperty({}, 'passive', {
			get: function () {
				return (Fi = !0), !0
			},
		})
		window.addEventListener('test', Br, Br), window.removeEventListener('test', Br, Br)
	} catch {
		Fi = !1
	}
var Ht = Fi ? { passive: !1 } : !1,
	zh = function (e) {
		return e.tagName === 'TEXTAREA'
	},
	bd = function (e, t) {
		var n = window.getComputedStyle(e)
		return n[t] !== 'hidden' && !(n.overflowY === n.overflowX && !zh(e) && n[t] === 'visible')
	},
	Uh = function (e) {
		return bd(e, 'overflowY')
	},
	Vh = function (e) {
		return bd(e, 'overflowX')
	},
	sa = function (e, t) {
		var n = t
		do {
			typeof ShadowRoot < 'u' && n instanceof ShadowRoot && (n = n.host)
			var r = Wd(e, n)
			if (r) {
				var l = Hd(e, n),
					o = l[1],
					i = l[2]
				if (o > i) return !0
			}
			n = n.parentNode
		} while (n && n !== document.body)
		return !1
	},
	Bh = function (e) {
		var t = e.scrollTop,
			n = e.scrollHeight,
			r = e.clientHeight
		return [t, n, r]
	},
	bh = function (e) {
		var t = e.scrollLeft,
			n = e.scrollWidth,
			r = e.clientWidth
		return [t, n, r]
	},
	Wd = function (e, t) {
		return e === 'v' ? Uh(t) : Vh(t)
	},
	Hd = function (e, t) {
		return e === 'v' ? Bh(t) : bh(t)
	},
	Wh = function (e, t) {
		return e === 'h' && t === 'rtl' ? -1 : 1
	},
	Hh = function (e, t, n, r, l) {
		var o = Wh(e, window.getComputedStyle(t).direction),
			i = o * r,
			s = n.target,
			a = t.contains(s),
			d = !1,
			v = i > 0,
			h = 0,
			g = 0
		do {
			var x = Hd(e, s),
				S = x[0],
				y = x[1],
				C = x[2],
				f = y - C - o * S
			;(S || f) && Wd(e, s) && ((h += f), (g += S)), (s = s.parentNode)
		} while ((!a && s !== document.body) || (a && (t.contains(s) || t === s)))
		return ((v && ((l && h === 0) || (!l && i > h))) || (!v && ((l && g === 0) || (!l && -i > g)))) && (d = !0), d
	},
	br = function (e) {
		return 'changedTouches' in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0]
	},
	ua = function (e) {
		return [e.deltaX, e.deltaY]
	},
	aa = function (e) {
		return e && 'current' in e ? e.current : e
	},
	Qh = function (e, t) {
		return e[0] === t[0] && e[1] === t[1]
	},
	Kh = function (e) {
		return `
  .block-interactivity-`
			.concat(
				e,
				` {pointer-events: none;}
  .allow-interactivity-`
			)
			.concat(
				e,
				` {pointer-events: all;}
`
			)
	},
	Yh = 0,
	Qt = []
function Xh(e) {
	var t = p.useRef([]),
		n = p.useRef([0, 0]),
		r = p.useRef(),
		l = p.useState(Yh++)[0],
		o = p.useState(function () {
			return Bd()
		})[0],
		i = p.useRef(e)
	p.useEffect(
		function () {
			i.current = e
		},
		[e]
	),
		p.useEffect(
			function () {
				if (e.inert) {
					document.body.classList.add('block-interactivity-'.concat(l))
					var y = gh([e.lockRef.current], (e.shards || []).map(aa), !0).filter(Boolean)
					return (
						y.forEach(function (C) {
							return C.classList.add('allow-interactivity-'.concat(l))
						}),
						function () {
							document.body.classList.remove('block-interactivity-'.concat(l)),
								y.forEach(function (C) {
									return C.classList.remove('allow-interactivity-'.concat(l))
								})
						}
					)
				}
			},
			[e.inert, e.lockRef.current, e.shards]
		)
	var s = p.useCallback(function (y, C) {
			if ('touches' in y && y.touches.length === 2) return !i.current.allowPinchZoom
			var f = br(y),
				c = n.current,
				m = 'deltaX' in y ? y.deltaX : c[0] - f[0],
				w = 'deltaY' in y ? y.deltaY : c[1] - f[1],
				E,
				j = y.target,
				_ = Math.abs(m) > Math.abs(w) ? 'h' : 'v'
			if ('touches' in y && _ === 'h' && j.type === 'range') return !1
			var N = sa(_, j)
			if (!N) return !0
			if ((N ? (E = _) : ((E = _ === 'v' ? 'h' : 'v'), (N = sa(_, j))), !N)) return !1
			if ((!r.current && 'changedTouches' in y && (m || w) && (r.current = E), !E)) return !0
			var F = r.current || E
			return Hh(F, C, y, F === 'h' ? m : w, !0)
		}, []),
		a = p.useCallback(function (y) {
			var C = y
			if (!(!Qt.length || Qt[Qt.length - 1] !== o)) {
				var f = 'deltaY' in C ? ua(C) : br(C),
					c = t.current.filter(function (E) {
						return E.name === C.type && E.target === C.target && Qh(E.delta, f)
					})[0]
				if (c && c.should) {
					C.cancelable && C.preventDefault()
					return
				}
				if (!c) {
					var m = (i.current.shards || [])
							.map(aa)
							.filter(Boolean)
							.filter(function (E) {
								return E.contains(C.target)
							}),
						w = m.length > 0 ? s(C, m[0]) : !i.current.noIsolation
					w && C.cancelable && C.preventDefault()
				}
			}
		}, []),
		d = p.useCallback(function (y, C, f, c) {
			var m = { name: y, delta: C, target: f, should: c }
			t.current.push(m),
				setTimeout(function () {
					t.current = t.current.filter(function (w) {
						return w !== m
					})
				}, 1)
		}, []),
		v = p.useCallback(function (y) {
			;(n.current = br(y)), (r.current = void 0)
		}, []),
		h = p.useCallback(function (y) {
			d(y.type, ua(y), y.target, s(y, e.lockRef.current))
		}, []),
		g = p.useCallback(function (y) {
			d(y.type, br(y), y.target, s(y, e.lockRef.current))
		}, [])
	p.useEffect(function () {
		return (
			Qt.push(o),
			e.setCallbacks({ onScrollCapture: h, onWheelCapture: h, onTouchMoveCapture: g }),
			document.addEventListener('wheel', a, Ht),
			document.addEventListener('touchmove', a, Ht),
			document.addEventListener('touchstart', v, Ht),
			function () {
				;(Qt = Qt.filter(function (y) {
					return y !== o
				})),
					document.removeEventListener('wheel', a, Ht),
					document.removeEventListener('touchmove', a, Ht),
					document.removeEventListener('touchstart', v, Ht)
			}
		)
	}, [])
	var x = e.removeScrollBar,
		S = e.inert
	return p.createElement(
		p.Fragment,
		null,
		S ? p.createElement(o, { styles: Kh(l) }) : null,
		x ? p.createElement(Ah, { gapMode: 'margin' }) : null
	)
}
const Gh = _h(Vd, Xh)
var Qd = p.forwardRef(function (e, t) {
	return p.createElement(eo, be({}, e, { ref: t, sideCar: Gh }))
})
Qd.classNames = eo.classNames
const Zh = Qd
var Jh = function (e) {
		if (typeof document > 'u') return null
		var t = Array.isArray(e) ? e[0] : e
		return t.ownerDocument.body
	},
	Kt = new WeakMap(),
	Wr = new WeakMap(),
	Hr = {},
	Oo = 0,
	Kd = function (e) {
		return e && (e.host || Kd(e.parentNode))
	},
	qh = function (e, t) {
		return t
			.map(function (n) {
				if (e.contains(n)) return n
				var r = Kd(n)
				return r && e.contains(r)
					? r
					: (console.error('aria-hidden', n, 'in not contained inside', e, '. Doing nothing'), null)
			})
			.filter(function (n) {
				return !!n
			})
	},
	ev = function (e, t, n, r) {
		var l = qh(t, Array.isArray(e) ? e : [e])
		Hr[n] || (Hr[n] = new WeakMap())
		var o = Hr[n],
			i = [],
			s = new Set(),
			a = new Set(l),
			d = function (h) {
				!h || s.has(h) || (s.add(h), d(h.parentNode))
			}
		l.forEach(d)
		var v = function (h) {
			!h ||
				a.has(h) ||
				Array.prototype.forEach.call(h.children, function (g) {
					if (s.has(g)) v(g)
					else {
						var x = g.getAttribute(r),
							S = x !== null && x !== 'false',
							y = (Kt.get(g) || 0) + 1,
							C = (o.get(g) || 0) + 1
						Kt.set(g, y),
							o.set(g, C),
							i.push(g),
							y === 1 && S && Wr.set(g, !0),
							C === 1 && g.setAttribute(n, 'true'),
							S || g.setAttribute(r, 'true')
					}
				})
		}
		return (
			v(t),
			s.clear(),
			Oo++,
			function () {
				i.forEach(function (h) {
					var g = Kt.get(h) - 1,
						x = o.get(h) - 1
					Kt.set(h, g), o.set(h, x), g || (Wr.has(h) || h.removeAttribute(r), Wr.delete(h)), x || h.removeAttribute(n)
				}),
					Oo--,
					Oo || ((Kt = new WeakMap()), (Kt = new WeakMap()), (Wr = new WeakMap()), (Hr = {}))
			}
		)
	},
	tv = function (e, t, n) {
		n === void 0 && (n = 'data-aria-hidden')
		var r = Array.from(Array.isArray(e) ? e : [e]),
			l = t || Jh(e)
		return l
			? (r.push.apply(r, Array.from(l.querySelectorAll('[aria-live]'))), ev(r, l, n, 'aria-hidden'))
			: function () {
					return null
			  }
	}
const Yd = 'Dialog',
	[Xd, Wv] = Md(Yd),
	[nv, Qe] = Xd(Yd),
	rv = (e) => {
		const { __scopeDialog: t, children: n, open: r, defaultOpen: l, onOpenChange: o, modal: i = !0 } = e,
			s = p.useRef(null),
			a = p.useRef(null),
			[d = !1, v] = Qm({ prop: r, defaultProp: l, onChange: o })
		return p.createElement(
			nv,
			{
				scope: t,
				triggerRef: s,
				contentRef: a,
				contentId: sl(),
				titleId: sl(),
				descriptionId: sl(),
				open: d,
				onOpenChange: v,
				onOpenToggle: p.useCallback(() => v((h) => !h), [v]),
				modal: i,
			},
			n
		)
	},
	lv = 'DialogTrigger',
	ov = p.forwardRef((e, t) => {
		const { __scopeDialog: n, ...r } = e,
			l = Qe(lv, n),
			o = kt(t, l.triggerRef)
		return p.createElement(
			De.button,
			W(
				{
					type: 'button',
					'aria-haspopup': 'dialog',
					'aria-expanded': l.open,
					'aria-controls': l.contentId,
					'data-state': Ds(l.open),
				},
				r,
				{ ref: o, onClick: Ee(e.onClick, l.onOpenToggle) }
			)
		)
	}),
	Gd = 'DialogPortal',
	[iv, Zd] = Xd(Gd, { forceMount: void 0 }),
	sv = (e) => {
		const { __scopeDialog: t, forceMount: n, children: r, container: l } = e,
			o = Qe(Gd, t)
		return p.createElement(
			iv,
			{ scope: t, forceMount: n },
			p.Children.map(r, (i) =>
				p.createElement(ql, { present: n || o.open }, p.createElement(ph, { asChild: !0, container: l }, i))
			)
		)
	},
	Mi = 'DialogOverlay',
	uv = p.forwardRef((e, t) => {
		const n = Zd(Mi, e.__scopeDialog),
			{ forceMount: r = n.forceMount, ...l } = e,
			o = Qe(Mi, e.__scopeDialog)
		return o.modal ? p.createElement(ql, { present: r || o.open }, p.createElement(av, W({}, l, { ref: t }))) : null
	}),
	av = p.forwardRef((e, t) => {
		const { __scopeDialog: n, ...r } = e,
			l = Qe(Mi, n)
		return p.createElement(
			Zh,
			{ as: Rs, allowPinchZoom: !0, shards: [l.contentRef] },
			p.createElement(
				De.div,
				W({ 'data-state': Ds(l.open) }, r, { ref: t, style: { pointerEvents: 'auto', ...r.style } })
			)
		)
	}),
	cr = 'DialogContent',
	cv = p.forwardRef((e, t) => {
		const n = Zd(cr, e.__scopeDialog),
			{ forceMount: r = n.forceMount, ...l } = e,
			o = Qe(cr, e.__scopeDialog)
		return p.createElement(
			ql,
			{ present: r || o.open },
			o.modal ? p.createElement(dv, W({}, l, { ref: t })) : p.createElement(fv, W({}, l, { ref: t }))
		)
	}),
	dv = p.forwardRef((e, t) => {
		const n = Qe(cr, e.__scopeDialog),
			r = p.useRef(null),
			l = kt(t, n.contentRef, r)
		return (
			p.useEffect(() => {
				const o = r.current
				if (o) return tv(o)
			}, []),
			p.createElement(
				Jd,
				W({}, e, {
					ref: l,
					trapFocus: n.open,
					disableOutsidePointerEvents: !0,
					onCloseAutoFocus: Ee(e.onCloseAutoFocus, (o) => {
						var i
						o.preventDefault(), (i = n.triggerRef.current) === null || i === void 0 || i.focus()
					}),
					onPointerDownOutside: Ee(e.onPointerDownOutside, (o) => {
						const i = o.detail.originalEvent,
							s = i.button === 0 && i.ctrlKey === !0
						;(i.button === 2 || s) && o.preventDefault()
					}),
					onFocusOutside: Ee(e.onFocusOutside, (o) => o.preventDefault()),
				})
			)
		)
	}),
	fv = p.forwardRef((e, t) => {
		const n = Qe(cr, e.__scopeDialog),
			r = p.useRef(!1),
			l = p.useRef(!1)
		return p.createElement(
			Jd,
			W({}, e, {
				ref: t,
				trapFocus: !1,
				disableOutsidePointerEvents: !1,
				onCloseAutoFocus: (o) => {
					var i
					if (((i = e.onCloseAutoFocus) === null || i === void 0 || i.call(e, o), !o.defaultPrevented)) {
						var s
						r.current || (s = n.triggerRef.current) === null || s === void 0 || s.focus(), o.preventDefault()
					}
					;(r.current = !1), (l.current = !1)
				},
				onInteractOutside: (o) => {
					var i, s
					;(i = e.onInteractOutside) === null || i === void 0 || i.call(e, o),
						o.defaultPrevented || ((r.current = !0), o.detail.originalEvent.type === 'pointerdown' && (l.current = !0))
					const a = o.target
					;((s = n.triggerRef.current) === null || s === void 0 ? void 0 : s.contains(a)) && o.preventDefault(),
						o.detail.originalEvent.type === 'focusin' && l.current && o.preventDefault()
				},
			})
		)
	}),
	Jd = p.forwardRef((e, t) => {
		const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: l, onCloseAutoFocus: o, ...i } = e,
			s = Qe(cr, n),
			a = p.useRef(null),
			d = kt(t, a)
		return (
			vh(),
			p.createElement(
				p.Fragment,
				null,
				p.createElement(
					ih,
					{ asChild: !0, loop: !0, trapped: r, onMountAutoFocus: l, onUnmountAutoFocus: o },
					p.createElement(
						rh,
						W(
							{
								role: 'dialog',
								id: s.contentId,
								'aria-describedby': s.descriptionId,
								'aria-labelledby': s.titleId,
								'data-state': Ds(s.open),
							},
							i,
							{ ref: d, onDismiss: () => s.onOpenChange(!1) }
						)
					)
				),
				!1
			)
		)
	}),
	pv = 'DialogTitle',
	mv = p.forwardRef((e, t) => {
		const { __scopeDialog: n, ...r } = e,
			l = Qe(pv, n)
		return p.createElement(De.h2, W({ id: l.titleId }, r, { ref: t }))
	}),
	hv = 'DialogClose',
	vv = p.forwardRef((e, t) => {
		const { __scopeDialog: n, ...r } = e,
			l = Qe(hv, n)
		return p.createElement(
			De.button,
			W({ type: 'button' }, r, { ref: t, onClick: Ee(e.onClick, () => l.onOpenChange(!1)) })
		)
	})
function Ds(e) {
	return e ? 'open' : 'closed'
}
const dr = rv,
	Fl = ov,
	fr = sv,
	pr = uv,
	mr = cv,
	hr = mv,
	sn = vv
function gv(e, t) {
	if (e == null) return {}
	var n = {},
		r = Object.keys(e),
		l,
		o
	for (o = 0; o < r.length; o++) (l = r[o]), !(t.indexOf(l) >= 0) && (n[l] = e[l])
	return n
}
var yv = ['color'],
	vr = p.forwardRef(function (e, t) {
		var n = e.color,
			r = n === void 0 ? 'currentColor' : n,
			l = gv(e, yv)
		return p.createElement(
			'svg',
			Object.assign(
				{ width: '15', height: '15', viewBox: '0 0 15 15', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },
				l,
				{ ref: t }
			),
			p.createElement('path', {
				d: 'M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z',
				fill: r,
				fillRule: 'evenodd',
				clipRule: 'evenodd',
			})
		)
	})
const ca = [
		{
			imageUrl: '../public/assets/images/event-1.jpeg',
			date: '2023/12/26',
			title: '參與台北寵物論壇，爭取貓咪友善環境',
			content: '炎炎夏日的周六，我走進了台北寵物論壇，帶著一副貓耳髮箍，決定要全力宣傳「貓咪至上」的理念！',
		},
		{
			imageUrl: '../public/assets/images/event-2.jpeg',
			date: '2023/12/24',
			title: '掃街模式開啟！帶著你的貓耳，來和我一起走！',
			content: '街上氣氛真的很棒，從小孩到大人，甚至有些狗狗朋友都帶著貓耳來找我握手，真的太可愛了！',
		},
		{
			imageUrl: '../public/assets/images/event-3.jpeg',
			date: '2023/12/20',
			title: '收容所模特兒大比拼！',
			content: '今天的收容所不再是一片寂靜。為了讓更多人認識到這裡的毛孩子，我們舉辦了一場前所未有的「模特兒走秀」！',
		},
	],
	xv = () =>
		u.jsxs('section', {
			id: 'event',
			className: 'py-16 px-[4vw] lg:py-26 lg:px-[8.5vw]',
			children: [
				u.jsx('p', {
					className:
						'w-40 py-2 mx-auto mb-2 text-base font-bold text-center text-white uppercase rounded-xl bg-text-color',
					children: 'LATEST EVENTS',
				}),
				u.jsx('h1', { className: 'text-5.5xl lg:text-6xl text-center gradient-text', children: '最新活動' }),
				u.jsxs('article', {
					className: 'flex flex-col justify-center gap-6 mt-10 lg:flex-row lg:mt-16',
					children: [
						u.jsxs('div', {
							className: 'flex flex-col justify-between',
							children: [
								u.jsx('img', {
									src: '../public/assets/images/event-1.jpeg',
									alt: 'event1',
									className: 'object-cover w-full h-[480px] rounded-2xl',
								}),
								u.jsxs('div', {
									className: 'mt-4',
									children: [
										u.jsx('p', { className: 'text-sm text-slate-500', children: '2023/12/26' }),
										u.jsxs(dr, {
											children: [
												u.jsx(Fl, {
													asChild: !0,
													children: u.jsx('h5', {
														className: 'my-2 font-bold cursor-pointer hover:text-text-color/80',
														children: '參與台北寵物論壇，爭取貓咪友善環境',
													}),
												}),
												u.jsxs(fr, {
													children: [
														u.jsx(pr, {
															className: 'bg-text-color/30 data-[state=open]:animate-overlayShow fixed inset-0',
														}),
														u.jsxs(mr, {
															className:
																'data-[state=open]:animate-contentShow fixed top-1/2 pb-12 left-1/2 max-h-[80%] overflow-y-scroll w-11/12 -translate-x-1/2 -translate-y-1/2 rounded-3xl bg-white px-12 shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] outline-none',
															children: [
																u.jsx(hr, {
																	className: 'my-6 font-bold text-text-color',
																	children: u.jsx('h3', { children: '最新活動' }),
																}),
																u.jsxs('article', {
																	className: 'flex flex-col gap-8 lg:flex-row',
																	children: [
																		u.jsxs('section', {
																			children: [
																				u.jsx('img', {
																					src: '../public/assets/images/event-1.jpeg',
																					alt: 'event1',
																					className:
																						'object-cover w-full lg:min-w-[450px] h-[450px] lg:h-80 rounded-2xl',
																				}),
																				u.jsx('p', {
																					className: 'mt-4 mb-2 text-sm',
																					children: '參與台北寵物論壇，爭取貓咪友善環境',
																				}),
																				u.jsxs('div', {
																					className: 'flex items-center space-x-4',
																					children: [
																						u.jsx('p', { children: '分享' }),
																						u.jsx('button', {
																							children: u.jsx('img', {
																								width: '28',
																								height: '28',
																								src: 'https://img.icons8.com/ios-filled/50/DA7D4A/facebook-new.png',
																								alt: 'facebook',
																							}),
																						}),
																						u.jsx('button', {
																							children: u.jsx('img', {
																								width: '28',
																								height: '28',
																								src: 'https://img.icons8.com/ios-filled/50/DA7D4A/instagram-new.png',
																								alt: 'instagram',
																							}),
																						}),
																						u.jsx('button', {
																							children: u.jsx('img', {
																								width: '28',
																								height: '28',
																								src: 'https://img.icons8.com/fluency-systems-filled/50/DA7D4A/line-me.png',
																								alt: 'line',
																							}),
																						}),
																						u.jsx('button', {
																							children: u.jsx('img', {
																								width: '28',
																								height: '28',
																								src: 'https://img.icons8.com/fluency-systems-filled/50/DA7D4A/twitter.png',
																								alt: 'twitter',
																							}),
																						}),
																					],
																				}),
																			],
																		}),
																		u.jsxs('section', {
																			className: 'w-full',
																			children: [
																				u.jsxs('div', {
																					className: 'mb-10 space-y-2',
																					children: [
																						u.jsx('h2', {
																							className: 'font-bold text-primary-color',
																							children: '參與台北寵物論壇，爭取貓咪友善環境',
																						}),
																						u.jsx('p', { className: 'text-sm text-slate-500', children: '2023/12/26' }),
																					],
																				}),
																				u.jsxs('p', {
																					className: 'mb-20 text-base',
																					children: [
																						'台北市 — 今日，立法院喵星區的優秀立法委員喵力翰在台北寵物論壇中發表了一場引人注目的演講，強調了打造貓咪友善環境的重要性，並提出一系列相應政策的建議。',
																						u.jsx('br', {}),
																						u.jsx('br', {}),
																						'在演講中，喵力翰立委強調了現代社會中寵物貓咪對人們生活的重要性，並指出我們應該共同努力，確保牠們在城市中擁有安全、舒適的生活空間。他提到，貓咪的存在不僅僅是寵物，更是家庭成員，應該得到應有的尊重與照顧。',
																						u.jsx('br', {}),
																						u.jsx('br', {}),
																						'喵力翰在演講中呼籲增加公共空間中的貓咪友善設施，包括貓咪休息區、遊戲區和專屬的餵食站。他表示，這不僅能提高城市的宜居性，還能促進社區的凝聚力，讓人們更好地享受城市生活。',
																						u.jsx('br', {}),
																						u.jsx('br', {}),
																						'為了實現這一目標，喵力翰提出了一系列具體的政策建議。 首先，他建議增加城市中的貓咪專屬公園，提供一個安全、無車輛的環境，讓貓咪可以自由遊玩。其次，他呼籲建立動物友善型社區，推動居民更多地參與動物保護活動，共同建設一個和諧的生活環境。',
																						u.jsx('br', {}),
																						u.jsx('br', {}),
																						'在論壇中，喵力翰提到，他將致力於推動一系列法案，以保障貓咪的權益。其中包括建立貓咪訓練中心，提高領養貓咪的知識普及度，以及加強動物保護法規。他認為，這些舉措將有助於提升社會對貓咪的關注度，並確保牠們在人類社會中得到應有的尊重。',
																						u.jsx('br', {}),
																						u.jsx('br', {}),
																						'此外，立委喵力翰表示，他將積極與其他立法委員合作，共同推動這一系列的法案。 他強調，這不僅是一個為貓咪發聲的行動，更是為了建立一個更加友善、關愛的社會，讓每一個家庭都能夠擁有一個快樂、和諧的生活環境。',
																						u.jsx('br', {}),
																						u.jsx('br', {}),
																						'這場寵物論壇為我們提供了一個思考如何打造更友善社會的契機，立委喵力翰的參與使得這一目標更加具體可行。台灣將因有如喵力翰這樣關心動物權益的立法委員而變得更加溫馨。',
																					],
																				}),
																				u.jsxs('div', {
																					className: 'p-4 bg-text-color-secondary/10 rounded-xl',
																					children: [
																						u.jsx('p', { className: 'mb-4 font-semibold', children: '更多活動' }),
																						u.jsxs('div', {
																							className: 'flex space-x-4',
																							children: [
																								u.jsxs('div', {
																									className: 'space-y-3 w-60',
																									children: [
																										u.jsx('img', {
																											src: '../public/assets/images/event-2.jpeg',
																											alt: 'event2',
																											className: 'object-cover w-64 h-36 rounded-2xl',
																										}),
																										u.jsx('p', {
																											children: '掃街模式開啟！帶著你的貓耳，來和我一起走！',
																										}),
																									],
																								}),
																								u.jsxs('div', {
																									className: 'space-y-3 w-60',
																									children: [
																										u.jsx('img', {
																											src: '../public/assets/images/event-3.jpeg',
																											alt: 'event3',
																											className: 'object-cover w-64 h-36 rounded-2xl',
																										}),
																										u.jsx('p', { children: '收容所模特兒大比拼！' }),
																									],
																								}),
																							],
																						}),
																					],
																				}),
																			],
																		}),
																	],
																}),
																u.jsx(sn, {
																	className:
																		'absolute p-1.5 text-white rounded-full cursor-pointer bg-text-color hover:bg-text-color/80 top-5 right-8',
																	children: u.jsx(vr, {}),
																}),
															],
														}),
													],
												}),
											],
										}),
										u.jsx('p', {
											className: 'text-base',
											children:
												'炎炎夏日的周六，我走進了台北寵物論壇，帶著一副貓耳髮箍，決定要全力宣傳「貓咪至上」的理念！我相信，我們的都市中，每一隻貓咪都應該有自己的 VIP 休憩空間。',
										}),
									],
								}),
							],
						}),
						u.jsxs('div', {
							className: 'flex flex-col justify-between',
							children: [
								u.jsx('ul', {
									className: 'mb-6 space-y-6',
									children: ca.map((e, t) =>
										u.jsxs(
											'li',
											{
												className: 'flex gap-4',
												children: [
													u.jsx('img', {
														src: e.imageUrl,
														alt: e.title,
														className: 'object-cover w-64 h-36 rounded-2xl',
													}),
													u.jsxs('div', {
														children: [
															u.jsx('p', { className: 'text-sm text-slate-500', children: e.date }),
															u.jsxs(dr, {
																children: [
																	u.jsx(Fl, {
																		asChild: !0,
																		children: u.jsx('h5', {
																			className: 'my-2 font-bold cursor-pointer hover:text-text-color/80',
																			children: e.title,
																		}),
																	}),
																	u.jsxs(fr, {
																		children: [
																			u.jsx(pr, {
																				className:
																					'bg-text-color/30 data-[state=open]:animate-overlayShow fixed inset-0',
																			}),
																			u.jsxs(mr, {
																				className:
																					'data-[state=open]:animate-contentShow fixed top-1/2 pb-12 left-1/2 max-h-[80%] overflow-y-scroll w-11/12 -translate-x-1/2 -translate-y-1/2 rounded-3xl bg-white px-12 shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] outline-none',
																				children: [
																					u.jsx(hr, {
																						className: 'my-6 font-bold text-text-color',
																						children: u.jsx('h3', { children: '最新活動' }),
																					}),
																					u.jsxs('article', {
																						className: 'flex flex-col gap-8 lg:flex-row',
																						children: [
																							u.jsxs('section', {
																								children: [
																									u.jsx('img', {
																										src: e.imageUrl,
																										alt: 'event1',
																										className:
																											'object-cover w-full lg:min-w-[450px] h-[450px] lg:h-80 rounded-2xl',
																									}),
																									u.jsx('p', { className: 'mt-4 mb-2 text-sm', children: e.title }),
																									u.jsxs('div', {
																										className: 'flex items-center space-x-4',
																										children: [
																											u.jsx('p', { children: '分享' }),
																											u.jsx('button', {
																												children: u.jsx('img', {
																													width: '28',
																													height: '28',
																													src: 'https://img.icons8.com/ios-filled/50/DA7D4A/facebook-new.png',
																													alt: 'facebook',
																												}),
																											}),
																											u.jsx('button', {
																												children: u.jsx('img', {
																													width: '28',
																													height: '28',
																													src: 'https://img.icons8.com/ios-filled/50/DA7D4A/instagram-new.png',
																													alt: 'instagram',
																												}),
																											}),
																											u.jsx('button', {
																												children: u.jsx('img', {
																													width: '28',
																													height: '28',
																													src: 'https://img.icons8.com/fluency-systems-filled/50/DA7D4A/line-me.png',
																													alt: 'line',
																												}),
																											}),
																											u.jsx('button', {
																												children: u.jsx('img', {
																													width: '28',
																													height: '28',
																													src: 'https://img.icons8.com/fluency-systems-filled/50/DA7D4A/twitter.png',
																													alt: 'twitter',
																												}),
																											}),
																										],
																									}),
																								],
																							}),
																							u.jsxs('section', {
																								className: 'w-full',
																								children: [
																									u.jsxs('div', {
																										className: 'mb-10 space-y-2',
																										children: [
																											u.jsx('h2', {
																												className: 'font-bold text-primary-color',
																												children: e.title,
																											}),
																											u.jsx('p', {
																												className: 'text-sm text-slate-500',
																												children: e.date,
																											}),
																										],
																									}),
																									u.jsx('p', {
																										className: 'mb-20 text-base whitespace-pre-line',
																										children: e.content,
																									}),
																									u.jsxs('div', {
																										className: 'p-4 bg-text-color-secondary/10 rounded-xl',
																										children: [
																											u.jsx('p', {
																												className: 'mb-4 font-semibold',
																												children: '更多活動',
																											}),
																											u.jsx('div', {
																												className: 'flex space-x-4',
																												children: ca
																													.filter((n, r) => r !== t)
																													.map((n, r) =>
																														u.jsxs(
																															'div',
																															{
																																className: 'space-y-3 w-60',
																																children: [
																																	u.jsx('img', {
																																		src: n.imageUrl,
																																		alt: `event${r + 2}`,
																																		className: 'object-cover w-64 h-36 rounded-2xl',
																																	}),
																																	u.jsx('p', { children: n.title }),
																																],
																															},
																															r
																														)
																													),
																											}),
																										],
																									}),
																								],
																							}),
																						],
																					}),
																					u.jsx(sn, {
																						className:
																							'absolute p-1.5 text-white rounded-full cursor-pointer bg-text-color hover:bg-text-color/80 top-5 right-8',
																						children: u.jsx(vr, {}),
																					}),
																				],
																			}),
																		],
																	}),
																],
															}),
															u.jsx('p', { className: 'text-base', children: e.content }),
														],
													}),
												],
											},
											t
										)
									),
								}),
								u.jsxs('button', {
									className: 'flex items-center justify-center py-4 space-x-1 rounded-full w-36 bg-slate-100',
									children: [
										u.jsx('span', { className: 'text-base font-bold', children: '查看更多' }),
										u.jsx('img', {
											width: '28',
											height: '28',
											src: 'https://img.icons8.com/sf-regular-filled/48/right.png',
											alt: 'right-arrow',
										}),
									],
								}),
							],
						}),
					],
				}),
			],
		}),
	wv = () =>
		u.jsxs('div', {
			className: 'grid py-16 pl-4 lg:grid-cols-2 sm:pl-9 lg:pl-0 bg-bg-color-2 lg:place-items-center',
			children: [
				u.jsxs('div', {
					className: 'mb-6 lg:mb-0',
					children: [
						u.jsxs('div', {
							className: 'flex items-center space-x-2',
							children: [
								u.jsx('span', {
									className:
										'text-white font-black px-2.5 py-0.5 rounded-full bg-gradient-to-r from-gradient-color-1 to-gradient-color-2 text-xl',
									children: '3',
								}),
								u.jsx('span', { className: 'text-2xl font-bold text-primary-color', children: '喵立翰 Miao Li-Han' }),
							],
						}),
						u.jsxs('ul', {
							className: 'flex items-center my-4 space-x-2',
							children: [
								u.jsx('a', {
									href: '#',
									className: 'rounded-full bg-white p-1.5',
									children: u.jsx('img', {
										width: '28',
										height: '28',
										src: 'https://img.icons8.com/ios-filled/50/DA7D4A/facebook-new.png',
										alt: 'facebook-new',
									}),
								}),
								u.jsx('a', {
									href: '#',
									className: 'rounded-full bg-white p-1.5',
									children: u.jsx('img', {
										width: '28',
										height: '28',
										src: 'https://img.icons8.com/ios-filled/50/DA7D4A/instagram-new.png',
										alt: 'facebook-new',
									}),
								}),
								u.jsx('a', {
									href: '#',
									className: 'rounded-full bg-white p-1.5',
									children: u.jsx('img', {
										width: '28',
										height: '28',
										src: 'https://img.icons8.com/ios-filled/50/DA7D4A/youtube-play.png',
										alt: 'facebook-new',
									}),
								}),
							],
						}),
						u.jsx('p', { className: 'text-sm', children: '© 2023 喵立翰 Miao Li-Han 版權所有' }),
					],
				}),
				u.jsxs('div', {
					children: [
						u.jsx('h4', { className: 'mb-4 font-bold', children: '競選總部' }),
						u.jsxs('ul', {
							className: 'text-base',
							children: [
								u.jsx('li', { children: '辦公室地址：喵星區，毛茸茸大道88號，喵喵大樓3樓' }),
								u.jsx('li', { children: '電話：(02) 888-5678' }),
								u.jsx('li', { children: '電子郵件地址：meowoffice@linmeow.tw' }),
							],
						}),
					],
				}),
			],
		}),
	Sv = () =>
		u.jsxs('header', {
			className: 'flex flex-wrap items-center justify-between px-[3.4vw] py-6 mx-auto ',
			children: [
				u.jsxs('a', {
					href: '/',
					className: 'flex items-center space-x-2',
					children: [
						u.jsx('img', { src: '../public/assets/logo.png', alt: 'logo' }),
						u.jsx('span', { className: 'text-2xl font-bold text-primary-color', children: '喵立翰 Miao Li-Han' }),
					],
				}),
				u.jsxs('nav', {
					className: 'flex-wrap items-center justify-center hidden ml-auto mr-auto space-x-6 lg:flex',
					children: [
						u.jsx('a', { href: '#advocate', children: '候選人主張' }),
						u.jsx('a', { href: '#event', children: '最新活動' }),
						u.jsx('a', { href: '#issue', children: '政策議題' }),
						u.jsx('a', { href: '#support', children: '小額捐款' }),
						u.jsx('a', { href: '#service', children: '民眾服務信箱' }),
					],
				}),
				u.jsxs('ul', {
					className: 'items-center hidden space-x-4 sm:flex',
					children: [
						u.jsx('a', {
							href: '#',
							children: u.jsx('img', {
								width: '28',
								height: '28',
								src: 'https://img.icons8.com/ios-filled/50/DA7D4A/facebook-new.png',
								alt: 'facebook',
							}),
						}),
						u.jsx('a', {
							href: '#',
							children: u.jsx('img', {
								width: '28',
								height: '28',
								src: 'https://img.icons8.com/ios-filled/50/DA7D4A/instagram-new.png',
								alt: 'instagram',
							}),
						}),
						u.jsx('a', {
							href: '#',
							children: u.jsx('img', {
								width: '28',
								height: '28',
								src: 'https://img.icons8.com/ios-filled/50/DA7D4A/youtube-play.png',
								alt: 'youtube',
							}),
						}),
					],
				}),
			],
		}),
	da = [
		{
			title: `為毛孩子謀福利！
推動寵物醫療保障方案`,
			imageUrl: '../public/assets/images/issue-1.png',
			content: `設立寵物醫療基金
每年撥款新台幣 10 億元，專款專用於支援家庭寵物的醫療費用

提供醫療補助
每隻寵物每年可獲得高達新台幣 20,000 元的醫療補助，減輕飼主的經濟壓力

合作動物醫院
目前已有和超過 200 家動物醫院進行初步的合作討論`,
		},
		{
			title: `打造休閒天堂！
推廣寵物休閒與娛樂場所`,
			imageUrl: '../public/assets/images/issue-2.png',
			content: '',
		},
		{
			title: `推廣寵物飼養教育！
讓愛更加專業`,
			imageUrl: '../public/assets/images/issue-3.png',
			content: '',
		},
	],
	Ev = () => {
		const [e, t] = p.useState(!1)
		return u.jsxs('article', {
			id: 'issue',
			className: 'py-16 lg:py-26 ',
			children: [
				u.jsx('p', {
					className:
						'w-40 py-2 mx-auto mb-2 text-base font-bold text-center text-white uppercase rounded-xl bg-text-color',
					children: 'POLICY ISSUES',
				}),
				u.jsx('h1', { className: 'text-5.5xl lg:text-6xl text-center gradient-text', children: '政策議題' }),
				u.jsx('section', {
					className: 'flex flex-row flex-wrap justify-center gap-8 px-4 mt-20 mb-6 lg:mt-16',
					children: da.map((n, r) =>
						u.jsxs(
							'div',
							{
								children: [
									u.jsx('h4', {
										className: 'mb-3 font-medium text-center whitespace-pre-line md:text-left',
										children: n.title,
									}),
									u.jsx('img', {
										src: n.imageUrl,
										alt: n.title,
										className: 'object-cover w-full cursor-pointer md:h-72 md:w-96 rounded-4xl',
										onClick: () => t(!0),
									}),
									u.jsx(dr, {
										open: e,
										onOpenChange: (l) => !l && t(!1),
										children: u.jsxs(fr, {
											children: [
												u.jsx(pr, {
													className: 'bg-text-color/30 data-[state=open]:animate-overlayShow fixed inset-0',
												}),
												u.jsxs(mr, {
													className:
														'data-[state=open]:animate-contentShow fixed top-1/2 pb-12 left-1/2 max-h-[80%] overflow-y-scroll w-11/12 -translate-x-1/2 -translate-y-1/2 rounded-3xl bg-white px-12 shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] outline-none',
													children: [
														u.jsx(hr, {
															className: 'my-6 font-bold text-text-color',
															children: u.jsx('h3', { children: '政策議題' }),
														}),
														u.jsxs('article', {
															className: 'flex flex-col gap-8 lg:flex-row',
															children: [
																u.jsxs('section', {
																	children: [
																		u.jsx('img', {
																			src: n.imageUrl,
																			alt: 'event1',
																			className: 'object-contain w-96 lg:w-full lg:min-w-[450px] rounded-2xl',
																		}),
																		u.jsx('p', { className: 'mt-4 mb-2 text-sm', children: n.title }),
																		u.jsxs('div', {
																			className: 'flex items-center space-x-4',
																			children: [
																				u.jsx('p', { children: '分享' }),
																				u.jsx('button', {
																					children: u.jsx('img', {
																						width: '28',
																						height: '28',
																						src: 'https://img.icons8.com/ios-filled/50/DA7D4A/facebook-new.png',
																						alt: 'facebook',
																					}),
																				}),
																				u.jsx('button', {
																					children: u.jsx('img', {
																						width: '28',
																						height: '28',
																						src: 'https://img.icons8.com/ios-filled/50/DA7D4A/instagram-new.png',
																						alt: 'instagram',
																					}),
																				}),
																				u.jsx('button', {
																					children: u.jsx('img', {
																						width: '28',
																						height: '28',
																						src: 'https://img.icons8.com/fluency-systems-filled/50/DA7D4A/line-me.png',
																						alt: 'line',
																					}),
																				}),
																				u.jsx('button', {
																					children: u.jsx('img', {
																						width: '28',
																						height: '28',
																						src: 'https://img.icons8.com/fluency-systems-filled/50/DA7D4A/twitter.png',
																						alt: 'twitter',
																					}),
																				}),
																			],
																		}),
																	],
																}),
																u.jsxs('section', {
																	className: 'w-full',
																	children: [
																		u.jsx('div', {
																			className: 'mb-10 space-y-2',
																			children: u.jsx('h2', {
																				className: 'font-bold text-primary-color',
																				children: n.title,
																			}),
																		}),
																		u.jsx('p', {
																			className: 'mb-20 text-base whitespace-pre-line',
																			children: n.content
																				.split(
																					`
`
																				)
																				.map((l, o) =>
																					u.jsxs(
																						ka.Fragment,
																						{
																							children: [
																								l.includes('寵物醫療基金') && u.jsx('strong', { children: l }),
																								l.includes('提供醫療補助') && u.jsx('strong', { children: l }),
																								l.includes('合作動物醫院') && u.jsx('strong', { children: l }),
																								!l.includes('寵物醫療基金') &&
																									!l.includes('提供醫療補助') &&
																									!l.includes('合作動物醫院') &&
																									l,
																								u.jsx('br', {}),
																							],
																						},
																						o
																					)
																				),
																		}),
																		u.jsxs('div', {
																			className: 'p-4 bg-text-color-secondary/10 rounded-xl',
																			children: [
																				u.jsx('p', { className: 'mb-4 font-semibold', children: '更多政策議題' }),
																				u.jsx('div', {
																					className: 'flex space-x-4',
																					children: da
																						.filter((l, o) => o !== r)
																						.map((l, o) =>
																							u.jsxs(
																								'div',
																								{
																									className: 'space-y-3 w-60',
																									children: [
																										u.jsx('img', {
																											src: l.imageUrl,
																											alt: `event${o + 2}`,
																											className: 'object-cover w-64 h-36 rounded-2xl',
																										}),
																										u.jsx('p', { children: l.title }),
																									],
																								},
																								o
																							)
																						),
																				}),
																			],
																		}),
																	],
																}),
															],
														}),
														u.jsx(vr, {
															className:
																'absolute w-8 h-8 p-1.5 text-white rounded-full cursor-pointer bg-text-color hover:bg-text-color/80 top-5 right-8',
															onClick: () => t(!1),
														}),
													],
												}),
											],
										}),
									}),
								],
							},
							r
						)
					),
				}),
			],
		})
	},
	Cv = p.forwardRef((e, t) =>
		p.createElement(
			De.label,
			W({}, e, {
				ref: t,
				onMouseDown: (n) => {
					var r
					;(r = e.onMouseDown) === null || r === void 0 || r.call(e, n),
						!n.defaultPrevented && n.detail > 1 && n.preventDefault()
				},
			})
		)
	),
	[Ls, Hv] = Md('Form'),
	qd = 'Form',
	[kv, Os] = Ls(qd),
	[Nv, _v] = Ls(qd),
	jv = p.forwardRef((e, t) => {
		const { __scopeForm: n, onClearServerErrors: r = () => {}, ...l } = e,
			o = p.useRef(null),
			i = kt(t, o),
			[s, a] = p.useState({}),
			d = p.useCallback(($) => s[$], [s]),
			v = p.useCallback(
				($, R) =>
					a((M) => {
						var A
						return { ...M, [$]: { ...((A = M[$]) !== null && A !== void 0 ? A : {}), ...R } }
					}),
				[]
			),
			h = p.useCallback(($) => {
				a((R) => ({ ...R, [$]: void 0 })), c((R) => ({ ...R, [$]: {} }))
			}, []),
			[g, x] = p.useState({}),
			S = p.useCallback(
				($) => {
					var R
					return (R = g[$]) !== null && R !== void 0 ? R : []
				},
				[g]
			),
			y = p.useCallback(($, R) => {
				x((M) => {
					var A
					return { ...M, [$]: [...((A = M[$]) !== null && A !== void 0 ? A : []), R] }
				})
			}, []),
			C = p.useCallback(($, R) => {
				x((M) => {
					var A
					return { ...M, [$]: ((A = M[$]) !== null && A !== void 0 ? A : []).filter((Nt) => Nt.id !== R) }
				})
			}, []),
			[f, c] = p.useState({}),
			m = p.useCallback(
				($) => {
					var R
					return (R = f[$]) !== null && R !== void 0 ? R : {}
				},
				[f]
			),
			w = p.useCallback(($, R) => {
				c((M) => {
					var A
					return { ...M, [$]: { ...((A = M[$]) !== null && A !== void 0 ? A : {}), ...R } }
				})
			}, []),
			[E, j] = p.useState({}),
			_ = p.useCallback(($, R) => {
				j((M) => {
					const A = new Set(M[$]).add(R)
					return { ...M, [$]: A }
				})
			}, []),
			N = p.useCallback(($, R) => {
				j((M) => {
					const A = new Set(M[$])
					return A.delete(R), { ...M, [$]: A }
				})
			}, []),
			F = p.useCallback(
				($) => {
					var R
					return Array.from((R = E[$]) !== null && R !== void 0 ? R : []).join(' ') || void 0
				},
				[E]
			)
		return p.createElement(
			kv,
			{
				scope: n,
				getFieldValidity: d,
				onFieldValidityChange: v,
				getFieldCustomMatcherEntries: S,
				onFieldCustomMatcherEntryAdd: y,
				onFieldCustomMatcherEntryRemove: C,
				getFieldCustomErrors: m,
				onFieldCustomErrorsChange: w,
				onFieldValiditionClear: h,
			},
			p.createElement(
				Nv,
				{ scope: n, onFieldMessageIdAdd: _, onFieldMessageIdRemove: N, getFieldDescription: F },
				p.createElement(
					De.form,
					W({}, l, {
						ref: i,
						onInvalid: Ee(e.onInvalid, ($) => {
							const R = nf($.currentTarget)
							R === $.target && R.focus(), $.preventDefault()
						}),
						onSubmit: Ee(e.onSubmit, r, { checkForDefaultPrevented: !1 }),
						onReset: Ee(e.onReset, r),
					})
				)
			)
		)
	}),
	ef = 'FormField',
	[$v, tf] = Ls(ef),
	Pv = p.forwardRef((e, t) => {
		const { __scopeForm: n, name: r, serverInvalid: l = !1, ...o } = e,
			s = Os(ef, n).getFieldValidity(r),
			a = sl()
		return p.createElement(
			$v,
			{ scope: n, id: a, name: r, serverInvalid: l },
			p.createElement(De.div, W({ 'data-valid': Fs(s, l), 'data-invalid': Ms(s, l) }, o, { ref: t }))
		)
	}),
	fa = 'FormLabel',
	Tv = p.forwardRef((e, t) => {
		const { __scopeForm: n, ...r } = e,
			l = Os(fa, n),
			o = tf(fa, n),
			i = r.htmlFor || o.id,
			s = l.getFieldValidity(o.name)
		return p.createElement(
			Cv,
			W({ 'data-valid': Fs(s, o.serverInvalid), 'data-invalid': Ms(s, o.serverInvalid) }, r, { ref: t, htmlFor: i })
		)
	}),
	Fo = 'FormControl',
	Rv = p.forwardRef((e, t) => {
		const { __scopeForm: n, ...r } = e,
			l = Os(Fo, n),
			o = tf(Fo, n),
			i = _v(Fo, n),
			s = p.useRef(null),
			a = kt(t, s),
			d = r.name || o.name,
			v = r.id || o.id,
			h = l.getFieldCustomMatcherEntries(d),
			{ onFieldValidityChange: g, onFieldCustomErrorsChange: x, onFieldValiditionClear: S } = l,
			y = p.useCallback(
				async (c) => {
					if (zv(c.validity)) {
						const M = Mo(c.validity)
						g(d, M)
						return
					}
					const m = c.form ? new FormData(c.form) : new FormData(),
						w = [c.value, m],
						E = [],
						j = []
					h.forEach((M) => {
						Mv(M, w) ? j.push(M) : Iv(M) && E.push(M)
					})
					const _ = E.map(({ id: M, match: A }) => [M, A(...w)]),
						N = Object.fromEntries(_),
						F = Object.values(N).some(Boolean),
						$ = F
					c.setCustomValidity($ ? pa : '')
					const R = Mo(c.validity)
					if ((g(d, R), x(d, N), !F && j.length > 0)) {
						const M = j.map(({ id: P, match: D }) => D(...w).then((L) => [P, L])),
							A = await Promise.all(M),
							Nt = Object.fromEntries(A),
							kn = Object.values(Nt).some(Boolean)
						c.setCustomValidity(kn ? pa : '')
						const Nn = Mo(c.validity)
						g(d, Nn), x(d, Nt)
					}
				},
				[h, d, x, g]
			)
		p.useEffect(() => {
			const c = s.current
			if (c) {
				const m = () => y(c)
				return c.addEventListener('change', m), () => c.removeEventListener('change', m)
			}
		}, [y])
		const C = p.useCallback(() => {
			const c = s.current
			c && (c.setCustomValidity(''), S(d))
		}, [d, S])
		p.useEffect(() => {
			var c
			const m = (c = s.current) === null || c === void 0 ? void 0 : c.form
			if (m) return m.addEventListener('reset', C), () => m.removeEventListener('reset', C)
		}, [C]),
			p.useEffect(() => {
				const c = s.current,
					m = c == null ? void 0 : c.closest('form')
				if (m && o.serverInvalid) {
					const w = nf(m)
					w === c && w.focus()
				}
			}, [o.serverInvalid])
		const f = l.getFieldValidity(d)
		return p.createElement(
			De.input,
			W(
				{
					'data-valid': Fs(f, o.serverInvalid),
					'data-invalid': Ms(f, o.serverInvalid),
					'aria-invalid': o.serverInvalid ? !0 : void 0,
					'aria-describedby': i.getFieldDescription(d),
					title: '',
				},
				r,
				{
					ref: a,
					id: v,
					name: d,
					onInvalid: Ee(e.onInvalid, (c) => {
						const m = c.currentTarget
						y(m)
					}),
					onChange: Ee(e.onChange, (c) => {
						C()
					}),
				}
			)
		)
	}),
	pa = 'This value is not valid',
	Dv = p.forwardRef((e, t) => {
		const { __scopeForm: n, ...r } = e
		return p.createElement(De.button, W({ type: 'submit' }, r, { ref: t }))
	})
function Mo(e) {
	const t = {}
	for (const n in e) t[n] = e[n]
	return t
}
function Lv(e) {
	return e instanceof HTMLElement
}
function Ov(e) {
	return 'validity' in e
}
function Fv(e) {
	return Ov(e) && (e.validity.valid === !1 || e.getAttribute('aria-invalid') === 'true')
}
function nf(e) {
	const t = e.elements,
		[n] = Array.from(t).filter(Lv).filter(Fv)
	return n
}
function Mv(e, t) {
	return e.match.constructor.name === 'AsyncFunction' || Av(e.match, t)
}
function Iv(e) {
	return e.match.constructor.name === 'Function'
}
function Av(e, t) {
	return e(...t) instanceof Promise
}
function zv(e) {
	let t = !1
	for (const n in e) {
		const r = n
		if (r !== 'valid' && r !== 'customError' && e[r]) {
			t = !0
			break
		}
	}
	return t
}
function Fs(e, t) {
	if ((e == null ? void 0 : e.valid) === !0 && !t) return !0
}
function Ms(e, t) {
	if ((e == null ? void 0 : e.valid) === !1 || t) return !0
}
const Uv = jv,
	Qr = Pv,
	Kr = Tv,
	Yr = Rv,
	Vv = Dv,
	Bv = () => {
		const [e, t] = p.useState(0),
			[n, r] = p.useState(!1),
			[l, o] = p.useState(!1),
			i = () => r(!0),
			s = () => {
				r(!1), t(0)
			}
		return u.jsxs('article', {
			className:
				'flex flex-col sm:flex-row justify-center md:w-11/12 lg:w-full mx-auto gap-6 py-16 px-[4vw] lg:py-26 lg:px-[8.5vw]',
			children: [
				u.jsxs('div', {
					id: 'support',
					className:
						'bg-primary-color sm:w-[640px] h-[80vw] sm:h-[38vw] lg:h-[36vw] flex flex-col justify-between px-12 py-16 sm:px-6 sm:py-10 lg:px-12 lg:py-16 xl:px-16 xl:py-20 rounded-3xl',
					children: [
						u.jsxs('div', {
							className: 'text-white',
							children: [
								u.jsx('h1', {
									className: 'lg:text-5.5xl whitespace-nowrap mb-4 lg:mb-8 font-MantouSans ',
									children: '小額支持喵喵',
								}),
								u.jsx('h5', { children: '您的小筆捐款，是每隻毛孩未來的大大動力！' }),
							],
						}),
						u.jsx('div', {
							className: 'flex items-end justify-between',
							children: u.jsxs(dr, {
								children: [
									u.jsx(Fl, {
										asChild: !0,
										children: u.jsxs('button', {
											className: 'flex items-center px-6 py-4 space-x-1 bg-white rounded-full',
											children: [
												u.jsx('span', { className: 'text-base font-bold', children: '小額捐款' }),
												u.jsx('img', {
													width: '28',
													height: '28',
													src: 'https://img.icons8.com/sf-regular-filled/48/right.png',
													alt: 'right-arrow',
												}),
											],
										}),
									}),
									u.jsxs(fr, {
										children: [
											u.jsx(pr, { className: 'bg-text-color/30 data-[state=open]:animate-overlayShow fixed inset-0' }),
											u.jsxs(mr, {
												className:
													'data-[state=open]:animate-contentShow fixed top-1/2 pb-10 left-1/2 max-h-[85%] overflow-y-scroll lg:overflow-y-hidden w-5/6 -translate-x-1/2 -translate-y-1/2 rounded-3xl bg-white px-5 sm:px-12 shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] outline-none',
												children: [
													u.jsx(hr, {
														className: 'my-6 font-bold text-text-color',
														children: u.jsx('h3', { children: '小額捐款' }),
													}),
													u.jsxs('article', {
														className: 'flex flex-col gap-10 lg:flex-row',
														children: [
															u.jsxs('section', {
																className: 'w-full p-10 lg:p-14 rounded-4xl bg-bg-color-2',
																children: [
																	u.jsxs('h1', {
																		className: 'font-bold leading-tight text-primary-color',
																		children: ['您的小筆捐款', u.jsx('br', {}), '是每隻毛孩未來的大大動力！'],
																	}),
																	u.jsx('p', { className: 'mt-4 mb-1', children: '目前小額贊助總金額' }),
																	u.jsx('h2', { className: 'font-bold', children: '987,655,873' }),
																	u.jsx('img', {
																		src: '../public/assets/images/small-donation.png',
																		alt: 'small-donation',
																		className: 'w-56 mx-auto',
																	}),
																],
															}),
															n
																? u.jsxs('section', {
																		className: 'flex flex-col items-center justify-center w-11/12 space-y-8',
																		children: [
																			u.jsx('h3', { className: 'font-bold', children: '感謝您的捐款' }),
																			u.jsx('img', {
																				src: '../public/assets/images/Group 15.png',
																				alt: 'success',
																				className: 'w-56',
																			}),
																			u.jsx(sn, {
																				children: u.jsx('button', {
																					className:
																						'w-56 py-3 font-semibold rounded-full bg-slate-100 hover:bg-slate-200',
																					onClick: s,
																					children: '關閉',
																				}),
																			}),
																		],
																  })
																: u.jsxs('section', {
																		className: 'space-y-8 lg:w-11/12',
																		children: [
																			u.jsx('h5', { className: 'font-bold', children: '捐款方案' }),
																			u.jsxs('ul', {
																				className: 'space-y-4',
																				children: [
																					u.jsxs('button', {
																						className: `${
																							e === 0
																								? 'bg-primary-color text-white border-primary-color'
																								: 'border-slate-300'
																						} flex items-center justify-between w-full py-5 pl-6 pr-4 border-2 hover:border-primary-color rounded-2xl active:border-primary-color`,
																						onClick: () => t(0),
																						children: [
																							u.jsx('h5', {
																								className: `${
																									e === 0 ? 'text-white' : 'text-primary-color'
																								} font-bold `,
																								children: '星人之友',
																							}),
																							u.jsxs('div', {
																								className: 'flex items-center gap-6',
																								children: [
																									u.jsxs('h4', {
																										className: 'font-bold',
																										children: [
																											u.jsx('span', {
																												className: 'mr-2 text-base font-normal',
																												children: 'NT$',
																											}),
																											'600',
																										],
																									}),
																									u.jsx('span', {
																										className: `${
																											e === 0 ? 'text-slate-100' : 'text-slate-500'
																										} text-sm`,
																										children: '已有 9,957 人贊助',
																									}),
																								],
																							}),
																						],
																					}),
																					u.jsxs('button', {
																						className: `${
																							e === 1
																								? 'bg-primary-color text-white border-primary-color'
																								: 'border-slate-300'
																						} flex items-center justify-between w-full py-5 pl-6 pr-4 border-2 hover:border-primary-color rounded-2xl active:border-primary-color`,
																						onClick: () => t(1),
																						children: [
																							u.jsx('h5', {
																								className: `${
																									e === 1 ? 'text-white' : 'text-primary-color'
																								} font-bold `,
																								children: '喵星大使',
																							}),
																							u.jsxs('div', {
																								className: 'flex items-center gap-6',
																								children: [
																									u.jsxs('h4', {
																										className: 'font-bold',
																										children: [
																											u.jsx('span', {
																												className: 'mr-2 text-base font-normal',
																												children: 'NT$',
																											}),
																											'6,000',
																										],
																									}),
																									u.jsx('span', {
																										className: `${
																											e === 1 ? 'text-slate-100' : 'text-slate-500'
																										} text-sm`,
																										children: '已有 2,000 人贊助',
																									}),
																								],
																							}),
																						],
																					}),
																					u.jsxs('button', {
																						className: `${
																							e === 2
																								? 'bg-primary-color text-white border-primary-color'
																								: 'border-slate-300'
																						} flex items-center justify-between w-full py-5 pl-6 pr-4 border-2 hover:border-primary-color rounded-2xl active:border-primary-color`,
																						onClick: () => t(2),
																						children: [
																							u.jsx('h5', {
																								className: `${
																									e === 2 ? 'text-white' : 'text-primary-color'
																								} font-bold `,
																								children: '喵星傳奇',
																							}),
																							u.jsxs('div', {
																								className: 'flex items-center gap-6',
																								children: [
																									u.jsxs('h4', {
																										className: 'font-bold',
																										children: [
																											u.jsx('span', {
																												className: 'mr-2 text-base font-normal',
																												children: 'NT$',
																											}),
																											'60,00',
																										],
																									}),
																									u.jsx('span', {
																										className: `${
																											e === 2 ? 'text-slate-100' : 'text-slate-500'
																										} text-sm`,
																										children: '已有 999 人贊助',
																									}),
																								],
																							}),
																						],
																					}),
																				],
																			}),
																			u.jsx('button', {
																				className:
																					'w-full py-5 text-base font-semibold text-white rounded-full bg-primary-color',
																				onClick: i,
																				children: '前往捐款',
																			}),
																		],
																  }),
														],
													}),
													u.jsx(sn, {
														className:
															'absolute p-1.5 text-white rounded-full cursor-pointer bg-text-color hover:bg-text-color/80 top-5 right-6',
														onClick: s,
														children: u.jsx(vr, {}),
													}),
												],
											}),
										],
									}),
								],
							}),
						}),
					],
				}),
				u.jsxs('div', {
					id: 'service',
					className:
						'bg-text-color sm:w-[640px] h-[80vw] sm:h-[38vw] lg:h-[36vw] flex flex-col justify-between px-12 py-16 sm:px-6 sm:py-10 lg:px-12 lg:py-16 xl:px-16 xl:py-20 rounded-3xl',
					children: [
						u.jsxs('div', {
							className: 'text-white',
							children: [
								u.jsx('h1', {
									className: 'lg:text-5.5xl whitespace-nowrap mb-4 lg:mb-8 font-MantouSans ',
									children: '民眾服務信箱',
								}),
								u.jsx('h5', { children: '親愛的鄉親，每一位市民的意見都是我們社區前進的原動力' }),
							],
						}),
						u.jsx('div', {
							className: 'flex items-end justify-between',
							children: u.jsxs(dr, {
								children: [
									u.jsx(Fl, {
										asChild: !0,
										children: u.jsxs('button', {
											className: 'flex items-center px-6 py-4 space-x-1 bg-white rounded-full',
											children: [
												u.jsx('span', { className: 'text-base font-bold', children: '填寫表單' }),
												u.jsx('img', {
													width: '28',
													height: '28',
													src: 'https://img.icons8.com/sf-regular-filled/48/right.png',
													alt: 'right-arrow',
												}),
											],
										}),
									}),
									u.jsxs(fr, {
										children: [
											u.jsx(pr, { className: 'bg-text-color/30 data-[state=open]:animate-overlayShow fixed inset-0' }),
											u.jsxs(mr, {
												className:
													'data-[state=open]:animate-contentShow fixed top-1/2 pb-12 left-1/2 overflow-y-scroll h-full lg:h-min lg:overflow-y-hidden w-11/12 -translate-x-1/2 -translate-y-1/2 rounded-3xl bg-white px-5 sm:px-12 shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] outline-none',
												children: [
													u.jsx(hr, {
														className: 'my-6 font-bold text-text-color',
														children: u.jsx('h3', { children: '民眾服務信箱' }),
													}),
													u.jsxs('article', {
														className: 'flex flex-col gap-10 lg:flex-row',
														children: [
															u.jsxs('section', {
																className: 'w-full rounded-4xl bg-sky-100',
																children: [
																	u.jsxs('h1', {
																		className: 'px-10 pt-10 pb-4 font-bold leading-tight lg:pt-14 lg:px-14',
																		children: ['分享您的想法', u.jsx('br', {}), '一同為我們的未來打造更美好！'],
																	}),
																	u.jsx('img', {
																		src: '../public/assets/images/image 10.png',
																		alt: 'small-donation',
																		className: 'w-full mx-auto',
																	}),
																],
															}),
															l
																? u.jsxs('section', {
																		className: 'flex flex-col items-center justify-center w-11/12 space-y-8',
																		children: [
																			u.jsx('h3', { className: 'font-bold', children: '感謝您的意見' }),
																			u.jsx('img', {
																				src: '../public/assets/images/Group 15.png',
																				alt: 'success',
																				className: 'w-56',
																			}),
																			u.jsx(sn, {
																				children: u.jsx('button', {
																					className:
																						'w-56 py-3 font-semibold rounded-full bg-slate-100 hover:bg-slate-200',
																					onClick: () => o(!1),
																					children: '關閉',
																				}),
																			}),
																		],
																  })
																: u.jsx('section', {
																		className: 'w-full space-y-8 lg:w-3/4',
																		children: u.jsxs(Uv, {
																			className: 'flex flex-col justify-between w-full h-full',
																			children: [
																				u.jsxs('div', {
																					className: 'space-y-6',
																					children: [
																						u.jsxs(Qr, {
																							className: 'space-y-2',
																							name: 'name',
																							children: [
																								u.jsx(Kr, { className: 'text-xl font-bold', children: '您的姓名' }),
																								u.jsx(Yr, {
																									asChild: !0,
																									children: u.jsx('input', {
																										className:
																											'box-border w-full h-12 pl-4 outline-none bg-slate-100 rounded-2xl',
																										type: 'name',
																										placeholder: '姓名',
																										required: !0,
																									}),
																								}),
																							],
																						}),
																						u.jsxs(Qr, {
																							className: 'space-y-2',
																							name: 'email',
																							children: [
																								u.jsx(Kr, { className: 'text-xl font-bold', children: 'Email' }),
																								u.jsx(Yr, {
																									asChild: !0,
																									children: u.jsx('input', {
																										className:
																											'box-border w-full h-12 pl-4 outline-none bg-slate-100 rounded-2xl',
																										type: 'email',
																										placeholder: 'email',
																										required: !0,
																									}),
																								}),
																							],
																						}),
																						u.jsxs(Qr, {
																							className: 'space-y-2',
																							name: 'phone',
																							children: [
																								u.jsx(Kr, { className: 'text-xl font-bold', children: '手機' }),
																								u.jsx(Yr, {
																									asChild: !0,
																									children: u.jsx('input', {
																										className:
																											'box-border w-full h-12 pl-4 outline-none bg-slate-100 rounded-2xl',
																										type: 'phone',
																										placeholder: '手機號碼',
																									}),
																								}),
																							],
																						}),
																						u.jsxs(Qr, {
																							className: 'space-y-2',
																							name: 'content',
																							children: [
																								u.jsx(Kr, { className: 'text-xl font-bold', children: '您的建言' }),
																								u.jsx(Yr, {
																									asChild: !0,
																									children: u.jsx('input', {
																										className:
																											'box-border w-full h-40 pl-4 outline-none bg-slate-100 rounded-2xl',
																										type: 'content',
																										required: !0,
																									}),
																								}),
																							],
																						}),
																					],
																				}),
																				u.jsx(Vv, {
																					asChild: !0,
																					children: u.jsx('button', {
																						className:
																							'w-full py-5 mt-8 text-base font-semibold text-white rounded-full lg:mt-0 bg-primary-color',
																						onClick: () => o(!0),
																						children: '送出意見',
																					}),
																				}),
																			],
																		}),
																  }),
														],
													}),
													u.jsx(sn, {
														className:
															'absolute p-1.5 text-white rounded-full cursor-pointer bg-text-color hover:bg-text-color/80 top-5 right-6',
														children: u.jsx(vr, {}),
													}),
												],
											}),
										],
									}),
								],
							}),
						}),
					],
				}),
			],
		})
	},
	bv = () =>
		u.jsxs(u.Fragment, {
			children: [
				u.jsx(Sv, {}),
				u.jsx(Vm, {}),
				u.jsx(Um, {}),
				u.jsx(xv, {}),
				u.jsx(Ev, {}),
				u.jsx(Bv, {}),
				u.jsxs('section', {
					className: 'space-y-4 lg:space-y-8 py-26',
					children: [
						u.jsxs('h1', {
							className: 'text-5.5xl tracking-wider text-center lg:space-x-6 lg:text-6xl gradient-text',
							children: [
								u.jsx('span', { children: '台灣的明天' }),
								u.jsx('br', { className: 'lg:hidden' }),
								u.jsx('span', { children: '喵先鋪路' }),
							],
						}),
						u.jsxs('div', {
							className: 'flex items-center justify-center space-x-2',
							children: [
								u.jsx('span', {
									className:
										'px-3 lg:px-3.5 py-1 lg:py-2.5 text-2xl lg:text-3xl font-black text-white rounded-full bg-gradient-to-r from-gradient-color-1 to-gradient-color-2',
									children: '3',
								}),
								u.jsx('span', {
									className: 'text-2.5xl font-bold lg:text-4xl text-primary-color',
									children: '喵立翰 Miao LiHan',
								}),
							],
						}),
					],
				}),
				u.jsx(wv, {}),
			],
		})
Io.createRoot(document.getElementById('root')).render(
	u.jsx(zm, { basename: '/legislative-campaign-official-website', children: u.jsx(bv, {}) })
)
