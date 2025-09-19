((e, t, r, n, o, a, i, s) => {
  let l = document.documentElement,
    u = ["light", "dark"];
  function c(t) {
    var r;
    (Array.isArray(e) ? e : [e]).forEach((e) => {
      let r = "class" === e,
        n = r && a ? o.map((e) => a[e] || e) : o;
      r
        ? (l.classList.remove(...n), l.classList.add(a && a[t] ? a[t] : t))
        : l.setAttribute(e, t);
    }),
      (r = t),
      s && u.includes(r) && (l.style.colorScheme = r);
  }
  if (n) c(n);
  else
    try {
      let e = localStorage.getItem(t) || r,
        n =
          i && "system" === e
            ? window.matchMedia("(prefers-color-scheme: dark)").matches
              ? "dark"
              : "light"
            : e;
      c(n);
    } catch (e) {}
})("class", "theme", "light", null, ["light", "dark"], null, false, true);
