(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(".list{display:grid;grid-gap:1em;grid-template-columns:repeat(7,1fr)}.day{color:gray;border-radius:10%;padding:.5em}.day:hover{background-color:#d3d3d3}.select{color:#000;background-color:#d3d3d3}")),document.head.appendChild(e)}}catch(d){console.error("vite-plugin-css-injected-by-js",d)}})();
import { defineComponent as K, mergeModels as Z, useModel as ee, computed as S, openBlock as D, createElementBlock as v, Fragment as q, renderList as H, toDisplayString as Q, normalizeClass as te, unref as ne } from "vue";
const J = 6048e5, re = 864e5, X = Symbol.for("constructDateFrom");
function w(t, e) {
  return typeof t == "function" ? t(e) : t && typeof t == "object" && X in t ? t[X](e) : t instanceof Date ? new t.constructor(e) : new Date(e);
}
function h(t, e) {
  return w(e || t, t);
}
function N(t, e, n) {
  const r = h(t, n == null ? void 0 : n.in);
  return isNaN(e) ? w(t, NaN) : (e && r.setDate(r.getDate() + e), r);
}
function ae(t, e, n) {
  const r = h(t, n == null ? void 0 : n.in);
  if (isNaN(e)) return w(t, NaN);
  if (!e)
    return r;
  const a = r.getDate(), i = w(t, r.getTime());
  i.setMonth(r.getMonth() + e + 1, 0);
  const u = i.getDate();
  return a >= u ? i : (r.setFullYear(
    i.getFullYear(),
    i.getMonth(),
    a
  ), r);
}
function L(t, e, n) {
  const {
    years: r = 0,
    months: a = 0,
    weeks: i = 0,
    days: u = 0,
    hours: s = 0,
    minutes: d = 0,
    seconds: c = 0
  } = e, f = h(t, n == null ? void 0 : n.in), g = a || r ? ae(f, a + r * 12) : f, b = u || i ? N(g, u + i * 7) : g, M = d + s * 60, l = (c + M * 60) * 1e3;
  return w(t, +b + l);
}
let ie = {};
function E() {
  return ie;
}
function W(t, e) {
  var s, d, c, f;
  const n = E(), r = (e == null ? void 0 : e.weekStartsOn) ?? ((d = (s = e == null ? void 0 : e.locale) == null ? void 0 : s.options) == null ? void 0 : d.weekStartsOn) ?? n.weekStartsOn ?? ((f = (c = n.locale) == null ? void 0 : c.options) == null ? void 0 : f.weekStartsOn) ?? 0, a = h(t, e == null ? void 0 : e.in), i = a.getDay(), u = (i < r ? 7 : 0) + i - r;
  return a.setDate(a.getDate() - u), a.setHours(0, 0, 0, 0), a;
}
function Y(t, e) {
  return W(t, { ...e, weekStartsOn: 1 });
}
function $(t, e) {
  const n = h(t, e == null ? void 0 : e.in), r = n.getFullYear(), a = w(n, 0);
  a.setFullYear(r + 1, 0, 4), a.setHours(0, 0, 0, 0);
  const i = Y(a), u = w(n, 0);
  u.setFullYear(r, 0, 4), u.setHours(0, 0, 0, 0);
  const s = Y(u);
  return n.getTime() >= i.getTime() ? r + 1 : n.getTime() >= s.getTime() ? r : r - 1;
}
function A(t) {
  const e = h(t), n = new Date(
    Date.UTC(
      e.getFullYear(),
      e.getMonth(),
      e.getDate(),
      e.getHours(),
      e.getMinutes(),
      e.getSeconds(),
      e.getMilliseconds()
    )
  );
  return n.setUTCFullYear(e.getFullYear()), +t - +n;
}
function p(t, ...e) {
  const n = w.bind(
    null,
    t || e.find((r) => typeof r == "object")
  );
  return e.map(n);
}
function T(t, e) {
  const n = h(t, e == null ? void 0 : e.in);
  return n.setHours(0, 0, 0, 0), n;
}
function se(t, e, n) {
  const [r, a] = p(
    n == null ? void 0 : n.in,
    t,
    e
  ), i = T(r), u = T(a), s = +i - A(i), d = +u - A(u);
  return Math.round((s - d) / re);
}
function ue(t, e) {
  const n = $(t, e), r = w(t, 0);
  return r.setFullYear(n, 0, 4), r.setHours(0, 0, 0, 0), Y(r);
}
function oe(t, e) {
  const n = +h(t) - +h(e);
  return n > 0 ? -1 : n < 0 ? 1 : n;
}
function ce(t, e, n) {
  const [r, a] = p(
    n == null ? void 0 : n.in,
    t,
    e
  );
  return +T(r) == +T(a);
}
function de(t) {
  return t instanceof Date || typeof t == "object" && Object.prototype.toString.call(t) === "[object Date]";
}
function fe(t) {
  return !(!de(t) && typeof t != "number" || isNaN(+h(t)));
}
function he(t, e) {
  const n = h(t, e == null ? void 0 : e.in);
  return n.setFullYear(n.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
const le = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds"
  },
  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours"
  },
  xHours: {
    one: "1 hour",
    other: "{{count}} hours"
  },
  xDays: {
    one: "1 day",
    other: "{{count}} days"
  },
  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks"
  },
  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months"
  },
  xMonths: {
    one: "1 month",
    other: "{{count}} months"
  },
  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years"
  },
  xYears: {
    one: "1 year",
    other: "{{count}} years"
  },
  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years"
  },
  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years"
  }
}, me = (t, e, n) => {
  let r;
  const a = le[t];
  return typeof a == "string" ? r = a : e === 1 ? r = a.one : r = a.other.replace("{{count}}", e.toString()), n != null && n.addSuffix ? n.comparison && n.comparison > 0 ? "in " + r : r + " ago" : r;
};
function C(t) {
  return (e = {}) => {
    const n = e.width ? String(e.width) : t.defaultWidth;
    return t.formats[n] || t.formats[t.defaultWidth];
  };
}
const ge = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, we = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, ye = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, be = {
  date: C({
    formats: ge,
    defaultWidth: "full"
  }),
  time: C({
    formats: we,
    defaultWidth: "full"
  }),
  dateTime: C({
    formats: ye,
    defaultWidth: "full"
  })
}, Me = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, Pe = (t, e, n, r) => Me[t];
function k(t) {
  return (e, n) => {
    const r = n != null && n.context ? String(n.context) : "standalone";
    let a;
    if (r === "formatting" && t.formattingValues) {
      const u = t.defaultFormattingWidth || t.defaultWidth, s = n != null && n.width ? String(n.width) : u;
      a = t.formattingValues[s] || t.formattingValues[u];
    } else {
      const u = t.defaultWidth, s = n != null && n.width ? String(n.width) : t.defaultWidth;
      a = t.values[s] || t.values[u];
    }
    const i = t.argumentCallback ? t.argumentCallback(e) : e;
    return a[i];
  };
}
const Oe = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, De = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, ve = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ],
  wide: [
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
  ]
}, ke = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ]
}, xe = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }
}, We = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  }
}, Se = (t, e) => {
  const n = Number(t), r = n % 100;
  if (r > 20 || r < 10)
    switch (r % 10) {
      case 1:
        return n + "st";
      case 2:
        return n + "nd";
      case 3:
        return n + "rd";
    }
  return n + "th";
}, Ye = {
  ordinalNumber: Se,
  era: k({
    values: Oe,
    defaultWidth: "wide"
  }),
  quarter: k({
    values: De,
    defaultWidth: "wide",
    argumentCallback: (t) => t - 1
  }),
  month: k({
    values: ve,
    defaultWidth: "wide"
  }),
  day: k({
    values: ke,
    defaultWidth: "wide"
  }),
  dayPeriod: k({
    values: xe,
    defaultWidth: "wide",
    formattingValues: We,
    defaultFormattingWidth: "wide"
  })
};
function x(t) {
  return (e, n = {}) => {
    const r = n.width, a = r && t.matchPatterns[r] || t.matchPatterns[t.defaultMatchWidth], i = e.match(a);
    if (!i)
      return null;
    const u = i[0], s = r && t.parsePatterns[r] || t.parsePatterns[t.defaultParseWidth], d = Array.isArray(s) ? Ee(s, (g) => g.test(u)) : (
      // [TODO] -- I challenge you to fix the type
      Te(s, (g) => g.test(u))
    );
    let c;
    c = t.valueCallback ? t.valueCallback(d) : d, c = n.valueCallback ? (
      // [TODO] -- I challenge you to fix the type
      n.valueCallback(c)
    ) : c;
    const f = e.slice(u.length);
    return { value: c, rest: f };
  };
}
function Te(t, e) {
  for (const n in t)
    if (Object.prototype.hasOwnProperty.call(t, n) && e(t[n]))
      return n;
}
function Ee(t, e) {
  for (let n = 0; n < t.length; n++)
    if (e(t[n]))
      return n;
}
function Fe(t) {
  return (e, n = {}) => {
    const r = e.match(t.matchPattern);
    if (!r) return null;
    const a = r[0], i = e.match(t.parsePattern);
    if (!i) return null;
    let u = t.valueCallback ? t.valueCallback(i[0]) : i[0];
    u = n.valueCallback ? n.valueCallback(u) : u;
    const s = e.slice(a.length);
    return { value: u, rest: s };
  };
}
const Ce = /^(\d+)(th|st|nd|rd)?/i, Ne = /\d+/i, _e = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, qe = {
  any: [/^b/i, /^(a|c)/i]
}, He = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, Qe = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, Xe = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, Le = {
  narrow: [
    /^j/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^j/i,
    /^j/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ],
  any: [
    /^ja/i,
    /^f/i,
    /^mar/i,
    /^ap/i,
    /^may/i,
    /^jun/i,
    /^jul/i,
    /^au/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ]
}, Ae = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, Be = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, je = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, Ge = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
}, Ve = {
  ordinalNumber: Fe({
    matchPattern: Ce,
    parsePattern: Ne,
    valueCallback: (t) => parseInt(t, 10)
  }),
  era: x({
    matchPatterns: _e,
    defaultMatchWidth: "wide",
    parsePatterns: qe,
    defaultParseWidth: "any"
  }),
  quarter: x({
    matchPatterns: He,
    defaultMatchWidth: "wide",
    parsePatterns: Qe,
    defaultParseWidth: "any",
    valueCallback: (t) => t + 1
  }),
  month: x({
    matchPatterns: Xe,
    defaultMatchWidth: "wide",
    parsePatterns: Le,
    defaultParseWidth: "any"
  }),
  day: x({
    matchPatterns: Ae,
    defaultMatchWidth: "wide",
    parsePatterns: Be,
    defaultParseWidth: "any"
  }),
  dayPeriod: x({
    matchPatterns: je,
    defaultMatchWidth: "any",
    parsePatterns: Ge,
    defaultParseWidth: "any"
  })
}, Re = {
  code: "en-US",
  formatDistance: me,
  formatLong: be,
  formatRelative: Pe,
  localize: Ye,
  match: Ve,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function Ie(t, e) {
  const n = h(t, e == null ? void 0 : e.in);
  return se(n, he(n)) + 1;
}
function Je(t, e) {
  const n = h(t, e == null ? void 0 : e.in), r = +Y(n) - +ue(n);
  return Math.round(r / J) + 1;
}
function z(t, e) {
  var f, g, b, M;
  const n = h(t, e == null ? void 0 : e.in), r = n.getFullYear(), a = E(), i = (e == null ? void 0 : e.firstWeekContainsDate) ?? ((g = (f = e == null ? void 0 : e.locale) == null ? void 0 : f.options) == null ? void 0 : g.firstWeekContainsDate) ?? a.firstWeekContainsDate ?? ((M = (b = a.locale) == null ? void 0 : b.options) == null ? void 0 : M.firstWeekContainsDate) ?? 1, u = w((e == null ? void 0 : e.in) || t, 0);
  u.setFullYear(r + 1, 0, i), u.setHours(0, 0, 0, 0);
  const s = W(u, e), d = w((e == null ? void 0 : e.in) || t, 0);
  d.setFullYear(r, 0, i), d.setHours(0, 0, 0, 0);
  const c = W(d, e);
  return +n >= +s ? r + 1 : +n >= +c ? r : r - 1;
}
function $e(t, e) {
  var s, d, c, f;
  const n = E(), r = (e == null ? void 0 : e.firstWeekContainsDate) ?? ((d = (s = e == null ? void 0 : e.locale) == null ? void 0 : s.options) == null ? void 0 : d.firstWeekContainsDate) ?? n.firstWeekContainsDate ?? ((f = (c = n.locale) == null ? void 0 : c.options) == null ? void 0 : f.firstWeekContainsDate) ?? 1, a = z(t, e), i = w((e == null ? void 0 : e.in) || t, 0);
  return i.setFullYear(a, 0, r), i.setHours(0, 0, 0, 0), W(i, e);
}
function pe(t, e) {
  const n = h(t, e == null ? void 0 : e.in), r = +W(n, e) - +$e(n, e);
  return Math.round(r / J) + 1;
}
function o(t, e) {
  const n = t < 0 ? "-" : "", r = Math.abs(t).toString().padStart(e, "0");
  return n + r;
}
const y = {
  // Year
  y(t, e) {
    const n = t.getFullYear(), r = n > 0 ? n : 1 - n;
    return o(e === "yy" ? r % 100 : r, e.length);
  },
  // Month
  M(t, e) {
    const n = t.getMonth();
    return e === "M" ? String(n + 1) : o(n + 1, 2);
  },
  // Day of the month
  d(t, e) {
    return o(t.getDate(), e.length);
  },
  // AM or PM
  a(t, e) {
    const n = t.getHours() / 12 >= 1 ? "pm" : "am";
    switch (e) {
      case "a":
      case "aa":
        return n.toUpperCase();
      case "aaa":
        return n;
      case "aaaaa":
        return n[0];
      case "aaaa":
      default:
        return n === "am" ? "a.m." : "p.m.";
    }
  },
  // Hour [1-12]
  h(t, e) {
    return o(t.getHours() % 12 || 12, e.length);
  },
  // Hour [0-23]
  H(t, e) {
    return o(t.getHours(), e.length);
  },
  // Minute
  m(t, e) {
    return o(t.getMinutes(), e.length);
  },
  // Second
  s(t, e) {
    return o(t.getSeconds(), e.length);
  },
  // Fraction of second
  S(t, e) {
    const n = e.length, r = t.getMilliseconds(), a = Math.trunc(
      r * Math.pow(10, n - 3)
    );
    return o(a, e.length);
  }
}, O = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, B = {
  // Era
  G: function(t, e, n) {
    const r = t.getFullYear() > 0 ? 1 : 0;
    switch (e) {
      case "G":
      case "GG":
      case "GGG":
        return n.era(r, { width: "abbreviated" });
      case "GGGGG":
        return n.era(r, { width: "narrow" });
      case "GGGG":
      default:
        return n.era(r, { width: "wide" });
    }
  },
  // Year
  y: function(t, e, n) {
    if (e === "yo") {
      const r = t.getFullYear(), a = r > 0 ? r : 1 - r;
      return n.ordinalNumber(a, { unit: "year" });
    }
    return y.y(t, e);
  },
  // Local week-numbering year
  Y: function(t, e, n, r) {
    const a = z(t, r), i = a > 0 ? a : 1 - a;
    if (e === "YY") {
      const u = i % 100;
      return o(u, 2);
    }
    return e === "Yo" ? n.ordinalNumber(i, { unit: "year" }) : o(i, e.length);
  },
  // ISO week-numbering year
  R: function(t, e) {
    const n = $(t);
    return o(n, e.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function(t, e) {
    const n = t.getFullYear();
    return o(n, e.length);
  },
  // Quarter
  Q: function(t, e, n) {
    const r = Math.ceil((t.getMonth() + 1) / 3);
    switch (e) {
      case "Q":
        return String(r);
      case "QQ":
        return o(r, 2);
      case "Qo":
        return n.ordinalNumber(r, { unit: "quarter" });
      case "QQQ":
        return n.quarter(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "QQQQQ":
        return n.quarter(r, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQ":
      default:
        return n.quarter(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone quarter
  q: function(t, e, n) {
    const r = Math.ceil((t.getMonth() + 1) / 3);
    switch (e) {
      case "q":
        return String(r);
      case "qq":
        return o(r, 2);
      case "qo":
        return n.ordinalNumber(r, { unit: "quarter" });
      case "qqq":
        return n.quarter(r, {
          width: "abbreviated",
          context: "standalone"
        });
      case "qqqqq":
        return n.quarter(r, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqq":
      default:
        return n.quarter(r, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Month
  M: function(t, e, n) {
    const r = t.getMonth();
    switch (e) {
      case "M":
      case "MM":
        return y.M(t, e);
      case "Mo":
        return n.ordinalNumber(r + 1, { unit: "month" });
      case "MMM":
        return n.month(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "MMMMM":
        return n.month(r, {
          width: "narrow",
          context: "formatting"
        });
      case "MMMM":
      default:
        return n.month(r, { width: "wide", context: "formatting" });
    }
  },
  // Stand-alone month
  L: function(t, e, n) {
    const r = t.getMonth();
    switch (e) {
      case "L":
        return String(r + 1);
      case "LL":
        return o(r + 1, 2);
      case "Lo":
        return n.ordinalNumber(r + 1, { unit: "month" });
      case "LLL":
        return n.month(r, {
          width: "abbreviated",
          context: "standalone"
        });
      case "LLLLL":
        return n.month(r, {
          width: "narrow",
          context: "standalone"
        });
      case "LLLL":
      default:
        return n.month(r, { width: "wide", context: "standalone" });
    }
  },
  // Local week of year
  w: function(t, e, n, r) {
    const a = pe(t, r);
    return e === "wo" ? n.ordinalNumber(a, { unit: "week" }) : o(a, e.length);
  },
  // ISO week of year
  I: function(t, e, n) {
    const r = Je(t);
    return e === "Io" ? n.ordinalNumber(r, { unit: "week" }) : o(r, e.length);
  },
  // Day of the month
  d: function(t, e, n) {
    return e === "do" ? n.ordinalNumber(t.getDate(), { unit: "date" }) : y.d(t, e);
  },
  // Day of year
  D: function(t, e, n) {
    const r = Ie(t);
    return e === "Do" ? n.ordinalNumber(r, { unit: "dayOfYear" }) : o(r, e.length);
  },
  // Day of week
  E: function(t, e, n) {
    const r = t.getDay();
    switch (e) {
      case "E":
      case "EE":
      case "EEE":
        return n.day(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "EEEEE":
        return n.day(r, {
          width: "narrow",
          context: "formatting"
        });
      case "EEEEEE":
        return n.day(r, {
          width: "short",
          context: "formatting"
        });
      case "EEEE":
      default:
        return n.day(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Local day of week
  e: function(t, e, n, r) {
    const a = t.getDay(), i = (a - r.weekStartsOn + 8) % 7 || 7;
    switch (e) {
      case "e":
        return String(i);
      case "ee":
        return o(i, 2);
      case "eo":
        return n.ordinalNumber(i, { unit: "day" });
      case "eee":
        return n.day(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "eeeee":
        return n.day(a, {
          width: "narrow",
          context: "formatting"
        });
      case "eeeeee":
        return n.day(a, {
          width: "short",
          context: "formatting"
        });
      case "eeee":
      default:
        return n.day(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function(t, e, n, r) {
    const a = t.getDay(), i = (a - r.weekStartsOn + 8) % 7 || 7;
    switch (e) {
      case "c":
        return String(i);
      case "cc":
        return o(i, e.length);
      case "co":
        return n.ordinalNumber(i, { unit: "day" });
      case "ccc":
        return n.day(a, {
          width: "abbreviated",
          context: "standalone"
        });
      case "ccccc":
        return n.day(a, {
          width: "narrow",
          context: "standalone"
        });
      case "cccccc":
        return n.day(a, {
          width: "short",
          context: "standalone"
        });
      case "cccc":
      default:
        return n.day(a, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function(t, e, n) {
    const r = t.getDay(), a = r === 0 ? 7 : r;
    switch (e) {
      case "i":
        return String(a);
      case "ii":
        return o(a, e.length);
      case "io":
        return n.ordinalNumber(a, { unit: "day" });
      case "iii":
        return n.day(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "iiiii":
        return n.day(r, {
          width: "narrow",
          context: "formatting"
        });
      case "iiiiii":
        return n.day(r, {
          width: "short",
          context: "formatting"
        });
      case "iiii":
      default:
        return n.day(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM or PM
  a: function(t, e, n) {
    const a = t.getHours() / 12 >= 1 ? "pm" : "am";
    switch (e) {
      case "a":
      case "aa":
        return n.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return n.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return n.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return n.dayPeriod(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM, PM, midnight, noon
  b: function(t, e, n) {
    const r = t.getHours();
    let a;
    switch (r === 12 ? a = O.noon : r === 0 ? a = O.midnight : a = r / 12 >= 1 ? "pm" : "am", e) {
      case "b":
      case "bb":
        return n.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return n.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return n.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return n.dayPeriod(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function(t, e, n) {
    const r = t.getHours();
    let a;
    switch (r >= 17 ? a = O.evening : r >= 12 ? a = O.afternoon : r >= 4 ? a = O.morning : a = O.night, e) {
      case "B":
      case "BB":
      case "BBB":
        return n.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return n.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return n.dayPeriod(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Hour [1-12]
  h: function(t, e, n) {
    if (e === "ho") {
      let r = t.getHours() % 12;
      return r === 0 && (r = 12), n.ordinalNumber(r, { unit: "hour" });
    }
    return y.h(t, e);
  },
  // Hour [0-23]
  H: function(t, e, n) {
    return e === "Ho" ? n.ordinalNumber(t.getHours(), { unit: "hour" }) : y.H(t, e);
  },
  // Hour [0-11]
  K: function(t, e, n) {
    const r = t.getHours() % 12;
    return e === "Ko" ? n.ordinalNumber(r, { unit: "hour" }) : o(r, e.length);
  },
  // Hour [1-24]
  k: function(t, e, n) {
    let r = t.getHours();
    return r === 0 && (r = 24), e === "ko" ? n.ordinalNumber(r, { unit: "hour" }) : o(r, e.length);
  },
  // Minute
  m: function(t, e, n) {
    return e === "mo" ? n.ordinalNumber(t.getMinutes(), { unit: "minute" }) : y.m(t, e);
  },
  // Second
  s: function(t, e, n) {
    return e === "so" ? n.ordinalNumber(t.getSeconds(), { unit: "second" }) : y.s(t, e);
  },
  // Fraction of second
  S: function(t, e) {
    return y.S(t, e);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(t, e, n) {
    const r = t.getTimezoneOffset();
    if (r === 0)
      return "Z";
    switch (e) {
      case "X":
        return G(r);
      case "XXXX":
      case "XX":
        return P(r);
      case "XXXXX":
      case "XXX":
      default:
        return P(r, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(t, e, n) {
    const r = t.getTimezoneOffset();
    switch (e) {
      case "x":
        return G(r);
      case "xxxx":
      case "xx":
        return P(r);
      case "xxxxx":
      case "xxx":
      default:
        return P(r, ":");
    }
  },
  // Timezone (GMT)
  O: function(t, e, n) {
    const r = t.getTimezoneOffset();
    switch (e) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + j(r, ":");
      case "OOOO":
      default:
        return "GMT" + P(r, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(t, e, n) {
    const r = t.getTimezoneOffset();
    switch (e) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + j(r, ":");
      case "zzzz":
      default:
        return "GMT" + P(r, ":");
    }
  },
  // Seconds timestamp
  t: function(t, e, n) {
    const r = Math.trunc(+t / 1e3);
    return o(r, e.length);
  },
  // Milliseconds timestamp
  T: function(t, e, n) {
    return o(+t, e.length);
  }
};
function j(t, e = "") {
  const n = t > 0 ? "-" : "+", r = Math.abs(t), a = Math.trunc(r / 60), i = r % 60;
  return i === 0 ? n + String(a) : n + String(a) + e + o(i, 2);
}
function G(t, e) {
  return t % 60 === 0 ? (t > 0 ? "-" : "+") + o(Math.abs(t) / 60, 2) : P(t, e);
}
function P(t, e = "") {
  const n = t > 0 ? "-" : "+", r = Math.abs(t), a = o(Math.trunc(r / 60), 2), i = o(r % 60, 2);
  return n + a + e + i;
}
const V = (t, e) => {
  switch (t) {
    case "P":
      return e.date({ width: "short" });
    case "PP":
      return e.date({ width: "medium" });
    case "PPP":
      return e.date({ width: "long" });
    case "PPPP":
    default:
      return e.date({ width: "full" });
  }
}, U = (t, e) => {
  switch (t) {
    case "p":
      return e.time({ width: "short" });
    case "pp":
      return e.time({ width: "medium" });
    case "ppp":
      return e.time({ width: "long" });
    case "pppp":
    default:
      return e.time({ width: "full" });
  }
}, ze = (t, e) => {
  const n = t.match(/(P+)(p+)?/) || [], r = n[1], a = n[2];
  if (!a)
    return V(t, e);
  let i;
  switch (r) {
    case "P":
      i = e.dateTime({ width: "short" });
      break;
    case "PP":
      i = e.dateTime({ width: "medium" });
      break;
    case "PPP":
      i = e.dateTime({ width: "long" });
      break;
    case "PPPP":
    default:
      i = e.dateTime({ width: "full" });
      break;
  }
  return i.replace("{{date}}", V(r, e)).replace("{{time}}", U(a, e));
}, Ue = {
  p: U,
  P: ze
}, Ke = /^D+$/, Ze = /^Y+$/, et = ["D", "DD", "YY", "YYYY"];
function tt(t) {
  return Ke.test(t);
}
function nt(t) {
  return Ze.test(t);
}
function rt(t, e, n) {
  const r = at(t, e, n);
  if (console.warn(r), et.includes(t)) throw new RangeError(r);
}
function at(t, e, n) {
  const r = t[0] === "Y" ? "years" : "days of the month";
  return `Use \`${t.toLowerCase()}\` instead of \`${t}\` (in \`${e}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const it = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, st = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, ut = /^'([^]*?)'?$/, ot = /''/g, ct = /[a-zA-Z]/;
function R(t, e, n) {
  var f, g, b, M;
  const r = E(), a = r.locale ?? Re, i = r.firstWeekContainsDate ?? ((g = (f = r.locale) == null ? void 0 : f.options) == null ? void 0 : g.firstWeekContainsDate) ?? 1, u = r.weekStartsOn ?? ((M = (b = r.locale) == null ? void 0 : b.options) == null ? void 0 : M.weekStartsOn) ?? 0, s = h(t, n == null ? void 0 : n.in);
  if (!fe(s))
    throw new RangeError("Invalid time value");
  let d = e.match(st).map((m) => {
    const l = m[0];
    if (l === "p" || l === "P") {
      const F = Ue[l];
      return F(m, a.formatLong);
    }
    return m;
  }).join("").match(it).map((m) => {
    if (m === "''")
      return { isToken: !1, value: "'" };
    const l = m[0];
    if (l === "'")
      return { isToken: !1, value: dt(m) };
    if (B[l])
      return { isToken: !0, value: m };
    if (l.match(ct))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + l + "`"
      );
    return { isToken: !1, value: m };
  });
  a.localize.preprocessor && (d = a.localize.preprocessor(s, d));
  const c = {
    firstWeekContainsDate: i,
    weekStartsOn: u,
    locale: a
  };
  return d.map((m) => {
    if (!m.isToken) return m.value;
    const l = m.value;
    (nt(l) || tt(l)) && rt(l, e, String(t));
    const F = B[l[0]];
    return F(s, l, a.localize, c);
  }).join("");
}
function dt(t) {
  const e = t.match(ut);
  return e ? e[1].replace(ot, "'") : t;
}
function _(t, e) {
  return h(t, e == null ? void 0 : e.in).getDay();
}
function ft(t, e, n) {
  return N(t, -e, n);
}
function I(t, e, n) {
  let r = e - _(t, n);
  return r <= 0 && (r += 7), N(t, r, n);
}
function ht(t, e, n) {
  let r = _(t, n) - e;
  return r <= 0 && (r += 7), ft(t, r, n);
}
const lt = { class: "list" }, mt = ["onClick"], wt = /* @__PURE__ */ K({
  __name: "MainView",
  props: /* @__PURE__ */ Z({
    start: {},
    display: {}
  }, {
    modelValue: { default: /* @__PURE__ */ new Date() },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(t) {
    const e = t, n = ee(t, "modelValue"), r = S(
      () => i.value.map((s) => ({
        label: R(s, "d"),
        date: s
      }))
    ), a = S(
      () => i.value.filter((s, d) => d < 7).map((s) => R(s, "EEE"))
    ), i = S(() => {
      let s = e.display;
      _(s) !== e.start && (s = ht(s, e.start));
      const d = I(I(s, u.value), u.value), c = [s];
      for (let f = L(s, { days: 1 }); oe(f, d) >= 0; f = L(f, { days: 1 }))
        c.push(f);
      return c;
    }), u = S(() => (e.start - 1 + 7) % 7);
    return (s, d) => (D(), v("div", lt, [
      (D(!0), v(q, null, H(a.value, (c) => (D(), v("div", { key: c }, Q(c), 1))), 128)),
      (D(!0), v(q, null, H(r.value, (c) => (D(), v("div", {
        onClick: (f) => n.value = c.date,
        key: c.date.toISOString(),
        class: te(`day ${ne(ce)(c.date, n.value) ? "select" : ""}`)
      }, Q(c.label), 11, mt))), 128))
    ]));
  }
});
export {
  wt as App
};
