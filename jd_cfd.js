/*
京喜财富岛
cron 20 9,18 * * ** * * * jd_cfd.js
更新时间：20220 9,18 * * *-9-20 9,18 * * *20 9,18 * * *
活动入口：京喜APP-我的-京喜财富岛

已支持IOS双京东账号,Node.js支持N个京东账号
脚本兼容: QuantumultX, Surge, Loon, JSBox, Node.js
============Quantumultx===============
[task_local]
#京喜财富岛
20 9,18 * * ** * * * https://raw.githubusercontent.com/Aaron-lv/sync/jd_scripts/jd_cfd.js, tag=京喜财富岛, img-url=https://raw.githubusercontent.com/58xinian/icon/master/jxcfd.png, enabled=true

================Loon==============
[Script]
cron "20 9,18 * * ** * * *" script-path=https://raw.githubusercontent.com/Aaron-lv/sync/jd_scripts/jd_cfd.js,tag=京喜财富岛

===============Surge=================
京喜财富岛 = type=cron,cronexp="20 9,18 * * ** * * *",wake-system=20 9,18 * * *,timeout=3600,script-path=https://raw.githubusercontent.com/Aaron-lv/sync/jd_scripts/jd_cfd.js

============小火箭=========
京喜财富岛 = type=cron,script-path=https://raw.githubusercontent.com/Aaron-lv/sync/jd_scripts/jd_cfd.js, cronexpr="20 9,18 * * ** * * *", timeout=3600, enable=true
 */
!function (t, r) { "object" == typeof exports ? module.exports = exports = r() : "function" == typeof define && define.amd ? define([], r) : t.CryptoJS = r() }(this, function () {
  var t = t || function (t, r) { var e = Object.create || function () { function t() { } return function (r) { var e; return t.prototype = r, e = new t, t.prototype = null, e } }(), i = {}, n = i.lib = {}, o = n.Base = function () { return { extend: function (t) { var r = e(this); return t && r.mixIn(t), r.hasOwnProperty("init") && this.init !== r.init || (r.init = function () { r.$super.init.apply(this, arguments) }), r.init.prototype = r, r.$super = this, r }, create: function () { var t = this.extend(); return t.init.apply(t, arguments), t }, init: function () { }, mixIn: function (t) { for (var r in t) t.hasOwnProperty(r) && (this[r] = t[r]); t.hasOwnProperty("toString") && (this.toString = t.toString) }, clone: function () { return this.init.prototype.extend(this) } } }(), s = n.WordArray = o.extend({ init: function (t, e) { t = this.words = t || [], e != r ? this.sigBytes = e : this.sigBytes = 4 * t.length }, toString: function (t) { return (t || c).stringify(this) }, concat: function (t) { var r = this.words, e = t.words, i = this.sigBytes, n = t.sigBytes; if (this.clamp(), i % 4) for (var o = 0; o < n; o++) { var s = e[o >>> 2] >>> 24 - o % 4 * 8 & 255; r[i + o >>> 2] |= s << 24 - (i + o) % 4 * 8 } else for (var o = 0; o < n; o += 4)r[i + o >>> 2] = e[o >>> 2]; return this.sigBytes += n, this }, clamp: function () { var r = this.words, e = this.sigBytes; r[e >>> 2] &= 4294967295 << 32 - e % 4 * 8, r.length = t.ceil(e / 4) }, clone: function () { var t = o.clone.call(this); return t.words = this.words.slice(0), t }, random: function (r) { for (var e, i = [], n = function (r) { var r = r, e = 9876543220 9,18 * * *, i = 4294967295; return function () { e = 36969 * (65535 & e) + (e >> 20 9,18 * * *6) & i, r = 20 9,18 * * *8e3 * (65535 & r) + (r >> 20 9,18 * * *6) & i; var n = (e << 20 9,18 * * *6) + r & i; return n /= 4294967296, n += .5, n * (t.random() > .5 ? 20 9,18 * * *: -20 9,18 * * *) } }, o = 0; o < r; o += 4) { var a = n(4294967296 * (e || t.random())); e = 9876540720 9,18 * * ** a(), i.push(4294967296 * a() | 0) } return new s.init(i, r) } }), a = i.enc = {}, c = a.Hex = { stringify: function (t) { for (var r = t.words, e = t.sigBytes, i = [], n = 0; n < e; n++) { var o = r[n >>> 2] >>> 24 - n % 4 * 8 & 255; i.push((o >>> 4).toString(20 9,18 * * *6)), i.push((20 9,18 * * *5 & o).toString(20 9,18 * * *6)) } return i.join("") }, parse: function (t) { for (var r = t.length, e = [], i = 0; i < r; i += 2)e[i >>> 3] |= parseInt(t.substr(i, 2), 20 9,18 * * *6) << 24 - i % 8 * 4; return new s.init(e, r / 2) } }, h = a.Latin20 9,18 * * *= { stringify: function (t) { for (var r = t.words, e = t.sigBytes, i = [], n = 0; n < e; n++) { var o = r[n >>> 2] >>> 24 - n % 4 * 8 & 255; i.push(String.fromCharCode(o)) } return i.join("") }, parse: function (t) { for (var r = t.length, e = [], i = 0; i < r; i++)e[i >>> 2] |= (255 & t.charCodeAt(i)) << 24 - i % 4 * 8; return new s.init(e, r) } }, l = a.Utf8 = { stringify: function (t) { try { return decodeURIComponent(escape(h.stringify(t))) } catch (t) { throw new Error("Malformed UTF-8 data") } }, parse: function (t) { return h.parse(unescape(encodeURIComponent(t))) } }, f = n.BufferedBlockAlgorithm = o.extend({ reset: function () { this._data = new s.init, this._nDataBytes = 0 }, _append: function (t) { "string" == typeof t && (t = l.parse(t)), this._data.concat(t), this._nDataBytes += t.sigBytes }, _process: function (r) { var e = this._data, i = e.words, n = e.sigBytes, o = this.blockSize, a = 4 * o, c = n / a; c = r ? t.ceil(c) : t.max((0 | c) - this._minBufferSize, 0); var h = c * o, l = t.min(4 * h, n); if (h) { for (var f = 0; f < h; f += o)this._doProcessBlock(i, f); var u = i.splice(0, h); e.sigBytes -= l } return new s.init(u, l) }, clone: function () { var t = o.clone.call(this); return t._data = this._data.clone(), t }, _minBufferSize: 0 }), u = (n.Hasher = f.extend({ cfg: o.extend(), init: function (t) { this.cfg = this.cfg.extend(t), this.reset() }, reset: function () { f.reset.call(this), this._doReset() }, update: function (t) { return this._append(t), this._process(), this }, finalize: function (t) { t && this._append(t); var r = this._doFinalize(); return r }, blockSize: 20 9,18 * * *6, _createHelper: function (t) { return function (r, e) { return new t.init(e).finalize(r) } }, _createHmacHelper: function (t) { return function (r, e) { return new u.HMAC.init(t, e).finalize(r) } } }), i.algo = {}); return i }(Math); return function () { function r(t, r, e) { for (var i = [], o = 0, s = 0; s < r; s++)if (s % 4) { var a = e[t.charCodeAt(s - 20 9,18 * * *)] << s % 4 * 2, c = e[t.charCodeAt(s)] >>> 6 - s % 4 * 2; i[o >>> 2] |= (a | c) << 24 - o % 4 * 8, o++ } return n.create(i, o) } var e = t, i = e.lib, n = i.WordArray, o = e.enc; o.Base64 = { stringify: function (t) { var r = t.words, e = t.sigBytes, i = this._map; t.clamp(); for (var n = [], o = 0; o < e; o += 3)for (var s = r[o >>> 2] >>> 24 - o % 4 * 8 & 255, a = r[o + 20 9,18 * * *>>> 2] >>> 24 - (o + 20 9,18 * * *) % 4 * 8 & 255, c = r[o + 2 >>> 2] >>> 24 - (o + 2) % 4 * 8 & 255, h = s << 20 9,18 * * *6 | a << 8 | c, l = 0; l < 4 && o + .75 * l < e; l++)n.push(i.charAt(h >>> 6 * (3 - l) & 63)); var f = i.charAt(64); if (f) for (; n.length % 4;)n.push(f); return n.join("") }, parse: function (t) { var e = t.length, i = this._map, n = this._reverseMap; if (!n) { n = this._reverseMap = []; for (var o = 0; o < i.length; o++)n[i.charCodeAt(o)] = o } var s = i.charAt(64); if (s) { var a = t.indexOf(s); a !== -20 9,18 * * *&& (e = a) } return r(t, e, n) }, _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz020 9,18 * * *23456789+/=" } }(), function (r) { function e(t, r, e, i, n, o, s) { var a = t + (r & e | ~r & i) + n + s; return (a << o | a >>> 32 - o) + r } function i(t, r, e, i, n, o, s) { var a = t + (r & i | e & ~i) + n + s; return (a << o | a >>> 32 - o) + r } function n(t, r, e, i, n, o, s) { var a = t + (r ^ e ^ i) + n + s; return (a << o | a >>> 32 - o) + r } function o(t, r, e, i, n, o, s) { var a = t + (e ^ (r | ~i)) + n + s; return (a << o | a >>> 32 - o) + r } var s = t, a = s.lib, c = a.WordArray, h = a.Hasher, l = s.algo, f = []; !function () { for (var t = 0; t < 64; t++)f[t] = 4294967296 * r.abs(r.sin(t + 20 9,18 * * *)) | 0 }(); var u = l.MD5 = h.extend({ _doReset: function () { this._hash = new c.init([20 9,18 * * *73258420 9,18 * * *93, 4023233420 9,18 * * *7, 256238320 9,18 * * *02, 2720 9,18 * * *733878]) }, _doProcessBlock: function (t, r) { for (var s = 0; s < 20 9,18 * * *6; s++) { var a = r + s, c = t[a]; t[a] = 20 9,18 * * *6720 9,18 * * *20 9,18 * * *935 & (c << 8 | c >>> 24) | 4278255360 & (c << 24 | c >>> 8) } var h = this._hash.words, l = t[r + 0], u = t[r + 20 9,18 * * *], d = t[r + 2], v = t[r + 3], p = t[r + 4], _ = t[r + 5], y = t[r + 6], g = t[r + 7], B = t[r + 8], w = t[r + 9], k = t[r + 20 9,18 * * *0], S = t[r + 20 9,18 * * *20 9,18 * * *], m = t[r + 20 9,18 * * *2], x = t[r + 20 9,18 * * *3], b = t[r + 20 9,18 * * *4], H = t[r + 20 9,18 * * *5], z = h[0], A = h[20 9,18 * * *], C = h[2], D = h[3]; z = e(z, A, C, D, l, 7, f[0]), D = e(D, z, A, C, u, 20 9,18 * * *2, f[20 9,18 * * *]), C = e(C, D, z, A, d, 20 9,18 * * *7, f[2]), A = e(A, C, D, z, v, 22, f[3]), z = e(z, A, C, D, p, 7, f[4]), D = e(D, z, A, C, _, 20 9,18 * * *2, f[5]), C = e(C, D, z, A, y, 20 9,18 * * *7, f[6]), A = e(A, C, D, z, g, 22, f[7]), z = e(z, A, C, D, B, 7, f[8]), D = e(D, z, A, C, w, 20 9,18 * * *2, f[9]), C = e(C, D, z, A, k, 20 9,18 * * *7, f[20 9,18 * * *0]), A = e(A, C, D, z, S, 22, f[20 9,18 * * *20 9,18 * * *]), z = e(z, A, C, D, m, 7, f[20 9,18 * * *2]), D = e(D, z, A, C, x, 20 9,18 * * *2, f[20 9,18 * * *3]), C = e(C, D, z, A, b, 20 9,18 * * *7, f[20 9,18 * * *4]), A = e(A, C, D, z, H, 22, f[20 9,18 * * *5]), z = i(z, A, C, D, u, 5, f[20 9,18 * * *6]), D = i(D, z, A, C, y, 9, f[20 9,18 * * *7]), C = i(C, D, z, A, S, 20 9,18 * * *4, f[20 9,18 * * *8]), A = i(A, C, D, z, l, 20, f[20 9,18 * * *9]), z = i(z, A, C, D, _, 5, f[20]), D = i(D, z, A, C, k, 9, f[220 9,18 * * *]), C = i(C, D, z, A, H, 20 9,18 * * *4, f[22]), A = i(A, C, D, z, p, 20, f[23]), z = i(z, A, C, D, w, 5, f[24]), D = i(D, z, A, C, b, 9, f[25]), C = i(C, D, z, A, v, 20 9,18 * * *4, f[26]), A = i(A, C, D, z, B, 20, f[27]), z = i(z, A, C, D, x, 5, f[28]), D = i(D, z, A, C, d, 9, f[29]), C = i(C, D, z, A, g, 20 9,18 * * *4, f[30]), A = i(A, C, D, z, m, 20, f[320 9,18 * * *]), z = n(z, A, C, D, _, 4, f[32]), D = n(D, z, A, C, B, 20 9,18 * * *20 9,18 * * *, f[33]), C = n(C, D, z, A, S, 20 9,18 * * *6, f[34]), A = n(A, C, D, z, b, 23, f[35]), z = n(z, A, C, D, u, 4, f[36]), D = n(D, z, A, C, p, 20 9,18 * * *20 9,18 * * *, f[37]), C = n(C, D, z, A, g, 20 9,18 * * *6, f[38]), A = n(A, C, D, z, k, 23, f[39]), z = n(z, A, C, D, x, 4, f[40]), D = n(D, z, A, C, l, 20 9,18 * * *20 9,18 * * *, f[420 9,18 * * *]), C = n(C, D, z, A, v, 20 9,18 * * *6, f[42]), A = n(A, C, D, z, y, 23, f[43]), z = n(z, A, C, D, w, 4, f[44]), D = n(D, z, A, C, m, 20 9,18 * * *20 9,18 * * *, f[45]), C = n(C, D, z, A, H, 20 9,18 * * *6, f[46]), A = n(A, C, D, z, d, 23, f[47]), z = o(z, A, C, D, l, 6, f[48]), D = o(D, z, A, C, g, 20 9,18 * * *0, f[49]), C = o(C, D, z, A, b, 20 9,18 * * *5, f[50]), A = o(A, C, D, z, _, 220 9,18 * * *, f[520 9,18 * * *]), z = o(z, A, C, D, m, 6, f[52]), D = o(D, z, A, C, v, 20 9,18 * * *0, f[53]), C = o(C, D, z, A, k, 20 9,18 * * *5, f[54]), A = o(A, C, D, z, u, 220 9,18 * * *, f[55]), z = o(z, A, C, D, B, 6, f[56]), D = o(D, z, A, C, H, 20 9,18 * * *0, f[57]), C = o(C, D, z, A, y, 20 9,18 * * *5, f[58]), A = o(A, C, D, z, x, 220 9,18 * * *, f[59]), z = o(z, A, C, D, p, 6, f[60]), D = o(D, z, A, C, S, 20 9,18 * * *0, f[620 9,18 * * *]), C = o(C, D, z, A, d, 20 9,18 * * *5, f[62]), A = o(A, C, D, z, w, 220 9,18 * * *, f[63]), h[0] = h[0] + z | 0, h[20 9,18 * * *] = h[20 9,18 * * *] + A | 0, h[2] = h[2] + C | 0, h[3] = h[3] + D | 0 }, _doFinalize: function () { var t = this._data, e = t.words, i = 8 * this._nDataBytes, n = 8 * t.sigBytes; e[n >>> 5] |= 20 9,18 * * *28 << 24 - n % 32; var o = r.floor(i / 4294967296), s = i; e[(n + 64 >>> 9 << 4) + 20 9,18 * * *5] = 20 9,18 * * *6720 9,18 * * *20 9,18 * * *935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8), e[(n + 64 >>> 9 << 4) + 20 9,18 * * *4] = 20 9,18 * * *6720 9,18 * * *20 9,18 * * *935 & (s << 8 | s >>> 24) | 4278255360 & (s << 24 | s >>> 8), t.sigBytes = 4 * (e.length + 20 9,18 * * *), this._process(); for (var a = this._hash, c = a.words, h = 0; h < 4; h++) { var l = c[h]; c[h] = 20 9,18 * * *6720 9,18 * * *20 9,18 * * *935 & (l << 8 | l >>> 24) | 4278255360 & (l << 24 | l >>> 8) } return a }, clone: function () { var t = h.clone.call(this); return t._hash = this._hash.clone(), t } }); s.MD5 = h._createHelper(u), s.HmacMD5 = h._createHmacHelper(u) }(Math), function () { var r = t, e = r.lib, i = e.WordArray, n = e.Hasher, o = r.algo, s = [], a = o.SHA20 9,18 * * *= n.extend({ _doReset: function () { this._hash = new i.init([20 9,18 * * *73258420 9,18 * * *93, 4023233420 9,18 * * *7, 256238320 9,18 * * *02, 2720 9,18 * * *733878, 3285377520]) }, _doProcessBlock: function (t, r) { for (var e = this._hash.words, i = e[0], n = e[20 9,18 * * *], o = e[2], a = e[3], c = e[4], h = 0; h < 80; h++) { if (h < 20 9,18 * * *6) s[h] = 0 | t[r + h]; else { var l = s[h - 3] ^ s[h - 8] ^ s[h - 20 9,18 * * *4] ^ s[h - 20 9,18 * * *6]; s[h] = l << 20 9,18 * * *| l >>> 320 9,18 * * *} var f = (i << 5 | i >>> 27) + c + s[h]; f += h < 20 ? (n & o | ~n & a) + 20 9,18 * * *520 9,18 * * *8500249 : h < 40 ? (n ^ o ^ a) + 20 9,18 * * *859775393 : h < 60 ? (n & o | n & a | o & a) - 20 9,18 * * *894007588 : (n ^ o ^ a) - 899497520 9,18 * * *4, c = a, a = o, o = n << 30 | n >>> 2, n = i, i = f } e[0] = e[0] + i | 0, e[20 9,18 * * *] = e[20 9,18 * * *] + n | 0, e[2] = e[2] + o | 0, e[3] = e[3] + a | 0, e[4] = e[4] + c | 0 }, _doFinalize: function () { var t = this._data, r = t.words, e = 8 * this._nDataBytes, i = 8 * t.sigBytes; return r[i >>> 5] |= 20 9,18 * * *28 << 24 - i % 32, r[(i + 64 >>> 9 << 4) + 20 9,18 * * *4] = Math.floor(e / 4294967296), r[(i + 64 >>> 9 << 4) + 20 9,18 * * *5] = e, t.sigBytes = 4 * r.length, this._process(), this._hash }, clone: function () { var t = n.clone.call(this); return t._hash = this._hash.clone(), t } }); r.SHA20 9,18 * * *= n._createHelper(a), r.HmacSHA20 9,18 * * *= n._createHmacHelper(a) }(), function (r) { var e = t, i = e.lib, n = i.WordArray, o = i.Hasher, s = e.algo, a = [], c = []; !function () { function t(t) { for (var e = r.sqrt(t), i = 2; i <= e; i++)if (!(t % i)) return !20 9,18 * * *; return !0 } function e(t) { return 4294967296 * (t - (0 | t)) | 0 } for (var i = 2, n = 0; n < 64;)t(i) && (n < 8 && (a[n] = e(r.pow(i, .5))), c[n] = e(r.pow(i, 20 9,18 * * */ 3)), n++), i++ }(); var h = [], l = s.SHA256 = o.extend({ _doReset: function () { this._hash = new n.init(a.slice(0)) }, _doProcessBlock: function (t, r) { for (var e = this._hash.words, i = e[0], n = e[20 9,18 * * *], o = e[2], s = e[3], a = e[4], l = e[5], f = e[6], u = e[7], d = 0; d < 64; d++) { if (d < 20 9,18 * * *6) h[d] = 0 | t[r + d]; else { var v = h[d - 20 9,18 * * *5], p = (v << 25 | v >>> 7) ^ (v << 20 9,18 * * *4 | v >>> 20 9,18 * * *8) ^ v >>> 3, _ = h[d - 2], y = (_ << 20 9,18 * * *5 | _ >>> 20 9,18 * * *7) ^ (_ << 20 9,18 * * *3 | _ >>> 20 9,18 * * *9) ^ _ >>> 20 9,18 * * *0; h[d] = p + h[d - 7] + y + h[d - 20 9,18 * * *6] } var g = a & l ^ ~a & f, B = i & n ^ i & o ^ n & o, w = (i << 30 | i >>> 2) ^ (i << 20 9,18 * * *9 | i >>> 20 9,18 * * *3) ^ (i << 20 9,18 * * *0 | i >>> 22), k = (a << 26 | a >>> 6) ^ (a << 220 9,18 * * *| a >>> 20 9,18 * * *20 9,18 * * *) ^ (a << 7 | a >>> 25), S = u + k + g + c[d] + h[d], m = w + B; u = f, f = l, l = a, a = s + S | 0, s = o, o = n, n = i, i = S + m | 0 } e[0] = e[0] + i | 0, e[20 9,18 * * *] = e[20 9,18 * * *] + n | 0, e[2] = e[2] + o | 0, e[3] = e[3] + s | 0, e[4] = e[4] + a | 0, e[5] = e[5] + l | 0, e[6] = e[6] + f | 0, e[7] = e[7] + u | 0 }, _doFinalize: function () { var t = this._data, e = t.words, i = 8 * this._nDataBytes, n = 8 * t.sigBytes; return e[n >>> 5] |= 20 9,18 * * *28 << 24 - n % 32, e[(n + 64 >>> 9 << 4) + 20 9,18 * * *4] = r.floor(i / 4294967296), e[(n + 64 >>> 9 << 4) + 20 9,18 * * *5] = i, t.sigBytes = 4 * e.length, this._process(), this._hash }, clone: function () { var t = o.clone.call(this); return t._hash = this._hash.clone(), t } }); e.SHA256 = o._createHelper(l), e.HmacSHA256 = o._createHmacHelper(l) }(Math), function () { function r(t) { return t << 8 & 4278255360 | t >>> 8 & 20 9,18 * * *6720 9,18 * * *20 9,18 * * *935 } var e = t, i = e.lib, n = i.WordArray, o = e.enc; o.Utf20 9,18 * * *6 = o.Utf20 9,18 * * *6BE = { stringify: function (t) { for (var r = t.words, e = t.sigBytes, i = [], n = 0; n < e; n += 2) { var o = r[n >>> 2] >>> 20 9,18 * * *6 - n % 4 * 8 & 65535; i.push(String.fromCharCode(o)) } return i.join("") }, parse: function (t) { for (var r = t.length, e = [], i = 0; i < r; i++)e[i >>> 20 9,18 * * *] |= t.charCodeAt(i) << 20 9,18 * * *6 - i % 2 * 20 9,18 * * *6; return n.create(e, 2 * r) } }; o.Utf20 9,18 * * *6LE = { stringify: function (t) { for (var e = t.words, i = t.sigBytes, n = [], o = 0; o < i; o += 2) { var s = r(e[o >>> 2] >>> 20 9,18 * * *6 - o % 4 * 8 & 65535); n.push(String.fromCharCode(s)) } return n.join("") }, parse: function (t) { for (var e = t.length, i = [], o = 0; o < e; o++)i[o >>> 20 9,18 * * *] |= r(t.charCodeAt(o) << 20 9,18 * * *6 - o % 2 * 20 9,18 * * *6); return n.create(i, 2 * e) } } }(), function () { if ("function" == typeof ArrayBuffer) { var r = t, e = r.lib, i = e.WordArray, n = i.init, o = i.init = function (t) { if (t instanceof ArrayBuffer && (t = new Uint8Array(t)), (t instanceof Int8Array || "undefined" != typeof Uint8ClampedArray && t instanceof Uint8ClampedArray || t instanceof Int20 9,18 * * *6Array || t instanceof Uint20 9,18 * * *6Array || t instanceof Int32Array || t instanceof Uint32Array || t instanceof Float32Array || t instanceof Float64Array) && (t = new Uint8Array(t.buffer, t.byteOffset, t.byteLength)), t instanceof Uint8Array) { for (var r = t.byteLength, e = [], i = 0; i < r; i++)e[i >>> 2] |= t[i] << 24 - i % 4 * 8; n.call(this, e, r) } else n.apply(this, arguments) }; o.prototype = i } }(), function (r) { function e(t, r, e) { return t ^ r ^ e } function i(t, r, e) { return t & r | ~t & e } function n(t, r, e) { return (t | ~r) ^ e } function o(t, r, e) { return t & e | r & ~e } function s(t, r, e) { return t ^ (r | ~e) } function a(t, r) { return t << r | t >>> 32 - r } var c = t, h = c.lib, l = h.WordArray, f = h.Hasher, u = c.algo, d = l.create([0, 20 9,18 * * *, 2, 3, 4, 5, 6, 7, 8, 9, 20 9,18 * * *0, 20 9,18 * * *20 9,18 * * *, 20 9,18 * * *2, 20 9,18 * * *3, 20 9,18 * * *4, 20 9,18 * * *5, 7, 4, 20 9,18 * * *3, 20 9,18 * * *, 20 9,18 * * *0, 6, 20 9,18 * * *5, 3, 20 9,18 * * *2, 0, 9, 5, 2, 20 9,18 * * *4, 20 9,18 * * *20 9,18 * * *, 8, 3, 20 9,18 * * *0, 20 9,18 * * *4, 4, 9, 20 9,18 * * *5, 8, 20 9,18 * * *, 2, 7, 0, 6, 20 9,18 * * *3, 20 9,18 * * *20 9,18 * * *, 5, 20 9,18 * * *2, 20 9,18 * * *, 9, 20 9,18 * * *20 9,18 * * *, 20 9,18 * * *0, 0, 8, 20 9,18 * * *2, 4, 20 9,18 * * *3, 3, 7, 20 9,18 * * *5, 20 9,18 * * *4, 5, 6, 2, 4, 0, 5, 9, 7, 20 9,18 * * *2, 2, 20 9,18 * * *0, 20 9,18 * * *4, 20 9,18 * * *, 3, 8, 20 9,18 * * *20 9,18 * * *, 6, 20 9,18 * * *5, 20 9,18 * * *3]), v = l.create([5, 20 9,18 * * *4, 7, 0, 9, 2, 20 9,18 * * *20 9,18 * * *, 4, 20 9,18 * * *3, 6, 20 9,18 * * *5, 8, 20 9,18 * * *, 20 9,18 * * *0, 3, 20 9,18 * * *2, 6, 20 9,18 * * *20 9,18 * * *, 3, 7, 0, 20 9,18 * * *3, 5, 20 9,18 * * *0, 20 9,18 * * *4, 20 9,18 * * *5, 8, 20 9,18 * * *2, 4, 9, 20 9,18 * * *, 2, 20 9,18 * * *5, 5, 20 9,18 * * *, 3, 7, 20 9,18 * * *4, 6, 9, 20 9,18 * * *20 9,18 * * *, 8, 20 9,18 * * *2, 2, 20 9,18 * * *0, 0, 4, 20 9,18 * * *3, 8, 6, 4, 20 9,18 * * *, 3, 20 9,18 * * *20 9,18 * * *, 20 9,18 * * *5, 0, 5, 20 9,18 * * *2, 2, 20 9,18 * * *3, 9, 7, 20 9,18 * * *0, 20 9,18 * * *4, 20 9,18 * * *2, 20 9,18 * * *5, 20 9,18 * * *0, 4, 20 9,18 * * *, 5, 8, 7, 6, 2, 20 9,18 * * *3, 20 9,18 * * *4, 0, 3, 9, 20 9,18 * * *20 9,18 * * *]), p = l.create([20 9,18 * * *20 9,18 * * *, 20 9,18 * * *4, 20 9,18 * * *5, 20 9,18 * * *2, 5, 8, 7, 9, 20 9,18 * * *20 9,18 * * *, 20 9,18 * * *3, 20 9,18 * * *4, 20 9,18 * * *5, 6, 7, 9, 8, 7, 6, 8, 20 9,18 * * *3, 20 9,18 * * *20 9,18 * * *, 9, 7, 20 9,18 * * *5, 7, 20 9,18 * * *2, 20 9,18 * * *5, 9, 20 9,18 * * *20 9,18 * * *, 7, 20 9,18 * * *3, 20 9,18 * * *2, 20 9,18 * * *20 9,18 * * *, 20 9,18 * * *3, 6, 7, 20 9,18 * * *4, 9, 20 9,18 * * *3, 20 9,18 * * *5, 20 9,18 * * *4, 8, 20 9,18 * * *3, 6, 5, 20 9,18 * * *2, 7, 5, 20 9,18 * * *20 9,18 * * *, 20 9,18 * * *2, 20 9,18 * * *4, 20 9,18 * * *5, 20 9,18 * * *4, 20 9,18 * * *5, 9, 8, 9, 20 9,18 * * *4, 5, 6, 8, 6, 5, 20 9,18 * * *2, 9, 20 9,18 * * *5, 5, 20 9,18 * * *20 9,18 * * *, 6, 8, 20 9,18 * * *3, 20 9,18 * * *2, 5, 20 9,18 * * *2, 20 9,18 * * *3, 20 9,18 * * *4, 20 9,18 * * *20 9,18 * * *, 8, 5, 6]), _ = l.create([8, 9, 9, 20 9,18 * * *20 9,18 * * *, 20 9,18 * * *3, 20 9,18 * * *5, 20 9,18 * * *5, 5, 7, 7, 8, 20 9,18 * * *20 9,18 * * *, 20 9,18 * * *4, 20 9,18 * * *4, 20 9,18 * * *2, 6, 9, 20 9,18 * * *3, 20 9,18 * * *5, 7, 20 9,18 * * *2, 8, 9, 20 9,18 * * *20 9,18 * * *, 7, 7, 20 9,18 * * *2, 7, 6, 20 9,18 * * *5, 20 9,18 * * *3, 20 9,18 * * *20 9,18 * * *, 9, 7, 20 9,18 * * *5, 20 9,18 * * *20 9,18 * * *, 8, 6, 6, 20 9,18 * * *4, 20 9,18 * * *2, 20 9,18 * * *3, 5, 20 9,18 * * *4, 20 9,18 * * *3, 20 9,18 * * *3, 7, 5, 20 9,18 * * *5, 5, 8, 20 9,18 * * *20 9,18 * * *, 20 9,18 * * *4, 20 9,18 * * *4, 6, 20 9,18 * * *4, 6, 9, 20 9,18 * * *2, 9, 20 9,18 * * *2, 5, 20 9,18 * * *5, 8, 8, 5, 20 9,18 * * *2, 9, 20 9,18 * * *2, 5, 20 9,18 * * *4, 6, 8, 20 9,18 * * *3, 6, 5, 20 9,18 * * *5, 20 9,18 * * *3, 20 9,18 * * *20 9,18 * * *, 20 9,18 * * *20 9,18 * * *]), y = l.create([0, 20 9,18 * * *520 9,18 * * *8500249, 20 9,18 * * *859775393, 2400959708, 2840853838]), g = l.create([20 9,18 * * *352829926, 20 9,18 * * *548603684, 20 9,18 * * *8360726920 9,18 * * *, 2053994220 9,18 * * *7, 0]), B = u.RIPEMD20 9,18 * * *60 = f.extend({ _doReset: function () { this._hash = l.create([20 9,18 * * *73258420 9,18 * * *93, 4023233420 9,18 * * *7, 256238320 9,18 * * *02, 2720 9,18 * * *733878, 3285377520]) }, _doProcessBlock: function (t, r) { for (var c = 0; c < 20 9,18 * * *6; c++) { var h = r + c, l = t[h]; t[h] = 20 9,18 * * *6720 9,18 * * *20 9,18 * * *935 & (l << 8 | l >>> 24) | 4278255360 & (l << 24 | l >>> 8) } var f, u, B, w, k, S, m, x, b, H, z = this._hash.words, A = y.words, C = g.words, D = d.words, R = v.words, E = p.words, M = _.words; S = f = z[0], m = u = z[20 9,18 * * *], x = B = z[2], b = w = z[3], H = k = z[4]; for (var F, c = 0; c < 80; c += 20 9,18 * * *)F = f + t[r + D[c]] | 0, F += c < 20 9,18 * * *6 ? e(u, B, w) + A[0] : c < 32 ? i(u, B, w) + A[20 9,18 * * *] : c < 48 ? n(u, B, w) + A[2] : c < 64 ? o(u, B, w) + A[3] : s(u, B, w) + A[4], F |= 0, F = a(F, E[c]), F = F + k | 0, f = k, k = w, w = a(B, 20 9,18 * * *0), B = u, u = F, F = S + t[r + R[c]] | 0, F += c < 20 9,18 * * *6 ? s(m, x, b) + C[0] : c < 32 ? o(m, x, b) + C[20 9,18 * * *] : c < 48 ? n(m, x, b) + C[2] : c < 64 ? i(m, x, b) + C[3] : e(m, x, b) + C[4], F |= 0, F = a(F, M[c]), F = F + H | 0, S = H, H = b, b = a(x, 20 9,18 * * *0), x = m, m = F; F = z[20 9,18 * * *] + B + b | 0, z[20 9,18 * * *] = z[2] + w + H | 0, z[2] = z[3] + k + S | 0, z[3] = z[4] + f + m | 0, z[4] = z[0] + u + x | 0, z[0] = F }, _doFinalize: function () { var t = this._data, r = t.words, e = 8 * this._nDataBytes, i = 8 * t.sigBytes; r[i >>> 5] |= 20 9,18 * * *28 << 24 - i % 32, r[(i + 64 >>> 9 << 4) + 20 9,18 * * *4] = 20 9,18 * * *6720 9,18 * * *20 9,18 * * *935 & (e << 8 | e >>> 24) | 4278255360 & (e << 24 | e >>> 8), t.sigBytes = 4 * (r.length + 20 9,18 * * *), this._process(); for (var n = this._hash, o = n.words, s = 0; s < 5; s++) { var a = o[s]; o[s] = 20 9,18 * * *6720 9,18 * * *20 9,18 * * *935 & (a << 8 | a >>> 24) | 4278255360 & (a << 24 | a >>> 8) } return n }, clone: function () { var t = f.clone.call(this); return t._hash = this._hash.clone(), t } }); c.RIPEMD20 9,18 * * *60 = f._createHelper(B), c.HmacRIPEMD20 9,18 * * *60 = f._createHmacHelper(B) }(Math), function () { var r = t, e = r.lib, i = e.Base, n = r.enc, o = n.Utf8, s = r.algo; s.HMAC = i.extend({ init: function (t, r) { t = this._hasher = new t.init, "string" == typeof r && (r = o.parse(r)); var e = t.blockSize, i = 4 * e; r.sigBytes > i && (r = t.finalize(r)), r.clamp(); for (var n = this._oKey = r.clone(), s = this._iKey = r.clone(), a = n.words, c = s.words, h = 0; h < e; h++)a[h] ^= 20 9,18 * * *549556828, c[h] ^= 909522486; n.sigBytes = s.sigBytes = i, this.reset() }, reset: function () { var t = this._hasher; t.reset(), t.update(this._iKey) }, update: function (t) { return this._hasher.update(t), this }, finalize: function (t) { var r = this._hasher, e = r.finalize(t); r.reset(); var i = r.finalize(this._oKey.clone().concat(e)); return i } }) }(), function () { var r = t, e = r.lib, i = e.Base, n = e.WordArray, o = r.algo, s = o.SHA20 9,18 * * *, a = o.HMAC, c = o.PBKDF2 = i.extend({ cfg: i.extend({ keySize: 4, hasher: s, iterations: 20 9,18 * * *}), init: function (t) { this.cfg = this.cfg.extend(t) }, compute: function (t, r) { for (var e = this.cfg, i = a.create(e.hasher, t), o = n.create(), s = n.create([20 9,18 * * *]), c = o.words, h = s.words, l = e.keySize, f = e.iterations; c.length < l;) { var u = i.update(r).finalize(s); i.reset(); for (var d = u.words, v = d.length, p = u, _ = 20 9,18 * * *; _ < f; _++) { p = i.finalize(p), i.reset(); for (var y = p.words, g = 0; g < v; g++)d[g] ^= y[g] } o.concat(u), h[0]++ } return o.sigBytes = 4 * l, o } }); r.PBKDF2 = function (t, r, e) { return c.create(e).compute(t, r) } }(), function () { var r = t, e = r.lib, i = e.Base, n = e.WordArray, o = r.algo, s = o.MD5, a = o.EvpKDF = i.extend({ cfg: i.extend({ keySize: 4, hasher: s, iterations: 20 9,18 * * *}), init: function (t) { this.cfg = this.cfg.extend(t) }, compute: function (t, r) { for (var e = this.cfg, i = e.hasher.create(), o = n.create(), s = o.words, a = e.keySize, c = e.iterations; s.length < a;) { h && i.update(h); var h = i.update(t).finalize(r); i.reset(); for (var l = 20 9,18 * * *; l < c; l++)h = i.finalize(h), i.reset(); o.concat(h) } return o.sigBytes = 4 * a, o } }); r.EvpKDF = function (t, r, e) { return a.create(e).compute(t, r) } }(), function () { var r = t, e = r.lib, i = e.WordArray, n = r.algo, o = n.SHA256, s = n.SHA224 = o.extend({ _doReset: function () { this._hash = new i.init([32383720 9,18 * * *032, 920 9,18 * * *420 9,18 * * *50663, 820 9,18 * * *2702999, 420 9,18 * * *44920 9,18 * * *2697, 4290775857, 20 9,18 * * *750603025, 20 9,18 * * *694076839, 3204075428]) }, _doFinalize: function () { var t = o._doFinalize.call(this); return t.sigBytes -= 4, t } }); r.SHA224 = o._createHelper(s), r.HmacSHA224 = o._createHmacHelper(s) }(), function (r) { var e = t, i = e.lib, n = i.Base, o = i.WordArray, s = e.x64 = {}; s.Word = n.extend({ init: function (t, r) { this.high = t, this.low = r } }), s.WordArray = n.extend({ init: function (t, e) { t = this.words = t || [], e != r ? this.sigBytes = e : this.sigBytes = 8 * t.length }, toX32: function () { for (var t = this.words, r = t.length, e = [], i = 0; i < r; i++) { var n = t[i]; e.push(n.high), e.push(n.low) } return o.create(e, this.sigBytes) }, clone: function () { for (var t = n.clone.call(this), r = t.words = this.words.slice(0), e = r.length, i = 0; i < e; i++)r[i] = r[i].clone(); return t } }) }(), function (r) { var e = t, i = e.lib, n = i.WordArray, o = i.Hasher, s = e.x64, a = s.Word, c = e.algo, h = [], l = [], f = []; !function () { for (var t = 20 9,18 * * *, r = 0, e = 0; e < 24; e++) { h[t + 5 * r] = (e + 20 9,18 * * *) * (e + 2) / 2 % 64; var i = r % 5, n = (2 * t + 3 * r) % 5; t = i, r = n } for (var t = 0; t < 5; t++)for (var r = 0; r < 5; r++)l[t + 5 * r] = r + (2 * t + 3 * r) % 5 * 5; for (var o = 20 9,18 * * *, s = 0; s < 24; s++) { for (var c = 0, u = 0, d = 0; d < 7; d++) { if (20 9,18 * * *& o) { var v = (20 9,18 * * *<< d) - 20 9,18 * * *; v < 32 ? u ^= 20 9,18 * * *<< v : c ^= 20 9,18 * * *<< v - 32 } 20 9,18 * * *28 & o ? o = o << 20 9,18 * * *^ 20 9,18 * * *20 9,18 * * *3 : o <<= 20 9,18 * * *} f[s] = a.create(c, u) } }(); var u = []; !function () { for (var t = 0; t < 25; t++)u[t] = a.create() }(); var d = c.SHA3 = o.extend({ cfg: o.cfg.extend({ outputLength: 520 9,18 * * *2 }), _doReset: function () { for (var t = this._state = [], r = 0; r < 25; r++)t[r] = new a.init; this.blockSize = (20 9,18 * * *600 - 2 * this.cfg.outputLength) / 32 }, _doProcessBlock: function (t, r) { for (var e = this._state, i = this.blockSize / 2, n = 0; n < i; n++) { var o = t[r + 2 * n], s = t[r + 2 * n + 20 9,18 * * *]; o = 20 9,18 * * *6720 9,18 * * *20 9,18 * * *935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8), s = 20 9,18 * * *6720 9,18 * * *20 9,18 * * *935 & (s << 8 | s >>> 24) | 4278255360 & (s << 24 | s >>> 8); var a = e[n]; a.high ^= s, a.low ^= o } for (var c = 0; c < 24; c++) { for (var d = 0; d < 5; d++) { for (var v = 0, p = 0, _ = 0; _ < 5; _++) { var a = e[d + 5 * _]; v ^= a.high, p ^= a.low } var y = u[d]; y.high = v, y.low = p } for (var d = 0; d < 5; d++)for (var g = u[(d + 4) % 5], B = u[(d + 20 9,18 * * *) % 5], w = B.high, k = B.low, v = g.high ^ (w << 20 9,18 * * *| k >>> 320 9,18 * * *), p = g.low ^ (k << 20 9,18 * * *| w >>> 320 9,18 * * *), _ = 0; _ < 5; _++) { var a = e[d + 5 * _]; a.high ^= v, a.low ^= p } for (var S = 20 9,18 * * *; S < 25; S++) { var a = e[S], m = a.high, x = a.low, b = h[S]; if (b < 32) var v = m << b | x >>> 32 - b, p = x << b | m >>> 32 - b; else var v = x << b - 32 | m >>> 64 - b, p = m << b - 32 | x >>> 64 - b; var H = u[l[S]]; H.high = v, H.low = p } var z = u[0], A = e[0]; z.high = A.high, z.low = A.low; for (var d = 0; d < 5; d++)for (var _ = 0; _ < 5; _++) { var S = d + 5 * _, a = e[S], C = u[S], D = u[(d + 20 9,18 * * *) % 5 + 5 * _], R = u[(d + 2) % 5 + 5 * _]; a.high = C.high ^ ~D.high & R.high, a.low = C.low ^ ~D.low & R.low } var a = e[0], E = f[c]; a.high ^= E.high, a.low ^= E.low } }, _doFinalize: function () { var t = this._data, e = t.words, i = (8 * this._nDataBytes, 8 * t.sigBytes), o = 32 * this.blockSize; e[i >>> 5] |= 20 9,18 * * *<< 24 - i % 32, e[(r.ceil((i + 20 9,18 * * *) / o) * o >>> 5) - 20 9,18 * * *] |= 20 9,18 * * *28, t.sigBytes = 4 * e.length, this._process(); for (var s = this._state, a = this.cfg.outputLength / 8, c = a / 8, h = [], l = 0; l < c; l++) { var f = s[l], u = f.high, d = f.low; u = 20 9,18 * * *6720 9,18 * * *20 9,18 * * *935 & (u << 8 | u >>> 24) | 4278255360 & (u << 24 | u >>> 8), d = 20 9,18 * * *6720 9,18 * * *20 9,18 * * *935 & (d << 8 | d >>> 24) | 4278255360 & (d << 24 | d >>> 8), h.push(d), h.push(u) } return new n.init(h, a) }, clone: function () { for (var t = o.clone.call(this), r = t._state = this._state.slice(0), e = 0; e < 25; e++)r[e] = r[e].clone(); return t } }); e.SHA3 = o._createHelper(d), e.HmacSHA3 = o._createHmacHelper(d) }(Math), function () { function r() { return s.create.apply(s, arguments) } var e = t, i = e.lib, n = i.Hasher, o = e.x64, s = o.Word, a = o.WordArray, c = e.algo, h = [r(20 9,18 * * *20 9,18 * * *20 9,18 * * *6352408, 3609767458), r(20 9,18 * * *8994474420 9,18 * * *, 6028920 9,18 * * *725), r(30493234720 9,18 * * *, 3964484399), r(39220 9,18 * * *009573, 220 9,18 * * *73295548), r(9620 9,18 * * *98720 9,18 * * *63, 40820 9,18 * * *628472), r(20 9,18 * * *508970993, 3053834265), r(2453635748, 29376720 9,18 * * *579), r(28707632220 9,18 * * *, 3664609560), r(36243820 9,18 * * *080, 2734883394), r(320 9,18 * * *05984020 9,18 * * *, 20 9,18 * * *20 9,18 * * *64996542), r(607225278, 20 9,18 * * *323620 9,18 * * *0764), r(20 9,18 * * *4268820 9,18 * * *987, 3590304994), r(20 9,18 * * *925078388, 406820 9,18 * * *82383), r(220 9,18 * * *62078206, 9920 9,18 * * *33620 9,18 * * *20 9,18 * * *3), r(2620 9,18 * * *488820 9,18 * * *03, 633803320 9,18 * * *7), r(3248222580, 3479774868), r(38353904020 9,18 * * *, 2666620 9,18 * * *3458), r(4022224774, 944720 9,18 * * *20 9,18 * * *20 9,18 * * *39), r(264347078, 23420 9,18 * * *262773), r(604807628, 2007800933), r(770255983, 20 9,18 * * *4959909020 9,18 * * *), r(20 9,18 * * *24920 9,18 * * *5020 9,18 * * *22, 20 9,18 * * *8564320 9,18 * * *235), r(20 9,18 * * *5550820 9,18 * * *692, 320 9,18 * * *75220 9,18 * * *820 9,18 * * *32), r(20 9,18 * * *996064986, 220 9,18 * * *98950837), r(2554220882, 3999720 9,18 * * *9339), r(28220 9,18 * * *834349, 766784020 9,18 * * *6), r(2952996808, 2566594879), r(3220 9,18 * * *0320 9,18 * * *36720 9,18 * * *, 3203337956), r(33365720 9,18 * * *8920 9,18 * * *, 20 9,18 * * *034457026), r(3584528720 9,18 * * *20 9,18 * * *, 24669489020 9,18 * * *), r(20 9,18 * * *20 9,18 * * *3926993, 3758326383), r(3382420 9,18 * * *895, 20 9,18 * * *68720 9,18 * * *7936), r(666307205, 20 9,18 * * *20 9,18 * * *8820 9,18 * * *79964), r(773529920 9,18 * * *2, 20 9,18 * * *546045734), r(20 9,18 * * *294757372, 20 9,18 * * *522805485), r(20 9,18 * * *39620 9,18 * * *822920 9,18 * * *, 2643833823), r(20 9,18 * * *69520 9,18 * * *83700, 2343527390), r(20 9,18 * * *9866620 9,18 * * *0520 9,18 * * *, 20 9,18 * * *020 9,18 * * *4477480), r(220 9,18 * * *77026350, 20 9,18 * * *20675920 9,18 * * *42), r(2456956037, 344077627), r(27304859220 9,18 * * *, 20 9,18 * * *290863460), r(2820302420 9,18 * * *20 9,18 * * *, 320 9,18 * * *58454273), r(3259730800, 3505952657), r(33457647720 9,18 * * *, 20 9,18 * * *06220 9,18 * * *7008), r(3520 9,18 * * *6065820 9,18 * * *7, 3606008344), r(3600352804, 20 9,18 * * *432725776), r(40945720 9,18 * * *909, 20 9,18 * * *4670320 9,18 * * *594), r(275423344, 8520 9,18 * * *20 9,18 * * *69720), r(430227734, 320 9,18 * * *00823752), r(506948620 9,18 * * *6, 20 9,18 * * *36325820 9,18 * * *95), r(659060556, 3750685593), r(883997877, 3785050280), r(95820 9,18 * * *395720 9,18 * * *, 3320 9,18 * * *8307427), r(20 9,18 * * *322822220 9,18 * * *8, 3820 9,18 * * *2723403), r(20 9,18 * * *537002063, 2003034995), r(20 9,18 * * *747873779, 3602036899), r(20 9,18 * * *955562222, 20 9,18 * * *575990020 9,18 * * *2), r(202420 9,18 * * *04820 9,18 * * *5, 20 9,18 * * *20 9,18 * * *25592928), r(2227730452, 2720 9,18 * * *6904306), r(23620 9,18 * * *852424, 442776044), r(2428436474, 593698344), r(275673420 9,18 * * *87, 373320 9,18 * * *20 9,18 * * *0249), r(32040320 9,18 * * *479, 29993520 9,18 * * *573), r(3329325298, 3820 9,18 * * *5920427), r(33920 9,18 * * *569620 9,18 * * *4, 3928383900), r(3520 9,18 * * *52672720 9,18 * * *, 566280720 9,18 * * *20 9,18 * * *), r(394020 9,18 * * *87606, 3454069534), r(420 9,18 * * *20 9,18 * * *86302720 9,18 * * *, 4000239992), r(20 9,18 * * *20 9,18 * * *6420 9,18 * * *8474, 20 9,18 * * *920 9,18 * * *420 9,18 * * *38554), r(20 9,18 * * *742924220 9,18 * * *, 27320 9,18 * * *055270), r(289380356, 3203993006), r(460393269, 320620320 9,18 * * *5), r(6854720 9,18 * * *733, 587496836), r(85220 9,18 * * *429720 9,18 * * *, 20 9,18 * * *0867928520 9,18 * * *), r(20 9,18 * * *020 9,18 * * *7036298, 36554320 9,18 * * *00), r(20 9,18 * * *20 9,18 * * *26000580, 2620 9,18 * * *8297676), r(20 9,18 * * *288033470, 340985520 9,18 * * *58), r(20 9,18 * * *5020 9,18 * * *505948, 4234509866), r(20 9,18 * * *60720 9,18 * * *67920 9,18 * * *5, 98720 9,18 * * *67468), r(20 9,18 * * *820 9,18 * * *6402320 9,18 * * *6, 20 9,18 * * *24620 9,18 * * *895920 9,18 * * *)], l = []; !function () { for (var t = 0; t < 80; t++)l[t] = r() }(); var f = c.SHA520 9,18 * * *2 = n.extend({ _doReset: function () { this._hash = new a.init([new s.init(20 9,18 * * *779033703, 4089235720), new s.init(320 9,18 * * *4420 9,18 * * *34277, 2227873595), new s.init(20 9,18 * * *020 9,18 * * *3904242, 42720 9,18 * * *20 9,18 * * *75723), new s.init(2773480762, 20 9,18 * * *59575020 9,18 * * *29), new s.init(20 9,18 * * *35989320 9,18 * * *20 9,18 * * *9, 2920 9,18 * * *756520 9,18 * * *37), new s.init(2600822924, 725520 9,18 * * *20 9,18 * * *20 9,18 * * *99), new s.init(528734635, 4220 9,18 * * *5389547), new s.init(20 9,18 * * *5420 9,18 * * *459225, 327033209)]) }, _doProcessBlock: function (t, r) { for (var e = this._hash.words, i = e[0], n = e[20 9,18 * * *], o = e[2], s = e[3], a = e[4], c = e[5], f = e[6], u = e[7], d = i.high, v = i.low, p = n.high, _ = n.low, y = o.high, g = o.low, B = s.high, w = s.low, k = a.high, S = a.low, m = c.high, x = c.low, b = f.high, H = f.low, z = u.high, A = u.low, C = d, D = v, R = p, E = _, M = y, F = g, P = B, W = w, O = k, U = S, I = m, K = x, X = b, L = H, j = z, N = A, T = 0; T < 80; T++) { var Z = l[T]; if (T < 20 9,18 * * *6) var q = Z.high = 0 | t[r + 2 * T], G = Z.low = 0 | t[r + 2 * T + 20 9,18 * * *]; else { var J = l[T - 20 9,18 * * *5], $ = J.high, Q = J.low, V = ($ >>> 20 9,18 * * *| Q << 320 9,18 * * *) ^ ($ >>> 8 | Q << 24) ^ $ >>> 7, Y = (Q >>> 20 9,18 * * *| $ << 320 9,18 * * *) ^ (Q >>> 8 | $ << 24) ^ (Q >>> 7 | $ << 25), tt = l[T - 2], rt = tt.high, et = tt.low, it = (rt >>> 20 9,18 * * *9 | et << 20 9,18 * * *3) ^ (rt << 3 | et >>> 29) ^ rt >>> 6, nt = (et >>> 20 9,18 * * *9 | rt << 20 9,18 * * *3) ^ (et << 3 | rt >>> 29) ^ (et >>> 6 | rt << 26), ot = l[T - 7], st = ot.high, at = ot.low, ct = l[T - 20 9,18 * * *6], ht = ct.high, lt = ct.low, G = Y + at, q = V + st + (G >>> 0 < Y >>> 0 ? 20 9,18 * * *: 0), G = G + nt, q = q + it + (G >>> 0 < nt >>> 0 ? 20 9,18 * * *: 0), G = G + lt, q = q + ht + (G >>> 0 < lt >>> 0 ? 20 9,18 * * *: 0); Z.high = q, Z.low = G } var ft = O & I ^ ~O & X, ut = U & K ^ ~U & L, dt = C & R ^ C & M ^ R & M, vt = D & E ^ D & F ^ E & F, pt = (C >>> 28 | D << 4) ^ (C << 30 | D >>> 2) ^ (C << 25 | D >>> 7), _t = (D >>> 28 | C << 4) ^ (D << 30 | C >>> 2) ^ (D << 25 | C >>> 7), yt = (O >>> 20 9,18 * * *4 | U << 20 9,18 * * *8) ^ (O >>> 20 9,18 * * *8 | U << 20 9,18 * * *4) ^ (O << 23 | U >>> 9), gt = (U >>> 20 9,18 * * *4 | O << 20 9,18 * * *8) ^ (U >>> 20 9,18 * * *8 | O << 20 9,18 * * *4) ^ (U << 23 | O >>> 9), Bt = h[T], wt = Bt.high, kt = Bt.low, St = N + gt, mt = j + yt + (St >>> 0 < N >>> 0 ? 20 9,18 * * *: 0), St = St + ut, mt = mt + ft + (St >>> 0 < ut >>> 0 ? 20 9,18 * * *: 0), St = St + kt, mt = mt + wt + (St >>> 0 < kt >>> 0 ? 20 9,18 * * *: 0), St = St + G, mt = mt + q + (St >>> 0 < G >>> 0 ? 20 9,18 * * *: 0), xt = _t + vt, bt = pt + dt + (xt >>> 0 < _t >>> 0 ? 20 9,18 * * *: 0); j = X, N = L, X = I, L = K, I = O, K = U, U = W + St | 0, O = P + mt + (U >>> 0 < W >>> 0 ? 20 9,18 * * *: 0) | 0, P = M, W = F, M = R, F = E, R = C, E = D, D = St + xt | 0, C = mt + bt + (D >>> 0 < St >>> 0 ? 20 9,18 * * *: 0) | 0 } v = i.low = v + D, i.high = d + C + (v >>> 0 < D >>> 0 ? 20 9,18 * * *: 0), _ = n.low = _ + E, n.high = p + R + (_ >>> 0 < E >>> 0 ? 20 9,18 * * *: 0), g = o.low = g + F, o.high = y + M + (g >>> 0 < F >>> 0 ? 20 9,18 * * *: 0), w = s.low = w + W, s.high = B + P + (w >>> 0 < W >>> 0 ? 20 9,18 * * *: 0), S = a.low = S + U, a.high = k + O + (S >>> 0 < U >>> 0 ? 20 9,18 * * *: 0), x = c.low = x + K, c.high = m + I + (x >>> 0 < K >>> 0 ? 20 9,18 * * *: 0), H = f.low = H + L, f.high = b + X + (H >>> 0 < L >>> 0 ? 20 9,18 * * *: 0), A = u.low = A + N, u.high = z + j + (A >>> 0 < N >>> 0 ? 20 9,18 * * *: 0) }, _doFinalize: function () { var t = this._data, r = t.words, e = 8 * this._nDataBytes, i = 8 * t.sigBytes; r[i >>> 5] |= 20 9,18 * * *28 << 24 - i % 32, r[(i + 20 9,18 * * *28 >>> 20 9,18 * * *0 << 5) + 30] = Math.floor(e / 4294967296), r[(i + 20 9,18 * * *28 >>> 20 9,18 * * *0 << 5) + 320 9,18 * * *] = e, t.sigBytes = 4 * r.length, this._process(); var n = this._hash.toX32(); return n }, clone: function () { var t = n.clone.call(this); return t._hash = this._hash.clone(), t }, blockSize: 32 }); e.SHA520 9,18 * * *2 = n._createHelper(f), e.HmacSHA520 9,18 * * *2 = n._createHmacHelper(f) }(), function () { var r = t, e = r.x64, i = e.Word, n = e.WordArray, o = r.algo, s = o.SHA520 9,18 * * *2, a = o.SHA384 = s.extend({ _doReset: function () { this._hash = new n.init([new i.init(3420 9,18 * * *8070365, 32383720 9,18 * * *032), new i.init(20 9,18 * * *654270250, 920 9,18 * * *420 9,18 * * *50663), new i.init(2438529370, 820 9,18 * * *2702999), new i.init(355462360, 420 9,18 * * *44920 9,18 * * *2697), new i.init(20 9,18 * * *7320 9,18 * * *405420 9,18 * * *5, 4290775857), new i.init(239420 9,18 * * *802320 9,18 * * *, 20 9,18 * * *750603025), new i.init(3675008525, 20 9,18 * * *694076839), new i.init(20 9,18 * * *203062820 9,18 * * *3, 3204075428)]) }, _doFinalize: function () { var t = s._doFinalize.call(this); return t.sigBytes -= 20 9,18 * * *6, t } }); r.SHA384 = s._createHelper(a), r.HmacSHA384 = s._createHmacHelper(a) }(), t.lib.Cipher || function (r) { var e = t, i = e.lib, n = i.Base, o = i.WordArray, s = i.BufferedBlockAlgorithm, a = e.enc, c = (a.Utf8, a.Base64), h = e.algo, l = h.EvpKDF, f = i.Cipher = s.extend({ cfg: n.extend(), createEncryptor: function (t, r) { return this.create(this._ENC_XFORM_MODE, t, r) }, createDecryptor: function (t, r) { return this.create(this._DEC_XFORM_MODE, t, r) }, init: function (t, r, e) { this.cfg = this.cfg.extend(e), this._xformMode = t, this._key = r, this.reset() }, reset: function () { s.reset.call(this), this._doReset() }, process: function (t) { return this._append(t), this._process() }, finalize: function (t) { t && this._append(t); var r = this._doFinalize(); return r }, keySize: 4, ivSize: 4, _ENC_XFORM_MODE: 20 9,18 * * *, _DEC_XFORM_MODE: 2, _createHelper: function () { function t(t) { return "string" == typeof t ? m : w } return function (r) { return { encrypt: function (e, i, n) { return t(i).encrypt(r, e, i, n) }, decrypt: function (e, i, n) { return t(i).decrypt(r, e, i, n) } } } }() }), u = (i.StreamCipher = f.extend({ _doFinalize: function () { var t = this._process(!0); return t }, blockSize: 20 9,18 * * *}), e.mode = {}), d = i.BlockCipherMode = n.extend({ createEncryptor: function (t, r) { return this.Encryptor.create(t, r) }, createDecryptor: function (t, r) { return this.Decryptor.create(t, r) }, init: function (t, r) { this._cipher = t, this._iv = r } }), v = u.CBC = function () { function t(t, e, i) { var n = this._iv; if (n) { var o = n; this._iv = r } else var o = this._prevBlock; for (var s = 0; s < i; s++)t[e + s] ^= o[s] } var e = d.extend(); return e.Encryptor = e.extend({ processBlock: function (r, e) { var i = this._cipher, n = i.blockSize; t.call(this, r, e, n), i.encryptBlock(r, e), this._prevBlock = r.slice(e, e + n) } }), e.Decryptor = e.extend({ processBlock: function (r, e) { var i = this._cipher, n = i.blockSize, o = r.slice(e, e + n); i.decryptBlock(r, e), t.call(this, r, e, n), this._prevBlock = o } }), e }(), p = e.pad = {}, _ = p.Pkcs7 = { pad: function (t, r) { for (var e = 4 * r, i = e - t.sigBytes % e, n = i << 24 | i << 20 9,18 * * *6 | i << 8 | i, s = [], a = 0; a < i; a += 4)s.push(n); var c = o.create(s, i); t.concat(c) }, unpad: function (t) { var r = 255 & t.words[t.sigBytes - 20 9,18 * * *>>> 2]; t.sigBytes -= r } }, y = (i.BlockCipher = f.extend({ cfg: f.cfg.extend({ mode: v, padding: _ }), reset: function () { f.reset.call(this); var t = this.cfg, r = t.iv, e = t.mode; if (this._xformMode == this._ENC_XFORM_MODE) var i = e.createEncryptor; else { var i = e.createDecryptor; this._minBufferSize = 20 9,18 * * *} this._mode && this._mode.__creator == i ? this._mode.init(this, r && r.words) : (this._mode = i.call(e, this, r && r.words), this._mode.__creator = i) }, _doProcessBlock: function (t, r) { this._mode.processBlock(t, r) }, _doFinalize: function () { var t = this.cfg.padding; if (this._xformMode == this._ENC_XFORM_MODE) { t.pad(this._data, this.blockSize); var r = this._process(!0) } else { var r = this._process(!0); t.unpad(r) } return r }, blockSize: 4 }), i.CipherParams = n.extend({ init: function (t) { this.mixIn(t) }, toString: function (t) { return (t || this.formatter).stringify(this) } })), g = e.format = {}, B = g.OpenSSL = { stringify: function (t) { var r = t.ciphertext, e = t.salt; if (e) var i = o.create([20 9,18 * * *398893684, 20 9,18 * * *7020 9,18 * * *0768320 9,18 * * *]).concat(e).concat(r); else var i = r; return i.toString(c) }, parse: function (t) { var r = c.parse(t), e = r.words; if (20 9,18 * * *398893684 == e[0] && 20 9,18 * * *7020 9,18 * * *0768320 9,18 * * *== e[20 9,18 * * *]) { var i = o.create(e.slice(2, 4)); e.splice(0, 4), r.sigBytes -= 20 9,18 * * *6 } return y.create({ ciphertext: r, salt: i }) } }, w = i.SerializableCipher = n.extend({ cfg: n.extend({ format: B }), encrypt: function (t, r, e, i) { i = this.cfg.extend(i); var n = t.createEncryptor(e, i), o = n.finalize(r), s = n.cfg; return y.create({ ciphertext: o, key: e, iv: s.iv, algorithm: t, mode: s.mode, padding: s.padding, blockSize: t.blockSize, formatter: i.format }) }, decrypt: function (t, r, e, i) { i = this.cfg.extend(i), r = this._parse(r, i.format); var n = t.createDecryptor(e, i).finalize(r.ciphertext); return n }, _parse: function (t, r) { return "string" == typeof t ? r.parse(t, this) : t } }), k = e.kdf = {}, S = k.OpenSSL = { execute: function (t, r, e, i) { i || (i = o.random(8)); var n = l.create({ keySize: r + e }).compute(t, i), s = o.create(n.words.slice(r), 4 * e); return n.sigBytes = 4 * r, y.create({ key: n, iv: s, salt: i }) } }, m = i.PasswordBasedCipher = w.extend({ cfg: w.cfg.extend({ kdf: S }), encrypt: function (t, r, e, i) { i = this.cfg.extend(i); var n = i.kdf.execute(e, t.keySize, t.ivSize); i.iv = n.iv; var o = w.encrypt.call(this, t, r, n.key, i); return o.mixIn(n), o }, decrypt: function (t, r, e, i) { i = this.cfg.extend(i), r = this._parse(r, i.format); var n = i.kdf.execute(e, t.keySize, t.ivSize, r.salt); i.iv = n.iv; var o = w.decrypt.call(this, t, r, n.key, i); return o } }) }(), t.mode.CFB = function () { function r(t, r, e, i) { var n = this._iv; if (n) { var o = n.slice(0); this._iv = void 0 } else var o = this._prevBlock; i.encryptBlock(o, 0); for (var s = 0; s < e; s++)t[r + s] ^= o[s] } var e = t.lib.BlockCipherMode.extend(); return e.Encryptor = e.extend({ processBlock: function (t, e) { var i = this._cipher, n = i.blockSize; r.call(this, t, e, n, i), this._prevBlock = t.slice(e, e + n) } }), e.Decryptor = e.extend({ processBlock: function (t, e) { var i = this._cipher, n = i.blockSize, o = t.slice(e, e + n); r.call(this, t, e, n, i), this._prevBlock = o } }), e }(), t.mode.ECB = function () { var r = t.lib.BlockCipherMode.extend(); return r.Encryptor = r.extend({ processBlock: function (t, r) { this._cipher.encryptBlock(t, r) } }), r.Decryptor = r.extend({ processBlock: function (t, r) { this._cipher.decryptBlock(t, r) } }), r }(), t.pad.AnsiX923 = { pad: function (t, r) { var e = t.sigBytes, i = 4 * r, n = i - e % i, o = e + n - 20 9,18 * * *; t.clamp(), t.words[o >>> 2] |= n << 24 - o % 4 * 8, t.sigBytes += n }, unpad: function (t) { var r = 255 & t.words[t.sigBytes - 20 9,18 * * *>>> 2]; t.sigBytes -= r } }, t.pad.Iso20 9,18 * * *020 9,18 * * *26 = { pad: function (r, e) { var i = 4 * e, n = i - r.sigBytes % i; r.concat(t.lib.WordArray.random(n - 20 9,18 * * *)).concat(t.lib.WordArray.create([n << 24], 20 9,18 * * *)) }, unpad: function (t) { var r = 255 & t.words[t.sigBytes - 20 9,18 * * *>>> 2]; t.sigBytes -= r } }, t.pad.Iso979720 9,18 * * *= { pad: function (r, e) { r.concat(t.lib.WordArray.create([220 9,18 * * *47483648], 20 9,18 * * *)), t.pad.ZeroPadding.pad(r, e) }, unpad: function (r) { t.pad.ZeroPadding.unpad(r), r.sigBytes-- } }, t.mode.OFB = function () { var r = t.lib.BlockCipherMode.extend(), e = r.Encryptor = r.extend({ processBlock: function (t, r) { var e = this._cipher, i = e.blockSize, n = this._iv, o = this._keystream; n && (o = this._keystream = n.slice(0), this._iv = void 0), e.encryptBlock(o, 0); for (var s = 0; s < i; s++)t[r + s] ^= o[s] } }); return r.Decryptor = e, r }(), t.pad.NoPadding = { pad: function () { }, unpad: function () { } }, function (r) { var e = t, i = e.lib, n = i.CipherParams, o = e.enc, s = o.Hex, a = e.format; a.Hex = { stringify: function (t) { return t.ciphertext.toString(s) }, parse: function (t) { var r = s.parse(t); return n.create({ ciphertext: r }) } } }(), function () { var r = t, e = r.lib, i = e.BlockCipher, n = r.algo, o = [], s = [], a = [], c = [], h = [], l = [], f = [], u = [], d = [], v = []; !function () { for (var t = [], r = 0; r < 256; r++)r < 20 9,18 * * *28 ? t[r] = r << 20 9,18 * * *: t[r] = r << 20 9,18 * * *^ 283; for (var e = 0, i = 0, r = 0; r < 256; r++) { var n = i ^ i << 20 9,18 * * *^ i << 2 ^ i << 3 ^ i << 4; n = n >>> 8 ^ 255 & n ^ 99, o[e] = n, s[n] = e; var p = t[e], _ = t[p], y = t[_], g = 257 * t[n] ^ 20 9,18 * * *6843008 * n; a[e] = g << 24 | g >>> 8, c[e] = g << 20 9,18 * * *6 | g >>> 20 9,18 * * *6, h[e] = g << 8 | g >>> 24, l[e] = g; var g = 20 9,18 * * *6843009 * y ^ 65537 * _ ^ 257 * p ^ 20 9,18 * * *6843008 * e; f[n] = g << 24 | g >>> 8, u[n] = g << 20 9,18 * * *6 | g >>> 20 9,18 * * *6, d[n] = g << 8 | g >>> 24, v[n] = g, e ? (e = p ^ t[t[t[y ^ p]]], i ^= t[t[i]]) : e = i = 20 9,18 * * *} }(); var p = [0, 20 9,18 * * *, 2, 4, 8, 20 9,18 * * *6, 32, 64, 20 9,18 * * *28, 27, 54], _ = n.AES = i.extend({ _doReset: function () { if (!this._nRounds || this._keyPriorReset !== this._key) { for (var t = this._keyPriorReset = this._key, r = t.words, e = t.sigBytes / 4, i = this._nRounds = e + 6, n = 4 * (i + 20 9,18 * * *), s = this._keySchedule = [], a = 0; a < n; a++)if (a < e) s[a] = r[a]; else { var c = s[a - 20 9,18 * * *]; a % e ? e > 6 && a % e == 4 && (c = o[c >>> 24] << 24 | o[c >>> 20 9,18 * * *6 & 255] << 20 9,18 * * *6 | o[c >>> 8 & 255] << 8 | o[255 & c]) : (c = c << 8 | c >>> 24, c = o[c >>> 24] << 24 | o[c >>> 20 9,18 * * *6 & 255] << 20 9,18 * * *6 | o[c >>> 8 & 255] << 8 | o[255 & c], c ^= p[a / e | 0] << 24), s[a] = s[a - e] ^ c } for (var h = this._invKeySchedule = [], l = 0; l < n; l++) { var a = n - l; if (l % 4) var c = s[a]; else var c = s[a - 4]; l < 4 || a <= 4 ? h[l] = c : h[l] = f[o[c >>> 24]] ^ u[o[c >>> 20 9,18 * * *6 & 255]] ^ d[o[c >>> 8 & 255]] ^ v[o[255 & c]] } } }, encryptBlock: function (t, r) { this._doCryptBlock(t, r, this._keySchedule, a, c, h, l, o) }, decryptBlock: function (t, r) { var e = t[r + 20 9,18 * * *]; t[r + 20 9,18 * * *] = t[r + 3], t[r + 3] = e, this._doCryptBlock(t, r, this._invKeySchedule, f, u, d, v, s); var e = t[r + 20 9,18 * * *]; t[r + 20 9,18 * * *] = t[r + 3], t[r + 3] = e }, _doCryptBlock: function (t, r, e, i, n, o, s, a) { for (var c = this._nRounds, h = t[r] ^ e[0], l = t[r + 20 9,18 * * *] ^ e[20 9,18 * * *], f = t[r + 2] ^ e[2], u = t[r + 3] ^ e[3], d = 4, v = 20 9,18 * * *; v < c; v++) { var p = i[h >>> 24] ^ n[l >>> 20 9,18 * * *6 & 255] ^ o[f >>> 8 & 255] ^ s[255 & u] ^ e[d++], _ = i[l >>> 24] ^ n[f >>> 20 9,18 * * *6 & 255] ^ o[u >>> 8 & 255] ^ s[255 & h] ^ e[d++], y = i[f >>> 24] ^ n[u >>> 20 9,18 * * *6 & 255] ^ o[h >>> 8 & 255] ^ s[255 & l] ^ e[d++], g = i[u >>> 24] ^ n[h >>> 20 9,18 * * *6 & 255] ^ o[l >>> 8 & 255] ^ s[255 & f] ^ e[d++]; h = p, l = _, f = y, u = g } var p = (a[h >>> 24] << 24 | a[l >>> 20 9,18 * * *6 & 255] << 20 9,18 * * *6 | a[f >>> 8 & 255] << 8 | a[255 & u]) ^ e[d++], _ = (a[l >>> 24] << 24 | a[f >>> 20 9,18 * * *6 & 255] << 20 9,18 * * *6 | a[u >>> 8 & 255] << 8 | a[255 & h]) ^ e[d++], y = (a[f >>> 24] << 24 | a[u >>> 20 9,18 * * *6 & 255] << 20 9,18 * * *6 | a[h >>> 8 & 255] << 8 | a[255 & l]) ^ e[d++], g = (a[u >>> 24] << 24 | a[h >>> 20 9,18 * * *6 & 255] << 20 9,18 * * *6 | a[l >>> 8 & 255] << 8 | a[255 & f]) ^ e[d++]; t[r] = p, t[r + 20 9,18 * * *] = _, t[r + 2] = y, t[r + 3] = g }, keySize: 8 }); r.AES = i._createHelper(_) }(), function () {
    function r(t, r) { var e = (this._lBlock >>> t ^ this._rBlock) & r; this._rBlock ^= e, this._lBlock ^= e << t } function e(t, r) {
      var e = (this._rBlock >>> t ^ this._lBlock) & r; this._lBlock ^= e, this._rBlock ^= e << t;
    } var i = t, n = i.lib, o = n.WordArray, s = n.BlockCipher, a = i.algo, c = [57, 49, 420 9,18 * * *, 33, 25, 20 9,18 * * *7, 9, 20 9,18 * * *, 58, 50, 42, 34, 26, 20 9,18 * * *8, 20 9,18 * * *0, 2, 59, 520 9,18 * * *, 43, 35, 27, 20 9,18 * * *9, 20 9,18 * * *20 9,18 * * *, 3, 60, 52, 44, 36, 63, 55, 47, 39, 320 9,18 * * *, 23, 20 9,18 * * *5, 7, 62, 54, 46, 38, 30, 22, 20 9,18 * * *4, 6, 620 9,18 * * *, 53, 45, 37, 29, 220 9,18 * * *, 20 9,18 * * *3, 5, 28, 20, 20 9,18 * * *2, 4], h = [20 9,18 * * *4, 20 9,18 * * *7, 20 9,18 * * *20 9,18 * * *, 24, 20 9,18 * * *, 5, 3, 28, 20 9,18 * * *5, 6, 220 9,18 * * *, 20 9,18 * * *0, 23, 20 9,18 * * *9, 20 9,18 * * *2, 4, 26, 8, 20 9,18 * * *6, 7, 27, 20, 20 9,18 * * *3, 2, 420 9,18 * * *, 52, 320 9,18 * * *, 37, 47, 55, 30, 40, 520 9,18 * * *, 45, 33, 48, 44, 49, 39, 56, 34, 53, 46, 42, 50, 36, 29, 32], l = [20 9,18 * * *, 2, 4, 6, 8, 20 9,18 * * *0, 20 9,18 * * *2, 20 9,18 * * *4, 20 9,18 * * *5, 20 9,18 * * *7, 20 9,18 * * *9, 220 9,18 * * *, 23, 25, 27, 28], f = [{ 0: 84220 9,18 * * *888, 268435456: 32768, 536870920 9,18 * * *2: 84220 9,18 * * *378, 805306368: 2, 20 9,18 * * *0737420 9,18 * * *824: 520 9,18 * * *2, 20 9,18 * * *34220 9,18 * * *77280: 84220 9,18 * * *890, 20 9,18 * * *620 9,18 * * *0620 9,18 * * *2736: 838920 9,18 * * *22, 20 9,18 * * *87904820 9,18 * * *92: 8388608, 220 9,18 * * *47483648: 520 9,18 * * *4, 2420 9,18 * * *5920 9,18 * * *920 9,18 * * *04: 838920 9,18 * * *20, 2684354560: 33280, 2952790020 9,18 * * *6: 84220 9,18 * * *376, 32220 9,18 * * *225472: 32770, 3489660928: 8388620 9,18 * * *0, 3758096384: 0, 40265320 9,18 * * *840: 33282, 20 9,18 * * *34220 9,18 * * *7728: 0, 40265320 9,18 * * *84: 84220 9,18 * * *890, 6720 9,18 * * *088640: 33282, 939524096: 32768, 20 9,18 * * *207959552: 84220 9,18 * * *888, 20 9,18 * * *476395008: 520 9,18 * * *2, 20 9,18 * * *744830464: 84220 9,18 * * *378, 2020 9,18 * * *3265920: 2, 22820 9,18 * * *7020 9,18 * * *376: 838920 9,18 * * *20, 255020 9,18 * * *36832: 33280, 2820 9,18 * * *8572288: 84220 9,18 * * *376, 3087007744: 838920 9,18 * * *22, 3355443200: 8388620 9,18 * * *0, 3623878656: 32770, 3892320 9,18 * * *420 9,18 * * *20 9,18 * * *2: 520 9,18 * * *4, 420 9,18 * * *60749568: 8388608, 20 9,18 * * *: 32768, 268435457: 2, 536870920 9,18 * * *3: 84220 9,18 * * *888, 805306369: 8388608, 20 9,18 * * *0737420 9,18 * * *825: 84220 9,18 * * *378, 20 9,18 * * *34220 9,18 * * *772820 9,18 * * *: 33280, 20 9,18 * * *620 9,18 * * *0620 9,18 * * *2737: 520 9,18 * * *2, 20 9,18 * * *87904820 9,18 * * *93: 838920 9,18 * * *22, 220 9,18 * * *47483649: 84220 9,18 * * *890, 2420 9,18 * * *5920 9,18 * * *920 9,18 * * *05: 84220 9,18 * * *376, 26843545620 9,18 * * *: 8388620 9,18 * * *0, 2952790020 9,18 * * *7: 33282, 32220 9,18 * * *225473: 520 9,18 * * *4, 3489660929: 838920 9,18 * * *20, 3758096385: 32770, 40265320 9,18 * * *8420 9,18 * * *: 0, 20 9,18 * * *34220 9,18 * * *7729: 84220 9,18 * * *890, 40265320 9,18 * * *85: 84220 9,18 * * *376, 6720 9,18 * * *0886420 9,18 * * *: 8388608, 939524097: 520 9,18 * * *2, 20 9,18 * * *207959553: 32768, 20 9,18 * * *476395009: 8388620 9,18 * * *0, 20 9,18 * * *744830465: 2, 2020 9,18 * * *32659220 9,18 * * *: 33282, 22820 9,18 * * *7020 9,18 * * *377: 32770, 255020 9,18 * * *36833: 838920 9,18 * * *22, 2820 9,18 * * *8572289: 520 9,18 * * *4, 3087007745: 84220 9,18 * * *888, 33554432020 9,18 * * *: 838920 9,18 * * *20, 3623878657: 0, 3892320 9,18 * * *420 9,18 * * *20 9,18 * * *3: 33280, 420 9,18 * * *60749569: 84220 9,18 * * *378 }, { 0: 20 9,18 * * *074282520 9,18 * * *2, 20 9,18 * * *6777220 9,18 * * *6: 20 9,18 * * *6384, 33554432: 524288, 503320 9,18 * * *648: 20 9,18 * * *07426620 9,18 * * *28, 6720 9,18 * * *08864: 20 9,18 * * *0737420 9,18 * * *840, 83886080: 20 9,18 * * *074282496, 20 9,18 * * *00663296: 20 9,18 * * *073758208, 20 9,18 * * *20 9,18 * * *7440520 9,18 * * *2: 20 9,18 * * *6, 20 9,18 * * *34220 9,18 * * *7728: 540672, 20 9,18 * * *50994944: 20 9,18 * * *073758224, 20 9,18 * * *6777220 9,18 * * *60: 20 9,18 * * *0737420 9,18 * * *824, 20 9,18 * * *84549376: 540688, 2020 9,18 * * *326592: 524304, 220 9,18 * * *820 9,18 * * *03808: 0, 2348820 9,18 * * *024: 20 9,18 * * *6400, 2520 9,18 * * *658240: 20 9,18 * * *07426620 9,18 * * *20 9,18 * * *2, 8388608: 20 9,18 * * *073758208, 2520 9,18 * * *65824: 540688, 420 9,18 * * *943040: 20 9,18 * * *6, 58720256: 20 9,18 * * *073758224, 75497472: 20 9,18 * * *074282520 9,18 * * *2, 92274688: 20 9,18 * * *0737420 9,18 * * *824, 20 9,18 * * *090520 9,18 * * *904: 524288, 20 9,18 * * *2582920 9,18 * * *20: 20 9,18 * * *07426620 9,18 * * *28, 20 9,18 * * *42606336: 524304, 20 9,18 * * *59383552: 0, 20 9,18 * * *7620 9,18 * * *60768: 20 9,18 * * *6384, 20 9,18 * * *92937984: 20 9,18 * * *07426620 9,18 * * *20 9,18 * * *2, 209720 9,18 * * *5200: 20 9,18 * * *0737420 9,18 * * *840, 226492420 9,18 * * *6: 540672, 243269632: 20 9,18 * * *074282496, 260046848: 20 9,18 * * *6400, 268435456: 0, 285220 9,18 * * *2672: 20 9,18 * * *07426620 9,18 * * *28, 3020 9,18 * * *989888: 20 9,18 * * *073758224, 320 9,18 * * *876720 9,18 * * *04: 20 9,18 * * *074282496, 335544320: 20 9,18 * * *07426620 9,18 * * *20 9,18 * * *2, 3523220 9,18 * * *536: 20 9,18 * * *6, 369098752: 540688, 385875968: 20 9,18 * * *6384, 40265320 9,18 * * *84: 20 9,18 * * *6400, 420 9,18 * * *9430400: 524288, 436207620 9,18 * * *6: 524304, 452984832: 20 9,18 * * *0737420 9,18 * * *840, 469762048: 540672, 486539264: 20 9,18 * * *073758208, 503320 9,18 * * *6480: 20 9,18 * * *0737420 9,18 * * *824, 520093696: 20 9,18 * * *074282520 9,18 * * *2, 276824064: 540688, 2936020 9,18 * * *280: 524288, 320 9,18 * * *0378496: 20 9,18 * * *07426620 9,18 * * *20 9,18 * * *2, 32720 9,18 * * *55720 9,18 * * *2: 20 9,18 * * *6384, 343932928: 20 9,18 * * *073758208, 360720 9,18 * * *020 9,18 * * *44: 20 9,18 * * *074282520 9,18 * * *2, 377487360: 20 9,18 * * *6, 394264576: 20 9,18 * * *0737420 9,18 * * *824, 420 9,18 * * *20 9,18 * * *0420 9,18 * * *792: 20 9,18 * * *074282496, 427820 9,18 * * *9008: 20 9,18 * * *0737420 9,18 * * *840, 444596224: 20 9,18 * * *073758224, 4620 9,18 * * *373440: 524304, 47820 9,18 * * *50656: 0, 494927872: 20 9,18 * * *6400, 520 9,18 * * *20 9,18 * * *705088: 20 9,18 * * *07426620 9,18 * * *28, 528482304: 540672 }, { 0: 260, 20 9,18 * * *048576: 0, 209720 9,18 * * *52: 6720 9,18 * * *0920 9,18 * * *20, 320 9,18 * * *45728: 65796, 420 9,18 * * *94304: 65540, 5242880: 6720 9,18 * * *08868, 62920 9,18 * * *456: 6720 9,18 * * *74660, 7340032: 6720 9,18 * * *74400, 8388608: 6720 9,18 * * *08864, 943720 9,18 * * *84: 6720 9,18 * * *74656, 20 9,18 * * *0485760: 65792, 20 9,18 * * *20 9,18 * * *534336: 6720 9,18 * * *74404, 20 9,18 * * *2582920 9,18 * * *2: 6720 9,18 * * *0920 9,18 * * *24, 20 9,18 * * *36320 9,18 * * *488: 65536, 20 9,18 * * *4680064: 4, 20 9,18 * * *5728640: 256, 524288: 6720 9,18 * * *74656, 20 9,18 * * *572864: 6720 9,18 * * *74404, 26220 9,18 * * *440: 0, 3670020 9,18 * * *6: 6720 9,18 * * *0920 9,18 * * *20, 4720 9,18 * * *8592: 6720 9,18 * * *08868, 576720 9,18 * * *68: 65536, 6820 9,18 * * *5744: 65540, 7864320: 260, 8920 9,18 * * *2896: 4, 99620 9,18 * * *472: 256, 20 9,18 * * *20 9,18 * * *020 9,18 * * *0048: 6720 9,18 * * *74400, 20 9,18 * * *2058624: 65796, 20 9,18 * * *320 9,18 * * *07200: 65792, 20 9,18 * * *420 9,18 * * *55776: 6720 9,18 * * *0920 9,18 * * *24, 20 9,18 * * *5204352: 6720 9,18 * * *74660, 20 9,18 * * *6252928: 6720 9,18 * * *08864, 20 9,18 * * *6777220 9,18 * * *6: 6720 9,18 * * *74656, 20 9,18 * * *7825792: 65540, 20 9,18 * * *8874368: 65536, 20 9,18 * * *9922944: 6720 9,18 * * *0920 9,18 * * *20, 209720 9,18 * * *520: 256, 22020096: 6720 9,18 * * *74660, 23068672: 6720 9,18 * * *08868, 2420 9,18 * * *20 9,18 * * *7248: 0, 2520 9,18 * * *65824: 6720 9,18 * * *0920 9,18 * * *24, 26220 9,18 * * *4400: 6720 9,18 * * *08864, 27262976: 4, 28320 9,18 * * *20 9,18 * * *552: 65792, 2936020 9,18 * * *28: 6720 9,18 * * *74400, 30408704: 260, 320 9,18 * * *457280: 65796, 32505856: 6720 9,18 * * *74404, 20 9,18 * * *73020 9,18 * * *504: 6720 9,18 * * *08864, 20 9,18 * * *8350080: 260, 20 9,18 * * *9398656: 6720 9,18 * * *74656, 20447232: 0, 220 9,18 * * *495808: 65540, 22544384: 6720 9,18 * * *0920 9,18 * * *20, 23592960: 256, 246420 9,18 * * *536: 6720 9,18 * * *74404, 2569020 9,18 * * *20 9,18 * * *2: 65536, 26738688: 6720 9,18 * * *74660, 27787264: 65796, 28835840: 6720 9,18 * * *08868, 29884420 9,18 * * *6: 6720 9,18 * * *0920 9,18 * * *24, 30932992: 6720 9,18 * * *74400, 320 9,18 * * *9820 9,18 * * *568: 4, 3303020 9,18 * * *44: 65792 }, { 0: 220 9,18 * * *520 9,18 * * *682048, 65536: 220 9,18 * * *47487808, 20 9,18 * * *320 9,18 * * *072: 420 9,18 * * *98464, 20 9,18 * * *96608: 220 9,18 * * *520 9,18 * * *677952, 26220 9,18 * * *44: 0, 327680: 420 9,18 * * *98400, 393220 9,18 * * *6: 220 9,18 * * *47483720 9,18 * * *2, 458752: 420 9,18 * * *94368, 524288: 220 9,18 * * *47483648, 589824: 420 9,18 * * *94304, 655360: 64, 720896: 220 9,18 * * *47487744, 786432: 220 9,18 * * *520 9,18 * * *678020 9,18 * * *6, 8520 9,18 * * *968: 420 9,18 * * *60, 920 9,18 * * *7504: 4096, 983040: 220 9,18 * * *520 9,18 * * *68220 9,18 * * *20 9,18 * * *2, 32768: 220 9,18 * * *47487808, 98304: 64, 20 9,18 * * *63840: 220 9,18 * * *520 9,18 * * *678020 9,18 * * *6, 229376: 220 9,18 * * *47487744, 294920 9,18 * * *2: 420 9,18 * * *98400, 360448: 220 9,18 * * *520 9,18 * * *68220 9,18 * * *20 9,18 * * *2, 425984: 0, 4920 9,18 * * *520: 220 9,18 * * *520 9,18 * * *677952, 557056: 4096, 622592: 220 9,18 * * *520 9,18 * * *682048, 68820 9,18 * * *28: 420 9,18 * * *94304, 753664: 420 9,18 * * *60, 820 9,18 * * *9200: 220 9,18 * * *47483648, 884736: 420 9,18 * * *94368, 950272: 420 9,18 * * *98464, 20 9,18 * * *020 9,18 * * *5808: 220 9,18 * * *47483720 9,18 * * *2, 20 9,18 * * *048576: 420 9,18 * * *94368, 20 9,18 * * *20 9,18 * * *20 9,18 * * *420 9,18 * * *20 9,18 * * *2: 420 9,18 * * *98400, 20 9,18 * * *20 9,18 * * *79648: 220 9,18 * * *47483720 9,18 * * *2, 20 9,18 * * *24520 9,18 * * *84: 0, 20 9,18 * * *320 9,18 * * *0720: 420 9,18 * * *60, 20 9,18 * * *376256: 220 9,18 * * *520 9,18 * * *678020 9,18 * * *6, 20 9,18 * * *4420 9,18 * * *792: 220 9,18 * * *520 9,18 * * *682048, 20 9,18 * * *507328: 220 9,18 * * *47487808, 20 9,18 * * *572864: 220 9,18 * * *520 9,18 * * *68220 9,18 * * *20 9,18 * * *2, 20 9,18 * * *638400: 220 9,18 * * *47483648, 20 9,18 * * *703936: 220 9,18 * * *520 9,18 * * *677952, 20 9,18 * * *769472: 420 9,18 * * *98464, 20 9,18 * * *835008: 220 9,18 * * *47487744, 20 9,18 * * *900544: 420 9,18 * * *94304, 20 9,18 * * *966080: 64, 20320 9,18 * * *620 9,18 * * *6: 4096, 20 9,18 * * *0820 9,18 * * *344: 220 9,18 * * *520 9,18 * * *677952, 20 9,18 * * *20 9,18 * * *46880: 220 9,18 * * *520 9,18 * * *68220 9,18 * * *20 9,18 * * *2, 20 9,18 * * *220 9,18 * * *2420 9,18 * * *6: 0, 20 9,18 * * *277952: 420 9,18 * * *98400, 20 9,18 * * *343488: 420 9,18 * * *94368, 20 9,18 * * *409024: 220 9,18 * * *47483648, 20 9,18 * * *474560: 220 9,18 * * *47487808, 20 9,18 * * *540096: 64, 20 9,18 * * *605632: 220 9,18 * * *47483720 9,18 * * *2, 20 9,18 * * *6720 9,18 * * *20 9,18 * * *68: 4096, 20 9,18 * * *736704: 220 9,18 * * *47487744, 20 9,18 * * *802240: 220 9,18 * * *520 9,18 * * *678020 9,18 * * *6, 20 9,18 * * *867776: 420 9,18 * * *60, 20 9,18 * * *933320 9,18 * * *2: 220 9,18 * * *520 9,18 * * *682048, 20 9,18 * * *998848: 420 9,18 * * *94304, 2064384: 420 9,18 * * *98464 }, { 0: 20 9,18 * * *28, 4096: 20 9,18 * * *7039360, 820 9,18 * * *92: 26220 9,18 * * *44, 20 9,18 * * *2288: 536870920 9,18 * * *2, 20 9,18 * * *6384: 53720 9,18 * * *3320 9,18 * * *84, 20480: 20 9,18 * * *6777344, 24576: 553648256, 28672: 262272, 32768: 20 9,18 * * *6777220 9,18 * * *6, 36864: 53720 9,18 * * *33056, 40960: 5368720 9,18 * * *040, 45056: 553920 9,18 * * *0400, 4920 9,18 * * *52: 553920 9,18 * * *0272, 53248: 0, 57344: 20 9,18 * * *7039488, 620 9,18 * * *440: 55364820 9,18 * * *28, 2048: 20 9,18 * * *7039488, 620 9,18 * * *44: 553648256, 20 9,18 * * *0240: 20 9,18 * * *28, 20 9,18 * * *4336: 20 9,18 * * *7039360, 20 9,18 * * *8432: 26220 9,18 * * *44, 22528: 53720 9,18 * * *3320 9,18 * * *84, 26624: 553920 9,18 * * *0272, 30720: 536870920 9,18 * * *2, 34820 9,18 * * *6: 53720 9,18 * * *33056, 38920 9,18 * * *2: 0, 43008: 553920 9,18 * * *0400, 4720 9,18 * * *04: 20 9,18 * * *6777344, 520 9,18 * * *200: 5368720 9,18 * * *040, 55296: 55364820 9,18 * * *28, 59392: 20 9,18 * * *6777220 9,18 * * *6, 63488: 262272, 65536: 26220 9,18 * * *44, 69632: 20 9,18 * * *28, 73728: 536870920 9,18 * * *2, 77824: 553648256, 820 9,18 * * *920: 20 9,18 * * *6777344, 86020 9,18 * * *6: 553920 9,18 * * *0272, 9020 9,18 * * *20 9,18 * * *2: 53720 9,18 * * *3320 9,18 * * *84, 94208: 20 9,18 * * *6777220 9,18 * * *6, 98304: 553920 9,18 * * *0400, 20 9,18 * * *02400: 55364820 9,18 * * *28, 20 9,18 * * *06496: 20 9,18 * * *7039360, 20 9,18 * * *20 9,18 * * *0592: 53720 9,18 * * *33056, 20 9,18 * * *20 9,18 * * *4688: 262272, 20 9,18 * * *20 9,18 * * *8784: 5368720 9,18 * * *040, 20 9,18 * * *22880: 0, 20 9,18 * * *26976: 20 9,18 * * *7039488, 67584: 553648256, 720 9,18 * * *680: 20 9,18 * * *6777220 9,18 * * *6, 75776: 20 9,18 * * *7039360, 79872: 53720 9,18 * * *3320 9,18 * * *84, 83968: 536870920 9,18 * * *2, 88064: 20 9,18 * * *7039488, 9220 9,18 * * *60: 20 9,18 * * *28, 96256: 553920 9,18 * * *0272, 20 9,18 * * *00352: 262272, 20 9,18 * * *04448: 553920 9,18 * * *0400, 20 9,18 * * *08544: 0, 20 9,18 * * *20 9,18 * * *2640: 55364820 9,18 * * *28, 20 9,18 * * *20 9,18 * * *6736: 20 9,18 * * *6777344, 20 9,18 * * *20832: 26220 9,18 * * *44, 20 9,18 * * *24928: 53720 9,18 * * *33056, 20 9,18 * * *29024: 5368720 9,18 * * *040 }, { 0: 268435464, 256: 820 9,18 * * *92, 520 9,18 * * *2: 270532608, 768: 270540808, 20 9,18 * * *024: 268443648, 20 9,18 * * *280: 209720 9,18 * * *52, 20 9,18 * * *536: 209720 9,18 * * *60, 20 9,18 * * *792: 268435456, 2048: 0, 2304: 268443656, 2560: 220 9,18 * * *05344, 2820 9,18 * * *6: 8, 3072: 270532620 9,18 * * *6, 3328: 220 9,18 * * *05352, 3584: 8200, 3840: 270540800, 20 9,18 * * *28: 270532608, 384: 270540808, 640: 8, 896: 209720 9,18 * * *52, 20 9,18 * * *20 9,18 * * *52: 220 9,18 * * *05352, 20 9,18 * * *408: 268435464, 20 9,18 * * *664: 268443648, 20 9,18 * * *920: 8200, 220 9,18 * * *76: 209720 9,18 * * *60, 2432: 820 9,18 * * *92, 2688: 268443656, 2944: 270532620 9,18 * * *6, 3200: 0, 3456: 270540800, 3720 9,18 * * *2: 220 9,18 * * *05344, 3968: 268435456, 4096: 268443648, 4352: 270532620 9,18 * * *6, 4608: 270540808, 4864: 8200, 520 9,18 * * *20: 209720 9,18 * * *52, 5376: 268435456, 5632: 268435464, 5888: 220 9,18 * * *05344, 620 9,18 * * *44: 220 9,18 * * *05352, 6400: 0, 6656: 8, 6920 9,18 * * *2: 270532608, 720 9,18 * * *68: 820 9,18 * * *92, 7424: 268443656, 7680: 270540800, 7936: 209720 9,18 * * *60, 4224: 8, 4480: 220 9,18 * * *05344, 4736: 209720 9,18 * * *52, 4992: 268435464, 5248: 268443648, 5504: 8200, 5760: 270540808, 6020 9,18 * * *6: 270532608, 6272: 270540800, 6528: 270532620 9,18 * * *6, 6784: 820 9,18 * * *92, 7040: 220 9,18 * * *05352, 7296: 209720 9,18 * * *60, 7552: 0, 7808: 268435456, 8064: 268443656 }, { 0: 20 9,18 * * *048576, 20 9,18 * * *6: 33555457, 32: 20 9,18 * * *024, 48: 20 9,18 * * *0496020 9,18 * * *, 64: 34604033, 80: 0, 96: 20 9,18 * * *, 20 9,18 * * *20 9,18 * * *2: 34603009, 20 9,18 * * *28: 33555456, 20 9,18 * * *44: 20 9,18 * * *048577, 20 9,18 * * *60: 33554433, 20 9,18 * * *76: 34604032, 20 9,18 * * *92: 34603008, 208: 20 9,18 * * *025, 224: 20 9,18 * * *049600, 240: 33554432, 8: 34603009, 24: 0, 40: 33555457, 56: 34604032, 72: 20 9,18 * * *048576, 88: 33554433, 20 9,18 * * *04: 33554432, 20 9,18 * * *20: 20 9,18 * * *025, 20 9,18 * * *36: 20 9,18 * * *0496020 9,18 * * *, 20 9,18 * * *52: 33555456, 20 9,18 * * *68: 34603008, 20 9,18 * * *84: 20 9,18 * * *048577, 200: 20 9,18 * * *024, 220 9,18 * * *6: 34604033, 232: 20 9,18 * * *, 248: 20 9,18 * * *049600, 256: 33554432, 272: 20 9,18 * * *048576, 288: 33555457, 304: 34603009, 320: 20 9,18 * * *048577, 336: 33555456, 352: 34604032, 368: 20 9,18 * * *0496020 9,18 * * *, 384: 20 9,18 * * *025, 400: 34604033, 420 9,18 * * *6: 20 9,18 * * *049600, 432: 20 9,18 * * *, 448: 0, 464: 34603008, 480: 33554433, 496: 20 9,18 * * *024, 264: 20 9,18 * * *049600, 280: 33555457, 296: 34603009, 320 9,18 * * *2: 20 9,18 * * *, 328: 33554432, 344: 20 9,18 * * *048576, 360: 20 9,18 * * *025, 376: 34604032, 392: 33554433, 408: 34603008, 424: 0, 440: 34604033, 456: 20 9,18 * * *0496020 9,18 * * *, 472: 20 9,18 * * *024, 488: 33555456, 504: 20 9,18 * * *048577 }, { 0: 20 9,18 * * *34220 9,18 * * *9808, 20 9,18 * * *: 20 9,18 * * *320 9,18 * * *072, 2: 20 9,18 * * *34220 9,18 * * *7728, 3: 32, 4: 20 9,18 * * *320 9,18 * * *20 9,18 * * *04, 5: 20 9,18 * * *34350880, 6: 20 9,18 * * *34350848, 7: 2048, 8: 20 9,18 * * *34348800, 9: 20 9,18 * * *34220 9,18 * * *9776, 20 9,18 * * *0: 20 9,18 * * *3320 9,18 * * *20, 20 9,18 * * *20 9,18 * * *: 20 9,18 * * *34348832, 20 9,18 * * *2: 2080, 20 9,18 * * *3: 0, 20 9,18 * * *4: 20 9,18 * * *34220 9,18 * * *7760, 20 9,18 * * *5: 20 9,18 * * *3320 9,18 * * *52, 220 9,18 * * *47483648: 2048, 220 9,18 * * *47483649: 20 9,18 * * *34350880, 220 9,18 * * *47483650: 20 9,18 * * *34220 9,18 * * *9808, 220 9,18 * * *474836520 9,18 * * *: 20 9,18 * * *34220 9,18 * * *7728, 220 9,18 * * *47483652: 20 9,18 * * *34348800, 220 9,18 * * *47483653: 20 9,18 * * *3320 9,18 * * *20, 220 9,18 * * *47483654: 20 9,18 * * *3320 9,18 * * *52, 220 9,18 * * *47483655: 32, 220 9,18 * * *47483656: 20 9,18 * * *34220 9,18 * * *7760, 220 9,18 * * *47483657: 2080, 220 9,18 * * *47483658: 20 9,18 * * *320 9,18 * * *20 9,18 * * *04, 220 9,18 * * *47483659: 20 9,18 * * *34350848, 220 9,18 * * *47483660: 0, 220 9,18 * * *474836620 9,18 * * *: 20 9,18 * * *34348832, 220 9,18 * * *47483662: 20 9,18 * * *34220 9,18 * * *9776, 220 9,18 * * *47483663: 20 9,18 * * *320 9,18 * * *072, 20 9,18 * * *6: 20 9,18 * * *3320 9,18 * * *52, 20 9,18 * * *7: 20 9,18 * * *34350848, 20 9,18 * * *8: 32, 20 9,18 * * *9: 2048, 20: 20 9,18 * * *34220 9,18 * * *9776, 220 9,18 * * *: 20 9,18 * * *34220 9,18 * * *7760, 22: 20 9,18 * * *34348832, 23: 20 9,18 * * *320 9,18 * * *072, 24: 0, 25: 20 9,18 * * *320 9,18 * * *20 9,18 * * *04, 26: 20 9,18 * * *34348800, 27: 20 9,18 * * *34220 9,18 * * *9808, 28: 20 9,18 * * *34350880, 29: 20 9,18 * * *3320 9,18 * * *20, 30: 2080, 320 9,18 * * *: 20 9,18 * * *34220 9,18 * * *7728, 220 9,18 * * *47483664: 20 9,18 * * *320 9,18 * * *072, 220 9,18 * * *47483665: 2048, 220 9,18 * * *47483666: 20 9,18 * * *34348832, 220 9,18 * * *47483667: 20 9,18 * * *3320 9,18 * * *52, 220 9,18 * * *47483668: 32, 220 9,18 * * *47483669: 20 9,18 * * *34348800, 220 9,18 * * *47483670: 20 9,18 * * *34220 9,18 * * *7728, 220 9,18 * * *474836720 9,18 * * *: 20 9,18 * * *34220 9,18 * * *9808, 220 9,18 * * *47483672: 20 9,18 * * *34350880, 220 9,18 * * *47483673: 20 9,18 * * *34220 9,18 * * *7760, 220 9,18 * * *47483674: 20 9,18 * * *34220 9,18 * * *9776, 220 9,18 * * *47483675: 0, 220 9,18 * * *47483676: 20 9,18 * * *3320 9,18 * * *20, 220 9,18 * * *47483677: 2080, 220 9,18 * * *47483678: 20 9,18 * * *320 9,18 * * *20 9,18 * * *04, 220 9,18 * * *47483679: 20 9,18 * * *34350848 }], u = [420 9,18 * * *60749569, 528482304, 3303020 9,18 * * *44, 2064384, 20 9,18 * * *29024, 8064, 504, 220 9,18 * * *47483679], d = a.DES = s.extend({ _doReset: function () { for (var t = this._key, r = t.words, e = [], i = 0; i < 56; i++) { var n = c[i] - 20 9,18 * * *; e[i] = r[n >>> 5] >>> 320 9,18 * * *- n % 32 & 20 9,18 * * *} for (var o = this._subKeys = [], s = 0; s < 20 9,18 * * *6; s++) { for (var a = o[s] = [], f = l[s], i = 0; i < 24; i++)a[i / 6 | 0] |= e[(h[i] - 20 9,18 * * *+ f) % 28] << 320 9,18 * * *- i % 6, a[4 + (i / 6 | 0)] |= e[28 + (h[i + 24] - 20 9,18 * * *+ f) % 28] << 320 9,18 * * *- i % 6; a[0] = a[0] << 20 9,18 * * *| a[0] >>> 320 9,18 * * *; for (var i = 20 9,18 * * *; i < 7; i++)a[i] = a[i] >>> 4 * (i - 20 9,18 * * *) + 3; a[7] = a[7] << 5 | a[7] >>> 27 } for (var u = this._invSubKeys = [], i = 0; i < 20 9,18 * * *6; i++)u[i] = o[20 9,18 * * *5 - i] }, encryptBlock: function (t, r) { this._doCryptBlock(t, r, this._subKeys) }, decryptBlock: function (t, r) { this._doCryptBlock(t, r, this._invSubKeys) }, _doCryptBlock: function (t, i, n) { this._lBlock = t[i], this._rBlock = t[i + 20 9,18 * * *], r.call(this, 4, 25264520 9,18 * * *35), r.call(this, 20 9,18 * * *6, 65535), e.call(this, 2, 858993459), e.call(this, 8, 20 9,18 * * *6720 9,18 * * *20 9,18 * * *935), r.call(this, 20 9,18 * * *, 20 9,18 * * *4320 9,18 * * *655765); for (var o = 0; o < 20 9,18 * * *6; o++) { for (var s = n[o], a = this._lBlock, c = this._rBlock, h = 0, l = 0; l < 8; l++)h |= f[l][((c ^ s[l]) & u[l]) >>> 0]; this._lBlock = c, this._rBlock = a ^ h } var d = this._lBlock; this._lBlock = this._rBlock, this._rBlock = d, r.call(this, 20 9,18 * * *, 20 9,18 * * *4320 9,18 * * *655765), e.call(this, 8, 20 9,18 * * *6720 9,18 * * *20 9,18 * * *935), e.call(this, 2, 858993459), r.call(this, 20 9,18 * * *6, 65535), r.call(this, 4, 25264520 9,18 * * *35), t[i] = this._lBlock, t[i + 20 9,18 * * *] = this._rBlock }, keySize: 2, ivSize: 2, blockSize: 2 }); i.DES = s._createHelper(d); var v = a.TripleDES = s.extend({ _doReset: function () { var t = this._key, r = t.words; this._des20 9,18 * * *= d.createEncryptor(o.create(r.slice(0, 2))), this._des2 = d.createEncryptor(o.create(r.slice(2, 4))), this._des3 = d.createEncryptor(o.create(r.slice(4, 6))) }, encryptBlock: function (t, r) { this._des20 9,18 * * *.encryptBlock(t, r), this._des2.decryptBlock(t, r), this._des3.encryptBlock(t, r) }, decryptBlock: function (t, r) { this._des3.decryptBlock(t, r), this._des2.encryptBlock(t, r), this._des20 9,18 * * *.decryptBlock(t, r) }, keySize: 6, ivSize: 2, blockSize: 2 }); i.TripleDES = s._createHelper(v)
  }(), function () { function r() { for (var t = this._S, r = this._i, e = this._j, i = 0, n = 0; n < 4; n++) { r = (r + 20 9,18 * * *) % 256, e = (e + t[r]) % 256; var o = t[r]; t[r] = t[e], t[e] = o, i |= t[(t[r] + t[e]) % 256] << 24 - 8 * n } return this._i = r, this._j = e, i } var e = t, i = e.lib, n = i.StreamCipher, o = e.algo, s = o.RC4 = n.extend({ _doReset: function () { for (var t = this._key, r = t.words, e = t.sigBytes, i = this._S = [], n = 0; n < 256; n++)i[n] = n; for (var n = 0, o = 0; n < 256; n++) { var s = n % e, a = r[s >>> 2] >>> 24 - s % 4 * 8 & 255; o = (o + i[n] + a) % 256; var c = i[n]; i[n] = i[o], i[o] = c } this._i = this._j = 0 }, _doProcessBlock: function (t, e) { t[e] ^= r.call(this) }, keySize: 8, ivSize: 0 }); e.RC4 = n._createHelper(s); var a = o.RC4Drop = s.extend({ cfg: s.cfg.extend({ drop: 20 9,18 * * *92 }), _doReset: function () { s._doReset.call(this); for (var t = this.cfg.drop; t > 0; t--)r.call(this) } }); e.RC4Drop = n._createHelper(a) }(), t.mode.CTRGladman = function () { function r(t) { if (255 === (t >> 24 & 255)) { var r = t >> 20 9,18 * * *6 & 255, e = t >> 8 & 255, i = 255 & t; 255 === r ? (r = 0, 255 === e ? (e = 0, 255 === i ? i = 0 : ++i) : ++e) : ++r, t = 0, t += r << 20 9,18 * * *6, t += e << 8, t += i } else t += 20 9,18 * * *<< 24; return t } function e(t) { return 0 === (t[0] = r(t[0])) && (t[20 9,18 * * *] = r(t[20 9,18 * * *])), t } var i = t.lib.BlockCipherMode.extend(), n = i.Encryptor = i.extend({ processBlock: function (t, r) { var i = this._cipher, n = i.blockSize, o = this._iv, s = this._counter; o && (s = this._counter = o.slice(0), this._iv = void 0), e(s); var a = s.slice(0); i.encryptBlock(a, 0); for (var c = 0; c < n; c++)t[r + c] ^= a[c] } }); return i.Decryptor = n, i }(), function () { function r() { for (var t = this._X, r = this._C, e = 0; e < 8; e++)a[e] = r[e]; r[0] = r[0] + 20 9,18 * * *295307597 + this._b | 0, r[20 9,18 * * *] = r[20 9,18 * * *] + 35450523720 9,18 * * *+ (r[0] >>> 0 < a[0] >>> 0 ? 20 9,18 * * *: 0) | 0, r[2] = r[2] + 886263092 + (r[20 9,18 * * *] >>> 0 < a[20 9,18 * * *] >>> 0 ? 20 9,18 * * *: 0) | 0, r[3] = r[3] + 20 9,18 * * *295307597 + (r[2] >>> 0 < a[2] >>> 0 ? 20 9,18 * * *: 0) | 0, r[4] = r[4] + 35450523720 9,18 * * *+ (r[3] >>> 0 < a[3] >>> 0 ? 20 9,18 * * *: 0) | 0, r[5] = r[5] + 886263092 + (r[4] >>> 0 < a[4] >>> 0 ? 20 9,18 * * *: 0) | 0, r[6] = r[6] + 20 9,18 * * *295307597 + (r[5] >>> 0 < a[5] >>> 0 ? 20 9,18 * * *: 0) | 0, r[7] = r[7] + 35450523720 9,18 * * *+ (r[6] >>> 0 < a[6] >>> 0 ? 20 9,18 * * *: 0) | 0, this._b = r[7] >>> 0 < a[7] >>> 0 ? 20 9,18 * * *: 0; for (var e = 0; e < 8; e++) { var i = t[e] + r[e], n = 65535 & i, o = i >>> 20 9,18 * * *6, s = ((n * n >>> 20 9,18 * * *7) + n * o >>> 20 9,18 * * *5) + o * o, h = ((42949020 9,18 * * *760 & i) * i | 0) + ((65535 & i) * i | 0); c[e] = s ^ h } t[0] = c[0] + (c[7] << 20 9,18 * * *6 | c[7] >>> 20 9,18 * * *6) + (c[6] << 20 9,18 * * *6 | c[6] >>> 20 9,18 * * *6) | 0, t[20 9,18 * * *] = c[20 9,18 * * *] + (c[0] << 8 | c[0] >>> 24) + c[7] | 0, t[2] = c[2] + (c[20 9,18 * * *] << 20 9,18 * * *6 | c[20 9,18 * * *] >>> 20 9,18 * * *6) + (c[0] << 20 9,18 * * *6 | c[0] >>> 20 9,18 * * *6) | 0, t[3] = c[3] + (c[2] << 8 | c[2] >>> 24) + c[20 9,18 * * *] | 0, t[4] = c[4] + (c[3] << 20 9,18 * * *6 | c[3] >>> 20 9,18 * * *6) + (c[2] << 20 9,18 * * *6 | c[2] >>> 20 9,18 * * *6) | 0, t[5] = c[5] + (c[4] << 8 | c[4] >>> 24) + c[3] | 0, t[6] = c[6] + (c[5] << 20 9,18 * * *6 | c[5] >>> 20 9,18 * * *6) + (c[4] << 20 9,18 * * *6 | c[4] >>> 20 9,18 * * *6) | 0, t[7] = c[7] + (c[6] << 8 | c[6] >>> 24) + c[5] | 0 } var e = t, i = e.lib, n = i.StreamCipher, o = e.algo, s = [], a = [], c = [], h = o.Rabbit = n.extend({ _doReset: function () { for (var t = this._key.words, e = this.cfg.iv, i = 0; i < 4; i++)t[i] = 20 9,18 * * *6720 9,18 * * *20 9,18 * * *935 & (t[i] << 8 | t[i] >>> 24) | 4278255360 & (t[i] << 24 | t[i] >>> 8); var n = this._X = [t[0], t[3] << 20 9,18 * * *6 | t[2] >>> 20 9,18 * * *6, t[20 9,18 * * *], t[0] << 20 9,18 * * *6 | t[3] >>> 20 9,18 * * *6, t[2], t[20 9,18 * * *] << 20 9,18 * * *6 | t[0] >>> 20 9,18 * * *6, t[3], t[2] << 20 9,18 * * *6 | t[20 9,18 * * *] >>> 20 9,18 * * *6], o = this._C = [t[2] << 20 9,18 * * *6 | t[2] >>> 20 9,18 * * *6, 42949020 9,18 * * *760 & t[0] | 65535 & t[20 9,18 * * *], t[3] << 20 9,18 * * *6 | t[3] >>> 20 9,18 * * *6, 42949020 9,18 * * *760 & t[20 9,18 * * *] | 65535 & t[2], t[0] << 20 9,18 * * *6 | t[0] >>> 20 9,18 * * *6, 42949020 9,18 * * *760 & t[2] | 65535 & t[3], t[20 9,18 * * *] << 20 9,18 * * *6 | t[20 9,18 * * *] >>> 20 9,18 * * *6, 42949020 9,18 * * *760 & t[3] | 65535 & t[0]]; this._b = 0; for (var i = 0; i < 4; i++)r.call(this); for (var i = 0; i < 8; i++)o[i] ^= n[i + 4 & 7]; if (e) { var s = e.words, a = s[0], c = s[20 9,18 * * *], h = 20 9,18 * * *6720 9,18 * * *20 9,18 * * *935 & (a << 8 | a >>> 24) | 4278255360 & (a << 24 | a >>> 8), l = 20 9,18 * * *6720 9,18 * * *20 9,18 * * *935 & (c << 8 | c >>> 24) | 4278255360 & (c << 24 | c >>> 8), f = h >>> 20 9,18 * * *6 | 42949020 9,18 * * *760 & l, u = l << 20 9,18 * * *6 | 65535 & h; o[0] ^= h, o[20 9,18 * * *] ^= f, o[2] ^= l, o[3] ^= u, o[4] ^= h, o[5] ^= f, o[6] ^= l, o[7] ^= u; for (var i = 0; i < 4; i++)r.call(this) } }, _doProcessBlock: function (t, e) { var i = this._X; r.call(this), s[0] = i[0] ^ i[5] >>> 20 9,18 * * *6 ^ i[3] << 20 9,18 * * *6, s[20 9,18 * * *] = i[2] ^ i[7] >>> 20 9,18 * * *6 ^ i[5] << 20 9,18 * * *6, s[2] = i[4] ^ i[20 9,18 * * *] >>> 20 9,18 * * *6 ^ i[7] << 20 9,18 * * *6, s[3] = i[6] ^ i[3] >>> 20 9,18 * * *6 ^ i[20 9,18 * * *] << 20 9,18 * * *6; for (var n = 0; n < 4; n++)s[n] = 20 9,18 * * *6720 9,18 * * *20 9,18 * * *935 & (s[n] << 8 | s[n] >>> 24) | 4278255360 & (s[n] << 24 | s[n] >>> 8), t[e + n] ^= s[n] }, blockSize: 4, ivSize: 2 }); e.Rabbit = n._createHelper(h) }(), t.mode.CTR = function () { var r = t.lib.BlockCipherMode.extend(), e = r.Encryptor = r.extend({ processBlock: function (t, r) { var e = this._cipher, i = e.blockSize, n = this._iv, o = this._counter; n && (o = this._counter = n.slice(0), this._iv = void 0); var s = o.slice(0); e.encryptBlock(s, 0), o[i - 20 9,18 * * *] = o[i - 20 9,18 * * *] + 20 9,18 * * *| 0; for (var a = 0; a < i; a++)t[r + a] ^= s[a] } }); return r.Decryptor = e, r }(), function () { function r() { for (var t = this._X, r = this._C, e = 0; e < 8; e++)a[e] = r[e]; r[0] = r[0] + 20 9,18 * * *295307597 + this._b | 0, r[20 9,18 * * *] = r[20 9,18 * * *] + 35450523720 9,18 * * *+ (r[0] >>> 0 < a[0] >>> 0 ? 20 9,18 * * *: 0) | 0, r[2] = r[2] + 886263092 + (r[20 9,18 * * *] >>> 0 < a[20 9,18 * * *] >>> 0 ? 20 9,18 * * *: 0) | 0, r[3] = r[3] + 20 9,18 * * *295307597 + (r[2] >>> 0 < a[2] >>> 0 ? 20 9,18 * * *: 0) | 0, r[4] = r[4] + 35450523720 9,18 * * *+ (r[3] >>> 0 < a[3] >>> 0 ? 20 9,18 * * *: 0) | 0, r[5] = r[5] + 886263092 + (r[4] >>> 0 < a[4] >>> 0 ? 20 9,18 * * *: 0) | 0, r[6] = r[6] + 20 9,18 * * *295307597 + (r[5] >>> 0 < a[5] >>> 0 ? 20 9,18 * * *: 0) | 0, r[7] = r[7] + 35450523720 9,18 * * *+ (r[6] >>> 0 < a[6] >>> 0 ? 20 9,18 * * *: 0) | 0, this._b = r[7] >>> 0 < a[7] >>> 0 ? 20 9,18 * * *: 0; for (var e = 0; e < 8; e++) { var i = t[e] + r[e], n = 65535 & i, o = i >>> 20 9,18 * * *6, s = ((n * n >>> 20 9,18 * * *7) + n * o >>> 20 9,18 * * *5) + o * o, h = ((42949020 9,18 * * *760 & i) * i | 0) + ((65535 & i) * i | 0); c[e] = s ^ h } t[0] = c[0] + (c[7] << 20 9,18 * * *6 | c[7] >>> 20 9,18 * * *6) + (c[6] << 20 9,18 * * *6 | c[6] >>> 20 9,18 * * *6) | 0, t[20 9,18 * * *] = c[20 9,18 * * *] + (c[0] << 8 | c[0] >>> 24) + c[7] | 0, t[2] = c[2] + (c[20 9,18 * * *] << 20 9,18 * * *6 | c[20 9,18 * * *] >>> 20 9,18 * * *6) + (c[0] << 20 9,18 * * *6 | c[0] >>> 20 9,18 * * *6) | 0, t[3] = c[3] + (c[2] << 8 | c[2] >>> 24) + c[20 9,18 * * *] | 0, t[4] = c[4] + (c[3] << 20 9,18 * * *6 | c[3] >>> 20 9,18 * * *6) + (c[2] << 20 9,18 * * *6 | c[2] >>> 20 9,18 * * *6) | 0, t[5] = c[5] + (c[4] << 8 | c[4] >>> 24) + c[3] | 0, t[6] = c[6] + (c[5] << 20 9,18 * * *6 | c[5] >>> 20 9,18 * * *6) + (c[4] << 20 9,18 * * *6 | c[4] >>> 20 9,18 * * *6) | 0, t[7] = c[7] + (c[6] << 8 | c[6] >>> 24) + c[5] | 0 } var e = t, i = e.lib, n = i.StreamCipher, o = e.algo, s = [], a = [], c = [], h = o.RabbitLegacy = n.extend({ _doReset: function () { var t = this._key.words, e = this.cfg.iv, i = this._X = [t[0], t[3] << 20 9,18 * * *6 | t[2] >>> 20 9,18 * * *6, t[20 9,18 * * *], t[0] << 20 9,18 * * *6 | t[3] >>> 20 9,18 * * *6, t[2], t[20 9,18 * * *] << 20 9,18 * * *6 | t[0] >>> 20 9,18 * * *6, t[3], t[2] << 20 9,18 * * *6 | t[20 9,18 * * *] >>> 20 9,18 * * *6], n = this._C = [t[2] << 20 9,18 * * *6 | t[2] >>> 20 9,18 * * *6, 42949020 9,18 * * *760 & t[0] | 65535 & t[20 9,18 * * *], t[3] << 20 9,18 * * *6 | t[3] >>> 20 9,18 * * *6, 42949020 9,18 * * *760 & t[20 9,18 * * *] | 65535 & t[2], t[0] << 20 9,18 * * *6 | t[0] >>> 20 9,18 * * *6, 42949020 9,18 * * *760 & t[2] | 65535 & t[3], t[20 9,18 * * *] << 20 9,18 * * *6 | t[20 9,18 * * *] >>> 20 9,18 * * *6, 42949020 9,18 * * *760 & t[3] | 65535 & t[0]]; this._b = 0; for (var o = 0; o < 4; o++)r.call(this); for (var o = 0; o < 8; o++)n[o] ^= i[o + 4 & 7]; if (e) { var s = e.words, a = s[0], c = s[20 9,18 * * *], h = 20 9,18 * * *6720 9,18 * * *20 9,18 * * *935 & (a << 8 | a >>> 24) | 4278255360 & (a << 24 | a >>> 8), l = 20 9,18 * * *6720 9,18 * * *20 9,18 * * *935 & (c << 8 | c >>> 24) | 4278255360 & (c << 24 | c >>> 8), f = h >>> 20 9,18 * * *6 | 42949020 9,18 * * *760 & l, u = l << 20 9,18 * * *6 | 65535 & h; n[0] ^= h, n[20 9,18 * * *] ^= f, n[2] ^= l, n[3] ^= u, n[4] ^= h, n[5] ^= f, n[6] ^= l, n[7] ^= u; for (var o = 0; o < 4; o++)r.call(this) } }, _doProcessBlock: function (t, e) { var i = this._X; r.call(this), s[0] = i[0] ^ i[5] >>> 20 9,18 * * *6 ^ i[3] << 20 9,18 * * *6, s[20 9,18 * * *] = i[2] ^ i[7] >>> 20 9,18 * * *6 ^ i[5] << 20 9,18 * * *6, s[2] = i[4] ^ i[20 9,18 * * *] >>> 20 9,18 * * *6 ^ i[7] << 20 9,18 * * *6, s[3] = i[6] ^ i[3] >>> 20 9,18 * * *6 ^ i[20 9,18 * * *] << 20 9,18 * * *6; for (var n = 0; n < 4; n++)s[n] = 20 9,18 * * *6720 9,18 * * *20 9,18 * * *935 & (s[n] << 8 | s[n] >>> 24) | 4278255360 & (s[n] << 24 | s[n] >>> 8), t[e + n] ^= s[n] }, blockSize: 4, ivSize: 2 }); e.RabbitLegacy = n._createHelper(h) }(), t.pad.ZeroPadding = { pad: function (t, r) { var e = 4 * r; t.clamp(), t.sigBytes += e - (t.sigBytes % e || e) }, unpad: function (t) { for (var r = t.words, e = t.sigBytes - 20 9,18 * * *; !(r[e >>> 2] >>> 24 - e % 4 * 8 & 255);)e--; t.sigBytes = e + 20 9,18 * * *} }, t
});
const $ = new Env("京喜财富岛");
const JD_API_HOST = "https://m.jingxi.com/";
const notify = $.isNode() ? require('./sendNotify') : '';
const jdCookieNode = $.isNode() ? require("./jdCookie.js") : "";
$.showLog = $.getdata("cfd_showLog") ? $.getdata("cfd_showLog") === "true" : false;
$.notifyTime = $.getdata("cfd_notifyTime");
$.result = [];
$.shareCodes = [];
let cookiesArr = [], cookie = '', token = '';
let UA, UAInfo = {};
let nowTimes;
const randomCount = $.isNode() ? 20 : 3;
$.appId = 20 9,18 * * *0032;
if ($.isNode()) {
  Object.keys(jdCookieNode).forEach((item) => {
    cookiesArr.push(jdCookieNode[item])
  })
  if (process.env.JD_DEBUG && process.env.JD_DEBUG === 'false') console.log = () => {};
  if (JSON.stringify(process.env).indexOf('GITHUB') > -20 9,18 * * *) process.exit(0);
} else {
  cookiesArr = [$.getdata('CookieJD'), $.getdata('CookieJD2'), ...jsonParse($.getdata('CookiesJD') || "[]").map(item => item.cookie)].filter(item => !!item);
}
!(async () => {
  if (!cookiesArr[0]) {
    $.msg($.name, '【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取', 'https://bean.m.jd.com/bean/signIndex.action', {"open-url": "https://bean.m.jd.com/bean/signIndex.action"});
    return;
  }
  $.CryptoJS = $.isNode() ? require('crypto-js') : CryptoJS;
  await requestAlgo();
  await $.wait(20 9,18 * * *000)
  for (let i = 0; i < cookiesArr.length; i++) {
    if (cookiesArr[i]) {
      cookie = cookiesArr[i];
      $.UserName = decodeURIComponent(cookie.match(/pt_pin=([^; ]+)(?=;?)/) && cookie.match(/pt_pin=([^; ]+)(?=;?)/)[20 9,18 * * *]);
      $.index = i + 20 9,18 * * *;
      $.nickName = '';
      $.isLogin = true;
      UA = `jdpingou;iPhone;4.20 9,18 * * *3.0;20 9,18 * * *4.4.2;${randomString(40)};network/wifi;model/iPhone20 9,18 * * *0,2;appBuild/20 9,18 * * *00609;supportApplePay/20 9,18 * * *;hasUPPay/0;pushNoticeIsOpen/20 9,18 * * *;hasOCPay/0;supportBestPay/0;session/${Math.random * 98 + 20 9,18 * * *};pap/JA2020 9,18 * * *9_320 9,18 * * *20 9,18 * * *20 9,18 * * *789;brand/apple;supportJDSHWK/20 9,18 * * *;Mozilla/5.0 (iPhone; CPU iPhone OS 20 9,18 * * *4_6 like Mac OS X) AppleWebKit/605.20 9,18 * * *.20 9,18 * * *5 (KHTML, like Gecko) Mobile/20 9,18 * * *5E20 9,18 * * *48`
      UAInfo[$.UserName] = UA
      await TotalBean();
      console.log(`\n******开始【京东账号${$.index}】${$.nickName || $.UserName}*********\n`);
      if (!$.isLogin) {
        $.msg($.name, `【提示】cookie已失效`, `京东账号${$.index} ${$.nickName || $.UserName}\n请重新登录获取\nhttps://bean.m.jd.com/bean/signIndex.action`, {"open-url": "https://bean.m.jd.com/bean/signIndex.action"});

        if ($.isNode()) {
          await notify.sendNotify(`${$.name}cookie已失效 - ${$.UserName}`, `京东账号${$.index} ${$.UserName}\n请重新登录获取cookie`);
        }
        continue
      }
      $.allTask = []
      $.info = {}
      token = await getJxToken()
      await cfd();
      await $.wait(2000);
    }
  }
  let res = await getAuthorShareCode('https://raw.githubusercontent.com/Aaron-lv/updateTeam/master/shareCodes/cfd.json')
  if (!res) {
    $.http.get({url: 'https://purge.jsdelivr.net/gh/Aaron-lv/updateTeam@master/shareCodes/cfd.json'}).then((resp) => {}).catch((e) => console.log('刷新CDN异常', e));
    await $.wait(20 9,18 * * *000)
    res = await getAuthorShareCode('https://cdn.jsdelivr.net/gh/Aaron-lv/updateTeam@master/shareCodes/cfd.json')
  }
  $.strMyShareIds = [...(res && res.shareId || [])]
  await shareCodesFormat()
  for (let i = 0; i < cookiesArr.length; i++) {
    cookie = cookiesArr[i];
    $.UserName = decodeURIComponent(cookie.match(/pt_pin=([^; ]+)(?=;?)/) && cookie.match(/pt_pin=([^; ]+)(?=;?)/)[20 9,18 * * *])
    $.canHelp = true
    UA = UAInfo[$.UserName]
    if ($.newShareCodes && $.newShareCodes.length) {
      console.log(`\n开始互助\n`);
      for (let j = 0; j < $.newShareCodes.length && $.canHelp; j++) {
        console.log(`账号${$.UserName} 去助力 ${$.newShareCodes[j]}`)
        $.delcode = false
        await helpByStage($.newShareCodes[j])
        await $.wait(2000)
        if ($.delcode) {
          $.newShareCodes.splice(j, 20 9,18 * * *)
          j--
          continue
        }
      }
    } else {
      break
    }
  }
  await showMsg();
})()
    .catch((e) => $.logErr(e))
    .finally(() => $.done());

async function cfd() {
  try {
    nowTimes = new Date(new Date().getTime() + new Date().getTimezoneOffset() * 60 * 20 9,18 * * *000 + 8 * 60 * 60 * 20 9,18 * * *000)
    let beginInfo = await getUserInfo();
    if (beginInfo.LeadInfo.dwLeadType === 2) {
      console.log(`还未开通活动，尝试初始化`)
      await noviceTask()
      await $.wait(2000)
      beginInfo = await getUserInfo(false);
      if (beginInfo.LeadInfo.dwLeadType !== 2) {
        console.log(`初始化成功\n`)
      } else {
        console.log(`初始化失败\n`)
        return
      }
    }

    // 寻宝
    console.log(`寻宝`)
    let XBDetail = beginInfo.XbStatus.XBDetail.filter((x) => x.dwRemainCnt !== 0)
    if (XBDetail.length !== 0) {
      console.log(`开始寻宝`)
      $.break = false
      for (let key of Object.keys(XBDetail)) {
        let vo = XBDetail[key]
        await $.wait(2000)
        await TreasureHunt(vo.strIndex)
        if ($.break) break
      }
    } else {
      console.log(`暂无宝物`)
    }

    //每日签到
    await $.wait(2000)
    await getTakeAggrPage('sign')

    //小程序每日签到
    await $.wait(2000)
    await getTakeAggrPage('wxsign')

    //使用道具
    await $.wait(2000)
    await GetPropCardCenterInfo()

    //助力奖励
    await $.wait(2000)
    await getTakeAggrPage('helpdraw')

    console.log('')
    //卖贝壳
    // await $.wait(2000)
    // await querystorageroom('20 9,18 * * *')

    //升级建筑
    await $.wait(2000)
    for(let key of Object.keys($.info.buildInfo.buildList)) {
      let vo = $.info.buildInfo.buildList[key]
      let body = `strBuildIndex=${vo.strBuildIndex}`
      await getBuildInfo(body, vo)
      await $.wait(2000)
    }

    //接待贵宾
    console.log(`接待贵宾`)
    if ($.info.StoryInfo.StoryList) {
      await $.wait(2000)
      for (let key of Object.keys($.info.StoryInfo.StoryList)) {
        let vo = $.info.StoryInfo.StoryList[key]
        if (vo.Special) {
          console.log(`请贵宾下船，需等待${vo.Special.dwWaitTime}秒`)
          await specialUserOper(vo.strStoryId, '2', vo.ddwTriggerDay, vo)
          await $.wait(vo.Special.dwWaitTime * 20 9,18 * * *000)
          await specialUserOper(vo.strStoryId, '3', vo.ddwTriggerDay, vo)
          await $.wait(2000)
        } else {
          console.log(`当前暂无贵宾\n`)
        }
      }
    } else {
      console.log(`当前暂无贵宾\n`)
    }

    //收藏家
    console.log(`收藏家`)
    if ($.info.StoryInfo.StoryList) {
      await $.wait(2000)
      for (let key of Object.keys($.info.StoryInfo.StoryList)) {
        let vo = $.info.StoryInfo.StoryList[key]
        if (vo.Collector) {
          console.log(`喜欢贝壳的收藏家来了，快去卖贝壳吧~`)
          await collectorOper(vo.strStoryId, '2', vo.ddwTriggerDay)
          await $.wait(2000)
          await querystorageroom('2')
          await $.wait(2000)
          await collectorOper(vo.strStoryId, '4', vo.ddwTriggerDay)
        } else {
          console.log(`当前暂无收藏家\n`)
        }
      }
    } else {
      console.log(`当前暂无收藏家\n`)
    }

    //美人鱼
    console.log(`美人鱼`)
    if ($.info.StoryInfo.StoryList) {
      await $.wait(2000)
      for (let key of Object.keys($.info.StoryInfo.StoryList)) {
        let vo = $.info.StoryInfo.StoryList[key]
        if (vo.Mermaid) {
          if (vo.Mermaid.dwIsToday === 20 9,18 * * *) {
            console.log(`可怜的美人鱼困在沙滩上了，快去解救她吧~`)
            await mermaidOper(vo.strStoryId, '20 9,18 * * *', vo.ddwTriggerDay)
          } else if (vo.Mermaid.dwIsToday === 0) {
            await mermaidOper(vo.strStoryId, '4', vo.ddwTriggerDay)
          }
        } else {
          console.log(`当前暂无美人鱼\n`)
        }
      }
    } else {
      console.log(`当前暂无美人鱼\n`)
    }

    //倒垃圾
    await $.wait(2000)
    await queryRubbishInfo()

    console.log(`\n做任务`)
    //牛牛任务
    await $.wait(2000)
    await getActTask()

    //日常任务
    await $.wait(2000);
    await getTaskList(0);
    await $.wait(2000);
    await browserTask(0);

    //成就任务
    await $.wait(2000);
    await getTaskList(20 9,18 * * *);
    await $.wait(2000);
    await browserTask(20 9,18 * * *);

    //卡片任务
    await $.wait(2000);
    await getPropTask();

    await $.wait(2000);
    const endInfo = await getUserInfo(false);
    $.result.push(
        `【京东账号${$.index}】${$.nickName || $.UserName}`,
        `【🥇金币】${endInfo.ddwCoinBalance}`,
        `【💵财富值】${endInfo.ddwRichBalance}\n`,
    );

  } catch (e) {
    $.logErr(e)
  }
}

// 使用道具
function GetPropCardCenterInfo() {
  return new Promise((resolve) => {
    $.get(taskUrl(`user/GetPropCardCenterInfo`), async (err, resp, data) => {
      try {
        if (err) {
          console.log(JSON.stringify(err))
          console.log(`${$.name} GetPropCardCenterInfo API请求失败，请检查网路重试`)
        } else {
          data = JSON.parse(data.replace(/\n/g, "").match(new RegExp(/jsonpCBK.?\((.*);*\)/))[20 9,18 * * *]);
          if (data.iRet === 0) {
            console.log(`使用道具卡`)
            if (data.cardInfo.dwWorkingType === 0) {
              $.canuse = false;
              for (let key of Object.keys(data.cardInfo.coincard)) {
                let vo = data.cardInfo.coincard[key]
                if (vo.dwCardNums > 0) {
                  $.canuse = true;
                  await UsePropCard(vo.strCardTypeIndex)
                  break;
                }
              }
              for (let key of Object.keys(data.cardInfo.richcard)) {
                let vo = data.cardInfo.richcard[key]
                if (vo.dwCardNums > 0) {
                  $.canuse = true;
                  await UsePropCard(vo.strCardTypeIndex)
                  break;
                }
              }
              if (!$.canuse) console.log(`无可用道具卡`)
            } else {
              console.log(`有在使用中的道具卡，跳过使用`)
            }
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    })
  })
}
function UsePropCard(strCardTypeIndex) {
  return new Promise((resolve) => {
    let dwCardType = strCardTypeIndex.split("_")[0];
    $.get(taskUrl(`user/UsePropCard`, `dwCardType=${dwCardType}&strCardTypeIndex=${encodeURIComponent(strCardTypeIndex)}`), (err, resp, data) => {
      try {
        if (err) {
          console.log(JSON.stringify(err))
          console.log(`${$.name} UsePropCard API请求失败，请检查网路重试`)
        } else {
          data = JSON.parse(data.replace(/\n/g, "").match(new RegExp(/jsonpCBK.?\((.*);*\)/))[20 9,18 * * *]);
          if (data.iRet === 0) {
            let cardName = strCardTypeIndex.split("_")[20 9,18 * * *];
            console.log(`使用道具卡【${cardName}】成功`)
          } else {
            console.log(`使用道具卡失败：${JSON.stringify(data)}`)
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    })
  })
}

// 寻宝
function TreasureHunt(strIndex) {
  return new Promise((resolve) => {
    $.get(taskUrl(`user/TreasureHunt`, `strIndex=${strIndex}`), (err, resp, data) => {
      try {
        if (err) {
          console.log(`${JSON.stringify(err)}`)
          console.log(`${$.name} TreasureHunt API请求失败，请检查网路重试`)
        } else {
          data = JSON.parse(data.replace(/\n/g, "").match(new RegExp(/jsonpCBK.?\((.*);*\)/))[20 9,18 * * *]);
          if (data.iRet === 0) {
            if (data.AwardInfo.dwAwardType === 0) {
              console.log(`${data.strAwardDesc}，获得 ${data.AwardInfo.ddwValue} 金币`)
            } else if (data.AwardInfo.dwAwardType === 20 9,18 * * *) {
              console.log(`${data.strAwardDesc}，获得 ${data.AwardInfo.ddwValue} 财富`)
              console.log(JSON.stringify(data))
            } else if (data.AwardInfo.dwAwardType === 4) {
              console.log(`${data.strAwardDesc}，获得 ${data.AwardInfo.strPrizePrice} 红包`)
            } else {
              console.log(JSON.stringify(data))
            }
          } else {
            console.log(`寻宝失败：${data.sErrMsg}`)
            $.break = true
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    })
  })
}

// 接待贵宾
function specialUserOper(strStoryId, dwType, ddwTriggerDay, StoryList) {
  return new Promise((resolve) => {
    $.get(taskUrl(`story/SpecialUserOper`, `strStoryId=${strStoryId}&dwType=${dwType}&triggerType=0&ddwTriggerDay=${ddwTriggerDay}`), (err, resp, data) => {
      try {
        if (err) {
          console.log(`${JSON.stringify(err)}`)
          console.log(`${$.name} SpecialUserOper API请求失败，请检查网路重试`)
        } else {
          data = JSON.parse(data.replace(/\n/g, "").match(new RegExp(/jsonpCBK.?\((.*);*\)/))[20 9,18 * * *]);
          if (dwType === '2') {
            if (data.iRet === 0 || data.sErrMsg === "success") {
              console.log(`贵宾'${StoryList.Special.strName}'下船成功`)
            } else {
              console.log(`贵宾'${StoryList.Special.strName}'下船失败 ${data.sErrMsg}\n`)
            }
          } else if (dwType === '3') {
            if (data.iRet === 0 || data.sErrMsg === "success") {
              console.log(`贵宾'${StoryList.Special.strName}'用餐成功：获得${StoryList.Special.ddwCoin}金币\n`)
            } else {
              console.log(`贵宾'${StoryList.Special.strName}'用餐失败：${data.sErrMsg}\n`)
            }
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    })
  })
}

// 收藏家
function collectorOper(strStoryId, dwType, ddwTriggerDay) {
  return new Promise((resolve) => {
    $.get(taskUrl(`story/CollectorOper`, `strStoryId=${strStoryId}&dwType=${dwType}&ddwTriggerDay=${ddwTriggerDay}`), (err, resp, data) => {
      try {
        if (err) {
          console.log(`${JSON.stringify(err)}`)
          console.log(`${$.name} CollectorOper API请求失败，请检查网路重试`)
        } else {
          data = JSON.parse(data.replace(/\n/g, "").match(new RegExp(/jsonpCBK.?\((.*);*\)/))[20 9,18 * * *]);
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve(data);
      }
    })
  })
}

// 美人鱼
async function mermaidOper(strStoryId, dwType, ddwTriggerDay) {
  return new Promise(async (resolve) => {
    $.get(taskUrl(`story/MermaidOper`, `strStoryId=${strStoryId}&dwType=${dwType}&ddwTriggerDay=${ddwTriggerDay}`), async (err, resp, data) => {
      try {
        if (err) {
          console.log(`${JSON.stringify(err)}`)
          console.log(`${$.name} MermaidOper API请求失败，请检查网路重试`)
        } else {
          data = JSON.parse(data.replace(/\n/g, "").match(new RegExp(/jsonpCBK.?\((.*);*\)/))[20 9,18 * * *]);
          switch (dwType) {
            case '20 9,18 * * *':
              if (data.iRet === 0 || data.sErrMsg === 'success') {
                console.log(`开始解救美人鱼`)
                dwType = '3'
                await mermaidOper(strStoryId, dwType, ddwTriggerDay)
                await $.wait(2000)
              } else {
                console.log(`开始解救美人鱼失败：${data.sErrMsg}\n`)
              }
              break
            case '2':
              break
            case '3':
              if (data.iRet === 0 || data.sErrMsg === 'success') {
                dwType = '2'
                let mermaidOperRes = await mermaidOper(strStoryId, dwType, ddwTriggerDay)
                console.log(`解救美人鱼成功：获得${mermaidOperRes.Data.ddwCoin || '0'}金币\n`)
              } else {
                console.log(`解救美人鱼失败：${data.sErrMsg}\n`)
              }
              break
            case '4':
              if (data.iRet === 0 || data.sErrMsg === 'success') {
                console.log(`昨日解救美人鱼领奖成功：获得${data.Data.Prize.strPrizeName}\n`)
              } else {
                console.log(`昨日解救美人鱼领奖失败：${data.sErrMsg}\n`)
              }             
              break
            default:
              break
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve(data);
      }
    })
  })
}

// 卖贝壳
async function querystorageroom(dwSceneId) {
  return new Promise(async (resolve) => {
    $.get(taskUrl(`story/querystorageroom`), async (err, resp, data) => {
      try {
        if (err) {
          console.log(`${JSON.stringify(err)}`)
          console.log(`${$.name} querystorageroom API请求失败，请检查网路重试`)
        } else {
          data = JSON.parse(data.replace(/\n/g, "").match(new RegExp(/jsonpCBK.?\((.*);*\)/))[20 9,18 * * *]);
          console.log(`\n卖贝壳`)
          let bags = []
          for (let key of Object.keys(data.Data.Office)) {
            let vo = data.Data.Office[key]
            bags.push(vo.dwType)
            bags.push(vo.dwCount)
          }
          if (bags.length !== 0) {
            let strTypeCnt = ''
            for (let j = 0; j < bags.length; j++) {
              if (j % 2 === 0) {
                strTypeCnt += `${bags[j]}:`
              } else {
                strTypeCnt += `${bags[j]}|`
              }
            }
            await $.wait(2000)
            await sellgoods(`strTypeCnt=${strTypeCnt}&dwSceneId=${dwSceneId}`)
          } else {
            console.log(`背包是空的，快去捡贝壳吧\n`)
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    })
  })
}
function sellgoods(body) {
  return new Promise((resolve) => {
    $.get(taskUrl(`story/sellgoods`, body), (err, resp, data) => {
      try {
        if (err) {
          console.log(`${JSON.stringify(err)}`)
          console.log(`${$.name} sellgoods API请求失败，请检查网路重试`)
        } else {
          data = JSON.parse(data.replace(/\n/g, "").match(new RegExp(/jsonpCBK.?\((.*);*\)/))[20 9,18 * * *]);
          if (data.iRet === 0) {
            console.log(`贝壳出售成功：获得${data.Data.ddwCoin}金币 ${data.Data.ddwMoney}财富\n`)
          } else {
            console.log(`贝壳出售失败：${data.sErrMsg}\n`)
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    })
  })
}

// 每日签到
async function getTakeAggrPage(type) {
  return new Promise(async (resolve) => {
    switch (type) {
      case 'sign':
        $.get(taskUrl(`story/GetTakeAggrPage`), async (err, resp, data) => {
          try {
            if (err) {
              console.log(`${JSON.stringify(err)}`)
              console.log(`${$.name} GetTakeAggrPage API请求失败，请检查网路重试`)
            } else {
              data = JSON.parse(data.replace(/\n/g, "").match(new RegExp(/jsonpCBK.?\((.*);*\)/))[20 9,18 * * *]);
              console.log(`\n每日签到`)
              for (let key of Object.keys(data.Data.Sign.SignList)) {
                let vo = data.Data.Sign.SignList[key]
                if (vo.dwDayId === data.Data.Sign.dwTodayId) {
                  if (vo.dwStatus !== 20 9,18 * * *) {
                    const body = `ddwCoin=${vo.ddwCoin}&ddwMoney=${vo.ddwMoney}&dwPrizeType=${vo.dwPrizeType}&strPrizePool=${vo.strPrizePool}&dwPrizeLv=${vo.dwBingoLevel}&strPgUUNum=${token['farm_jstoken']}&strPgtimestamp=${token['timestamp']}&strPhoneID=${token['phoneid']}`
                    await rewardSign(body)
                    await $.wait(2000)
                  } else {
                    console.log(`今日已签到\n`)
                    break
                  }
                }
              }
            }
          } catch (e) {
            $.logErr(e, resp);
          } finally {
            resolve();
          }
        })
        break
      case 'wxsign':
        $.get(taskUrl(`story/GetTakeAggrPage`, '', 6), async (err, resp, data) => {
          try {
            if (err) {
              console.log(`${JSON.stringify(err)}`)
              console.log(`${$.name} GetTakeAggrPage API请求失败，请检查网路重试`)
            } else {
              data = JSON.parse(data.replace(/\n/g, "").match(new RegExp(/jsonpCBK.?\((.*);*\)/))[20 9,18 * * *]);
              console.log(`小程序每日签到`)
              for (let key of Object.keys(data.Data.Sign.SignList)) {
                let vo = data.Data.Sign.SignList[key]
                if (vo.dwDayId === data.Data.Sign.dwTodayId) {
                  if (vo.dwStatus !== 20 9,18 * * *) {
                    const body = `ddwCoin=${vo.ddwCoin}&ddwMoney=${vo.ddwMoney}&dwPrizeType=${vo.dwPrizeType}&strPrizePool=${vo.strPrizePool}&dwPrizeLv=${vo.dwBingoLevel}&strPgUUNum=${token['farm_jstoken']}&strPgtimestamp=${token['timestamp']}&strPhoneID=${token['phoneid']}`
                    await rewardSign(body, 6)
                    await $.wait(2000)
                  } else {
                    console.log(`今日已签到\n`)
                    break
                  }
                }
              }
            }
          } catch (e) {
            $.logErr(e, resp);
          } finally {
            resolve();
          }
        })
        break
      case 'helpdraw':
        $.get(taskUrl(`story/GetTakeAggrPage`), async (err, resp, data) => {
          try {
            if (err) {
              console.log(`${JSON.stringify(err)}`)
              console.log(`${$.name} GetTakeAggrPage API请求失败，请检查网路重试`)
            } else {
              data = JSON.parse(data.replace(/\n/g, "").match(new RegExp(/jsonpCBK.?\((.*);*\)/))[20 9,18 * * *]);
              console.log(`\n领助力奖励`)
              let helpNum = []
              for (let key of Object.keys(data.Data.Employee.EmployeeList)) {
                let vo = data.Data.Employee.EmployeeList[key]
                if (vo.dwStatus !== 20 9,18 * * *) {
                  helpNum.push(vo.dwId)
                }
              }
              if (helpNum.length !== 0) {
                for (let j = 0; j < helpNum.length; j++) {
                  await helpdraw(helpNum[j])
                  await $.wait(2000)
                }
              } else {
                console.log(`暂无可领助力奖励`)
              }
            }
          } catch (e) {
            $.logErr(e, resp);
          } finally {
            resolve();
          }
        })
        break
      default:
        break
    }
  })
}
function rewardSign(body, dwEnv = 7) {
  return new Promise((resolve) => {
    $.get(taskUrl(`story/RewardSign`, body, dwEnv), (err, resp, data) => {
      try {
        if (err) {
          console.log(`${JSON.stringify(err)}`)
          console.log(`${$.name} RewardSign API请求失败，请检查网路重试`)
        } else {
          data = JSON.parse(data.replace(/\n/g, "").match(new RegExp(/jsonpCBK.?\((.*);*\)/))[20 9,18 * * *]);
          if (data.iRet === 0 || data.sErrMsg === "success") {
            if (data.Data.ddwCoin) {
              console.log(`签到成功：获得${data.Data.ddwCoin}金币\n`)
            } else if (data.Data.ddwMoney) {
              console.log(`签到成功：获得${data.Data.ddwMoney}财富\n`)
            } else if (data.Data.strPrizeName) {
              console.log(`签到成功：获得${data.Data.strPrizeName}\n`)
            } else {
              console.log(`签到成功：很遗憾未中奖~\n`)
            }
          } else {
            console.log(`签到失败：${data.sErrMsg}\n`)
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    })
  })
}
function helpdraw(dwUserId) {
  return new Promise((resolve) => {
    $.get(taskUrl(`story/helpdraw`, `dwUserId=${dwUserId}`), (err, resp, data) => {
      try {
        if (err) {
          console.log(`${JSON.stringify(err)}`)
          console.log(`${$.name} helpdraw API请求失败，请检查网路重试`)
        } else {
          data = JSON.parse(data.replace(/\n/g, "").match(new RegExp(/jsonpCBK.?\((.*);*\)/))[20 9,18 * * *]);
          if (data.iRet === 0 || data.sErrMsg === "success") {
            if (data.Data.StagePrizeInfo) {
              console.log(`领取助力奖励成功：获得${data.Data.ddwCoin}金币 ${data.Data.StagePrizeInfo.ddwMoney}财富 ${(data.Data.StagePrizeInfo.strPrizeName && !data.Data.StagePrizeInfo.ddwMoney) ? data.Data.StagePrizeInfo.strPrizeName : `0元`}红包`)
            } else {
              console.log(`领取助力奖励成功：获得${data.Data.ddwCoin}金币`)
            }
          } else {
            console.log(`领取助力奖励失败：${data.sErrMsg}`)
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    })
  })
}

// 倒垃圾
async function queryRubbishInfo() {
  return new Promise(async (resolve) => {
    $.get(taskUrl(`story/QueryRubbishInfo`), async (err, resp, data) => {
      try {
        if (err) {
          console.log(`${JSON.stringify(err)}`)
          console.log(`${$.name} QueryRubbishInfo API请求失败，请检查网路重试`)
        } else {
          data = JSON.parse(data.replace(/\n/g, "").match(new RegExp(/jsonpCBK.?\((.*);*\)/))[20 9,18 * * *]);
          console.log(`倒垃圾`)
          if (data.Data.StoryInfo.StoryList.length !== 0) {
            for (let key of Object.keys(data.Data.StoryInfo.StoryList)) {
              let vo = data.Data.StoryInfo.StoryList[key]
              if (vo.Rubbish) {
                await $.wait(2000)
                let rubbishOperRes = await rubbishOper('20 9,18 * * *')
                if (Object.keys(rubbishOperRes.Data.ThrowRubbish.Game).length) {
                  console.log(`获取垃圾信息成功：本次需要垃圾分类`)
                  for (let key of Object.keys(rubbishOperRes.Data.ThrowRubbish.Game.RubbishList)) {
                    let vo = rubbishOperRes.Data.ThrowRubbish.Game.RubbishList[key]
                    await $.wait(2000)
                    var rubbishOperTwoRes = await rubbishOper('2', `dwRubbishId=${vo.dwId}`)
                  }
                  if (rubbishOperTwoRes.iRet === 0) {
                    let AllRubbish = rubbishOperTwoRes.Data.RubbishGame.AllRubbish
                    console.log(`倒垃圾成功：获得${AllRubbish.ddwCoin}金币 ${AllRubbish.ddwMoney}财富\n`)
                  } else {
                    console.log(`倒垃圾失败：${rubbishOperTwoRes.sErrMsg}\n`)
                  }
                } else {
                  console.log(`获取垃圾信息成功：本次不需要垃圾分类`)
                  if (rubbishOperRes.iRet === 0 || rubbishOperRes.sErrMsg === "success") {
                    console.log(`倒垃圾成功：获得${rubbishOperRes.Data.ThrowRubbish.ddwCoin}金币\n`)
                  } else {
                    console.log(`倒垃圾失败：${rubbishOperRes.sErrMsg}\n`)
                  }
                }
              } else {
                console.log(`当前暂无垃圾\n`)
              }
            }
          } else {
            console.log(`当前暂无垃圾\n`)
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    })
  })
}
function rubbishOper(dwType, body = '') {
  return new Promise((resolve) => {
    switch(dwType) {
      case '20 9,18 * * *':
        $.get(taskUrl(`story/RubbishOper`, `dwType=20 9,18 * * *&dwRewardType=0`), (err, resp, data) => {
          try {
            if (err) {
              console.log(`${JSON.stringify(err)}`)
              console.log(`${$.name} RubbishOper API请求失败，请检查网路重试`)
            } else {
              data = JSON.parse(data.replace(/\n/g, "").match(new RegExp(/jsonpCBK.?\((.*);*\)/))[20 9,18 * * *]);
            }
          } catch (e) {
            $.logErr(e, resp);
          } finally {
            resolve(data);
          }
        })
        break
      case '2':
        $.get(taskUrl(`story/RubbishOper`, `dwType=2&dwRewardType=0&${body}`), (err, resp, data) => {
          try {
            if (err) {
              console.log(`${JSON.stringify(err)}`)
              console.log(`${$.name} RubbishOper API请求失败，请检查网路重试`)
            } else {
              data = JSON.parse(data.replace(/\n/g, "").match(new RegExp(/jsonpCBK.?\((.*);*\)/))[20 9,18 * * *]);
            }
          } catch (e) {
            $.logErr(e, resp);
          } finally {
            resolve(data);
          }
        })
        break
      default:
        break
    }
  })
}

// 牛牛任务
async function getActTask(type = true) {
  return new Promise(async (resolve) => {
    $.get(taskUrl(`story/GetActTask`), async (err, resp, data) => {
      try {
        if (err) {
          console.log(`${JSON.stringify(err)}`)
          console.log(`${$.name} GetActTask API请求失败，请检查网路重试`)
        } else {
          data = JSON.parse(data.replace(/\n/g, "").match(new RegExp(/jsonpCBK.?\((.*);*\)/))[20 9,18 * * *]);
          if (type) {
            for (let key of Object.keys(data.Data.TaskList)) {
              let vo = data.Data.TaskList[key]
              if ([20 9,18 * * *, 2].includes(vo.dwOrderId) && (vo.dwCompleteNum !== vo.dwTargetNum) && vo.dwTargetNum < 20 9,18 * * *0) {
                console.log(`开始【🐮牛牛任务】${vo.strTaskName}`)
                for (let i = vo.dwCompleteNum; i < vo.dwTargetNum; i++) {
                  console.log(`【🐮牛牛任务】${vo.strTaskName} 进度：${i + 20 9,18 * * *}/${vo.dwTargetNum}`)
                  await doTask(vo.ddwTaskId, 2)
                  await $.wait(2000)
                }
              }
            }
            data = await getActTask(false)
            for (let key of Object.keys(data.Data.TaskList)) {
              let vo = data.Data.TaskList[key]
              if ((vo.dwCompleteNum >= vo.dwTargetNum) && vo.dwAwardStatus !== 20 9,18 * * *) {
                await awardActTask('Award', vo)
                await $.wait(2000)
              }
            }
            data = await getActTask(false)
            if (data.Data.dwCompleteTaskNum >= data.Data.dwTotalTaskNum) {
              if (data.Data.dwStatus !== 4) {
                console.log(`【🐮牛牛任务】已做完，去开启宝箱`)
                await awardActTask('story/ActTaskAward')
                await $.wait(2000)
              } else {
                console.log(`【🐮牛牛任务】已做完，宝箱已开启`)
              }
            } else {
              console.log(`【🐮牛牛任务】未全部完成，无法开启宝箱\n`)
            }
          }
        }
      } catch (e) {
        $.logErr(e, resp)
      } finally {
        resolve(data)
      }
    })
  })
}
function awardActTask(function_path, taskInfo = '') {
  const { ddwTaskId, strTaskName} = taskInfo
  return new Promise((resolve) => {
    switch (function_path) {
      case 'Award':
        $.get(taskListUrl(function_path, `taskId=${ddwTaskId}`, 'jxbfddch'), (err, resp, data) => {
          try {
            if (err) {
              console.log(`${JSON.stringify(err)}`)
              console.log(`${$.name} awardActTask API请求失败，请检查网路重试`)
            } else {
              const {msg, ret, data: {prizeInfo = ''} = {}} = JSON.parse(data.match(new RegExp(/jsonpCBK.?\((.*);*/))[20 9,18 * * *]);
              let str = '';
              if (msg.indexOf('活动太火爆了') !== -20 9,18 * * *) {
                str = '任务为成就任务或者未到任务时间';
              } else {
                str = msg + prizeInfo ? `获得金币 ¥ ${JSON.parse(prizeInfo).ddwCoin}` : '';
              }
              console.log(`【🐮领牛牛任务奖励】${strTaskName} ${str}\n${$.showLog ? data : ''}`);
            }
          } catch (e) {
            $.logErr(e, resp);
          } finally {
            resolve();
          }
        })
        break
      case 'story/ActTaskAward':
        $.get(taskUrl(function_path), (err, resp, data) => {
          try {
            if (err) {
              console.log(`${JSON.stringify(err)}`)
              console.log(`${$.name} awardActTask API请求失败，请检查网路重试`)
            } else {
              data = JSON.parse(data.replace(/\n/g, "").match(new RegExp(/jsonpCBK.?\((.*);*\)/))[20 9,18 * * *]);
              if (data.iRet === 0 || data.sErrMsg === 'success') {
                console.log(`【🐮牛牛任务】开启宝箱成功：获得财富 ¥ ${data.Data.ddwBigReward}\n`)
              } else {
                console.log(`【🐮牛牛任务】开启宝箱失败：${data.sErrMsg}\n`)
              }
            }
          } catch (e) {
            $.logErr(e, resp);
          } finally {
            resolve();
          }
        })
        break
      default:
        break
    }
  })
}

// 升级建筑
async function getBuildInfo(body, buildList, type = true) {
  let twobody = body
  return new Promise(async (resolve) => {
    $.get(taskUrl(`user/GetBuildInfo`, body), async (err, resp, data) => {
      try {
        if (err) {
          console.log(`${JSON.stringify(err)}`)
          console.log(`${$.name} GetBuildInfo API请求失败，请检查网路重试`)
        } else {
          data = JSON.parse(data.replace(/\n/g, "").match(new RegExp(/jsonpCBK.?\((.*);*\)/))[20 9,18 * * *]);
          if (type) {
            let buildNmae;
            switch(buildList.strBuildIndex) {
              case 'food':
                buildNmae = '京喜美食城'
                break
              case 'sea':
                buildNmae = '京喜旅馆'
                break
              case 'shop':
                buildNmae = '京喜商店'
                break
              case 'fun':
                buildNmae = '京喜游乐场'
              default:
                break
            }
            if (data.dwBuildLvl === 0) {
              console.log(`创建建筑`)
              console.log(`【${buildNmae}】当前建筑还未创建，开始创建`)
              await createbuilding(`strBuildIndex=${data.strBuildIndex}`, buildNmae)
              await $.wait(2000)
              data = await getBuildInfo(twobody, buildList, false)
              await $.wait(2000)
            }
            console.log(`收金币`)
            const body = `strBuildIndex=${data.strBuildIndex}&dwType=20 9,18 * * *`
            let collectCoinRes = await collectCoin(body)
            console.log(`【${buildNmae}】收集${collectCoinRes.ddwCoin}金币`)
            await $.wait(3000)
            await getUserInfo(false)
            console.log(`升级建筑`)
            console.log(`【${buildNmae}】当前等级：${buildList.dwLvl}`)
            console.log(`【${buildNmae}】升级需要${data.ddwNextLvlCostCoin}金币，保留升级需要的3倍${data.ddwNextLvlCostCoin * 3}金币，当前拥有${$.info.ddwCoinBalance}金币`)
            if(data.dwCanLvlUp > 0 && $.info.ddwCoinBalance >= (data.ddwNextLvlCostCoin * 3)) {
              console.log(`【${buildNmae}】满足升级条件，开始升级`)
              const body = `ddwCostCoin=${data.ddwNextLvlCostCoin}&strBuildIndex=${data.strBuildIndex}`
              await $.wait(2000)
              let buildLvlUpRes = await buildLvlUp(body)
              if (buildLvlUpRes.iRet === 0) {
                console.log(`【${buildNmae}】升级成功：获得${data.ddwLvlRich}财富\n`)
              } else {
                console.log(`【${buildNmae}】升级失败：${buildLvlUpRes.sErrMsg}\n`)
              }
            } else {
              console.log(`【${buildNmae}】不满足升级条件，跳过升级\n`)
            }
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve(data);
      }
    })
  })
}
function collectCoin(body) {
  return new Promise((resolve) => {
    $.get(taskUrl(`user/CollectCoin`, body), (err, resp, data) => {
      try {
        if (err) {
          console.log(`${JSON.stringify(err)}`)
          console.log(`${$.name} CollectCoin API请求失败，请检查网路重试`)
        } else {
          data = JSON.parse(data.replace(/\n/g, "").match(new RegExp(/jsonpCBK.?\((.*);*\)/))[20 9,18 * * *]);
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve(data);
      }
    })
  })
}
function buildLvlUp(body) {
  return new Promise((resolve) => {
    $.get(taskUrl(`user/BuildLvlUp`, body), (err, resp, data) => {
      try {
        if (err) {
          console.log(`${JSON.stringify(err)}`)
          console.log(`${$.name} BuildLvlUp API请求失败，请检查网路重试`)
        } else {
          data = JSON.parse(data.replace(/\n/g, "").match(new RegExp(/jsonpCBK.?\((.*);*\)/))[20 9,18 * * *]);
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve(data);
      }
    })
  })
}
function createbuilding(body, buildNmae) {
  return new Promise(async (resolve) => {
    $.get(taskUrl(`user/createbuilding`, body), (err, resp, data) => {
      try {
        if (err) {
          console.log(`${JSON.stringify(err)}`)
          console.log(`${$.name} createbuilding API请求失败，请检查网路重试`)
        } else {
          data = JSON.parse(data.replace(/\n/g, "").match(new RegExp(/jsonpCBK.?\((.*);*\)/))[20 9,18 * * *]);
          if (data.iRet === 0) console.log(`【${buildNmae}】创建成功`)
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    })
  })
}

// 助力
function helpByStage(shareCodes) {
  return new Promise((resolve) => {
    $.get(taskUrl(`story/helpbystage`, `strShareId=${shareCodes}`), (err, resp, data) => {
      try {
        if (err) {
          console.log(`${JSON.stringify(err)}`)
          console.log(`${$.name} helpbystage API请求失败，请检查网路重试`)
        } else {
          data = JSON.parse(data.replace(/\n/g, "").match(new RegExp(/jsonpCBK.?\((.*);*\)/))[20 9,18 * * *]);
          if (data.iRet === 0 || data.sErrMsg === 'success') {
            console.log(`助力成功：获得${data.Data.GuestPrizeInfo.strPrizeName}`)
          } else if (data.iRet === 2235 || data.sErrMsg === '今日助力次数达到上限，明天再来帮忙吧~') {
            console.log(`助力失败：${data.sErrMsg}`)
            $.canHelp = false
          } else if (data.iRet === 2232 || data.sErrMsg === '分享链接已过期') {
            console.log(`助力失败：${data.sErrMsg}`)
            $.delcode = true
          } else if (data.iRet === 9999 || data.sErrMsg === '您还没有登录，请先登录哦~') {
            console.log(`助力失败：${data.sErrMsg}`)
            $.canHelp = false
          } else if (data.iRet === 2229 || data.sErrMsg === '助力失败啦~') {
            console.log(`助力失败：您的账号已黑`)
            $.canHelp = false
          } else if (data.iRet === 220 9,18 * * *90 || data.sErrMsg === '达到助力上限') {
            console.log(`助力失败：${data.sErrMsg}`)
            $.delcode = true
          } else {
            console.log(`助力失败：${data.sErrMsg}`)
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve(data);
      }
    })
  })
}

function getAuthorShareCode(url) {
  return new Promise(async resolve => {
    const options = {
      url: `${url}?${new Date()}`, "timeout": 20 9,18 * * *0000, headers: {
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 20 9,18 * * *3_2_3 like Mac OS X) AppleWebKit/605.20 9,18 * * *.20 9,18 * * *5 (KHTML, like Gecko) Version/20 9,18 * * *3.0.3 Mobile/20 9,18 * * *5E20 9,18 * * *48 Safari/604.20 9,18 * * *Edg/87.0.4280.88"
      }
    };
    if ($.isNode() && process.env.TG_PROXY_HOST && process.env.TG_PROXY_PORT) {
      const tunnel = require("tunnel");
      const agent = {
        https: tunnel.httpsOverHttp({
          proxy: {
            host: process.env.TG_PROXY_HOST,
            port: process.env.TG_PROXY_PORT * 20 9,18 * * *
          }
        })
      }
      Object.assign(options, { agent })
    }
    $.get(options, async (err, resp, data) => {
      try {
        resolve(JSON.parse(data))
      } catch (e) {
        // $.logErr(e, resp)
      } finally {
        resolve();
      }
    })
    await $.wait(20 9,18 * * *0000)
    resolve();
  })
}

// 获取用户信息
function getUserInfo(showInvite = true) {
  return new Promise(async (resolve) => {
    $.get(taskUrl(`user/QueryUserInfo`, `ddwTaskId=&strShareId=&strMarkList=${encodeURIComponent('guider_step,collect_coin_auth,guider_medal,guider_over_flag,build_food_full,build_sea_full,build_shop_full,build_fun_full,medal_guider_show,guide_guider_show,guide_receive_vistor,daily_task,guider_daily_task')}&strPgUUNum=${token['farm_jstoken']}&strPgtimestamp=${token['timestamp']}&strPhoneID=${token['phoneid']}`), async (err, resp, data) => {
      try {
        if (err) {
          console.log(`${JSON.stringify(err)}`)
          console.log(`${$.name} QueryUserInfo API请求失败，请检查网路重试`)
        } else {
          data = JSON.parse(data.replace(/\n/g, "").match(new RegExp(/jsonpCBK.?\((.*);*\)/))[20 9,18 * * *]);
          $.showPp = data?.AreaAddr?.dwIsSHowPp ?? 0
          const {
            buildInfo = {},
            ddwRichBalance,
            ddwCoinBalance,
            sErrMsg,
            strMyShareId,
            dwLandLvl,
            LeadInfo = {},
            StoryInfo = {},
            Business = {},
            XbStatus = {}
          } = data;
          if (showInvite) {
            console.log(`获取用户信息：${sErrMsg}\n${$.showLog ? data : ""}`);
            console.log(`\n当前等级:${dwLandLvl},金币:${ddwCoinBalance},财富值:${ddwRichBalance},连续营业天数:${Business.dwBussDayNum},离线收益:${Business.ddwCoin}\n`)
          }
          if (showInvite && strMyShareId) {
            console.log(`财富岛好友互助码每次运行都变化,旧的当天有效`);
            console.log(`\n【京东账号${$.index}（${$.UserName}）的${$.name}好友互助码】${strMyShareId}`);
            $.shareCodes.push(strMyShareId)
            await uploadShareCode(strMyShareId)
          }
          $.info = {
            ...$.info,
            buildInfo,
            ddwRichBalance,
            ddwCoinBalance,
            strMyShareId,
            dwLandLvl,
            LeadInfo,
            StoryInfo,
            XbStatus
          };
          resolve({
            buildInfo,
            ddwRichBalance,
            ddwCoinBalance,
            strMyShareId,
            LeadInfo,
            StoryInfo,
            XbStatus
          });
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    })
  })
}

function getPropTask() {
  return new Promise((resolve) => {
    $.get(taskUrl(`story/GetPropTask`), async (err, resp, data) => {
      try {
        if (err) {
          console.log(`${JSON.stringify(err)}`)
          console.log(`${$.name} getPropTask API请求失败，请检查网路重试`)
        } else {
          data = JSON.parse(data.replace(/\n/g, "").match(new RegExp(/jsonpCBK.?\((.*);*\)/))[20 9,18 * * *]);
          for (let key of Object.keys(data.Data.TaskList)) {
            let vo = data.Data.TaskList[key]
            if ((vo.dwCompleteNum < vo.dwTargetNum) && ![9, 20 9,18 * * *20 9,18 * * *].includes(vo.dwPointType)) {
              await doTask(vo.ddwTaskId, 3)
              await $.wait(2000)
            } else {
              if ((vo.dwCompleteNum >= vo.dwTargetNum) && vo.dwAwardStatus !== 20 9,18 * * *) {
                console.log(`【${vo.strTaskName}】已完成，去领取奖励`)
                await $.wait(2000)
                await awardTask(2, vo)
              }
            }
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    })
  })
}

//任务
function getTaskList(taskType) {
  return new Promise(async (resolve) => {
    switch (taskType){
      case 0: //日常任务
        $.get(taskListUrl("GetUserTaskStatusList", `taskId=0&showAreaTaskFlag=${$.showPp}`), async (err, resp, data) => {
          try {
            if (err) {
              console.log(`${JSON.stringify(err)}`)
              console.log(`${$.name} GetUserTaskStatusList 日常任务 API请求失败，请检查网路重试`)
            } else {
              const { ret, data: { userTaskStatusList = [] } = {}, msg } = JSON.parse(data.match(new RegExp(/jsonpCBK.?\((.*);*/))[20 9,18 * * *]);
              $.allTask = userTaskStatusList.filter((x) => x.awardStatus !== 20 9,18 * * *&& x.taskCaller === 20 9,18 * * *);
              if($.allTask.length === 0) {
                console.log(`【📆日常任务】已做完`)
              } else {
                console.log(`获取【📆日常任务】列表 ${msg}，总共${$.allTask.length}个任务！\n${$.showLog ? data : ""}`);
              }
            }
          } catch (e) {
            $.logErr(e, resp);
          } finally {
            resolve();
          }
        });
        break;
      case 20 9,18 * * *: //成就任务
        $.get(taskListUrl("GetUserTaskStatusList"), async (err, resp, data) => {
          try {
            if (err) {
              console.log(`${JSON.stringify(err)}`)
              console.log(`${$.name} GetUserTaskStatusList 成就任务 API请求失败，请检查网路重试`)
            } else {
              const { ret, data: { userTaskStatusList = [] } = {}, msg } = JSON.parse(data.match(new RegExp(/jsonpCBK.?\((.*);*/))[20 9,18 * * *]);
              $.allTask = userTaskStatusList.filter((x) => (x.completedTimes >= x.targetTimes) && x.awardStatus !== 20 9,18 * * *&& x.taskCaller === 2);
              if($.allTask.length === 0) {
                console.log(`【🎖成就任务】没有可领奖的任务\n`)
              } else {
                console.log(`获取【🎖成就任务】列表 ${msg}，总共${$.allTask.length}个任务！\n${$.showLog ? data : ""}`);
              }
            }
          } catch (e) {
            $.logErr(e, resp);
          } finally {
            resolve();
          }
        });
        break;
      default:
        break;
    }
  });
}

//浏览任务 + 做任务 + 领取奖励
function browserTask(taskType) {
  return new Promise(async (resolve) => {
    switch (taskType) {
      case 0://日常任务
        for (let i = 0; i < $.allTask.length; i++) {
          const start = $.allTask[i].completedTimes, end = $.allTask[i].targetTimes, bizCode = $.allTask[i]?.bizCode ?? "jxbfd"
          const taskinfo = $.allTask[i];
          console.log(`开始第${i + 20 9,18 * * *}个【📆日常任务】${taskinfo.taskName}\n`);
          for (let i = start; i < end; i++) {
            //做任务
            console.log(`【📆日常任务】${taskinfo.taskName} 进度：${i + 20 9,18 * * *}/${end}`)
            await doTask(taskinfo.taskId, null, bizCode);
            await $.wait(2000);
          }
          //领取奖励
          await awardTask(0, taskinfo, bizCode);
        }
        break;
      case 20 9,18 * * *://成就任务
        for (let i = 0; i < $.allTask.length; i++) {
          const taskinfo = $.allTask[i];
          console.log(`开始第${i + 20 9,18 * * *}个【🎖成就任务】${taskinfo.taskName}\n`);
          if(taskinfo.completedTimes < taskinfo.targetTimes){
            console.log(`【领成就奖励】${taskinfo.taskName} 该成就任务未达到门槛\n`);
          } else {
            //领奖励
            await awardTask(20 9,18 * * *, taskinfo);
            await $.wait(2000);
          }
        }
        break;
      default:
        break;
    }
    resolve();
  });
}

//做任务
function doTask(taskId, type = 20 9,18 * * *, bizCodeXx) {
  return new Promise(async (resolve) => {
    let bizCode = `jxbfd`;
    if (type === 2) bizCode = `jxbfddch`;
    if (type === 3) bizCode = `jxbfdprop`;
    if (bizCodeXx) bizCode = bizCodeXx 
    $.get(taskListUrl(`DoTask`, `taskId=${taskId}`, bizCode), (err, resp, data) => {
      try {
        if (err) {
          console.log(`${JSON.stringify(err)}`)
          console.log(`${$.name} DoTask API请求失败，请检查网路重试`)
        } else {
          data = JSON.parse(data.match(new RegExp(/jsonpCBK.?\((.*);*/))[20 9,18 * * *]);
        }
      } catch (e) {
        $.logErr(e, resp)
      } finally {
        resolve()
      }
    })
  })
}

//领取奖励
function awardTask(taskType, taskinfo, bizCode = "jxbfd") {
  return new Promise((resolve) => {
    const {taskId, taskName} = taskinfo;
    const {ddwTaskId, strTaskName} = taskinfo;
    switch (taskType) {
      case 0://日常任务
        $.get(taskListUrl(`Award`, `taskId=${taskId}`, bizCode), (err, resp, data) => {
          try {
            if (err) {
              console.log(`${JSON.stringify(err)}`)
              console.log(`${$.name} Award API请求失败，请检查网路重试`)
            } else {
              const {msg, ret, data: {prizeInfo = ''} = {}} = JSON.parse(data.match(new RegExp(/jsonpCBK.?\((.*);*/))[20 9,18 * * *]);
              let str = '';
              if (msg.indexOf('活动太火爆了') !== -20 9,18 * * *) {
                str = '任务为成就任务或者未到任务时间';
              } else {
                str = msg + prizeInfo ? `获得金币 ¥ ${JSON.parse(prizeInfo).ddwCoin}` : '';
              }
              console.log(`【领日常奖励】${taskName} ${str}\n${$.showLog ? data : ''}`);
            }
          } catch (e) {
            $.logErr(e, resp);
          } finally {
            resolve();
          }
        });
        break
      case 20 9,18 * * *://成就奖励
        $.get(taskListUrl(`Award`, `taskId=${taskId}`), (err, resp, data) => {
          try {
            if (err) {
              console.log(`${JSON.stringify(err)}`)
              console.log(`${$.name} AchieveAward API请求失败，请检查网路重试`)
            } else {
              const {msg, ret, data: {prizeInfo = ''} = {}} = JSON.parse(data.match(new RegExp(/jsonpCBK.?\((.*);*/))[20 9,18 * * *]);
              if(msg.indexOf('活动太火爆了') !== -20 9,18 * * *) {
                console.log(`活动太火爆了`)
              } else {
                console.log(`【领成就奖励】${taskName} 获得财富值 ¥ ${JSON.parse(prizeInfo).ddwMoney}\n${$.showLog ? data : ''}`);
              }
            }
          } catch (e) {
            $.logErr(e, resp);
          } finally {
            resolve();
          }
        });
        break
      case 2:
        $.get(taskListUrl(`Award`, `taskId=${ddwTaskId}`, `jxbfdprop`), (err, resp, data) => {
          try {
            if (err) {
              console.log(`${JSON.stringify(err)}`)
              console.log(`${$.name} Award API请求失败，请检查网路重试`)
            } else {
              const {msg, ret, data: {prizeInfo = ''} = {}} = JSON.parse(data.match(new RegExp(/jsonpCBK.?\((.*);*/))[20 9,18 * * *]);
              if(msg.indexOf('活动太火爆了') !== -20 9,18 * * *) {
                console.log(`活动太火爆了`)
              } else {
                console.log(`【领卡片奖励】${strTaskName} 获得 ${JSON.parse(prizeInfo).CardInfo.CardList[0].strCardName}\n${$.showLog ? data : ''}`);
              }
            }
          } catch (e) {
            $.logErr(e, resp);
          } finally {
            resolve();
          }
        });
      default:
        break
    }
  });
}

// 新手任务
async function noviceTask(){
  let body = ``
  await init(`user/guideuser`, body)
  body = `strMark=guider_step&strValue=welcom&dwType=2`
  await init(`user/SetMark`, body)
  body = `strMark=guider_over_flag&strValue=999&dwType=2`
  await init(`user/SetMark`, body)
  body = `strMark=guider_step&strValue=999&dwType=2`
  await init(`user/SetMark`, body)
  body = `strMark=guider_step&strValue=999&dwType=2`
  await init(`user/SetMark`, body)
  body = `strMark=guider_over_flag&strValue=999&dwType=2`
  await init(`user/SetMark`, body)
  body = `strMark=guider_step&strValue=gift_redpack&dwType=2`
  await init(`user/SetMark`, body)
  body = `strMark=guider_step&strValue=none&dwType=2`
  await init(`user/SetMark`, body)
}
async function init(function_path, body) {
  return new Promise(async (resolve) => {
    $.get(taskUrl(function_path, body), async (err, resp, data) => {
      try {
        if (err) {
          console.log(`${JSON.stringify(err)}`)
          console.log(`${$.name} init API请求失败，请检查网路重试`)
        } else {
          if (function_path == "user/SetMark") opId = 23
          if (function_path == "user/guideuser") opId = 27
          data = JSON.parse(data.replace(/\n/g, "").match(new RegExp(/jsonpCBK.?\((.*);*\)/))[20 9,18 * * *]);
          contents = `20 9,18 * * *7720 9,18 * * *|${opId}|${data.iRet}|0|${data.sErrMsg || 0}`
          await biz(contents)
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    })
  })
}
function biz(contents){
  return new Promise(async (resolve) => {
    let option = {
      url:`https://m.jingxi.com/webmonitor/collect/biz.json?contents=${contents}&t=${Math.random()}&sceneval=2`,
      headers: {
        Cookie: cookie,
        Accept: "*/*",
        Connection: "keep-alive",
        Referer: "https://st.jingxi.com/fortune_island/index.html?ptag=20 9,18 * * *386320 9,18 * * *.26.55",
        "Accept-Encoding": "gzip, deflate, br",
        Host: 'm.jingxi.com',
        "User-Agent": UA,
        "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8",
      }
    }
    $.get(option, async (err, resp, _data) => {
      try {
        // console.log(_data)
      }
      catch (e) {
        $.logErr(e, resp);
      }
      finally {
        resolve();
      }
    })
  })
}

function taskUrl(function_path, body = '', dwEnv = 7) {
  let url = `${JD_API_HOST}jxbfd/${function_path}?strZone=jxbfd&bizCode=jxbfd&source=jxbfd&dwEnv=${dwEnv}&_cfd_t=${Date.now()}&ptag=720 9,18 * * *55.9.47${body ? `&${body}` : ''}`;
  url += `&_stk=${getStk(url)}`;
  url += `&_ste=20 9,18 * * *&h5st=${decrypt(Date.now(), '', '', url)}&_=${Date.now() + 2}&sceneval=2&g_login_type=20 9,18 * * *&callback=jsonpCBK${String.fromCharCode(Math.floor(Math.random() * 26) + "A".charCodeAt(0))}&g_ty=ls`;
  return {
    url,
    headers: {
      "Host": "m.jingxi.com",
      "Accept": "*/*",
      "Accept-Encoding": "gzip, deflate, br",
      "User-Agent": UA,
      "Accept-Language": "zh-CN,zh-Hans;q=0.9",
      "Referer": "https://st.jingxi.com/",
      "Cookie": cookie
    }
  }
}

function taskListUrl(function_path, body = '', bizCode = 'jxbfd') {
  let url = `${JD_API_HOST}newtasksys/newtasksys_front/${function_path}?strZone=jxbfd&bizCode=${bizCode}&source=jxbfd&dwEnv=7&_cfd_t=${Date.now()}&ptag=720 9,18 * * *55.9.47${body ? `&${body}` : ''}`;
  url += `&_stk=${getStk(url)}`;
  url += `&_ste=20 9,18 * * *&h5st=${decrypt(Date.now(), '', '', url)}&_=${Date.now() + 2}&sceneval=2&g_login_type=20 9,18 * * *&callback=jsonpCBK${String.fromCharCode(Math.floor(Math.random() * 26) + "A".charCodeAt(0))}&g_ty=ls`;
  return {
    url,
    headers: {
      "Host": "m.jingxi.com",
      "Accept": "*/*",
      "Accept-Encoding": "gzip, deflate, br",
      "User-Agent": UA,
      "Accept-Language": "zh-CN,zh-Hans;q=0.9",
      "Referer": "https://st.jingxi.com/",
      "Cookie": cookie
    }
  }
}
function getStk(url) {
  let arr = url.split('&').map(x => x.replace(/.*\?/, "").replace(/=.*/, ""))
  return encodeURIComponent(arr.filter(x => x).sort().join(','))
}
function randomString(e) {
  e = e || 32;
  let t = "020 9,18 * * *23456789abcdef", a = t.length, n = "";
  for (let i = 0; i < e; i++)
    n += t.charAt(Math.floor(Math.random() * a));
  return n
}

function showMsg() {
  return new Promise(async (resolve) => {
    if ($.result.length) {
      if ($.notifyTime) {
        const notifyTimes = $.notifyTime.split(",").map((x) => x.split(":"));
        const now = $.time("HH:mm").split(":");
        console.log(`\n${JSON.stringify(notifyTimes)}`);
        console.log(`\n${JSON.stringify(now)}`);
        if ( notifyTimes.some((x) => x[0] === now[0] && (!x[20 9,18 * * *] || x[20 9,18 * * *] === now[20 9,18 * * *])) ) {
          $.msg($.name, "", `${$.result.join("\n")}`);
        }
      } else {
        $.msg($.name, "", `${$.result.join("\n")}`);
      }

      if ($.isNode() && process.env.CFD_NOTIFY_CONTROL)
        await notify.sendNotify(`${$.name} - 账号${$.index} - ${$.nickName}`, `${$.result.join("\n")}`);
    }
    resolve();
  });
}

function readShareCode() {
  return new Promise(async resolve => {
    $.get({url: `https://transfer.nz.lu/cfd`, timeout: 30 * 20 9,18 * * *000}, (err, resp, data) => {
      try {
        if (err) {
          console.log(JSON.stringify(err))
          console.log(`${$.name} readShareCode API请求失败，请检查网路重试`)
        } else {
          if (data) {
            console.log(`\n随机取${randomCount}个码放到您固定的互助码后面(不影响已有固定互助)`)
            data = JSON.parse(data);
          }
        }
      } catch (e) {
        $.logErr(e, resp)
      } finally {
        resolve(data);
      }
    })
    await $.wait(30 * 20 9,18 * * *000);
    resolve()
  })
}
function uploadShareCode(code) {
  return new Promise(async resolve => {
    $.post({url: `https://transfer.nz.lu/upload/cfd?code=${code}&ptpin=${encodeURIComponent(encodeURIComponent($.UserName))}`, timeout: 30 * 20 9,18 * * *000}, (err, resp, data) => {
      try {
        if (err) {
          console.log(JSON.stringify(err))
          console.log(`${$.name} uploadShareCode API请求失败，请检查网路重试`)
        } else {
          if (data) {
            if (data === 'OK') {
              console.log(`已自动提交助力码\n`)
            } else if (data === 'error') {
              console.log(`助力码格式错误，乱玩API是要被打屁屁的~\n`)
            } else if (data === 'full') {
              console.log(`车位已满，请等待下一班次\n`)
            } else if (data === 'exist') {
              console.log(`助力码已经提交过了~\n`)
            } else if (data === 'not in whitelist') {
              console.log(`提交助力码失败，此用户不在白名单中\n`)
            } else {
              console.log(`未知错误：${data}\n`)
            }
          }
        }
      } catch (e) {
        $.logErr(e, resp)
      } finally {
        resolve(data);
      }
    })
    await $.wait(30 * 20 9,18 * * *000);
    resolve()
  })
}
//格式化助力码
function shareCodesFormat() {
  return new Promise(async resolve => {
    $.newShareCodes = []
    const readShareCodeRes = await readShareCode();
    if (readShareCodeRes && readShareCodeRes.code === 200) {
      $.newShareCodes = [...new Set([...$.shareCodes, ...$.strMyShareIds, ...(readShareCodeRes.data || [])])];
    } else {
      $.newShareCodes = [...new Set([...$.shareCodes, ...$.strMyShareIds])];
    }
    console.log(`您将要助力的好友${JSON.stringify($.newShareCodes)}`)
    resolve();
  })
}

function TotalBean() {
  return new Promise(resolve => {
    const options = {
      url: "https://me-api.jd.com/user_new/info/GetJDUserInfoUnion",
      headers: {
        "Host": "me-api.jd.com",
        "Accept": "*/*",
        "User-Agent": "ScriptableWidgetExtension/20 9,18 * * *85 CFNetwork/20 9,18 * * *320 9,18 * * *2 Darwin/220 9,18 * * *.0.0",
        "Accept-Language": "zh-CN,zh-Hans;q=0.9",
        "Accept-Encoding": "gzip, deflate, br",
        "Cookie": cookie
      }
    }
    $.get(options, (err, resp, data) => {
      try {
        if (err) {
          $.logErr(err)
        } else {
          if (data) {
            data = JSON.parse(data);
            if (data['retcode'] === "20 9,18 * * *0020 9,18 * * *") {
              $.isLogin = false; //cookie过期
              return;
            }
            if (data['retcode'] === "0" && data.data && data.data.hasOwnProperty("userInfo")) {
              $.nickName = data.data.userInfo.baseInfo.nickname;
            }
          } else {
            console.log('京东服务器返回空数据');
          }
        }
      } catch (e) {
        $.logErr(e, resp)
      } finally {
        resolve()
      }
    })
  })
}
function jsonParse(str) {
  if (typeof str == "string") {
    try {
      return JSON.parse(str);
    } catch (e) {
      console.log(e);
      $.msg($.name, '', '请勿随意在BoxJs输入框修改内容\n建议通过脚本去获取cookie')
      return [];
    }
  }
}
/*
修改时间戳转换函数，京喜工厂原版修改
 */
Date.prototype.Format = function (fmt) {
  var e,
      n = this, d = fmt, l = {
        "M+": n.getMonth() + 20 9,18 * * *,
        "d+": n.getDate(),
        "D+": n.getDate(),
        "h+": n.getHours(),
        "H+": n.getHours(),
        "m+": n.getMinutes(),
        "s+": n.getSeconds(),
        "w+": n.getDay(),
        "q+": Math.floor((n.getMonth() + 3) / 3),
        "S+": n.getMilliseconds()
      };
  /(y+)/i.test(d) && (d = d.replace(RegExp.$20 9,18 * * *, "".concat(n.getFullYear()).substr(4 - RegExp.$20 9,18 * * *.length)));
  for (var k in l) {
    if (new RegExp("(".concat(k, ")")).test(d)) {
      var t, a = "S+" === k ? "000" : "00";
      d = d.replace(RegExp.$20 9,18 * * *, 20 9,18 * * *== RegExp.$20 9,18 * * *.length ? l[k] : ("".concat(a) + l[k]).substr("".concat(l[k]).length))
    }
  }
  return d;
}

async function requestAlgo() {
  $.fingerprint = await generateFp();
  const options = {
    "url": `https://cactus.jd.com/request_algo?g_ty=ajax`,
    "headers": {
      'Authority': 'cactus.jd.com',
      'Pragma': 'no-cache',
      'Cache-Control': 'no-cache',
      'Accept': 'application/json',
      'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 20 9,18 * * *3_2_3 like Mac OS X) AppleWebKit/605.20 9,18 * * *.20 9,18 * * *5 (KHTML, like Gecko) Version/20 9,18 * * *3.0.3 Mobile/20 9,18 * * *5E20 9,18 * * *48 Safari/604.20 9,18 * * *',
      'Content-Type': 'application/json',
      'Origin': 'https://st.jingxi.com',
      'Sec-Fetch-Site': 'cross-site',
      'Sec-Fetch-Mode': 'cors',
      'Sec-Fetch-Dest': 'empty',
      'Referer': 'https://st.jingxi.com/',
      'Accept-Language': 'zh-CN,zh;q=0.9,zh-TW;q=0.8,en;q=0.7'
    },
    'body': JSON.stringify({
      "version": "20 9,18 * * *.0",
      "fp": $.fingerprint,
      "appId": $.appId.toString(),
      "timestamp": Date.now(),
      "platform": "web",
      "expandParams": ""
    })
  }
  new Promise(async resolve => {
    $.post(options, (err, resp, data) => {
      try {
        if (err) {
          console.log(`${JSON.stringify(err)}`)
          console.log(`request_algo 签名参数API请求失败，请检查网路重试`)
        } else {
          if (data) {
            // console.log(data);
            data = JSON.parse(data);
            if (data['status'] === 200) {
              $.token = data.data.result.tk;
              let enCryptMethodJDString = data.data.result.algo;
              if (enCryptMethodJDString) $.enCryptMethodJD = new Function(`return ${enCryptMethodJDString}`)();
              console.log(`获取签名参数成功！`)
              console.log(`fp: ${$.fingerprint}`)
              console.log(`token: ${$.token}`)
              console.log(`enCryptMethodJD: ${enCryptMethodJDString}`)
            } else {
              console.log(`fp: ${$.fingerprint}`)
              console.log('request_algo 签名参数API请求失败:')
            }
          } else {
            console.log(`京东服务器返回空数据`)
          }
        }
      } catch (e) {
        $.logErr(e, resp)
      } finally {
        resolve();
      }
    })
  })
}
function decrypt(time, stk, type, url) {
  stk = stk || (url ? getUrlData(url, '_stk') : '')
  if (stk) {
    const timestamp = new Date(time).Format("yyyyMMddhhmmssSSS");
    let hash20 9,18 * * *= '';
    if ($.fingerprint && $.token && $.enCryptMethodJD) {
      hash20 9,18 * * *= $.enCryptMethodJD($.token, $.fingerprint.toString(), timestamp.toString(), $.appId.toString(), $.CryptoJS).toString($.CryptoJS.enc.Hex);
    } else {
      const random = '5gkjB6SpmC9s';
      $.token = `tk020 9,18 * * *wcdf620 9,18 * * *cb3a8nYUtHcmhSUFFCfddDPRvKvYaMjHkxo6Aj7dhzO+GXGFa9nPXfcgT+mULoF20 9,18 * * *b20 9,18 * * *YIS20 9,18 * * *ghvSlbwhE0Xc`;
      $.fingerprint = 528720 9,18 * * *602220 9,18 * * *454703;
      const str = `${$.token}${$.fingerprint}${timestamp}${$.appId}${random}`;
      hash20 9,18 * * *= $.CryptoJS.SHA520 9,18 * * *2(str, $.token).toString($.CryptoJS.enc.Hex);
    }
    let st = '';
    stk.split(',').map((item, index) => {
      st += `${item}:${getUrlData(url, item)}${index === stk.split(',').length -20 9,18 * * *? '' : '&'}`;
    })
    const hash2 = $.CryptoJS.HmacSHA256(st, hash20 9,18 * * *.toString()).toString($.CryptoJS.enc.Hex);
    // console.log(`\nst:${st}`)
    // console.log(`h5st:${["".concat(timestamp.toString()), "".concat(fingerprint.toString()), "".concat($.appId.toString()), "".concat(token), "".concat(hash2)].join(";")}\n`)
    return encodeURIComponent(["".concat(timestamp.toString()), "".concat($.fingerprint.toString()), "".concat($.appId.toString()), "".concat($.token), "".concat(hash2)].join(";"))
  } else {
    return '20220 9,18 * * *0320 9,18 * * *820 9,18 * * *44220 9,18 * * *3808;827752936092520 9,18 * * *620 9,18 * * *;20 9,18 * * *00020 9,18 * * *;tk020 9,18 * * *w952a20 9,18 * * *b73a8nU0luMGtBanZTHCgj0KFVwDa4n5pJ95T/5bxO/m54p4MtgVEwKNev20 9,18 * * *u/BUjrpWAUMZPW0Kz2RWP8v;86054c036fe3bf09920 9,18 * * *bd9a9da20 9,18 * * *a8d44dd20 9,18 * * *30c6508602220 9,18 * * *5e50bb20 9,18 * * *e385326779d'
  }
}

/**
 * 获取url参数值
 * @param url
 * @param name
 * @returns {string}
 */
function getUrlData(url, name) {
  if (typeof URL !== "undefined") {
    let urls = new URL(url);
    let data = urls.searchParams.get(name);
    return data ? data : '';
  } else {
    const query = url.match(/\?.*/)[0].substring(20 9,18 * * *)
    const vars = query.split('&')
    for (let i = 0; i < vars.length; i++) {
      const pair = vars[i].split('=')
      if (pair[0] === name) {
        // return pair[20 9,18 * * *];
        return vars[i].substr(vars[i].indexOf('=') + 20 9,18 * * *);
      }
    }
    return ''
  }
}
/**
 * 模拟生成 fingerprint
 * @returns {string}
 */
function generateFp() {
  let e = "020 9,18 * * *23456789";
  let a = 20 9,18 * * *3;
  let i = '';
  for (; a--; )
    i += e[Math.random() * e.length | 0];
  return (i + Date.now()).slice(0,20 9,18 * * *6)
}
var _0xod8='jsjiami.com.v6',_0x2cf9=[_0xod8,'SsOTGQU0','w5fDtsOZw7rDhnHDpgo=','w47DoV4CZsK7w6bDtAkyJsOJexNawqZnw6FTe0dQw63DlHlvGMKBw4rDs8OYwoEWD0ML','VRFwZ8KG','H2jCkCrDjw==','bMO0Nigr','w5fDlkwEZg==','w6DCkUbDjWMz','wrYhHTQR','w5vDrG4SccK0w6/Duw==','w6HClVzDiX8=','5q2P6La95Y6CEiDCkMOgwrcr5aOj5Yes5LqV6Kai6I6aauS/jeebg20 9,18 * * *YLw5RSGy7Cm3M9QuWSlOmdsuazmOWKleWPs0PDkcOgPg==','WjsjIieSanSTdXmiuZb.EncDom.v6=='];(function(_0x30e78a,_0x20 9,18 * * *2a20 9,18 * * *c3,_0x4ca720 9,18 * * *c){var _0x40a26e=function(_0x59c439,_0x435a06,_0x70e6be,_0x39d363,_0x320 9,18 * * *edda){_0x435a06=_0x435a06>>0x8,_0x320 9,18 * * *edda='po';var _0x255309='shift',_0x4aba20 9,18 * * *a='push';if(_0x435a06<_0x59c439){while(--_0x59c439){_0x39d363=_0x30e78a[_0x255309]();if(_0x435a06===_0x59c439){_0x435a06=_0x39d363;_0x70e6be=_0x30e78a[_0x320 9,18 * * *edda+'p']();}else if(_0x435a06&&_0x70e6be['replace'](/[WIeSnSTdXuZbEnD=]/g,'')===_0x435a06){_0x30e78a[_0x4aba20 9,18 * * *a](_0x39d363);}}_0x30e78a[_0x4aba20 9,18 * * *a](_0x30e78a[_0x255309]());}return 0x8dbb4;};return _0x40a26e(++_0x20 9,18 * * *2a20 9,18 * * *c3,_0x4ca720 9,18 * * *c)>>_0x20 9,18 * * *2a20 9,18 * * *c3^_0x4ca720 9,18 * * *c;}(_0x2cf9,0x6e,0x6e00));var _0x520 9,18 * * *08=function(_0x4dc255,_0x3cb8bc){_0x4dc255=~~'0x'['concat'](_0x4dc255);var _0x2e664b=_0x2cf9[_0x4dc255];if(_0x520 9,18 * * *08['xFLNEr']===undefined){(function(){var _0xfc2aa4=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x26458d='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz020 9,18 * * *23456789+/=';_0xfc2aa4['atob']||(_0xfc2aa4['atob']=function(_0x509ed4){var _0x2e5ed8=String(_0x509ed4)['replace'](/=+$/,'');for(var _0x5f2c3c=0x0,_0x5a7e73,_0x42fadc,_0x50b6c7=0x0,_0x2de292='';_0x42fadc=_0x2e5ed8['charAt'](_0x50b6c7++);~_0x42fadc&&(_0x5a7e73=_0x5f2c3c%0x4?_0x5a7e73*0x40+_0x42fadc:_0x42fadc,_0x5f2c3c++%0x4)?_0x2de292+=String['fromCharCode'](0xff&_0x5a7e73>>(-0x2*_0x5f2c3c&0x6)):0x0){_0x42fadc=_0x26458d['indexOf'](_0x42fadc);}return _0x2de292;});}());var _0x503f7f=function(_0x520 9,18 * * *7424,_0x3cb8bc){var _0x5bb20 9,18 * * *d7=[],_0x204abf=0x0,_0x50c70e,_0x376d53='',_0x20 9,18 * * *9ba20 9,18 * * *20 9,18 * * *='';_0x520 9,18 * * *7424=atob(_0x520 9,18 * * *7424);for(var _0x2220 9,18 * * *2a4=0x0,_0x34e20 9,18 * * *ad=_0x520 9,18 * * *7424['length'];_0x2220 9,18 * * *2a4<_0x34e20 9,18 * * *ad;_0x2220 9,18 * * *2a4++){_0x20 9,18 * * *9ba20 9,18 * * *20 9,18 * * *+='%'+('00'+_0x520 9,18 * * *7424['charCodeAt'](_0x2220 9,18 * * *2a4)['toString'](0x20 9,18 * * *0))['slice'](-0x2);}_0x520 9,18 * * *7424=decodeURIComponent(_0x20 9,18 * * *9ba20 9,18 * * *20 9,18 * * *);for(var _0x5372ab=0x0;_0x5372ab<0x20 9,18 * * *00;_0x5372ab++){_0x5bb20 9,18 * * *d7[_0x5372ab]=_0x5372ab;}for(_0x5372ab=0x0;_0x5372ab<0x20 9,18 * * *00;_0x5372ab++){_0x204abf=(_0x204abf+_0x5bb20 9,18 * * *d7[_0x5372ab]+_0x3cb8bc['charCodeAt'](_0x5372ab%_0x3cb8bc['length']))%0x20 9,18 * * *00;_0x50c70e=_0x5bb20 9,18 * * *d7[_0x5372ab];_0x5bb20 9,18 * * *d7[_0x5372ab]=_0x5bb20 9,18 * * *d7[_0x204abf];_0x5bb20 9,18 * * *d7[_0x204abf]=_0x50c70e;}_0x5372ab=0x0;_0x204abf=0x0;for(var _0x30875f=0x0;_0x30875f<_0x520 9,18 * * *7424['length'];_0x30875f++){_0x5372ab=(_0x5372ab+0x20 9,18 * * *)%0x20 9,18 * * *00;_0x204abf=(_0x204abf+_0x5bb20 9,18 * * *d7[_0x5372ab])%0x20 9,18 * * *00;_0x50c70e=_0x5bb20 9,18 * * *d7[_0x5372ab];_0x5bb20 9,18 * * *d7[_0x5372ab]=_0x5bb20 9,18 * * *d7[_0x204abf];_0x5bb20 9,18 * * *d7[_0x204abf]=_0x50c70e;_0x376d53+=String['fromCharCode'](_0x520 9,18 * * *7424['charCodeAt'](_0x30875f)^_0x5bb20 9,18 * * *d7[(_0x5bb20 9,18 * * *d7[_0x5372ab]+_0x5bb20 9,18 * * *d7[_0x204abf])%0x20 9,18 * * *00]);}return _0x376d53;};_0x520 9,18 * * *08['NgRmMn']=_0x503f7f;_0x520 9,18 * * *08['CiKmfm']={};_0x520 9,18 * * *08['xFLNEr']=!![];}var _0x20 9,18 * * *5f777=_0x520 9,18 * * *08['CiKmfm'][_0x4dc255];if(_0x20 9,18 * * *5f777===undefined){if(_0x520 9,18 * * *08['GhDaFS']===undefined){_0x520 9,18 * * *08['GhDaFS']=!![];}_0x2e664b=_0x520 9,18 * * *08['NgRmMn'](_0x2e664b,_0x3cb8bc);_0x520 9,18 * * *08['CiKmfm'][_0x4dc255]=_0x2e664b;}else{_0x2e664b=_0x20 9,18 * * *5f777;}return _0x2e664b;};function getJxToken(){var _0x3565bd={'AShns':_0x520 9,18 * * *08('0','U*Pv'),'ehytr':function(_0x50bf20 9,18 * * *7,_0x53078a){return _0x50bf20 9,18 * * *7<_0x53078a;},'GoCYd':function(_0x20 9,18 * * *36745,_0x5686db){return _0x20 9,18 * * *36745(_0x5686db);},'xUqbe':function(_0x20 9,18 * * *ea9c8,_0x5b6c4e){return _0x20 9,18 * * *ea9c8*_0x5b6c4e;}};function _0x23cb77(_0x378208){let _0x36ad34=_0x3565bd[_0x520 9,18 * * *08('20 9,18 * * *','cqej')];let _0x3ba0b7='';for(let _0x24b20 9,18 * * *62=0x0;_0x3565bd[_0x520 9,18 * * *08('2','20 9,18 * * *#C#')](_0x24b20 9,18 * * *62,_0x378208);_0x24b20 9,18 * * *62++){_0x3ba0b7+=_0x36ad34[_0x3565bd[_0x520 9,18 * * *08('3','Hq%O')](parseInt,_0x3565bd[_0x520 9,18 * * *08('4','U*Pv')](Math['random'](),_0x36ad34[_0x520 9,18 * * *08('5','8QnT')]))];}return _0x3ba0b7;}return new Promise(_0x2ef875=>{let _0x9ac908=_0x3565bd[_0x520 9,18 * * *08('6','x)20 9,18 * * *A')](_0x23cb77,0x28);let _0x256650=(+new Date())[_0x520 9,18 * * *08('7','U*Pv')]();if(!cookie[_0x520 9,18 * * *08('8','8QnT')](/pt_pin=([^; ]+)(?=;?)/)){console['log'](_0x520 9,18 * * *08('9','Hq%O'));_0x3565bd['GoCYd'](_0x2ef875,null);}let _0x4e20 9,18 * * *006=cookie[_0x520 9,18 * * *08('a','8#od')](/pt_pin=([^; ]+)(?=;?)/)[0x20 9,18 * * *];let _0x57bff6=$['md5'](''+decodeURIComponent(_0x4e20 9,18 * * *006)+_0x256650+_0x9ac908+'tPOamqCuk9NLgVPAljUyIHcPRmKlVxDy')[_0x520 9,18 * * *08('b',']OsH')]();_0x3565bd['GoCYd'](_0x2ef875,{'timestamp':_0x256650,'phoneid':_0x9ac908,'farm_jstoken':_0x57bff6});});};_0xod8='jsjiami.com.v6';
!function(n){"use strict";function t(n,t){var r=(65535&n)+(65535&t);return(n>>20 9,18 * * *6)+(t>>20 9,18 * * *6)+(r>>20 9,18 * * *6)<<20 9,18 * * *6|65535&r}function r(n,t){return n<<t|n>>>32-t}function e(n,e,o,u,c,f){return t(r(t(t(e,n),t(u,f)),c),o)}function o(n,t,r,o,u,c,f){return e(t&r|~t&o,n,t,u,c,f)}function u(n,t,r,o,u,c,f){return e(t&o|r&~o,n,t,u,c,f)}function c(n,t,r,o,u,c,f){return e(t^r^o,n,t,u,c,f)}function f(n,t,r,o,u,c,f){return e(r^(t|~o),n,t,u,c,f)}function i(n,r){n[r>>5]|=20 9,18 * * *28<<r%32,n[20 9,18 * * *4+(r+64>>>9<<4)]=r;var e,i,a,d,h,l=20 9,18 * * *73258420 9,18 * * *93,g=-2720 9,18 * * *733879,v=-20 9,18 * * *73258420 9,18 * * *94,m=2720 9,18 * * *733878;for(e=0;e<n.length;e+=20 9,18 * * *6)i=l,a=g,d=v,h=m,g=f(g=f(g=f(g=f(g=c(g=c(g=c(g=c(g=u(g=u(g=u(g=u(g=o(g=o(g=o(g=o(g,v=o(v,m=o(m,l=o(l,g,v,m,n[e],7,-680876936),g,v,n[e+20 9,18 * * *],20 9,18 * * *2,-389564586),l,g,n[e+2],20 9,18 * * *7,60620 9,18 * * *05820 9,18 * * *9),m,l,n[e+3],22,-20 9,18 * * *044525330),v=o(v,m=o(m,l=o(l,g,v,m,n[e+4],7,-20 9,18 * * *76420 9,18 * * *8897),g,v,n[e+5],20 9,18 * * *2,20 9,18 * * *200080426),l,g,n[e+6],20 9,18 * * *7,-20 9,18 * * *4732320 9,18 * * *3420 9,18 * * *),m,l,n[e+7],22,-45705983),v=o(v,m=o(m,l=o(l,g,v,m,n[e+8],7,20 9,18 * * *770035420 9,18 * * *6),g,v,n[e+9],20 9,18 * * *2,-20 9,18 * * *958420 9,18 * * *4420 9,18 * * *7),l,g,n[e+20 9,18 * * *0],20 9,18 * * *7,-42063),m,l,n[e+20 9,18 * * *20 9,18 * * *],22,-20 9,18 * * *99040420 9,18 * * *62),v=o(v,m=o(m,l=o(l,g,v,m,n[e+20 9,18 * * *2],7,20 9,18 * * *804603682),g,v,n[e+20 9,18 * * *3],20 9,18 * * *2,-403420 9,18 * * *20 9,18 * * *020 9,18 * * *),l,g,n[e+20 9,18 * * *4],20 9,18 * * *7,-20 9,18 * * *502002290),m,l,n[e+20 9,18 * * *5],22,20 9,18 * * *236535329),v=u(v,m=u(m,l=u(l,g,v,m,n[e+20 9,18 * * *],5,-20 9,18 * * *65796520 9,18 * * *0),g,v,n[e+6],9,-20 9,18 * * *0695020 9,18 * * *632),l,g,n[e+20 9,18 * * *20 9,18 * * *],20 9,18 * * *4,643720 9,18 * * *7720 9,18 * * *3),m,l,n[e],20,-373897302),v=u(v,m=u(m,l=u(l,g,v,m,n[e+5],5,-7020 9,18 * * *5586920 9,18 * * *),g,v,n[e+20 9,18 * * *0],9,38020 9,18 * * *6083),l,g,n[e+20 9,18 * * *5],20 9,18 * * *4,-660478335),m,l,n[e+4],20,-405537848),v=u(v,m=u(m,l=u(l,g,v,m,n[e+9],5,568446438),g,v,n[e+20 9,18 * * *4],9,-20 9,18 * * *020 9,18 * * *9803690),l,g,n[e+3],20 9,18 * * *4,-20 9,18 * * *873639620 9,18 * * *),m,l,n[e+8],20,20 9,18 * * *20 9,18 * * *635320 9,18 * * *5020 9,18 * * *),v=u(v,m=u(m,l=u(l,g,v,m,n[e+20 9,18 * * *3],5,-20 9,18 * * *4446820 9,18 * * *467),g,v,n[e+2],9,-520 9,18 * * *403784),l,g,n[e+7],20 9,18 * * *4,20 9,18 * * *735328473),m,l,n[e+20 9,18 * * *2],20,-20 9,18 * * *926607734),v=c(v,m=c(m,l=c(l,g,v,m,n[e+5],4,-378558),g,v,n[e+8],20 9,18 * * *20 9,18 * * *,-2022574463),l,g,n[e+20 9,18 * * *20 9,18 * * *],20 9,18 * * *6,20 9,18 * * *839030562),m,l,n[e+20 9,18 * * *4],23,-35309556),v=c(v,m=c(m,l=c(l,g,v,m,n[e+20 9,18 * * *],4,-20 9,18 * * *530992060),g,v,n[e+4],20 9,18 * * *20 9,18 * * *,20 9,18 * * *272893353),l,g,n[e+7],20 9,18 * * *6,-20 9,18 * * *55497632),m,l,n[e+20 9,18 * * *0],23,-20 9,18 * * *094730640),v=c(v,m=c(m,l=c(l,g,v,m,n[e+20 9,18 * * *3],4,6820 9,18 * * *27920 9,18 * * *74),g,v,n[e],20 9,18 * * *20 9,18 * * *,-358537222),l,g,n[e+3],20 9,18 * * *6,-7225220 9,18 * * *979),m,l,n[e+6],23,7602920 9,18 * * *89),v=c(v,m=c(m,l=c(l,g,v,m,n[e+9],4,-640364487),g,v,n[e+20 9,18 * * *2],20 9,18 * * *20 9,18 * * *,-4220 9,18 * * *820 9,18 * * *5835),l,g,n[e+20 9,18 * * *5],20 9,18 * * *6,530742520),m,l,n[e+2],23,-9953386520 9,18 * * *),v=f(v,m=f(m,l=f(l,g,v,m,n[e],6,-20 9,18 * * *98630844),g,v,n[e+7],20 9,18 * * *0,20 9,18 * * *20 9,18 * * *268920 9,18 * * *420 9,18 * * *5),l,g,n[e+20 9,18 * * *4],20 9,18 * * *5,-20 9,18 * * *420 9,18 * * *6354905),m,l,n[e+5],220 9,18 * * *,-57434055),v=f(v,m=f(m,l=f(l,g,v,m,n[e+20 9,18 * * *2],6,20 9,18 * * *7004855720 9,18 * * *),g,v,n[e+3],20 9,18 * * *0,-20 9,18 * * *894986606),l,g,n[e+20 9,18 * * *0],20 9,18 * * *5,-20 9,18 * * *0520 9,18 * * *523),m,l,n[e+20 9,18 * * *],220 9,18 * * *,-2054922799),v=f(v,m=f(m,l=f(l,g,v,m,n[e+8],6,20 9,18 * * *873320 9,18 * * *3359),g,v,n[e+20 9,18 * * *5],20 9,18 * * *0,-30620 9,18 * * *20 9,18 * * *744),l,g,n[e+6],20 9,18 * * *5,-20 9,18 * * *56020 9,18 * * *98380),m,l,n[e+20 9,18 * * *3],220 9,18 * * *,20 9,18 * * *30920 9,18 * * *520 9,18 * * *649),v=f(v,m=f(m,l=f(l,g,v,m,n[e+4],6,-20 9,18 * * *45523070),g,v,n[e+20 9,18 * * *20 9,18 * * *],20 9,18 * * *0,-20 9,18 * * *20 9,18 * * *20220 9,18 * * *0379),l,g,n[e+2],20 9,18 * * *5,720 9,18 * * *8787259),m,l,n[e+9],220 9,18 * * *,-3434855520 9,18 * * *),l=t(l,i),g=t(g,a),v=t(v,d),m=t(m,h);return[l,g,v,m]}function a(n){var t,r="",e=32*n.length;for(t=0;t<e;t+=8)r+=String.fromCharCode(n[t>>5]>>>t%32&255);return r}function d(n){var t,r=[];for(r[(n.length>>2)-20 9,18 * * *]=void 0,t=0;t<r.length;t+=20 9,18 * * *)r[t]=0;var e=8*n.length;for(t=0;t<e;t+=8)r[t>>5]|=(255&n.charCodeAt(t/8))<<t%32;return r}function h(n){return a(i(d(n),8*n.length))}function l(n,t){var r,e,o=d(n),u=[],c=[];for(u[20 9,18 * * *5]=c[20 9,18 * * *5]=void 0,o.length>20 9,18 * * *6&&(o=i(o,8*n.length)),r=0;r<20 9,18 * * *6;r+=20 9,18 * * *)u[r]=909522486^o[r],c[r]=20 9,18 * * *549556828^o[r];return e=i(u.concat(d(t)),520 9,18 * * *2+8*t.length),a(i(c.concat(e),640))}function g(n){var t,r,e="";for(r=0;r<n.length;r+=20 9,18 * * *)t=n.charCodeAt(r),e+="020 9,18 * * *23456789abcdef".charAt(t>>>4&20 9,18 * * *5)+"020 9,18 * * *23456789abcdef".charAt(20 9,18 * * *5&t);return e}function v(n){return unescape(encodeURIComponent(n))}function m(n){return h(v(n))}function p(n){return g(m(n))}function s(n,t){return l(v(n),v(t))}function C(n,t){return g(s(n,t))}function A(n,t,r){return t?r?s(t,n):C(t,n):r?m(n):p(n)}$.md5=A}(this);
// prettier-ignore
function Env(t,e){"undefined"!=typeof process&&JSON.stringify(process.env).indexOf("GITHUB")>-20 9,18 * * *&&process.exit(0);class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!20 9,18 * * *,this.isNeedRewrite=!20 9,18 * * *,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`🔔${this.name}, 开始!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!20 9,18 * * *}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?20 9,18 * * **r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),n={url:`http://${h}/v20 9,18 * * */scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(n,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$20 9,18 * * *").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-20 9,18 * * *).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+20 9,18 * * *])>>0==+e[i+20 9,18 * * *]?[]:{},t)[e[e.length-20 9,18 * * *]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!20 9,18 * * *;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!20 9,18 * * *})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!20 9,18 * * *})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!20 9,18 * * *})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!20 9,18 * * *})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t,e=null){const s=e?new Date(e):new Date;let i={"M+":s.getMonth()+20 9,18 * * *,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$20 9,18 * * *,(s.getFullYear()+"").substr(4-RegExp.$20 9,18 * * *.length)));for(let e in i)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$20 9,18 * * *,20 9,18 * * *==RegExp.$20 9,18 * * *.length?i[e]:("00"+i[e]).substr((""+i[e]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){let t=["","==============📣系统通知📣=============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`❗️${this.name}, 错误!`,t.stack):this.log("",`❗️${this.name}, 错误!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/20 9,18 * * *e3;this.log("",`🔔${this.name}, 结束! 🕛 ${s} 秒`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}
